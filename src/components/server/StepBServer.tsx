import { StepBClient } from '../client/StepBClient'
import { mockDocuments, mockCategories } from '../../data/mock-data'

async function getDocument(documentId: string) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const document = mockDocuments.find(doc => doc.id === documentId)
  if (!document) {
    throw new Error('Document not found')
  }
  
  return document
}

async function getCategories() {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // Add enhanced analytics data to categories
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