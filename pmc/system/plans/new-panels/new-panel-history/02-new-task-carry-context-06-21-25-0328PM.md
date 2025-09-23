# Development Context & Operational Priorities
**Date:** 06-21-25-0328PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Task T-2.2.5: Accordion and FAQ Component Visual Documentation**

**What is being worked on:**
The next agent will implement comprehensive visual documentation for accordion and FAQ components from the legacy aplio-legacy system. This task involves creating documentation files in the `aplio-modern-1/design-system/docs/components/interactive/accordion/` directory to document component design, layout structure, interaction patterns, and accessibility requirements.

**Why it is being worked on:**
This task continues the systematic documentation effort for the Aplio Design System modernization project. It follows the successful pattern established by previous documentation tasks (T-2.2.3, T-2.2.4) and focuses on interactive components that are critical for user engagement. The accordion and FAQ components represent complex interactive elements with expand/collapse functionality, accessibility requirements, and animation patterns that require detailed documentation for the modernization effort.

**Current state of implementation:**
- Task is in "Not started" phase - ready for Preparation Phase (PREP) implementation
- Legacy component analysis shows FaqItem.jsx (49 lines) with sophisticated accordion implementation
- CustomFAQ.jsx (36 lines) provides section layout structure with state management
- Implementation location confirmed: `aplio-modern-1/design-system/docs/components/interactive/accordion/`
- Testing infrastructure available from previous task successes (T-2.2.3: 96.8% legacy fidelity, 89.2% quality score)

**Critical context needed for continuation:**
- **FaqItem.jsx Component Structure**: 49-line component with complex accordion implementation using useRef for height animation
- **Interactive States**: Open/closed states with dynamic height transitions using contentHeight.current.scrollHeight
- **Visual Design**: Rounded medium background, dashed border styling, padding structure (p-2.5, px-5, py-3)
- **Icon System**: SVG icons for open/closed states with conditional rendering and stroke styling
- **Typography Hierarchy**: Question text (text-xl font-semibold) and answer text (text-paragraph-light)
- **Dark Mode Support**: Comprehensive dark theme implementation with dark:bg-dark-200, dark:border-borderColor-dark
- **Animation System**: Height-based transitions with overflow hidden and dynamic style application
- **Layout Structure**: CustomFAQ.jsx implements container with max-width constraints (max-w-[830px]) and spacing ([&>*:not(:last-child)]:mb-5)
- **State Management**: useState for activeIndex with toggle functionality (prevIndex === index ? null : index)
- **Accessibility Considerations**: Button elements, proper semantic structure, keyboard navigation support
- **Must achieve ≥90% code coverage and maintain quality standards established by previous documentation tasks

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
**Task ID:** T-2.2.5
**Current Phase:** Preparation Phase (PREP) - Not Started
**Active Element:** Ready to begin PREP-1 (Analyze accordion and FAQ components in the legacy codebase)
**Last Recorded Action:** Task initialized, automation workflow completed successfully

### Next Steps 
1. **PREP-1**: Analyze FaqItem.jsx (lines 4-48) and CustomFAQ.jsx (lines 6-36) component structures - No dependencies
2. **PREP-2**: Study interaction patterns and height-based animations in FaqItem.jsx - Depends on PREP-1 completion
3. **PREP-3**: Identify accessibility implementation including button elements and ARIA patterns - No dependencies
4. **PREP-4**: Create documentation template structure in accordion directory - Depends on PREP-1, PREP-2, PREP-3
5. **Begin Implementation Phase**: Start IMP-1 through IMP-5 documentation creation - Depends on all PREP phases

### Important Dependencies
**Previous Task Success Patterns**: Status - T-2.2.3 completed with 96.8% legacy fidelity and 89.2% quality score
Impact: Provides proven documentation methodology and quality standards for T-2.2.5 validation

**Legacy Accordion Components**: Status - Available at aplio-legacy/components/shared/FaqItem.jsx (49 lines) and aplio-legacy/components/home-4/CustomFAQ.jsx (36 lines)
Impact: Primary reference sources for all documentation requirements including interaction patterns and accessibility

**FAQ Data Structure**: Status - Available at aplio-legacy/data/faqData.js
Impact: Required for understanding data structure and content patterns for FAQ implementation

### Important Files
1. `aplio-legacy/components/shared/FaqItem.jsx` - Primary accordion component (49 lines) with height animation and state management
2. `aplio-legacy/components/home-4/CustomFAQ.jsx` - FAQ section layout (36 lines) with container structure and state handling
3. `aplio-legacy/data/faqData.js` - FAQ data structure and content patterns
4. `pmc/core/active-task.md` - Current task specifications and requirements
5. `aplio-modern-1/design-system/docs/components/interactive/accordion/` - Target documentation directory (to be created)

### Important Scripts, Markdown Files, and Specifications
1. `pmc/bin/aplio-agent-cli.js` - PMC command interface for phase updates and logging
2. `pmc/product/06-aplio-mod-1-tasks.md` - Complete task specifications starting at line 63471
3. `pmc/core/progress.md` - Overall project progress tracking
4. Key PMC commands for task execution:
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "PREP" "complete"`
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "IMP" "complete"`
   - `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "VAL" "complete"`

### Recent Development Context
**Last Milestone**: Successful completion of documentation tasks T-2.2.3 and T-2.2.4 with established quality standards and proven methodology

**Key Outcomes**: 
- Established comprehensive documentation patterns for visual component specifications
- Proven testing methodology with high legacy fidelity standards (≥96%)
- Created systematic approach to documenting responsive behavior, animations, and accessibility
- Demonstrated effective use of PMC phase management and validation protocols

**Relevant Learnings**: 
- Interactive components require detailed documentation of state transitions and animation patterns
- Accessibility documentation must include keyboard navigation patterns and ARIA attribute requirements
- Height-based animations need specific documentation of transition timing and easing functions
- Dark mode support requires comprehensive documentation of theme variations and color specifications
- Container structure and spacing systems need precise documentation for layout consistency

**Technical Context**: 
- **FaqItem.jsx Architecture**: useRef-based height animation system with dynamic style application
- **State Management Pattern**: Toggle-based activeIndex system with conditional rendering
- **Visual Design System**: Rounded corners, dashed borders, padding hierarchy, and dark mode variants
- **Icon Implementation**: Conditional SVG rendering with stroke-based styling and accessibility considerations
- **Layout Constraints**: Container max-width system (830px) with responsive spacing patterns
- **Animation Timing**: Height transitions using scrollHeight with overflow management

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