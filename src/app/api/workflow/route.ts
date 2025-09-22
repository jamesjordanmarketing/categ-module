import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    console.log('=== WORKFLOW API CALLED ===')
    const body = await request.json()
    console.log('Request body:', JSON.stringify(body, null, 2))
    
    const { 
      documentId, 
      belongingRating, 
      selectedCategory, 
      selectedTags, 
      customTags,
      action,
      step
    } = body
    
    console.log('Parsed values:', {
      documentId,
      belongingRating,
      selectedCategory: selectedCategory?.id || 'none',
      action,
      step
    })

    // Handle all UUID conversions from mock data to real UUIDs
    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    
    // Document ID conversion
    let realDocumentId = documentId
    if (documentId === 'doc-1' || !documentId.match(UUID_REGEX)) {
      realDocumentId = '550e8400-e29b-41d4-a716-446655440012' // "Complete Customer Onboarding System Blueprint"
      console.log('Converting mock document ID to real UUID:', documentId, '->', realDocumentId)
    }
    
    // Category ID conversion - Complete mapping for all 10 categories
    let realCategoryId = selectedCategory?.id
    if (realCategoryId && !realCategoryId.match(UUID_REGEX)) {
      const categoryMappings = {
        // Original categories (already exist in database)
        'complete-systems-&-methodologies': '550e8400-e29b-41d4-a716-446655440001',
        'proprietary-strategies-&-approaches': '550e8400-e29b-41d4-a716-446655440002',
        // New categories (added by migration)
        'process-documentation-&-workflows': '550e8400-e29b-41d4-a716-446655440013',
        'customer-insights-&-case-studies': '550e8400-e29b-41d4-a716-446655440014',
        'market-research-&-competitive-intelligence': '550e8400-e29b-41d4-a716-446655440015',
        'sales-enablement-&-customer-facing-content': '550e8400-e29b-41d4-a716-446655440016',
        'training-materials-&-educational-content': '550e8400-e29b-41d4-a716-446655440017',
        'knowledge-base-&-reference-materials': '550e8400-e29b-41d4-a716-446655440018',
        'communication-templates-&-messaging': '550e8400-e29b-41d4-a716-446655440019',
        'project-artifacts-&-deliverables': '550e8400-e29b-41d4-a716-446655440020',
        // Legacy mappings (for backward compatibility)
        'complete-systems': '550e8400-e29b-41d4-a716-446655440001',
        'proprietary-strategies': '550e8400-e29b-41d4-a716-446655440002',
        'process-documentation': '550e8400-e29b-41d4-a716-446655440013',
        'customer-insights': '550e8400-e29b-41d4-a716-446655440014',
        'market-research': '550e8400-e29b-41d4-a716-446655440015',
        'sales-enablement': '550e8400-e29b-41d4-a716-446655440016',
        'training-materials': '550e8400-e29b-41d4-a716-446655440017',
        'knowledge-base': '550e8400-e29b-41d4-a716-446655440018',
        'communication-templates': '550e8400-e29b-41d4-a716-446655440019',
        'project-artifacts': '550e8400-e29b-41d4-a716-446655440020'
      }
      realCategoryId = categoryMappings[realCategoryId] || '550e8400-e29b-41d4-a716-446655440001'
      console.log('Converting mock category ID to real UUID:', selectedCategory?.id, '->', realCategoryId)
    }
    
    console.log('UUID conversions applied:', {
      originalDocumentId: documentId,
      realDocumentId,
      originalCategoryId: selectedCategory?.id,
      realCategoryId
    })

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
    console.log('Token received:', token.substring(0, 50) + '...')
    
    // Create Supabase client with user's JWT token for RLS policies
    // Use server-side environment variables (fallback to NEXT_PUBLIC_ for compatibility)
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    console.log('Environment check:', {
      hasSupabaseUrl: !!supabaseUrl,
      hasSupabaseKey: !!supabaseKey,
      urlPrefix: supabaseUrl?.substring(0, 20)
    })
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables:', {
        SUPABASE_URL: !!process.env.SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      })
      return NextResponse.json(
        { error: 'Server configuration error', success: false },
        { status: 500 }
      )
    }
    
    const supabase = createClient(
      supabaseUrl,
      supabaseKey,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      }
    )
    
    console.log('Getting user from token...')
    const { data: { user }, error: userError } = await supabase.auth.getUser(token)
    
    if (userError || !user) {
      console.error('User authentication error:', userError)
      return NextResponse.json(
        { error: 'Invalid authentication', success: false },
        { status: 401 }
      )
    }
    
    console.log('User authenticated:', user.id)

    if (!documentId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    switch (action) {
      case 'save_draft':
        // Save workflow as draft with real database operations
        console.log('Saving draft for user:', user.id, 'document:', realDocumentId)
        console.log('Draft data:', {
          document_id: realDocumentId,
          user_id: user.id,
          step: step || 'A',
          belonging_rating: belongingRating,
          selected_category_id: realCategoryId,
          selected_tags: selectedTags || {},
          custom_tags: customTags || [],
          is_draft: true,
          completed_steps: [step || 'A']
        })
        
        const { data: draftData, error: draftError } = await supabase
          .from('workflow_sessions')
          .insert({
            document_id: realDocumentId,
            user_id: user.id,
            step: step || 'A',
            belonging_rating: belongingRating,
            selected_category_id: realCategoryId,
            selected_tags: selectedTags || {},
            custom_tags: customTags || [],
            is_draft: true,
            completed_steps: [step || 'A'],
            updated_at: new Date().toISOString()
          })
          .select()
          .single()

        if (draftError) {
          console.error('Draft save error:', draftError)
          console.error('Draft error details:', {
            code: draftError.code,
            message: draftError.message,
            details: draftError.details,
            hint: draftError.hint
          })
          return NextResponse.json(
            { 
              error: 'Failed to save draft', 
              success: false,
              details: draftError.message
            },
            { status: 500 }
          )
        }
        
        console.log('Draft saved successfully:', draftData?.id)

        return NextResponse.json({
          message: 'Draft saved successfully',
          workflowId: draftData.id,
          savedAt: new Date().toISOString(),
          success: true
        })

      case 'submit':
        // Validate all required fields for submission
        if (!belongingRating || !realCategoryId || !selectedTags) {
          return NextResponse.json(
            { error: 'Incomplete workflow data', success: false },
            { status: 400 }
          )
        }

        // Submit complete workflow
        const { data: submitData, error: submitError } = await supabase
          .from('workflow_sessions')
          .insert({
            document_id: realDocumentId,
            user_id: user.id,
            step: 'complete',
            belonging_rating: belongingRating,
            selected_category_id: realCategoryId,
            selected_tags: selectedTags,
            custom_tags: customTags || [],
            is_draft: false,
            completed_steps: ['A', 'B', 'C'],
            completed_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
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
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
    })
    return NextResponse.json(
      { 
        error: 'Workflow operation failed', 
        success: false,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}