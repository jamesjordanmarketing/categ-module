import { NextRequest, NextResponse } from 'next/server'
import { mockDocuments } from '../../../../data/mock-data'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const document = mockDocuments.find(doc => doc.id === params.id)
    
    if (!document) {
      return NextResponse.json(
        { error: 'Document not found', success: false },
        { status: 404 }
      )
    }

    return NextResponse.json({
      document,
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch document', success: false },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const documentIndex = mockDocuments.findIndex(doc => doc.id === params.id)
    
    if (documentIndex === -1) {
      return NextResponse.json(
        { error: 'Document not found', success: false },
        { status: 404 }
      )
    }

    // Update document (mock implementation)
    const updatedDocument = {
      ...mockDocuments[documentIndex],
      ...body,
      id: params.id // Ensure ID cannot be changed
    }

    return NextResponse.json({
      document: updatedDocument,
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update document', success: false },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const documentIndex = mockDocuments.findIndex(doc => doc.id === params.id)
    
    if (documentIndex === -1) {
      return NextResponse.json(
        { error: 'Document not found', success: false },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Document deleted successfully',
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete document', success: false },
      { status: 500 }
    )
  }
}