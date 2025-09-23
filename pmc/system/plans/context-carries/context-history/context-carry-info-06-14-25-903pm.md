# Development Context & Operational Priorities
**Date:** 2025-06-14 21:03 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**TRANSITION TO T-2.1.1 TESTING PHASE: Color System Extraction Testing**

**What is being worked on**: Testing execution for Task T-2.1.1 - Color System Extraction. The implementation phase has been completed successfully, and now comprehensive unit testing with Enhanced LLM Vision analysis must be executed to validate the color token system created at `aplio-modern-1/styles/design-tokens/colors.ts`.

**Why it is being worked on**: Task T-2.1.1 implementation was completed successfully with all phases (PREP, IMP, VAL) marked as complete. The color system extraction created a comprehensive TypeScript color token system with exact hex values from legacy tailwind.config.js. Testing is required to validate:
1. Color token accuracy (exact hex value preservation)
2. TypeScript type safety and compilation
3. State variation implementations (hover, active, focus, disabled)
4. Next.js 14 optimization and export structure
5. 90% test coverage requirement compliance

**Current state of implementation**: 
- **T-2.1.1 Status**: ✅ **IMPLEMENTATION COMPLETE** - All phases finished
  - **PREP Phase**: ✅ Complete (legacy analysis, structure planning, directory creation)
  - **IMP Phase**: ✅ Complete (colors.ts file with 275 lines, TypeScript interfaces, state variations)
  - **VAL Phase**: ✅ Complete (manual validation confirmed exact hex value matching)
- **T-2.1.1 Testing Status**: **NOT STARTED** - Ready for comprehensive testing execution
- **Implementation Location**: `aplio-modern-1/styles/design-tokens/colors.ts` (275 lines)
- **Test Location**: `aplio-modern-1/test/unit-tests/task-2-1/T-2.1.1/`

**Critical context needed for testing continuation**:

### T-2.1.1 Implementation Summary (COMPLETED)
1. **Color Extraction Accuracy**: All colors extracted with exact hex values from `aplio-legacy/tailwind.config.js`:
   - Primary: DEFAULT: `#B1E346`, 100: `#F3F8E8`, 200: `#C4F241`
   - Dark: DEFAULT: `#131410`, 100: `#141410`, 200: `#212220`, 300: `#191A17`, gradient: `#191917`
   - Gray: DEFAULT: `#F6F8F1`, 50: `#F7F7F7`, 100: `#DCE0D3`, 200: `#D9E0C5`, darkGradient: `rgba(217, 224, 197, .07)`
   - BorderColor: DEFAULT: `#EDF0E6`, dark: `#373935`
   - Paragraph: DEFAULT: `#18181B`, light: `#5D6167`
   - Rating: DEFAULT: `#FFC107`

2. **State Variations Implemented**: Comprehensive state color definitions for interactive elements:
   - Primary states: default, hover (`#9FD63D`), active (`#8DC934`), focus, disabled (50% opacity)
   - Dark theme states: hover (`#1A1B17`), active (`#212218`), disabled variants
   - Gray states: hover (`#ECF0E5`), active (`#E2E7DA`), disabled variants

3. **TypeScript Type Safety**: Complete interface definitions implemented:
   - `ColorToken`: Base interface with DEFAULT and variants
   - `ExtendedColorToken`: Numeric scale support (50-950)
   - `ColorStateVariations`: Interactive state typing
   - `ColorPalette`: Complete palette interface
   - Utility functions: `withOpacity()`, `getStateColor()`

4. **Next.js 14 Optimization**: 
   - Proper tree-shaking support with const assertions
   - Type-safe exports with barrel export pattern
   - Optimized for CSS-in-JS and Tailwind CSS integration
   - Directory structure supports future token expansion

### CRITICAL TESTING REQUIREMENTS (T-2.1.1 SPECIFIC)

**⚠️  TESTING AGENT DIRECTIVE**: The testing approach in `pmc/core/active-task-unit-tests-2.md` assumes React components, but T-2.1.1 implemented **COLOR TOKENS** (TypeScript constants and interfaces), not React components. The testing agent MUST adapt the testing protocol accordingly:

#### Component Discovery Adaptation Required:
- **NO REACT COMPONENTS TO TEST**: T-2.1.1 created `colors.ts` with TypeScript color tokens, not React components
- **Elements to Test**: 4 elements from T-2.1.1 (ELE-1 through ELE-4) are TypeScript definitions, not renderable components
- **Testing Focus**: Color token validation, type checking, export verification, NOT component rendering

#### Testing Protocol Modifications Needed:
1. **Phase 1 Discovery**: Skip React component discovery, focus on TypeScript token validation
2. **Phase 2 Unit Testing**: Test color token imports, type compilation, hex value accuracy
3. **Phase 3 Visual Testing**: Skip visual rendering, validate color usage in example components
4. **Phase 4 LLM Vision**: Skip component screenshots, validate color documentation and type definitions
5. **Phase 5 Reporting**: Focus on TypeScript compilation and color accuracy validation

#### Files That Must Be Tested:
- **Primary Implementation**: `aplio-modern-1/styles/design-tokens/colors.ts` (275 lines)
- **Type Definitions**: All interfaces (ColorToken, ExtendedColorToken, ColorStateVariations, ColorPalette)
- **Color Constants**: All exported color objects (primary, dark, gray, borderColor, paragraph, rating)
- **Utility Functions**: `withOpacity()`, `getStateColor()`, type exports
- **State Variations**: primaryStates, darkStates, grayStates objects

#### Testing Success Criteria Specific to T-2.1.1:
1. **Color Accuracy**: All hex values must match legacy `aplio-legacy/tailwind.config.js` exactly
2. **TypeScript Compilation**: All interfaces and types must compile without errors
3. **Import/Export Validation**: All exports must be importable and properly typed
4. **State Variation Completeness**: All interactive states must be defined with proper color values
5. **90% Coverage**: TypeScript definition coverage, not React component coverage

### Next Steps (In Priority Order)

1. **Execute T-2.1.1 Testing Protocol** - IMMEDIATE PRIORITY
   - Read `pmc/core/active-task-unit-tests-2.md` for full testing instructions
   - Adapt testing protocol for TypeScript color tokens (not React components)
   - Execute all 5 testing phases with T-2.1.1 specific requirements
   - Generate testing reports focused on color token validation

2. **Validate Color Token System Accuracy**
   - Verify all hex values match legacy implementation exactly
   - Test TypeScript compilation and type safety
   - Validate all exports and imports work correctly
   - Confirm state variations are properly implemented

3. **Generate T-2.1.1 Testing Documentation**
   - Create comprehensive test coverage report
   - Document any testing adaptations made for color tokens
   - Validate 90% coverage requirement compliance
   - Prepare testing results for human validation

### Important Files

1. **`aplio-modern-1/styles/design-tokens/colors.ts`** - PRIMARY IMPLEMENTATION (275 lines) - Complete color token system with TypeScript interfaces, exact hex values, and state variations
2. **`pmc/core/active-task-unit-tests-2.md`** - COMPLETE TESTING PROTOCOL - Must be adapted for color tokens instead of React components
3. **`aplio-legacy/tailwind.config.js:25-56`** - LEGACY COLOR REFERENCE - Source of truth for hex value validation
4. **`aplio-modern-1/test/unit-tests/task-2-1/T-2.1.1/`** - TEST LOCATION - Where all T-2.1.1 tests must be created and executed
5. **`pmc/core/active-task.md`** - COMPLETED TASK CONTEXT - Contains all implementation details and acceptance criteria

### Important Scripts, Markdown Files, and Specifications

1. **`pmc/core/active-task-unit-tests-2.md`** - CRITICAL TESTING PROTOCOL
   - Purpose: Complete 5-phase testing approach (Environment Setup, Discovery, Unit Testing, Visual Testing, LLM Vision Analysis)
   - Key Adaptation Required: Protocol designed for React components but T-2.1.1 is TypeScript color tokens
   - Testing Agent Must: Modify approach for TypeScript validation, color accuracy, and type safety testing

2. **`pmc/system/plans/task-approach/current-task-approach.md`** - IMPLEMENTATION APPROACH REFERENCE
   - Purpose: Documents the exact implementation strategy used for T-2.1.1
   - Key Context: 9/10 confidence rating, comprehensive color extraction strategy documented
   - Use for: Understanding implementation decisions and validation requirements

3. **`pmc/bin/aplio-agent-cli.js`** - PMC COMMAND INTERFACE
   - Purpose: PMC system commands for logging test progress and managing task state
   - Commands needed: `log-action`, `error`, `update-notes` for test progress tracking
   - Context: Testing agent should use PMC commands to track testing progress

### Recent Development Context

- **Last Milestone**: T-2.1.1 Color System Extraction - IMPLEMENTATION COMPLETE
- **Key Outcomes**: 
  - Comprehensive color token system created in `colors.ts` (275 lines)
  - All legacy hex values preserved exactly (validated manually)
  - TypeScript interfaces provide complete type safety
  - State variations implemented for all interactive states
  - Next.js 14 optimization with proper tree-shaking support
  - All 3 implementation phases (PREP, IMP, VAL) completed successfully
- **Relevant Learnings**: 
  - Legacy color analysis was straightforward with clear hex value definitions
  - TypeScript `const assertions` essential for proper type inference
  - State variations required manual calculation (10% darker, 15% darker, 50% opacity)
  - Directory structure created supports future design token expansion
  - Export pattern optimized for both individual imports and complete palette access
- **Technical Context**: 
  - Implementation completed without any errors or issues
  - All acceptance criteria met with exact hex value preservation
  - TypeScript compilation verified during development
  - Manual validation confirmed 100% accuracy against legacy system
  - No React components created - pure TypeScript color token system

**CRITICAL SUCCESS FACTORS FOR TESTING AGENT**:
1. **Understand T-2.1.1 is COLOR TOKENS, not React components** - Testing approach must be adapted
2. **Focus on TypeScript validation** - Type compilation, import/export testing, color accuracy
3. **Validate against legacy hex values** - All colors must match `aplio-legacy/tailwind.config.js` exactly
4. **Test state variations comprehensively** - Interactive color states are critical for design system
5. **Achieve 90% coverage requirement** - Focus on TypeScript definition coverage, not component coverage

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