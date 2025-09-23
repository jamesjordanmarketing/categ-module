# Development Context & Operational Priorities
**Date:** 09-18-25-0546PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run is a revolutionary LoRA fine-tuning training data platform (bmo)**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

This document defines the functional requirements for the **Document Categorization Module** - a standalone 3-step workflow system that enables users to categorize individual documents through Statement of Belonging assessment, primary category selection, and comprehensive metadata tagging. This module is designed as a focused component that can operate independently and serves as a foundation for future AI training data optimization.

**Key Constraint:** This specification covers ONLY the categorization workflow as implemented in the wireframes. Features such as document upload, content processing, AI analysis, collaborative review, and synthetic generation are explicitly excluded from this implementation.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task T-1.1.2: Workflow Progress System Validation - Implementation Phase**

**What is being worked on:** Transitioning from completed T-1.1.1 (Document Selection Interface Validation) to full implementation of T-1.1.2 Workflow Progress System Validation. The task involves validating and enhancing the WorkflowProgressServer (server component) and WorkflowProgressClient (client component) integration across all three categorization workflow stages (Stage 1: Statement of Belonging, Stage 2: Primary Category, Stage 3: Secondary Tags).

**Why it is being worked on:** This task serves as the critical progress tracking validation point for the document categorization workflow system. It ensures that users can visualize their progress, navigate between stages appropriately, and understand where they are in the 3-step categorization process. The implementation validates server/client component architecture, progress bar accuracy, step completion indicators, and navigation validation enforcement.

**Current state of implementation:** Based on T-1.1.1 completion, the foundation systems are fully operational:
- DocumentSelectorServer/Client components are validated and working correctly
- Zustand store integration confirmed with document context persistence  
- Next.js App Router dynamic routing (`/workflow/[documentId]/stage1`, `/stage2`, `/stage3`) is operational
- Mock data system with 3 comprehensive documents is functional
- Server/client component separation patterns are established and validated

**Critical context needed for continuation:** The implementation agent must focus on validation rather than creation - progress components likely exist but need thorough validation against T-1.1.2 acceptance criteria. Testing revealed the foundational workflow system works, but progress tracking validation is required to meet the specific acceptance criteria for T-1.1.2:ELE-1 (progress tracking validation) and T-1.1.2:ELE-2 (navigation system validation).

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 

**Task ID:** T-1.1.2
**Task Title:** Workflow Progress System Validation  
**Current Phase:** Preparation (ready to begin)
**Active Element:** T-1.1.2:ELE-1 (Progress tracking validation)
**Last Recorded Action:** T-1.1.1 validation phase completed successfully with all acceptance criteria met. Ready to begin T-1.1.2 implementation validation phase with established foundation components.

### Next Steps 

1. **PREP-1**: Review current progress tracking implementation in 4-categories-wf/src/components/server/WorkflowProgressServer.tsx - No dependencies - Validate server component implements T-1.1.2:ELE-1 requirements correctly

2. **PREP-2**: Analyze navigation validation logic in workflow store (4-categories-wf/src/stores/workflow-store.ts) - No dependencies - Confirm store supports progress tracking and navigation validation scenarios

3. **IMP-1**: Test progress bar updates across all three workflow stages (T-1.1.2:ELE-1) - Requires PREP completion - Validate progress indicators display correctly across stages 

4. **IMP-2**: Validate step completion indicators and checkmarks (T-1.1.2:ELE-1) - Requires PREP completion - Ensure step completion visual feedback works properly

5. **VAL-1**: Confirm progress tracking accuracy across complete workflow - Requires IMP completion - Verify acceptance criteria are met for both elements

### Critical Implementation Context

**Implementation Validation Requirements:** The implementation agent must validate existing progress components against specific acceptance criteria rather than building from scratch. Both WorkflowProgressServer and WorkflowProgressClient components likely exist and should be functional, but require validation against T-1.1.2:ELE-1 and T-1.1.2:ELE-2 specifications.

**Progress Tracking Validation (ELE-1):** WorkflowProgressServer must correctly implement progress bar updates that reflect current workflow stage completion. Must verify progress indicators show accurate percentage completion across all three stages (Stage 1: ~33%, Stage 2: ~66%, Stage 3: 100%).

**Navigation System Validation (ELE-2):** Navigation controls must enforce proper stage progression - users cannot skip incomplete stages, but can navigate backward to completed stages. Must validate App Router integration works correctly with dynamic document routing patterns.

### Important Files

1. **4-categories-wf/src/components/server/WorkflowProgressServer.tsx** - Main server component for T-1.1.2:ELE-1 validation - Implementation status unknown, requires validation
2. **4-categories-wf/src/components/client/WorkflowProgressClient.tsx** - Main client component for progress UI and navigation - Implementation status unknown, requires validation  
3. **4-categories-wf/src/stores/workflow-store.ts** - Zustand store with workflow state management - Confirmed functional from T-1.1.1, contains step completion tracking
4. **4-categories-wf/src/app/(workflow)/workflow/[documentId]/stage1/page.tsx** - Stage 1 layout confirmed from T-1.1.1 - Working, includes StepAServer integration
5. **4-categories-wf/src/app/(workflow)/workflow/[documentId]/stage2/page.tsx** - Stage 2 layout for primary category selection - Status unknown, requires validation
6. **4-categories-wf/src/app/(workflow)/workflow/[documentId]/stage3/page.tsx** - Stage 3 layout for secondary tags - Status unknown, requires validation
7. **pmc/core/active-task.md** - Current task specifications and acceptance criteria - Contains detailed T-1.1.2 requirements and validation criteria

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/active-task.md** - Lines 83-86: Component/Element specifications for T-1.1.2:ELE-1 and T-1.1.2:ELE-2
2. **pmc/core/active-task.md** - Lines 103-106: Implementation Phase steps (IMP-1 through IMP-4) 
3. **pmc/core/active-task.md** - Lines 116-118: Validation Phase requirements (VAL-1 through VAL-3)
4. **pmc/product/06-aplio-mod-1-tasks.md** - Line 5094+: Detailed task specifications for T-1.1.2 requirements  
5. **pmc/product/_mapping/test-maps/07-bmo-test-mapping-output-E01-custom_v1.md** - Customized testing plan based on T-1.1.1 implementation - Contains remaining testing requirements post-validation

### Existing Implementation Instructions Adaptations

**You must adapt your implementation approach based on these findings from the T-1.1.1 implementation:**

1. **Validation-First Strategy Confirmed**: Focus on validating existing implementation against acceptance criteria rather than building new components. This approach proved successful in T-1.1.1.

2. **Server/Client Component Pattern Established**: The server/client separation pattern is confirmed working from T-1.1.1. WorkflowProgressServer should handle progress state retrieval; WorkflowProgressClient should handle progress display and navigation interactions.

3. **Zustand Store Integration Verified**: The workflow store (4-categories-wf/src/stores/workflow-store.ts) contains all necessary state management including `currentStep`, `completedSteps`, and `currentDocument`. Use existing store patterns rather than creating new state management.

4. **Next.js App Router Pattern Confirmed**: Dynamic routing with `/workflow/[documentId]/stage1|2|3` is fully operational. Navigation pattern uses `router.push()` with document ID preservation throughout stages.

### Modified Implementation Approaches

**Key Changes to Standard Implementation Approach Based on T-1.1.1 Results:**

1. **Progress Tracking Validation Priority**: Progress bar accuracy is critical - users must understand their position in the 3-step workflow. Validate percentage calculations match actual stage completion.

2. **Navigation Validation Enforcement**: Stage progression rules are essential - incomplete stages must be blocked while allowing backward navigation to completed stages.

3. **Component Integration Testing**: Verify progress components integrate properly with existing StepA/B/C components and maintain consistent UI patterns established in T-1.1.1.

### Eliminated Requirements

**Implementation steps that are now obsolete due to completed work on T-1.1.1:**

1. **Basic App Router Setup**: Do not setup basic routing infrastructure - confirmed working from T-1.1.1
2. **Zustand Store Creation**: Do not create new store architecture - comprehensive store already functional  
3. **Mock Data Integration**: Do not design mock data integration - confirmed working with 3-document system
4. **Basic Component Architecture**: Do not design server/client component patterns - established and validated

### Additional Testing Needs

**Fresh implementation scenarios identified during T-1.1.2 validation that may not be documented in active-task.md:**

1. **Cross-Stage Progress Synchronization**: Validate progress bar updates correctly when navigating between completed stages
2. **Navigation State Persistence**: Ensure navigation restrictions persist across page refreshes and direct URL access
3. **Progress Indicator Accessibility**: Confirm progress indicators meet accessibility standards for screen readers and keyboard navigation
4. **Stage Completion Edge Cases**: Test progress tracking with partially completed stages and validation failures
5. **URL Route Protection**: Verify users cannot access higher stages through direct URL manipulation when prerequisites are incomplete

### Acceptance Criteria

**Fresh acceptance criteria identified during T-1.1.1 implementation that must be validated for T-1.1.2:**

1. **Progress Bar Accuracy**: Progress indicators must show accurate completion percentages: Stage 1 start (0%), Stage 1 complete (~33%), Stage 2 complete (~66%), Stage 3 complete (100%)
2. **Navigation Control Enforcement**: Navigation must prevent access to incomplete stages while allowing backward navigation to completed stages
3. **Visual Feedback Consistency**: Step completion indicators (checkmarks, progress bars) must use consistent styling and behavior patterns established in T-1.1.1
4. **App Router Integration Reliability**: Dynamic routing must work seamlessly across all three workflow stages with document context preservation
5. **State Management Accuracy**: Workflow store must accurately track step completion and current progress across stage transitions

### Recent Development Context

- **Last Milestone**: Completed comprehensive T-1.1.1 Document Selection Interface Validation including server component validation, client state management verification, and Next.js App Router integration testing

- **Key Outcomes**: 
  - DocumentSelectorServer and DocumentSelectorClient components are fully validated and functional
  - Mock data system with 3 comprehensive documents works correctly with all components  
  - Next.js App Router integration with `/workflow/[documentId]/stage1` navigation is operational
  - Zustand store integration for document context persistence is confirmed working
  - Server/client component architecture separation is properly implemented and validated

- **Relevant Learnings**: 
  - Validation-first approach is more effective than building from scratch when components exist
  - Server component isolation (no 'use client' directive) is critical for proper Next.js 14 App Router compliance
  - Zustand store persistence middleware works reliably for workflow state management
  - Component boundaries between server rendering and client interactions must be maintained strictly

- **Technical Context**: 
  - All T-1.1.1 components use consistent TypeScript interfaces from workflow-store.ts
  - Progress tracking state management already exists in Zustand store with `currentStep` and `completedSteps` properties
  - App Router dynamic segments ([documentId]) are working correctly with server component prop passing
  - Mock data structure supports all validation scenarios without requiring modifications

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