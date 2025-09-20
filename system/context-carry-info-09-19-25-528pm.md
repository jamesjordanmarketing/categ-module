# Development Context & Operational Priorities
**Date:** 2025-09-19 17:28 PST
**Project:** Bright Run LoRA Training Data Platform (bmo) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run LoRA Training Data Platform**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

### What Problem Does This Product Solve?

Small business owners and domain experts possess invaluable proprietary knowledge—from marketing philosophies to operational processes—but face insurmountable barriers in transforming this knowledge into LoRA ready training data.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

#### Document Categorization System - Database Integration Status

##### 📋 Project Summary

This is a Next.js document categorization application that allows users to categorize documents through a multi-step workflow. The application has been successfully deployed to Vercel with working UI components, but currently operates in "demo mode" using mock data instead of real database operations.

###### What Led to This Point

1. **Initial Deployment Issues**: The Vercel deployment was showing plain text without CSS/JavaScript
2. **CSS Configuration Fixed**: Added proper Tailwind CSS configuration (`tailwind.config.js`, `postcss.config.js`) and updated `src/app/globals.css`
3. **UI Now Working**: Application displays correctly with functional buttons, selections, and navigation
4. **Database Investigation**: Discovered that document choices are not being saved to Supabase database

###### Current Application Status

✅ **Working Components**:
- UI/UX fully functional with Tailwind CSS
- Document selection workflow (Steps A, B, C)
- Category and tag selection interfaces
- Navigation and state management
- Vercel deployment: https://categ-module.vercel.app/dashboard

❌ **Missing Database Integration**:
- No actual Supabase tables created
- API endpoints return mock responses
- Workflow data not persisted to database
- Using mock data throughout the application

##### 🔧 Database Integration Issues to Fix

###### Issue 1: Missing Database Schema

**Problem**: Required Supabase tables don't exist
- Tables needed: `documents`, `workflow_sessions`, `categories`, `tags`, `tag_dimensions`, `user_profiles`, `processing_jobs`
- Current error: "Could not find the table 'public.documents' in the schema cache"

**Solution**: 
- Run the provided `setup-database.sql` script in Supabase SQL Editor
- Script includes complete schema with relationships, indexes, RLS policies, and sample data
- File location: `setup-database.sql` (root directory)

###### Issue 2: Mock API Responses

**Problem**: API endpoints return simulated success without database operations
- File: `src/app/api/workflow/route.ts`
- Current behavior: Returns mock `workflowId` and success messages
- No actual Supabase integration in POST handlers

**Solution**: Replace mock responses with real Supabase operations
```typescript
// Current (lines 50-92):
return NextResponse.json({ 
  success: true, 
  workflowId: `workflow-${Date.now()}` 
});

// Needs to become:
const { data, error } = await supabase
  .from('workflow_sessions')
  .insert(workflowData)
  .select()
  .single();
```

###### Issue 3: Mock Store Operations

**Problem**: Workflow store simulates database operations
- File: `src/stores/workflow-store.ts`
- Function: `submitWorkflow` (lines 198-227)
- Current: 2-second delay simulation, no real API calls

**Solution**: Update to call real API endpoints
```typescript
// Replace simulation with:
const response = await fetch('/api/workflow', {
  method: 'POST',
  body: JSON.stringify({ action: 'submit', ...workflowData })
});
```

###### Issue 4: Database Service Layer

**Problem**: Database services use mock implementations
- File: `src/lib/database.ts`
- Current: Returns mock data from `src/data/supabase-mock.ts`

**Solution**: Implement real Supabase operations
- Replace mock functions with actual Supabase client calls
- Use proper error handling and data validation
- Maintain same interface for seamless integration

##### 🛠️ Implementation Plan

###### Step 1: Database Setup (Priority: HIGH)
1. Access Supabase project dashboard
2. Navigate to SQL Editor
3. Run `setup-database.sql` script
4. Verify tables created successfully
5. Test with `node test-database.js` (comprehensive test script provided)

###### Step 2: API Integration (Priority: HIGH)
1. Update `src/app/api/workflow/route.ts`:
   - Import Supabase client
   - Replace mock responses with real database operations
   - Handle `save_draft`, `submit`, and `validate` actions
   - Add proper error handling

###### Step 3: Store Integration (Priority: MEDIUM)
1. Update `src/stores/workflow-store.ts`:
   - Replace `submitWorkflow` simulation with real API calls
   - Update `saveDraft` function
   - Add proper loading states and error handling

###### Step 4: Database Service Layer (Priority: MEDIUM)
1. Update `src/lib/database.ts`:
   - Replace mock implementations with real Supabase operations
   - Maintain existing function signatures
   - Add proper TypeScript types

###### Step 5: Testing & Verification (Priority: HIGH)
1. Run `node test-database.js` to verify database connectivity
2. Test complete workflow in browser
3. Verify data persistence in Supabase dashboard
4. Test error scenarios and edge cases

##### 📁 Key Files to Modify

| File Path | Purpose | Changes Needed |
|-----------|---------|----------------|
| `setup-database.sql` | Database schema | ✅ Ready to run |
| `test-database.js` | Verification script | ✅ Ready to use |
| `src/app/api/workflow/route.ts` | API endpoints | Replace mock responses |
| `src/stores/workflow-store.ts` | State management | Replace simulations |
| `src/lib/database.ts` | Database services | Replace mock data |
| `src/lib/supabase.ts` | Supabase client | ✅ Already configured |

##### 🎯 Success Criteria

1. **Database Tables**: All required tables exist and are accessible
2. **API Functionality**: POST requests save real data to Supabase
3. **Data Persistence**: Workflow sessions persist between browser sessions
4. **Error Handling**: Proper error messages for database failures
5. **Test Verification**: `test-database.js` passes all checks

##### 🔍 Verification Commands

```bash
# Test database connectivity and operations
node test-database.js

# Start development server
npm run dev

# Build and test production
npm run build
```

##### 📚 Additional Context

- **Supabase Configuration**: Already set up in `src/utils/supabase/info.tsx`
- **Environment**: Vercel deployment working, local development ready
- **Dependencies**: All required packages installed (including `node-fetch` for testing)
- **UI/UX**: Fully functional, no frontend changes needed
- **Authentication**: Not implemented yet (future consideration)

The next coding agent should focus on database integration while preserving the existing UI functionality. The application architecture is solid; it just needs to connect to real data storage instead of mock implementations.

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Bright Run LoRA Training Data Platform

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run LoRA Training Data Platform**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

### What Problem Does This Product Solve?

Small business owners and domain experts possess invaluable proprietary knowledge—from marketing philosophies to operational processes—but face insurmountable barriers in transforming this knowledge into LoRA ready training data.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.
