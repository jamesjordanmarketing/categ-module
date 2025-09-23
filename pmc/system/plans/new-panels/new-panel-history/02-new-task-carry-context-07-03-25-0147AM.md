# Development Context & Operational Priorities
**Date:** 07-03-25-0147AM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Objective**: Implement T-3.1.2 Button Base Implementation and Styling

**Task Summary**: T-3.1.1 (Button Component Setup and Type Definitions) has been successfully completed with full visual testing validation. The task established the complete Button component infrastructure including:
- Comprehensive TypeScript type definitions with discriminated unions for all button variants (primary, secondary, tertiary, outline, navbar)
- Complete Button component file structure following atomic design principles
- Full integration with T-2.5.6 CSS foundation system using `--aplio-*` CSS variables
- Visual testing infrastructure with 16 screenshots captured and LLM Vision analysis validated

**Current Implementation Status**: Ready to proceed with T-3.1.2 which focuses on implementing the core styling and visual appearance for all Button variants to match the legacy design system exactly.

**Implementation Location**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\design-system\atoms\Button\`

**Why This is Being Worked On**: The Button component is a foundational atomic component in the design system. T-3.1.1 established the type-safe foundation, and T-3.1.2 will complete the visual implementation to match legacy styling exactly, ensuring design consistency across the modernized system.

**Critical Success Factors for T-3.1.2**:
1. Visual fidelity must match legacy button styling exactly across all variants
2. Must integrate seamlessly with existing T-2.5.6 CSS variable system
3. Responsive behavior must be consistent across all viewport sizes
4. DSAP compliance mandatory (30px padding, 30px border-radius standards)

### Current Active Action
- **Task ID**: T-3.1.2
- **Title**: Button Base Implementation and Styling  
- **Current Phase**: Preparation (not yet started)
- **Active Element**: Ready to begin with ELE-1 (Base button implementation)
- **Last Recorded Action**: T-3.1.1 visual testing completed successfully - all validation passed

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps

1. **DSAP Documentation Discovery** (Priority: Critical)
   - Search `aplio-modern-1/design-system/docs/components/core/buttons.md` for button styling specifications
   - Review `aplio-modern-1/design-system/docs/animations/interactive/hover-animations.md` for button state transitions
   - Check responsive behavior guidelines in design system documentation

2. **Legacy Code Analysis** (Priority: High)
   - Extract design tokens from `aplio-legacy/scss/_button.scss` lines 2-13 for all button variants
   - Analyze hover/focus states in legacy implementation for exact styling requirements
   - Map legacy button classes to new CSS variable system

3. **Begin T-3.1.2 Preparation Phase** (Priority: High)
   - Execute PREP-1: Extract design tokens for colors, typography, and spacing from legacy code
   - Execute PREP-2: Analyze hover/focus states in legacy implementation
   - Call `node bin/aplio-agent-cli.js update-phase-stage T-3.1.2 "PREP" "complete"` when preparation complete

4. **Implementation Phase Execution** (Priority: High)
   - Implement base Button component structure with legacy styling
   - Add styling for all variants (primary, secondary, tertiary, outline, navbar)
   - Implement size variants and state styling

5. **Validation Phase Execution** (Priority: High)
   - Compare with legacy implementation for exact visual consistency
   - Test all state transitions and responsive behavior
   - Generate DSAP compliance report

### Important Dependencies

**Critical Dependency**: T-3.1.1 Button Infrastructure (Status: ✅ COMPLETE)
- Button component TypeScript foundation established
- Visual testing infrastructure validated and operational
- CSS variable integration confirmed working
- Impact: T-3.1.2 can proceed immediately with styling implementation

**Critical Dependency**: T-2.5.6 CSS Foundation System (Status: ✅ COMPLETE)
- All `--aplio-*` CSS variables available for button styling
- Theme switching system operational via CSS cascade
- Responsive breakpoint system ready (7 breakpoints: xs:475px through 2xl:1536px)
- Impact: T-3.1.2 styling must use existing CSS variables, not create new ones

### Important Files

1. **aplio-modern-1/components/design-system/atoms/Button/index.tsx**
   - Purpose: Main Button component implementation (created in T-3.1.1)
   - Current State: TypeScript foundation complete, ready for styling implementation
   - Critical for: Base styling implementation in T-3.1.2

2. **aplio-modern-1/components/design-system/atoms/Button/Button.types.ts**
   - Purpose: Complete TypeScript interfaces and discriminated unions
   - Current State: All button variants, sizes, and states defined
   - Critical for: Type-safe styling implementation

3. **aplio-legacy/scss/_button.scss**
   - Purpose: Legacy button styling reference (lines 2-13 contain all variants)
   - Current State: Source of truth for exact styling requirements
   - Critical for: Visual fidelity matching in T-3.1.2

4. **aplio-modern-1/styles/design-tokens/variables.css**
   - Purpose: CSS custom properties for button styling (`--aplio-button-*` variables)
   - Current State: All button variables available from T-2.5.6
   - Critical for: Implementing styling using existing CSS variable system

5. **aplio-modern-1/app/test-t311-button/page.tsx**
   - Purpose: Visual testing scaffold page (created in T-3.1.1)
   - Current State: Renders all 15 button variant/size combinations for testing
   - Critical for: Visual validation of T-3.1.2 styling implementation

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/active-task.md**
   - Purpose: Complete T-3.1.2 task specification and acceptance criteria
   - Key Sections: Design System Adherence Protocol (DSAP), Implementation Process Phases
   - Critical Requirements: DSAP compliance, legacy styling match, responsive behavior

2. **pmc/core/active-task-visual-tests-3-1-1-v3.md** 
   - Purpose: Enhanced visual testing specification (created during T-3.1.1)
   - Key Sections: Playwright configuration, LLM Vision analysis workflow
   - Usage: Apply same visual testing approach to validate T-3.1.2 styling implementation

3. **aplio-modern-1/playwright.config.ts**
   - Purpose: Playwright configuration for visual testing
   - Current State: Configured for Next.js dev server (port 3000)
   - Critical Detail: Must use dev server, not test server for visual testing

4. **aplio-modern-1/test/visual/t311-button.spec.ts**
   - Purpose: Visual regression test script
   - Current State: Captures screenshots of all button variants
   - Usage: Modify for T-3.1.2 visual validation after styling implementation

### Recent Development Context

**Last Milestone**: T-3.1.1 Visual Testing Infrastructure Completion (2025-07-03 01:20 PST)

**Key Outcomes**:
- Visual testing workflow fully operational with Playwright and enhanced LLM Vision analysis
- 16 screenshots captured successfully across all browsers (Chromium, Firefox, WebKit)  
- 2 sample LLM Vision analyses completed with PASS results and high confidence scores
- Critical Playwright configuration issue resolved (must use port 3000, not 3333)
- Enhanced specification created incorporating all lessons learned

**Relevant Learnings**:
- Playwright must use Next.js dev server (port 3000) not test server (port 3333) for visual testing
- LLM Vision Analyzer requires component name + image path parameters for proper analysis
- Enhanced analyzer uses Claude Sonnet 4 with ~45 second processing time per image
- PASS/FAIL detection requires multiple regex patterns for reliable analysis result detection
- Rate limiting requires 30-second delays between LLM analyses

**Technical Context**:
- Visual testing infrastructure is production-ready and can be immediately applied to T-3.1.2
- Button component scaffold page at `/test-t311-button` renders all variants correctly
- CSS variable integration working properly with theme switching
- All testing tools validated and operational

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
- The second context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)
- The third context manager script: `pmc/system/management/context-manager-v3.js` (created when the second got too large)

Here are some important PMC commands:

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Add Structured Test Approaches
```bash
node pmc/bin/aplio-agent-cli.js test-approach

#### Project Structure
```
project-root/aplio-legacy/ (legacy system)
project-root/aplio-modern-1/ (new system)
project-root/pmc/ (PMC system)

```