Request body: {
  "action": "submit",
  "documentId": "doc-1",
  "belongingRating": 3,
  "selectedCategory": {
    "id": "proprietary-strategies",
    "name": "Proprietary Strategies & Approaches",
    "description": "Unique business strategies, competitive advantages, or innovative approaches specific to your organization",
    "examples": [
      "Competitive positioning strategies",
      "Unique value propositions",
      "Market differentiation approaches",
      "Proprietary methodologies",
      "Innovation frameworks"
    ],
    "isHighValue": true,
    "impact": "High training value - captures unique competitive intelligence and strategic thinking",
    "detailedDescription": "High-level strategic documents that guide business decisions and competitive positioning. These contain unique insights, strategies, and approaches specific to your organization that provide competitive advantages.",
    "processingStrategy": "Deep Analysis - Provides strategic context for all other document analysis within your broader business objectives and market positioning.",
    "businessValueClassification": "Maximum",
    "usageAnalytics": {
      "totalSelections": 871,
      "recentActivity": 33
    },
    "valueDistribution": {
      "highValue": 24,
      "mediumValue": 40,
      "standardValue": 39
    }
  },
  "selectedTags": {
    "authorship": [
      "customer"
    ],
    "disclosure-risk": [
      "risk-4"
    ],
    "intended-use": [
      "investor"
    ]
  },
  "customTags": [],
  "step": "A"
}
Parsed values: {
  documentId: 'doc-1',
  belongingRating: 3,
  selectedCategory: 'proprietary-strategies',
  action: 'submit',
  step: 'A'
}
Token received: eyJhbGciOiJIUzI1NiIsImtpZCI6IlBMdlJON2ExWnoycFNKbj...
Workflow API Error: Error: supabaseUrl is required.
    at /var/task/.next/server/chunks/823.js:21:82538
    at new ax (/var/task/.next/server/chunks/823.js:21:82789)
    at aI (/var/task/.next/server/chunks/823.js:21:87049)
    at c (/var/task/.next/server/app/api/workflow/route.js:1:1357)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async /var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:36957
    at async eC.execute (/var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:27552)
    at async eC.handle (/var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:38291)
    at async es (/var/task/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:16:25262)
    at async en.responseCache.get.routeKind (/var/task/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:17:1026)
Error stack: Error: supabaseUrl is required.
    at /var/task/.next/server/chunks/823.js:21:82538
    at new ax (/var/task/.next/server/chunks/823.js:21:82789)
    at aI (/var/task/.next/server/chunks/823.js:21:87049)
    at c (/var/task/.next/server/app/api/workflow/route.js:1:1357)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async /var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:36957
    at async eC.execute (/var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:27552)
    at async eC.handle (/var/task/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:38291)
    at async es (/var/task/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:16:25262)
    at async en.responseCache.get.routeKind (/var/task/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:17:1026)
Error details: { message: 'supabaseUrl is required.', name: 'Error' }