# Development Context & Operational Priorities
**Date:** 06-30-25-0441PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Primary Objective**: Implement T-2.5.4 Style Composition System Implementation, which creates type-safe utility functions for composing styles, variant prop systems, component style overrides, and responsive styling utilities.

**Target Implementation Location**: `aplio-modern-1/styles/system/composition.ts`

**What is being worked on**: T-2.5.4 Style Composition System Implementation with four core elements:
- ELE-1: Style composition utilities - Create utility functions for composing styles
- ELE-2: Variant prop system - Implement type-safe variant prop system for components  
- ELE-3: Style override system - Create system for component-specific style overrides
- ELE-4: Responsive style utilities - Implement utilities for breakpoint-aware styling

**Why it is being worked on**: The design system now has a complete theme foundation (T-2.5.3) and functional Theme Switcher (T-2.5.3a), but lacks a systematic approach for component style composition. This creates inconsistent styling patterns and makes it difficult to maintain consistent component variants across the system.

**Current state of implementation**: Ready to begin. T-2.5.3 Design Token Mapping and T-2.5.3a Theme Switcher implementations are complete and production-ready, providing the necessary token foundation and theme switching capabilities that T-2.5.4 will build upon.

### Critical Implementation Context

**Completed Foundation Systems**: 
- **T-2.5.3 Design Token Mapping**: Complete semantic token system with light/dark theme mappings, WCAG 2.1 AA contrast verification, and reactive CSS custom properties
- **T-2.5.3a Theme Switcher**: Production-ready theme switching component with accessibility compliance, performance optimization, and seamless T-2.5.2 integration

**Theme System Architecture**: The existing theme system uses a dual provider architecture (NextThemes + Custom Aplio provider) with CSS custom properties that update automatically on theme changes. Class-based dark mode is configured in `tailwind.config.js` with `darkMode: 'class'`.

**Token Integration Requirements**: T-2.5.4 style composition utilities must leverage the existing semantic token system from T-2.5.3, including:
- Component-specific semantic tokens (button-primary-bg, card-background, etc.)
- Theme-aware CSS custom properties (--aplio-* naming convention)
- WCAG 2.1 AA compliant contrast ratios maintained through composition
- Integration with T-2.5.2 theme provider hooks (useTheme, useThemeTokens)

### Existing Implementation Instructions Adaptations

**Theme Integration Requirements**: Unlike the original T-2.5.4 specification, your implementation must integrate with the completed theme system:
- Style composition utilities must work with both light and dark themes automatically
- Variant props must support theme-aware token resolution
- Component overrides must preserve theme switching functionality
- Responsive utilities must maintain theme consistency across breakpoints

**Type Safety Enhancements**: The completed T-2.5.3 implementation provides enhanced TypeScript interfaces that T-2.5.4 must extend:
- Use existing `TokenPath`, `ColorTokenPath`, `TypographyTokenPath`, `SpacingTokenPath` from T-2.5.3
- Extend the semantic token interfaces for component-specific variants
- Maintain compatibility with `ThemeContextValue` interface from T-2.5.2
- Ensure all composition utilities maintain strict TypeScript compliance

**CSS Custom Property Integration**: Your style composition system must integrate with the reactive CSS custom properties from T-2.5.3:
- Composition utilities should output CSS custom property references
- Variant systems must work with --aplio-* CSS variables
- Override systems must not conflict with theme-switching property updates
- Responsive utilities must leverage existing breakpoint tokens

### Modified Implementation Approaches

**Legacy Code Reference Updates**: The legacy code references in T-2.5.4 specification may not reflect the enhanced theme system. Instead:
- Use `aplio-modern-1/styles/themes/` files as the authoritative reference for token patterns
- Leverage completed Theme Switcher component in `components/shared/ThemeSwitcher/` as example of proper token usage
- Reference `aplio-modern-1/app/globals.css` for CSS custom property patterns
- Follow the established component architecture from T-2.5.3a implementation

**Testing Integration**: Your testing approach must validate integration with completed systems:
- Test style composition with both light and dark themes
- Verify variant props work with theme switching
- Validate override systems don't break existing theme functionality
- Ensure responsive utilities maintain theme consistency

### Eliminated Requirements

**External Theme Library Dependencies**: T-2.5.4 should NOT implement any external theme libraries or duplicate theme functionality. The theme system is complete and production-ready.

**Manual CSS Property Management**: T-2.5.4 should NOT manually manage CSS custom properties. The reactive system from T-2.5.3 handles this automatically.

**Theme Provider Modifications**: T-2.5.4 should NOT modify the existing theme provider system. It is complete and tested.

### Additional Testing Needs

**Theme Integration Testing**: Beyond the standard 95% code coverage requirement, you must specifically test:
- Style composition utilities with both light and dark themes active
- Variant prop systems during theme switching operations
- Component override functionality preservation during theme changes
- Responsive utility behavior across breakpoints in both themes

**Backwards Compatibility Testing**: Verify that T-2.5.4 implementation doesn't break:
- Existing Theme Switcher functionality from T-2.5.3a
- Theme persistence across browser sessions
- CSS custom property updates from T-2.5.3
- Existing component styling in test scaffold pages

### Key Files and Locations

**Primary Implementation File**:
- `aplio-modern-1/styles/system/composition.ts` - Main implementation target for T-2.5.4

**Critical Dependencies**:
- `aplio-modern-1/styles/themes/index.ts` - Semantic token exports from T-2.5.3
- `aplio-modern-1/components/providers/theme-provider.tsx` - Theme context integration
- `aplio-modern-1/app/globals.css` - CSS custom property patterns
- `aplio-modern-1/tailwind.config.js` - Dark mode configuration

**Reference Implementations**:
- `aplio-modern-1/components/shared/ThemeSwitcher/ThemeSwitcher.tsx` - Example of proper token usage (326 lines)
- `aplio-modern-1/styles/themes/theme-switcher-foundation.ts` - Component-specific token patterns
- `aplio-modern-1/app/_utils/providers.tsx` - Provider integration patterns

**Testing Infrastructure**:
- `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.4/` - Testing directory for T-2.5.4
- `aplio-modern-1/test/reports/T-2.5.3a/` - Reference test reports from Theme Switcher

### Specification References

**Active Task Specification**: `pmc/core/active-task.md` (T-2.5.4 full specification)
- Section "Components/Elements" lines 61-67: Four element definitions (ELE-1 through ELE-4)
- Section "Acceptance Criteria" lines 52-58: Core requirements for completion
- Section "Implementation Process Phases" lines 72-120: PREP, IMP, VAL phase guidance

**Design System Documentation**: `aplio-modern-1/design-system/docs/` (DSAP compliance required)
- `/components/core/` - Button, card, input component standards
- `/architecture/component-hierarchy.md` - Component relationship patterns
- `/architecture/cross-component-styling.md` - Shared styling patterns

**Completed Task References**:
- `pmc/core/previous-task.md` - T-2.5.3 implementation details with Theme Switcher enhancements
- `aplio-modern-1/test/reports/T-2.5.3a/T-2.5.3-completion-report-v1.md` - Theme Switcher completion validation

### Acceptance Criteria

**Core Requirements** (from T-2.5.4 specification):
- Create utility functions for composing styles
- Implement type-safe variant prop system
- Build component style override system  
- Develop responsive styling utilities

**Enhanced Requirements** (based on completed foundation):
- All utilities must work seamlessly with light/dark theme switching
- Variant props must integrate with existing semantic token system
- Override systems must preserve Theme Switcher functionality
- Responsive utilities must maintain theme consistency across breakpoints
- 95% test coverage including theme integration scenarios

**Integration Validation**:
- Style composition works with T-2.5.3 semantic tokens
- Component variants leverage T-2.5.2 theme provider hooks
- Override systems maintain T-2.5.3a Theme Switcher compatibility
- Responsive utilities work with existing CSS custom properties

### Next Steps

1. **PREP-1**: Analyze existing semantic token patterns from T-2.5.3 implementation
2. **PREP-2**: Study Theme Switcher component for proper token usage patterns  
3. **PREP-3**: Review CSS custom property integration from T-2.5.3
4. **PREP-4**: Design composition utilities that leverage completed theme foundation
5. **IMP-1**: Implement style composition utilities with theme integration

### Recent Development Context

- **Last Milestone**: T-2.5.3a Theme Switcher UI Implementation completed with production approval
- **Key Outcomes**: 
  - Complete theme switching functionality with 86.7ms average performance
  - WCAG 2.1 AA accessibility compliance validated
  - 100% test pass rate across 48 comprehensive tests
  - Seamless integration with T-2.5.2 theme provider maintained
- **Relevant Learnings**: 
  - Semantic token system from T-2.5.3 provides excellent foundation for component composition
  - CSS custom property approach enables automatic theme updates without component re-renders
  - TypeScript strict mode compliance requires careful interface extension rather than replacement
- **Technical Context**: 
  - Theme system uses dual provider architecture with reactive CSS custom properties
  - Tailwind configured with class-based dark mode (`darkMode: 'class'`)
  - All theme-related TypeScript compilation issues resolved through systematic approach
  - Production deployment approved with only minor non-blocking cosmetic issues logged

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