# Development Context & Operational Priorities
**Date:** 2025-05-27 23:39 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Operationalizing Enhanced AI Testing Agent Instructions for PMC Integration**

**What is being worked on:**
We need to operationalize the comprehensive AI testing agent instructions found in `pmc/core/active-task-unit-tests-qa-agent-visual-v7.md` by creating a new PMC template that integrates these instructions into the PMC task management system. This will enable the PMC `start-task` command to automatically generate comprehensive testing specifications based on the Enhanced LLM Vision Analyzer system.

**Why it is being worked on:**
The Enhanced LLM Vision Analyzer system has been successfully implemented and documented, but the testing instructions in `active-task-unit-tests-qa-agent-visual-v7.md` are currently standalone. To make this testing capability accessible through PMC's standard workflow, we need to integrate it into the template system so tasks can automatically include comprehensive visual testing specifications.

**Current state of implementation:**
1. ✅ **Completed**: Enhanced LLM Vision Analyzer (`aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`) with task context integration
2. ✅ **Completed**: Comprehensive AI testing agent instructions (`pmc/core/active-task-unit-tests-qa-agent-visual-v7.md`) with Enhanced LLM Vision Analyzer integration  
3. ✅ **Completed**: Tutorial documentation updated (`pmc/docs/stm-5a/testing-system-operations-tutorial-v6.md`) with proper command line interface
4. 🔄 **Next**: Create new template for PMC integration based on the visual testing instructions
5. 🔄 **Next**: Update PMC `start-task` command to use the new template for enhanced testing tasks

**Critical context needed for continuation:**
- The Enhanced LLM Vision Analyzer provides task-aware validation by loading current task requirements from `pmc/core/active-task.md`
- The system uses dual validation: standard UI validation + task-contextualized validation to eliminate false negatives
- Command line interface: `node test/utils/vision/enhanced-llm-vision-analyzer.js <component-name>`
- All legacy npm vision commands have been replaced with direct Enhanced LLM Vision Analyzer usage
- The testing instructions include comprehensive retry logic and fix/test/analyze cycles for autonomous operation

### Next Steps 
1. **Create enhanced testing template** (`pmc/system/templates/active-task-test-template-enhanced.md`):
   - Base template on `active-task-unit-tests-qa-agent-visual-v7.md` structure and content
   - Add PMC template variables for task ID, components, and configuration
   - Include Enhanced LLM Vision Analyzer command line interface
   - Integrate comprehensive testing phases with retry logic
   - Expected outcome: New template ready for PMC integration

2. **Update start-task command** in `pmc/system/management/context-manager-v2.js`:
   - Add logic to detect when enhanced testing is needed
   - Integrate new template into existing template selection
   - Update template processing to handle enhanced testing variables
   - Dependencies: Enhanced testing template must be created first
   - Expected outcome: PMC can generate enhanced testing specifications automatically

3. **Test PMC integration** with enhanced testing template:
   - Run `start-task` command with enhanced testing template
   - Verify all template variables are properly replaced
   - Validate generated testing instructions match visual testing requirements
   - Dependencies: Both template and start-task updates must be complete
   - Expected outcome: Full integration working correctly

4. **Document integration** in PMC system documentation:
   - Update command reference with enhanced testing options
   - Document when to use enhanced vs standard testing templates
   - Add examples of generated enhanced testing specifications
   - Expected outcome: Clear guidance for PMC users on enhanced testing capabilities

5. **Validate with real task** using T-1.1.3 as test case:
   - Generate enhanced testing spec for T-1.1.3 using new template
   - Execute Enhanced LLM Vision Analyzer on T-1.1.3 components
   - Verify task context integration works correctly
   - Dependencies: All previous steps completed
   - Expected outcome: End-to-end validation of enhanced testing integration

### Important Files
1. **pmc/core/active-task-unit-tests-qa-agent-visual-v7.md** - Source AI testing agent instructions with Enhanced LLM Vision Analyzer integration (current state: complete)
2. **pmc/system/management/context-manager-v2.js** - PMC start-task command implementation (lines 2233+ contain startTaskV2 function)
3. **pmc/system/templates/active-task-test-template.md** - Current basic testing template for reference (current state: basic template without enhanced features)
4. **aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js** - Enhanced LLM Vision Analyzer implementation (current state: working with command line interface)
5. **pmc/docs/stm-5a/testing-system-operations-tutorial-v6.md** - Updated tutorial documentation (current state: updated with Enhanced LLM Vision Analyzer usage)

### Important Scripts, Markdown Files, and Specifications
1. **pmc/core/active-task-unit-tests-qa-agent-visual-v7.md** - Complete AI testing agent instructions including:
   - Comprehensive testing phases (Pre-Testing Setup, Unit Testing, React SSR, Visual Testing, LLM Vision Analysis, Validation & Reporting)
   - Enhanced LLM Vision Analyzer command line usage: `node test/utils/vision/enhanced-llm-vision-analyzer.js <component>`
   - Fix/test/analyze cycle implementation with retry logic
   - Task context integration for T-1.1.3 Server Component Implementation
   - Success criteria and quality gates
   - Autonomous execution commands with comprehensive error handling

2. **pmc/system/templates/active-task-test-template.md** - Current template structure showing:
   - Template variable system ({{TASK_ID}}, {{TASK_TITLE}}, etc.)
   - Section organization and content placeholders
   - Test environment setup patterns
   - Coverage reporting structure

3. **pmc/system/management/context-manager-v2.js** - Key sections to review:
   - Lines 2233+: `startTaskV2` function for task initialization
   - Lines 1921+: `processTemplateV2` function for template variable replacement
   - Template paths configuration in PATHS object (lines 60+)
   - Template processing and file generation logic

### Recent Development Context
- **Last Milestone**: Successfully implemented and documented Enhanced LLM Vision Analyzer with task context integration
- **Key Outcomes**: 
  - Enhanced analyzer provides 95%+ confidence task-aware validation by evaluating components against actual task requirements
  - Command line interface working: `node test/utils/vision/enhanced-llm-vision-analyzer.js <component>`
  - Comprehensive AI testing agent instructions complete with retry logic and autonomous operation
  - Tutorial documentation updated with proper usage examples
- **Relevant Learnings**: 
  - Task context integration eliminates false negatives by evaluating against development context rather than production UI standards
  - Direct command line interface more reliable than npm script wrappers
  - Template-based approach in PMC allows systematic integration of enhanced capabilities
- **Technical Context**: 
  - Enhanced analyzer loads task context from `pmc/core/active-task.md`
  - Template variables in PMC follow {{VARIABLE_NAME}} format
  - Start-task command processes templates through `processTemplateV2` function

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

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