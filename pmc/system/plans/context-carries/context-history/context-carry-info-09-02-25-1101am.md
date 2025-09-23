# Development Context & Operational Priorities
**Date:** 2025-09-02 11:01 PST
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
**Task**: Update User Journey Segmentation Script to Remove Unwanted Content Sections

**What is being worked on**: Modifying the script `pmc\product\_tools\02-generate-user-journey-prompt-segments_v3.js` to automatically filter out specific sections from the input user journey file that are not useful for stage-specific output files.

**Why it is being worked on**: The current script includes unwanted sections (Journey Scope and Boundaries, Success Definition, Value Progression Story, User Persona Definitions) in the stage-specific output files. These sections add noise and are not helpful for the individual stage documentation that gets generated.

**Current state of implementation**: Script is functional but includes unwanted content. The parseUserJourneyFile() function needs to be updated to filter content between specific string markers before processing stages.

**Critical context needed for continuation**: 
- The input file is `pmc\product\03.5-bmo-user-journey.md`
- Content to remove starts at "### Journey Scope and Boundaries" (including this string)
- Content removal ends at "## 1. Discovery & Project Initialization" (do NOT remove this string)
- The script currently processes stage headers starting with "##" and numbers (e.g., "## 1.", "## 2.", etc.)
- Header content is stored separately and prepended to each stage file

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Next Steps 
1. **Script Modification**: Update `parseUserJourneyFile()` function in `pmc\product\_tools\02-generate-user-journey-prompt-segments_v3.js`
   - Add content filtering logic to remove unwanted sections
   - Use string matching to identify removal boundaries
   - Expected outcome: Clean stage-specific files without unwanted content sections
   - Put the updated script here: `pmc\product\_tools\02-generate-user-journey-prompt-segments_v4.js`

2. **Testing and Validation**: Run the modified script to verify content removal
   - Generate new stage files and verify unwanted sections are absent
   - Ensure stage content (## 1., ## 2., etc.) remains intact
   - Expected outcome: Confirm script produces clean output files

### Important Files
1. `pmc\product\_tools\02-generate-user-journey-prompt-segments_v3.js`
   - Main script file requiring modification
   - Current state: Functional but includes unwanted content in output

2. `pmc\product\03.5-bmo-user-journey.md`
   - Input file containing unwanted sections
   - Purpose: Reference for identifying content to remove

3. `pmc\product\_mapping\02-user-journeys\specs\` (directory)
   - Output directory for generated stage files
   - Purpose: Will contain cleaned stage files after script modification

### Important Scripts, Markdown Files, and Specifications
1. `pmc\product\_tools\02-generate-user-journey-prompt-segments_v3.js`
   - Purpose: Main script to be modified
   - Key sections to review: `parseUserJourneyFile()` function (lines 58-106)

2. `pmc\product\03.5-bmo-user-journey.md`
   - Purpose: Input file for understanding content structure
   - Key sections to review: Lines containing "### Journey Scope and Boundaries" through "## 1. Discovery & Project Initialization"

### Recent Development Context
- **Last Milestone**: Successfully generated comprehensive Stage 1 enhanced user journey document
- **Key Outcomes**: Created detailed Stage 1 documentation with hybrid acceptance criteria and cross-stage integration
- **Relevant Learnings**: The segmentation script is working but needs content filtering to improve output quality
- **Technical Context**: Script uses regex patterns to identify stage headers and stores header content separately for each stage file

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
