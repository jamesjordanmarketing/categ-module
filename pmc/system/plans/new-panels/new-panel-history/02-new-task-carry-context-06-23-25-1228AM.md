# Development Context & Operational Priorities
**Date:** 06-23-25-1228AM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task Summary**: T-2.2.5 (Accordion and FAQ Component Visual Documentation) has been successfully completed and comprehensively tested. This task created 5 detailed documentation files in `design-system/docs/components/interactive/accordion/` that capture all visual characteristics, interaction patterns, accessibility requirements, and implementation specifications for accordion and FAQ components based on legacy FaqItem.jsx and CustomFAQ.jsx analysis. The documentation provides implementation-ready specifications for Next.js 14 modernization efforts.

**You are now implementing T-2.2.6: Component Relationship Documentation**, which builds directly on the individual component documentation from T-2.2.5. Your focus must be on documenting component hierarchy, composition patterns, cross-component styling patterns, design system consistency, and component variant relationships. The implementation location is `design-system/docs/architecture/` and you must analyze component relationships across the entire design system, not just accordion components.

**Current State**: T-2.2.5 testing has validated that comprehensive individual component documentation exists and is accurate. T-2.2.6 implementation has not started. The next agent must begin with PREP-1 phase analysis of component relationships in the legacy codebase.

**Critical Context**: T-2.2.5 established a pattern of comprehensive documentation that includes specific measurements, implementation examples, dark mode variants, and accessibility specifications. T-2.2.6 must maintain this same level of detail but focus on relationships between components rather than individual component characteristics.

### Current Active Action

**Task ID**: T-2.2.6 - Component Relationship Documentation
**Current Phase**: Not started - Must begin with Preparation Phase (PREP-1)
**Active Element**: None selected - reviewing task requirements
**Last Recorded Action**: Task initialized, ready for implementation

### Next Steps

1. **PREP-1**: Analyze component relationships in legacy codebase (`aplio-legacy/app/home-4/page.jsx:1-15` component composition patterns)
2. **PREP-2**: Identify cross-component styling patterns (`aplio-legacy/scss/_common.scss:26-317` shared styles analysis)
3. **PREP-3**: Study design system consistency (`aplio-legacy/scss/_typography.scss:1-48` typography consistency patterns)
4. **PREP-4**: Analyze component variant relationships (`aplio-modern-1/design-system/tokens/colors.json:163-220` variant mapping)
5. **IMP-1**: Begin documentation of component hierarchy and composition patterns in `design-system/docs/architecture/`

### Important Dependencies

**T-2.2.5 Documentation Foundation**: All T-2.2.6 relationship documentation must reference and build upon the individual component documentation created in T-2.2.5. The accordion documentation provides a model for the level of detail and specification format required.

**Legacy Code Analysis**: T-2.2.6 requires comprehensive analysis of legacy component relationships that were not covered in individual component tasks (T-2.2.1 through T-2.2.5).

**Design System Architecture**: You must create architecture-level documentation that shows how individual components work together, which is a higher-level view than the individual component documentation.

### Important Files

1. **`pmc/core/active-task.md`** - T-2.2.6 task specifications and acceptance criteria
2. **`design-system/docs/components/interactive/accordion/`** - T-2.2.5 documentation output (5 files: accessibility.md, animations.md, component-design.md, layout-structure.md, visual-states.md)
3. **`aplio-legacy/app/home-4/page.jsx:1-15`** - Component composition patterns for ELE-1
4. **`aplio-legacy/scss/_common.scss:26-317`** - Shared styling patterns for ELE-2
5. **`aplio-legacy/scss/_typography.scss:1-48`** - Typography consistency for ELE-3
6. **`aplio-modern-1/design-system/tokens/colors.json:163-220`** - Variant mapping for ELE-4
7. **`test/unit-tests/task-2-2/T-2.2.6/`** - Test implementation location

### Important Scripts, Markdown Files, and Specifications

**PMC Command Pattern**: You must execute phase completion commands from pmc directory:
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "PREP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "IMP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "VAL" "complete"`

**P008-COMPONENT-VARIANTS Pattern**: T-2.2.6 follows the same component variant documentation pattern as T-2.2.5, but applies it to relationships rather than individual components.

**Testing Protocol Location**: `test/unit-tests/task-2-2/T-2.2.6/` for comprehensive documentation validation similar to T-2.2.5 testing approach.

### Recent Development Context

**Last Milestone**: T-2.2.5 Accordion and FAQ Component Visual Documentation completed and validated through comprehensive 4-phase testing protocol

**Key Outcomes**: 
- 5 detailed documentation files created with implementation-ready specifications
- Legacy implementation patterns (useRef animations, state management, visual styling) accurately captured
- Format compliance and structure standards established for design system documentation
- Testing framework validated for documentation quality assessment

**Relevant Learnings**: 
- Documentation must include specific measurements (px/rem/ms/%) and implementation examples
- Dark mode variants must be comprehensive across all visual states
- Animation specifications require timing values, though easing functions and transition properties need enhancement
- Legacy code analysis provides critical implementation context for modernization
- Documentation structure with proper H1 headings and section headers is essential

**Technical Context**: 
- Design system documentation follows established format with clear section headers
- Implementation location pattern: `design-system/docs/[category]/[component-type]/`
- Testing validation approach: Phase 0 (Setup) → Phase 1 (Discovery) → Phase 2 (Legacy Validation) → Phase 3 (Implementation Readiness) → Phase 4 (Final Report)

## Critical Implementation Context

**Documentation Quality Standards**: T-2.2.5 established that documentation must be implementation-ready with specific measurements, code examples, and comprehensive coverage. T-2.2.6 must maintain these standards while focusing on component relationships.

**Legacy Pattern Analysis**: T-2.2.5 demonstrated the importance of detailed legacy code analysis (specific line references, pattern extraction). T-2.2.6 requires similar analysis but across multiple components and their interactions.

**Dark Mode Consistency Issue**: T-2.2.5 testing revealed that 2 of 5 files (animations.md, layout-structure.md) were missing dark mode variants. T-2.2.6 must ensure comprehensive dark mode coverage from the start.

**Architecture-Level Focus**: Unlike T-2.2.5's component-specific focus, T-2.2.6 requires system-level thinking about how components work together, compose, and share styling patterns.

## Existing Implementation Instructions Adaptations

**Enhanced Animation Documentation**: Based on T-2.2.5 testing, T-2.2.6 must include complete animation specifications with timing values, easing functions (cubic-bezier), and transition properties from the start.

**Comprehensive Dark Mode Coverage**: T-2.2.6 must document dark mode variants for all relationship patterns, not just individual component states.

**Mermaid.js Integration**: T-2.2.6 explicitly includes Mermaid.js as a testing tool for creating visual documentation of component relationships - this was not required in T-2.2.5.

**Architecture Directory Structure**: T-2.2.6 targets `design-system/docs/architecture/` rather than component-specific directories, indicating a higher-level documentation approach.

## Modified Implementation Approaches

**Cross-Component Analysis**: T-2.2.6 requires analyzing relationships between multiple components simultaneously, unlike T-2.2.5's single-component focus on accordion/FAQ.

**Composition Pattern Documentation**: T-2.2.6:ELE-1 specifically focuses on component hierarchy and composition patterns, requiring analysis of how components are composed together in legacy implementations.

**Shared Styling Pattern Documentation**: T-2.2.6:ELE-2 requires documenting cross-component styling patterns and overrides, which involves analyzing shared CSS rather than component-specific styling.

**Visual Relationship Documentation**: T-2.2.6:ELE-4 requires creating visual documentation of component relationships, likely using diagrams and relationship maps.

## Eliminated Requirements

**Individual Component Deep-Dive**: T-2.2.6 should not duplicate the detailed individual component analysis done in T-2.2.5. Focus on relationships, not individual component characteristics.

**Component-Specific Animation Details**: T-2.2.6 should reference T-2.2.5 animation documentation rather than re-documenting individual component animations.

**Single-Component Testing**: T-2.2.6 testing should focus on relationship validation rather than individual component validation.

## Additional Testing Needs

**Relationship Validation Testing**: T-2.2.6 requires testing that validates documented component relationships match actual legacy implementations across multiple components.

**Cross-Component Consistency Testing**: Testing must verify that documented styling patterns and overrides actually work when components are composed together.

**Architecture Diagram Validation**: Visual documentation (Mermaid.js diagrams) must be tested for accuracy and completeness in representing component relationships.

**Design System Coherence Testing**: Testing must validate that documented patterns maintain design system consistency when components are used together.

## Key Files and Locations

**Implementation Target**: `design-system/docs/architecture/` - All T-2.2.6 documentation files
**Legacy References**: 
- `aplio-legacy/app/home-4/page.jsx:1-15` - Component composition patterns
- `aplio-legacy/scss/_common.scss:26-317` - Shared styling patterns  
- `aplio-legacy/scss/_typography.scss:1-48` - Typography consistency
- `aplio-modern-1/design-system/tokens/colors.json:163-220` - Variant mapping
**T-2.2.5 Foundation**: `design-system/docs/components/interactive/accordion/` - Reference for documentation standards
**Testing Location**: `test/unit-tests/task-2-2/T-2.2.6/` - Test implementation directory

## Specification References

**Task Specification**: `pmc/core/active-task.md` - Complete T-2.2.6 requirements and acceptance criteria
**Pattern Reference**: P008-COMPONENT-VARIANTS - Component variant documentation pattern
**T-2.2.5 Validation Results**: `test/reports/T-2.2.5/T-2.2.5-final-testing-report.md` - Testing patterns and validation approaches
**PMC Phase Management**: Commands in `pmc/bin/aplio-agent-cli.js` for phase progression tracking

## Acceptance Criteria

**You must ensure T-2.2.6 fulfills these requirements**:
1. Document component hierarchy and composition patterns (ELE-1)
2. Document cross-component styling patterns and overrides (ELE-2)  
3. Document visual consistency patterns across the design system (ELE-3)
4. Create visual documentation of component relationships (ELE-4)

**Additional Quality Requirements** (derived from T-2.2.5 testing):
- Include specific measurements and implementation examples
- Provide comprehensive dark mode coverage for all patterns
- Ensure proper markdown structure with H1 headings and section headers
- Create implementation-ready specifications for Next.js 14 modernization
- Maintain 90% test coverage requirement
- Generate comprehensive testing reports with validation results

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