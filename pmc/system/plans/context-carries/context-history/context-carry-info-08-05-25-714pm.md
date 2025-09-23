# Development Context & Operational Priorities
**Date:** 2025-08-05 19:14 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task:** Design and create a UI-first project task list generation prompt that prioritizes visual components, user interactions, and progressive functioning application development.

**Context:** We have successfully completed two critical project deliverables:
1. **Functional Requirements**: `pmc/product/03-bmo-functional-requirements.md` - Contains comprehensive functional specifications for the BMO project
2. **UI Requirements**: `pmc/product/04-bmo-ui-FRs-built.md` - A comprehensive 2008-line document containing detailed UI functional requirements built from consolidated UI prompt files

**Current State:** We have also generated a "non-UI" task list at `pmc/product/06b-bmo-tasks-built.md` which was derived entirely from the functional requirements document using the prompt at `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md`.

**Objective:** We need to decide on the optimal approach to develop a prompt (or prompts) that will create a comprehensive UI-first task list with integrated backend functionality and mockup data. This task list must prioritize:
- Visual components and user interface elements
- User interactions and experience flows
- Progressive functioning application development at each build step
- Integration of backend tasks with frontend components
- Inclusion of mockup data for realistic development

**Decision Required:** Choose between two strategic approaches for prompt development:

**Option 1 - New Derived Prompt:**
Create a new prompt derived from `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md` that takes as input:
- `pmc/product/03-bmo-functional-requirements.md`
- `pmc/product/04-bmo-ui-FRs-built.md`

And generates a task list that:
- Prioritizes visual components, user interactions, and progressive functioning
- Integrates backend tasks with frontend development
- Includes mockup data for each task

**Option 2 - Enhanced Existing Prompt:**
Update the existing prompt `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md` to take as input:
- `pmc/product/03-bmo-functional-requirements.md`
- `pmc/product/04-bmo-ui-FRs-built.md`
- `pmc/product/06b-bmo-tasks-built.md`

And generates a task list that:
- Prioritizes visual components, user interactions, and progressive functioning
- Integrates backend tasks with frontend development
- Includes mockup data for each task
- Provides task prioritization by execution order
- Breaks down tasks into smaller, executable components

**Critical Success Factors:**
- The chosen approach must ensure UI-first development methodology
- Tasks must be structured to maintain working prototypes at each step
- Backend integration must support frontend development priorities
- Mockup data must enable realistic testing and development
- Task breakdown must be actionable and properly sequenced

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps

1. **Analyze Existing Prompt Structure** - Review `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md` to understand current prompt architecture, input handling, and output formatting
   - Dependencies: Access to existing prompt file
   - Expected Outcome: Complete understanding of current prompt capabilities and limitations

2. **Evaluate Input Document Compatibility** - Assess how well the functional requirements (`pmc/product/03-bmo-functional-requirements.md`) and UI requirements (`pmc/product/04-bmo-ui-FRs-built.md`) can be processed by the existing prompt structure
   - Dependencies: Analysis of document formats and content structure
   - Expected Outcome: Clear understanding of input processing requirements

3. **Compare Option Feasibility** - Conduct detailed analysis of Option 1 (new derived prompt) vs Option 2 (enhanced existing prompt) considering development effort, maintainability, and output quality
   - Dependencies: Completion of steps 1 and 2
   - Expected Outcome: Recommendation for optimal approach with detailed justification

4. **Design Prompt Architecture** - Create detailed specification for the chosen approach including input processing, UI-first prioritization logic, backend integration methodology, and mockup data inclusion
   - Dependencies: Decision from step 3
   - Expected Outcome: Complete prompt design specification ready for implementation

5. **Validate Approach with Sample Output** - Test the designed approach with a subset of requirements to ensure it produces the desired UI-first task structure
   - Dependencies: Completion of prompt design
   - Expected Outcome: Validated approach ready for full implementation

### Important Files

1. `pmc/product/03-bmo-functional-requirements.md` - Core functional requirements document that serves as primary input for task generation
2. `pmc/product/04-bmo-ui-FRs-built.md` - Comprehensive UI requirements document (2008 lines) containing detailed UI specifications
3. `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md` - Existing task breakdown prompt that serves as the foundation for either Option 1 or Option 2
4. `pmc/product/06b-bmo-tasks-built.md` - Previously generated non-UI task list that may be used as input for Option 2
5. `pmc/product/_tools/utility-06-concatenate-ui-FR.js` - Script used to generate the consolidated UI requirements file

### Important Scripts, Markdown Files, and Specifications

1. `pmc/product/_prompt_engineering/06a-product-task-elements-breakdown-prompt-v5.7.md` - Primary reference for understanding current prompt engineering approach
   - Key sections: Input processing logic, task breakdown methodology, output formatting
2. `pmc/product/_templates/04-ui-first-functional-requirements-prompt-template.md` - Template used in UI requirements generation process
   - Key sections: UI-first methodology, component prioritization approach
3. `pmc/product/_mapping/ui-functional-maps/prompts/` - Directory containing individual UI requirement prompt files (E01-E06)
   - Key sections: UI component specifications, interaction patterns, progressive development approach

### Recent Development Context

- **Last Milestone**: Successfully generated comprehensive UI requirements document (`pmc/product/04-bmo-ui-FRs-built.md`) containing 2008 lines of detailed UI specifications
- **Key Outcomes**: 
  - Functional requirements document completed and validated
  - UI requirements consolidated from multiple prompt files into single comprehensive document
  - Non-UI task list generated as baseline for comparison
  - Utility script created for UI requirements consolidation
- **Relevant Learnings**: 
  - UI-first approach requires different task prioritization than traditional functional-first development
  - Large consolidated documents (2000+ lines) require careful processing and chunking strategies
  - Integration of frontend and backend tasks requires explicit coordination methodology
- **Technical Context**: 
  - Project abbreviation extraction and filename generation utilities are operational
  - Prompt engineering workflow established with template-based approach
  - File consolidation and processing pipeline proven effective

Example:
Last Milestone: Implemented status transition validation
Key Outcomes: Status checks now enforce valid state sequences
Relevant Learnings: State machine pattern proved effective for validation
Technical Context: Validation logic centralized in StatusManager class

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