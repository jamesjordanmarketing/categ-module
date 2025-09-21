import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Get user from auth header
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authentication required', success: false },
        { status: 401 }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: userError } = await supabase.auth.getUser(token)
    
    if (userError || !user) {
      return NextResponse.json(
        { error: 'Invalid authentication', success: false },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const documentId = searchParams.get('documentId')

    if (!documentId) {
      return NextResponse.json(
        { error: 'Document ID is required', success: false },
        { status: 400 }
      )
    }

    // Get existing workflow session for this user and document
    const { data: session, error } = await supabase
      .from('workflow_sessions')
      .select('*')
      .eq('document_id', documentId)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Session fetch error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch session', success: false },
        { status: 500 }
      )
    }

    return NextResponse.json({
      session: session || null,
      success: true
    })
  } catch (error) {
    console.error('Workflow Session API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch session', success: false },
      { status: 500 }
    )
  }
}
