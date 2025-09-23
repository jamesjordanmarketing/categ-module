# Development Context & Operational Priorities
**Date:** 2025-06-15 23:36 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Focus**: **T-2.1.5: Shadow and Border System Extraction - IMPLEMENTATION COMPLETE, TESTING REQUIRED**

**What is being worked on**: Unit testing and validation of T-2.1.5 design token implementation for shadow and border systems following successful completion of all implementation phases (PREP, IMP, VAL).

**Why it is being worked on**: T-2.1.5 implementation has been completed with effects.ts file creation (356 lines) containing shadow system, border colors, and TypeScript interfaces. All legacy fidelity validation passed (10/10 checks). Testing is required to ensure comprehensive validation using Jest design token testing protocol adapted from T-2.1.4 pattern.

**Current state of implementation**: 
- **T-2.1.5 Status**: ✅ **IMPLEMENTATION COMPLETE - TESTING PHASE REQUIRED**
  - Implementation: 356 lines in effects.ts (production-ready)
  - Legacy Fidelity: 100% exact value preservation validated
  - TypeScript Interfaces: Complete with 'as const' assertions
  - Utility Functions: All required functions implemented
  - Validation: All 10 implementation checks passed
- **Testing Status**: 🆕 **READY TO START** - No testing yet, requires comprehensive Jest validation

**Implementation Location**: `aplio-modern-1\styles\design-tokens\effects.ts` (CREATED)
**Testing Location**: `aplio-modern-1\test\unit-tests\task-2-1\T-2.1.5\` (TO BE CREATED)
**Pattern**: P006-DESIGN-TOKENS (Design Token TypeScript interfaces, following T-2.1.4 proven pattern)

**Critical Context for Testing Agent**:
1. **Implementation Complete**: effects.ts contains 356 lines with shadow system, border colors, TypeScript interfaces, and utility functions - all following T-2.1.4 animations.ts pattern exactly
2. **Legacy Fidelity Validated**: All shadow values match legacy exactly (nav: '0px 0px 30px rgba(0, 0, 0, 0.05)', icon: '0px 0px 20px 0px rgba(0, 0, 0, 0.07)', box: '0px 5px 50px 0px rgba(0, 0, 0, 0.07)'), border colors preserved (#EDF0E6, #373935)
3. **Testing Protocol Available**: T-2.1.4 testing pattern proven successful for design token validation - MUST use same Jest dynamic import approach
4. **No Component Testing Required**: This is design token testing (NOT React components) - focus on interfaces, utility functions, and value validation
5. **Border Radius Already Exists**: Border radius is implemented in T-2.1.3 spacing.ts - effects.ts focuses on shadows and border colors only to avoid duplication

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
- **Task ID**: T-2.1.5: Shadow and Border System Extraction
- **Current Phase**: Testing Phase (Post-Implementation)
- **Active Element**: Testing preparation and Jest unit test creation required
- **Last Recorded Action**: All validation phases completed successfully - ready for comprehensive testing using T-2.1.4 proven pattern

### Critical Testing Requirements for T-2.1.5

**TESTING PROTOCOL MODIFICATIONS REQUIRED**:
1. **Design Token Testing (NOT Component Testing)**: effects.ts contains TypeScript design tokens - use T-2.1.4 testing approach with dynamic imports, NOT React component testing
2. **Jest Dynamic Import Pattern**: `await import('../../../../styles/design-tokens/effects')` required to avoid TypeScript compilation issues - proven successful in T-2.1.4
3. **Testing Structure**: Organize tests by element (ELE-1: Shadow System, ELE-2: Border System, ELE-3: TypeScript Interfaces) with nested describe blocks
4. **Legacy Fidelity Focus**: Test exact value preservation against tailwind.config.js sources, NOT visual rendering
5. **Skip Visual Testing**: Design tokens require value accuracy testing, not component rendering or screenshot validation

**CRITICAL TESTING ELEMENTS (from active-task.md)**:
- **[T-2.1.5:ELE-1]** Shadow system extraction: Test TypeScript shadow definitions with elevation levels
- **[T-2.1.5:ELE-2]** Border system extraction: Test border colors and widths (radius excluded - already in spacing.ts)
- **[T-2.1.5:ELE-3]** Effects token type definitions: Test TypeScript interfaces and utility functions

**TESTING ADAPTATIONS REQUIRED**:
- **Remove Component Discovery**: effects.ts is NOT a React component - no scaffold generation needed
- **Remove Visual Testing**: No screenshots or visual validation required for design tokens
- **Remove LLM Vision Analysis**: Not applicable for design token validation
- **Focus on Jest Unit Testing**: TypeScript interface validation, utility function testing, value accuracy testing

### Next Steps 

1. **T-2.1.5:TEST-1** - Create Jest test files using T-2.1.4 pattern
   - **Dependencies**: T-2.1.4 testing pattern template at `test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts`
   - **Expected Outcome**: Jest test files for effects.ts with dynamic import pattern

2. **T-2.1.5:TEST-2** - Execute design token validation tests
   - **Dependencies**: Jest test files created, dynamic import pattern implemented
   - **Expected Outcome**: All interface definitions, utility functions, and legacy values validated

3. **T-2.1.5:TEST-3** - Generate testing report following T-2.1.4 format
   - **Dependencies**: All tests completed successfully
   - **Expected Outcome**: Complete testing documentation with results summary

### Important Dependencies

1. **T-2.1.4 Testing Pattern Template**
   - **Current Status**: ✅ **AVAILABLE FOR REFERENCE**
   - **Location**: `test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts`
   - **Impact**: CRITICAL template for effects.ts testing approach - must use same Jest dynamic import pattern

2. **effects.ts Implementation File**  
   - **Current Status**: ✅ **COMPLETE AND READY FOR TESTING**
   - **Location**: `aplio-modern-1/styles/design-tokens/effects.ts` (356 lines)
   - **Impact**: PRIMARY testing target - contains all shadow system, border colors, and TypeScript interfaces

3. **Jest Testing Configuration**
   - **Current Status**: ✅ **WORKING AND VALIDATED FROM T-2.1.4**
   - **Impact**: Required for design token testing with dynamic imports - proven working

### Important Files

1. **`aplio-modern-1/styles/design-tokens/effects.ts`** - T-2.1.5 implementation target (356 lines)
   - **Purpose**: Primary testing target containing shadow system, border colors, TypeScript interfaces, utility functions
   - **Current State**: ✅ Production-ready with comprehensive implementation validated

2. **`test/unit-tests/task-2-1.4/T-2.1.4/animations-basic.test.ts`** - T-2.1.4 testing pattern template
   - **Purpose**: EXACT template for T-2.1.5 testing approach with Jest dynamic imports
   - **Current State**: ✅ Proven successful pattern for design token testing

3. **`aplio-legacy/tailwind.config.js`** - Legacy source for validation (lines 54-58, 44-47)
   - **Purpose**: Source definitions for exact value validation in tests
   - **Current State**: Available for testing validation - contains shadow and border color definitions

4. **`pmc/core/active-task.md`** - T-2.1.5 task specification
   - **Purpose**: Complete task definition with elements breakdown and acceptance criteria
   - **Current State**: ✅ Implementation phases complete, testing phase specified

5. **`pmc/core/active-task-unit-tests-2.md`** - T-2.1.5 testing protocol
   - **Purpose**: Testing methodology and phase structure (requires adaptation for design tokens)
   - **Current State**: Available but requires design token testing adaptations

### Important Scripts, Markdown Files, and Specifications

1. **`jest.config.js`** - Jest testing configuration
   - **Purpose**: Testing environment setup proven working for design token testing
   - **Key Sections**: TypeScript support, test patterns, ts-jest configuration

2. **`pmc/core/active-task-unit-tests-2.md`** - Testing protocol document  
   - **Purpose**: Testing phases and methodology (REQUIRES ADAPTATION)
   - **Key Adaptations Needed**: Skip Phase 1 (Component Discovery), Skip Phase 3 (Visual Testing), Skip Phase 4 (LLM Vision), Focus on Phase 2 (Jest Unit Testing)

### Recent Development Context

- **Last Milestone**: **T-2.1.5: Shadow and Border System Extraction - IMPLEMENTATION COMPLETE**
  - Complete effects.ts implementation (356 lines) with shadow system, border colors, TypeScript interfaces
  - All validation checks passed (10/10) with exact legacy fidelity preservation
  - TypeScript compilation successful with 'as const' assertions and proper interfaces
  - Avoiding duplication with T-2.1.3 spacing.ts for border radius

- **Key Outcomes**: 
  - **Design Token Pattern Established**: effects.ts follows T-2.1.4 animations.ts pattern exactly
  - **Legacy Fidelity Achieved**: All shadow values (nav, icon, box) and border colors (#EDF0E6, #373935) match legacy exactly
  - **TypeScript Safety Implemented**: Complete interface definitions with utility functions and proper exports
  - **Implementation Validation Complete**: All acceptance criteria met through validation testing

- **Relevant Learnings**: 
  - **Design Token Testing Protocol**: T-2.1.4 Jest dynamic import pattern (`await import('../../../../styles/design-tokens/effects')`) proven successful
  - **Legacy Source Analysis**: tailwind.config.js shadow definitions (lines 54-58) and border colors (lines 44-47) successfully extracted
  - **Pattern Consistency**: Following animations.ts structure ensures design system coherence
  - **Duplication Avoidance**: Border radius already exists in spacing.ts - effects.ts focuses on shadows and colors only

- **Technical Context**: 
  - **Jest Configuration Working**: ts-jest setup with dynamic imports validated for design token testing
  - **TypeScript Compilation Successful**: All interfaces, 'as const' assertions, and utility functions compile without errors
  - **Testing Target Ready**: effects.ts (356 lines) is production-ready and awaits comprehensive Jest validation
  - **Testing Pattern Available**: T-2.1.4 animations-basic.test.ts provides exact template for effects.ts testing

**Critical Testing Protocol Adaptations for T-2.1.5**:
1. **NO Component Discovery Required**: effects.ts is design tokens, not React components
2. **NO Visual Testing Required**: Design tokens need value validation, not screenshot testing  
3. **NO LLM Vision Analysis Required**: Not applicable for TypeScript design token validation
4. **Focus on Jest Unit Testing**: Interface validation, utility function testing, legacy value accuracy
5. **Use T-2.1.4 Pattern Exactly**: Jest dynamic imports, nested describe blocks by element, TypeScript compilation testing

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