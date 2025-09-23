# Development Context & Operational Priorities
**Date:** 07-01-25-1121AM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**T-2.5.5: CSS Implementation Strategy** - Implementation of comprehensive CSS strategy for Next.js 14 design system including global styles, CSS variables, and responsive utilities.

**Implementation Objective**: You must create a modern, scalable CSS architecture that integrates seamlessly with the completed T-2.5.4 Style Composition System and existing T-2.5.3 semantic tokens. The CSS strategy must provide the foundational styling layer that enables the composition utilities to function optimally.

**Current State**: T-2.5.4 Style Composition System has been successfully implemented and tested at `aplio-modern-1/styles/system/composition.ts` (834 lines). This system provides type-safe composition utilities that output CSS custom properties in the `--aplio-*` format. T-2.5.5 must now implement the global CSS infrastructure that these composition utilities depend upon.

**Critical Implementation Requirements**:
1. **Global CSS Reset**: Create modern CSS reset that establishes consistent baseline styling across browsers
2. **CSS Custom Properties**: Generate comprehensive CSS variables for all design tokens to support the composition system
3. **Global Styles**: Implement responsive foundation styles that work with composition utilities
4. **Media Query System**: Create responsive breakpoint system compatible with composition utilities

**Integration Context**: The T-2.5.4 composition system expects CSS custom properties to be available globally. Your CSS implementation must ensure all `--aplio-*` variables referenced by the composition utilities are properly defined and theme-reactive.

### Critical Implementation Context

**T-2.5.4 Composition System Dependencies**: The completed Style Composition System at `aplio-modern-1/styles/system/composition.ts` relies on CSS custom properties being available globally. The system includes working examples (button, card, input, typography variants) that expect specific CSS variables to be defined:

- Button variants expect: `--aplio-button-*` variables for primary, secondary, outline styles
- Card variants expect: `--aplio-card-*` variables for background, border, shadow properties  
- Input variants expect: `--aplio-input-*` variables for background, border, focus states
- Typography expects: `--aplio-text-*` variables for color, size, leading properties

**CSS Custom Property Naming Convention**: All CSS variables must follow the `--aplio-{category}-{property}` naming pattern established by T-2.5.4. This ensures automatic theme switching compatibility with the T-2.5.3a Theme Switcher.

**Theme Integration Requirements**: Your CSS implementation must preserve the theme switching functionality where CSS custom properties automatically update when users switch between light and dark modes without requiring component re-renders.

### Existing Implementation Instructions Adaptations

**CSS Variable Generation Strategy**: Unlike typical CSS variable implementations, you must ensure that the variables you create align exactly with the paths expected by the T-2.5.4 composition utilities. Review the composition system's token mapping logic to understand which CSS properties need to be generated.

**Global Styles Integration**: The global styles must not conflict with the composition system's CSS custom property approach. Avoid hardcoded color values and instead use the CSS custom properties you define, ensuring theme consistency.

**Responsive Foundation**: The media query system must be compatible with the responsive composition utilities in T-2.5.4. Use the same breakpoint names and values that the composition system expects (sm, md, lg, xl, 2xl).

### Modified Implementation Approaches

**CSS Architecture Approach**: Traditional global CSS approaches may conflict with the composition system. You must implement a hybrid approach where:
- Global styles provide the foundation layer
- CSS custom properties enable theme switching
- Composition utilities handle component-specific styling
- Media queries support responsive composition

**Integration Testing Strategy**: You must test your CSS implementation with the existing T-2.5.4 composition utilities to ensure seamless integration. This includes verifying that button, card, input, and typography variants render correctly with your CSS foundation.

### Important Files

**Primary Implementation Location**: `aplio-modern-1/styles/globals/` - This is your main implementation directory for T-2.5.5

**Critical Integration Files**:
- `aplio-modern-1/styles/system/composition.ts` - The completed composition system that depends on your CSS implementation
- `aplio-modern-1/styles/themes/` - Existing theme token definitions that must be converted to CSS custom properties
- `aplio-modern-1/app/globals.css` - Current global styles that may need modification or replacement

**Test Integration Location**: `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.5/` - Your testing directory

### Important Scripts, Markdown Files, and Specifications

**T-2.5.4 Composition System Documentation**: Review `aplio-modern-1/styles/system/composition.ts` lines 1-50 for JSDoc documentation explaining how the composition system expects CSS variables to be structured.

**Legacy CSS References**:
- `aplio-legacy/scss/_common.scss` lines 1-25 for CSS reset patterns
- `aplio-legacy/scss/_common.scss` lines 26-317 for global styles approach
- `aplio-legacy/tailwind.config.js` lines 13-17 for responsive breakpoint definitions

**Theme Token Specifications**: `aplio-modern-1/styles/themes/` directory contains the semantic tokens that must be converted to CSS custom properties

### Next Steps

1. **[T-2.5.5:ELE-1]** Create modern CSS reset at `aplio-modern-1/styles/globals/reset.css`
2. **[T-2.5.5:ELE-2]** Implement CSS custom property generation for all design tokens
3. **[T-2.5.5:ELE-3]** Create global styles foundation at `aplio-modern-1/styles/globals/base.css`
4. **[T-2.5.5:ELE-4]** Develop responsive media query system compatible with composition utilities
5. **[Integration Validation]** Test CSS implementation with T-2.5.4 composition utilities

### Recent Development Context

**Last Milestone**: T-2.5.4 Style Composition System successfully implemented and tested with 95% DSAP compliance

**Key Outcomes**: 
- Type-safe composition utilities functional at `aplio-modern-1/styles/system/composition.ts`
- Working examples (button, card, input, typography) ready for CSS integration
- CSS custom property architecture established with `--aplio-*` naming convention
- Theme switching compatibility maintained with T-2.5.3a Theme Switcher

**Relevant Learnings**: 
- CSS custom properties provide optimal performance for theme switching
- Composition utilities must output CSS variable references, not hardcoded values
- Theme integration requires careful CSS custom property naming consistency

**Technical Context**: 
- T-2.5.3 semantic tokens available for CSS variable generation
- T-2.5.3a Theme Switcher functional and must be preserved
- T-2.5.4 composition system expects global CSS foundation to be available

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