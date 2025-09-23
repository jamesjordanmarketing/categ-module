# Development Context & Operational Priorities
**Date:** 2025-06-13 14:44 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

This context document addresses the completion of automated testing for Task T-1.3.3 (Utility and Hook Organization) using the comprehensive 5-phase testing protocol defined in `pmc\core\active-task-unit-tests-2.md`.

## Current Focus

### [Active Development Focus]

**TASK ID:** T-1.3.3 - Utility and Hook Organization
**TESTING PROTOCOL:** `pmc\core\active-task-unit-tests-2.md`
**CURRENT STATE:** Phases 1-2 COMPLETE, Phases 3-4 PARTIALLY COMPLETE, Phase 5 PENDING

**CRITICAL ISSUE IDENTIFIED:** The visual testing system has a fundamental mismatch between protocol expectations and implementation:

- **Protocol Expects:** Testing of `T-1.3.3:ELE-1` (lib/utils/) and `T-1.3.3:ELE-2` (lib/hooks/)
- **System Generated:** Screenshots of `app/_components/` (Button, Card, etc.)
- **Missing:** LLM Vision Analysis markdown reports for actual T-1.3.3 elements

**WHAT HAS BEEN COMPLETED:**
- ✅ **Phase 1:** Component Discovery (12 components found in lib/utils/ and lib/hooks/)
- ✅ **Phase 2:** Unit Testing (Jest tests passed for utilities and hooks)
- ✅ **Phase 3:** Visual Testing (30 screenshots generated, but WRONG components)
- ❌ **Phase 4:** LLM Vision Analysis (JSON results only, NO markdown reports)
- ❌ **Phase 5:** Validation & Reporting (not started)

**WHAT NEEDS TO BE COMPLETED:**
1. Generate correct visual testing for T-1.3.3:ELE-1 and T-1.3.3:ELE-2
2. Create LLM Vision Analysis markdown reports
3. Complete validation and final reporting

### Current Active Action 

**Task ID:** T-1.3.3 - Utility and Hook Organization
**Current Phase:** Phase 4 - LLM Vision Analysis (INCOMPLETE)
**Active Element:** Missing markdown analysis reports
**Last Recorded Action:** Generated 30 PNG screenshots for wrong components (app/_components/ instead of lib/utils/ and lib/hooks/)

**CRITICAL BLOCKER:** Windows file path issue with colon character in `T-1.3.3:ELE-1` prevents proper directory creation

### Bugs & Challenges in the Current Task

1. **File Path Issue:** `T-1.3.3:ELE-1` contains colon `:` which is invalid for Windows file paths
   - **Status:** Blocking visual testing for correct components
   - **Attempted Solutions:** None yet attempted
   - **Impact:** Cannot generate required screenshots for actual T-1.3.3 elements

2. **Component Discovery Mismatch:** Visual testing system only scans `app/_components/` but T-1.3.3 elements are in `lib/utils/` and `lib/hooks/`
   - **Status:** System limitation identified
   - **Impact:** Generated screenshots for wrong components entirely

3. **Missing LLM Analysis Reports:** No markdown documents generated as required by protocol
   - **Status:** Critical deliverable missing
   - **Required Files:** 
     - `test/screenshots/T-1.3.3/T-1.3.3:ELE-1-enhanced-analysis.md`
     - `test/screenshots/T-1.3.3/T-1.3.3:ELE-2-enhanced-analysis.md`

### Next Steps 

1. **Fix File Path Issue:** Modify visual testing system to handle colon characters or use alternative naming
   - **Dependencies:** Understanding of visual testing system architecture
   - **Expected Outcome:** Ability to create directories for T-1.3.3:ELE-1 and T-1.3.3:ELE-2

2. **Generate Correct Visual Testing:** Run visual testing for actual T-1.3.3 elements (lib/utils/ and lib/hooks/)
   - **Dependencies:** File path fix completed
   - **Expected Outcome:** Screenshots for ThemeProvider, cn utility, useTabState, useFilterState, etc.

3. **Execute LLM Vision Analysis:** Generate required markdown analysis reports
   - **Command:** `node test/utils/vision/enhanced-llm-vision-analyzer.js "T-1.3.3:ELE-1"`
   - **Command:** `node test/utils/vision/enhanced-llm-vision-analyzer.js "T-1.3.3:ELE-2"`
   - **Expected Outcome:** Two detailed markdown analysis reports with 95%+ confidence scores

4. **Complete Phase 5 Validation:** Run final validation and reporting
   - **Dependencies:** LLM analysis reports completed
   - **Expected Outcome:** Complete testing summary and human-readable report

5. **Verify All Deliverables:** Confirm all protocol requirements met
   - **Dependencies:** All phases completed
   - **Expected Outcome:** T-1.3.3 ready for production validation

### Important Dependencies

1. **Visual Testing System Fix:** Critical for generating correct component screenshots
   - **Status:** Requires investigation and modification
   - **Impact:** Blocks all remaining testing phases

2. **LLM Vision API Access:** Required for generating analysis reports
   - **Status:** Available but had connectivity issues in previous attempts
   - **Impact:** May require retry logic or API configuration adjustment

### Important Files

1. **Testing Protocol:** `pmc\core\active-task-unit-tests-2.md`
   - **Purpose:** Complete 5-phase testing specification
   - **Current State:** Phases 3-5 need completion

2. **Test Discovery Document:** `pmc\system\plans\task-approach\current-test-discovery.md`
   - **Purpose:** Maps T-1.3.3:ELE-1 and T-1.3.3:ELE-2 to actual components
   - **Current State:** Complete and accurate

3. **Generated Screenshots Directory:** `aplio-modern-1\test\screenshots\T-1.3.3\`
   - **Purpose:** Contains 30 PNG files from incorrect visual testing
   - **Current State:** Wrong components tested (app/_components/ instead of lib/)

4. **Visual Testing Results:** `aplio-modern-1\test\screenshots\T-1.3.3\T-1.3.3-enhanced-results.json`
   - **Purpose:** JSON summary of screenshot generation
   - **Current State:** Complete but for wrong components

5. **Unit Test Files:** `aplio-modern-1\test\unit-tests\task-1-3.3\T-1.3.3\`
   - **Purpose:** Jest unit tests for T-1.3.3 components
   - **Current State:** Complete and passing

### Important Scripts, Markdown Files, and Specifications

1. **Visual Testing Script:** `aplio-modern-1\test\run-visual-tests.js`
   - **Purpose:** Executes visual testing with Playwright
   - **Key Issue:** Only scans app/_components/, needs modification for lib/ directories

2. **LLM Vision Analyzer:** `aplio-modern-1\test\utils\vision\enhanced-llm-vision-analyzer.js`
   - **Purpose:** Generates markdown analysis reports
   - **Usage:** `node test/utils/vision/enhanced-llm-vision-analyzer.js "$component"`
   - **Key Issue:** Expects specific screenshot file names that don't exist

3. **Component Mapping (Critical Reference):**
   - **T-1.3.3:ELE-1 (Utility Organization):** lib/utils/ - cn, ThemeProvider, markdown utilities, animation variants
   - **T-1.3.3:ELE-2 (Custom Hooks):** lib/hooks/ - useTabState, useFilterState, useTheme, useViewportAnimation, useCounterAnimation

4. **Testing Commands:**
   - **Visual Testing:** `npm run test:visual:enhanced T-1.3.3:ELE-1`
   - **LLM Analysis:** `node test/utils/vision/enhanced-llm-vision-analyzer.js "T-1.3.3:ELE-1"`
   - **Validation:** Scripts in protocol Phase 5

### Recent Development Context

- **Last Milestone:** Completed Phase 2 Unit Testing with all Jest tests passing
- **Key Outcomes:** 
  - 12 T-1.3.3 components properly identified and classified
  - Unit tests validate utility functions and custom hooks
  - Test infrastructure confirmed working
- **Relevant Learnings:** 
  - Visual testing system has architectural limitations
  - File path naming conventions need Windows compatibility
  - Protocol expectations don't match current implementation
- **Technical Context:** 
  - Jest testing environment configured and working
  - Test server runs on port 3333
  - Playwright installed and functional
  - LLM Vision API available but had connectivity issues

## CRITICAL INSTRUCTIONS FOR NEXT AGENT

**DO NOT REPEAT COMPLETED WORK:**
- Phase 1 (Component Discovery) is COMPLETE
- Phase 2 (Unit Testing) is COMPLETE  
- Do NOT re-run Jest tests or component discovery

**FOCUS EXCLUSIVELY ON:**
1. **Fix visual testing system** to handle T-1.3.3:ELE-1 and T-1.3.3:ELE-2 file paths
2. **Generate correct screenshots** for lib/utils/ and lib/hooks/ components
3. **Create LLM Vision Analysis markdown reports** as specified in protocol line 535
4. **Complete Phase 5 validation and reporting**

**EXPECTED DELIVERABLES:**
- `test/screenshots/T-1.3.3/T-1.3.3:ELE-1-enhanced-analysis.md`
- `test/screenshots/T-1.3.3/T-1.3.3:ELE-2-enhanced-analysis.md`
- Complete testing summary with pass/fail status
- Human-readable testing report

**WORKING DIRECTORY:** `C:/Users/james/Master/BrightHub/Build/APSD-runs/aplio-27-a1-c/aplio-modern-1`

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