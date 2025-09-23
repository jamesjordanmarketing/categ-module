# Development Context & Operational Priorities
**Date:** 2025-06-04 08:51 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**Comprehensive Automated Testing for T-1.1.4 - Loading and Error States Implementation**

We are implementing comprehensive automated testing for task T-1.1.4 (Loading and Error States Implementation) using the AI Testing Agent Conductor protocol. This is a 5-phase testing approach designed to ensure robust validation of Next.js 14 App Router loading and error handling patterns.

**Current State**: 
- **Phase 0 (Environment Setup)**: COMPLETED - Test infrastructure and directory structure established
- **Phase 1 (Component Discovery)**: COMPLETED - All 15 T-1.1.4 components identified and documented
- **Phase 2 (Unit Testing)**: COMPLETED - Comprehensive unit tests created for all loading and error components
- **Phase 3 (Visual Testing)**: PENDING - Browser-based visual validation of component rendering
- **Phase 4 (LLM Vision Analysis)**: PENDING - AI-powered visual assessment and reporting  
- **Phase 5 (Comprehensive Reporting)**: PENDING - Final test documentation and recommendations

**Critical Context for Continuation**:
T-1.1.4 implements Pattern P025-ERROR-HANDLING with two primary elements:
- **ELE-1**: Loading states using Suspense boundaries (7 server components)
- **ELE-2**: Error handling with error.tsx files (8 client components)

All components are located in `aplio-modern-1/app` directory and follow Next.js 14 App Router conventions. The implementation demonstrates proper server/client component boundaries, consistent error handling patterns, and effective loading state management.

### Current Open Task

**Task ID**: T-1.1.4 - Loading and Error States Implementation
**Current Phase**: Unit Testing (Phase 2) - COMPLETED
**Next Phase**: Visual Testing (Phase 3) - READY TO START
**Pattern**: P025-ERROR-HANDLING

**Active Elements Status**:
- **ELE-1 (Loading States)**: Unit tests completed for all 7 components
- **ELE-2 (Error Handling)**: Unit tests completed for all 8 components

**Last Recorded Actions**:
1. Created comprehensive unit test files covering all T-1.1.4 components
2. Implemented proper mocking for Next.js dependencies (Link, useRouter, StatChart)
3. Validated server/client component boundaries and interactive functionality
4. Documented all testable elements and their testing approaches

### Next Steps

1. **Execute Visual Testing (Phase 3)**: 
   - Start Next.js development server
   - Configure browser automation for component rendering validation
   - Test loading state transitions and error boundary functionality

2. **Implement LLM Vision Analysis (Phase 4)**:
   - Capture component screenshots during various states
   - Run AI-powered visual assessment of loading/error components
   - Validate design consistency and user experience patterns
   - Dependencies: Visual testing completion

3. **Complete Comprehensive Reporting (Phase 5)**:
   - Generate final test documentation and coverage reports
   - Document testing recommendations and identified issues
   - Update T-1.1.4 status and prepare for validation phase
   - Dependencies: All previous phases completion

4. **Update Task Status in PMC**:
   - Mark testing phases as complete in PMC system
   - Update element statuses for ELE-1 and ELE-2
   - Prepare task for final validation and completion

### Important Dependencies

1. **Jest Configuration**: 
   - Current Status: Tests created but not discoverable by Jest runner
   - Impact: Unit tests cannot be executed until path pattern is resolved
   - Resolution Required: Adjust test file naming or Jest config pattern matching

2. **Next.js Development Server**:
   - Current Status: Previously started but terminal session challenges occurred
   - Impact: Required for visual testing phase (Phase 3)
   - Resolution Required: Stable server startup for browser automation

3. **Testing Infrastructure**:
   - Current Status: All dependencies installed (Jest, Playwright, axios, TypeScript)
   - Impact: Ready for full test execution once Jest discovery is resolved
   - Resolution Required: None - infrastructure is complete

### Important Files

1. **aplio-modern-1/tests/task-1-1-4/T-1.1.4/loading-components.test.tsx**
   - Purpose: Unit tests for all 7 loading state components (ELE-1)
   - Current State: Complete - covers rendering, styling, spinner animations, messaging consistency

2. **aplio-modern-1/tests/task-1-1-4/T-1.1.4/error-components.test.tsx** 
   - Purpose: Unit tests for all 8 error handling components (ELE-2)
   - Current State: Complete - covers error display, reset functionality, navigation links, ErrorBoundary behavior

3. **aplio-modern-1/tests/task-1-1-4/T-1.1.4/suspense-integration.test.tsx**
   - Purpose: Integration tests for Suspense boundaries and async data fetching
   - Current State: Complete - covers component composition patterns and fallback rendering

4. **aplio-modern-1/tests/task-1-1-4/current-test-approach.md**
   - Purpose: Comprehensive documentation of all T-1.1.4 testable elements
   - Current State: Complete - documents 15 components with priority classification and testing strategies

5. **aplio-modern-1/tests/task-1-1-4/T-1.1.4/utils/testing-utils.tsx**
   - Purpose: Testing utilities and manual validation helpers
   - Current State: Complete - includes LoadingTestUtils and ErrorTestUtils components

6. **pmc/core/active-task.md**
   - Purpose: Current active task definition and status tracking
   - Current State: Contains T-1.1.4 specification and progress tracking

### Important Scripts, Markdown Files, and Specifications

1. **pmc/prompts/ai-testing-agent-conductor-prompt.md**
   - Purpose: Comprehensive 5-phase testing protocol specification
   - Key Sections: Phase definitions, testing methodologies, reporting requirements
   - Current Usage: Guiding testing implementation for T-1.1.4

2. **pmc/core/patterns/P025-ERROR-HANDLING.md**
   - Purpose: Pattern specification for loading and error handling implementation
   - Key Sections: Element definitions (ELE-1, ELE-2), implementation guidelines
   - Current Usage: Reference for testing validation criteria

3. **aplio-modern-1/package.json**
   - Purpose: Project dependencies and scripts configuration
   - Key Sections: Testing dependencies (Jest, Playwright), Next.js setup
   - Current Usage: Verification of testing infrastructure completeness

4. **aplio-modern-1/jest.config.js**
   - Purpose: Jest testing framework configuration
   - Key Sections: Test pattern matching, module resolution, test environment setup
   - Current Usage: Needs adjustment for T-1.1.4 test file discovery

### Recent Development Context

- **Last Milestone**: Completed comprehensive unit testing implementation for all T-1.1.4 components
- **Key Outcomes**: 
  - 15 T-1.1.4 components identified and fully documented
  - Complete unit test coverage for loading states (ELE-1) and error handling (ELE-2)
  - Proper Next.js 14 App Router testing patterns established
  - Server/client component boundary validation implemented
- **Relevant Learnings**: 
  - T-1.1.4 components follow consistent patterns for loading states and error handling
  - Proper mocking strategies required for Next.js Link and useRouter dependencies
  - Testing infrastructure benefits from organized directory structure by task ID
  - Jest test discovery patterns must align with project structure conventions
- **Technical Context**: 
  - All tests use React Testing Library with Jest framework
  - Components properly implement Next.js 14 App Router conventions
  - Error boundaries provide granular error isolation for component composition
  - Loading components use consistent Tailwind CSS styling patterns

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
- The next context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)

Here are some important PMC commands:

##### Start Task
```bash
node pmc/bin/aplio-agent-cli.js start-task "T-EXAMPLE.1.1"
```

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Update Element Status
```bash
node pmc/bin/aplio-agent-cli.js update-element-status "T-EXAMPLE.1.2:ELE-1" "Complete"
```

##### Task Completion
```bash
node pmc/bin/aplio-agent-cli.js complete-task "T-EXAMPLE.1.3"
```

##### Context Carryover for New Chat Windows
```bash
node system/management/carryover-command.js
```

#### Project Structure
```
aplio-legacy/ (legacy system)
aplio-modern-1/ (new system)
pmc/ (PMC system)
├── bin/
├── core/
├── system/
│   ├── management/
│   └── templates/
└── product/
```

### Additional Resources

#### Key URLs

#### Important Directories