# Development Context & Operational Priorities
**Date:** 2025-06-15 21:13 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**T-2.1.6 Breakpoint System Extraction - Testing Phase**

Execute comprehensive testing cycle for the completed T-2.1.6 "Breakpoint System Extraction" task following the Enhanced Testing Protocol in `pmc/core/active-task-unit-tests-2.md`. The testing agent must validate all three implemented elements of the breakpoint system through unit testing, visual testing, and LLM Vision analysis.

**What was implemented:** A complete TypeScript breakpoint system extracted from legacy tailwind.config.js with exact pixel values (xs: 475px, sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 1xl: 1400px, 2xl: 1536px). The implementation includes type-safe breakpoint definitions, Next.js 14 compatible responsive utility functions, media query generation helpers, and semantic responsive value utilities.

**Current testing state:** Ready for testing - all VAL phase validation completed, TypeScript compilation verified, temporary test files cleaned up. Implementation follows P006-DESIGN-TOKENS pattern established in effects.ts, colors.ts, and typography.ts files.

**Critical testing context:** The breakpoint system is implemented as a design token file (not React components), so traditional React testing approaches must be adapted. Focus on TypeScript type validation, utility function testing, and media query generation verification rather than visual component rendering.

### Current Active Action 
**Task ID:** T-2.1.6
**Title:** Breakpoint System Extraction - Testing Phase
**Current Phase:** Testing (Implementation Complete)
**Active Element:** All three elements ready for testing validation
**Last Recorded Action:** VAL phase completed, TypeScript compilation verified, ready for unit testing handoff

### Next Steps 
1. **Execute Enhanced Testing Protocol** - Follow `pmc/core/active-task-unit-tests-2.md` for T-2.1.6 components
2. **Adapt Testing Approach** - Modify React-focused tests for design token/utility function validation  
3. **Validate Breakpoint Values** - Verify exact legacy system matching (xs: 475px, 1xl: 1400px, plus defaults)
4. **Test Responsive Utilities** - Validate media query generation and responsive helper functions
5. **Generate Testing Report** - Complete testing documentation and human-readable results

### Important Files
1. **`aplio-modern-1/styles/design-tokens/breakpoints.ts`** - Main implementation file (441 lines) with complete breakpoint system
2. **`pmc/core/active-task.md`** - Task completion documentation and VAL phase results
3. **`pmc/core/active-task-unit-tests-2.md`** - Complete testing protocol to follow
4. **`aplio-legacy/tailwind.config.js`** - Legacy source file with original breakpoint definitions (lines 13-17)
5. **`aplio-modern-1/styles/design-tokens/effects.ts`** - Pattern reference for P006-DESIGN-TOKENS structure

### Important Scripts, Markdown Files, and Specifications
1. **`pmc/core/active-task-unit-tests-2.md`** - Enhanced Testing Protocol with 5-phase cycle
   - Key sections: Phase 0 (Environment Setup), Phase 1 (Component Discovery), Phase 2 (Unit Testing)
2. **Testing Infrastructure** - Enhanced scaffold system and LLM Vision analysis tools in `aplio-modern-1/test/`
3. **Test Location** - `aplio-modern-1/test/unit-tests/task-2-1/T-2.1.6/` directory structure
4. **PMC Commands** - Use `node bin/aplio-agent-cli.js` from pmc directory for logging

### Recent Development Context
- **Last Milestone**: T-2.1.6 Breakpoint System Extraction completed through VAL phase
- **Key Outcomes**: 
  - Complete breakpoint system with exact legacy values preserved
  - TypeScript interfaces following P006-DESIGN-TOKENS pattern  
  - Next.js 14 compatible responsive utility functions implemented
  - Media query generation helpers and semantic responsive utilities created
- **Relevant Learnings**: 
  - Design token files require different testing approach than React components
  - TypeScript compilation issues resolved by removing problematic index signatures
  - Responsive utility patterns validated against existing typography.ts implementation
- **Technical Context**: 
  - Implementation location: `aplio-modern-1/styles/design-tokens/breakpoints.ts`
  - Pattern: P006-DESIGN-TOKENS (consistent with other design token files)
  - Testing requires 90% code coverage using Jest, TypeScript, Storybook, React Testing Library

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