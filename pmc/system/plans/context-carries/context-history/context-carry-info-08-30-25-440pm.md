# Development Context & Operational Priorities
**Date:** 2025-08-30 16:40 PST
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
Today we executed three prompts designed to build a stage 2 specific User Journey document.  

I need you to read both the input prompt and the output specfications here:

Input & Output B: pmc\product\_prompt_engineering\03.5-user-journey-stages-prompt-template_v9-version-b.md generated Output spec: pmc\product\_mapping\02-user-journeys\03.5-user-journey-E02-output-b.md

Input & Output C: pmc\product\_prompt_engineering\03.5-user-journey-stages-prompt-template_v9-version-c.md generated Output spec: pmc\product\_mapping\02-user-journeys\03.5-user-journey-E02-output-c.md


Input & Output D: pmc\product\_prompt_engineering\03.5-user-journey-stages-prompt-template_v9-version-d.md generated Output spec: pmc\product\_mapping\02-user-journeys\03.5-user-journey-E02-output-d.md

Then analyze them all carefully and analyze for: 

1. Which output file is best?

2. Using the "best one" as a base what sections or specs could from the "less good" ones could be added to the base that could improve the granularity and details needed to derive comprehensive functional requirement documents.

3. Do you think the output "base" (plus any additives you define from the other ones) is sufficent to create a robust and complete Functional Requirements document?

4. How would you shorten the prompt input spec file: pmc\product\_mapping\02-user-journeys\specs\03.5-user-journey-E02.md to be more focused on the acceptance criteria and remove context so the processing prompt can best utilize the tokens needed to produce the robust response?  I feel like there are a lot of unnecessary sections like:
### Journey Scope and Boundaries
### Success Definition
### Value Progression Story for Proof-of-Concept
## User Persona Definitions

5. The acceptance criteria are being output as the format Given/When/Then (GWT)" which I see describes a good function. My concern is that we are not documenting all of the detailed acceptance criteria that was brainstormed in the user stories (read the Stage 2 acceptance criteria as documented here: pmc\product\02-bmo-user-stories.md lines 75 - 127)
Is my concern about acceptance criteria valid or is the Given/When/Then (GWT) designed to extrapolate from them to produce robust functional requirements that result in good coding tasks?

Do the full analysis and put your answer here:
pmc\context-ai\chat-contexts-log\pmct\02-user-journey-improvement-analysis_v1.md

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.


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


### Additional Resources

#### Key URLs

#### Important Directories