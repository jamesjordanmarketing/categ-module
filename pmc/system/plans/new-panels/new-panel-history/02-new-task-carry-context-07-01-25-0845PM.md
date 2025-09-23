# Development Context & Operational Priorities
**Date:** 07-01-25-0845PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**TASK T-3.1.1: Button Component Setup and Type Definitions**

You shall implement the Button component file structure and comprehensive type definitions following atomic design principles at `aplio-modern-1/components/design-system/atoms/Button/`. This task builds directly upon the successful completion of T-2.5.6 (Styling System Integration with Components) which created the foundational styled component system with CSS variable integration.

**Why This Task Matters**: T-3.1.1 establishes the first atomic-level component using the type-safe styled component system from T-2.5.6. This Button component will serve as the reference implementation for all future atomic components, demonstrating proper integration with discriminated union variants, CSS custom properties, and DSAP compliance standards.

**Current Implementation State**: T-2.5.6 has successfully created the styled component infrastructure at `components/design-system/system/` including:
- `styled.tsx`: Core type-safe styled component system with --aplio-* CSS variable integration
- `Button.tsx`: Working Button component example with full DSAP compliance (30px padding, 30px border-radius, Inter font, 500ms transitions)
- `index.ts`: System exports and centralized access
- `test-integration.tsx`: Integration validation tests

**Critical Context for T-3.1.1**: The foundation system uses discriminated union types (ButtonVariant, CardVariant, InputVariant) that map to CSS custom properties for automatic theme switching without JavaScript theme props. All theming occurs through CSS cascade to prevent component re-renders on theme changes.

### Current Active Action 

**Task ID**: T-3.1.1
**Current Phase**: Preparation (not yet started)
**Active Element**: ELE-1 - Button component structure creation following atomic design principles
**Last Recorded Action**: Task assignment and requirements review
**Expected Location**: `aplio-modern-1/components/design-system/atoms/Button/`

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps 

1. **[T-3.1.1:PREP-1]** Analyze existing Button implementation from T-2.5.6 at `components/design-system/system/Button.tsx` to extract type definitions and DSAP compliance patterns
2. **[T-3.1.1:PREP-2]** Review legacy button SCSS implementation at `aplio-legacy/scss/_button.scss` lines 2-13 for variant and style organization patterns  
3. **[T-3.1.1:IMP-1]** Create atomic Button directory structure at `components/design-system/atoms/Button/` following project conventions
4. **[T-3.1.1:IMP-2]** Define comprehensive Button.types.ts with discriminated unions for primary/secondary/tertiary variants and small/medium/large sizes
5. **[T-3.1.1:IMP-3]** Implement index.tsx with proper exports and default props configuration

### Important Dependencies
[CONDITIONAL: Include ONLY if there are critical dependencies for the next steps. Each dependency must specify:
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

1. **components/design-system/system/Button.tsx** - Reference implementation from T-2.5.6 with complete DSAP compliance and styled component integration patterns
2. **components/design-system/system/styled.tsx** - Core styled component system with discriminated union types and CSS variable integration that T-3.1.1 must utilize
3. **aplio-legacy/scss/_button.scss** - Legacy button styles and organization patterns for reference (lines 2-13)
4. **aplio-legacy/components/home-4/Hero.jsx** - Legacy button usage patterns and prop requirements (lines 29-30, 4-7)
5. **styles/globals/variables.css** - CSS custom properties (--aplio-*) that must be referenced by Button component for theming

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/active-task.md** - Complete T-3.1.1 task specifications including acceptance criteria and implementation phases
2. **pmc/core/previous-task.md** - T-2.5.6 task details showing completed styled component foundation
3. **pmc/core/previous-task-unit-tests-2-enhanced.md** - Complete 8-phase testing protocol used for T-2.5.6 validation
4. **aplio-modern-1/design-system/docs/** - DSAP documentation directory for compliance requirements (button must have 30px padding, 30px border-radius, Inter font, 500ms transitions)

### Recent Development Context
[CONDITIONAL: Include only if the current task builds upon or relates to recent development work. Remove section if starting fresh or switching context.]

- **Last Milestone**: Brief description of the most recently completed significant work
- **Key Outcomes**: Critical results or implementations that inform current work
- **Relevant Learnings**: Insights or patterns discovered that may apply to current focus
- **Technical Context**: Any technical state or configurations that carry forward

Example:
Last Milestone: Implemented status transition validation
Key Outcomes: Status checks now enforce valid state sequences
Relevant Learnings: State machine pattern proved effective for validation
Technical Context: Validation logic centralized in StatusManager class

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

## Critical Implementation Context

### T-2.5.6 Foundation System Results
The previous task successfully established a comprehensive styled component system that T-3.1.1 must integrate with:

**Discriminated Union Type System**: ButtonVariant, CardVariant, and InputVariant types are implemented in `styled.tsx` using discriminated unions that map to CSS classes rather than inline styles for theme compatibility.

**CSS Variable Integration**: All styling uses --aplio-* CSS custom properties from `styles/globals/variables.css` (49 button-related variables, 9 card variables, 15 input variables) with automatic theme switching through CSS cascade.

**DSAP Compliance Infrastructure**: Button specifications are enforced through the styled component system: 30px padding, 30px border-radius, Inter font family, and 500ms transitions for all interactive states.

**No JavaScript Theme Props**: The system explicitly avoids JavaScript theme objects, using only CSS custom properties to enable theme switching without component re-renders.

### Integration Requirements for T-3.1.1
You must leverage the established T-2.5.6 foundation by:

**Reusing Type Definitions**: Import and extend ButtonVariant discriminated unions from `components/design-system/system/styled.tsx` rather than creating new type systems.

**CSS Variable References**: Use established --aplio-button-* custom properties for all styling to maintain automatic theme switching capability.

**Styled Component Patterns**: Follow the component factory patterns from `styled.tsx` to ensure consistency with the broader system architecture.

**DSAP Compliance Inheritance**: Maintain exact specifications (30px padding, 30px border-radius, Inter font, 500ms transitions) established in the T-2.5.6 Button example.

## Existing Implementation Instructions Adaptations

### Atomic Design Structure Requirement
Unlike T-2.5.6 which created system-level utilities, T-3.1.1 must follow atomic design principles with components located at `components/design-system/atoms/Button/` rather than `components/design-system/system/`.

### Type Definition Scope Changes
T-3.1.1 requires comprehensive type definitions including:
- Primary, secondary, tertiary variant types (extending existing discriminated unions)
- Small, medium, large size options (new requirement not in T-2.5.6)
- Icon placement options for left and right positions (new requirement)
- Default props and type defaults configuration (enhancement over T-2.5.6)

### Export Structure Modifications
T-3.1.1 must implement proper export patterns for component consumption, different from T-2.5.6's system utility exports. The Button component exports must be consumable by other components and pages.

## Modified Implementation Approaches

### File Organization Pattern
Based on T-2.5.6 testing experience, T-3.1.1 shall use this atomic component structure:
```
components/design-system/atoms/Button/
├── index.tsx          (main component export)
├── Button.types.ts    (comprehensive type definitions)
├── Button.styles.ts   (styled component implementation)  
└── Button.stories.tsx (storybook documentation - optional)
```

### Type Definition Strategy
T-3.1.1 must extend rather than recreate the discriminated union approach from T-2.5.6:
- Import ButtonVariant from `../../../system/styled.tsx`
- Extend with size options: 'small' | 'medium' | 'large'
- Add icon placement: 'left' | 'right' | 'none'
- Implement proper default props with TypeScript defaults

### CSS Integration Method
T-3.1.1 shall reference T-2.5.6's CSS custom properties directly:
- Use `var(--aplio-button-primary-bg)` rather than hardcoded colors
- Reference established CSS variables for hover, focus, and active states
- Maintain theme switching capability through CSS cascade

## Eliminated Requirements

### Custom Styling System Creation
T-3.1.1 shall NOT create new styling utilities or CSS variable definitions. The comprehensive system from T-2.5.6 provides all necessary infrastructure.

### JavaScript Theme Implementation
T-3.1.1 shall NOT implement JavaScript-based theming or theme provider patterns. All theming occurs through CSS custom properties established in T-2.5.6.

### New Testing Infrastructure
T-3.1.1 shall NOT create new testing frameworks. The 8-phase testing protocol from T-2.5.6 provides the validation approach for atomic components.

## Additional Testing Needs

### Atomic Component Testing Pattern
T-3.1.1 requires testing that validates proper integration with T-2.5.6 foundation:
- Type safety validation with discriminated unions
- CSS variable reference verification
- DSAP compliance measurement (30px padding, 30px border-radius)
- Export structure validation for component consumption

### Icon Integration Testing
T-3.1.1 introduces icon placement functionality not tested in T-2.5.6:
- Left icon positioning validation
- Right icon positioning validation  
- Icon-text alignment verification
- Icon size scaling with button sizes

### Size Variant Testing
T-3.1.1 requires comprehensive size testing not needed in T-2.5.6:
- Small button dimensions and typography scaling
- Medium button (default) specifications
- Large button proportional scaling
- Size consistency across all variants (primary, secondary, tertiary)

## Acceptance Criteria

### Mandatory Requirements from Active Task
You must achieve ALL of these criteria as defined in `pmc/core/active-task.md`:

1. **✓ File Structure**: Button component file structure follows atomic design principles at `components/design-system/atoms/Button/`
2. **✓ Type Definitions**: TypeScript interfaces defined for all button variants and states extending T-2.5.6 discriminated unions
3. **✓ Variant Types**: Primary, secondary, and tertiary variants properly typed and implemented
4. **✓ Size Options**: Small, medium, and large size options with proper TypeScript definitions
5. **✓ Export Structure**: Export structure follows project conventions for component consumption
6. **✓ Icon Placement**: Icon placement options for left and right with proper type definitions
7. **✓ Default Configuration**: Default props and type defaults properly configured

### DSAP Compliance Requirements
Based on T-2.5.6 testing validation, T-3.1.1 must maintain:
- **30px padding** for all button sizes (proportionally scaled)
- **30px border-radius** for consistent corner rounding
- **Inter font family** for typography consistency
- **500ms transitions** for all interactive state changes

### Integration Validation Requirements  
T-3.1.1 must demonstrate successful integration with T-2.5.6 foundation:
- CSS custom properties referenced correctly (--aplio-button-*)
- Discriminated union types imported and extended properly
- Theme switching functional without JavaScript theme props
- Component consumable by other parts of the design system

**Completion Check**: All acceptance criteria must be validated before declaring T-3.1.1 complete. Use T-2.5.6 testing patterns for comprehensive validation.