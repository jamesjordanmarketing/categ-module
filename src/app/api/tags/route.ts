import { NextRequest, NextResponse } from 'next/server'
import { tagDimensions } from '../../../data/mock-data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const dimension = searchParams.get('dimension')
    const required = searchParams.get('required')
    
    let dimensions = [...tagDimensions]

    // Filter by dimension if specified
    if (dimension) {
      dimensions = dimensions.filter(d => d.id === dimension)
    }

    // Filter by required status
    if (required === 'true') {
      dimensions = dimensions.filter(d => d.required)
    } else if (required === 'false') {
      dimensions = dimensions.filter(d => !d.required)
    }

    return NextResponse.json({
      dimensions,
      total: dimensions.length,
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tag dimensions', success: false },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { dimensionId, name, description, riskLevel } = body
    
    if (!dimensionId || !name || !description) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    // Create new custom tag (mock implementation)
    const newTag = {
      id: `custom_${Date.now()}`,
      name,
      description,
      riskLevel: riskLevel || undefined
    }

    return NextResponse.json({
      tag: newTag,
      dimensionId,
      success: true
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create custom tag', success: false },
      { status: 500 }
    )
  }
}