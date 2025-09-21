import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { 
      documentId, 
      belongingRating, 
      selectedCategory, 
      selectedTags, 
      customTags,
      action,
      step
    } = body

    // Get user from auth header or session
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authentication required', success: false },
        { status: 401 }
      )
    }

    // Extract user from token
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: userError } = await supabase.auth.getUser(token)
    
    if (userError || !user) {
      return NextResponse.json(
        { error: 'Invalid authentication', success: false },
        { status: 401 }
      )
    }

    if (!documentId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    switch (action) {
      case 'save_draft':
        // Save workflow as draft with real database operations
        const { data: draftData, error: draftError } = await supabase
          .from('workflow_sessions')
          .upsert({
            document_id: documentId,
            user_id: user.id,
            step: step || 'A',
            belonging_rating: belongingRating,
            selected_category_id: selectedCategory?.id,
            selected_tags: selectedTags || {},
            custom_tags: customTags || [],
            is_draft: true,
            completed_steps: [step || 'A'],
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'document_id,user_id'
          })
          .select()
          .single()

        if (draftError) {
          console.error('Draft save error:', draftError)
          return NextResponse.json(
            { error: 'Failed to save draft', success: false },
            { status: 500 }
          )
        }

        return NextResponse.json({
          message: 'Draft saved successfully',
          workflowId: draftData.id,
          savedAt: new Date().toISOString(),
          success: true
        })

      case 'submit':
        // Validate all required fields for submission
        if (!belongingRating || !selectedCategory || !selectedTags) {
          return NextResponse.json(
            { error: 'Incomplete workflow data', success: false },
            { status: 400 }
          )
        }

        // Submit complete workflow
        const { data: submitData, error: submitError } = await supabase
          .from('workflow_sessions')
          .upsert({
            document_id: documentId,
            user_id: user.id,
            step: 'complete',
            belonging_rating: belongingRating,
            selected_category_id: selectedCategory.id,
            selected_tags: selectedTags,
            custom_tags: customTags || [],
            is_draft: false,
            completed_steps: ['A', 'B', 'C'],
            completed_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'document_id,user_id'
          })
          .select()
          .single()

        if (submitError) {
          console.error('Submit error:', submitError)
          return NextResponse.json(
            { error: 'Failed to submit workflow', success: false },
            { status: 500 }
          )
        }

        return NextResponse.json({
          message: 'Workflow submitted successfully',
          workflowId: submitData.id,
          submittedAt: new Date().toISOString(),
          success: true
        })

      case 'validate':
        // Validate workflow step
        const errors: Record<string, string> = {}
        
        if (body.step === 'A' && !belongingRating) {
          errors.belongingRating = 'Please provide a relationship rating'
        }
        
        if (body.step === 'B' && !selectedCategory) {
          errors.selectedCategory = 'Please select a primary category'
        }
        
        if (body.step === 'C') {
          const requiredDimensions = ['authorship', 'disclosure-risk', 'intended-use']
          requiredDimensions.forEach(dim => {
            if (!selectedTags || !selectedTags[dim] || selectedTags[dim].length === 0) {
              errors[dim] = `Please select at least one ${dim.replace('-', ' ')} tag`
            }
          })
        }

        return NextResponse.json({
          valid: Object.keys(errors).length === 0,
          errors,
          success: true
        })

      default:
        return NextResponse.json(
          { error: 'Invalid action', success: false },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Workflow API Error:', error)
    return NextResponse.json(
      { error: 'Workflow operation failed', success: false },
      { status: 500 }
    )
  }
}