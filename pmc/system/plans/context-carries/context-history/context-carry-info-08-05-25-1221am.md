# Development Context & Operational Priorities
**Date:** 2025-08-05 12:21 PST
**Project:** Project Memory Core (PMC) - FR Prompt Segments Script Bug Fixes
**Context Version:** 3.1.0

## Introduction

This context document focuses on fixing critical bugs in the Project Memory Core (PMC) functional requirements prompt segmentation script. The script is responsible for generating UI-first functional requirements segments and their corresponding prompt files, but currently has multiple issues preventing proper file generation and organization.

## Current Focus

### Active Development Focus

**What is being worked on:**
Fixing bugs in `pmc\product\_tools\04-generate-FR-prompt-segments.js` that prevent proper generation of functional requirements segment files and prompt files.

**Why it is being worked on:**
The script is a critical component of the PMC system for breaking down functional requirements into manageable segments with corresponding prompts. Currently, it has three major bugs that prevent it from working correctly:

1. **Incorrect Output Directory Usage**: The script creates and writes section files to a `temp-comparison` subdirectory instead of the main `ui-functional-maps` directory
2. **Missing Project Abbreviation in Section Files**: Section files are named `04-ui-first-functional-requirements-E01.md` instead of the required `04-bmo-ui-first-functional-requirements-E01.md` format
3. **Incorrect Project Abbreviation in Prompt Files**: Prompt files include the project abbreviation (`04-bmo-ui-first-functional-requirements-prompt-E01.md`) when they should be named `04-ui-first-functional-requirements-prompt-E01.md`

**Current state of implementation:**
The script runs without errors but produces incorrectly named and located files. The index file references the wrong directory paths. Multiple attempts to fix the script have been made but the issues persist.

**Critical context needed for continuation:**
The script should follow the same pattern as `pmc\product\_tools\06b-generate-task-prompt-segments.js` which works correctly. The expected behavior is:
- Section files: `04-bmo-ui-first-functional-requirements-E01.md` in main directory
- Prompt files: `04-ui-first-functional-requirements-prompt-E01.md` in prompts subdirectory
- Index file: Links pointing to current directory, not temp-comparison

### Bugs & Challenges in the Current Task

**Bug 1: Incorrect Output Directory**
- **Issue description**: Script creates `temp-comparison` directory and writes section files there instead of main directory
- **Current status**: Active bug - files being created in wrong location
- **Attempted solutions**: Multiple code modifications attempted but script continues using temp-comparison
- **Blocking factors**: Script logic still references tempComparisonDir variable at line 206

**Bug 2: Missing Project Abbreviation in Section Files**
- **Issue description**: Section files named `04-ui-first-functional-requirements-E01.md` instead of `04-bmo-ui-first-functional-requirements-E01.md`
- **Current status**: Active bug - incorrect file naming
- **Attempted solutions**: Code modifications to include projectAbbreviation in filename
- **Blocking factors**: Changes not taking effect in actual file generation

**Bug 3: Incorrect Prompt File Naming**
- **Issue description**: Prompt files include project abbreviation when they shouldn't
- **Current status**: Active bug - prompt files named incorrectly
- **Attempted solutions**: Attempted to remove projectAbbreviation from prompt filename
- **Blocking factors**: Script continues generating files with abbreviation

### Next Steps

1. **Fix Steps**
Read pmc\product\_tools\04-generate-FR-prompt-segments.js carefully and completely so you know how to fix the bugs. 

Read pmc\product\_tools\06b-generate-task-prompt-segments.js if you need to see a working template (it has different i/o)

Then fix all of the bugs described in this specification.

2. **Test script execution**
   - Run script with test parameters
   - Verify correct file creation and naming
   - Expected outcome: All files created in correct locations with correct names
   - If not fixed you must recycle this process until all bugs are fixed. 

### Important Files

1. **pmc\product\_tools\04-generate-FR-prompt-segments.js**
   - Purpose: Main script requiring bug fixes
   - Current state: Contains bugs preventing proper file generation

2. **pmc\product\_tools\06b-generate-task-prompt-segments.js**
   - Purpose: Reference implementation that works correctly
   - Current state: Working example to follow for fixes

3. **pmc\product\_mapping\ui-functional-maps\**
   - Purpose: Target directory for section files
   - Current state: Should contain section files but currently empty

4. **pmc\product\_mapping\ui-functional-maps\prompts\**
   - Purpose: Target directory for prompt files
   - Current state: Contains incorrectly named prompt files

5. **pmc\product\_mapping\ui-functional-maps\temp-comparison\**
   - Purpose: Incorrect directory being created by bug
   - Current state: Contains section files that should be in parent directory

### Important Scripts, Markdown Files, and Specifications

1. **pmc\product\_tools\06b-generate-task-prompt-segments.js**
   - Purpose: Reference implementation showing correct file generation pattern
   - Key sections: Lines 200-305 showing proper file path construction and output logic

2. **pmc\product\03-bmo-functional-requirements.md**
   - Purpose: Input file for the script
   - Key sections: Functional requirements sections that get segmented

3. **pmc\product\_prompt_engineering\04-bmo-ui-first-functional-requirements-prompt_v2.md**
   - Purpose: Template file used for generating customized prompts
   - Key sections: Placeholder text that gets replaced during customization

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Project Memory Core (PMC) System

#### Core Functionality
PMC is a structured modern software development task management and context retention system. The functional requirements prompt segmentation script is part of the PMC tooling that helps break down large functional requirements documents into manageable segments with corresponding prompts for AI-assisted development.

#### Commands

The driver for most PMC commands are in:
`pmc/bin/aplio-agent-cli.js`

#### Project Structure