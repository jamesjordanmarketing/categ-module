# Development Context & Operational Priorities
**Date:** 2025-06-04 17:22 PST (Updated: [Current Date/Time in same format])
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.1 (incremented due to significant progress and context update)

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
**1. What is being worked on:**
The primary focus is on completing the testing phases for Task T-1.1.4 ("Loading and Error States Implementation") as outlined in `pmc/core/active-task-unit-tests-2-version-b.md` and then continuing to the visual testing phase described in `pmc/core/active-task-unit-tests-2.md`.

**2. Why it is being worked on:**
To ensure the robust implementation of loading and error states for components critical to the Aplio Design System Modernization. This involves fixing Jest configuration issues, executing unit tests, and then proceeding to visual validation.

**3. Current state of implementation:**
- **PHASE 1: CRITICAL JEST CONFIGURATION FIXES (from `active-task-unit-tests-2-version-b.md`) is COMPLETE.**
    - All necessary dependencies (`undici`, `@swc/jest`, `next`, etc.) were verified/installed.

**Critical context needed for continuation:**
- The next agent should operate within the `aplio-modern-1/` directory for running Jest tests.

- The primary testing plan for the overall T-1.1.4 task, including Phase 3 visual testing, is `pmc/core/active-task-unit-tests-2.md`.

1.  **Action Identifier:** Transition to Phase 3 (Visual Testing) from `pmc/core/active-task-unit-tests-2.md`.
    **Brief description:** Begin visual testing of the T-1.1.4 components, starting with Phase 3, Step 3.1 ("Prepare Visual Test Environment").
    **Dependencies or blockers:** Successful completion of Phase 2 from `active-task-unit-tests-2-version-b.md`.
    **Expected outcome:** Visual testing environment is set up, and the first visual tests can be executed.

2.  **Action Identifier:** Follow Visual Testing Protocol.
    **Brief description:** Continue executing steps in Phase 3 ("Visual Testing") and subsequently Phase 4 ("LLM Vision Analysis") and Phase 5 ("Validation & Reporting") as detailed in `pmc/core/active-task-unit-tests-2.md`.
    **For details of how to use the Test System Visual Testing read: pmc\docs\stm-5a\testing-system-operations-tutorial-v6.md.
    **Dependencies or blockers:** Progression through each step of the visual testing protocol.
    **Expected outcome:** Comprehensive visual validation of T-1.1.4 components.

### Important Dependencies
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

1.  **File path:** `aplio-modern-1/jest.config.js`
    **Purpose/role:** Jest configuration file.
    **Current state:** Heavily modified and corrected during this session to support `next/jest` and `@swc/jest`. Crucial for test execution.

2.  **File path:** `aplio-modern-1/test/utils/jest-setup-enhanced.js`
    **Purpose/role:** Provides polyfills and mocks for the Jest environment.
    **Current state:** Created and significantly updated during this session with necessary polyfills (Fetch API, ReadableStream, MessageChannel, etc.).

3.  **File path:** `aplio-modern-1/test/utils/jest-env-setup.js`
    **Purpose/role:** Sets up environment variables for Jest.
    **Current state:** Created during this session.

4.  **File path:** `aplio-modern-1/package.json`
    **Purpose/role:** Project dependencies.
    **Current state:** Modified to remove `babel-jest` and `ts-jest`; `npm install` was run successfully afterwards.

5.  **File path:** `aplio-modern-1/test/unit-tests/task-1-1.4/T-1.1.4/loading-components.test.tsx`
    **Purpose/role:** The single test file used to validate Jest configuration fixes.
    **Current state:** Unchanged, but successfully executed.

6.  **File path:** `aplio-modern-1/test/unit-tests/task-1-1.4/T-1.1.4/suspense-integration.test.tsx`
    **Purpose/role:** Unit test file for Suspense integration.
    **Current state:** Modified to include `TestDashboardStatsWrapper` to correctly test an RSC with Suspense.

7.  **File path:** `aplio-modern-1/app/_components/DashboardStats.tsx`
    **Purpose/role:** An example of an Async Server Component whose testing required a wrapper.
    **Current state:** Unchanged.

### Important Scripts, Markdown Files, and Specifications


1.  **File path:** `pmc/core/active-task-unit-tests-2.md`
    **Purpose/role:** The original, overarching testing protocol for T-1.1.4. This will guide Phases 3, 4, and 5 (Visual Testing, LLM Vision Analysis, Validation & Reporting).
    **Key sections to review:** "Phase 3: Visual Testing", "Phase 4: LLM Vision Analysis", "Phase 5: Validation & Reporting".

### Recent Development Context

- **Last Milestone**: Successful execution of `npx jest test/unit-tests/task-1-1.4/T-1.1.4/loading-components.test.tsx --verbose --no-cache` after extensive Jest configuration and dependency troubleshooting. This completed Phase 1 of `active-task-unit-tests-2-version-b.md`.
- **Key Outcomes**:
    - Jest is now correctly configured to use `next/jest` with `@swc/jest` for TSX/JSX transformation in `aplio-modern-1`.
    - Necessary polyfills for `undici` (including `ReadableStream`, `MessageChannel`, `MessagePort`) and other browser APIs are in place in `jest-setup-enhanced.js`.
    - Dependency issues related to `babel-jest` and `ts-jest` were resolved by removing them in favor of `next/jest`'s capabilities.
    - `npm install` runs cleanly.
    - A strategy for testing async server components (RSCs) within client-side Jest tests using a client wrapper with `<React.Suspense>` was implemented in `suspense-integration.test.tsx`.
- **Relevant Learnings**:
    - `next/jest` functional configuration (`const nextJest = require('next/jest')({ dir: './' }); module.exports = nextJest(customJestConfig);`) is essential.
    - Polyfilling `global.self` in addition to `global` can be critical for libraries like `undici` in JSDOM.
    - Careful management of Jest transformers and presets is needed to avoid conflicts (`@swc/jest` vs `babel-jest` vs `ts-jest`).
    - RSCs cannot be directly rendered and awaited in client-side tests; they need client component wrappers that handle the promise resolution via Suspense.
- **Technical Context**:
    - Node.js v22.12.0, npm, Jest 29.7.0.
    - Current working directory for tests should be `aplio-modern-1/`.

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


Here are some important PMC commands:




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

