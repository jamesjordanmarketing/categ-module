import { NextRequest, NextResponse } from 'next/server'
import { primaryCategories as mockCategories } from '../../../data/mock-data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const highValue = searchParams.get('highValue')
    const includeAnalytics = searchParams.get('includeAnalytics') === 'true'
    
    let categories = [...mockCategories]

    // Apply high value filter
    if (highValue === 'true') {
      categories = categories.filter(cat => cat.isHighValue)
    } else if (highValue === 'false') {
      categories = categories.filter(cat => !cat.isHighValue)
    }

    // Add analytics data if requested
    if (includeAnalytics) {
      categories = categories.map(category => ({
        ...category,
        usageAnalytics: {
          totalSelections: Math.floor(Math.random() * 1000) + 100,
          recentActivity: Math.floor(Math.random() * 50) + 5
        },
        valueDistribution: {
          highValue: Math.floor(Math.random() * 40) + 10,
          mediumValue: Math.floor(Math.random() * 35) + 15,
          standardValue: Math.floor(Math.random() * 30) + 20
        }
      }))
    }

    return NextResponse.json({
      categories,
      total: categories.length,
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories', success: false },
      { status: 500 }
    )
  }
}