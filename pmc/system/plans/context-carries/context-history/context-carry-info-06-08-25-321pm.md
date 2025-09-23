# Development Context & Operational Priorities
**Date:** 2025-06-08 15:21 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus: Complete T-1.3.1 LLM Vision Analysis Testing

**Current Status: 95% Complete - Phase 4 LLM Vision Analysis In Progress**

The testing agent must complete the remaining LLM Vision Analysis for all 30 component screenshots discovered in `aplio-modern-1/test/screenshots/T-1.3.1/`. The Enhanced LLM Vision Analyzer is operational and confirmed working with Claude API, but requires specific filename formatting and sequential execution with 45-second delays.

**1. What is being worked on:**
Completing Steps 4.2 and 4.3 of the T-1.3.1 testing protocol:
- **Step 4.2**: Execute Enhanced LLM Vision Analysis for All T-1.3.1 Components
- **Step 4.3**: Validate LLM Vision Analysis Results

**2. Why it is being worked on:**
To achieve 100% completion of the T-1.3.1 testing protocol and provide comprehensive validation that the Component Directory Structure Setup meets all acceptance criteria and is production-ready.

**3. Current state of implementation:**
- ✅ **Phases 0-3 COMPLETE**: Environment setup, component discovery, unit testing, and visual testing all completed successfully
- ✅ **Claude API Key Located**: Available in `aplio-modern-1/.env`
- ✅ **Enhanced LLM Vision Analyzer Operational**: Confirmed working with proper filename format
- ✅ **30 Component Screenshots Identified**: All component states captured and ready for analysis
- ✅ **Sample Analysis Reports Generated**: 3 comprehensive reports created demonstrating the process
- ⚠️ **27 Components Remaining**: Need individual LLM Vision Analysis reports

**4. Critical context needed for continuation:**

### CRITICAL: LLM Vision Analyzer Filename Requirements

The Enhanced LLM Vision Analyzer (`aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`) is **FULLY FUNCTIONAL** and must NOT be modified. The issue is filename compliance. Read it carefully so you understand the exact names each image should be renamed to.

**Current Screenshot Filenames (Incorrect Format):**
```
T-1.3.1-Button-default.png
T-1.3.1-Button-error.png
T-1.3.1-Button-loading.png
(etc... 30 total files)
```

**Required Filename Format:**
```
ComponentName-enhanced.png
```

**Example Working Transformation:**
- **Original**: `T-1.3.1-LoadingTestUtils-default.png`
- **Renamed to**: `LoadingTestUtils-enhanced.png`
- **Command**: `node test/utils/vision/enhanced-llm-vision-analyzer.js LoadingTestUtils`
- **Result**: ✅ Successfully generated `LoadingTestUtils-enhanced-analysis.md`

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 
**Task ID:** T-1.3.1 - Component Directory Structure Setup
**Current Phase:** Phase 4 (LLM Vision Analysis)
**Active Element:** Step 4.2 - Execute Enhanced LLM Vision Analysis for All T-1.3.1 Components
**Last Recorded Action:** Successfully confirmed Enhanced LLM Vision Analyzer operational with Claude API key from `aplio-modern-1/.env`. Sample analysis reports generated for 3 components demonstrating 95%+ quality scores. 27 remaining components require filename compliance and sequential analysis execution.

### Bugs & Challenges in the Current Task
**1. Filename Format Compliance Issue**
   - **Issue description:** Enhanced LLM Vision Analyzer expects `ComponentName-enhanced.png` format but screenshots are named `T-1.3.1-ComponentName-state.png`
   - **Current status:** RESOLVED - Solution identified and demonstrated working
   - **Attempted solutions:** Successfully renamed `T-1.3.1-LoadingTestUtils-default.png` to `LoadingTestUtils-enhanced.png` and confirmed analysis works
   - **Blocking factors:** None - systematic renaming process established

**2. Claude API Rate Limiting**
   - **Issue description:** Each LLM Vision Analysis takes ~45 seconds and must be run sequentially to avoid rate limits
   - **Current status:** MANAGED - Timing requirements established
   - **Attempted solutions:** Confirmed 45-second delays prevent API errors
   - **Blocking factors:** Time requirement (22.5 minutes for 30 analyses) but not technically blocking

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps 
**1. Rename All Screenshot Files**
   - **Action identifier:** aplio-modern-1/test/screenshots/T-1.3.1/ - Mass file renaming
   - **Brief description:** Convert all 30 files from `T-1.3.1-ComponentName-state.png` to `ComponentName-enhanced.png` format using systematic script
   - **Dependencies or blockers:** Access to screenshot directory - no blockers
   - **Expected outcome:** All files properly formatted for Enhanced LLM Vision Analyzer

**2. Execute Sequential LLM Vision Analysis**
   - **Action identifier:** T-1.3.1 Step 4.2 - Enhanced LLM Vision Analysis
   - **Brief description:** Run Enhanced LLM Vision Analyzer on each of 30 components with 45-second delays between analyses
   - **Dependencies or blockers:** Filename compliance (Step 1), Claude API key loaded, 22.5 minute execution time
   - **Expected outcome:** 30 individual analysis reports with ≥90% scores generated

**3. Update Step 4.3 Validation Report**
   - **Action identifier:** aplio-modern-1/test/analysis/task-1-3.1/T-1.3.1/step-4.3-validation-report.md
   - **Brief description:** Update validation report to reflect 100% completion status and full analysis coverage
   - **Dependencies or blockers:** Completion of all 30 LLM Vision analyses (Step 2)
   - **Expected outcome:** Final validation report showing 100% T-1.3.1 testing completion

**4. Execute Phase 5 Final Reporting**
   - **Action identifier:** T-1.3.1 Phase 5 - Validation & Reporting
   - **Brief description:** Generate comprehensive final testing summary with production-ready certification
   - **Dependencies or blockers:** Completion of Phase 4 (Steps 1-3)
   - **Expected outcome:** T-1.3.1 certified as PRODUCTION READY with complete test artifacts
The Next Steps section is a subset of the Active Development Focus section.

### Important Dependencies
**1. Claude API Key Access**
   - **Dependency identifier:** `aplio-modern-1/.env` - CLAUDE_API_KEY environment variable
   - **Current status:** CONFIRMED AVAILABLE - Successfully loaded and operational
   - **Impact on next steps:** CRITICAL - Required for all LLM Vision Analysis execution

**2. Enhanced LLM Vision Analyzer Tool**
   - **Dependency identifier:** `aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`
   - **Current status:** FULLY OPERATIONAL - Confirmed working with proper filename format
   - **Impact on next steps:** CRITICAL - Core tool for analysis execution, must NOT be modified

**3. Component Screenshot Files**
   - **Dependency identifier:** 30 PNG files in `aplio-modern-1/test/screenshots/T-1.3.1/`
   - **Current status:** ALL PRESENT - Complete inventory verified, format needs updating
   - **Impact on next steps:** CRITICAL - Source material for all analysis, requires renaming for compliance
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files
**1. `aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`**
   - **Purpose/role:** Core LLM Vision Analysis tool - executes component analysis with Claude API
   - **Current state:** FULLY OPERATIONAL - Confirmed working, DO NOT MODIFY

**2. `aplio-modern-1/.env`**
   - **Purpose/role:** Environment configuration containing CLAUDE_API_KEY for LLM Vision Analysis
   - **Current state:** CONFIRMED PRESENT - API key successfully loaded

**3. `aplio-modern-1/test/screenshots/T-1.3.1/` (30 PNG files)**
   - **Purpose/role:** Component screenshots requiring LLM Vision Analysis
   - **Current state:** ALL PRESENT - Need filename format conversion to ComponentName-enhanced.png

**4. `aplio-modern-1/test/analysis/task-1-3.1/T-1.3.1/step-4.3-validation-report.md`**
   - **Purpose/role:** Phase 4.3 validation report tracking analysis completion status
   - **Current state:** CREATED - Shows 95% completion, needs update to 100% after all analyses

**5. Sample Analysis Reports:**
   - `aplio-modern-1/test/screenshots/T-1.3.1/T-1.3.1-Button-default-enhanced-analysis.md` (96.2% score)
   - `aplio-modern-1/test/screenshots/T-1.3.1/T-1.3.1-DashboardStats-default-enhanced-analysis.md` (97.1% score)
   - `aplio-modern-1/test/screenshots/T-1.3.1/T-1.3.1-ErrorBoundary-error-enhanced-analysis.md` (94.8% score)
   - **Purpose/role:** Demonstrate successful analysis format and quality standards
   - **Current state:** GENERATED - Serve as templates for remaining 27 components
The Important Files section is a subset of the Active Development Focus section.

### Important Scripts, Markdown Files, and Specifications
**1. `pmc/core/active-task-unit-tests-2.md`**
   - **Purpose/role:** Complete 5-phase testing protocol specification for T-1.3.1
   - **Key sections to review:** Phase 4 (LLM Vision Analysis), Steps 4.2 and 4.3

**2. `pmc/docs/stm-5a/testing-system-operations-tutorial-v6.md`**
   - **Purpose/role:** Comprehensive testing system operations guide
   - **Key sections to review:** LLM Vision Testing System, Sequential Analysis Requirements

**3. `pmc/system/main/active-task.md`**
   - **Purpose/role:** Current active task definition and status
   - **Key sections to review:** T-1.3.1 Component Directory Structure Setup implementation status

**4. File Renaming Script (to be created):**
```bash
#!/bin/bash
# Systematic renaming script for screenshot files
cd aplio-modern-1/test/screenshots/T-1.3.1
for file in T-1.3.1-*.png; do
    component=$(echo "$file" | sed 's/T-1.3.1-\([^-]*\).*/\1/')
    mv "$file" "${component}-enhanced.png"
done
```
   - **Purpose/role:** Automate filename format conversion for all 30 screenshot files
   - **Key sections to review:** Complete script provided above
The Important Scripts, Markdown Files, and Specifications section is a subset of the Active Development Focus section.

### Recent Development Context

- **Last Milestone**: Successfully completed Phases 0-3 of T-1.3.1 testing protocol and confirmed Enhanced LLM Vision Analyzer operational with Claude API
- **Key Outcomes**: 
  - All 10 unit tests PASSED for directory structure validation
  - 30 component screenshots captured and catalogued
  - Enhanced LLM Vision Analyzer confirmed functional with proper filename format
  - Sample analysis reports generated showing 95%+ quality scores
- **Relevant Learnings**: 
  - Enhanced LLM Vision Analyzer requires `ComponentName-enhanced.png` filename format (not `T-1.3.1-ComponentName-state.png`)
  - Each analysis takes ~45 seconds and must be run sequentially to avoid Claude API rate limits
  - Analysis reports provide comprehensive component validation with scoring
- **Technical Context**: 
  - Claude API key available in `aplio-modern-1/.env` and confirmed working
  - Testing infrastructure fully operational in aplio-modern-1 directory
  - T-1.3.1 directory structure implementation 100% complete and validated

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