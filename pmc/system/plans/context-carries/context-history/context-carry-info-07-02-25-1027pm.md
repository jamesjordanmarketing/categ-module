# Development Context & Operational Priorities
**Date:** 2025-07-02 22:27 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
T-3.1.1 **Button Component – Visual Testing & LLM Vision Analysis**

1. **What**  
   Execute pixel-perfect screenshot generation and subsequent LLM Vision analysis for the T-3.1.1 Button component.
2. **Why**  
   Visual validation (Phase 3) was never actually run. Screenshots and automated vision reports are required to complete the test protocol and to unlock DSAP compliance verification.
3. **Current State**  
   • Scaffold page is live at `/aplio-modern-1/app/test-t311-button/page.tsx` and renders all 15 variant/size combinations.  
   • The page now runs client-side after adding `'use client'`.  
   • Visual-testing specification is documented in `/pmc/core/active-task-visual-tests-1.md`.
4. **Critical Context**  
   • Previous unit and structural tests achieved 100 % pass rate.  
   • No screenshots currently exist in `/aplio-modern-1/test/screenshots/T-3.1.1/`.  
   • Playwright and the custom LLM Vision CLI must be invoked as described in the new spec.

### Current Active Action
* **Task ID**: T-3.1.1 – Button Component Visual Testing & LLM Vision  
* **Phase**: Preparation → Implementation (script authoring & execution)  
* **Active Element**: `/pmc/core/active-task-visual-tests-1.md` spec & Playwright test script  
* **Last Recorded Action**: Fixed server/client mismatch by adding `'use client'` to `/aplio-modern-1/app/test-t311-button/page.tsx` so the scaffold loads without runtime errors.

### Next Steps
1. **T-3.1.1:VIS-1** – Create Playwright test `aplio-modern-1/test/visual/t311-button.spec.ts` that navigates to `http://localhost:3000/test-t311-button` and captures individual screenshots for each `data-testid` on the page.  
   • *Dependency*: Playwright configured in repo.  
   • *Success*: 15 PNG files saved to `/aplio-modern-1/test/screenshots/T-3.1.1/`.
2. **T-3.1.1:VIS-2** – Run the new visual-tests script outlined in `/pmc/core/active-task-visual-tests-1.md` to generate those screenshots headlessly in CI mode.  
   • *Success*: Green Playwright run; artefacts pushed to the screenshots directory.
3. **T-3.1.1:LLMV-1** – Invoke LLM Vision analysis per spec to process each screenshot and output markdown reports to `/aplio-modern-1/test/vision-results/T-3.1.1/`.  
   • *Success*: One report per screenshot plus aggregate `t311-vision-summary.md`.
4. **T-3.1.1:REP-1** – Update validation summary in `/pmc/core/active-task.md` with links to screenshots and vision reports.  
   • *Success*: Document reflects Phase 3 completion status.

### Important Files
1. `/aplio-modern-1/app/test-t311-button/page.tsx` – Live scaffold used for screenshot capture *(modified – now client component)*.
2. `/pmc/core/active-task-visual-tests-1.md` – Authoritative visual-testing specification.
3. `/pmc/core/active-task.md` – Master action plan referencing all 3.1.1 phases.
4. `/aplio-modern-1/test/screenshots/T-3.1.1/` – Target directory for new screenshots.
5. `/aplio-modern-1/test/vision-results/T-3.1.1/` – Target directory for LLM Vision reports.

### Important Scripts, Markdown Files, and Specifications
1. `/pmc/core/active-task-visual-tests-1.md` – Step-by-step procedure for Playwright + LLM Vision workflow (sections: *Script Setup*, *Execution Commands*, *Output Schema*).
2. `/pmc/core/active-task.md` – Overall action plan; see *Phase 3 Visual Testing* subsection.

### Recent Development Context
- **Last Milestone**: All unit & structural tests for T-3.1.1 passed with 100 % compliance (Phases 0-2).  
- **Key Outcomes**: Button component confirmed production-ready pending visual validation.  
- **Relevant Learnings**: Next.js App Router pages require `'use client'` when components include event handlers.  
- **Technical Context**: Playwright is part of dev dependencies but no T-3.1.1 spec yet; scaffold page is now interactive and ready for automated capture.

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
- The next context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)

Here are some important PMC commands:

##### Start Task
```bash
node pmc/bin/aplio-agent-cli.js start-task "T-EXAMPLE.1.1"
```

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Update Element Status
```bash
node pmc/bin/aplio-agent-cli.js update-element-status "T-EXAMPLE.1.2:ELE-1" "Complete"
```

##### Task Completion
```bash
node pmc/bin/aplio-agent-cli.js complete-task "T-EXAMPLE.1.3"
```

##### Context Carryover for New Chat Windows
```bash
node system/management/carryover-command.js
```

#### Project Structure
```
aplio-legacy/ (legacy system)
aplio-modern-1/ (new system)
pmc/ (PMC system)
├── bin/
├── core/
├── system/
│   ├── management/
│   └── templates/
└── product/
```

### Additional Resources

#### Key URLs

#### Important Directories