# Development Context & Operational Priorities
**Date:** 2025-06-11 21:41 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 4.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**Primary Task**: Implementation of New PMC Command - `test-approach`

**What is being worked on**: Development of a new command for the Project Memory Core system that will enable automated updating of test approach documentation in active task files. This command mirrors the existing `task-approach` command but operates specifically on test files.

**Why it is being worked on**: The PMC system currently has a `task-approach` command that updates implementation approaches in `active-task.md`, but lacks an equivalent command for test approaches in `active-task-unit-tests-2.md`. This creates an asymmetry in the system where implementation approaches can be easily updated but test approaches require manual editing. The new `test-approach` command will complete this functionality gap and provide consistent workflow patterns for both implementation and testing phases.

**Current state of implementation**: 
- **ANALYSIS PHASE COMPLETE**: Comprehensive analysis of existing `task-approach` command functionality completed
- **SPECIFICATION PHASE COMPLETE**: Detailed implementation specification created and documented in `pmc/context-ai/chat-contexts-log/pmct/test-approach-command.md`
- **IMPLEMENTATION PHASE PENDING**: Ready for coding implementation by next agent

**Critical context needed for continuation**:
1. **Target File**: `pmc/system/management/context-manager-v3.js` (NOT context-manager.js or context-manager-v2.js)
2. **Reference Implementation**: Existing `updateTaskApproach()` function in `context-manager-v2.js` (lines 382-550)
3. **Source File**: `pmc/system/plans/task-approach/current-test-approach.md`
4. **Target File**: `pmc/core/active-task-unit-tests-2.md` (Test Approach section)
5. **Key Requirement**: Dynamic section finding (NOT line-number dependent)
6. **Key Requirement**: Change "Overview" to "Test Approach Overview" in copied content
7. **Key Requirement**: Add command documentation to COMMANDS SUPPORTED section in file header

### Next Steps 

1. **STEP 1: Implement test-approach command** 
   - Action: Code the complete test-approach command in context-manager-v3.js
   - Dependencies: Detailed specification in `pmc/context-ai/chat-contexts-log/pmct/test-approach-command.md`
   - Expected outcome: Fully functional test-approach command with CLI integration

2. **STEP 2: Test command functionality**
   - Action: Validate test-approach command works correctly with real files
   - Dependencies: Step 1 completion
   - Expected outcome: Verified command copies content correctly and archives properly

3. **STEP 3: Integration validation**
   - Action: Ensure existing commands in context-manager-v3.js still function
   - Dependencies: Step 2 completion  
   - Expected outcome: No regression in existing PMC functionality

### Important Files

1. **pmc/context-ai/chat-contexts-log/pmct/test-approach-command.md**
   - Purpose: Complete implementation specification for test-approach command
   - Current state: Finalized specification with 6-step implementation plan

2. **pmc/system/management/context-manager-v3.js**
   - Purpose: Target file for new test-approach command implementation
   - Current state: Contains existing updatePhaseStage and testPromptBuild commands

3. **pmc/system/management/context-manager-v2.js**
   - Purpose: Reference implementation containing updateTaskApproach function (lines 382-550)
   - Current state: Working reference for implementation patterns

4. **pmc/system/plans/task-approach/current-test-approach.md**
   - Purpose: Source file containing test approach content to be copied
   - Current state: Contains structured test approach with Overview, Testing Strategy, Key Considerations sections

5. **pmc/core/active-task-unit-tests-2.md**
   - Purpose: Target file where Test Approach section will be updated
   - Current state: Contains placeholder Test Approach section to be replaced

6. **pmc/bin/aplio-agent-cli.js**
   - Purpose: CLI interface requiring integration of new test-approach command
   - Current state: Needs import statement and switch case addition for test-approach

### Important Scripts, Markdown Files, and Specifications

1. **pmc/context-ai/chat-contexts-log/pmct/test-approach-command.md**
   - Purpose: Complete implementation specification with detailed step-by-step instructions
   - Key sections: 
     - Executive Summary (lines 11-18)
     - Current Implementation Analysis (lines 22-85)
     - Detailed Implementation Plan (lines 89-400+)
     - Implementation Checklist (lines 450+)
     - Success Criteria (lines 500+)

### Recent Development Context

- **Last Milestone**: Completed comprehensive analysis of existing task-approach command and created detailed specification for test-approach command implementation
- **Key Outcomes**: 
  - Identified exact operational requirements for test-approach command
  - Created 6-step implementation plan with complete code examples
  - Established safety requirements to prevent breaking existing functionality
  - Documented dynamic section finding requirements (no line number dependencies)
- **Relevant Learnings**: 
  - Context-manager-v3.js uses ES modules and different patterns than v2
  - Test approach content requires "Overview" → "Test Approach Overview" transformation
  - Command documentation must be added to file header COMMANDS SUPPORTED section
- **Technical Context**: 
  - Implementation must use context-manager-v3.js (NOT v2 or original)
  - All file operations must use dynamic regex pattern matching
  - Function exports and CLI integration follow established patterns
  - Archive functionality uses same timestamp format as existing commands

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Project Memory Core (PMC) System

#### Core Functionality
PMC is a structured modern software development task management and context retention system built around the main active task file as its central operational component. PMC is product agnostic. In this instance we are using it to code the Aplio Design System Modernization (aplio-mod-1) system. The system provides:

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
- The lean context manager script: `pmc/system/management/context-manager-v3.js` (for specialized commands)

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