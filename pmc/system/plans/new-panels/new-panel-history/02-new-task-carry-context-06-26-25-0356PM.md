# Development Context & Operational Priorities
**Date:** 06-26-25-0356PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**T-2.5.1: Design Token Typing System Implementation**

You shall implement a comprehensive typing system for design tokens in the Next.js 14 design system to ensure type safety across the application. This task builds directly on the successful completion of T-2.4.6 responsive typography documentation, which established critical patterns and validation protocols that must inform your token implementation approach.

**Task Summary**: T-2.4.6 responsive typography documentation has been completed successfully with comprehensive testing validation. The task created 91KB of documentation across 5 files with 100% legacy pattern accuracy, full WCAG 2.1 AA compliance, and successful coding agent workflow validation. All typography patterns extracted from `aplio-legacy/scss/_typography.scss:16-31` have been validated and documented, providing the foundation for type-safe token implementation.

**Why T-2.5.1 is Critical**: The design token typing system will provide the foundational type safety infrastructure that all subsequent design system components depend on. Based on T-2.4.6 validation results, the token system must achieve the same level of accuracy and comprehensive coverage to ensure reliable component implementation.

**Current Implementation State**: T-2.5.1 is ready for implementation with all dependencies satisfied. T-2.4.6 validation protocols have established proven testing patterns that must be adapted for token validation.

### Critical Implementation Context

**Typography Pattern Integration Requirements**: T-2.4.6 testing validated these critical patterns that must be reflected in your token typing system:
- H1 scaling: `text-[36px] max-xl:leading-[1.33] xl:text-[64px] font-bold leading-[1.2]`  
- H2 scaling: `text-[32px] xl:text-[36px] font-bold leading-[1.33]`
- H3 scaling: `text-[22px] xl:text-[24px] font-semibold`
- Body text: `font-Inter text-base font-normal leading-[1.75] -tracking-[0.3px]`

**Validation Protocol Requirements**: You must implement token validation using the same rigor as T-2.4.6 testing, including:
- 100% accuracy validation against legacy implementations
- TypeScript strict mode compilation testing
- Comprehensive test coverage (95% for T-2.5.1)
- Documentation completeness verification

**Testing Infrastructure Dependencies**: T-2.4.6 established testing infrastructure in `aplio-modern-1/test/` that you shall leverage and extend for token testing.

### Existing Implementation Instructions Adaptations

**Enhanced Testing Requirements**: Based on T-2.4.6 comprehensive testing success, you must implement enhanced testing protocols for tokens:
- Pattern accuracy validation similar to typography legacy validation
- Type safety verification through compilation testing  
- Token reference validation using the proven agent workflow testing approach
- Documentation completeness testing adapted from typography testing protocols

**Legacy Reference Integration**: You must extract and validate token patterns from the same accuracy standards as T-2.4.6:
- Reference file: `aplio-modern-1/src/lib/design-system/tokens/colors.ts:19-35` for token type definitions
- Reference file: `aplio-legacy/tailwind.config.js:68-72` for spacing scale patterns
- Reference file: `aplio-modern-1/src/lib/design-system/tokens/colors.ts:67-141` for token reference patterns

**TypeScript Strict Mode Compliance**: All token implementations must compile successfully in TypeScript strict mode, following the same validation approach proven in T-2.4.6 testing.

### Key Files and Locations

**Primary Implementation Target**:
- `aplio-modern-1/styles/system/tokens.ts` - Main implementation file for design token typing system

**Legacy Reference Files** (validated patterns from T-2.4.6):
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts:19-35` - Existing token type definitions
- `aplio-legacy/tailwind.config.js:68-72` - Spacing scale patterns  
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts:67-141` - Token reference system patterns

**Testing Infrastructure** (established by T-2.4.6):
- `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.1/` - Test location for T-2.5.1
- `aplio-modern-1/test/references/` - Test reference files directory
- `aplio-modern-1/test/reports/` - Test reporting infrastructure

**Proven Documentation Patterns** (from T-2.4.6 success):
- Typography documentation structure in `aplio-modern-1/design-system/docs/responsive/typography/` provides the template for token documentation requirements

### Specification References

**Legacy Pattern Sources** (validated accuracy requirements):
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 19-35: Core token type definitions
- `aplio-legacy/tailwind.config.js` lines 68-72: Spacing scale transformation patterns
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 67-141: Token reference system implementation
- `aplio-modern-1/src/lib/design-system/tokens/colors.ts` lines 19-35: Token documentation standards

**Testing Protocol References** (proven T-2.4.6 patterns):
- `pmc/core/active-task-unit-tests-2-enhanced.md`: Comprehensive testing methodology
- T-2.4.6 validation results: 100% legacy accuracy, TypeScript compilation success, agent workflow validation

**Acceptance Criteria Mapping**:
1. **Color token type definitions** → Reference `colors.ts:19-35` for existing patterns
2. **Typography token type definitions** → Integrate with validated T-2.4.6 typography patterns  
3. **Spacing token type definitions** → Reference `tailwind.config.js:68-72` for scale patterns
4. **Token value validation utilities** → Implement validation using T-2.4.6 testing protocols

### Next Steps

1. **PREP-1**: Analyze existing token type definitions from `colors.ts:19-35` using T-2.4.6 pattern analysis approach
2. **PREP-2**: Study token scale transformation patterns in `tailwind.config.js:68-72` with legacy validation rigor  
3. **PREP-3**: Research TypeScript token reference best practices building on T-2.4.6 TypeScript success
4. **PREP-4**: Create token documentation standards following T-2.4.6 documentation excellence
5. **IMP-1**: Implement base TypeScript interfaces for all design token categories with 95% test coverage

### Important Dependencies

**T-2.4.6 Success Pattern Dependencies**:
- Typography documentation structure (5-file pattern, 91KB total) provides template for comprehensive coverage
- Legacy pattern validation methodology (100% accuracy requirement) must be applied to token validation
- Agent workflow testing approach (successful pattern implementation) must be adapted for token usage testing
- TypeScript strict mode compilation requirements (all examples must compile) applies to token implementations

**Testing Infrastructure Dependencies**:
- Existing test directory structure in `aplio-modern-1/test/` established by T-2.4.6
- Proven testing protocols from T-2.4.6 validation (Phase 1, 2, 3 testing approach)
- Legacy reference validation patterns established in T-2.4.6 testing

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