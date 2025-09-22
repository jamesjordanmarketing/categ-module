import { StepBClient } from '../client/StepBClient'
import { mockDocuments, primaryCategories as mockCategories } from '../../data/mock-data'
import { categoryService } from '../../lib/database'

async function getDocument(documentId: string) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const document = mockDocuments.find(doc => doc.id === documentId)
  if (!document) {
    throw new Error('Document not found')
  }
  
  return document
}

async function getCategories() {
  try {
    // Load categories from database
    const categories = await categoryService.getAll()
    
    // Transform database format to match UI expectations
    const transformedCategories = categories.map(category => ({
      id: category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
      name: category.name,
      description: category.description,
      examples: category.examples || [],
      isHighValue: category.is_high_value,
      impact: category.impact_description,
      detailedDescription: category.description,
      processingStrategy: category.is_high_value ? 'Deep Analysis' : 'Standard Processing',
      businessValueClassification: category.is_high_value ? 'High Value' : 'Medium Value'
    }))
    
    // Add enhanced analytics data to categories (keep this logic for UI)
    const categoriesWithAnalytics = transformedCategories.map(category => ({
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
    
    console.log('Loaded categories from database:', categoriesWithAnalytics.length)
    return categoriesWithAnalytics
  } catch (error) {
    console.error('Error loading categories from database:', error)
    // Fallback to mock data in case of error
    console.log('Falling back to mock data for categories')
    const categoriesWithAnalytics = mockCategories.map(category => ({
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
    return categoriesWithAnalytics
  }
}

interface Props {
  documentId: string
}

export async function StepBServer({ documentId }: Props) {
  const [document, categories] = await Promise.all([
    getDocument(documentId),
    getCategories()
  ])

  return <StepBClient document={document} categories={categories} />
}