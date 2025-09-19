import { StepCClient } from '../client/StepCClient'
import { mockDocuments, tagDimensions, mockTagSuggestions } from '../../data/mock-data'

async function getDocument(documentId: string) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const document = mockDocuments.find(doc => doc.id === documentId)
  if (!document) {
    throw new Error('Document not found')
  }
  
  return document
}

async function getTagDimensions() {
  await new Promise(resolve => setTimeout(resolve, 100))
  return tagDimensions
}

async function getTagSuggestions(categoryId?: string) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  if (categoryId && mockTagSuggestions[categoryId as keyof typeof mockTagSuggestions]) {
    return mockTagSuggestions[categoryId as keyof typeof mockTagSuggestions]
  }
  
  return null
}

interface Props {
  documentId: string
}

export async function StepCServer({ documentId }: Props) {
  const document = await getDocument(documentId)
  const dimensions = await getTagDimensions()
  
  // In a real app, you'd get the selected category from the workflow state
  // For now, we'll pass null and let the client component handle it
  const suggestions = null
  
  return (
    <StepCClient 
      document={document} 
      tagDimensions={dimensions}
      suggestions={suggestions}
    />
  )
}