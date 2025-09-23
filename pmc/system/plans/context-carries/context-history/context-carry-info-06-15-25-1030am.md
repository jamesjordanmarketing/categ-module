# Development Context & Operational Priorities
**Date:** 2025-06-15 10:30 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.1.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**TRANSITION TO T-2.1.3 SPACING SYSTEM EXTRACTION: Design Token Implementation**

**What is being worked on**: Task T-2.1.3 Spacing and Layout System Extraction is **READY FOR IMPLEMENTATION**. Following successful completion of T-2.1.2 Typography System testing, the next phase focuses on extracting spacing system and component-specific spacing patterns from the legacy codebase into TypeScript design tokens.

**Why it is being worked on**: T-2.1.2 Typography System Extraction was **SUCCESSFULLY TESTED AND VALIDATED** through comprehensive AI Testing Agent Conductor protocol. All 23 unit tests passed with 100% accuracy, confirming the typography token system is production-ready. The design token extraction sequence continues with T-2.1.3 to build upon the established pattern and complete the foundation design system.

**Current state of implementation**: 
- **T-2.1.2 Status**: ✅ **IMPLEMENTATION COMPLETE + TESTING VALIDATED**
- **T-2.1.3 Status**: 🎯 **READY FOR IMPLEMENTATION** 
- **Next Implementation Location**: `aplio-modern-1/styles/design-tokens/spacing.ts`
- **Test Location**: `aplio-modern-1/test/unit-tests/task-2-1/T-2.1.3/`
- **Pattern**: P006-DESIGN-TOKENS (following T-2.1.2 successful pattern)

**Critical context needed for T-2.1.3 implementation**:

### T-2.1.2 Testing Session - COMPREHENSIVE RESULTS (COMPLETED)

#### Testing Protocol Execution Summary
The AI Testing Agent Conductor successfully executed **comprehensive testing validation** for T-2.1.2 Typography System Extraction using an **adapted testing protocol** specifically designed for TypeScript design tokens (not React components).

**Key Testing Adaptations Made**:
- **NO visual rendering testing** (tokens are data structures, not visual components)
- **NO component scaffold generation** (no React components created)
- **NO server/client directive validation** (pure TypeScript module)
- **FOCUS on token validation** and TypeScript compilation instead
- **Enhanced emphasis on value accuracy** and legacy fidelity preservation

#### Complete Test Results - ALL PHASES PASSED ✅

**Phase 1: Token Discovery & TypeScript Compilation**
- ✅ All typography tokens discovered and classified
- ✅ TypeScript compilation passed - All interfaces compile correctly
- ✅ Token structure validated - Complete 443-line typography system

**Phase 2: Token Value Accuracy Testing**
- ✅ **Jest Unit Tests: 23/23 TESTS PASSED (100% SUCCESS RATE)**
- ✅ Font Size Accuracy: EXACT MATCH with legacy values
  - H1: 36px/64px (legacy line 15) ✅
  - H2: 32px/36px (legacy line 19) ✅
  - H3: 22px/24px (legacy line 23) ✅
  - H4-H6, Base: 20px, 18px, 16px ✅
- ✅ Font Weight Accuracy: EXACT MATCH (normal: 400, semibold: 600, bold: 700)
- ✅ Line Height Accuracy: EXACT MATCH (tight: 1.2, normal: 1.33, loose: 1.75)
- ✅ Letter Spacing Accuracy: EXACT MATCH (tight: -0.3px extracted from legacy)

**Phase 3: Integration & System Testing**
- ✅ Google Fonts URL preserved - Complete URL with all weights
- ✅ Responsive breakpoints validated - xl: 1280px system working
- ✅ Utility functions functional - CSS generation and responsive handling
- ✅ Import/export structure working - Proper module exports and TypeScript inference

**Phase 4: Visual Testing - PROPERLY SKIPPED**
- ⏭️ As specified in testing directions: "NO visual rendering testing needed (tokens are data structures, not visual components)"

**Phase 5: Complete System Validation**
- ✅ Type safety confirmed - All TypeScript interfaces working
- ✅ Legacy fidelity: 100% MATCH - All values exactly match `aplio-legacy/scss/_typography.scss`
- ✅ Production ready confirmed - Next.js 14 optimized with tree-shaking

#### Critical Testing Findings & Patterns for T-2.1.3

**Design Token Testing Pattern Established**:
1. **TypeScript Compilation Testing** - Essential for token validation
2. **Value Accuracy Testing** - Exact legacy value preservation required
3. **Import/Export Functionality Testing** - Module structure validation
4. **Utility Functions Testing** - Helper function validation for CSS generation
5. **Legacy Fidelity Validation** - 100% match with source files required

**T-2.1.2 Typography Token Values Validated**:
- Complete Google Fonts URL: `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@600&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap`
- Font families: Inter, Plus Jakarta Sans, Playfair Display with proper fallbacks
- Responsive breakpoint: xl: 1280px system confirmed working
- All font sizes, weights, line heights, letter spacing extracted with 100% accuracy

### Requirements Gap Analysis for T-2.1.3

Based on comprehensive analysis between T-2.1.2 completed implementation and T-2.1.3 requirements, the following requirements gaps have been identified:

**Critical Implementation Requirements for T-2.1.3**:
1. **Element ELE-1**: Spacing scale extraction from `tailwind.config.js` lines 68-72 (spacing scale) - **NOT YET IMPLEMENTED**
2. **Element ELE-2**: Component spacing patterns from `_common.scss` lines 26-101 - **NOT YET IMPLEMENTED**  
3. **Element ELE-3**: Layout spacing utilities from `tailwind.config.js` lines 18-23 (container widths) - **NOT YET IMPLEMENTED**
4. **Element ELE-4**: TypeScript type definitions following typography.ts pattern - **NOT YET IMPLEMENTED**

**Pattern Continuity Requirements**:
- **Follow T-2.1.2 TypeScript interface pattern** - Use same structure as TypographyToken interfaces
- **Implement utility functions** - spacing calculation functions similar to typography helpers
- **Maintain legacy fidelity** - 100% exact value preservation required
- **Export structure consistency** - Named exports + default export pattern
- **Type safety requirements** - `as const` assertions for proper inference

**Testing Requirements Based on T-2.1.2 Success**:
- **Create comprehensive Jest validation tests** - Follow typography-validation.test.ts pattern
- **Focus on value accuracy testing** - Exact legacy matches required
- **Skip visual rendering phases** - Design tokens are data structures, not components
- **TypeScript compilation validation** - Essential for token system validation

**No Implementation Gaps Identified** - T-2.1.2 provides complete pattern and methodology for T-2.1.3 implementation. All required context, patterns, and testing approaches are established and validated.

### Next Steps (In Priority Order)

1. **Execute T-2.1.3 Spacing System Implementation - IMMEDIATE PRIORITY**
   - Follow T-2.1.2 successful TypeScript design token pattern
   - Extract spacing system from legacy files (tailwind.config.js, _common.scss)
   - Create `aplio-modern-1/styles/design-tokens/spacing.ts` following typography.ts structure
   - Implement 4 elements: spacing scale, component patterns, layout utilities, type definitions

2. **Apply T-2.1.2 Design Token Pattern to Spacing**
   - Use same TypeScript interface pattern as typography tokens
   - Ensure type safety with `as const` assertions
   - Create utility functions for spacing calculations
   - Maintain 100% legacy fidelity with exact value preservation

3. **Prepare for Comprehensive Testing Validation**
   - Use adapted testing protocol established for T-2.1.2
   - Focus on TypeScript compilation and value accuracy testing
   - Skip visual testing phases (design tokens, not visual components)
   - Validate against legacy spacing sources for exact matches

### Important Files

1. **`aplio-modern-1/styles/design-tokens/typography.ts`** - **COMPLETED & TESTED** (443 lines) - **PRODUCTION READY** - Complete typography token system serving as the reference pattern for T-2.1.3 spacing implementation. All values match legacy exactly, TypeScript compilation confirmed, utility functions working.

2. **`aplio-modern-1/test/unit-tests/task-2-1/T-2.1.2/typography-validation.test.ts`** - **COMPREHENSIVE TEST SUITE** - 23 tests validating typography tokens against legacy values. Serves as template for T-2.1.3 spacing validation tests.

3. **`test/reports/T-2.1.2-testing-report.md`** - **COMPLETE TESTING DOCUMENTATION** - Comprehensive report of all testing phases, results, and validation outcomes. Reference for T-2.1.3 testing approach.

4. **`aplio-legacy/scss/_typography.scss`** - **LEGACY SOURCE VALIDATED** - Primary source for typography validation, all 48 lines successfully extracted and validated.

5. **`aplio-legacy/tailwind.config.js`** - **LEGACY CONFIGURATION** - Font family definitions and breakpoint system used in typography implementation. Contains spacing scale for T-2.1.3 (lines 68-72), container widths (lines 18-23).

6. **`aplio-legacy/scss/_common.scss`** - **T-2.1.3 SOURCE** - Component spacing patterns for T-2.1.3 extraction (lines 26-101).

7. **`pmc/core/active-task.md`** - **T-2.1.3 TASK DEFINITION** - Updated to T-2.1.3 Spacing and Layout System Extraction with 4 elements ready for implementation.

8. **`pmc\core\active-task-unit-tests-2.md`** - **TESTING PROTOCOL** - Enhanced testing protocol adapted for design tokens. Critical sections for T-2.1.3: token discovery (Phase 1), value accuracy testing (Phase 2), skip visual testing (Phase 4).

### Important Scripts, Markdown Files, and Specifications

1. **Typography Token Testing Pattern** - **ESTABLISHED & VALIDATED**
   - **TypeScript Compilation Focus**: Design tokens require compilation testing, not visual rendering
   - **Value Accuracy Validation**: All token values must match legacy system exactly
   - **Adapted Protocol Usage**: Skip component scaffolding, visual testing, component discovery phases
   - **Jest Unit Test Pattern**: Comprehensive value validation against legacy sources

2. **PMC Command Interface** - `pmc/bin/aplio-agent-cli.js`
   - **Implementation Commands**: Use for logging progress and managing implementation phases
   - **Context**: All commands must be run from `pmc` directory

3. **Design Token Pattern Reference** - `aplio-modern-1/styles/design-tokens/typography.ts`
   - **TypeScript Interface Pattern**: TypographyToken, ResponsiveFontSize, FontWeightScale interfaces
   - **Export Structure**: Named exports for individual tokens, default export for complete system
   - **Type Safety**: `as const` assertions for proper type inference
   - **Utility Functions**: Helper functions for CSS generation (getResponsiveFontSize, getFontFamilyCSS, generateTypographyCSS)

### Recent Development Context

- **Last Milestone**: T-2.1.2 Typography System Extraction - **IMPLEMENTATION COMPLETE + TESTING VALIDATED**
- **Key Outcomes**: 
  - **Typography token system fully implemented** with 443 lines of TypeScript definitions
  - **100% testing validation achieved** - 23/23 Jest unit tests passed
  - **Design token testing pattern established** for TypeScript tokens vs React components
  - **Complete legacy fidelity confirmed** - all font sizes, weights, spacing match legacy exactly
  - **Production-ready system** with Next.js 14 optimization and tree-shaking support
- **Relevant Learnings**: 
  - **Design token testing requires adapted protocol** - different approach than component testing
  - **TypeScript compilation focus** essential for token validation vs visual rendering
  - **Legacy value preservation** critical for visual fidelity - exact matches required
  - **Testing protocol adaptations** successful - skipping visual phases for token systems
- **Technical Context**: 
  - **Typography tokens ready for consumption** by Next.js 14 components
  - **Testing infrastructure validated** for design token systems
  - **Pattern established** for T-2.1.3 spacing system implementation
  - **Legacy extraction methodology proven** with 100% accuracy

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