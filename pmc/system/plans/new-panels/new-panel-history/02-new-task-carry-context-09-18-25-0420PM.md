# Development Context & Operational Priorities
**Date:** 09-18-25-0420PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run is a revolutionary LoRA fine-tuning training data platform (bmo)**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

This document defines functional requirements for the **Document Categorization Module** - a standalone 3-step workflow system that enables users to categorize individual documents through Statement of Belonging assessment, primary category selection, and comprehensive metadata tagging. This module is designed as a focused component that can operate independently and serves as a foundation for future AI training data optimization.

**Key Constraint:** This specification covers ONLY the categorization workflow as implemented in the wireframes. Features such as document upload, content processing, AI analysis, collaborative review, and synthetic generation are explicitly excluded from this implementation.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task T-1.1.1: Document Selection Interface Validation - Implementation Phase**

**What is being worked on:** Transitioning from completed testing phase to full implementation of T-1.1.1 Document Selection Interface Validation. The task involves validating and enhancing the DocumentSelectorServer (server component) and DocumentSelectorClient (client component) integration with Next.js 14 App Router architecture.

**Why it is being worked on:** This task serves as a critical validation point for the document categorization workflow system. It ensures that the foundational document selection interface works correctly before proceeding to T-1.1.2 (Workflow Progress System Validation). The implementation validates server/client component architecture, document data flow, and workflow initiation mechanisms.

**Current state of implementation:** Testing phase has been completed with comprehensive test protocols. The components exist and are functional:
- DocumentSelectorServer.tsx: Server component that fetches mock data and renders DocumentSelectorClient
- DocumentSelectorClient.tsx: Client component with search/filter functionality, document cards, and workflow navigation
- Mock data system with 3 comprehensive documents and extensive categorization framework
- Integration with Next.js App Router for workflow navigation

**Critical context needed for continuation:** The implementation agent must focus on validation rather than creation - components exist but need thorough validation against acceptance criteria. Testing revealed the system works but implementation validation is required to meet the specific acceptance criteria for T-1.1.1:ELE-1 (server component validation) and T-1.1.1:ELE-2 (client component integration).

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 

**Task ID:** T-1.1.1
**Task Title:** Document Selection Interface Validation
**Current Phase:** Preparation (transitioning to Implementation)
**Active Element:** T-1.1.1:ELE-1 (Server component validation)
**Last Recorded Action:** Testing phase completed successfully with comprehensive test protocols for both server and client components. Ready to begin implementation validation phase.

### Critical Implementation Context

**Implementation Validation Requirements:** The implementation agent must validate existing components against specific acceptance criteria rather than building from scratch. Both DocumentSelectorServer and DocumentSelectorClient components are implemented and functional, but require validation against T-1.1.1:ELE-1 and T-1.1.1:ELE-2 specifications.

**Server Component Validation (ELE-1):** DocumentSelectorServer correctly implements async server component pattern with mock data fetching and efficient rendering. Must verify proper server component behavior without client-side state or interactivity.

**Client Component Integration (ELE-2):** DocumentSelectorClient implements document selection state management, search/filtering functionality, and Next.js App Router navigation to workflow stages. Must validate state persistence and navigation integration.

### Next Steps 

1. **PREP-1**: Review existing DocumentSelectorServer component structure (4-categories-wf/src/components/server/DocumentSelectorServer.tsx) - No dependencies - Validate server component implements ELE-1 requirements correctly

2. **PREP-2**: Analyze current mock data structure and document properties (4-categories-wf/src/data/mock-data.ts) - No dependencies - Confirm mock data supports all validation scenarios  

3. **IMP-1**: Test server component rendering with all mock documents (T-1.1.1:ELE-1) - Requires PREP completion - Validate server component displays all documents correctly

4. **IMP-2**: Validate client component state management and selection logic (T-1.1.1:ELE-2) - Requires PREP completion - Ensure document selection state works properly

5. **VAL-1**: Verify all documents display correctly with proper formatting - Requires IMP completion - Confirm acceptance criteria are met for both elements

### Existing Implementation Instructions Adaptations

**You must adapt your implementation approach based on these findings from the previous testing phase:**

1. **Mock Data Integration**: The system uses comprehensive mock data (4-categories-wf/src/data/mock-data.ts) with 3 fully-detailed documents and extensive categorization framework. Do not modify this mock data - validate components work correctly with existing structure.

2. **Component Architecture Confirmed**: Server/client split is correctly implemented. DocumentSelectorServer handles data fetching; DocumentSelectorClient handles user interactions. Validate this separation is maintained properly.

3. **Navigation Pattern Established**: Client component uses Next.js App Router with router.push(`/workflow/${document.id}/stage1`) for workflow initiation. Validate this navigation works correctly and document context persists.

### Modified Implementation Approaches

**Key Changes to Standard Implementation Approach:**

1. **Validation-First Strategy**: Focus on validating existing implementation against acceptance criteria rather than building new components.

2. **Server Component Verification**: Confirm DocumentSelectorServer properly implements async data fetching without client-side state or 'use client' directive.

3. **Client State Management Testing**: Validate DocumentSelectorClient manages search/filter state correctly while maintaining server-rendered initial data.

### Eliminated Requirements

**Implementation steps that are now obsolete due to completed work on T-1.1.1:**

1. **Component Creation**: Do not create DocumentSelectorServer or DocumentSelectorClient - they exist and are functional
2. **Mock Data Design**: Do not design mock data structure - comprehensive system already implemented
3. **Basic UI Layout**: Do not design basic interface - styled components with Tailwind CSS already implemented
4. **Routing Setup**: Do not setup basic navigation - Next.js App Router integration already complete

### Important Files

1. **4-categories-wf/src/components/server/DocumentSelectorServer.tsx** - Main server component for T-1.1.1:ELE-1 validation - Implemented and functional, requires validation
2. **4-categories-wf/src/components/client/DocumentSelectorClient.tsx** - Main client component for T-1.1.1:ELE-2 validation - Implemented with full UI and state management, requires validation  
3. **4-categories-wf/src/data/mock-data.ts** - Mock data with 3 documents and categorization system - Complete implementation, do not modify
4. **4-categories-wf/src/app/(dashboard)/dashboard/page.tsx** - Main page that renders DocumentSelectorServer - Simple implementation, entry point for testing
5. **pmc/core/active-task.md** - Current task specifications and acceptance criteria - Contains detailed requirements for validation
6. **4-categories-wf/src/stores/workflow-store.ts** - Type definitions for Document interface - Referenced by components, contains TypeScript types

### Additional Testing Needs

**Fresh implementation scenarios identified during T-1.1.1 testing but not yet documented in active-task.md:**

1. **Error Boundary Testing**: Validate proper error handling when mock data fails to load in server component
2. **Accessibility Validation**: Confirm document selection interface meets accessibility standards for keyboard navigation and screen readers  
3. **Performance Validation**: Verify server component efficiently handles mock data without unnecessary re-renders
4. **Type Safety Verification**: Ensure TypeScript interfaces properly constrain component props and state
5. **Navigation Context Persistence**: Test that selected document context correctly transfers to workflow stages

### Specification References

**You must reference these authoritative documents for T-1.1.1 implementation:**

1. **pmc/core/active-task.md** - Lines 83-86: Component/Element specifications for T-1.1.1:ELE-1 and T-1.1.1:ELE-2
2. **pmc/core/active-task.md** - Lines 92-106: Implementation Phase steps (IMP-1 through IMP-4) 
3. **pmc/core/active-task.md** - Lines 116-118: Validation Phase requirements (VAL-1 through VAL-3)
4. **pmc/product/06-aplio-mod-1-tasks.md** - Line 617+: Detailed task specifications for T-1.1.1 requirements
5. **pmc/core/active-task-unit-tests-2.md** - Lines 1-749: Comprehensive testing protocol that was completed successfully

### Acceptance Criteria

**Fresh acceptance criteria identified during T-1.1.1 testing that must be validated:**

1. **Server Component Isolation**: DocumentSelectorServer must operate without any 'use client' directive and handle async data fetching correctly
2. **Mock Data Rendering**: All 3 mock documents (doc-1, doc-2, doc-3) must render with proper titles, summaries, and metadata display
3. **Client State Management**: DocumentSelectorClient must maintain search/filter state without interfering with server-rendered initial data
4. **Workflow Navigation**: Document selection must correctly trigger Next.js App Router navigation to `/workflow/{document.id}/stage1`
5. **Component Boundaries**: Clear separation between server data fetching and client interaction logic must be maintained
6. **Performance Standards**: Server component must complete data fetching within 100ms simulation delay without blocking client interactions

### Recent Development Context

- **Last Milestone**: Completed comprehensive testing phase for T-1.1.1 Document Selection Interface Validation including 4-phase testing protocol (Environment Setup, Component Discovery, Unit Testing, Visual Testing)

- **Key Outcomes**: 
  - Both DocumentSelectorServer and DocumentSelectorClient components are fully implemented and functional
  - Mock data system with 3 comprehensive documents and extensive categorization framework is complete
  - Next.js App Router integration for workflow navigation is working correctly
  - Server/client component architecture separation is properly implemented

- **Relevant Learnings**: 
  - Validation-first approach is more appropriate than building from scratch when components exist
  - Mock data structure supports all required testing scenarios without modification
  - Testing revealed components meet core functionality requirements but need formal validation against acceptance criteria

- **Technical Context**: 
  - DocumentSelectorServer uses async server component pattern with 100ms simulated delay
  - DocumentSelectorClient implements React hooks (useState, useRouter) with proper TypeScript typing
  - Mock data exports from 4-categories-wf/src/data/mock-data.ts include 3 documents plus comprehensive category/tag system
  - Navigation pattern uses router.push(`/workflow/${document.id}/stage1`) for workflow initiation

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Aplio Design System Modernization Project

#### Project Overview
This project aims to transform the existing JavaScript-based Aplio theme into a modern TypeScript-powered Next.js 14 platform. The project specifically focuses on migrating the Home 4 template (https://js-aplio-6.vercel.app/home-4) as the flagship demonstration while preserving Aplio's premium design aesthetics from the existing design system in `/aplio-legacy/`.

#### Key Documents
1. Seed Story: `pmc/product/00-aplio-mod-1-seed-story.md`
2. Project Overview: `pmc/product/00-aplio-mod-1-seed-narrative.md`
3. Raw Data: `pmc/product/_seeds/00-narrative-raw_data-ts-14-v3.md`

#### Project Objectives

##### Primary Goals
1. Migrate Home 4 template to Next.js 14 App Router architecture
2. Preserve exact design elements from `/aplio-legacy/`
3. Implement TypeScript with full type safety
4. Maintain premium design quality and animations

##### Technical Requirements
1. Next.js 14 App Router implementation
2. Complete TypeScript migration
3. Modern component architecture
4. Performance optimization

##### Design Requirements
1. Exact preservation of design elements from `/aplio-legacy/`
2. Maintenance of animation quality
3. Responsive behavior preservation
4. Professional template implementation

### Project Memory Core (PMC) System

#### Core Functionality
Everything in this section is supporting information only. Do NOT select the current task focus from this section.
PMC is a structured modern software development task management and context retention system built around the the main active task file as its central operational component. PMC is product agnostic. In this instance we are using it to code the Aplio Design System Modernization (aplio-mod-1) system described above. The system provides:

1. **Context Locality**: Instructions and context are kept directly alongside their relevant tasks
2. **Structured Checkpoints**: Regular token-based checks prevent context drift
3. **Directive Approach**: Clear commands and instructions with explicit timing requirements
4. **Task-Centric Documentation**: Single source of truth for task implementation

#### Commands

The driver for most PMC commands are in:
`pmc/bin/aplio-agent-cli.js`

The code for most PMC commands are contained within:
- The original context manager script: `pmc/system/management/context-manager.js`
- The second context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)
- The third context manager script: `pmc/system/management/context-manager-v3.js` (created when the second got too large)

Here are some important PMC commands:

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Add Structured Test Approaches
```bash
node pmc/bin/aplio-agent-cli.js test-approach

#### Project Structure
```
project-root/aplio-legacy/ (legacy system)
project-root/aplio-modern-1/ (new system)
project-root/pmc/ (PMC system)

```