import { WorkflowCompleteClient } from '../client/WorkflowCompleteClient'
import { mockDocuments, tagDimensions } from '../../data/mock-data'

async function getDocument(documentId: string) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const document = mockDocuments.find(doc => doc.id === documentId)
  if (!document) {
    throw new Error('Document not found')
  }
  
  return document
}

async function getWorkflowSummary(documentId: string) {
  // In a real app, this would fetch the complete workflow data from the database
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    workflowId: `workflow_${documentId}_${Date.now()}`,
    submittedAt: new Date().toISOString(),
    processingEstimate: '5-10 minutes',
    status: 'completed'
  }
}

interface Props {
  documentId: string
}

export async function WorkflowCompleteServer({ documentId }: Props) {
  const [document, workflowSummary] = await Promise.all([
    getDocument(documentId),
    getWorkflowSummary(documentId)
  ])

  return (
    <WorkflowCompleteClient 
      document={document} 
      tagDimensions={tagDimensions}
      workflowSummary={workflowSummary}
    />
  )
}