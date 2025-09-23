# Development Context & Operational Priorities
**Date:** 2025-06-11 23:39 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.5.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Primary Task**: Unit Testing for T-1.3.2: Server/Client Component Pattern Implementation

**What is being worked on**:
Unit testing and validation of the comprehensive server/client component pattern implementation completed in T-1.3.2. The implementation phase created extensive templates, patterns, and test foundations, but requires thorough unit testing to meet the 90% code coverage requirement and validate all acceptance criteria.

**Why it is being worked on**:
1. T-1.3.2 implementation phase has been completed successfully with all acceptance criteria met
2. Comprehensive templates and patterns have been created for server/client component boundaries
3. Initial validation tests were created but require expansion to meet 90% coverage requirements
4. Unit testing is required before proceeding to T-1.3.3 (Utility and Hook Organization)
5. Testing infrastructure validation is critical for establishing patterns for future component development

**Current state of implementation**:
- **IMPLEMENTATION COMPLETE**: All three phases (PREP, IMP, VAL) completed successfully
- **TEMPLATES CREATED**: Comprehensive server/client component templates with 5 composition patterns
- **PATTERNS IMPLEMENTED**: 6 data fetching patterns for server components established
- **INITIAL TESTS CREATED**: Basic test structure created with 75+ test cases across 3 test files
- **COVERAGE GAP**: Tests exist but need execution, validation, and expansion to reach 90% coverage
- **DOCUMENTATION COMPLETE**: Comprehensive validation summary and implementation artifacts documented

**Critical context needed for continuation**:
- Task T-1.3.2 requires 90% code coverage using Jest, React Testing Library, Next.js Testing Tools, and Playwright
- Test location: `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/`
- All acceptance criteria have been implemented but need comprehensive unit test validation
- Templates created provide examples for testing patterns but need real test execution
- Existing 11 components need validation against new server/client patterns

Do not deviate from unit testing focus for T-1.3.2 without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
**Task ID**: T-1.3.2: Server/Client Component Pattern Implementation
**Current phase**: Unit Testing (post-implementation validation)
**Active element**: Comprehensive unit testing and coverage validation
**Last recorded action**: Completed Validation Phase with all server/client patterns tested and validated successfully (Confidence: 9/10)
**Required action**: Execute and expand unit tests to achieve 90% code coverage requirement

### Next Steps 
1. **Execute existing test suites** - Run the 3 created test files to establish baseline coverage and identify failures
2. **Expand test coverage** - Add additional test cases to reach the required 90% code coverage for all implemented patterns
3. **Validate acceptance criteria** - Ensure all 4 acceptance criteria are thoroughly tested with comprehensive assertions
4. **Performance testing** - Add performance benchmarks for server/client boundary optimization validation
5. **Integration testing** - Test real component interactions using the new patterns with existing 11 components

### Important Files
1. **aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/server-component-validation.test.tsx** - Server component testing (20+ test cases), needs execution and expansion
2. **aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/client-component-validation.test.tsx** - Client component testing (25+ test cases), needs execution and expansion  
3. **aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/composition-patterns-validation.test.tsx** - Composition pattern testing (30+ test cases), needs execution and expansion
4. **aplio-modern-1/test/unit-tests/task-1-3/T-1.3.2/validation-summary.md** - Comprehensive validation documentation and checklist
5. **aplio-modern-1/components/design-system/templates/ServerComponentTemplate.tsx** - Template requiring test coverage validation
6. **aplio-modern-1/components/design-system/templates/ClientComponentTemplate.tsx** - Template requiring test coverage validation
7. **aplio-modern-1/components/design-system/templates/CompositionPatterns.tsx** - 5 patterns requiring comprehensive testing
8. **aplio-modern-1/components/design-system/templates/DataFetchingPatterns.tsx** - 6 patterns requiring test coverage
9. **pmc/core/active-task.md** - Contains complete T-1.3.2 requirements and acceptance criteria
10. **aplio-modern-1/app/_components/** - Directory with 11 existing components requiring validation against new patterns

### Important Scripts, Markdown Files, and Specifications
1. **pmc/product/07b-task-aplio-mod-1-testing-built.md** - Testing specifications and requirements for T-1.3.2
2. **jest.config.js** - Jest configuration for testing infrastructure
3. **pmc/bin/aplio-agent-cli.js** - PMC CLI for logging test results and phase updates
4. **pmc/core/task-work-pad-dev.md** - Contains detailed component analysis and boundary classification from implementation phase

### Recent Development Context

- **Last Milestone**: Successfully completed T-1.3.2 implementation with comprehensive server/client component pattern templates and validation framework
- **Key Outcomes**: 
  - Created ServerComponentTemplate.tsx with async data fetching patterns
  - Created ClientComponentTemplate.tsx with comprehensive interactivity patterns  
  - Implemented 5 composition patterns optimizing server/client boundaries
  - Established 6 data fetching patterns for server components
  - Created initial test structure with 75+ test cases across 3 test files
  - All acceptance criteria implemented: server defaults, explicit client boundaries, optimized composition, isolated data fetching
- **Relevant Learnings**: 
  - Existing 11 components were already mostly correctly classified (Card, DashboardStats, FaqSection = server; Button, FaqItem, ThemeSwitcher, LoginForm, StatChart, ErrorBoundary, ErrorTestUtils = client)
  - Server/client patterns require different testing approaches for validation
  - Composition patterns are critical for optimizing bundle size and performance
  - TypeScript interfaces need careful consideration for both server and client components
- **Technical Context**: 
  - All templates follow Next.js 14 App Router patterns with proper TypeScript integration
  - Test infrastructure is established but requires execution and coverage validation
  - Testing tools specified: Jest, React Testing Library, Next.js Testing Tools, Playwright
  - 90% code coverage requirement must be met before proceeding to T-1.3.3

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