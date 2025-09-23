# Development Context & Operational Priorities
**Date:** 06-26-25-0800PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
**Task T-2.5.2: Theme Provider Implementation**

You are tasked with implementing a comprehensive theme provider system for the Next.js 14 design system. This implementation directly builds upon the successful completion of T-2.5.1 Design Token Typing System Implementation.

**What is being worked on:**
- Implementation of a type-safe theme provider system with React Context API
- Creation of light and dark theme presets using the validated token system from T-2.5.1
- Building theme switching functionality with system preference detection
- Establishing theme persistence between sessions using localStorage

**Why it is being worked on:**
T-2.5.2 is the logical next step following T-2.5.1's successful implementation of comprehensive TypeScript token typing system. The validated token system provides the foundation for theme management, and the theme provider will enable dynamic theme switching across the application while maintaining type safety.

**Current state of implementation:**
- T-2.5.1 has been successfully completed with 108/108 tests passing (100% pass rate)
- Token typing system is fully implemented with 69 token paths (exceeds 63 requirement)
- TypeScript compilation succeeds in strict mode
- Mock implementation tests have been resolved
- Legacy compatibility maintained at 100% (#B1E346 primary color preserved)

**Critical context needed for continuation:**
- You must leverage the validated token system from `aplio-modern-1/styles/system/tokens.ts` and `aplio-modern-1/styles/system/token-utils.ts`
- The theme provider implementation must use the TokenPath types and utility functions from T-2.5.1
- All theme-related functionality must maintain the same level of type safety achieved in T-2.5.1

### Current Active Action 
[CONDITIONAL: Include ONLY if there is an active action in progress. Must include:
1. Task ID and title
2. Current phase (Preparation/Implementation/Validation)
3. Active element being worked on
4. Last recorded action
Remove section if no active action.]

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps 
1. **T-2.5.2 PREP-1**: Analyze theme system requirements and design token structure (implements ELE-1) - Use the validated token system from T-2.5.1
2. **T-2.5.2 PREP-2**: Study theme provider patterns in React and Next.js (implements ELE-2) - Focus on type-safe implementations
3. **T-2.5.2 PREP-3**: Research theme switching and system preference detection (implements ELE-3) - Ensure compatibility with validated token paths
4. **T-2.5.2 PREP-4**: Investigate localStorage theme persistence implementation (implements ELE-4) - Maintain type safety from T-2.5.1
5. **Begin Implementation Phase**: Create theme context with TypeScript interfaces leveraging T-2.5.1 token types

### Important Dependencies
[CONDITIONAL: Include ONLY if there are critical dependencies for the next steps. Each dependency must specify:
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files
**Core Implementation Files:**
1. `aplio-modern-1/styles/system/tokens.ts` - Validated token typing system with 69 token paths (T-2.5.1 deliverable)
2. `aplio-modern-1/styles/system/token-utils.ts` - Token utility functions with type safety (T-2.5.1 deliverable)
3. `aplio-modern-1/components/providers/theme-provider.tsx` - Target implementation file for T-2.5.2
4. `aplio-modern-1/styles/design-tokens/colors.ts` - Legacy color system with #B1E346 primary color preserved

**Testing Infrastructure:**
1. `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.1/` - Completed test suite (108/108 passing)
2. `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.2/` - Target test directory for theme provider tests

## Critical Implementation Context

### T-2.5.1 Implementation Insights That Affect T-2.5.2

**Token System Integration:**
- The validated token system provides 69 token paths across ColorTokenPath (23), TypographyTokenPath (25), SpacingTokenPath (19), EffectsTokenPath (1), and BreakpointTokenPath (1)
- All token types compile successfully in TypeScript strict mode
- Token utility functions include validation, path resolution, and type guards
- Legacy compatibility maintained at 100% with existing color values

**Type Safety Patterns:**
- Token path types use string literal unions for compile-time validation
- Token utility functions return properly typed values
- Mock implementation patterns were resolved using proper TypeScript type assertions
- All implementations must maintain the same level of type safety achieved in T-2.5.1

**Integration Requirements:**
- Theme provider must use TokenPath types from T-2.5.1 for theme definitions
- Theme switching must leverage token utility functions for value resolution
- Theme persistence must maintain type safety when storing/retrieving theme preferences

### Testing Standards Established in T-2.5.1

**Coverage Requirements:**
- 95% minimum test coverage achieved and exceeded (100% in T-2.5.1)
- All mock implementations must have proper TypeScript typing
- Testing must include TypeScript compilation validation
- Legacy compatibility testing required for all token value preservations

**Test Structure:**
- Unit tests organized by functionality (types, utils, validation)
- Mock implementation tests require proper type assertions
- Jest configuration supports TypeScript strict mode compilation
- Test execution from aplio-modern-1 directory using npm test command

### Modified Implementation Approaches

**Token Value Resolution:**
Based on T-2.5.1 implementation, you must use the established token utility functions for value resolution rather than direct token access. The token system provides type-safe utility functions that should be leveraged for theme value resolution.

**TypeScript Strict Mode Compliance:**
All theme provider implementations must compile successfully in TypeScript strict mode, following the patterns established in T-2.5.1. This includes proper type assertions for localStorage operations and theme value conversions.

**Legacy Compatibility Preservation:**
The theme provider must preserve the legacy color system compatibility established in T-2.5.1, particularly the #B1E346 primary color and existing spacing scale values.

### Additional Testing Needs

**Theme Provider Specific Testing:**
1. **Theme Context Testing**: Verify theme provider renders correctly with proper context values
2. **Theme Switching Validation**: Test theme toggling between light and dark modes
3. **System Preference Detection**: Validate automatic theme detection based on system preferences
4. **Persistence Testing**: Verify theme preferences persist across page refreshes and browser sessions
5. **Type Safety Validation**: Ensure all theme operations maintain TypeScript strict mode compliance

**Integration Testing:**
1. **Token System Integration**: Test theme provider with validated token system from T-2.5.1
2. **Legacy Compatibility**: Verify theme provider maintains existing color value compatibility
3. **Performance Testing**: Ensure theme switching performance meets application requirements

### Specification References

**Token System Specifications:**
- `aplio-modern-1/styles/system/tokens.ts` lines 1-642: Complete token type definitions
- `aplio-modern-1/styles/system/token-utils.ts` lines 1-776: Token utility functions
- `aplio-modern-1/styles/design-tokens/colors.ts` line 19: #B1E346 primary color preservation

**Legacy References:**
- `aplio-legacy/tailwind.config.js` line 10: Dark mode configuration patterns
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 141-148: Theme type definitions
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 236-275: Theme system implementation patterns

**Testing Specifications:**
- `pmc/core/previous-task-unit-tests-2-enhanced.md`: Testing protocol patterns
- `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.1/`: Successful test implementation examples

### Acceptance Criteria

**Type Safety Requirements:**
- Theme provider must use validated token types from T-2.5.1
- All theme operations must compile in TypeScript strict mode
- Theme persistence must maintain type safety for stored values

**Integration Requirements:**
- Theme provider must integrate seamlessly with T-2.5.1 token system
- Theme switching must use token utility functions for value resolution
- Legacy color compatibility must be preserved (#B1E346 primary color)

**Performance Requirements:**
- Theme switching must be performant with no visible lag
- Theme provider must not cause unnecessary re-renders
- localStorage operations must be optimized for performance

**Testing Requirements:**
- 95% minimum test coverage following T-2.5.1 patterns
- All mock implementations must have proper TypeScript typing
- Integration tests with T-2.5.1 token system required

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