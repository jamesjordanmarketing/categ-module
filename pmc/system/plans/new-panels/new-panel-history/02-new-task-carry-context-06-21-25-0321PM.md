# Development Context & Operational Priorities
**Date:** 06-21-25-0321PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Task T-2.2.4: Hero Section Component Visual Documentation**

**What is being worked on:**
The next agent will implement comprehensive visual documentation for the Hero.jsx component (40 lines) from the legacy aplio-legacy/components/home-4/ directory. This task involves creating 5 documentation files in the `aplio-modern-1/design-system/docs/components/sections/hero/` directory to document layout structure, typography hierarchy, responsive behavior, and animation patterns.

**Why it is being worked on:**
This task is part of the systematic documentation effort for the Aplio Design System modernization project. It builds upon the successful completion of T-2.2.3 (Feature Section Component Visual Documentation) which achieved 96.8% legacy fidelity and 89.2% quality score. The hero section documentation is critical as it represents the primary visual entry point for users and contains complex background gradient systems with SVG shape integration.

**Current state of implementation:**
- Task approach has been established with detailed 5-step implementation strategy
- Task is in "Not started" phase - ready for Preparation Phase (PREP) implementation
- Legacy component analysis has been completed showing 40-line Hero.jsx with complex background system
- Implementation location confirmed: `aplio-modern-1/design-system/docs/components/sections/hero/`
- Testing infrastructure available from T-2.2.3's successful methodology

**Critical context needed for continuation:**
- Hero.jsx component uses FadeUpAnimation wrapper with fadeUpAnimation pattern (opacity: 0→1, y: 100→0, duration: 0.5s)
- Complex responsive padding classes: `max-mb:pb-[70px]`, `max-lg:pb-25`, `max-lg:pt-[160px]`
- Background system uses HeroLightShapeSVG and HeroDarkShapeSVG with responsive visibility toggles
- Typography hierarchy: trusted businesses text, main heading, description paragraph with specific spacing classes
- Button group layout uses flex positioning with responsive column-to-row transformation
- Must achieve ≥96% legacy fidelity and ≥89% quality score based on T-2.2.3 standards

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
**Task ID:** T-2.2.4
**Current Phase:** Preparation Phase (PREP) - Not Started
**Active Element:** Ready to begin PREP-1 (Analyze hero section components in the legacy codebase)
**Last Recorded Action:** Task approach established, automation workflow completed successfully

### Next Steps 
1. **PREP-1**: Analyze Hero.jsx component structure (lines 6-7 for layout, lines 29-30 for typography) - No dependencies
2. **PREP-2**: Identify responsive behavior patterns in Hero.jsx breakpoint classes - Depends on PREP-1 completion
3. **PREP-3**: Study animation.js fadeUpAnimation pattern implementation - No dependencies
4. **PREP-4**: Create documentation template structure in hero directory - Depends on PREP-1, PREP-2, PREP-3
5. **Begin Implementation Phase**: Start IMP-1 through IMP-5 documentation creation - Depends on all PREP phases

### Important Dependencies
**T-2.2.3 Testing Infrastructure**: Status - Completed successfully with 96.8% legacy fidelity
Impact: Provides proven testing methodology and quality standards for T-2.2.4 validation

**Legacy Hero.jsx Component**: Status - Available at aplio-legacy/components/home-4/Hero.jsx (40 lines)
Impact: Primary reference source for all documentation requirements

**Animation.js Pattern Library**: Status - Available at aplio-legacy/data/animation.js
Impact: Required for documenting FadeUpAnimation implementation patterns

### Important Files
1. `aplio-legacy/components/home-4/Hero.jsx` - Primary legacy component (40 lines) for documentation reference
2. `aplio-legacy/data/animation.js` - Animation patterns including fadeUpAnimation implementation
3. `pmc/core/active-task.md` - Current task specifications and requirements
4. `aplio-modern-1/design-system/docs/components/sections/hero/` - Target documentation directory (to be created)
5. `aplio-modern-1/design-system/docs/components/sections/feature/` - T-2.2.3 reference documentation for quality standards

### Important Scripts, Markdown Files, and Specifications
1. `pmc/bin/aplio-agent-cli.js` - PMC command interface for phase updates and logging
2. `pmc/product/06-aplio-mod-1-tasks.md` - Complete task specifications starting at line 57733
3. `pmc/core/progress.md` - Overall project progress tracking
4. Key PMC commands for task execution:
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "PREP" "complete"`
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "IMP" "complete"`
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "VAL" "complete"`

### Recent Development Context
**Last Milestone**: Successful completion of T-2.2.3 Feature Section Component Visual Documentation with exceptional quality metrics

**Key Outcomes**: 
- Achieved 96.8% legacy fidelity standard and 89.2% quality score
- Established 5-file documentation pattern: layout.md, feature-card.md, responsive-behavior.md, animations.md, visual-reference.md
- Proven testing methodology with 100% class coverage
- Created comprehensive documentation structure with exact measurements, color specifications, and responsive behavior details

**Relevant Learnings**: 
- Professional documentation quality requires detailed tables, code examples, and visual diagrams
- Comprehensive structure analysis essential for accurate component documentation
- Responsive behavior documentation must include exact breakpoint specifications and grid transformations
- Animation documentation requires performance optimizations and accessibility considerations

**Technical Context**: 
- Hero.jsx component structure: section with gradient backgrounds, SVG positioning, typography hierarchy, button groups
- Complex responsive system using max-width breakpoints and conditional SVG visibility
- FadeUpAnimation pattern integration with specific timing and easing parameters
- Background system complexity with absolute positioning and shape overlays

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