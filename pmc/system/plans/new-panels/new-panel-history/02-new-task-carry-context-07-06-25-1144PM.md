# Development Context & Operational Priorities
**Date:** 07-06-25-1144PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task Summary**: T-3.2.1 (Accordion Component Structure and Types) has been successfully completed with comprehensive testing infrastructure, achieving 98.7% final confidence score. The task implemented accordion component structure, type definitions, and server/client component boundaries in `aplio-modern-1/components/design-system/molecules/Accordion/`. The implementation includes 8 accordion components validated with 100% test coverage, 23 high-quality screenshots captured, and 10 enhanced LLM vision analysis reports generated with 95% confidence.

**The Active Development Focus** for the next agent: Implement T-3.2.2 AccordionItem component with expand/collapse animations and accessibility features. This task focuses on creating the client component that provides interactive accordion functionality with smooth animations, icon transitions, and full ARIA accordion pattern compliance.

**Critical Implementation Context**: 
- T-3.2.1 established comprehensive testing infrastructure that must be leveraged for T-3.2.2
- Visual testing scaffolds exist in `test/scaffolds/T-3.2.1/` with 5 enhanced HTML files
- Testing framework uses Jest, React Testing Library, enhanced-llm-vision-analyzer, and Puppeteer
- Accordion system architecture includes main Accordion component (server), AccordionItem component (client), AccordionProvider (React Context), and AccordionIcon component (server)
- Visual regression testing captured 23 screenshots across desktop, tablet, mobile viewports, dark mode, high contrast, and interactive states

**Existing Implementation Instructions Adaptations**: 
- T-3.2.2 must build upon the T-3.2.1 component structure foundation
- The AccordionItem component must integrate with the existing AccordionProvider Context system
- Legacy code references point to `aplio-legacy/components/shared/FaqItem.jsx` for animation and interaction patterns
- Server/client component boundaries are already optimized based on T-3.2.1 analysis

**Modified Implementation Approaches**:
- Testing infrastructure from T-3.2.1 provides scaffold templates for T-3.2.2 visual testing
- Enhanced LLM vision analysis tool proven effective with 95% confidence scores
- Visual testing framework successfully captures component states, animations, and accessibility features
- Unit testing approach established with comprehensive coverage requirements (90% minimum)

**Additional Testing Needs**: 
- AccordionItem component requires expand/collapse animation testing
- Icon rotation animation synchronization testing
- Variable height content handling validation
- Keyboard interaction testing for accessibility compliance
- Screen reader compatibility validation

**Key Files and Locations**:
- Implementation Target: `aplio-modern-1/components/design-system/molecules/Accordion/AccordionItem.tsx`
- Test Location: `aplio-modern-1/test/unit-tests/task-3-2/T-3.2.2/`
- Legacy Reference: `aplio-legacy/components/shared/FaqItem.jsx`
- Visual Testing: `test/scaffolds/T-3.2.2/` (to be created)
- Testing Reports: `test/reports/T-3.2.2-testing-summary.md` and `test/reports/T-3.2.2-testing-report.md`

**Specification References**:
- Primary Task Definition: `pmc/core/active-task.md` (T-3.2.2 specifications)
- Component Patterns: P003-CLIENT-COMPONENT, P018-TRANSITION-ANIMATION
- Legacy Implementation: `aplio-legacy/components/shared/FaqItem.jsx:4-10` (component structure), `aplio-legacy/components/shared/FaqItem.jsx:39-43` (animation implementation), `aplio-legacy/components/shared/FaqItem.jsx:11-37` (icon behavior), `aplio-legacy/components/shared/FaqItem.jsx:7-10` (accessibility attributes)
- DSAP Documentation: `aplio-modern-1/design-system/docs/` (mandatory compliance required)

**Acceptance Criteria**:
- AccordionItem component must visually match legacy implementation
- Expand/collapse animations must work smoothly with appropriate timing
- Icon rotation animations must synchronize with expand/collapse state  
- Component must meet ARIA accordion pattern requirements
- Keyboard interactions must work correctly according to accessibility guidelines
- Component must handle content of variable height correctly

### Next Steps

1. **[HIGH PRIORITY]** Complete DSAP Documentation Discovery for accordion component design patterns (`aplio-modern-1/design-system/docs/`)
2. **[HIGH PRIORITY]** Analyze legacy FaqItem component for animation timing and interaction patterns (`aplio-legacy/components/shared/FaqItem.jsx`)
3. **[HIGH PRIORITY]** Create AccordionItem client component with expand/collapse state management
4. **[MEDIUM PRIORITY]** Implement smooth height transitions and icon rotation animations
5. **[MEDIUM PRIORITY]** Add ARIA attributes and keyboard navigation support

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Important Dependencies
[CONDITIONAL: Include ONLY if there are critical dependencies for the next steps. Each dependency must specify:
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

1. `pmc/core/active-task.md` - T-3.2.2 complete task specifications and acceptance criteria
2. `aplio-modern-1/components/design-system/molecules/Accordion/AccordionItem.tsx` - Implementation target file
3. `aplio-legacy/components/shared/FaqItem.jsx` - Legacy reference for animations and interactions
4. `aplio-modern-1/test/unit-tests/task-3-2/T-3.2.2/` - Testing directory for comprehensive test suite
5. `test/scaffolds/T-3.2.1/` - Visual testing scaffolds from T-3.2.1 to reference for T-3.2.2
6. `aplio-modern-1/design-system/docs/` - DSAP documentation for compliance requirements

### Important Scripts, Markdown Files, and Specifications

1. `test/enhanced-llm-vision-analyzer.js` - Enhanced vision analysis tool with 95% confidence proven effectiveness
2. `test/run-visual-tests.js` - Visual testing framework for screenshot capture and analysis
3. `pmc/bin/aplio-agent-cli.js` - PMC CLI commands for phase management and logging
4. `test/reports/T-3.2.1-testing-summary.md` - Testing summary template for T-3.2.2 adaptation
5. `test/reports/T-3.2.1-testing-report.md` - Testing report template for T-3.2.2 adaptation

### Recent Development Context

**Last Milestone**: T-3.2.1 Accordion Component Structure and Types completed successfully with comprehensive testing protocol execution achieving 98.7% final confidence score.

**Key Outcomes**: 
- Complete accordion component architecture established with proper server/client boundaries
- Comprehensive testing infrastructure created with visual regression, unit tests, and accessibility validation
- Enhanced LLM vision analysis tool validated with 95% confidence across 10 critical screenshots
- Testing framework proven effective for component validation with 100% test coverage achievement

**Relevant Learnings**: 
- Enhanced LLM vision analysis provides reliable component validation with 95% confidence scores
- Visual testing scaffolds enable comprehensive component state capture across multiple viewports
- Testing infrastructure supports both automated and manual validation approaches
- Component architecture benefits from clear server/client boundary optimization

**Technical Context**: 
- Testing environment configured with Jest, React Testing Library, enhanced-llm-vision-analyzer, and Puppeteer
- Visual testing captures desktop, tablet, mobile viewports plus dark mode, high contrast, and interactive states
- Component validation includes accessibility compliance, visual accuracy, and functional correctness
- Testing reports generated in both summary and detailed formats for comprehensive documentation

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