import { DocumentSelectorClient } from '../client/DocumentSelectorClient'
import { mockDocuments } from '../../data/mock-data'

async function getDocuments() {
  // In a real app, this would fetch from your database
  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    documents: mockDocuments,
    stats: {
      total: mockDocuments.length,
      pending: mockDocuments.filter(d => d.status === 'pending').length,
      categorizing: mockDocuments.filter(d => d.status === 'categorizing').length,
      completed: mockDocuments.filter(d => d.status === 'completed').length
    }
  }
}

export async function DocumentSelectorServer() {
  const data = await getDocuments()

  return <DocumentSelectorClient initialData={data} />
}