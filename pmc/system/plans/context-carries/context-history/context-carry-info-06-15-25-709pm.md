# Development Context & Operational Priorities
**Date:** 2025-06-15 19:09 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Focus**: **T-2.1.5: Shadow and Border System Extraction - READY TO START IMPLEMENTATION**

**What is being worked on**: Implementation of T-2.1.5 design token extraction for shadow and border systems following the successful completion and comprehensive testing validation of T-2.1.4. This task involves creating TypeScript design tokens for shadow elevation levels, border widths, radii, and styles in the effects.ts file.

**Why it is being worked on**: T-2.1.5 is the next sequential task in the design token extraction series (T-2.1.x) following the successful completion of T-2.1.4 Animation and Transition System Extraction. This continues the systematic modernization of the Aplio design system by extracting visual effects tokens with exact legacy fidelity preservation.

**Current state of implementation**: 
- **T-2.1.4 Status**: ✅ **FULLY COMPLETE WITH COMPREHENSIVE TESTING VALIDATION**
  - Implementation: 443 lines in animations.ts (production-ready)
  - Testing: 18/18 tests passed (100% success rate)
  - Legacy Fidelity: 100% exact match validation confirmed
  - TypeScript Compilation: Successful with no errors
  - Testing Report: Complete documentation provided
- **T-2.1.5 Status**: 🆕 **READY TO START** - No implementation yet, fresh start required

**Implementation Location**: `aplio-modern-1\styles\design-tokens\effects.ts` (to be created)
**Pattern**: P006-DESIGN-TOKENS (Design Token TypeScript interfaces, following T-2.1.4 proven pattern)

**Critical Context for Next Agent**:
1. **Proven Design Token Pattern Available**: T-2.1.4 animations.ts provides exact template structure to follow
2. **Testing Protocol Established**: Comprehensive Jest testing approach with dynamic imports proven successful
3. **Legacy Source Files Identified**: tailwind.config.js lines 59-67 for shadows and border definitions
4. **Type Safety Requirements**: Must follow T-2.1.4 pattern with interfaces, 'as const' assertions, and utility functions
5. **Expected Testing Adaptation**: Use T-2.1.4 testing pattern for effects tokens (NOT component testing)

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
- **Task ID**: T-2.1.5: Shadow and Border System Extraction
- **Current Phase**: Pre-Implementation (Ready to Start PREP Phase)
- **Active Element**: Initial task review and legacy source analysis required
- **Last Recorded Action**: T-2.1.4 comprehensive testing completed successfully - all acceptance criteria met, ready to transition to T-2.1.5

### Critical Context from T-2.1.4 Testing Session

**T-2.1.4 Testing Protocol Adaptations Made**:
1. **Component vs Design Token Testing**: Successfully adapted from React component testing to design token validation using T-2.1.3 proven pattern
2. **Jest Dynamic Imports**: Used `await import('../../../../styles/design-tokens/animations')` to avoid TypeScript compilation issues
3. **Testing Structure**: Organized tests by element (ELE-1 through ELE-4) with nested describe blocks
4. **Legacy Fidelity Focus**: Comprehensive validation against animation.js and tailwind.config.js sources

**Critical Testing Decisions for T-2.1.5**:
- **Use Same Pattern**: T-2.1.4 testing approach proven successful for design tokens
- **Skip Visual Testing**: Effects tokens require value accuracy testing, not component rendering
- **Focus on TypeScript**: Interface validation, utility function testing, compilation verification
- **Legacy Source Analysis**: Extract exact values from tailwind.config.js shadow/border definitions

### Next Steps 

1. **T-2.1.5:PREP-1** - Analyze legacy shadow definitions in tailwind.config.js
   - **Dependencies**: Access to `aplio-legacy/tailwind.config.js` lines 59-67
   - **Expected Outcome**: Complete understanding of shadow system with elevation levels and color variations

2. **T-2.1.5:PREP-2** - Study border style implementations across legacy codebase
   - **Dependencies**: Analysis of tailwind.config.js border definitions
   - **Expected Outcome**: Documentation of border widths, radii, and style patterns

3. **T-2.1.5:PREP-3** - Plan TypeScript structure for effects token definitions
   - **Dependencies**: T-2.1.4 animations.ts pattern as template
   - **Expected Outcome**: Clear implementation plan following proven design token pattern

4. **T-2.1.5:IMP-1** - Create effects.ts file with shadow system definitions
   - **Dependencies**: Completion of PREP phase
   - **Expected Outcome**: Production-ready effects.ts file with TypeScript interfaces

5. **T-2.1.5:TEST** - Implement comprehensive testing using T-2.1.4 proven pattern
   - **Dependencies**: T-2.1.4 testing approach and Jest configuration
   - **Expected Outcome**: Complete test validation with legacy fidelity verification

### Important Dependencies

1. **T-2.1.4 Testing Pattern Template**
   - **Current Status**: ✅ **COMPLETE AND AVAILABLE**
   - **Location**: `test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts`
   - **Impact**: Essential template for T-2.1.5 testing implementation

2. **T-2.1.4 Design Token Implementation Pattern**  
   - **Current Status**: ✅ **COMPLETE AND AVAILABLE**
   - **Location**: `styles/design-tokens/animations.ts` (443 lines)
   - **Impact**: Critical reference for effects.ts structure, interfaces, and utility functions

3. **Jest Testing Configuration**
   - **Current Status**: ✅ **WORKING AND VALIDATED**
   - **Impact**: Required for T-2.1.5 design token testing with dynamic imports

### Important Files

1. **`pmc/core/active-task.md`** - T-2.1.5 task specification and requirements
   - **Purpose**: Complete task definition with acceptance criteria and element breakdown
   - **Current State**: Updated to T-2.1.5, ready for implementation

2. **`aplio-modern-1/styles/design-tokens/animations.ts`** - T-2.1.4 completed implementation (443 lines)
   - **Purpose**: Template and pattern reference for T-2.1.5 effects.ts implementation
   - **Current State**: ✅ Production-ready with comprehensive testing validation

3. **`aplio-modern-1/test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts`** - T-2.1.4 test suite
   - **Purpose**: Testing pattern template for T-2.1.5 effects token testing
   - **Current State**: ✅ Complete with 18/18 tests passing

4. **`aplio-modern-1/test/reports/T-2.1.4-testing-report.md`** - T-2.1.4 testing documentation
   - **Purpose**: Testing approach documentation and validation results
   - **Current State**: ✅ Complete comprehensive testing report

5. **`aplio-legacy/tailwind.config.js`** - Legacy source for effects extraction (lines 59-67)
   - **Purpose**: Source definitions for shadow and border system extraction
   - **Current State**: Available for T-2.1.5 analysis - contains dropShadow and boxShadow definitions

6. **`aplio-modern-1/styles/design-tokens/effects.ts`** - T-2.1.5 target implementation file
   - **Purpose**: Design token file to be created for shadow and border systems
   - **Current State**: ⚠️ **NOT CREATED YET** - Primary implementation target for T-2.1.5

### Important Scripts, Markdown Files, and Specifications

1. **`pmc/core/active-task-unit-tests-2-T-2-1-4.md`** - T-2.1.4 testing protocol document
   - **Purpose**: Reference for testing approach adaptations and protocol modifications
   - **Key Sections**: Phase 0 (Environment Setup), Phase 2 (Jest Unit Testing), Phase 3 (Report Generation)

2. **`jest.config.js`** - Jest testing configuration
   - **Purpose**: Testing environment setup for design token testing
   - **Key Sections**: TypeScript support, test patterns, ts-jest configuration

3. **`pmc/system/plans/task-approach/current-test-discovery.md`** - T-2.1.4 test analysis
   - **Purpose**: Documentation of T-2.1.4 testable elements and approach
   - **Key Sections**: Element breakdown (ELE-1 through ELE-4), testing strategy classification

4. **`tsconfig.json`** - TypeScript configuration
   - **Purpose**: TypeScript compilation settings for design token validation
   - **Key Sections**: Compilation options for 'as const' assertions and type safety

### Recent Development Context

- **Last Milestone**: **T-2.1.4: Animation and Transition System Extraction - COMPREHENSIVE TESTING COMPLETION**
  - Complete implementation validation with 18/18 tests passed (100% success rate)
  - Production-ready animations.ts design token file (443 lines)
  - Comprehensive testing report documenting all validation results
  - Successful adaptation of testing protocol from component to design token testing

- **Key Outcomes**: 
  - **Design Token Testing Pattern Proven**: Jest with dynamic imports successfully validates TypeScript design tokens
  - **Legacy Fidelity Methodology Established**: Exact value preservation validated through comprehensive source comparison
  - **TypeScript Pattern Confirmed**: Interface definitions, 'as const' assertions, and utility functions working perfectly
  - **Testing Protocol Adaptation Success**: Proved component testing protocols can be successfully adapted for design token validation

- **Relevant Learnings**: 
  - **Dynamic Import Pattern Critical**: `await import('../../../../styles/design-tokens/animations')` essential for avoiding TypeScript compilation issues in tests
  - **Nested Test Structure Effective**: Organizing tests by element (ELE-1 through ELE-4) provides comprehensive coverage
  - **Legacy Source Analysis Required**: Direct comparison with source files (animation.js, tailwind.config.js) ensures exact fidelity
  - **Utility Function Testing Essential**: Type-safe helper functions require comprehensive input/output validation

- **Technical Context**: 
  - **Jest Configuration Working**: ts-jest setup with dynamic imports proven successful for design token testing
  - **TypeScript Compilation Validated**: All 'as const' assertions and interface definitions compile without errors
  - **Testing Report Template Available**: T-2.1.4 testing report provides exact template for T-2.1.5 documentation
  - **Implementation Pattern Established**: animations.ts structure provides exact template for effects.ts implementation

**Critical Variations Made to T-2.1.4 Testing**:
1. **Protocol Adaptation**: Successfully adapted from React component testing to design token testing using T-2.1.3 pattern
2. **Test Structure Modification**: Organized by design token elements rather than component functionality
3. **Legacy Fidelity Focus**: Emphasized exact value preservation over visual rendering validation
4. **TypeScript-Centric Approach**: Focused on interface validation and compilation testing rather than runtime behavior

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