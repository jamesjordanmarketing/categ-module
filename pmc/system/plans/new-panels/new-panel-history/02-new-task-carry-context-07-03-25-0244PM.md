# Development Context & Operational Priorities
**Date:** 07-03-25-0244PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task ID**: T-3.1.3: Button Icon Support and Extended Functionality

You shall implement enhanced Button component functionality building upon the completed T-3.1.2 Button Base Implementation. This task adds icon support (left and right placement), loading states with spinners, enhanced accessibility features (ARIA attributes, keyboard navigation), and performance optimizations (React.memo, consistent height).

**Why this is being worked on**: T-3.1.2 established the foundational Button component with perfect CSS module implementation and 100% DSAP compliance. T-3.1.3 extends this foundation with essential interactive features required for production-ready button functionality in the Aplio Design System.

**Current state of implementation**: T-3.1.2 is COMPLETE with 100% success rate. The Button component is production-ready with:
- Complete CSS module implementation (Button.module.css with 18 classes)
- Perfect legacy design fidelity (100% LLM Vision Analysis compliance)
- 5 variants × 3 sizes = 15 working combinations
- Full TypeScript integration with discriminated unions
- DSAP compliance with 30px padding/border-radius, Inter font, 500ms animations

**Critical context for continuation**: The Button component foundation is solid and validated. T-3.1.3 implementation must preserve all existing functionality while adding new features through careful extension of the current architecture.

### Critical Implementation Context

**T-3.1.2 Button Architecture (MUST PRESERVE)**:
- **CSS Modules Approach**: Button.module.css (330 lines) with bracket notation access in TypeScript
- **Component Structure**: index.tsx (319 lines) with Button.types.ts (265 lines) for type definitions
- **CSS Variable Integration**: Perfect integration with T-2.5.6 `--aplio-button-*` variables - you SHALL NOT create new CSS variables
- **Styling System**: 18 CSS classes covering all variants, sizes, and states with pseudo-element animations

**T-3.1.2 Visual Testing Infrastructure (READY FOR USE)**:
- **Test Scaffold**: `/test-t311-button` page fully operational with all 5 variants displayed
- **Visual Testing**: Complete Playwright setup with screenshot generation capabilities
- **LLM Vision Analysis**: Proven system with 100% compliance validation for all 15 button combinations

**T-3.1.2 DSAP Compliance Standards (MANDATORY)**:
- 30px border-radius and padding maintained across all variants
- Inter font family, medium weight (500), -0.3px letter spacing
- 500ms transition durations for all animations
- Mobile 44px touch targets, responsive behavior across 7 breakpoints

### Existing Implementation Instructions Adaptations

**CSS Module Extension Requirements**:
- You must extend Button.module.css with new classes for icon placement and loading states
- You shall maintain the existing 18 CSS classes unchanged 
- You must use bracket notation access for all new CSS module classes in TypeScript
- You shall preserve all existing `--aplio-button-*` CSS variable consumption

**Component Architecture Extensions**:
- You must extend Button.types.ts with new prop types for icons and loading state
- You shall modify index.tsx to support icon rendering while preserving existing variant logic
- You must maintain the current TypeScript discriminated union approach
- You shall add React.memo optimization without breaking existing functionality

**Testing Approach Modifications**:
- You must extend the existing `/test-t311-button` scaffold with icon and loading state examples
- You shall use the proven LLM Vision Analysis system for visual validation
- You must maintain 90% test coverage requirement with new functionality
- You shall create T-3.1.3 specific test directory structure following T-3.1.2 patterns

### Modified Implementation Approaches

**Icon Integration Strategy**:
- Based on T-3.1.2 success with CSS modules, you shall implement icon placement through CSS flexbox positioning
- You must reference legacy implementation at `aplio-legacy/components/home-4/Hero.jsx:29-30` for icon patterns
- You shall support both left and right icon placement with proper spacing using CSS module classes

**Loading State Implementation**:
- You must implement loading spinner using CSS animations consistent with existing 500ms transition standards
- You shall disable button interactions during loading state while maintaining visual styling
- You must reference legacy loading patterns at `aplio-legacy/components/shared/CallToAction.jsx:19-21`

**Accessibility Enhancement Approach**:
- You must add ARIA attributes following accessibility best practices
- You shall implement keyboard navigation that works with existing focus state styling
- You must ensure screen reader compatibility with icon and loading state descriptions

### Key Files and Locations

**T-3.1.2 Completed Implementation (DO NOT MODIFY CORE FUNCTIONALITY)**:
- `aplio-modern-1/components/design-system/atoms/Button/Button.module.css` (330 lines)
- `aplio-modern-1/components/design-system/atoms/Button/index.tsx` (319 lines)  
- `aplio-modern-1/components/design-system/atoms/Button/Button.types.ts` (265 lines)

**T-3.1.3 Testing Infrastructure (READY FOR USE)**:
- `aplio-modern-1/app/test-t311-button/page.tsx` - Visual testing scaffold
- `aplio-modern-1/test/visual/T-3.1.2-button-visual.spec.ts` - Playwright visual tests

**T-3.1.2 Validation Artifacts (REFERENCE FOR T-3.1.3)**:
- `aplio-modern-1/test/screenshots/T-3.1.2/` - 17 validated button screenshots
- `aplio-modern-1/test/vision-results/T-3.1.2/` - Complete LLM Vision Analysis reports

**T-3.1.3 Implementation Target**:
- `aplio-modern-1/test/unit-tests/task-3-1/T-3.1.3/` - New test directory for T-3.1.3

### Specification References

**Legacy Design References**:
- `aplio-legacy/scss/_button.scss` lines 2-13 - Base button styling (PRESERVED in T-3.1.2)
- `aplio-legacy/components/home-4/Hero.jsx` lines 29-30 - Icon integration patterns
- `aplio-legacy/components/shared/CallToAction.jsx` lines 19-21 - Loading state and accessibility

**T-2.5.6 CSS Variables (MUST USE EXISTING)**:
- `--aplio-button-padding-x`, `--aplio-button-padding-y` - 30px padding values
- `--aplio-button-border-radius` - 30px border radius
- `--aplio-button-transition` - 500ms transition duration
- Full CSS variable reference at `aplio-modern-1/styles/design-tokens/`

**DSAP Documentation Location**:
- `aplio-modern-1/design-system/docs/` - Complete design system documentation
- `aplio-modern-1/test/unit-tests/task-3-1/T-3.1.2/design-system-adherence-report.md` - T-3.1.2 compliance report

### Acceptance Criteria

**Core T-3.1.3 Requirements**:
- Button supports both left and right icon placement with proper spacing
- Loading state implemented with visual spinner and disabled interaction
- ARIA attributes properly implemented for all button states and new features
- Keyboard navigation follows accessibility best practices
- All extended functionality works across existing button variants (5) and sizes (3)
- Loading state prevents multiple form submissions
- Performance optimizations (React.memo, consistent height) implemented

**Quality Standards (MAINTAIN T-3.1.2 LEVELS)**:
- 90% test coverage requirement maintained
- 100% DSAP compliance preserved for existing and new functionality
- Visual fidelity to legacy design maintained for all existing features
- CSS module approach continued for all new styling

### Next Steps

1. **[T-3.1.3:PREP-1]** Analyze legacy icon usage patterns in `aplio-legacy/components/home-4/Hero.jsx:29-30`
2. **[T-3.1.3:PREP-2]** Review loading state patterns in `aplio-legacy/components/shared/CallToAction.jsx:19-21`
3. **[T-3.1.3:PREP-3]** Review accessibility requirements and keyboard handling best practices
4. **[T-3.1.3:IMP-1]** Extend Button.module.css with icon placement and loading state classes
5. **[T-3.1.3:IMP-2]** Modify index.tsx to support icon props and loading state rendering

### Important Files

**T-3.1.2 Production-Ready Implementation**:
1. `aplio-modern-1/components/design-system/atoms/Button/Button.module.css` - CSS module with 18 classes
2. `aplio-modern-1/components/design-system/atoms/Button/index.tsx` - Component implementation  
3. `aplio-modern-1/components/design-system/atoms/Button/Button.types.ts` - TypeScript definitions
4. `aplio-modern-1/app/test-t311-button/page.tsx` - Visual testing scaffold (operational)

**T-3.1.3 Target Files**:
1. `aplio-modern-1/test/unit-tests/task-3-1/T-3.1.3/` - New test directory structure
2. `pmc/core/active-task.md` - T-3.1.3 task requirements
3. `aplio-modern-1/test/reports/T-3.1.3/` - Implementation validation reports

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