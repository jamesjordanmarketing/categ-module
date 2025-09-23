# Development Context & Operational Priorities
**Date:** 2025-07-06 00:20 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Task:** T-3.2.1 Accordion Component Testing Protocol - Complete Recovery and Audit

**What is being worked on:**
The T-3.2.1 Accordion Component comprehensive testing protocol for the Aplio Design System. This involves a 5-phase testing process:
- Phase 0: Environment Setup (COMPLETED)
- Phase 1: Component Discovery & Classification (COMPLETED) 
- Phase 2: Unit Testing (COMPLETED)
- Phase 3: Visual Testing (INTERRUPTED - needs restoration)
- Phase 4: LLM Vision Analysis (PENDING)
- Phase 5: Final Validation & Reporting (PENDING)

**Why it is being worked on:**
Critical testing infrastructure for the Aplio Design System modernization. The accordion component is a core molecular component that requires comprehensive validation before production deployment.

**Current state of implementation:**
**CRITICAL ISSUE:** Multiple incorrect file paths were created during development iterations, causing significant file placement issues. All erroneous files have been deleted. The current state is uncertain and requires a complete audit.

**Critical context needed for continuation:**
1. **Path Issues:** Previous agent created multiple incorrect directory structures in wrong locations (root directory, pmc, etc.)
2. **File Deletions:** All erroneously placed files have been removed - only files in aplio-modern-1 remain
3. **Code Completeness:** Cannot verify if T-3.2.1 implementation is complete due to path confusion
4. **Testing Infrastructure:** Visual testing script exists but may have incorrect paths

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Bugs & Challenges in the Current Task
**Issue 1: File Path Confusion and Deletions**
- **Description:** Multiple incorrect directory structures created during iterative development
- **Current Status:** All erroneous files deleted, only aplio-modern-1 files remain
- **Impact:** Uncertain code completeness, broken testing infrastructure
- **Blocking Factors:** Need complete audit before proceeding

**Issue 2: Visual Testing Script Path Issues**
- **Description:** Visual testing script has incorrect file paths to scaffold files
- **Current Status:** Script exists but fails to find scaffold files
- **Impact:** Cannot complete Phase 3 visual testing
- **Blocking Factors:** Needs path corrections after audit

### Next Steps 
1. **t-3-2-1-complete-audit** - Complete audit of T-3.2.1 Accordion Component code and testing infrastructure
   - Dependencies: None
   - Expected Outcome: Full inventory of existing code and identification of missing components

2. **t-3-2-1-restore-testing** - Restore and complete T-3.2.1 testing protocol phases 3-5
   - Dependencies: Complete audit results
   - Expected Outcome: Functional testing infrastructure and completed visual testing

3. **Fix visual testing script paths** - Correct file paths in visual-test-suite.js
   - Dependencies: Audit completion
   - Expected Outcome: Functional screenshot capture system

4. **Complete Phase 3 visual testing** - Capture high-quality screenshots of all scaffold files
   - Dependencies: Fixed paths
   - Expected Outcome: 23 scenario screenshots across 5 enhanced scaffold files

5. **Execute Phase 4 LLM Vision Analysis** - Analyze screenshots with 95%+ confidence scores
   - Dependencies: Phase 3 completion
   - Expected Outcome: Comprehensive visual validation report

### Important Files
1. **aplio-modern-1/test/visual-tests/T-3.2.1/visual-test-suite.js** - Visual testing script (needs path fixes)
2. **aplio-modern-1/components/design-system/molecules/Accordion/** - Core accordion components (needs audit)
3. **aplio-modern-1/jest.config.js** - Jest configuration updated for T-3.2.1 (verify state)
4. **aplio-modern-1/jest.setup.js** - Jest setup file (verify state)

### Important Scripts, Markdown Files, and Specifications
1. **pmc/system/plans/new-tests/05-new-test-conductor-output-07-05-25-0303PM.md** - Original T-3.2.1 test specification and phase definitions
2. **pmc/core/active-task-unit-tests-2-enhanced-phases-1-2.md** - Phases 1-2 detailed specifications and completion status
3. **pmc/core/active-task-unit-tests-2-enhanced-phases-3-5.md** - Phases 3-5 specifications for visual testing, LLM vision, and final validation
4. **aplio-modern-1/test/visual-tests/T-3.2.1/reports/** - Visual testing reports directory (check for existing reports)

### Recent Development Context
- **Last Milestone**: Attempted Phase 3 visual testing with Playwright screenshot capture
- **Key Outcomes**: Created comprehensive visual testing infrastructure but encountered path resolution issues
- **Relevant Learnings**: File path management is critical for cross-directory testing scripts
- **Technical Context**: Playwright browsers installed, visual testing script functional but needs path corrections

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