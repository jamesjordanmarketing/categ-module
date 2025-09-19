# Build Issues and Fixes Documentation - Step Diary v2

## Overview
This document captures all build issues encountered when compiling a Figma-generated Next.js project and their corresponding fixes. These issues are common when the local development environment differs from the Figma generation environment.

## Build Issues and Solutions

### 1. Missing Dependencies

#### Problem
Multiple Radix UI components and other packages were missing from `package.json`, causing module resolution errors during build.

#### Errors Encountered
```
Cannot find module '@radix-ui/react-context-menu' or its corresponding type declarations
Cannot find module '@radix-ui/react-menubar' or its corresponding type declarations
Cannot find module '@radix-ui/react-navigation-menu' or its corresponding type declarations
```

#### Solution
Added missing dependencies to `package.json`:

```json
{
  "dependencies": {
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "next-themes": "^0.2.1",
    "sonner": "^1.4.0",
    "vaul": "^0.9.0"
  }
}
```

**Action Required**: Run `npm install` after adding dependencies.

### 2. Versioned Import Statements

#### Problem
Import statements included version numbers, which are not valid in standard npm imports.

#### Error Example
```typescript
// Problematic import
import { cva } from "class-variance-authority@0.7.1"
```

#### Solution
Removed version numbers from import statements:

```typescript
// Fixed import
import { cva } from "class-variance-authority"
```

**Files Affected**: Multiple UI component files

### 3. Incorrect Export References

#### Problem
Import statements referenced non-existent exports from mock data files.

#### Error Example
```typescript
// Problematic import
import { mockCategories } from "@/data/mock-data"
```

#### Solution
Updated imports to use correct export names:

```typescript
// Fixed import
import { primaryCategories } from "@/data/mock-data"
```

**Files Affected**: `WorkflowCompleteClient.tsx`

### 4. Document Type Conflicts

#### Problem
Conflicts between browser `Document` type and custom document interfaces in client components.

#### Error Example
```
Type 'Document' is not assignable to type 'Document'
```

#### Solution
Renamed conflicting imports and used `globalThis.document` for DOM access:

```typescript
// Before
import { Document } from "@/types/document"
const doc = document.createElement('a')

// After
import { Document as DocumentType } from "@/types/document"
const doc = globalThis.document.createElement('a')
```

**Files Affected**: `WorkflowCompleteClient.tsx`

### 5. Metadata Property Issues

#### Problem
Incorrect metadata property assignments in API routes.

#### Error Example
```typescript
// Problematic code
return new Response(buffer, {
  headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${filename}"`
  },
  metadata: { filename } // Invalid property
})
```

#### Solution
Removed invalid `metadata` property from Response constructor:

```typescript
// Fixed code
return new Response(buffer, {
  headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${filename}"`
  }
})
```

**Files Affected**: `src/app/api/export/route.ts`

### 6. Tooltip Component Ref Props

#### Problem
Radix UI Tooltip components don't accept `ref` props in their current version.

#### Errors Encountered
```
Property 'ref' does not exist on type 'TooltipProviderProps'
Property 'ref' does not exist on type 'TooltipProps'
```

#### Solution
Removed `ref` props from Tooltip components:

```typescript
// Before
<TooltipPrimitive.Provider ref={ref} {...props}>
<TooltipPrimitive.Root ref={ref} {...props}>

// After
<TooltipPrimitive.Provider {...props}>
<TooltipPrimitive.Root {...props}>
```

**Files Affected**: `src/components/ui/tooltip.tsx`

### 7. Supabase Edge Functions Build Conflicts

#### Problem
Supabase Edge Functions use Deno-style `npm:` imports that conflict with Next.js TypeScript compilation.

#### Error Example
```
Cannot find module 'npm:hono' or its corresponding type declarations
```

#### Solution
Excluded Supabase functions directory from TypeScript compilation in `tsconfig.json`:

```json
{
  "exclude": [
    "node_modules",
    "src/supabase/functions/**/*"
  ]
}
```

**Files Affected**: `tsconfig.json`

## Prevention Checklist

When working with Figma-generated code, check these items before building:

### Dependencies
- [ ] Verify all imported packages are listed in `package.json`
- [ ] Check for missing Radix UI components
- [ ] Ensure UI library versions are compatible

### Import Statements
- [ ] Remove version numbers from import paths
- [ ] Verify export names match actual exports
- [ ] Check for conflicting type names

### Component Props
- [ ] Verify component prop compatibility with library versions
- [ ] Remove unsupported props (like `ref` on certain Radix components)

### Build Configuration
- [ ] Exclude incompatible directories from TypeScript compilation
- [ ] Check for environment-specific imports

### Type Safety
- [ ] Resolve DOM type conflicts
- [ ] Fix Response constructor usage in API routes

## Common Commands

```bash
# Install dependencies
npm install

# Check for build issues
npm run build

# Type check only
npx tsc --noEmit

# Start development server
npm run dev
```

## Notes

- These issues are primarily due to differences between Figma's code generation environment and local development setup
- Most fixes involve dependency management and TypeScript compatibility
- Always test the build process after making changes
- Consider creating a post-generation script to automate common fixes

## Build Success Indicators

✅ **Successful Build Output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Generating static pages
```

**Final Build Stats:**
- Route (app): 11 pages
- Size First Load JS: ~87.1 kB
- All pages successfully generated

---

*Last Updated: [Current Date]*
*Project: BrightHub Cat Module*
*Environment: Windows + Next.js + TypeScript*