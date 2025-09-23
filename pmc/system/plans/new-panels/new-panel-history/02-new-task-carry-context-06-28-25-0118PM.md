# Development Context & Operational Priorities
**Date:** 06-28-25-0118PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**You shall implement T-2.5.3: Design Token Mapping Implementation** to create a semantic token mapping system that builds upon the successfully completed T-2.5.2 Theme Provider implementation and the validated T-2.5.1 token system.

**Implementation Requirements:**
1. Create semantic token mapping system leveraging the 69 validated token paths from T-2.5.1
2. Implement token aliasing mechanism compatible with the completed T-2.5.2 theme provider
3. Build component-specific token mappings that integrate with light/dark theme switching
4. Establish token value transformation utilities that work with the theme context system

**Why this matters:** T-2.5.3 completes the design token infrastructure by providing semantic mappings that allow components to use meaningful token names (e.g., 'button-primary-bg') instead of raw token paths, while seamlessly integrating with the theme switching system completed in T-2.5.2.

**Current implementation state:** T-2.5.2 Theme Provider is fully implemented and tested with 100% test success rate (59/59 tests passing). T-2.5.1 token system provides 69 validated token paths across 5 categories. T-2.5.3 implementation files need to be created in `aplio-modern-1/styles/themes/` directory.

### Critical Implementation Context

**T-2.5.2 Theme Provider Completion Impact on T-2.5.3:**
- Theme provider implementation provides React Context with `useTheme` and `useThemeTokens` hooks that T-2.5.3 semantic mappings must integrate with
- Theme switching functionality (light/dark/system modes) requires semantic tokens to resolve different values based on current theme
- localStorage persistence system in T-2.5.2 means semantic tokens must work consistently across browser sessions
- SSR compatibility requirements from T-2.5.2 mean semantic tokens must not cause hydration mismatches

**T-2.5.1 Token System Foundation:**
- 69 validated token paths across 5 categories (colors, typography, spacing, border, shadow)
- TokenPath type system provides strict TypeScript compliance 
- ColorStateVariations support theme-aware color resolution
- Token resolution utilities already validated and available for T-2.5.3 to build upon

**Integration Requirements Validated in T-2.5.2:**
- The `useThemeTokens` hook interface expects: `{ theme, color, typography, spacing, resolve }` functions
- Theme-aware token resolution working for colors, typography, and spacing categories
- Error handling patterns established for invalid token paths and theme provider unavailability

### Existing Implementation Instructions Adaptations

**Modified Token Resolution Approach:**
Based on T-2.5.2 testing, you must ensure semantic token mappings work with the existing `useThemeTokens` hook interface. The hook provides theme-specific resolution functions that semantic mappings must utilize.

**Theme Integration Requirements:**
T-2.5.2 implementation established that theme switching affects token resolution. Your semantic mappings must provide different values for light vs dark themes using the theme context rather than hardcoded theme detection.

**TypeScript Compliance Standards:**
T-2.5.2 achieved full TypeScript strict mode compliance. You must maintain this standard by ensuring all semantic token mappings are properly typed and integrate with existing TokenPath and theme interfaces.

### Modified Implementation Approaches

**CSS Custom Property Strategy:**
T-2.5.2 validation confirmed CSS custom properties work correctly with the theme provider. Your token value transformation utilities should generate CSS custom properties that update automatically when themes switch.

**Component-Specific Mapping Approach:**
Based on T-2.5.2 theme provider patterns, semantic mappings should be organized by component type (button, card, input, etc.) rather than by token category, allowing components to import only relevant token mappings.

**Error Handling Patterns:**
Follow the comprehensive error handling patterns established in T-2.5.2, including graceful degradation for missing tokens and clear error messages for development debugging.

### Eliminated Requirements

**Manual Theme Detection:** T-2.5.2 provides centralized theme detection through React Context. You shall NOT implement separate theme detection logic in T-2.5.3.

**Hardcoded Token Values:** T-2.5.2 established dynamic token resolution. You shall NOT use hardcoded color values or fixed token mappings that don't respond to theme changes.

**Separate Persistence Logic:** T-2.5.2 handles all theme persistence. You shall NOT implement additional localStorage logic for token preferences.

### Additional Testing Needs

**Integration Testing with T-2.5.2:** You must validate that semantic token mappings work correctly with the theme provider's `setTheme` function and persist across theme changes.

**Component Mapping Validation:** Test that component-specific token mappings resolve to correct values in both light and dark themes using the T-2.5.2 theme context.

**Performance Testing:** Validate that token aliasing and transformation utilities don't impact theme switching performance established in T-2.5.2.

### Next Steps

1. **Implement light theme token mapping** in `styles/themes/default.ts` using the 69 validated token paths from T-2.5.1
2. **Create dark theme token mapping** in `styles/themes/dark.ts` with appropriate contrast ratios and theme-specific values
3. **Build contrast ratio verification utilities** that ensure WCAG compliance across both themes
4. **Generate CSS custom properties** from theme tokens for runtime theme switching compatibility with T-2.5.2
5. **Create type-safe theme object structure** that integrates with existing TokenPath and theme provider interfaces

### Important Dependencies

**T-2.5.2 Theme Provider System (COMPLETED):** Files at `components/providers/theme-provider.tsx` and `components/shared/theme-toggle.tsx` provide the foundation that T-2.5.3 semantic mappings must integrate with.

**T-2.5.1 Token System (VALIDATED):** Design token utilities and TypeScript interfaces at `lib/design-system/tokens/` provide the 69 token paths that semantic mappings will alias and transform.

### Important Files

**Implementation Location:** `aplio-modern-1/styles/themes/` - Create semantic token mapping files here
**Theme Provider Integration:** `aplio-modern-1/components/providers/theme-provider.tsx` - Reference for hook interfaces and theme context patterns  
**Token System Foundation:** `aplio-modern-1/lib/design-system/tokens/` - Source of 69 validated token paths and resolution utilities
**Test Location:** `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.3/` - Create comprehensive test suite here

### Important Scripts, Markdown Files, and Specifications

**Task Specification:** `pmc/core/active-task.md` - Complete T-2.5.3 requirements including 4 elements (ELE-1 through ELE-4)
**Design System Adherence Protocol:** Referenced in active-task.md - Must follow DSAP compliance process for design-related implementations
**Legacy Code References:** T-2.5.3 task specifies legacy code references at specific line ranges in `colors.ts` for theme mappings and CSS variable generation

### Recent Development Context

**Last Milestone:** T-2.5.2 Theme Provider Implementation completed with 100% test success rate (59/59 tests passing)

**Key Outcomes:** 
- React Context theme provider with light/dark/system mode support fully functional
- Theme toggle component with WCAG 2.1 AA accessibility compliance validated
- localStorage persistence with error handling and SSR compatibility confirmed
- Integration with T-2.5.1 token system (69 token paths) working correctly across theme changes

**Relevant Learnings:**
- Theme provider hook interfaces require specific function signatures that semantic mappings must accommodate
- TypeScript strict mode compliance achievable with proper interface design and error handling
- CSS custom properties provide the most reliable method for runtime theme switching
- Component-specific token organization improves developer experience and performance

**Technical Context:**
- Theme context provides `useTheme` and `useThemeTokens` hooks for component integration
- Token resolution functions available: `theme()`, `color()`, `typography()`, `spacing()`, `resolve()`  
- Theme switching updates document classes and CSS custom properties automatically
- Error boundaries established for graceful degradation when theme provider unavailable

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