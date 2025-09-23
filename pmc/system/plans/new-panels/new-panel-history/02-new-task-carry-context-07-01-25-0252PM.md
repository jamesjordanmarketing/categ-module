# Development Context & Operational Priorities
**Date:** 07-01-25-0252PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**T-2.5.6: Styling System Integration with Components** - You shall implement the integration of the styling system with React components in the Next.js 14 design system. This task builds directly upon the completed T-2.5.5 CSS Implementation Strategy, which successfully established the foundational CSS architecture.

**Implementation Location**: `aplio-modern-1/components/design-system/system/styled.tsx`

**Critical Context**: T-2.5.5 has been fully implemented and tested, providing:
- Modern CSS reset (`reset.css` - 3.8KB)
- CSS custom properties with `--aplio-*` naming convention (`variables.css` - 8.2KB)
- Global typography and form styles (`base.css` - 10.1KB) 
- Responsive media query system (`breakpoints.css` - 10.8KB)
- All CSS files successfully integrated into Next.js build system
- Complete theme switching via CSS cascade (no JavaScript re-renders)
- 28 responsive media queries covering 7 breakpoints (xs:475px through 2xl:1536px)
- DSAP compliance achieved with exact button specifications (30px padding, 30px border-radius)

You must create a type-safe styled component integration pattern that leverages these existing CSS custom properties and responsive breakpoints.

### Critical Implementation Context

**CSS Variable Integration**: You must integrate with the exact `--aplio-*` CSS variable naming convention established in T-2.5.5. The variables.css file contains:
- 25 button-related variables (`--aplio-button-*`)
- 9 card-related variables (`--aplio-card-*`) 
- 15 input-related variables (`--aplio-input-*`)
- Complete light/dark theme variable sets

**Theme System Dependencies**: Your styled component system must work seamlessly with the CSS-based theme switching implemented in T-2.5.5. Theme changes occur by toggling the `dark` class on the root element, which automatically updates all CSS variables without component re-renders.

**Responsive Integration**: You must utilize the 7 breakpoints established in breakpoints.css: xs:475px, sm:640px, md:768px, lg:1024px, xl:1280px, 1xl:1400px, 2xl:1536px. The responsive system uses 28 media queries that you must integrate with your component variant system.

### Existing Implementation Instructions Adaptations

**Mandatory CSS Variable Usage**: Unlike typical styled-component implementations, you must use CSS custom properties (`var(--aplio-*)`) rather than JavaScript theme objects. This ensures compatibility with the automatic theme switching system.

**No Inline Styles for Themes**: You shall not implement theme switching via JavaScript props or inline styles. All theming must leverage the existing CSS cascade system.

**TypeScript Integration Requirements**: The implementation must provide full TypeScript support for component variants while maintaining compatibility with the established CSS architecture.

### Modified Implementation Approaches

**Component Variant System**: You must implement a discriminated union type system that maps to the existing CSS variable categories (button, card, input, typography). Each variant must reference appropriate `--aplio-*` variables.

**Style Composition Pattern**: Create reusable composition utilities that work with the existing CSS foundation rather than replacing it. Focus on enhancing the CSS layer with TypeScript safety.

**Design Token Usage**: Establish patterns that reference the CSS custom properties as the single source of truth, not separate JavaScript token objects.

### Key Files and Locations

**Created by T-2.5.5**:
- `aplio-modern-1/styles/globals/reset.css` - Modern CSS reset foundation
- `aplio-modern-1/styles/globals/variables.css` - CSS custom properties with `--aplio-*` naming
- `aplio-modern-1/styles/globals/base.css` - Global typography and form styles  
- `aplio-modern-1/styles/globals/breakpoints.css` - Responsive media query system
- `aplio-modern-1/app/globals.css` - Updated with CSS imports
- `aplio-modern-1/app/test-css-t255/page.tsx` - CSS validation test page

**To be Created for T-2.5.6**:
- `aplio-modern-1/components/design-system/system/styled.tsx` - Primary implementation file
- Component variant type definitions
- Style composition utilities
- Example Button component implementation

### Specification References

**T-2.5.4 Integration Requirements**: `aplio-modern-1/styles/system/composition.ts` - The existing composition system that your styled components must integrate with

**DSAP Button Specifications**: `aplio-modern-1/design-system/docs/components/core/buttons.md` - Exact specifications that must be maintained (30px padding, 30px border-radius)

**CSS Variable Reference**: `aplio-modern-1/styles/globals/variables.css` - Complete list of available CSS custom properties with exact naming

**Legacy Component Patterns**: `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 67-182 - Reference implementation patterns for type integration, variant systems, and composition patterns

**Responsive Breakpoint Definitions**: `aplio-modern-1/styles/globals/breakpoints.css` - Complete media query system to integrate with

### Acceptance Criteria

**Type-Safe Integration**: Create a styled component system with full TypeScript support that uses CSS custom properties as the foundation

**Component Variant System**: Implement variant system with discriminated unions that map to existing CSS variable categories

**Reusable Composition Patterns**: Build composition utilities that enhance rather than replace the CSS foundation

**Design Token Integration**: Establish patterns for referencing CSS custom properties as the authoritative source

**Working Button Example**: Create a complete Button component implementation demonstrating all patterns

### Next Steps

1. **DSAP Documentation Discovery**: Review all relevant design system documentation in `aplio-modern-1/design-system/docs/`
2. **Analyze Existing CSS Variables**: Study the complete variable set in `variables.css` to understand available design tokens
3. **Review T-2.5.4 Composition System**: Understand existing composition utilities that must be integrated with
4. **Implement Styled Component Foundation**: Create the base `styled.tsx` system with TypeScript support
5. **Build Component Variant System**: Implement discriminated union types for component variants
6. **Create Style Composition Utilities**: Build reusable patterns for component styling
7. **Establish Token Usage Patterns**: Define how components reference CSS custom properties
8. **Implement Example Button Component**: Create complete working example
9. **Validation and Testing**: Ensure integration works with existing CSS and theme systems

### Important Files

- `pmc/core/active-task.md` - Complete T-2.5.6 task specifications
- `aplio-modern-1/styles/globals/variables.css` - Available CSS custom properties
- `aplio-modern-1/styles/system/composition.ts` - Existing composition system to integrate with
- `aplio-modern-1/design-system/docs/components/core/buttons.md` - DSAP specifications
- `aplio-modern-1/app/test-css-t255/page.tsx` - CSS testing reference

### Recent Development Context

**Last Milestone**: Successfully completed T-2.5.5 CSS Implementation Strategy with comprehensive testing validation

**Key Outcomes**: 
- CSS foundation layer established with modern reset, custom properties, global styles, and responsive system
- Theme switching proven to work automatically via CSS cascade without JavaScript
- All CSS variables follow `--aplio-*` naming convention for T-2.5.4 compatibility
- DSAP compliance achieved with exact button specifications
- Integration with Next.js 14 build system confirmed

**Relevant Learnings**: 
- CSS-based theme switching provides better performance than JavaScript-based solutions
- CSS custom properties enable seamless integration between CSS and component systems
- Responsive breakpoint system must be consistent between CSS and component implementations
- TypeScript integration requires careful consideration of CSS variable typing

**Technical Context**: 
- All CSS files successfully compile in Next.js 14 build system
- CSS variables resolve correctly in browser computed styles
- Theme switching performance meets <100ms requirement
- Responsive behavior validated across all 7 breakpoints
- Visual test page available at `/test-css-t255` for reference

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