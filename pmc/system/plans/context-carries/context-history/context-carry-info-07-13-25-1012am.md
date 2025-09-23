# Development Context & Operational Priorities
**Date:** 2025-07-13 10:12 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task:** Component Inventory and View Test Specification for Tasks T-1.1.1 through T-3.3.2

**Development Target:** `@https://js-aplio-6.vercel.app/home-4` - This is the target application that view tests should replicate as closely as possible using available components.

**Reference Codebase:** `project-root\aplio-legacy\` - Contains source code patterns and architectural guidance for achieving the target application.

**What is being worked on:**
Create a comprehensive specification for building view tests that replicate the development target (`@https://js-aplio-6.vercel.app/home-4`) using all components delivered between tasks T-1.1.1 through T-3.3.2. This involves conducting a detailed component inventory to determine what CAN be built with the current `aplio-modern-1` codebase.

**Why it is being worked on:**
The goal is to create fully functioning rendering pages with CSS, multiple functioning components, mock data, and data harnesses that look as much like the development target as possible with currently available components. This will validate that completed tasks actually deliver components that move toward the target application and provide realistic demonstrations of current capabilities.

**Current state of implementation:**
- Tasks T-1.1.1 through T-3.3.2 have been completed with varying degrees of success
- The `aplio-modern-1` codebase contains components from these completed tasks
- No comprehensive inventory exists of what components are actually available and usable for view tests
- No assessment has been made of how closely available components can replicate the target application

**Critical context needed for continuation:**
- The task list source file `pmc\product\06b-aplio-mod-1-tasks-built.md` is the authoritative source for task completion status
- The development target `@https://js-aplio-6.vercel.app/home-4` represents the end goal for visual and functional replication
- The reference codebase `project-root\aplio-legacy\` contains implementation patterns to follow
- View tests must utilize ALL components delivered between tasks T-1.1.1 through T-3.3.2 to maximize target replication

### Next Steps

1. **Target Application Analysis** - Visit `@https://js-aplio-6.vercel.app/home-4` and examine `project-root\aplio-legacy\` codebase
   - Dependencies: None
   - Expected outcome: Complete understanding of target visual elements, layout patterns, and interactive features

2. **Task Status Analysis** - Read `pmc\product\06b-aplio-mod-1-tasks-built.md` completely
   - Dependencies: None  
   - Expected outcome: Definitive list of completed tasks T-1.1.1 through T-3.3.2 and their components

3. **Component Inventory Execution** - Inspect actual implemented components in `aplio-modern-1/` directory structure
   - Dependencies: Completed steps 1-2
   - Expected outcome: Detailed catalog of available components with target replication assessment

4. **View Test Feasibility Assessment** - Evaluate each component's ability to replicate target application features
   - Dependencies: Completed component inventory
   - Expected outcome: Ranked scenarios for view test development with target alignment focus

5. **Inventory Documentation** - Generate comprehensive report at `pmc\context-ai\chat-contexts-log\pmct\view-test-inventory-to-T-3-3-2.md`
   - Dependencies: Completed assessment
   - Expected outcome: Structured inventory document following required format with target replication scores

### Important Files

1. **pmc\product\06b-aplio-mod-1-tasks-built.md** - Source of truth for task completion status and component definitions
2. **project-root\aplio-legacy\** - Reference codebase containing target application implementation patterns
3. **aplio-modern-1/src/app/** - App Router structure with implemented components
4. **aplio-modern-1/src/components/** - React components from completed tasks
5. **aplio-modern-1/src/lib/** - Utility functions and configurations
6. **aplio-modern-1/src/styles/** - CSS and styling implementations
7. **pmc\context-ai\chat-contexts-log\pmct\view-test-inventory-to-T-3-3-2.md** - Target output file for inventory documentation

### Important Scripts, Markdown Files, and Specifications

1. **pmc\product\00-pmc-tutorial-1.md** - Project Memory Core tutorial providing context on project structure
2. **pmc\product\00-aplio-mod-1-seed-story.md** - Seed story for Aplio modernization project
3. **pmc\product\00-aplio-mod-1-seed-narrative.md** - Project overview and objectives
4. **pmc\product\_seeds\00-narrative-raw_data-ts-14-v3.md** - Raw data and technical requirements

## Detailed Inventory Process Specification

### Phase 1: Component Inventory and Target Analysis

#### Required Source Documentation Analysis

**Step 1: Development Target Analysis**
- **Live Application Analysis:** Visit `@https://js-aplio-6.vercel.app/home-4` to document:
  - Page layout and structure
  - Visual components (headers, navigation, content sections, forms, etc.)
  - Interactive elements (buttons, links, animations)
  - Styling patterns (colors, typography, spacing)
  - User interaction flows
- **Reference Codebase Analysis:** Examine `project-root\aplio-legacy\` to understand:
  - Component architecture of the target
  - Styling implementation approaches
  - Data structures used
  - Integration patterns between components

**Step 2: Task Status Analysis**
- Read `pmc\product\06b-aplio-mod-1-tasks-built.md` completely
- Identify all tasks from T-1.1.1 through T-3.3.2 and their completion status
- Document completed vs. in-progress vs. not started tasks
- Note dependencies between tasks affecting component availability
- Cross-reference with target application to identify which target features are addressed

**Step 3: Codebase Inspection**
- Navigate to `aplio-modern-1/` directory structure
- Inspect implemented components in:
  - `aplio-modern-1/src/app/` (App Router structure)
  - `aplio-modern-1/src/components/` (React components)
  - `aplio-modern-1/src/lib/` (Utility functions)
  - `aplio-modern-1/src/styles/` (CSS and styling)
- Compare each component against target application for replication capability assessment

#### Component Categorization Requirements

**Available Components (T-1.1.1 through T-3.3.2):**
For each available component, document:
- Component name and file path
- Source task ID that created it
- Implemented functionality
- Target application equivalent (which part of `@https://js-aplio-6.vercel.app/home-4` it replicates)
- Visual fidelity potential (how closely it matches target appearance)
- Required props/dependencies
- CSS/styling availability
- Mock data requirements
- Integration capabilities with other components

**Unavailable Components (Future Tasks):**
For each pending component, document:
- Component name and planned location
- Source task ID that will create it
- Target application feature it will replicate
- Planned functionality
- Dependencies on completed components

#### View Test Feasibility Assessment

For each available component, assess:
- **Target Replication Score:** How closely it can match target application (1-10 scale)
- **Standalone Testability:** Can it render independently?
- **Integration Requirements:** What other components needed?
- **Data Dependencies:** Required mock data structures
- **Styling Completeness:** CSS sufficient for realistic rendering matching target?
- **User Interaction:** Interactive features that can be demonstrated
- **Target Feature Coverage:** Specific features from `@https://js-aplio-6.vercel.app/home-4` that can be demonstrated

### Inventory Output Requirements

**File Location:** `pmc\context-ai\chat-contexts-log\pmct\view-test-inventory-to-T-3-3-2.md`

**Required Document Structure:**
```markdown
# View Test Inventory - Tasks T-1.1.1 through T-3.3.2

## Executive Summary
- **Development Target:** @https://js-aplio-6.vercel.app/home-4
- **Reference Codebase:** project-root\aplio-legacy\
- Total components available for view tests: [X]
- Total components pending: [Y]
- Target replication capability: [X]% of target features can be demonstrated
- View test feasibility rating: [High/Medium/Low]

## Target Application Analysis

### Key Features in Development Target
1. **Feature Name:** [Description from target site]
   - **Visual Elements:** [Layout, styling, components visible]
   - **Interactive Elements:** [User interactions available]
   - **Current Implementation Status:** [Available/Partially Available/Not Available]

### Reference Codebase Insights
- **Key architectural patterns** found in project-root\aplio-legacy\
- **Styling approaches** that should be replicated
- **Component organization** patterns to follow
- **Data structures** used in target implementation

## Available Components for View Tests

### [Component Category]
#### Component Name: [Name]
- **File Path:** [Full path from workspace root]
- **Source Task:** [Task ID and title]
- **Target Equivalent:** [Which part of @https://js-aplio-6.vercel.app/home-4 this replicates]
- **Target Replication Score:** [1-10] - [Brief explanation]
- **Functionality:** [What it does]
- **Props Required:** [List of props]
- **Styling Status:** [Complete/Partial/None] - [Comparison to target styling]
- **Mock Data Needed:** [Data structure requirements]
- **Dependencies:** [Other components/libraries required]
- **View Test Readiness:** [Ready/Needs Minor Setup/Needs Major Setup]

## Unavailable Components (Future Tasks)

### [Component Category]
#### Component Name: [Name]
- **Planned Location:** [Expected file path]
- **Source Task:** [Task ID and title that will create it]
- **Target Feature:** [Which part of @https://js-aplio-6.vercel.app/home-4 this will replicate]
- **Planned Functionality:** [What it will do]
- **Dependencies on Completed Work:** [How it connects to current components]

## View Test Scenarios

### Feasible Now (Target Replication Scenarios)
1. **Scenario Name:** [Description based on target application sections]
   - **Target Section:** [Specific part of @https://js-aplio-6.vercel.app/home-4 being replicated]
   - **Components Used:** [List]
   - **Target Fidelity:** [How closely it matches target]
   - **Mock Data Required:** [Data structures]
   - **Expected User Experience:** [What user would see/do, compared to target]

### Future Capabilities
1. **Scenario Name:** [Description]
   - **Target Feature:** [Part of @https://js-aplio-6.vercel.app/home-4 this will enable]
   - **Blocking Tasks:** [Tasks that must be completed first]
   - **Additional Components Needed:** [List]

## Recommendations for View Test Development

### Immediate Priorities
- [Component/scenario to prioritize for view tests that best demonstrate target replication]

### Target Alignment Strategy
- [How to maximize visual and functional similarity to @https://js-aplio-6.vercel.app/home-4]
- [Which target features should be prioritized for demonstration]

### Setup Requirements
- [Infrastructure needed for view tests]
- [Mock data structures that mirror target application data]

### Success Metrics
- [How to measure view test effectiveness against target application]
- [Visual fidelity benchmarks]
- [Functional completeness measures]
```

#### Success Criteria for Phase 1

The inventory is complete when:
1. ✅ Target application (`@https://js-aplio-6.vercel.app/home-4`) thoroughly analyzed
2. ✅ Reference codebase (`project-root\aplio-legacy\`) examined for implementation patterns
3. ✅ All tasks T-1.1.1 through T-3.3.2 analyzed
4. ✅ All existing components in `aplio-modern-1/` catalogued
5. ✅ Each component's target replication capability assessed
6. ✅ Clear recommendations for immediate view test development provided with target alignment focus
7. ✅ Output file follows required structure exactly
8. ✅ All file paths accurate and verified
9. ✅ Mock data requirements clearly defined for each component
10. ✅ Target application feature coverage documented for each available component

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