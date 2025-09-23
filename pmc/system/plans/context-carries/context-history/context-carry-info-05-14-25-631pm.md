# Development Context & Operational Priorities
**Date:** 2025-05-14 18:31 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
We need to conduct a comprehensive audit comparing the detailed structured testing system specifications against the original unstructured requirements. The goal is to ensure the new structured specifications completely fulfill all requirements across five domains:

1. Core testing infrastructure
2. Managed test server with dashboard
3. Mock data generation with Faker.js
4. Automated installation script with configuration support
5. Additional features including MSW for API mocking, templates, and smoke tests

The audit must thoroughly analyze:
- The new structured specification: `pmc/context-ai/chat-contexts-log/pmct/testing-system-setup-spec-v3.md`
- The new operations tutorial: `pmc/context-ai/chat-contexts-log/pmct/testing-system-operations-tutorial-v3.md`

These must be compared against the original unstructured requirements:
- Core infrastructure requirements: `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-system-spec-v1.md`
- Test server requirements: `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-web-server-spec-v1.md`
- Mock data requirements: `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-mock-data-spec-v1.md`
- Installation script requirements: `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-installation-spec-v1.md`
- Feature addition requirements: `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-smoke-msw-templates-spec-v1.md`

The current state is that we have completed writing the V3 specifications based on previous discussions, but we need to validate they fully meet all requirements from the original unstructured specs before implementation begins.

### Next Steps 
1. **Audit Core Infrastructure**: Compare core testing infrastructure in V3 spec against `Unstructured-test-system-spec-v1.md` to identify any gaps or missing requirements. Expected outcome: Complete verification with checklist of all satisfied requirements.

2. **Audit Test Server Implementation**: Compare test server and dashboard specifications in V3 spec against `Unstructured-test-web-server-spec-v1.md` to verify all server functionality is properly addressed. Expected outcome: Confirmed dashboard and server feature completeness.

3. **Audit Mock Data System**: Verify mock data generation specifications in V3 spec against `Unstructured-test-mock-data-spec-v1.md` to ensure Faker.js implementation covers all data requirements. Expected outcome: Verification of all required mock data models and fixtures.

4. **Audit Installation Script**: Compare automated installation specifications in V3 spec against `Unstructured-test-installation-spec-v1.md` to confirm the Node.js script implementation meets all requirements. Expected outcome: Complete verification of the installation process.

5. **Audit Additional Features**: Verify the MSW handlers, templates, and smoke test specifications in V3 spec against `Unstructured-test-smoke-msw-templates-spec-v1.md`. Expected outcome: Confirmation that all additional features are properly specified.

### Important Files
1. `pmc/context-ai/chat-contexts-log/pmct/testing-system-setup-spec-v3.md`: Primary technical specification document containing detailed implementation instructions. Currently complete but needs validation.

2. `pmc/context-ai/chat-contexts-log/pmct/testing-system-operations-tutorial-v3.md`: Operations tutorial explaining how to use the testing system. Currently complete but needs validation.

3. `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-system-spec-v1.md`: Original unstructured requirements for core testing infrastructure. Source of truth for core testing requirements.

4. `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-web-server-spec-v1.md`: Original unstructured requirements for test server and dashboard. Source of truth for server requirements.

5. `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-mock-data-spec-v1.md`: Original unstructured requirements for mock data generation. Source of truth for mock data requirements.

6. `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-installation-spec-v1.md`: Original unstructured requirements for installation scripting. Source of truth for installation requirements.

7. `pmc/context-ai/chat-contexts-log/pmct/Unstructured-test-smoke-msw-templates-spec-v1.md`: Original unstructured requirements for additional features. Source of truth for MSW, templates, and smoke tests.

### Important Scripts, Markdown Files, and Specifications
1. `pmc/context-ai/chat-contexts-log/pmct/testing-system-setup-spec-v3.md`: Technical specification containing the implementation details. Key sections to review: Configuration File, Directory Structure Creation, Automated Installation Script, MSW Handlers Implementation.

2. `pmc/context-ai/chat-contexts-log/pmct/testing-system-operations-tutorial-v3.md`: Usage instructions for the testing system. Key sections to review: Installation and Setup, Using the Configuration System, Using MSW for API Mocking, Testing Workflow with Server Integration.

3. `pmc/system/plans/context-carries/context-carry-info-05-14-25-631pm.md`: This context carryover file (current file). Key section: Current Focus with audit requirements.

### Recent Development Context
- **Last Milestone**: Creation of comprehensive structured V3 specifications for the testing system
- **Key Outcomes**: Detailed implementation plans for Node.js-based installation script, directory structure, server dashboard, and MSW integration
- **Relevant Learnings**: Configuration-driven approach with .test-config.js provides greater flexibility than the original bash implementation
- **Technical Context**: Node.js implementation chosen over Bash for cross-platform compatibility and better integration with JavaScript testing tools

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