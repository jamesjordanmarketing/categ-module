# Development Context & Operational Priorities
**Date:** 2025-09-05 21:34 PST
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

**Task**: Enhance and complete the pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md wireframe specification file
**File**: `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md`

**What is being worked on**: Creating a comprehensive and accurate integrated wireframe specification for Stage 1 (E01) that combines all critical components for the LoRA proof of concept pipeline. This builds upon the analysis and minimal viable pipeline work completed in the previous session.

**Why it is being worked on**: The current E01-integrated.md file needs to be enhanced to be more complete and accurate, ensuring proper integration with Stage 2 and providing detailed enough specifications for Figma wireframe generation.

**Current state of implementation**: 
- Completed comprehensive analysis of E01, E02, E05, E06 files
- Created detailed workflow timing analysis
- Built minimal viable pipeline specification (E01_v2.md)
- Identified critical vs non-critical components for LoRA proof of concept
- Need to enhance the integrated specification file

**Critical context needed for continuation**:
- Previous session established that E01 and E02 are NOT duplicates but serve different workflow stages
- Stage 1 focuses on workspace setup and basic processing
- Stage 2 focuses on advanced content processing pipeline
- Critical components identified: FR1.1.1, FR1.1.0, FR1.2.0, FR1.1.2, FR1.1.3
- Non-critical components to exclude: Privacy Control Center, Performance Dashboard, Training Platform

### Next Steps

1. **Updated Specs**
Read `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-output-E01-spread-across.md` carefully so you know how `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md` needs to be updated
Read: pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-output-E01_v2.md so you can see the "first pass" of trying to create the new figma file which is not very detailed.

Keep: All the original user journey and acceptance criteria that `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md` already for the sections we are going to keep. Enhance as needed.

1. **File Enhancement** (`pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md`)
   - Review and enhance the integrated specification file
   - Ensure completeness and accuracy based on analysis
   - Dependencies: All input files listed below
   - Expected outcome: Complete, accurate integrated specification

2. **Specification Validation** 
   - Validate against original prompt requirements
   - Ensure Stage 2 integration compatibility
   - Dependencies: Original prompt file and E01 specification
   - Expected outcome: Validated specification ready for Figma generation


   - Expected outcome: Detailed Figma-ready prompt file

### Important Files

**Input Files Required**:
1. `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-output-E01.md` - Original wireframe output
2. `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-E01.md` - Integration reference and adaptable input
3. `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-output-E01-spread-across.md` - Comprehensive analysis document
4. `pmc\product\_mapping\fr-maps\prompts\04-FR-wireframes-prompt-E01.md` - Original prompt template
5. `pmc/product/01-bmo-overview.md` - Project overview
6. `pmc/product/02-bmo-user-stories.md` - User stories
7. `pmc/product/03-bmo-functional-requirements.md` - Functional requirements
8. `pmc/product/03.5-bmo-user-journey.md` - User journey

**Output Files**:
1. `pmc\product\_mapping\fr-maps\04-bmo-FR-wireframes-output-E01_v2.md` - Minimal viable pipeline (completed)

### Recent Development Context

- **Last Milestone**: Completed comprehensive Stage 1 analysis and created minimal viable pipeline specification
- **Key Outcomes**: 
  - Established that E01/E02 serve different workflow stages (setup vs production)
  - Identified critical components for LoRA proof of concept
  - Created workflow timing analysis explaining when each module is used
  - Built streamlined E01_v2.md with minimal viable pipeline
- **Relevant Learnings**: 
  - Separation of concerns is intentional and beneficial
  - Simple file upload (E01) vs advanced processing (E02) serve different user needs
  - Stage 1 provides essential infrastructure for Stage 2 integration
- **Technical Context**: 
  - Focus on FR1.1.1, FR1.1.0, FR1.2.0, FR1.1.2, FR1.1.3 as critical components
  - Exclude Privacy Control Center, Performance Dashboard, Training Platform
  - Maintain Stage 2 compatibility and integration points

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Bright Run LoRA Training Data Platform

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Bright Run LoRA Training Data Platform**: Bright Run is a revolutionary LoRA fine-tuning training data platform that transforms unstructured business knowledge into high-quality training datasets through an intuitive 6-stage workflow. We are creating the first user-friendly solution that enables non-technical domain experts to convert their proprietary knowledge—transcripts, documents, and expertise—into thousands of semantically diverse training pairs suitable for LoRA model fine-tuning.

### What Problem Does This Product Solve?

Small business owners and domain experts possess invaluable proprietary knowledge—from marketing philosophies to operational processes—but face insurmountable barriers in transforming this knowledge into LoRA ready training data.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

#### Key Documents
1. Seed Story: `pmc/product/00-bmo-seed-story.md`
2. Project Overview: `pmc\product\01-bmo-overview.md`

1. **Context Locality**: Instructions and context are kept directly alongside their relevant tasks
2. **Structured Checkpoints**: Regular token-based checks prevent context drift
3. **Directive Approach**: Clear commands and instructions with explicit timing requirements
4. **Task-Centric Documentation**: Single source of truth for task implementation
