import { NextRequest, NextResponse } from 'next/server'
import { mockDocuments } from '../../../data/mock-data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const status = searchParams.get('status')
    
    let filteredDocuments = mockDocuments

    // Apply search filter
    if (search) {
      filteredDocuments = filteredDocuments.filter(doc =>
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.summary.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Apply status filter
    if (status && status !== 'all') {
      filteredDocuments = filteredDocuments.filter(doc => doc.status === status)
    }

    return NextResponse.json({
      documents: filteredDocuments,
      total: filteredDocuments.length,
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch documents', success: false },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { title, content, summary, authorId } = body
    if (!title || !content || !summary || !authorId) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    // Create new document (mock implementation)
    const newDocument = {
      id: `doc_${Date.now()}`,
      title,
      content,
      summary,
      authorId,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending' as const
    }

    return NextResponse.json({
      document: newDocument,
      success: true
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create document', success: false },
      { status: 500 }
    )
  }
}