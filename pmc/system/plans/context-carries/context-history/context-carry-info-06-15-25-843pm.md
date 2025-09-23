# Development Context & Operational Priorities
**Date:** 2025-06-15 20:43 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.1.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Current Task**: T-2.1.6: Breakpoint System Extraction
**Context**: Following successful completion of comprehensive design token testing for T-2.1.5 (Shadow and Border System), we are now proceeding to implement the breakpoint system extraction as the next design token implementation task.

**Critical Background from T-2.1.5 Testing Completion:**
- T-2.1.5 effects.ts implementation (386 lines) was comprehensively validated through Jest unit testing
- 25/25 Jest tests passed with 100% statement and function coverage
- Exact legacy fidelity preservation confirmed for all shadow and border values
- TypeScript compilation and interface compliance validated
- Testing protocol using T-2.1.4 dynamic import pattern proven successful
- All acceptance criteria satisfied for shadow and border system extraction

**Current Implementation Requirements for T-2.1.6:**
The next agent must implement breakpoints.ts following the same P006-DESIGN-TOKENS pattern established in prior tasks. Key requirements:
1. Extract breakpoint values from legacy system with exact pixel values from tailwind.config.js:13-17
2. Implement Next.js 14 compatible responsive utility functions  
3. Create type-safe breakpoint token definitions using TypeScript
4. Ensure breakpoint system supports responsive design across all components

**Testing Protocol Dependencies:**
T-2.1.6 will require a similar testing protocol to T-2.1.5, focusing on design token validation rather than component testing. The proven T-2.1.4 dynamic import pattern should be used for Jest unit testing.

**Critical Gap Analysis:**
Based on T-2.1.5 completion and T-2.1.6 requirements review, potential implementation considerations:
- Breakpoint tokens will need responsive utility functions beyond simple value extraction
- Testing will need to validate responsive behavior compatibility with Next.js 14
- TypeScript interfaces must support media query generation capabilities
- Integration with existing design token system (colors, typography, spacing, animations, effects)

### Next Steps 
1. **T-2.1.6:PREP-1** - Analyze legacy breakpoint definitions in tailwind.config.js:13-17
2. **T-2.1.6:PREP-2** - Study responsive patterns in the legacy codebase
3. **T-2.1.6:PREP-3** - Plan TypeScript structure for breakpoint token definitions
4. **T-2.1.6:IMP** - Implement breakpoints.ts with full responsive utility system
5. **T-2.1.6:VAL** - Execute Jest unit testing following T-2.1.5 proven testing protocol

### Important Files
1. **aplio-modern-1/styles/design-tokens/effects.ts** - Recently completed T-2.1.5 implementation (386 lines) providing pattern reference
2. **aplio-legacy/tailwind.config.js:13-17** - Source for breakpoint value extraction  
3. **pmc/core/active-task.md** - Updated with T-2.1.6 specifications
4. **pmc/core/active-task-unit-tests-2-T-2-1-5.md** - Testing protocol template (885 lines)
5. **aplio-modern-1/test/unit-tests/task-2-1/T-2.1.5/effects-basic.test.ts** - Completed Jest test reference (222 lines)
6. **aplio-modern-1/test/reports/T-2.1.5-testing-report.md** - Comprehensive testing validation results
7. **pmc/system/plans/task-approach/current-test-discovery.md** - T-2.1.5 testable elements documentation

### Important Scripts, Markdown Files, and Specifications
1. **pmc/core/active-task-unit-tests-2-T-2-1-5.md** - Design token testing protocol template to adapt for T-2.1.6
2. **aplio-modern-1/styles/design-tokens/animations.ts** - T-2.1.4 reference pattern for dynamic imports
3. **aplio-modern-1/jest.config.js** - Jest configuration supporting design token testing

### Recent Development Context

- **Last Milestone**: T-2.1.5 Shadow and Border System Extraction - Complete design token testing validation
- **Key Outcomes**: 
  - Comprehensive Jest unit testing protocol proven effective for design tokens
  - T-2.1.4 dynamic import pattern confirmed reliable (`await import('../../../../styles/design-tokens/effects')`)
  - 100% test coverage achieved (25/25 tests passed)
  - Exact legacy fidelity preservation methodology validated
  - TypeScript interface compliance testing established
- **Relevant Learnings**: 
  - Design token testing requires different approach than component testing (no visual/LLM vision analysis)
  - Dynamic imports essential for avoiding TypeScript compilation issues during testing
  - Legacy value preservation testing critical for maintaining visual consistency
  - Utility function testing provides comprehensive validation coverage
- **Technical Context**: 
  - Jest configuration supports TypeScript design token testing
  - Test directory structure established: `test/unit-tests/task-2-1/T-2.1.X/`
  - Coverage reporting configured: `test/reports/T-2.1.X-coverage/`
  - Testing protocol documentation pattern established

**Critical Testing Protocol Adaptations Required for T-2.1.6:**
- Breakpoint testing will need responsive utility validation beyond simple value checks
- Media query generation functions will require specific testing scenarios
- Next.js 14 compatibility testing for responsive behavior
- Integration testing with existing design token system

**Session Execution Summary:**
In this session, we conducted comprehensive automated design token testing for T-2.1.5 following the exact Jest unit testing protocol. We:
1. **Executed Complete Testing Protocol** - All 3 phases (Setup, Testing, Validation) completed successfully
2. **Achieved Perfect Test Results** - 25/25 Jest tests passed, 100% coverage
3. **Validated Legacy Fidelity** - All shadow and border values match tailwind.config.js exactly
4. **Confirmed TypeScript Safety** - All interfaces and 'as const' assertions working correctly
5. **Generated Comprehensive Documentation** - Testing report, coverage report, and discovery documentation created
6. **Followed Proven Patterns** - T-2.1.4 dynamic import pattern used successfully

**No Implementation Gaps Identified** - T-2.1.5 testing was comprehensive and complete. Ready for T-2.1.6 implementation.

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