# Development Context & Operational Priorities
**Date:** 2025-06-11 10:23 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.3.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Primary Task**: Implementation of T-1.3.2: Server/Client Component Pattern Implementation

**What is being worked on**:
Task T-1.3.2 focuses on implementing proper server/client component patterns and optimizing boundaries in the Aplio Design System modernization. This task builds upon the foundation established in T-1.3.1 (Component Directory Structure Setup) which achieved 94% completion with 11 components successfully created and validated.

**Why it is being worked on**:
1. T-1.3.1 established the component directory structure and created 11 functional components (Button, Card, DashboardStats, ErrorBoundary, ErrorTestUtils, FaqItem, FaqSection, LoadingTestUtils, LoginForm, StatChart, ThemeSwitcher)
2. Two components (ThemeSwitcher and StatChart) have minor rendering/boundary issues that need resolution through proper server/client pattern implementation
3. The current components need optimization for Next.js 14 App Router with explicit server-first defaults and proper client component boundaries
4. Critical for establishing architectural patterns for the entire Home-4 template implementation

**Current state of implementation**:
- **FOUNDATION READY**: T-1.3.1 completed with 11 components created and 94% validation success
- **COMPONENTS AVAILABLE**: Full component library ready for pattern implementation
- **TASK T-1.3.2 STATUS**: Ready to begin - all dependencies met, active-task.md updated with comprehensive requirements

**Critical context needed for continuation**:
- T-1.3.2 must implement server-first component approach (ELE-1) and explicit client boundaries (ELE-2)
- Components are located in `aplio-modern-1/components/` with existing TypeScript implementations
- Legacy code references available: `aplio-legacy/app/home-4/page.jsx` and `aplio-legacy/components/shared/FaqItem.jsx`
- Testing infrastructure is fully operational with Enhanced LLM Vision Analysis capabilities
- Four acceptance criteria must be met: server components by default, explicit 'use client' directives, optimized composition patterns, and server-isolated data fetching

**Recent PMC Infrastructure Enhancement**:
The start-task command archiving system was successfully enhanced to replace concatenated history files with individual timestamped archive files. This improvement affects PMC operations but does not impact T-1.3.2 implementation work.

Do not deviate from T-1.3.2 focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps

1. **Begin T-1.3.2 Preparation Phase**
   - Action: Execute PREP-1 (Analyze server vs. client component requirements) and PREP-2 (Create component boundary diagrams)
   - Dependencies: Review legacy code references and existing component implementations
   - Expected outcome: Clear understanding of server/client boundaries for all 11 components

2. **Implement Server-First Component Patterns**
   - Action: Execute IMP-1 through IMP-4 (Create server component templates, client wrappers, composition patterns, data fetching)
   - Dependencies: Preparation phase completion
   - Expected outcome: All components properly classified and implemented with Next.js 14 patterns

3. **Validate Component Boundaries**
   - Action: Execute VAL-1 through VAL-3 (Test server rendering, client hydration, composition patterns)
   - Dependencies: Implementation phase completion
   - Expected outcome: All components pass validation with proper server/client separation

4. **Complete Phase Reporting**
   - Action: Call required PMC commands after each phase completion
   - Dependencies: Successful validation
   - Expected outcome: Task T-1.3.2 marked complete, ready for T-1.3.3

### Important Files

1. **pmc/core/active-task.md**
   - Purpose: Complete T-1.3.2 task specification with detailed requirements, acceptance criteria, and phase breakdown
   - Current state: Fully populated with task details, ready for implementation
   - Critical: Contains ELE-1 and ELE-2 element definitions and all phase steps

2. **aplio-modern-1/components/**
   - Purpose: Directory containing all 11 components created in T-1.3.1 that need server/client pattern implementation
   - Current state: Components functional
   - Critical: Button, Card, DashboardStats, ErrorBoundary, ErrorTestUtils, FaqItem, FaqSection, LoadingTestUtils, LoginForm, StatChart, ThemeSwitcher

3. **aplio-legacy/app/home-4/page.jsx**
   - Purpose: Legacy code reference for server component structure (lines 1-30)
   - Current state: Available for pattern analysis
   - Critical: Referenced in T-1.3.2:ELE-1 for server-first component approach

4. **aplio-legacy/components/shared/FaqItem.jsx**
   - Purpose: Legacy code reference for interactive component patterns (lines 1-15)
   - Current state: Available for client boundary analysis
   - Critical: Referenced in T-1.3.2:ELE-2 for client component boundaries

5. **aplio-modern-1/test/reports/T-1.3.1-Final-Testing-Summary.md**
   - Purpose: Complete analysis of T-1.3.1 results showing component status and identified issues
   - Critical: Provides foundation context for T-1.3.2 implementation

6. **pmc/product/06b-aplio-mod-1-tasks-built.md**
   - Purpose: Complete task specification document containing T-1.3.2 detailed requirements
   - Current state: Contains full task definition starting around line 386
   - Critical: Source of truth for T-1.3.2 implementation requirements

### Important Scripts, Markdown Files, and Specifications

1. **pmc/bin/aplio-agent-cli.js**
   - Purpose: PMC command interface for task management and progress tracking
   - Key sections: start-task, update-phase-stage, update-element-status, log-action, error commands
   - Critical: Required for phase completion reporting and task management

2. **pmc/product/07b-task-aplio-mod-1-testing-built.md**
   - Purpose: Testing specifications and requirements for T-1.3.2
   - Key sections: Component testing approaches, validation criteria, testing tools configuration
   - Critical: Defines testing strategy for server/client component validation

3. **aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/**
   - Purpose: Test directory structure for T-1.3.2 validation
   - Key sections: Unit test location for server/client pattern validation
   - Critical: Target location for validation phase testing

### Recent Development Context

- **Last Milestone**: Comprehensive T-1.3.1 completion with Enhanced LLM Vision Analysis validation of 11 components achieving 94% success rate
- **Key Outcomes**: 
  - Complete component directory structure established
  - 9 of 11 components achieving ≥95% quality scores
  - Testing infrastructure fully operational with Enhanced LLM Vision Analysis capabilities
  - PMC archiving system enhanced for better task history organization
- **Relevant Learnings**: 
  - Enhanced LLM Vision Analysis proved highly effective for component validation
  - Component boundary issues are best resolved through proper server/client architecture implementation
  - Testing infrastructure can handle comprehensive component analysis at scale
- **Technical Context**: 
  - All 11 components are functional TypeScript implementations ready for pattern optimization
  - Next.js 14 App Router architecture requires explicit server/client component separation
  - ThemeSwitcher and StatChart issues likely stem from improper boundary implementation rather than fundamental code problems
  - Component composition patterns will be critical for optimizing server/client boundaries

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
PMC is a structured modern software development task management and context retention system built around the main active task file as its central operational component. PMC is product agnostic. In this instance we are using it to code the Aplio Design System Modernization (aplio-mod-1) system described above. The system provides:

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