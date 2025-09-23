# Development Context & Operational Priorities
**Date:** 2025-06-02 21:30 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**PRIMARY OBJECTIVE**: Fine-tune and refine the prompt instructions in the PMC Testing System V2 Add-On Specification to ensure the next coding agent can successfully complete the 95% missing functionality.

**CURRENT STATE**: The PMC Testing System V2 implementation has been completed to ~5% functionality. A comprehensive add-on specification has been created that identifies all critical gaps and provides implementation requirements. However, the specification prompts need examination and refinement to ensure optimal clarity and execution success.

**WHAT WAS ACCOMPLISHED IN PREVIOUS SESSION**:

1. **PMC Testing System V2 Partial Implementation** - Successfully created:
   - Enhanced template structure (`pmc/system/templates/active-task-test-template-2.md`)
   - Context manager enhancements (`pmc/system/management/context-manager-v2.js`)
   - CLI integration (`pmc/bin/aplio-agent-cli.js`) with `start-task-v2` commands
   - Basic multi-phase testing protocol framework

2. **Critical Gap Analysis** - Discovered 95% of functionality was missing:
   - Complete Phase 0 infrastructure setup (directory creation, server management, dependencies)
   - Complete Phase 1 unit testing (Jest integration, test file generation, component classification)
   - Complete Phase 2 component discovery (React SSR scaffolding, component validation)
   - Complete Phase 3 visual testing (screenshot capture, boundary validation)
   - Complete Phase 4 LLM Vision analysis (AI-powered content verification)
   - Complete Phase 5 validation & reporting (results compilation, human-readable reports)
   - All legacy reference integration and template variable systems

3. **Comprehensive Add-On Specification Created** - Document: `pmc/context-ai/chat-contexts-log/pmct/update-test-system-testing-version-2-spec-add-on.md`
   - **COMPLETE** line-by-line analysis of 717-line original manual
   - **COMPLETE** identification of all missing testing scripts, pseudo code patterns, and validation commands
   - **COMPLETE** implementation tasks with priority matrix
   - **COMPLETE** success criteria for 100% functional parity

4. **Implementation Documentation** - Created:
   - Complete implementation results: `pmc/system/plans/context-carries/pmc-testing-system-v2-implementation-complete.md`
   - Quick reference guide: `pmc/system/plans/context-carries/pmc-testing-v2-quick-reference.md`

**WHY THIS FOCUS**: The next coding agent needs clear, executable instructions to complete the content migration of 717 lines from the original manual to the template. The current add-on specification contains all necessary information but may need refinement for optimal execution.

**CRITICAL UNDERSTANDING**: This is a **COMPLETE CONTENT MIGRATION** project, not a structural enhancement. 95% of actual testing functionality is missing and must be brought over from the original manual with proper template variable replacement.

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps 

1. **Examine Add-On Specification Prompts** - Review `pmc/context-ai/chat-contexts-log/pmct/update-test-system-testing-version-2-spec-add-on.md` for clarity, completeness, and actionability

2. **Ask Clarifying Questions** - Identify any ambiguities or missing guidance in the specification that could lead to implementation failures

3. **Refine Implementation Instructions** - Improve prompts to ensure the next coding agent understands the scope and approach correctly

4. **Validate Success Criteria** - Ensure success indicators are clear and measurable

5. **Prepare for Handoff** - Create refined specification ready for execution by the next coding agent

### Important Files

**PRIMARY SPECIFICATION**:
- `pmc/context-ai/chat-contexts-log/pmct/update-test-system-testing-version-2-spec-add-on.md` - **CRITICAL** - Contains all gap analysis and implementation requirements

**SOURCE CONTENT TO MIGRATE**:
- `pmc/core/active-task-unit-tests-2-original-manual.md` - **COMPLETE** - 717-line source file containing all testing functionality that must be converted to template format

**CURRENT INCOMPLETE IMPLEMENTATION**:
- `pmc/system/templates/active-task-test-template-2.md` - **INCOMPLETE** - Template with only basic structure (5% complete)
- `pmc/system/management/context-manager-v2.js` - **FUNCTIONAL** - Enhanced functions for V2 system
- `pmc/bin/aplio-agent-cli.js` - **FUNCTIONAL** - CLI integration complete

**TESTING INFRASTRUCTURE DOCUMENTATION**:
- `pmc/docs/stm-5a/testing-system-operations-tutorial-v6.md` - **REFERENCE** - Complete testing system operations guide

**IMPLEMENTATION RESULTS**:
- `pmc/system/plans/context-carries/pmc-testing-system-v2-implementation-complete.md` - **COMPLETE** - Documentation of what was implemented
- `pmc/system/plans/context-carries/pmc-testing-v2-quick-reference.md` - **COMPLETE** - User guide for V2 system

### Important Scripts, Markdown Files, and Specifications

**ORIGINAL SPECIFICATION (EXECUTED)**:
- `pmc/context-ai/chat-contexts-log/pmct/update-test-system-testing-version-2-spec.md` - **COMPLETE** - Original specification that was executed to create basic structure

**ADD-ON SPECIFICATION (TO BE REFINED)**:
- `pmc/context-ai/chat-contexts-log/pmct/update-test-system-testing-version-2-spec-add-on.md` - **REQUIRES REFINEMENT** - Critical gaps analysis and implementation requirements

**REFERENCE DOCUMENTATION**:
- `pmc/product/07b-task-aplio-mod-1-testing-built.md` - **REFERENCE** - Task specifications with legacy references
- `pmc/product/06b-aplio-mod-1-tasks-built.md` - **REFERENCE** - Task build definitions

**KEY SECTIONS TO REVIEW IN ADD-ON SPECIFICATION**:
1. **Critical Gaps Analysis** (lines 29-331) - Comprehensive analysis of missing functionality
2. **Required Implementation Tasks** (lines 368-400) - Specific implementation requirements  
3. **Implementation Priority** (lines 402-417) - Priority matrix for systematic completion
4. **Success Criteria** (lines 419-441) - Validation requirements for completion
5. **Critical Message for Next Coding Agent** (lines 458-531) - Instructions and scope understanding

### Recent Development Context

- **Last Milestone**: PMC Testing System V2 specification executed with partial implementation (5% functionality)
- **Key Outcomes**: 
  - Identified that original implementation missed 95% of actual testing content
  - Created comprehensive gap analysis of all missing functionality
  - Established working CLI integration and enhanced function framework
  - Generated complete add-on specification for content migration
- **Relevant Learnings**: 
  - This is a content migration project, not a structural enhancement project
  - The 717-line original manual contains sophisticated testing infrastructure that must be preserved
  - Template variable replacement is critical for task-agnostic functionality
  - Logical flow preservation is more important than rigid structure preservation
- **Technical Context**: 
  - V2 CLI commands (`start-task-v2`, `start-task-enhanced`) are functional
  - Enhanced context manager functions are operational
  - Template structure exists but needs complete content population
  - All infrastructure for content migration is in place

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

##### Enhanced V2 Start Task
```bash
node pmc/bin/aplio-agent-cli.js start-task-v2 "T-EXAMPLE.1.1"
node pmc/bin/aplio-agent-cli.js start-task-enhanced "T-EXAMPLE.1.1"
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