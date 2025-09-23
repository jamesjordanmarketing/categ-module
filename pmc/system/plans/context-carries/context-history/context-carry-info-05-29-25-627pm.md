# Development Context & Operational Priorities
**Date:** 2025-05-29 18:27 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**Fine-Tuning Testing Protocol AI Prompt Instructions**

The next agent will be working on fine-tuning and optimizing the AI prompt instructions documented in `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts.md`. This work follows the completion of a comprehensive testing system operationalization initiative that created automated prompt execution plans for generating detailed testing protocols from basic task specifications.

**Background Context:**
- Successfully executed comprehensive automated testing for Next.js application components (task T-1.1.3)
- Identified critical rate limiting issues with LLM Vision Analysis requiring 60-second delays between API calls
- Developed complete specification for hybrid mechanical script + AI agent approach to testing protocol generation
- Created detailed 11-section AI prompt execution plan with phase-based dependency management

**Current State:**
The prompt instructions document is complete with all 11 AI section prompts defined (DISCOVERED_COMPONENTS, COMPONENT_CLASSIFICATION_STRATEGY, TESTING_INFRASTRUCTURE_COMMANDS, etc.), execution phases mapped (Foundation → Infrastructure → Testing Strategies → Validation), and critical requirements documented (especially mandatory 60-second delays for LLM Vision analysis). The system achieved 100% success in component discovery, unit testing, and scaffold generation, but highlighted the need for robust API rate limiting handling.

**Why This Work is Critical:**
The testing protocol generation system represents a significant advancement in automated software testing, but the prompts need refinement to ensure consistent, reliable output across different component types and project contexts. The rate limiting issue that caused LLM Vision analysis to fail (only 1 of 7 reports generated initially) demonstrates the need for production-ready prompt engineering.

**Next Agent's Focus:**
Examine the current prompt instructions for optimization opportunities, consistency improvements, error handling enhancement, and reliability refinements. The agent will analyze the 11 AI section prompts and execution strategy for potential improvements before implementing changes.

### Next Steps 
1. **Prompt Analysis** - Review all 11 AI section prompts in the operationalize-prompts.md file for consistency, clarity, and reliability patterns
2. **Critical Section Evaluation** - Examine LLM_VISION_STRATEGY prompt (temperature=0.0) and other critical sections for robustness
3. **Execution Strategy Review** - Analyze the 4-phase execution plan (Foundation → Infrastructure → Testing Strategies → Validation) for optimization opportunities
4. **Error Handling Assessment** - Evaluate retry mechanisms, fallback content strategies, and validation criteria
5. **Rate Limiting Optimization** - Review and refine the mandatory 60-second delay implementation and other API rate limiting strategies

### Important Files
1. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts.md` - Complete AI prompt execution plan requiring fine-tuning and optimization
2. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-instructions.md` - Specification document that informed the prompt creation
3. `pmc/context-ai/chat-contexts-log/pmct/task-t-1-1-3-server-components-comprehensive-test-protocol.md` - Example testing protocol that demonstrated the system's capabilities and revealed rate limiting issues
4. `test/screenshots/t-1-1-3/` - Testing artifacts that proved the system's effectiveness (screenshots, analysis reports, scaffolds)

### Important Scripts, Markdown Files, and Specifications
1. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-prompts.md` - **PRIMARY FOCUS**: Contains 11 detailed AI section prompts needing fine-tuning
   - Key sections: Phase A (Foundation Analysis), Phase B (Infrastructure Commands), Phase C (Testing Strategies), Phase D (Validation & Documentation)
   - Critical prompt: PROMPT_LLM_VISION_STRATEGY with mandatory 60-second delays (temperature=0.0)
   - Execution strategy with sequential/parallel phase management
2. `pmc/context-ai/chat-contexts-log/pmct/update-test-system-operationalize-instructions.md` - Supporting specification with proven success patterns
   - Component discovery logic and classification strategies
   - Template structure with AI_SECTION placeholders
   - Success metrics: >95% success rate, <5% variance, <5 minutes execution time

### Recent Development Context
- **Last Milestone**: Completed comprehensive testing system operationalization with detailed AI prompt execution plan
- **Key Outcomes**: Created 11-section prompt system capable of generating complete testing protocols from basic task inputs, identified critical rate limiting requirements for LLM Vision analysis
- **Relevant Learnings**: API rate limiting requires mandatory delays (60 seconds minimum), component discovery via directory scanning is highly effective, hybrid mechanical + AI approach achieves optimal automation/flexibility balance
- **Technical Context**: Testing system achieved 100% accuracy in component discovery and classification, 14% success rate in LLM Vision analysis before rate limiting fix, complete success after implementing mandatory delays
- **Critical Requirements Discovered**: Temperature=0.0 for timing-critical prompts, sequential vs parallel execution phases, structured output validation, comprehensive error handling with retry mechanisms

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