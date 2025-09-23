# Development Context & Operational Priorities
**Date:** 2025-06-07 21:41 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**CRITICAL PRIORITY: Unit Testing Phase for T-1.2.3 (API and Utility Type Definitions)**

The next agent will serve as a **Unit Testing Engineer** to implement comprehensive testing for the recently completed T-1.2.3 task. This task involved creating TypeScript type definitions for API requests/responses and utility functions, completing the foundational type system for the Aplio modernization project.

**What was completed in T-1.2.3:**
- Created comprehensive API type interfaces in `types/api/index.ts` covering services, FAQs, testimonials, and pricing data
- Implemented utility function types in `types/utils/index.ts` for markdown processing, CSS utilities, and theme providers
- Established type organization patterns following component type structure from T-1.2.2
- Successfully resolved TypeScript path resolution issues (moved from `aplio-modern-1/types/` to root `types/` directory)
- Created validation examples demonstrating type safety and proper usage
- All three task phases completed: PREP → IMP → VAL with clean TypeScript compilation

**Why testing is critical:**
- T-1.2.3 establishes the foundational type system that subsequent tasks T-1.2.4+ depend on
- Type definitions must be thoroughly validated before integration with components and API calls
- Test coverage requirement: 90% code coverage using Jest, TypeScript, MSW, and ts-jest
- Testing validates both compile-time type safety and runtime behavior

**Current state:**
- All implementation code completed and TypeScript compilation successful
- Validation examples created but formal unit tests not yet implemented
- Test infrastructure directory exists: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-1-2\T-1.2.3\`
- Ready for comprehensive test suite development

**Critical context for testing engineer:**
- Types were built from legacy data structures in `aplio-legacy/data/` (serviceData.json, faqData.json, testimonial.json, pricing.json)
- Utility types derived from `aplio-legacy/utils/` functions (getMarkDownData.js, cn.js, getMarkDownContent.js, providers.js)
- Path resolution fixed: TypeScript paths now correctly point to `./types/*` from workspace root
- Type organization follows established patterns from successful T-1.2.2 component types

Do not deviate from this testing focus without explicit instruction.

### Next Steps 
1. **T-1.2.3-TEST-SETUP**: Configure Jest test environment with TypeScript, MSW for API mocking, and ts-jest transformation
2. **T-1.2.3-API-TESTS**: Create comprehensive unit tests for all API type interfaces (ServiceData, FaqData, TestimonialData, PricingData)
3. **T-1.2.3-UTILITY-TESTS**: Implement tests for utility function types (MarkdownPost, CnParams, ProvidersProps)
4. **T-1.2.3-INTEGRATION-TESTS**: Test type integration scenarios with mock data matching legacy JSON structures
5. **T-1.2.3-COVERAGE-VALIDATION**: Achieve 90% code coverage requirement and generate comprehensive test reports

### Important Files
1. `types/api/index.ts` - Main API type definitions requiring comprehensive testing
2. `types/utils/index.ts` - Utility function types needing validation testing
3. `types/index.ts` - Barrel export file with main type utilities requiring export validation
4. `types/validation-examples.ts` - Reference examples showing expected type behavior patterns
5. `types/utility-validation-examples.ts` - Utility-specific validation patterns and usage examples
6. `pmc/core/active-task.md` - Task requirements and acceptance criteria reference
7. `aplio-legacy/data/serviceData.json` - Reference data structure for API type validation
8. `aplio-legacy/data/faqData.json` - FAQ data structure for type validation
9. `aplio-legacy/data/testimonial.json` - Testimonial data structure for type validation
10. `aplio-legacy/data/pricing.json` - Pricing data structure for type validation
11. `aplio-legacy/utils/getMarkDownData.js` - Reference utility function for type validation
12. `aplio-legacy/utils/cn.js` - CSS class utility function for type validation
13. `tsconfig.json` - TypeScript configuration with path aliases setup

### Important Scripts, Markdown Files, and Specifications
1. `pmc/core/active-task.md` - Contains testing requirements, acceptance criteria, and 90% coverage requirements
2. `pmc/system/plans/task-approach/current-task-approach.md` - Implementation strategy and confidence assessment (8/10)
3. `pmc/product/06-aplio-mod-1-tasks.md` - Detailed task specifications starting at line for T-1.2.3
4. Test directory: `aplio-modern-1/test/unit-tests/task-1-2/T-1.2.3/` - Designated testing location

### Recent Development Context
- **Last Milestone**: Successfully completed T-1.2.3 implementation with all phases (PREP → IMP → VAL) marked complete
- **Key Outcomes**: 
  - Comprehensive type system established for API requests/responses and utility functions
  - TypeScript path resolution issues resolved (moved types to correct root location)
  - Clean TypeScript compilation achieved with no errors in new type definitions
  - Type organization patterns established following T-1.2.2 component type success
- **Relevant Learnings**: 
  - Path aliases must match tsconfig.json exactly (`./types/*` not `./aplio-modern-1/types/*`)
  - Generic type constraints critical for utility type validation functions
  - Barrel exports enable clean import patterns while maintaining type safety
  - Legacy data structure analysis essential for accurate type modeling
- **Technical Context**: 
  - TypeScript strict mode configuration established in T-1.2.1
  - Component type patterns established in T-1.2.2 
  - All foundations ready for T-1.2.4 (Event and External Library Type Integration)
  - PMC command tracking all phases complete for T-1.2.3

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