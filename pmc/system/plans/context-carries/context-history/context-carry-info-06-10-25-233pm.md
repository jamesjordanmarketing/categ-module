# Development Context & Operational Priorities
**Date:** 2025-06-10 14:33 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.1.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus A: New Script and Prompt for New Panel New Task

**What is being worked on:**
Create a new automation script and prompt system to streamline the "new panel new task" process for AI agents. This includes creating:
1. A new prompt file at `pmc/system/management/new-panel-new-task-prompt.md`
2. A new automation script at `pmc/system/management/new-panel-new-task.js`

**Why it is being worked on:**
To improve the efficiency of starting new coding sessions by automating the creation of timestamped new panel templates and ensuring proper file management with historical archiving.

**Current state of implementation:**
Not started - specifications have been defined and documented in this context carryover. Ready for implementation by the next agent.

**Critical context needed for continuation:**

**New Prompt Specification (`pmc/system/management/new-panel-new-task-prompt.md`):**
The prompt must instruct an AI agent to:
- Ensure it is in the pmc directory
- Copy any existing files in `pmc/system/plans/new-panels/` with patterns `new-panel-new-task-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md` or `new-panel-new-task-driver-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md` to `pmc/system/plans/new-panels/new-panel-history/`
- Run the new automation script

**New Script Specification (`pmc/system/management/new-panel-new-task.js`):**
The script must:
1. Copy `pmc/system/templates/new-panel-new-task.md` to `pmc/system/plans/new-panels/new-panel-new-task-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md`
2. Copy `pmc/system/templates/new-panel-new-task-driver.md` to `pmc/system/plans/new-panels/new-panel-new-task-driver-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md`
3. Replace variable `{{NEW_PANEL_NEW-TASK_PATH}}` in the first copied file with its actual file path
4. Replace variable `{{NEW_PANEL_NEW_TASK_DRIVER_PATH}}` in the second copied file with its actual file path

### Active Development Focus B: New Script for Test Approach and Test Discovery

**What is being worked on:**
Create a new automation script similar to the new panel script but for managing test approach and test discovery files, plus update an existing prompt to integrate this new script.

**Why it is being worked on:**
To automate the management of test approach and test discovery files with proper historical archiving and blank slate preparation for new testing cycles.

**Current state of implementation:**
Not started - specifications have been defined and documented in this context carryover. Ready for implementation by the next agent.

**Critical context needed for continuation:**

**New Script Specification (`pmc/system/management/test-approach-and-discovery.js`):**
The script must be run from the pmc directory and:
1. Copy existing `pmc/system/plans/task-approach/test-approach.md` to `pmc/system/plans/task-approach/approach-history/test-approach-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md`
2. Copy existing `pmc/system/plans/task-approach/test-discovery.md` to `pmc/system/plans/task-approach/approach-history/test-discovery-[MM-DD-YY-12-hour-Timestamp-[AM or PM]].md`
3. Clear out and make blank the current versions of both files

**Prompt Update Specification:**
Update `pmc/system/coding-prompts/03-test-conductor-prompt-v5.md` to call the new script near the beginning, before it reads `pmc/system/coding-prompts/03-test-approach-prompt-v2-beta.md`

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps

1. **Create New Panel Automation Script**
   - **Action identifier:** `pmc/system/management/new-panel-new-task.js`
   - **Brief description:** Implement the automation script that copies templates, generates timestamped filenames, and replaces path variables
   - **Dependencies or blockers:** None - templates already exist
   - **Expected outcome:** Functional script ready for integration with new prompt

2. **Create New Panel Automation Prompt**
   - **Action identifier:** `pmc/system/management/new-panel-new-task-prompt.md`
   - **Brief description:** Create prompt that instructs AI agents to use the new automation script properly
   - **Dependencies or blockers:** Completion of new automation script
   - **Expected outcome:** Complete prompt ready for AI agent use

3. **Create Test Approach Automation Script**
   - **Action identifier:** `pmc/system/management/test-approach-and-discovery.js`
   - **Brief description:** Implement script that archives existing test files and clears current versions
   - **Dependencies or blockers:** None - existing file structure is known
   - **Expected outcome:** Functional script for test file management

4. **Update Test Conductor Prompt**
   - **Action identifier:** `pmc/system/coding-prompts/03-test-conductor-prompt-v5.md`
   - **Brief description:** Integrate the new test automation script into existing test conductor workflow
   - **Dependencies or blockers:** Completion of test approach automation script
   - **Expected outcome:** Updated prompt with automated test file management

5. **Test and Validate Automation**
   - **Action identifier:** Validation testing of both new scripts and prompts
   - **Brief description:** Ensure all new automation works correctly and integrates properly
   - **Dependencies or blockers:** Completion of all scripts and prompt updates
   - **Expected outcome:** Validated automation ready for production use

### Important Files

1. **`pmc/system/templates/new-panel-new-task.md`**
   - **Purpose/role:** Template file that will be copied by the new automation script
   - **Current state:** Existing template, will be used as source for timestamped copies

2. **`pmc/system/templates/new-panel-new-task-driver.md`**
   - **Purpose/role:** Driver template file that will be copied by the new automation script
   - **Current state:** Existing template, will be used as source for timestamped copies

3. **`pmc/system/plans/task-approach/test-approach.md`**
   - **Purpose/role:** Current test approach file that will be archived and cleared by new script
   - **Current state:** Active file that needs archival management

4. **`pmc/system/plans/task-approach/test-discovery.md`**
   - **Purpose/role:** Current test discovery file that will be archived and cleared by new script
   - **Current state:** Active file that needs archival management

5. **`pmc/system/coding-prompts/03-test-conductor-prompt-v5.md`**
   - **Purpose/role:** Existing prompt that needs to be updated to integrate new test automation script
   - **Current state:** Existing prompt requiring modification

### Recent Development Context

- **Last Milestone**: Completed comprehensive Enhanced LLM Vision Analysis Results Review & Quality Assessment for T-1.3.1 Component Directory Structure Setup
- **Key Outcomes**: 
  - T-1.3.1 achieved 94% production readiness (31 of 33 component states approved)
  - All T-1.3.1 acceptance criteria validated through systematic analysis of 33 Enhanced LLM Vision Analysis reports
  - Generated comprehensive quality assessment report with specific technical recommendations
  - Identified 2 critical component issues requiring fixes (ThemeSwitcher JSX return, DashboardStats Promise handling)
  - Validated Enhanced LLM Vision Analysis infrastructure as highly effective for component validation
- **Relevant Learnings**: 
  - Enhanced LLM Vision Analysis with Claude Sonnet 4 provides excellent component quality assessment
  - Systematic review of analysis reports enables comprehensive production readiness certification
  - Component directory organization by domain and function successfully validated through visual analysis
  - Critical rendering errors can be reliably identified and documented through LLM vision analysis
- **Technical Context**: 
  - T-1.3.1 Component Directory Structure Setup is complete and certified for production
  - Final quality assessment report available at `aplio-modern-1/test/reports/T-1.3.1-Final-Quality-Assessment.md`
  - Enhanced LLM Vision Analysis methodology validated for future use
  - Ready to proceed with next development priorities focused on PMC tooling improvements

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