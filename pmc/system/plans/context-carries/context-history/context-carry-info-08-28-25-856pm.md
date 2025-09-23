# Development Context & Operational Priorities
**Date:** 2025-08-28 20:56 PST
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
The current focus of work on this project is:
We must create a script that is very similar to `pmc\product\_tools\04-generate-FR-prompt-segments.js`

Update the script instructions:
I need you to read both attached files: 
pmc\product\03.5-bmo-user-journey.md which is the current output file scaffold that is populated by executing the user journey prompt which builds the full user journey.
and
pmc\product\_prompt_engineering\03.5-user-journey-prompt-template_v8.md which is the prompt template that will create the per stage user journey.
Then read this script: `pmc\product\_tools\04-generate-FR-prompt-segments.js`

As you can see the script breaks down the functional requirements in the master file, into a separate file for each stage.
It has two output formats:
a. the FR output file scaffold for each stage. 
b. the targeted prompt file which is customized to have a unique prompt for each stage.

I want to break the user journey file attached here in the same way. 
The new script will be: `pmc\product\_tools\02-generate-user-journey-prompt-segments.js`. The script will:
a. Derive from the current user journey file `pmc\product\03.5-bmo-user-journey.md` a stage specific UJ output scaffold file for each stage. Put the output files here: pmc\product\_mapping\02-user-journeys
b. Segment the user journey per stage prompt template here: pmc\product\_prompt_engineering\03.5-user-journey-prompt-template_v8.md into a customized prompt file for each stage. Put the per stage output prompts here pmc\product\_mapping\02-user-journeys\prompts

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.


### Additional Resources

#### Key URLs

#### Important Directories