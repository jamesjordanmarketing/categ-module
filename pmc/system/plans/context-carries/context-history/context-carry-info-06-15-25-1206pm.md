# Development Context & Operational Priorities
**Date:** 2025-06-15 12:06 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Focus**: **T-2.1.4: Animation and Transition System Extraction** - Design Token Implementation  

**What is being worked on**: The next task in the design token extraction sequence (T-2.1.4) following the successful completion and comprehensive testing validation of T-2.1.3: Spacing and Layout System Extraction. This task focuses on extracting animation timing values, easing functions, and transition durations from the legacy Aplio codebase into TypeScript design tokens.

**Why it is being worked on**: This is part of the systematic modernization of the Aplio Design System following the P006-DESIGN-TOKENS pattern. T-2.1.4 continues the design token extraction sequence that began with T-2.1.2 (Typography) and T-2.1.3 (Spacing), building a comprehensive type-safe design system foundation for Next.js 14.

**Current state of implementation**: 
- **T-2.1.3 Status**: ✅ **FULLY COMPLETE** with comprehensive testing validation
- **T-2.1.4 Status**: 🆕 **READY TO START** - Not yet initiated, waiting for development agent

**Implementation Location**: `aplio-modern-1\styles\design-tokens\animations.ts`
**Pattern**: P006-DESIGN-TOKENS
**Testing Protocol**: Adapted design token validation (not component testing)

**Critical Context for Continuation**:
1. **Testing Protocol Adaptation**: Use the adapted testing approach developed for T-2.1.3 that focuses on TypeScript compilation, token accuracy, and utility function validation rather than visual component testing
2. **Legacy Fidelity Requirement**: Maintain 100% exact value preservation from legacy sources
3. **TypeScript Pattern**: Follow the successful pattern established in T-2.1.2 (typography.ts) and T-2.1.3 (spacing.ts) for interface definitions, 'as const' assertions, and utility functions
4. **Testing Infrastructure**: Use Jest unit testing with dynamic imports for design token validation as proven successful in T-2.1.3

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.



### Next Steps

1. **T-2.1.4:PREP-1** - Analyze legacy animation definitions in `aplio-legacy\data\animation.js` lines 1-10
   - **Dependencies**: None - legacy file available
   - **Expected Outcome**: Understanding of animation timing values and delays used in legacy system

2. **T-2.1.4:PREP-2** - Study easing function implementations in `aplio-legacy\tailwind.config.js` lines 73-93  
   - **Dependencies**: Legacy tailwind config analysis
   - **Expected Outcome**: Complete catalog of easing functions for animation tokens

3. **T-2.1.4:PREP-3** - Identify transition durations from `aplio-modern-1\design-system\tokens\colors.json` lines 185-189
   - **Dependencies**: None - file accessible in modern codebase
   - **Expected Outcome**: Mapping of transition durations for different interaction types

4. **T-2.1.4:IMP-1** - Create `animations.ts` file following T-2.1.3 pattern with TypeScript interfaces and 'as const' exports
   - **Dependencies**: Completion of PREP phases, T-2.1.3 pattern reference
   - **Expected Outcome**: Complete animations.ts design token file with type safety

5. **T-2.1.4:VAL** - Execute adapted testing protocol using Jest unit tests with dynamic imports
   - **Dependencies**: Implementation complete, T-2.1.3 testing infrastructure available
   - **Expected Outcome**: 100% test validation confirming legacy fidelity and TypeScript compilation



### Important Files

1. **`pmc\core\active-task.md`** - T-2.1.4 task specification and implementation guidance
   - **Purpose**: Complete task definition with 4 elements (ELE-1 through ELE-4) and implementation phases
   - **State**: Updated to T-2.1.4, ready for development agent

2. **`aplio-modern-1\styles\design-tokens\spacing.ts`** - T-2.1.3 completed implementation (reference pattern)
   - **Purpose**: Successful design token pattern to follow for T-2.1.4 animations.ts
   - **State**: Complete and tested - provides template for TypeScript interfaces, exports, and utility functions

3. **`aplio-legacy\data\animation.js`** - Legacy animation timing definitions (lines 1-10)
   - **Purpose**: Source for T-2.1.4:ELE-1 animation timing extraction
   - **State**: Legacy reference file for value extraction

4. **`aplio-legacy\tailwind.config.js`** - Legacy easing functions (lines 73-93)
   - **Purpose**: Source for T-2.1.4:ELE-2 easing function extraction  
   - **State**: Legacy reference file for easing function catalog

5. **`aplio-modern-1\design-system\tokens\colors.json`** - Transition durations (lines 185-189)
   - **Purpose**: Source for T-2.1.4:ELE-3 transition duration mapping
   - **State**: Available in modern codebase for analysis

6. **`test\unit-tests\task-2-1.3\T-2.1.3\spacing-basic.test.ts`** - T-2.1.3 successful test pattern
   - **Purpose**: Testing template for T-2.1.4 adapted design token validation
   - **State**: Complete and validated - Jest with dynamic imports approach proven successful

### Important Scripts, Markdown Files, and Specifications

1. **`pmc\core\active-task-unit-tests-2.md`** - Comprehensive testing protocol for design tokens
   - **Purpose**: Adapted testing protocol developed for T-2.1.3 that must be used for T-2.1.4
   - **Key Sections**: Lines 37-89 (Current Test Approach for design tokens), Phase 2 Unit Testing adaptation

2. **`pmc\system\plans\task-approach\current-test-discovery.md`** - T-2.1.3 testing documentation  
   - **Purpose**: Complete example of testable elements discovery for design tokens
   - **Key Sections**: Full document - shows proper classification and testing strategy for design tokens vs components

3. **`test\reports\T-2.1.3-testing-report.md`** - Complete testing validation report
   - **Purpose**: Template for T-2.1.4 testing documentation and validation criteria
   - **Key Sections**: Testing Results Summary, Success Criteria Met, Recommendations sections

4. **PMC Commands Reference** - Essential for phase management
   - **Purpose**: Required commands for task progression and status updates
   - **Key Commands**: `update-phase-stage`, `log-action`, `error`, `update-notes`
   - **Location**: All commands run from `pmc` directory using `node bin/aplio-agent-cli.js`

### Recent Development Context

- **Last Milestone**: **T-2.1.3: Spacing and Layout System Extraction - COMPLETE SUCCESS** 
  - Comprehensive testing validation completed for spacing design tokens
  - All 4 elements (ELE-1 through ELE-4) fully tested and validated
  - Testing protocol successfully adapted for design token validation (not component testing)

- **Key Outcomes**: 
  - **Adapted Testing Protocol**: Developed and validated design token testing approach using Jest with dynamic imports
  - **100% Legacy Fidelity**: All custom spacing values (60px, 100px, 150px) preserved exactly from legacy sources
  - **TypeScript Compilation Success**: All interfaces, utility functions, and exports working correctly
  - **Testing Infrastructure**: Proven Jest unit testing pattern for design tokens in `test\unit-tests\task-2-1.3\T-2.1.3\spacing-basic.test.ts`

- **Relevant Learnings**: 
  - **Design Tokens ≠ React Components**: Visual testing and component scaffolding not applicable - focus on TypeScript compilation and value accuracy
  - **Dynamic Imports Required**: Use `await import('../../../../styles/design-tokens/spacing')` pattern to avoid compilation issues
  - **Legacy Value Preservation Critical**: Exact value matching required - any deviation from legacy fails validation
  - **Testing Protocol Adaptation Works**: Successfully modified standard component testing protocol for design token validation

- **Technical Context**: 
  - **Jest Configuration**: Working Jest setup with ts-jest and jsdom environment
  - **Testing Pattern**: `beforeAll` with dynamic import, nested `describe` blocks for each element
  - **File Structure**: `test/unit-tests/task-2-1.X/T-2.1.X/` directory pattern established
  - **Spacing Token Pattern**: Complete TypeScript interfaces with 'as const' assertions and utility functions established in `spacing.ts`

**Critical Testing Context for T-2.1.4**: Use the exact same adapted testing approach developed for T-2.1.3 - do NOT attempt to use visual component testing protocols for animation design tokens.

### T-2.1.3 Testing Session Comprehensive Summary

**Complete Execution Overview**: This session successfully executed the role of AI Testing Agent Conductor for T-2.1.3: Spacing and Layout System Extraction, developing and validating a comprehensive testing protocol specifically adapted for design token validation.

**Key Accomplishments**:
1. **Discovered Critical Insight**: T-2.1.3 is design tokens (TypeScript), not React components - required complete testing protocol adaptation
2. **Successfully Adapted Testing Protocol**: Modified standard component testing to focus on TypeScript compilation, token accuracy, and utility function validation
3. **Achieved 100% Test Success**: All 7 test cases passed validating 4 T-2.1.3 elements (ELE-1 through ELE-4)
4. **Established Testing Infrastructure**: Created working Jest pattern with dynamic imports for design token validation
5. **Validated Legacy Fidelity**: Confirmed exact preservation of critical custom spacing values (60px, 100px, 150px)

**Generated Testing Artifacts**:
- `pmc\system\plans\task-approach\current-test-discovery.md` - Complete testable elements analysis
- `test\unit-tests\task-2-1.3\T-2.1.3\spacing-basic.test.ts` - Working test suite (7/7 tests passed)
- `test\reports\T-2.1.3-testing-report.md` - Comprehensive testing validation report

**Protocol Adaptations Made**:
- **Skipped Phase 3 (Visual Testing)**: Not applicable for design tokens
- **Skipped Phase 4 (LLM Vision Analysis)**: Not applicable for design tokens  
- **Modified Phase 2 (Unit Testing)**: Focus on TypeScript compilation and value accuracy rather than component rendering
- **Enhanced Phase 1 (Discovery)**: Created design token classification system vs React component classification

**T-2.1.4 Requirements Gap Analysis**:
After reviewing T-2.1.4 task requirements, the testing approach developed for T-2.1.3 maps perfectly:
- **ELE-1 (Animation timing)**: Same pattern as spacing values - TypeScript constants with 'as const'
- **ELE-2 (Easing functions)**: Same pattern as component spacing patterns - interface definitions
- **ELE-3 (Transition durations)**: Same pattern as layout spacing utilities - structured token mapping
- **ELE-4 (Animation token types)**: Same pattern as spacing utility functions - TypeScript interfaces and utility functions

**No Testing Gaps Identified**: The adapted testing protocol from T-2.1.3 is fully applicable to T-2.1.4 animation design tokens.

**Critical Testing Variations for Next Agent**:
1. **Dynamic Import Pattern**: Must use `await import('../../../../styles/design-tokens/animations')` in tests
2. **Jest beforeAll Setup**: Required to avoid TypeScript compilation issues at test runtime
3. **Value Accuracy Focus**: Animation timings and easing functions must match legacy sources exactly
4. **No Visual Testing**: Do not attempt component scaffolding or screenshot testing for animation tokens

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