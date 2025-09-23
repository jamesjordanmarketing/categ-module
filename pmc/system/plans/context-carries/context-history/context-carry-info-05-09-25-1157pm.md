# Development Context & Operational Priorities
**Date:** 2025-05-09 23:57 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
We are preparing to implement the Testing Tools Package specification outlined in pmc/docs/specs/06-testing-tools.md. This specification defines a standardized, pre-configured testing environment that will be used across PMC-managed projects, starting with the Aplio Design System Modernization project.

The testing tools package aims to:
1. Create a streamlined testing environment focused on code correctness, component functionality, and component integration
2. Reduce testing setup complexity by centralizing configuration in a reusable package
3. Prioritize essential tools (Jest, TypeScript, ts-jest, React Testing Library) while avoiding unnecessary testing bloat
4. Support both automated testing and human visual verification workflows
5. Implement a deployment strategy that works within Node.js module resolution constraints

Key technical considerations:
- The testing package will be stored in pmc/testing-tools-install/
- Installation will be managed through automated scripts that copy configuration files and update dependencies
- Core tools will be standardized with consistent versions and configurations
- Optional extensions will be available for specific use cases but not included by default
- The package will focus on testing for syntax bugs, structural code bugs, and component integrations

In our next session, we will begin implementing this specification by creating the directory structure, base configuration files, and installation scripts for the testing tools package.

### Next Steps
1. **Create testing package directory structure** - Set up the pmc/testing-tools-install/ directory with subdirectories for base configurations, specific tool configurations, scripts, and templates.
2. **Develop core configuration files** - Create Jest, TypeScript, and React Testing Library configuration files that provide standardized defaults for all projects.
3. **Implement installation script** - Develop the script that automates the process of copying configuration files and updating project dependencies.
4. **Create test templates** - Design reusable test templates for components, hooks, and other common patterns.
5. **Validate with initial tests** - Test the package setup with basic tests in the Aplio Design System Modernization project.

### Important Files
1. **pmc/docs/specs/06-testing-tools.md** - Complete specification for the testing tools package with detailed implementation plan
2. **pmc/context-ai/chat-contexts-log/pmct/06-testing-tools.md** - Inventory of all testing tools with analysis of purpose, size, setup complexity, and capabilities
3. **pmc/product/07b-task-aplio-mod-1-testing-built.md** - Contains test descriptions for all task testing requirements
4. **pmc/product/06b-aplio-mod-1-tasks-built.md** - Describes types of coding tasks that need testing
5. **aplio-modern-1/package.json** - Target project package.json that will need to be updated with testing dependencies

### Important Scripts, Markdown Files, and Specifications
1. **pmc/docs/specs/06-testing-tools.md** - Primary specification document outlining the testing tools package implementation
2. **pmc/testing-tools-install/scripts/install.js** - To be created - Script for installing the testing package to project directories
3. **pmc/testing-tools-install/scripts/verify.js** - To be created - Script for verifying correct installation of the testing package
4. **pmc/testing-tools-install/base/jest.config.base.js** - To be created - Base Jest configuration for all projects
5. **pmc/testing-tools-install/package.json** - To be created - Package listing all testing dependencies and versions

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