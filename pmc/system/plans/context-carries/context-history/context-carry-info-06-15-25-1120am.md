# Development Context & Operational Priorities
**Date:** 2025-06-15 11:20 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**TRANSITION TO T-2.1.3 UNIT TESTING: Design Token Testing Protocol**

**What is being worked on**: Task T-2.1.3 Spacing and Layout System Extraction is **IMPLEMENTATION COMPLETE** and **READY FOR COMPREHENSIVE UNIT TESTING**. The implementation phase achieved 100% legacy fidelity with TypeScript design tokens extracted from tailwind.config.js and _common.scss into a production-ready spacing system.

**Why it is being worked on**: T-2.1.3 Spacing System Extraction was **SUCCESSFULLY IMPLEMENTED** through comprehensive PREP/IMP/VAL phases with all validation tests passing. Following the successful T-2.1.2 Typography System testing pattern, the spacing design token system requires adapted testing protocol specifically designed for TypeScript design tokens (not React components).

**Current state of implementation**: 
- **T-2.1.3 Status**: ✅ **IMPLEMENTATION COMPLETE + VALIDATION PASSED**
- **Next Phase**: 🎯 **UNIT TESTING READY** 
- **Implementation Location**: `aplio-modern-1/styles/design-tokens/spacing.ts` (409 lines)
- **Test Location**: `aplio-modern-1/test/unit-tests/task-2-1/T-2.1.3/`
- **Testing Protocol**: Enhanced testing protocol in `pmc/core/active-task-unit-tests-2.md`

**Critical context needed for T-2.1.3 testing implementation**:

### T-2.1.3 Implementation Session - COMPREHENSIVE RESULTS (COMPLETED)

#### Implementation Summary - ALL PHASES COMPLETED ✅

**Key Implementation Achievements**:
- **TypeScript Spacing Token System**: 409-line comprehensive spacing.ts file created with exact legacy fidelity
- **Complete Legacy Value Preservation**: All custom spacing values (15: '60px', 25: '100px', 150: '150px') extracted exactly
- **Component Spacing Patterns**: Mobile menu, section taglines, FAQ, modal, single page, integration slider patterns documented
- **Layout Utilities**: Container configuration, breakpoints (xs: '475px', '1xl': '1400px'), responsive patterns implemented
- **Type Safety**: Complete TypeScript interface system with SpacingToken, SpacingScale, ComponentSpacing, LayoutSpacing interfaces
- **Utility Functions**: getSpacing(), getComponentSpacing(), generateSpacingCSS() functions with Next.js 14 optimization

#### Complete Implementation Results - ALL VALIDATIONS PASSED ✅

**Phase 1: PREP Phase - COMPLETED**
- ✅ Legacy spacing definitions analyzed (tailwind.config.js custom values)
- ✅ Component spacing patterns identified (_common.scss lines 26-101)
- ✅ Layout spacing implementations studied (container, breakpoints)
- ✅ TypeScript structure planned following T-2.1.2 pattern

**Phase 2: IMP Phase - COMPLETED**
- ✅ spacing.ts created with base spacing scale definitions
- ✅ Spacing scaling factors and calculation methods extracted
- ✅ Component-specific spacing patterns implemented
- ✅ Layout-specific spacing values and utilities defined
- ✅ TypeScript interfaces and types created
- ✅ Type-safe exports with utility functions implemented

**Phase 3: VAL Phase - COMPLETED**
- ✅ **Legacy Fidelity: 100% EXACT MATCH** - All spacing values match legacy exactly
- ✅ **Component Patterns: 100% EXACT MATCH** - All component spacing preserved exactly
- ✅ **Layout Utilities: ALL VALIDATED** - Container and breakpoint system working
- ✅ **TypeScript Compilation: PASSING** - No compilation errors, type safety confirmed

#### Critical Testing Requirements for T-2.1.3

**Design Token Testing Pattern Established (Following T-2.1.2 Success)**:
1. **TypeScript Compilation Testing** - Essential for token validation (NOT visual rendering)
2. **Value Accuracy Testing** - Exact legacy value preservation validation required
3. **Import/Export Functionality Testing** - Module structure and utility function validation
4. **Legacy Fidelity Validation** - 100% match with source files required
5. **Skip Visual Testing Phases** - Design tokens are data structures, not visual components

**CRITICAL TESTING ADAPTATIONS REQUIRED**:
- **NO visual rendering testing** - Tokens are TypeScript interfaces, not React components
- **NO component scaffold generation** - Not applicable to design token system
- **NO server/client directive validation** - Pure TypeScript module
- **FOCUS on token validation and compilation testing** instead
- **Enhanced emphasis on value accuracy** and utility function testing

**T-2.1.3 Spacing Token Values to Validate**:
- Custom spacing scale: 15: '60px', 25: '100px', 150: '150px' (from tailwind.config.js)
- Border radius values: large: '40px', medium: '20px', DEFAULT: '12px'
- Component spacing patterns: Mobile menu (p-2.5 px-10), modal (-top-12, px-[18px] py-3)
- Layout breakpoints: xs: '475px', '1xl': '1400px'
- Complete TypeScript interface system with 'as const' assertions

### Requirements Gap Analysis for T-2.1.3 Testing

Based on comprehensive analysis between standard testing protocol and T-2.1.3 design token requirements, the following testing adaptations are required:

**Critical Testing Protocol Adaptations**:
1. **Skip Phase 1 Component Discovery** - Design tokens have no React components to discover
2. **Modify Phase 1 to Token Discovery** - Focus on TypeScript interfaces and exported tokens
3. **Skip Phase 3 Visual Testing** - No visual components to screenshot
4. **Enhance Phase 2 Unit Testing** - Focus on value accuracy, compilation, utility functions
5. **Add Phase 2.5 Legacy Validation** - Compare extracted values against source files

**Testing Elements Required for T-2.1.3**:
- **ELE-1**: Base spacing scale validation (60px, 100px, 150px custom values)
- **ELE-2**: Component spacing pattern validation (mobile menu, modal, etc.)
- **ELE-3**: Layout spacing utility validation (container, breakpoints)
- **ELE-4**: TypeScript type definition validation (interfaces, exports)

**Testing Infrastructure Available**:
- Jest unit testing framework ready
- TypeScript compilation testing available
- Value comparison testing utilities ready
- Import/export validation system available

### Next Steps (In Priority Order)

1. **Execute T-2.1.3 Unit Testing - IMMEDIATE PRIORITY**
   - Follow adapted testing protocol for design tokens (no visual testing)
   - Focus on TypeScript compilation and value accuracy testing
   - Validate all 4 elements against legacy sources
   - Create comprehensive Jest validation tests

2. **Apply T-2.1.2 Design Token Testing Pattern**
   - Use established pattern for TypeScript token validation
   - Ensure 100% legacy fidelity validation for all extracted values
   - Skip component scaffolding and visual testing phases
   - Focus on module functionality and type safety

3. **Validate Production Readiness**
   - Confirm TypeScript compilation passes
   - Validate utility functions work correctly
   - Ensure Next.js 14 integration ready
   - Document testing results for handoff

### Important Files

1. **`aplio-modern-1/styles/design-tokens/spacing.ts`** - **NEWLY CREATED** (409 lines) - **READY FOR TESTING** - Complete spacing token system with TypeScript interfaces, utility functions, and exact legacy value preservation. All custom values (60px, 100px, 150px) extracted correctly.

2. **`pmc/core/active-task-unit-tests-2.md`** - **TESTING PROTOCOL** - Enhanced testing protocol requiring adaptation for design tokens. Critical sections: Phase 1 (token discovery), Phase 2 (unit testing), Phase 4 (skip visual testing).

3. **`aplio-legacy/tailwind.config.js`** - **LEGACY SOURCE** - Primary source for spacing validation, custom values extracted: 15: '60px', 25: '100px', 150: '150px' (lines 68-72), container.center: true (line 18), breakpoints xs: '475px', '1xl': '1400px'.

4. **`aplio-legacy/scss/_common.scss`** - **LEGACY SOURCE** - Component spacing patterns source for validation, lines 26-101 containing mobile menu, modal, single page, integration slider spacing patterns.

5. **`aplio-modern-1/styles/design-tokens/typography.ts`** - **REFERENCE PATTERN** - Successful T-2.1.2 implementation serving as testing pattern reference for TypeScript design token validation approach.

6. **`pmc/core/active-task.md`** - **TASK DEFINITION** - Completed T-2.1.3 with all phases marked complete, validation passed, ready for unit testing handoff.

### Important Scripts, Markdown Files, and Specifications

1. **Spacing Token Testing Pattern** - **ADAPTED FROM T-2.1.2 SUCCESS**
   - **TypeScript Compilation Focus**: Essential for token validation, not visual rendering
   - **Value Accuracy Validation**: All token values must match legacy system exactly
   - **Utility Function Testing**: getSpacing(), getComponentSpacing(), generateSpacingCSS() functions
   - **Skip Visual Testing**: Design tokens are data structures, not visual components

2. **PMC Command Interface** - `pmc/bin/aplio-agent-cli.js`
   - **Testing Commands**: Use for logging testing progress and results
   - **Context**: All commands must be run from `pmc` directory

3. **Design Token Pattern Reference** - `aplio-modern-1/styles/design-tokens/spacing.ts`
   - **TypeScript Interface Pattern**: SpacingToken, SpacingScale, ComponentSpacing, LayoutSpacing interfaces
   - **Export Structure**: Named exports for individual tokens, default export for complete system
   - **Type Safety**: 'as const' assertions for proper type inference
   - **Utility Functions**: Helper functions for CSS generation and spacing calculations

### Recent Development Context

- **Last Milestone**: T-2.1.3 Spacing System Extraction - **IMPLEMENTATION COMPLETE + VALIDATION PASSED**
- **Key Outcomes**: 
  - **Spacing token system fully implemented** with 409 lines of TypeScript definitions
  - **100% legacy fidelity confirmed** - all custom spacing, component patterns, layout utilities match exactly
  - **TypeScript compilation passing** - no compilation errors, type safety confirmed
  - **Production-ready system** with Next.js 14 optimization and utility functions
- **Relevant Learnings**: 
  - **Design token testing requires adapted protocol** - different approach than component testing
  - **TypeScript compilation focus** essential for token validation vs visual rendering
  - **Legacy value preservation** critical - exact matches required for visual fidelity
  - **Testing pattern established** for future design token implementations
- **Technical Context**: 
  - **Spacing tokens ready for consumption** by Next.js 14 components
  - **Testing infrastructure available** for comprehensive token validation
  - **Pattern continuity** with T-2.1.2 typography system success
  - **Legacy extraction methodology validated** with 100% accuracy

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