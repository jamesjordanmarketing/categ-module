# Development Context & Operational Priorities
**Date:** 2025-05-30 22:25 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Objective**: Execute Test Prompts Operationalization Build Specification  
**Priority**: High - Critical PMC System Enhancement
**Phase**: Implementation Ready

**What is being worked on**: 
Implementation of customized test prompts that reduce LLM cognitive load by extracting specific data from active task files and populating prompt templates with task-specific information. This builds upon the recently completed Enhanced Test System Operationalization.

**Why it is being worked on**:
The Enhanced Test System (completed this session) provided improved testing protocols but still requires LLM agents to process large amounts of generic prompt content. The prompt operationalization will create task-specific, customized prompts that reduce cognitive load and improve testing accuracy by providing contextually relevant, pre-populated prompts.

**Current state of implementation**:
- **COMPLETED**: Enhanced Test System Operationalization (Build Spec executed successfully)
  - Enhanced template with AI discovery placeholders implemented
  - Context Manager V2 updated with new functions and template variables
  - Fixed duplicate section headers and versioning consistency
  - Template now writes to `active-task-unit-tests-2.md` correctly
- **COMPLETED**: Test Prompts Operationalization Build Specification created
  - Comprehensive 3-phase implementation plan defined
  - Variable extraction system specified
  - Command integration requirements detailed
- **READY FOR EXECUTION**: Specification document completed and ready for implementation

**Critical context needed for continuation**:
1. **Foundation System**: The Enhanced Test System provides the infrastructure that the prompt operationalization will build upon
2. **Source Prompts**: Original prompts are in `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_C.md`
3. **Implementation Strategy**: Must maintain the 4 main prompt categories while adding task-specific customization
4. **Technical Constraint**: Only mechanically extractable data from core files - no manual prompt construction

### Next Steps

1. **Execute Prompt Operationalization Specification** (Priority: 1)
   - File: `pmc/context-ai/chat-contexts-log/pmct/update-test-prompts-operationalize-build-spec.md`
   - Dependencies: Enhanced Test System (completed), existing prompts in prompts_C.md
   - Expected outcome: Customized prompt generation system operational

2. **Phase 1: Analyze and refactor existing prompts** (Priority: 2)
   - Create: `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_D.md`
   - Dependencies: Original prompts in prompts_C.md, understanding of extractable variables
   - Expected outcome: Prompts enhanced with task-specific variables

3. **Phase 2: Create prompt template system** (Priority: 3)
   - Create: `pmc/system/templates/active-task-test-prompts-template.md`
   - Dependencies: Completed Phase 1 prompts
   - Expected outcome: Reusable template with variable placeholders

4. **Phase 3: Implement Context Manager V3** (Priority: 4)
   - Create: `pmc/system/management/context-manager-v3.js`
   - Dependencies: Template system, variable extraction logic
   - Expected outcome: `test-prompt-build` command functional

5. **Validation and Testing** (Priority: 5)
   - Test with existing task data (T-1.1.3, T-2.5.4)
   - Dependencies: All phases complete
   - Expected outcome: Customized prompts generated successfully

### Important Files

1. `pmc/context-ai/chat-contexts-log/pmct/update-test-prompts-operationalize-build-spec.md`
   - Purpose: Complete implementation specification for current objective
   - Current state: Newly created, comprehensive, ready for execution

2. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_C.md`
   - Purpose: Source prompts to be refactored and enhanced
   - Current state: Contains original 4 prompts requiring customization

3. `pmc/system/templates/active-task-test-template-2.md`
   - Purpose: Enhanced testing protocol template (foundation system)
   - Current state: Recently updated with AI discovery placeholders and enhanced variables

4. `pmc/system/management/context-manager-v2.js`
   - Purpose: Enhanced context management functions (foundation system)
   - Current state: Recently updated with new template functions and variable extraction

5. `pmc/core/active-task-unit-tests-2.md`
   - Purpose: Current test protocol output (foundation system)
   - Current state: Successfully generating enhanced protocols with fixed duplicate headers

### Important Scripts, Markdown Files, and Specifications

1. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-build-spec.md`
   - Purpose: Previously executed build specification for Enhanced Test System
   - Key sections: Implementation phases, template enhancements, function specifications
   - Status: Successfully executed and validated

2. `pmc/context-ai/chat-contexts-log/pmct/update-test-prompts-operationalize-build-spec.md`
   - Purpose: Current objective specification for Prompt Operationalization
   - Key sections: 
     - Phase 1: Prompt Analysis and Redesign
     - Phase 2: Template Creation 
     - Phase 3: Context Manager V3 Implementation
     - Variable Extraction Specification
     - Function Implementation Requirements

### Recent Development Context

- **Last Milestone**: Enhanced Test System Operationalization Successfully Completed
- **Key Outcomes**: 
  - Template system enhanced with AI discovery placeholders
  - Variable extraction system operational for basic template population
  - Testing protocol generation working correctly with task-specific data
  - Fixed duplicate section headers and versioning consistency issues
- **Relevant Learnings**: 
  - Mechanical extraction approach proved effective for template customization
  - Template variable system is robust and extensible
  - Context manager pattern scales well for additional functionality
  - Validation and testing critical for identifying formatting issues
- **Technical Context**: 
  - Context Manager V2 contains enhanced functions for template processing
  - Template system uses `{{VARIABLE_NAME}}` placeholder format
  - Enhanced functions: `extractPrimaryTestingFocus`, `generateTestingToolsVerification`, `generateAIDiscoveryPlaceholders`
  - File versioning pattern established (`-2` suffix for enhanced versions)

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