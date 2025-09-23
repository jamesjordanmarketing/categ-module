# Development Context & Operational Priorities
**Date:** 2025-06-12 11:51 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.


## Current Focus

### Active Development Focus

The Active Development Focus for the next agent is we are going to start executing the task in sequence, Task T-1.3.3, after we just completed here in this chat. Review the entire steps and actions completed here and examine any possible gaps in what the task development requirements are. Review the next task here: pmc\core\active-task.md. I have updated it to contain the specifications for the next task in sequence.

- **Task T-1.3.2:** Server/Client Component Pattern Implementation (just completed)
- **Task T-1.3.3:** Utility and Hook Organization (about to begin)
- The current focus is transitioning from comprehensive testing and validation of server/client component patterns (T-1.3.2) to organizing shared utilities and creating custom hooks for client-side functionality (T-1.3.3).
- Review the full task specification here pmc\core\active-task.md. I have updated it to contain the specifications for Task T-1.3.3.


- **Why:**
  - T-1.3.2 was critical to establish robust, well-tested server/client boundaries in the Next.js 14 App Router architecture, ensuring correct classification, rendering, and interactivity.
  - T-1.3.3 builds on this by providing a reusable, maintainable foundation of utilities and hooks, which are essential for scalable client-side development and code reuse.

- **Current state:**
  - **T-1.3.2:** All phases (environment setup, discovery, unit testing, visual testing, LLM Vision analysis, reporting) have been completed with high confidence and full artifact generation.
  - **T-1.3.3:** Task initialized, requirements and acceptance criteria reviewed, ready for PREP phase.

- **Critical context:**
  - All server/client component patterns are now validated and production-ready.
  - The next agent should leverage the established component boundaries and patterns when designing utilities and hooks.
  - All testing artifacts, reports, and analysis for T-1.3.2 are available and should be referenced for integration and regression testing in T-1.3.3.

### Next Steps
1. **T-1.3.3 PREP-1:** Inventory utility functions from the legacy codebase (`aplio-legacy/utils:1-10`) to inform utility organization.
   - **Dependency:** Access to legacy code and understanding of new server/client boundaries.
   - **Expected Outcome:** List of reusable utility functions to migrate or refactor.
2. **T-1.3.3 PREP-2:** Identify common client-side patterns for custom hooks (`aplio-legacy/hooks:1-10`).
   - **Dependency:** Review of legacy hooks and new client component requirements.
   - **Expected Outcome:** Plan for custom hooks that align with new client component patterns.
3. **T-1.3.3 IMP-1/IMP-2:** Create utility directory structure and implement shared utility functions in `aplio-modern-1/lib`.
   - **Dependency:** Output from PREP-1.
4. **T-1.3.3 IMP-3/IMP-4:** Set up custom hooks directory and create sample hooks for common patterns.
   - **Dependency:** Output from PREP-2.
5. **T-1.3.3 VAL-1/VAL-2:** Test utility functions and verify custom hooks functionality using Jest, React Testing Library, and @testing-library/react-hooks.
   - **Dependency:** Completion of implementation steps.

### Important Files
1. `aplio-modern-1/components/design-system/templates/ServerComponentTemplate.tsx`  
   - Server component template, validated and production-ready.
2. `aplio-modern-1/components/design-system/templates/ClientComponentTemplate.tsx`  
   - Client component template, validated and production-ready.
3. `aplio-modern-1/test/unit-tests/task-1-3.2/T-1.3.2/server-component-render.test.tsx`  
   - Unit tests for server component validation.
4. `aplio-modern-1/test/unit-tests/task-1-3.2/T-1.3.2/client-directive.test.ts`  
   - Unit tests for client component directive validation.
5. `aplio-modern-1/test/scaffolds/T-1.3.2/ServerComponentTemplate-enhanced.html`  
   - Visual scaffold for server component.
6. `aplio-modern-1/test/scaffolds/T-1.3.2/ClientComponentTemplate-enhanced.html`  
   - Visual scaffold for client component.
7. `aplio-modern-1/test/screenshots/T-1.3.2/ServerComponentTemplate-enhanced.png`  
   - Screenshot for server component.
8. `aplio-modern-1/test/screenshots/T-1.3.2/ClientComponentTemplate-enhanced.png`  
   - Screenshot for client component.
9. `aplio-modern-1/test/screenshots/T-1.3.2/ServerComponentTemplate-enhanced-analysis.md`  
   - LLM Vision analysis report for server component.
10. `aplio-modern-1/test/screenshots/T-1.3.2/ClientComponentTemplate-enhanced-analysis.md`  
    - LLM Vision analysis report for client component.
11. `aplio-modern-1/test/reports/T-1.3.2-testing-report.md`  
    - Comprehensive testing report for T-1.3.2.
12. `pmc/system/plans/task-approach/current-test-discovery.md`  
    - Discovery and classification of tested components.

### Important Scripts, Markdown Files, and Specifications
- `pmc/core/active-task-unit-tests-2.md`  
  - The authoritative testing protocol for T-1.3.2, including all phases, commands, and validation steps.
- `test/utils/vision/enhanced-llm-vision-analyzer.js`  
  - Used for LLM Vision analysis of component screenshots.
- `pmc/core/active-task.md`  
  - Contains the current and next task requirements, acceptance criteria, and process phases.

### Recent Development Context
- **Last Milestone:**  
  - Full completion of T-1.3.2: Server/Client Component Pattern Implementation, including all required testing and validation phases.
- **Key Outcomes:**  
  - Server and client component patterns are now robustly validated, with clear boundaries, correct directives, and high-confidence LLM Vision analysis.
  - All testing artifacts (unit tests, scaffolds, screenshots, analysis reports) are generated and available for regression and integration testing.
- **Relevant Learnings:**  
  - Strict adherence to the testing protocol is critical; ensure all specified scripts (especially LLM Vision analysis) are executed as written.
  - Long, complex instructions can lead to missed steps; future protocols may benefit from command-first summaries or phase separation.
- **Technical Context:**  
  - All server/client component code is TypeScript, follows Next.js 14 App Router conventions, and is ready for integration with new utilities and hooks.
  - Testing infrastructure (Jest, Playwright, LLM Vision) is fully operational and validated.

### Variations and Decisions
- **No Code or Content Changes:**  
  - No changes were made to the implementation of T-1.3.2 components after testing; all work was focused on validation and documentation.

### Requirements Gaps for T-1.3.3
- **No major gaps identified** in the T-1.3.2 implementation or testing that would block T-1.3.3.
- **Dependencies:**  
  - T-1.3.3 depends on the validated server/client component patterns from T-1.3.2.
  - Ensure that new utilities and hooks are compatible with the established component boundaries and conventions.

---

**This context is now ready for handoff to the next agent, who will begin work on T-1.3.3: Utility and Hook Organization. All relevant artifacts, decisions, and context from T-1.3.2 are documented above.**

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