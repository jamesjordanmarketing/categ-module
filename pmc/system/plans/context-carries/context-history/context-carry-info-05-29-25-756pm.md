# Development Context & Operational Priorities
**Date:** 2025-05-29 19:56 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**PROMPT FINE-TUNING FOR ENHANCED TEST SYSTEM OPERATIONALIZATION**

The next agent will focus on fine-tuning the AI prompts in `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_B.md` to optimize the hybrid mechanical script + AI discovery approach for automated testing protocol generation.

**What is being worked on:**
Fine-tuning four critical AI prompts that form the discovery phase of automated testing protocol generation:
1. COMPONENT_DISCOVERY_AND_CLASSIFICATION - Discovers and classifies components from active-task.md
2. TESTING_INFRASTRUCTURE_ANALYSIS - Extracts testing infrastructure requirements  
3. VALIDATION_CRITERIA_EXTRACTION - Identifies acceptance criteria and validation steps
4. VISUAL_TESTING_REQUIREMENTS - Determines visual testing strategy requirements

**Why it is being worked on:**
The current session completed a comprehensive Enhanced Test System Operationalization Specification that defines a proven hybrid approach (mechanical template population + AI discovery) based on successful T-1.1.3 implementation patterns. The prompts need refinement to ensure 100% component discovery accuracy, proper template variable population, and reliable execution with rate limiting considerations.

**Current state of implementation:**
- Enhanced Test System Operationalization Specification completed in `update-test-system-operationalize-instructions_B.md`
- Initial prompt definitions exist in `update-test-system-operationalize-prompts_B.md` 
- System architecture validated through successful T-1.1.3 testing protocol execution
- Template structure defined with mechanical and AI-discovered variables
- Integration points with start-task command specified

**Critical context needed for continuation:**
- T-1.1.3 success patterns: 100% component discovery, proper server/client classification, 60-second rate limiting for LLM Vision
- Hybrid architecture: AI handles inference, mechanical scripts handle formatting/execution  
- Four-prompt sequential execution requirement (discovery builds context)
- Template variables dependency mapping between prompts and mechanical processing
- Rate limiting requirements for production API usage

### Next Steps 

1. **Prompt Analysis Phase**: Examine current prompt instructions in `update-test-system-operationalize-prompts_B.md` for clarity, specificity, and alignment with template variables
   - Dependencies: Enhanced specification document provides context
   - Expected outcome: Identification of prompt improvement opportunities

2. **Prompt Optimization**: Refine prompts for better component discovery accuracy, proper JSON output formatting, and template variable alignment
   - Dependencies: Analysis phase completion
   - Expected outcome: Optimized prompts with improved reliability and accuracy

3. **Testing Integration Validation**: Ensure refined prompts integrate properly with mechanical template population system
   - Dependencies: Optimized prompts completion
   - Expected outcome: Validated prompt-to-template variable mapping

4. **Documentation Update**: Update Enhanced Test System Operationalization Specification with finalized prompt improvements
   - Dependencies: All previous phases complete
   - Expected outcome: Complete specification ready for mechanical script implementation

### Important Files

1. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts_B.md** - Primary prompts document for fine-tuning
2. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-instructions_B.md** - Complete specification with template structure and integration requirements  
3. **pmc/core/active-task-unit-tests-2.md** - Proven T-1.1.3 testing protocol that validates the approach
4. **pmc/system/templates/enhanced-active-task-test-template.md** - Template structure requiring AI-discovered variable population

### Important Scripts, Markdown Files, and Specifications

1. **pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-instructions_B.md** - Complete Enhanced Test System Operationalization Specification
   - Key sections: AI Discovery Phase, Template Variables, Mechanical Script Implementation
   - Purpose: Provides complete context for prompt optimization decisions

2. **pmc/core/active-task-unit-tests-2.md** - Validated T-1.1.3 testing protocol  
   - Key sections: Phase 4 LLM Vision Analysis with rate limiting, component discovery patterns
   - Purpose: Reference for proven implementation patterns and success metrics

3. **pmc/system/management/context-manager-v2.js** - Target integration point
   - Key sections: Enhanced Start Task Function for testing protocol generation
   - Purpose: Shows where optimized prompts will be integrated into PMC workflow

### Recent Development Context

- **Last Milestone**: Completed Enhanced Test System Operationalization Specification defining hybrid mechanical script + AI discovery approach for automated testing protocol generation
- **Key Outcomes**: 
  - Validated four-prompt discovery architecture based on T-1.1.3 success patterns
  - Defined complete template structure with mechanical and AI-discovered variables
  - Specified integration with start-task command for automatic protocol generation
  - Documented critical rate limiting requirements (60-second delays for LLM Vision)
- **Relevant Learnings**: 
  - T-1.1.3 achieved 100% component discovery accuracy using directory scanning + file analysis
  - Sequential AI execution prevents context loss between discovery prompts  
  - Mechanical template population via string replacement provides high reliability
  - Rate limiting is critical for LLM Vision API stability (proven through T-1.1.3 execution)
- **Technical Context**: 
  - Template variables mapped to specific AI prompt outputs
  - Conditional content blocks for visual testing requirements
  - Bash array formatting for component iteration in generated tests
  - Error recovery and fallback mechanisms specified for production resilience

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