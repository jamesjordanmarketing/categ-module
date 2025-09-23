# Development Context & Operational Priorities
**Date:** 2025-05-30 00:15 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**ENHANCED TEST SYSTEM OPERATIONALIZATION - MECHANICAL IMPLEMENTATION**

The next agent will implement the Enhanced Test System Operationalization mechanical foundation as specified in `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-build-spec.md`. This implementation creates the hybrid mechanical script + AI discovery system that automatically generates comprehensive testing protocols from active task instructions.

**What is being worked on:**
Implementation of the mechanical foundation for automated testing protocol generation, including:
1. Enhanced active-task-test-template.md with AI discovery placeholder support
2. Updated startTaskV2 function with new template variable extraction logic
3. Structured output storage for future AI discovery results
4. Template population system that handles diverse Next.js 14 task types

**Why it is being worked on:**
The current PMC system lacks automated testing protocol generation. The previous session completed comprehensive prompt fine-tuning and created detailed implementation specifications. This mechanical foundation will enable PMC to automatically generate testing protocols for any task type, improving development efficiency and test coverage consistency across the Aplio modernization project.

**Current state of implementation:**
- Enhanced prompt specifications completed in version C (update-test-system-operationalize-prompts_C.md)
- Complete implementation specification created (update-test-system-operationalize-build-spec.md)
- Analysis of diverse task types completed (T-1.1.3, T-1.1.4, T-2.5.4, T-4.2.1, T-5.5.1, T-5.5.2)
- Architecture flow corrected to: active-task.md → [AI Discovery Phase] → current-test-approach.md → [Mechanical Template Population] → active-task-unit-tests-2.md
- Template variable mapping and placeholder system designed

**Critical context needed for continuation:**
- Implementation must preserve existing PMC start-task functionality while adding enhanced capabilities
- Template supports diverse Next.js 14 task types: Visual Components, Infrastructure, System Architecture, API Integration
- AI discovery placeholders prepare for future integration without requiring AI prompts initially
- Mechanical template population uses exact code snippets provided in build specification
- Template variables include both existing ({{TASK_ID}}, {{TASK_TITLE}}) and new enhanced variables ({{PRIMARY_TESTING_FOCUS}}, {{TESTABLE_ELEMENTS_CONTENT}})

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
[CONDITIONAL: Include ONLY if there is an active action in progress. Must include:
1. Task ID and title
2. Current phase (Preparation/Implementation/Validation)
3. Active element being worked on
4. Last recorded action
Remove section if no active action.]

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps 

1. **Phase 1: Enhanced Template Creation**
   - Action: Replace `pmc/system/templates/active-task-test-template.md` with enhanced version
   - Dependencies: Use exact template structure from build specification Task 1.3
   - Expected outcome: Enhanced template supports diverse Next.js 14 task types with AI discovery placeholders

2. **Phase 2: Context Manager Enhancement** 
   - Action: Add three new functions to `pmc/system/management/context-manager-v2.js` before startTaskV2
   - Dependencies: Use exact function code from build specification Task 2.2
   - Expected outcome: extractPrimaryTestingFocus, generateTestingToolsVerification, generateAIDiscoveryPlaceholders functions ready

3. **Phase 3: Template Population Enhancement**
   - Action: Update generateActiveTaskTestContentV2 function with new template variables
   - Dependencies: Complete Phase 2, use exact code from build specification Task 2.3
   - Expected outcome: Enhanced template variables populate correctly in active-task-unit-tests-2.md

4. **Phase 4: AI Discovery Storage Setup**
   - Action: Create directory structure and initial current-test-approach.md file
   - Dependencies: Use exact structure from build specification Task 3.1-3.2
   - Expected outcome: Storage location ready for future AI discovery results

5. **Phase 5: Implementation Validation**
   - Action: Test start-task command with T-1.1.3 and validate all template variables populate correctly
   - Dependencies: Complete Phases 1-4, use validation procedures from build specification Task 4.1-4.3
   - Expected outcome: Enhanced testing protocols generate successfully, system ready for AI discovery integration

### Important Dependencies
[CONDITIONAL: Include ONLY if there are critical dependencies for the next steps. Each dependency must specify:
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

1. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-build-spec.md** - Complete implementation specification with exact code snippets and step-by-step instructions
2. **pmc/system/templates/active-task-test-template.md** - Current template to be replaced with enhanced version
3. **pmc/system/management/context-manager-v2.js** - Contains startTaskV2 function requiring enhancement (around line 2232)
4. **pmc/core/active-task-unit-tests-2.md** - Current output file that will be enhanced with new template structure
5. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_C.md** - Enhanced AI prompts (for future integration reference)

### Important Scripts, Markdown Files, and Specifications

1. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-build-spec.md** - PRIMARY IMPLEMENTATION DOCUMENT
   - Key sections: All phases (1-4) contain exact implementation requirements
   - Purpose: Complete step-by-step coding instructions with exact code snippets
   - Usage: Follow exactly as specified, do not deviate from provided code

2. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-instructions_C.md** - Architecture specification 
   - Key sections: AI Discovery Phase, Mechanical Template Population Phase, Integration points
   - Purpose: Provides architectural context and template variable mapping logic
   - Usage: Reference for understanding system design and integration patterns

3. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_C.md** - AI prompt specifications
   - Key sections: All 4 AI prompts with structured output locations
   - Purpose: Defines future AI discovery integration (not implemented yet)
   - Usage: Reference for understanding AI discovery system design

### Recent Development Context

- **Last Milestone**: Completed Enhanced Test System Operationalization specification including prompt fine-tuning and detailed implementation specification
- **Key Outcomes**: 
  - Created version C prompts that handle diverse Next.js 14 task types (Visual Components, Infrastructure, System Architecture, API Integration)
  - Corrected architecture flow to use active-task-unit-tests-2.md as final output (not enhanced-testing-protocol.md)
  - Developed comprehensive build specification with exact code snippets and implementation phases
  - Analyzed 6 diverse task types to ensure template flexibility (T-1.1.3, T-1.1.4, T-2.5.4, T-4.2.1, T-5.5.1, T-5.5.2)
- **Relevant Learnings**: 
  - "Components" expanded to "testable elements" to cover React components, utility functions, infrastructure files, and type definitions
  - Mechanical template population is more reliable than AI-generated test content for production use
  - Sequential AI execution with structured output storage enables context building between discovery phases
  - Template placeholder system allows graceful degradation when AI discovery hasn't run yet
- **Technical Context**: 
  - Enhanced template uses both existing variables ({{TASK_ID}}, {{TASK_TITLE}}) and new variables ({{PRIMARY_TESTING_FOCUS}}, {{TESTABLE_ELEMENTS_CONTENT}})
  - Three new functions required in context-manager-v2.js: extractPrimaryTestingFocus, generateTestingToolsVerification, generateAIDiscoveryPlaceholders
  - AI discovery results stored in pmc/system/plans/task-approach/current-test-approach.md
  - System designed for backwards compatibility with existing PMC workflows

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