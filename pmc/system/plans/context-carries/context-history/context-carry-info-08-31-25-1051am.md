# Development Context & Operational Priorities
**Date:** 2025-08-31 10:51 PST
**Project:** Bright Run LoRA Training Data Platform (bmo) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run LoRA Training Data Platform**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

### What Problem Does This Product Solve?

Small business owners and domain experts possess invaluable proprietary knowledge—from marketing philosophies to operational processes—but face insurmountable barriers in transforming this knowledge into LoRA ready training data.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task**: Template Integration for Automated User Journey Generation System

**Objective**: Make the enhanced user journey prompt template and output specification work correctly with the existing JavaScript automation tool to enable systematic generation of stage-specific user journey documents.

**What is being worked on**:
1. Ensuring `pmc\product\_prompt_engineering\03.5-user-journey-stages-prompt-template_v9-version-e.md` functions as a proper template with the JavaScript tool
2. Validating that `pmc\product\_mapping\02-user-journeys\03.5-user-journey-E02-output-e.md` serves as the correct output specification
3. Integrating both files with `pmc\product\_tools\02-generate-user-journey-prompt-segments_v2.js` for automated generation

**Why it is being worked on**:
- The enhanced prompt template (Version E) incorporates hybrid acceptance criteria, cross-stage integration, and comprehensive quality validation frameworks
- These enhancements need to be accessible through the existing automation tooling to enable efficient generation of user journey documents for all 6 stages
- Manual prompt generation is inefficient and error-prone when working across multiple stages

**Current state of implementation**:
- Enhanced prompt template (Version E) exists with [STAGE] variables but needs full integration validation
- Output specification (E02-output-e.md) demonstrates the enhanced format and quality standards
- JavaScript tool exists but integration compatibility needs verification and potential updates
- Output directories and file naming conventions should remain unchanged

**Critical context needed for continuation**:
- The prompt template already includes stage variables like [STAGE] but full variable mapping compatibility with the JavaScript tool needs verification
- The enhanced template includes hybrid acceptance criteria approach (user experience + technical requirements) that must be preserved in automated generation
- Cross-stage integration requirements and quality validation frameworks are new features that need to work with the automation system

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps 

1. **Analyze JavaScript Tool Requirements**: `pmc\product\_tools\02-generate-user-journey-prompt-segments_v2.js`
   - Review current variable mapping and templating approach
   - Identify required variable names and substitution patterns
   - No dependencies
   - Expected outcome: Complete understanding of tool's templating requirements

2. **Validate Template Variable Compatibility**: `pmc\product\_prompt_engineering\03.5-user-journey-stages-prompt-template_v9-version-e.md`
   - Ensure all [STAGE] variables and other placeholders match JavaScript tool expectations
   - Add any missing variables required by the automation tool
   - Dependencies: Completion of step 1
   - Expected outcome: Fully compatible template ready for automation

3. **Test Integration and Output Generation**: Full system validation
   - Run JavaScript tool with enhanced template to generate sample stage prompts
   - Verify output quality matches E02-output-e.md standards
   - Dependencies: Completion of steps 1-2
   - Expected outcome: Successful automated generation of enhanced user journey prompts

4. **Document Template Usage**: Create integration documentation
   - Document variable mapping and usage patterns
   - Create examples of successful prompt generation
   - Dependencies: Completion of step 3
   - Expected outcome: Clear documentation for future template modifications

### Important Files

1. `pmc/product/_prompt_engineering/03.5-user-journey-stages-prompt-template_v9-version-e.md`
   - Purpose: Enhanced prompt template with hybrid acceptance criteria and cross-stage integration
   - Role: Source template for automated prompt generation
   - Current state: Recently created with [STAGE] variables, needs integration validation

2. `pmc/product/_mapping/02-user-journeys/03.5-user-journey-E02-output-e.md`
   - Purpose: Enhanced output specification demonstrating expected quality and format
   - Role: Reference standard for automated output validation
   - Current state: Complete enhanced specification with hybrid acceptance criteria

3. `pmc/product/_tools/02-generate-user-journey-prompt-segments_v2.js`
   - Purpose: JavaScript automation tool for prompt generation
   - Role: Template processor and prompt generator
   - Current state: Existing tool that needs integration validation with enhanced template

4. `pmc/context-ai/chat-contexts-log/pmct/02-user-journey-improvement-analysis_v1.md`
   - Purpose: Analysis document containing integration requirements and recommendations
   - Role: Requirements specification for template enhancements
   - Current state: Complete analysis with optimization recommendations

### Important Scripts, Markdown Files, and Specifications

1. `pmc/product/_tools/02-generate-user-journey-prompt-segments_v2.js`
   - Purpose: Automation tool for template processing
   - Key sections: Variable substitution logic, output file generation patterns, directory structure handling

2. `pmc/product/_prompt_engineering/03.5-user-journey-stages-prompt-template_v9-version-e.md`
   - Purpose: Enhanced template with comprehensive features
   - Key sections: Hybrid acceptance criteria format, cross-stage integration requirements, quality validation framework

3. `pmc/product/_mapping/02-user-journeys/03.5-user-journey-E02-output-e.md`
   - Purpose: Quality standard and format reference
   - Key sections: Enhanced structure, hybrid acceptance criteria examples, cross-stage integration documentation

### Recent Development Context

- **Last Milestone**: Completed comprehensive analysis of three user journey prompt versions and created enhanced Version E with hybrid acceptance criteria approach
- **Key Outcomes**: Enhanced prompt template provides 85%+ confidence for functional requirements generation, includes comprehensive cross-stage integration, and implements quality validation frameworks
- **Relevant Learnings**: Hybrid acceptance criteria (user experience + technical) approach provides superior foundation for development teams while maintaining user-centric focus
- **Technical Context**: Template optimization achieved 40-50% token reduction while enhancing functionality; JavaScript tool integration is the final step for systematic deployment across all 6 stages

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