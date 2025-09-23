james@BrightHub ~/Master/BrightHub/Build/APSD-runs/aplio-27-a1-c/aplio-modern-1  $ npm run test:visual:enhanced T-1.1.4

> aplio-modern-1@0.1.0 test:visual:enhanced
> node test/run-visual-tests.js T-1.1.4

📝 Local ts-node registered in ComponentImporter.js (commonjs, react-jsx).
Original capture-screenshots.js not found, using enhanced version only
Running visual tests for T-1.1.4  
DEBUG: runVisualTests function started. TaskID: T-1.1.4 Options: { updateReferences: undefined, validateErrors: undefined }
🔄 Enhanced component registration starting...
🔍 Discovering components from app/_components/...
🔍 Discovered components: [
  'Button',
  'Card',
  'DashboardStats',
  'ErrorBoundary',
  'ErrorTestUtils',
  'FaqItem',
  'FaqSection',
  'LoadingTestUtils',
  'LoginForm',
  'StatChart'
]
🔍 Found 10 component files
📋 Extracted metadata for Button: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
📝 Registering component: Button (client)
📋 Extracted metadata for Card: { type: 'server', dependencies: 1, hasBrowserAPIs: false }
📝 Registering component: Card (server)
📋 Extracted metadata for DashboardStats: { type: 'server', dependencies: 3, hasBrowserAPIs: true }
📝 Registering component: DashboardStats (server)
📋 Extracted metadata for ErrorBoundary: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
📝 Registering component: ErrorBoundary (client)
📋 Extracted metadata for ErrorTestUtils: { type: 'client', dependencies: 1, hasBrowserAPIs: true }
📝 Registering component: ErrorTestUtils (client)
📋 Extracted metadata for FaqItem: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
📝 Registering component: FaqItem (client)
📋 Extracted metadata for FaqSection: { type: 'server', dependencies: 2, hasBrowserAPIs: true }
📝 Registering component: FaqSection (server)
📋 Extracted metadata for LoadingTestUtils: { type: 'client', dependencies: 2, hasBrowserAPIs: false }
📝 Registering component: LoadingTestUtils (client)
📋 Extracted metadata for LoginForm: { type: 'client', dependencies: 3, hasBrowserAPIs: false }
📝 Registering component: LoginForm (client)
📋 Extracted metadata for StatChart: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
📝 Registering component: StatChart (client)
✅ Registered 10/10 components
✅ Enhanced registration complete: 10 components
📦 Importing component: Button
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Button.tsx
✅ Successfully imported and cached: Button
📦 Importing component: Card
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Card.tsx
✅ Successfully imported and cached: Card
📦 Importing component: DashboardStats
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\DashboardStats.tsx
✅ Successfully imported and cached: DashboardStats
📦 Importing component: ErrorBoundary
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorBoundary.tsx
✅ Successfully imported and cached: ErrorBoundary
📦 Importing component: ErrorTestUtils
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorTestUtils.tsx
✅ Successfully imported and cached: ErrorTestUtils
📦 Importing component: FaqItem
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqItem.tsx
✅ Successfully imported and cached: FaqItem
📦 Importing component: FaqSection
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqSection.tsx
✅ Successfully imported and cached: FaqSection
📦 Importing component: LoadingTestUtils
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx
✅ Successfully imported and cached: LoadingTestUtils
📦 Importing component: LoginForm
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoginForm.tsx
✅ Successfully imported and cached: LoginForm
📦 Importing component: StatChart
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\StatChart.tsx
✅ Successfully imported and cached: StatChart
✅ Validated 10 components can be imported

📊 Component Registry Summary
================================
Total Components: 10
Server Components: 3
Client Components: 7
Last Discovery: 6/4/2025, 8:58:03 PM

Server Components:
  • Card (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Card.tsx) 
  • DashboardStats (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\DashboardStats.tsx)
  • FaqSection (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqSection.tsx)

Client Components:
  • Button (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Button.tsx)
  • ErrorBoundary (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorBoundary.tsx)
  • ErrorTestUtils (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorTestUtils.tsx)
  • FaqItem (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqItem.tsx)
  • LoadingTestUtils (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx)
  • LoginForm (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoginForm.tsx)
  • StatChart (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\StatChart.tsx)

Starting enhanced server...
Test server started on http://localhost:3333
Server status: http://localhost:3333/status
Enhanced server endpoints registered
Running visual tests for task T-1.1.4...
DEBUG: Components to test: [
  'Button',
  'Card',
  'DashboardStats',
  'ErrorBoundary',
  'ErrorTestUtils',
  'FaqItem',
  'FaqSection',
  'LoadingTestUtils',
  'LoginForm',
  'StatChart'
]
Capturing screenshots...
Starting enhanced server at http://localhost:3333 if not already running...
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/Button?props=%7B%7D
🎯 Serving REAL React component: Button for task T-1.1.4
🏗️  Creating REAL React scaffold for Button in task T-1.1.4...
📦 Importing component: Button
📦 Importing component: Button
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Button.tsx
✅ Successfully imported and cached: Button
📋 Extracted metadata for Button: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for Button: [ 'children', 'variant', 'size', 'onClick', 'key' ]
🎨 Rendering component with React SSR...
🔧 Setting up React SSR context...
🎯 React 18 detected - configuring concurrent features
✅ React SSR context configured
🎨 Rendering component: Button with React SSR...
🔄 Converted function prop 'onClick' to no-op for SSR
🔧 Processed props for Button: [ 'children', 'variant', 'size', 'onClick', 'key' ]
⚠️  Potential rendering issue in Button: found 'undefined' or '[object Object]'
✅ Successfully rendered: Button (264 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
🎨 Processing global CSS from app/globals.css...
📄 Read global CSS (488 characters)
🔗 Processing CSS imports...
⚠️  Could not resolve import: tailwindcss
➕ Adding missing Tailwind directive: @tailwind base;
➕ Adding missing Tailwind directive: @tailwind components;
➕ Adding missing Tailwind directive: @tailwind utilities;
🔗 Resolving asset references...
✅ Global CSS processed and cached (1299 characters)
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: Button
✅ Boundary injected for Button (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html (5022 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for Button (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/Button?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: Button for task T-1.1.4
🏗️  Creating REAL React scaffold for Button in task T-1.1.4...
📦 Importing component: Button
📦 Using cached component: Button
📋 Extracted metadata for Button: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for Button: [ 'children', 'variant', 'size', 'onClick', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: Button with React SSR...
🔄 Converted function prop 'onClick' to no-op for SSR
🔧 Processed props for Button: [ 'children', 'variant', 'size', 'onClick', 'key', 'loading' ]
⚠️  Potential rendering issue in Button: found 'undefined' or '[object Object]'
✅ Successfully rendered: Button (264 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: Button
✅ Boundary injected for Button (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html (5056 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for Button (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/Button?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: Button for task T-1.1.4
🏗️  Creating REAL React scaffold for Button in task T-1.1.4...
📦 Importing component: Button
📦 Using cached component: Button
📋 Extracted metadata for Button: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for Button: [ 'children', 'variant', 'size', 'onClick', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: Button with React SSR...
🔄 Converted function prop 'onClick' to no-op for SSR
🔧 Processed props for Button: [ 'children', 'variant', 'size', 'onClick', 'key', 'error' ]
⚠️  Potential rendering issue in Button: found 'undefined' or '[object Object]'
✅ Successfully rendered: Button (264 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: Button
✅ Boundary injected for Button (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html (5084 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Button-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for Button (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/Card?props=%7B%7D
🎯 Serving REAL React component: Card for task T-1.1.4
🏗️  Creating REAL React scaffold for Card in task T-1.1.4...
📦 Importing component: Card
📦 Importing component: Card
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\Card.tsx
✅ Successfully imported and cached: Card
📋 Extracted metadata for Card: { type: 'server', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for Card: [ 'title', 'children', 'className' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: Card with React SSR...
🔧 Processed props for Card: [ 'title', 'children', 'className' ]
✅ Successfully rendered: Card (283 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: Card
✅ Boundary injected for Card (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html (5113 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for Card (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/Card?props=%7B%22children%22%3A%22Server%20component%20with%20content%22%7D
🎯 Serving REAL React component: Card for task T-1.1.4
🏗️  Creating REAL React scaffold for Card in task T-1.1.4...
📦 Importing component: Card
📦 Using cached component: Card
📋 Extracted metadata for Card: { type: 'server', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for Card: [ 'title', 'children', 'className' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: Card with React SSR...
🔧 Processed props for Card: [ 'title', 'children', 'className' ]
✅ Successfully rendered: Card (230 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: Card
✅ Boundary injected for Card (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html (4954 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\Card-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for Card (with-content)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/DashboardStats?props=%7B%7D
🎯 Serving REAL React component: DashboardStats for task T-1.1.4
🏗️  Creating REAL React scaffold for DashboardStats in task T-1.1.4...
📦 Importing component: DashboardStats
📦 Importing component: DashboardStats
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\DashboardStats.tsx
✅ Successfully imported and cached: DashboardStats
📋 Extracted metadata for DashboardStats: { type: 'server', dependencies: 3, hasBrowserAPIs: true }
🔧 Final props for DashboardStats: [ 'stats' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: DashboardStats with React SSR...
🔧 Processed props for DashboardStats: [ 'stats' ]
❌ Failed to render DashboardStats: Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6194:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at renderIndeterminateComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5790:7)
    at renderElement (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5961:7)
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6119:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at retryTask (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6543:5)
    at performWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6591:7)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6915:12
    at scheduleWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:78:3)
🚨 Rendering error for DashboardStats: {
  message: 'Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.',
  stack: [
    'Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.',
    '    at renderNodeDestructiveImpl (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\react-dom\\cjs\\react-dom-server-legacy.node.development.js:6194:11)',
    '    at renderNodeDestructive (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\react-dom\\cjs\\react-dom-server-legacy.node.development.js:6091:14)'
  ],
  props: [ 'stats' ]
}
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: DashboardStats
✅ Boundary injected for DashboardStats (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html (5914 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for DashboardStats (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/DashboardStats?props=%7B%22children%22%3A%22Server%20component%20with%20content%22%7D
🎯 Serving REAL React component: DashboardStats for task T-1.1.4
🏗️  Creating REAL React scaffold for DashboardStats in task T-1.1.4...
📦 Importing component: DashboardStats
📦 Using cached component: DashboardStats
📋 Extracted metadata for DashboardStats: { type: 'server', dependencies: 3, hasBrowserAPIs: true }
🔧 Final props for DashboardStats: [ 'stats', 'children' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: DashboardStats with React SSR...
🔧 Processed props for DashboardStats: [ 'stats', 'children' ]
❌ Failed to render DashboardStats: Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6194:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at renderIndeterminateComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5790:7)
    at renderElement (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5961:7)
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6119:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at retryTask (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6543:5)
    at performWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6591:7)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6915:12
    at scheduleWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:78:3)
🚨 Rendering error for DashboardStats: {
  message: 'Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.',
  stack: [
    'Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.',
    '    at renderNodeDestructiveImpl (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\react-dom\\cjs\\react-dom-server-legacy.node.development.js:6194:11)',
    '    at renderNodeDestructive (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\react-dom\\cjs\\react-dom-server-legacy.node.development.js:6091:14)'
  ],
  props: [ 'stats', 'children' ]
}
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: DashboardStats
✅ Boundary injected for DashboardStats (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html (6051 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\DashboardStats-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for DashboardStats (with-content)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorBoundary?props=%7B%22children%22%3A%22%3Cdiv%3ETest%20Content%20for%20State%3A%20default%3C%2Fdiv%3E%22%7D
🎯 Serving REAL React component: ErrorBoundary for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorBoundary in task T-1.1.4...
📦 Importing component: ErrorBoundary
📦 Importing component: ErrorBoundary
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorBoundary.tsx
✅ Successfully imported and cached: ErrorBoundary
📋 Extracted metadata for ErrorBoundary: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for ErrorBoundary: [ 'children', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorBoundary with React SSR...
🔧 Processed props for ErrorBoundary: [ 'children', 'key' ]
⚠️  Rendered output for ErrorBoundary may not contain valid HTML
✅ Successfully rendered: ErrorBoundary (54 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorBoundary
✅ Boundary injected for ErrorBoundary (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html (4828 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
DEBUG HTML for ErrorBoundary (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html):
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="component-name" content="ErrorBoundary">
  <meta name="component-type" content="client">
  <meta name="task-id" content="T-1.1.4">
  <title>Real React Component: ErrorBoundary (client)</title>

  <!-- Complete Tailwind CSS and styling -->
  <style type="text/css">
@tailwind utilities;
@tailwind components;
@tailwind base;
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}


/* Test Environment Utilities */...
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorBoundary (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorBoundary?props=%7B%22loading%22%3Atrue%2C%22children%22%3A%22%3Cdiv%3ETest%20Content%20for%20State%3A%20loading%3C%2Fdiv%3E%22%7D
🎯 Serving REAL React component: ErrorBoundary for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorBoundary in task T-1.1.4...
📦 Importing component: ErrorBoundary
📦 Using cached component: ErrorBoundary
📋 Extracted metadata for ErrorBoundary: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for ErrorBoundary: [ 'children', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorBoundary with React SSR...
🔧 Processed props for ErrorBoundary: [ 'children', 'key', 'loading' ]
⚠️  Rendered output for ErrorBoundary may not contain valid HTML
✅ Successfully rendered: ErrorBoundary (54 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorBoundary
✅ Boundary injected for ErrorBoundary (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html (4862 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
DEBUG HTML for ErrorBoundary (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html):
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="component-name" content="ErrorBoundary">
  <meta name="component-type" content="client">
  <meta name="task-id" content="T-1.1.4">
  <title>Real React Component: ErrorBoundary (client)</title>

  <!-- Complete Tailwind CSS and styling -->
  <style type="text/css">
@tailwind utilities;
@tailwind components;
@tailwind base;
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}


/* Test Environment Utilities */...
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorBoundary (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorBoundary?props=%7B%22error%22%3A%22Test%20error%20message%22%2C%22children%22%3A%22%3Cdiv%3ETest%20Content%20for%20State%3A%20error%3C%2Fdiv%3E%22%7D
🎯 Serving REAL React component: ErrorBoundary for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorBoundary in task T-1.1.4...
📦 Importing component: ErrorBoundary
📦 Using cached component: ErrorBoundary
📋 Extracted metadata for ErrorBoundary: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for ErrorBoundary: [ 'children', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorBoundary with React SSR...
🔧 Processed props for ErrorBoundary: [ 'children', 'key', 'error' ]
⚠️  Rendered output for ErrorBoundary may not contain valid HTML
✅ Successfully rendered: ErrorBoundary (52 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorBoundary
✅ Boundary injected for ErrorBoundary (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html (4886 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html
DEBUG HTML for ErrorBoundary (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorBoundary-enhanced.html):
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="component-name" content="ErrorBoundary">
  <meta name="component-type" content="client">
  <meta name="task-id" content="T-1.1.4">
  <title>Real React Component: ErrorBoundary (client)</title>

  <!-- Complete Tailwind CSS and styling -->
  <style type="text/css">
@tailwind utilities;
@tailwind components;
@tailwind base;
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}


/* Test Environment Utilities */...
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorBoundary (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorTestUtils?props=%7B%7D
🎯 Serving REAL React component: ErrorTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorTestUtils in task T-1.1.4...
📦 Importing component: ErrorTestUtils
📦 Importing component: ErrorTestUtils
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\ErrorTestUtils.tsx
✅ Successfully imported and cached: ErrorTestUtils
📋 Extracted metadata for ErrorTestUtils: { type: 'client', dependencies: 1, hasBrowserAPIs: true }
🔧 Final props for ErrorTestUtils: [ 'children', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorTestUtils with React SSR...
🔧 Processed props for ErrorTestUtils: [ 'children', 'key' ]
✅ Successfully rendered: ErrorTestUtils (128 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorTestUtils
✅ Boundary injected for ErrorTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html (4964 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorTestUtils (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorTestUtils?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: ErrorTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorTestUtils in task T-1.1.4...
📦 Importing component: ErrorTestUtils
📦 Using cached component: ErrorTestUtils
📋 Extracted metadata for ErrorTestUtils: { type: 'client', dependencies: 1, hasBrowserAPIs: true }
🔧 Final props for ErrorTestUtils: [ 'children', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorTestUtils with React SSR...
🔧 Processed props for ErrorTestUtils: [ 'children', 'key', 'loading' ]
✅ Successfully rendered: ErrorTestUtils (128 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorTestUtils
✅ Boundary injected for ErrorTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html (4998 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorTestUtils (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/ErrorTestUtils?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: ErrorTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for ErrorTestUtils in task T-1.1.4...
📦 Importing component: ErrorTestUtils
📦 Using cached component: ErrorTestUtils
📋 Extracted metadata for ErrorTestUtils: { type: 'client', dependencies: 1, hasBrowserAPIs: true }
🔧 Final props for ErrorTestUtils: [ 'children', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: ErrorTestUtils with React SSR...
🔧 Processed props for ErrorTestUtils: [ 'children', 'key', 'error' ]
✅ Successfully rendered: ErrorTestUtils (128 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: ErrorTestUtils
✅ Boundary injected for ErrorTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html (5026 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\ErrorTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for ErrorTestUtils (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/FaqItem?props=%7B%7D
🎯 Serving REAL React component: FaqItem for task T-1.1.4
🏗️  Creating REAL React scaffold for FaqItem in task T-1.1.4...
📦 Importing component: FaqItem
📦 Importing component: FaqItem
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqItem.tsx
✅ Successfully imported and cached: FaqItem
📋 Extracted metadata for FaqItem: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for FaqItem: [ 'question', 'answer', 'isOpen', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: FaqItem with React SSR...
🔧 Processed props for FaqItem: [ 'question', 'answer', 'isOpen', 'key' ]
✅ Successfully rendered: FaqItem (941 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: FaqItem
✅ Boundary injected for FaqItem (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html (5909 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for FaqItem (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/FaqItem?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: FaqItem for task T-1.1.4
🏗️  Creating REAL React scaffold for FaqItem in task T-1.1.4...
📦 Importing component: FaqItem
📦 Using cached component: FaqItem
📋 Extracted metadata for FaqItem: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for FaqItem: [ 'question', 'answer', 'isOpen', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: FaqItem with React SSR...
🔧 Processed props for FaqItem: [ 'question', 'answer', 'isOpen', 'key', 'loading' ]
✅ Successfully rendered: FaqItem (941 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: FaqItem
✅ Boundary injected for FaqItem (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html (5943 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for FaqItem (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/FaqItem?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: FaqItem for task T-1.1.4
🏗️  Creating REAL React scaffold for FaqItem in task T-1.1.4...
📦 Importing component: FaqItem
📦 Using cached component: FaqItem
📋 Extracted metadata for FaqItem: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for FaqItem: [ 'question', 'answer', 'isOpen', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: FaqItem with React SSR...
🔧 Processed props for FaqItem: [ 'question', 'answer', 'isOpen', 'key', 'error' ]      
✅ Successfully rendered: FaqItem (941 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: FaqItem
✅ Boundary injected for FaqItem (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html (5971 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqItem-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for FaqItem (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/FaqSection?props=%7B%7D
🎯 Serving REAL React component: FaqSection for task T-1.1.4
🏗️  Creating REAL React scaffold for FaqSection in task T-1.1.4...
📦 Importing component: FaqSection
📦 Importing component: FaqSection
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\FaqSection.tsx
✅ Successfully imported and cached: FaqSection
📋 Extracted metadata for FaqSection: { type: 'server', dependencies: 2, hasBrowserAPIs:
 true }
🔧 Final props for FaqSection: [ 'title', 'faqs' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: FaqSection with React SSR...
🔧 Processed props for FaqSection: [ 'title', 'faqs' ]
✅ Successfully rendered: FaqSection (5327 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: FaqSection
✅ Boundary injected for FaqSection (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html (10374 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for FaqSection (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/FaqSection?props=%7B%22children%22%3A%22Server%20component%20with%20content%22%7D
🎯 Serving REAL React component: FaqSection for task T-1.1.4
🏗️  Creating REAL React scaffold for FaqSection in task T-1.1.4...
📦 Importing component: FaqSection
📦 Using cached component: FaqSection
📋 Extracted metadata for FaqSection: { type: 'server', dependencies: 2, hasBrowserAPIs:
 true }
🔧 Final props for FaqSection: [ 'title', 'faqs', 'children' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: FaqSection with React SSR...
🔧 Processed props for FaqSection: [ 'title', 'faqs', 'children' ]
✅ Successfully rendered: FaqSection (5327 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting server boundary for: FaqSection
✅ Boundary injected for FaqSection (server)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html (10464 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\FaqSection-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for FaqSection (with-content)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoadingTestUtils?props=%7B%7D
🎯 Serving REAL React component: LoadingTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for LoadingTestUtils in task T-1.1.4...
📦 Importing component: LoadingTestUtils
📦 Importing component: LoadingTestUtils
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx
✅ Successfully imported and cached: LoadingTestUtils
📋 Extracted metadata for LoadingTestUtils: { type: 'client', dependencies: 2, hasBrowserAPIs: false }
🔧 Final props for LoadingTestUtils: [ 'children', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoadingTestUtils with React SSR...
🔧 Processed props for LoadingTestUtils: [ 'children', 'key' ]
❌ Failed to render LoadingTestUtils: Error: invariant expected app router to be mounted
    at useRouter (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\next\src\client\components\navigation.ts:128:11)
    at LoadingTestUtils (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx:8:27)
    at renderWithHooks (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5662:16)
    at renderIndeterminateComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5736:15)
    at renderElement (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5961:7)
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6119:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at retryTask (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6543:5)   
    at performWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6591:7) 
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6915:12
🚨 Rendering error for LoadingTestUtils: {
  message: 'invariant expected app router to be mounted',
  stack: [
    'Error: invariant expected app router to be mounted',
    '    at useRouter (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\next\\src\\client\\components\\navigation.ts:128:11)',
    '    at LoadingTestUtils (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\app\\_components\\LoadingTestUtils.tsx:8:27)'
  ],
  props: [ 'children', 'key' ]
}
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoadingTestUtils
✅ Boundary injected for LoadingTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html (5474 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoadingTestUtils (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoadingTestUtils?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: LoadingTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for LoadingTestUtils in task T-1.1.4...
📦 Importing component: LoadingTestUtils
📦 Using cached component: LoadingTestUtils
📋 Extracted metadata for LoadingTestUtils: { type: 'client', dependencies: 2, hasBrowserAPIs: false }
🔧 Final props for LoadingTestUtils: [ 'children', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoadingTestUtils with React SSR...
🔧 Processed props for LoadingTestUtils: [ 'children', 'key', 'loading' ]
❌ Failed to render LoadingTestUtils: Error: invariant expected app router to be mounted
    at useRouter (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\next\src\client\components\navigation.ts:128:11)
    at LoadingTestUtils (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx:8:27)
    at renderWithHooks (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5662:16)
    at renderIndeterminateComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5736:15)
    at renderElement (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5961:7)
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6119:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at retryTask (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6543:5)   
    at performWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6591:7) 
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6915:12
🚨 Rendering error for LoadingTestUtils: {
  message: 'invariant expected app router to be mounted',
  stack: [
    'Error: invariant expected app router to be mounted',
    '    at useRouter (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\next\\src\\client\\components\\navigation.ts:128:11)',
    '    at LoadingTestUtils (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\app\\_components\\LoadingTestUtils.tsx:8:27)'
  ],
  props: [ 'children', 'key', 'loading' ]
}
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoadingTestUtils
✅ Boundary injected for LoadingTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html (5527 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoadingTestUtils (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoadingTestUtils?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: LoadingTestUtils for task T-1.1.4
🏗️  Creating REAL React scaffold for LoadingTestUtils in task T-1.1.4...
📦 Importing component: LoadingTestUtils
📦 Using cached component: LoadingTestUtils
📋 Extracted metadata for LoadingTestUtils: { type: 'client', dependencies: 2, hasBrowserAPIs: false }
🔧 Final props for LoadingTestUtils: [ 'children', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoadingTestUtils with React SSR...
🔧 Processed props for LoadingTestUtils: [ 'children', 'key', 'error' ]
❌ Failed to render LoadingTestUtils: Error: invariant expected app router to be mounted
    at useRouter (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\next\src\client\components\navigation.ts:128:11)
    at LoadingTestUtils (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoadingTestUtils.tsx:8:27)
    at renderWithHooks (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5662:16)
    at renderIndeterminateComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5736:15)
    at renderElement (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5961:7)
    at renderNodeDestructiveImpl (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6119:11)
    at renderNodeDestructive (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6091:14)
    at retryTask (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6543:5)   
    at performWork (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6591:7) 
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6915:12
🚨 Rendering error for LoadingTestUtils: {
  message: 'invariant expected app router to be mounted',
  stack: [
    'Error: invariant expected app router to be mounted',
    '    at useRouter (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\node_modules\\next\\src\\client\\components\\navigation.ts:128:11)',
    '    at LoadingTestUtils (C:\\Users\\james\\Master\\BrightHub\\Build\\APSD-runs\\aplio-27-a1-c\\aplio-modern-1\\app\\_components\\LoadingTestUtils.tsx:8:27)'
  ],
  props: [ 'children', 'key', 'error' ]
}
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoadingTestUtils
✅ Boundary injected for LoadingTestUtils (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html (5569 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoadingTestUtils-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoadingTestUtils (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoginForm?props=%7B%7D
🎯 Serving REAL React component: LoginForm for task T-1.1.4
🏗️  Creating REAL React scaffold for LoginForm in task T-1.1.4...
📦 Importing component: LoginForm
📦 Importing component: LoginForm
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\LoginForm.tsx
✅ Successfully imported and cached: LoginForm
📋 Extracted metadata for LoginForm: { type: 'client', dependencies: 3, hasBrowserAPIs: false }
🔧 Final props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoginForm with React SSR...
🔄 Converted function prop 'onSubmit' to no-op for SSR
🔧 Processed props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key' ]      
✅ Successfully rendered: LoginForm (1374 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoginForm
✅ Boundary injected for LoginForm (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html (6178 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoginForm (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoginForm?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: LoginForm for task T-1.1.4
🏗️  Creating REAL React scaffold for LoginForm in task T-1.1.4...
📦 Importing component: LoginForm
📦 Using cached component: LoginForm
📋 Extracted metadata for LoginForm: { type: 'client', dependencies: 3, hasBrowserAPIs: false }
🔧 Final props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoginForm with React SSR...
🔄 Converted function prop 'onSubmit' to no-op for SSR
🔧 Processed props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key', 'loading' ]
✅ Successfully rendered: LoginForm (1374 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoginForm
✅ Boundary injected for LoginForm (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html (6212 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoginForm (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/LoginForm?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: LoginForm for task T-1.1.4
🏗️  Creating REAL React scaffold for LoginForm in task T-1.1.4...
📦 Importing component: LoginForm
📦 Using cached component: LoginForm
📋 Extracted metadata for LoginForm: { type: 'client', dependencies: 3, hasBrowserAPIs: false }
🔧 Final props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: LoginForm with React SSR...
🔄 Converted function prop 'onSubmit' to no-op for SSR
🔧 Processed props for LoginForm: [ 'title', 'showRememberMe', 'onSubmit', 'key', 'error' ]
✅ Successfully rendered: LoginForm (1374 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: LoginForm
✅ Boundary injected for LoginForm (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html (6240 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\LoginForm-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for LoginForm (error)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/StatChart?props=%7B%7D
🎯 Serving REAL React component: StatChart for task T-1.1.4
🏗️  Creating REAL React scaffold for StatChart in task T-1.1.4...
📦 Importing component: StatChart
📦 Importing component: StatChart
📁 Component path resolved: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components\StatChart.tsx
✅ Successfully imported and cached: StatChart
📋 Extracted metadata for StatChart: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for StatChart: [ 'data', 'type', 'key' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: StatChart with React SSR...
🔧 Processed props for StatChart: [ 'data', 'type', 'key' ]
✅ Successfully rendered: StatChart (477 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: StatChart
✅ Boundary injected for StatChart (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html (5476 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for StatChart (default)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/StatChart?props=%7B%22loading%22%3Atrue%7D
🎯 Serving REAL React component: StatChart for task T-1.1.4
🏗️  Creating REAL React scaffold for StatChart in task T-1.1.4...
📦 Importing component: StatChart
📦 Using cached component: StatChart
📋 Extracted metadata for StatChart: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for StatChart: [ 'data', 'type', 'key', 'loading' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: StatChart with React SSR...
🔧 Processed props for StatChart: [ 'data', 'type', 'key', 'loading' ]
✅ Successfully rendered: StatChart (477 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: StatChart
✅ Boundary injected for StatChart (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html (5510 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for StatChart (loading)
Navigating to http://localhost:3333/test-enhanced/T-1.1.4/StatChart?props=%7B%22error%22%3A%22Test%20error%20message%22%7D
🎯 Serving REAL React component: StatChart for task T-1.1.4
🏗️  Creating REAL React scaffold for StatChart in task T-1.1.4...
📦 Importing component: StatChart
📦 Using cached component: StatChart
📋 Extracted metadata for StatChart: { type: 'client', dependencies: 1, hasBrowserAPIs: false }
🔧 Final props for StatChart: [ 'data', 'type', 'key', 'error' ]
🎨 Rendering component with React SSR...
🎨 Rendering component: StatChart with React SSR...
🔧 Processed props for StatChart: [ 'data', 'type', 'key', 'error' ]
✅ Successfully rendered: StatChart (477 chars)
🎨 Processing CSS styles...
🎨 Creating complete scaffold styles...
📦 Using cached global CSS
✅ Complete scaffold styles created (2638 characters)
🎯 Injecting visual boundaries...
🎯 Injecting client boundary for: StatChart
✅ Boundary injected for StatChart (client)
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html (5538 bytes)
✅ REAL React scaffold created: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\StatChart-enhanced.html
🎯 Serving REAL React component: tailwindcss for task T-1.1.4
🏗️  Creating REAL React scaffold for tailwindcss in task T-1.1.4...
📦 Importing component: tailwindcss
📦 Importing component: tailwindcss
❌ Failed to import tailwindcss: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
❌ Failed to create scaffold for tailwindcss: Error: Component tailwindcss not found. Searched in C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\app\_components with extensions: .tsx, .jsx, .ts, .js
    at ComponentImporter.resolveComponentPath (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:46:11)
    at ComponentImporter.loadComponent (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\component-importer.js:124:92)
    at EnhancedScaffoldGenerator.createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:52:54)
    at createEnhancedScaffold (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\scaffold-templates\create-enhanced-scaffold.js:487:42)   
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\server-manager\enhanced-server.js:62:36
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\node_modules\express\lib\router\index.js:284:15
🚨 Creating error scaffold for tailwindcss...
🔄 Using fallback CSS...
📁 Scaffold written: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html (4021 bytes)
✅ Serving real React scaffold: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scaffolds\T-1.1.4\tailwindcss-ERROR-enhanced.html
Enhanced screenshot captured for StatChart (error)
Comparing with references...
[DEBUG] typeof pixelmatch: object
[DEBUG] pixelmatch value: [Module: null prototype] {
  __esModule: true,
  default: [Function: pixelmatch]
}
Visual regression testing modules not found or failed to load: pixelmatch is not a function
Running in screenshot capture mode only
Shutting down test server...
Test server stopped
Tests completed: 27 passed, 0 failed
james@BrightHub ~/Master/BrightHub/Build/APSD-runs/aplio-27-a1-c/aplio-modern-1  $ 