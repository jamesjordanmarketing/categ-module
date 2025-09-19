import { StepAClient } from '../client/StepAClient'
import { mockDocuments } from '../../data/mock-data'

async function getDocument(documentId: string) {
  // In a real app, this would fetch from your database
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const document = mockDocuments.find(doc => doc.id === documentId)
  if (!document) {
    throw new Error('Document not found')
  }
  
  return document
}

interface Props {
  documentId: string
}

export async function StepAServer({ documentId }: Props) {
  const document = await getDocument(documentId)

  return <StepAClient document={document} />
}