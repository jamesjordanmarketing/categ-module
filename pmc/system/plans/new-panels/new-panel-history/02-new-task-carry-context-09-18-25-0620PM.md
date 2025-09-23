# Development Context & Operational Priorities
**Date:** 09-18-25-0620PM
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

**Task T-1.1.3: Data Persistence and Draft Management Validation - Preparation Phase**

**What is being worked on:** Transitioning from completed T-1.1.2 (Workflow Progress System Validation) to full implementation of T-1.1.3 Data Persistence and Draft Management Validation. The task involves validating and potentially enhancing the Zustand persist middleware configuration in the workflow store to ensure auto-save functionality and session restoration work correctly across all workflow stages.

**Why it is being worked on:** This task serves as the critical data persistence validation point for the document categorization workflow system. It ensures that user progress, selections, and workflow state are automatically saved and can be restored across browser sessions, page refreshes, and workflow interruptions. The implementation validates auto-save triggers, localStorage data integrity, and complete session restoration functionality.

**Current state of implementation:** Based on T-1.1.2 completion, the foundational workflow system is fully operational and validated:
- Progress tracking system validated with accurate percentage calculations (0% → 33% → 67% → 100%)
- Navigation validation implemented with RouteGuard component preventing unauthorized stage access
- Server/client component separation maintained and validated
- Zustand store with persist middleware already configured but not fully validated
- All progress components depend on persistent state for accurate display
- RouteGuard navigation protection relies on persisted `completedSteps` state

**Critical context needed for continuation:** The implementation agent must focus on validation and enhancement of existing persistence rather than creation from scratch. The Zustand store already includes persist middleware configuration, but comprehensive validation is required against T-1.1.3 acceptance criteria. The persistence functionality is critical infrastructure that affects all previously implemented components including progress tracking and navigation validation.

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 

**Task ID:** T-1.1.3
**Task Title:** Data Persistence and Draft Management Validation  
**Current Phase:** Preparation (ready to begin)
**Active Element:** T-1.1.3:ELE-1 (Auto-save functionality validation)
**Last Recorded Action:** T-1.1.2 validation phase completed successfully with all acceptance criteria met and critical navigation security fixes implemented. Ready to begin T-1.1.3 persistence validation with established foundation components.

### Critical Implementation Context

**Progress Calculation Fix Applied**: During T-1.1.2, a critical bug was discovered in the progress percentage calculation logic. The original implementation showed incorrect percentages (17%/50%/83%) instead of the required 0%/33%/67%/100%. This has been fixed and validated programmatically. The T-1.1.3 implementation agent must be aware that all progress tracking now depends on accurate `completedSteps` state persistence.

**RouteGuard Navigation Security**: A major security gap was identified and fixed in T-1.1.2 where users could directly access workflow stages via URL without completing prerequisites. A new `RouteGuard` component was implemented that enforces stage progression based on `completedSteps` state. This makes data persistence even more critical - if persistence fails, users lose navigation capabilities.

**State Management Dependencies**: All T-1.1.2 components (WorkflowProgressClient, RouteGuard, stage pages) now depend entirely on the Zustand store's persistent state. Any persistence failures will break the entire progress tracking and navigation system implemented in T-1.1.2.

### Next Steps 

1. **[PREP-1]**: Review Zustand persist middleware configuration in 4-categories-wf/src/stores/workflow-store.ts - No dependencies - Validate current persistence implementation and identify gaps against T-1.1.3:ELE-1 requirements

2. **[PREP-2]**: Analyze state partitioning for persistence optimization (T-1.1.3:ELE-2) - Requires PREP-1 completion - Determine which state should persist vs. which should be session-only for optimal performance

3. **[IMP-1]**: Test auto-save triggers on all user interactions - Requires PREP completion - Validate auto-save functionality works for all workflow input scenarios (ratings, category selections, tag selections)

4. **[IMP-2]**: Validate localStorage data structure and integrity - Requires PREP completion - Ensure persistence maintains data consistency and handles edge cases (storage limits, corruption)

5. **[VAL-1]**: Confirm session restoration from any workflow stage - Requires IMP completion - Verify users can resume workflow from exact previous position after browser refresh or session interruption


### Important Files

1. **4-categories-wf/src/stores/workflow-store.ts** - Main Zustand store with persist middleware configuration for T-1.1.3:ELE-1 and ELE-2 validation - Contains existing persist middleware but needs comprehensive validation
2. **4-categories-wf/src/components/RouteGuard.tsx** - Navigation protection component created in T-1.1.2 - NEW FILE: Depends entirely on persisted `completedSteps` state for access control
3. **4-categories-wf/src/components/client/WorkflowProgressClient.tsx** - Progress display component - MODIFIED: Progress calculation logic fixed to use persisted `completedSteps` accurately
4. **4-categories-wf/src/app/(workflow)/workflow/[documentId]/stage2/page.tsx** - Stage 2 page with RouteGuard protection - MODIFIED: Now includes RouteGuard requiring persistent state
5. **4-categories-wf/src/app/(workflow)/workflow/[documentId]/stage3/page.tsx** - Stage 3 page with RouteGuard protection - MODIFIED: Now includes RouteGuard requiring persistent state
6. **pmc/core/active-task.md** - Current task specifications and acceptance criteria - Contains detailed T-1.1.3 requirements and validation criteria

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/active-task.md** - Lines 83-86: Component/Element specifications for T-1.1.3:ELE-1 and T-1.1.3:ELE-2
2. **pmc/core/active-task.md** - Lines 103-106: Implementation Phase steps (IMP-1 through IMP-4) 
3. **pmc/core/active-task.md** - Lines 116-118: Validation Phase requirements (VAL-1 through VAL-3)
4. **pmc/product/06-aplio-mod-1-tasks.md** - Line 7937+: Detailed task specifications for T-1.1.3 requirements  
5. **pmc/product/_mapping/test-maps/07-bmo-test-mapping-output-E01-custom_v1.md** - Customized testing plan for T-1.1.2 browser-based validation that remains to be done

### Recent Development Context

- **Last Milestone**: Completed comprehensive T-1.1.2 Workflow Progress System Validation including progress calculation fixes, navigation security implementation, and programmatic validation of all progress components

- **Key Outcomes**: 
  - Fixed critical progress percentage calculation from 17%/50%/83% to accurate 0%/33%/67%/100%
  - Implemented RouteGuard component preventing direct URL access to incomplete stages  
  - Validated all progress tracking, step indicators, and navigation controls work correctly
  - Created comprehensive programmatic validation covering all T-1.1.2 acceptance criteria
  - Identified remaining browser-based testing needs (visual, interactive, performance aspects)

- **Relevant Learnings**: 
  - Validation-first approach is highly effective for existing component testing
  - Programmatic testing can validate complex logic accurately before browser testing
  - Route protection is critical for workflow security and must be implemented at component level
  - All progress components depend entirely on persistent state for accurate functionality

- **Technical Context**: 
  - All T-1.1.2 components now depend on Zustand store persistent state (completedSteps, currentStep)
  - RouteGuard component requires `completedSteps` array from persistence to control stage access
  - Progress calculation logic validated and fixed to work with persistent state structure
  - Server/client component separation patterns established and proven effective

### Existing Implementation Instructions Adaptations

The implementation agent must make these critical adaptations based on T-1.1.2 results:

**Enhanced Persistence Validation Requirements**: T-1.1.3 must validate that persistence works correctly with the new RouteGuard component dependency. If persistence fails, users will lose navigation capabilities entirely.

**State Structure Validation**: The persist middleware must correctly handle the fixed state structure including accurate `completedSteps` arrays. Any persistence corruption could break progress calculation logic.

**Cross-Component Integration Testing**: T-1.1.3 must validate that persistence works seamlessly with all T-1.1.2 components (WorkflowProgressClient, RouteGuard, stage pages) since they all depend on persistent state.

**Auto-Save Trigger Validation**: Must test auto-save triggers specifically with the corrected progress calculation logic to ensure state updates persist correctly when users complete stages.

### Modified Implementation Approaches

Based on T-1.1.2 implementation results, modify the standard approach as follows:

**Validation-First Persistence Testing**: Use the proven validation-first approach from T-1.1.2. Test persistence functionality programmatically before browser testing, focusing on state consistency and restoration accuracy.

**RouteGuard Dependency Testing**: Prioritize testing session restoration scenarios that affect RouteGuard access control. Users must be able to resume workflows at the correct stage with proper navigation permissions.

**Progress Component Integration**: Test persistence specifically with the fixed progress calculation logic. Ensure persisted state correctly drives progress percentage display (0%/33%/67%/100%).

**Error Handling Enhancement**: Implement robust error handling for persistence failures since T-1.1.2 components are now critical dependencies on persistent state.

### Eliminated Requirements

Implementation steps that are now obsolete due to T-1.1.2 work:

**Basic State Management Setup**: Do not recreate basic Zustand store architecture - comprehensive store already exists and is validated
**Progress Component Creation**: Do not build progress tracking components - they exist and are validated against T-1.1.2 requirements  
**Navigation Logic Implementation**: Do not implement basic navigation - RouteGuard system is complete and operational
**Server/Client Separation Design**: Do not design component patterns - established architecture is working and validated

### Additional Testing Needs

Fresh implementation scenarios identified during T-1.1.2 that are critical for T-1.1.3:

**RouteGuard Persistence Recovery**: Test that RouteGuard correctly handles users returning to saved workflows - must restore proper stage access permissions based on persisted `completedSteps`

**Progress Calculation Persistence**: Validate that the corrected progress calculation logic works correctly with persisted state across session restoration scenarios

**Cross-Stage State Consistency**: Test persistence during stage transitions when both progress tracking and navigation validation are updating state simultaneously

**Failed Persistence Scenarios**: Test graceful degradation when localStorage is full, corrupted, or unavailable - critical since RouteGuard depends on persistence

**Multi-Tab Persistence Conflicts**: Validate behavior when users have multiple workflow tabs open simultaneously with same document

### Acceptance Criteria

Fresh acceptance criteria identified during T-1.1.2 implementation that must be validated for T-1.1.3:

**RouteGuard State Recovery**: Session restoration must correctly enable/disable stage access based on persisted `completedSteps` without requiring page refresh

**Progress Display Accuracy**: Restored sessions must immediately show correct progress percentages (0%/33%/67%/100%) without requiring user interaction to update

**Navigation State Consistency**: Users must be able to navigate backward to completed stages immediately upon session restoration without state inconsistencies

**Persistence Performance**: Auto-save must not interfere with RouteGuard redirects or progress updates - timing conflicts must be avoided

**State Corruption Recovery**: System must handle corrupted persistence data gracefully and default to safe initial state rather than breaking navigation or progress systems

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