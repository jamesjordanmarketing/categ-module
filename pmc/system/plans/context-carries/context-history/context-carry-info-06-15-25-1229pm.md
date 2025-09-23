# Development Context & Operational Priorities
**Date:** 2025-06-15 12:29 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.1.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Focus**: **T-2.1.4: Animation and Transition System Extraction - UNIT TESTING PHASE**  

**What is being worked on**: Unit testing for the completed T-2.1.4 design token implementation following the successful completion of all implementation phases (PREP, IMP, VAL). This task involves testing the comprehensive animations.ts design token file using adapted testing protocols specific to design token validation (not React component testing).

**Why it is being worked on**: T-2.1.4 implementation is 100% complete with exact legacy fidelity preservation. The task requires comprehensive unit testing using the adapted design token testing protocol developed for T-2.1.3, which focuses on TypeScript compilation, token accuracy, and utility function validation rather than visual component testing.

**Current state of implementation**: 
- **T-2.1.4 Implementation Status**: ✅ **FULLY COMPLETE** - All 4 elements (ELE-1 through ELE-4) implemented with exact legacy fidelity
- **T-2.1.4 Testing Status**: 🆕 **READY TO START** - Implementation validation complete, awaiting comprehensive unit testing

**Implementation Location**: `aplio-modern-1\styles\design-tokens\animations.ts` (444 lines, production-ready)
**Pattern**: P006-DESIGN-TOKENS (Design Token TypeScript interfaces, not React components)
**Testing Protocol**: **CRITICAL ADAPTATION REQUIRED** - Use design token testing approach from T-2.1.3, NOT component testing

**Critical Context for Testing Agent**:
1. **NOT React Components**: T-2.1.4 creates TypeScript design tokens in animations.ts, not React components. Do NOT attempt component scaffolding or visual testing.
2. **Adapted Testing Protocol Required**: Use the successful T-2.1.3 design token testing pattern - Jest unit tests with dynamic imports, TypeScript compilation validation, and token accuracy verification.
3. **Legacy Fidelity Validation**: All animation timings (500ms duration, 200ms/400ms/600ms delays) and easing functions must match legacy sources exactly.
4. **TypeScript Focus**: Test interfaces, utility functions, and 'as const' assertions for type safety and tree-shaking optimization.
5. **No Visual Testing**: Skip Phase 3 (Visual Testing) and Phase 4 (LLM Vision) - not applicable for design tokens.

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
- **Task ID**: T-2.1.4: Animation and Transition System Extraction
- **Current Phase**: Unit Testing (post-implementation validation)
- **Active Element**: All 4 elements ready for testing (ELE-1: Animation timing, ELE-2: Easing functions, ELE-3: Transition durations, ELE-4: TypeScript types)
- **Last Recorded Action**: Implementation validation complete - all phases (PREP, IMP, VAL) successfully completed with exact legacy fidelity

### Next Steps 

1. **T-2.1.4:TEST-1** - Execute adapted design token unit testing using Jest with dynamic imports
   - **Dependencies**: T-2.1.3 testing protocol adaptation, Jest configuration
   - **Expected Outcome**: Complete unit test validation of animations.ts design tokens

2. **T-2.1.4:TEST-2** - Validate TypeScript compilation and interface accuracy
   - **Dependencies**: TypeScript compiler, animations.ts implementation
   - **Expected Outcome**: 100% TypeScript compilation success with type safety validation

3. **T-2.1.4:TEST-3** - Verify legacy fidelity for all extracted animation values
   - **Dependencies**: Legacy source comparison (animation.js, tailwind.config.js)
   - **Expected Outcome**: Exact value matching for all timing and easing functions

4. **T-2.1.4:TEST-4** - Generate comprehensive testing report using T-2.1.3 template
   - **Dependencies**: Previous test results, T-2.1.3 testing report pattern
   - **Expected Outcome**: Complete testing validation report confirming task completion

### Important Files

1. **`aplio-modern-1\styles\design-tokens\animations.ts`** - T-2.1.4 complete implementation (444 lines)
   - **Purpose**: TypeScript design tokens for animation system with exact legacy fidelity
   - **State**: ✅ Complete and ready for testing - all 4 elements implemented

2. **`pmc\core\active-task-unit-tests-2.md`** - Testing protocol document
   - **Purpose**: Testing instructions for T-2.1.4 (requires critical adaptation)
   - **State**: ⚠️ **ADAPTATION REQUIRED** - Written for React components, must be adapted for design tokens

3. **`aplio-modern-1\styles\design-tokens\spacing.ts`** - T-2.1.3 successful pattern reference
   - **Purpose**: Proven design token testing pattern to follow for T-2.1.4
   - **State**: Complete and tested - provides exact testing template for design tokens

4. **`test\unit-tests\task-2-1.3\T-2.1.3\spacing-basic.test.ts`** - T-2.1.3 successful test pattern
   - **Purpose**: Working Jest test suite for design tokens using dynamic imports
   - **State**: Complete and validated - template for T-2.1.4 testing approach

5. **`test\reports\T-2.1.3-testing-report.md`** - T-2.1.3 testing report template
   - **Purpose**: Template for T-2.1.4 testing documentation and validation criteria
   - **State**: Complete - provides structure for T-2.1.4 testing report

### Important Scripts, Markdown Files, and Specifications

1. **`pmc\core\active-task.md`** - T-2.1.4 task specification and completion status
   - **Purpose**: Complete task definition with implementation status and acceptance criteria
   - **Key Sections**: Task Approach (implementation complete), Components/Elements (all 4 elements), Task Information

2. **`pmc\system\plans\context-carries\context-carry-info-06-15-25-1206pm.md`** - T-2.1.3 testing context
   - **Purpose**: Previous task testing context showing successful design token testing adaptation
   - **Key Sections**: T-2.1.3 Testing Session Comprehensive Summary, Protocol Adaptations Made

3. **Legacy Source Files** - Animation timing and easing function extraction sources
   - **`aplio-legacy\data\animation.js`**: Lines 1-10 for timing validation (0.5s duration, 0.2s/0.4s/0.6s delays)
   - **`aplio-legacy\tailwind.config.js`**: Lines 73-93 for easing function validation (bounce-open, floating keyframes)
   - **Purpose**: Validation sources for exact legacy fidelity verification

### Recent Development Context

- **Last Milestone**: **T-2.1.4: Animation and Transition System Extraction - IMPLEMENTATION COMPLETE** 
  - All 4 elements (ELE-1 through ELE-4) successfully implemented with exact legacy fidelity
  - Comprehensive animations.ts file created with 444 lines of TypeScript design tokens
  - All validation phases (PREP, IMP, VAL) completed successfully

- **Key Outcomes**: 
  - **Exact Legacy Fidelity**: All animation timings (500ms, 200ms/400ms/600ms) and easing functions preserved exactly
  - **TypeScript Interfaces**: Complete type system with AnimationSystem, DurationScale, EasingFunctions interfaces
  - **Utility Functions**: Type-safe helper functions (getAnimationTiming, getEasing, generateAnimationCSS)
  - **Tree-shaking Optimization**: All exports use 'as const' assertions for Next.js 14 optimization

- **Relevant Learnings**: 
  - **Design Token Pattern Success**: T-2.1.3 spacing.ts pattern successfully applied to animations.ts
  - **Legacy Extraction Accuracy**: Animation timing patterns clearly identified and preserved from legacy sources
  - **TypeScript Type Safety**: Interface definitions provide comprehensive type coverage for all animation tokens
  - **Utility Function Integration**: Helper functions enable easy access to animation tokens with type safety

- **Technical Context**: 
  - **Implementation File**: `aplio-modern-1\styles\design-tokens\animations.ts` (444 lines, production-ready)
  - **Pattern Used**: P006-DESIGN-TOKENS with TypeScript interfaces and 'as const' exports
  - **Legacy Sources**: animation.js (timing), tailwind.config.js (easing), inferred interaction patterns
  - **TypeScript Compilation**: Successful compilation verified during implementation validation

**Critical Testing Context for T-2.1.4**: 

1. **MANDATORY TESTING ADAPTATION**: The testing protocol in `active-task-unit-tests-2.md` assumes React components and is **INCORRECT** for T-2.1.4. The testing agent MUST adapt to design token testing:
   - **Skip Phase 1 Component Discovery**: No React components exist - only TypeScript design tokens
   - **Skip Phase 3 Visual Testing**: No visual components to test - only TypeScript interfaces
   - **Skip Phase 4 LLM Vision Analysis**: Not applicable for design token validation
   - **Focus on Phase 2 Unit Testing**: Adapt to design token testing with Jest and dynamic imports

2. **Required Testing Approach**: Follow T-2.1.3 successful pattern exactly:
   - Use Jest with dynamic imports: `await import('../../../../styles/design-tokens/animations')`
   - Test TypeScript compilation and interface accuracy
   - Validate legacy fidelity for all extracted values
   - Use `beforeAll` setup to avoid compilation issues

3. **Specific Validation Requirements**:
   - **Duration Validation**: Verify fade: '500ms', bounce: '300ms', floating: '5000ms' 
   - **Delay Validation**: Verify stagger1: '200ms', stagger2: '400ms', stagger3: '600ms'
   - **Easing Validation**: Verify bounceOpen, floatingEase definitions
   - **Interface Validation**: Test all TypeScript interfaces and utility functions

4. **Test Structure Required**: Create `test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts` following T-2.1.3 pattern with:
   - Dynamic import of animations.ts
   - Nested describe blocks for each element (ELE-1 through ELE-4)
   - Value accuracy tests comparing to legacy sources
   - TypeScript compilation validation

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