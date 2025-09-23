# Development Context & Operational Priorities
**Date:** 2025-05-22 01:50 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
**Task:** Implementation of Next.js Component Testing System for React Server and Client Components

The current focus is implementing the comprehensive testing system for React components in Next.js 14 as specified in `pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-spec.md`. This system addresses critical shortcomings in the current testing infrastructure where component screenshots only showed test scaffolds rather than actual rendered components.

**Implementation Objectives:**
1. Enhance the existing test infrastructure in `aplio-modern-1/test` to properly render both server and client components
2. Integrate with existing utilities in `aplio-modern-1/test/utils`
3. Implement OCR capabilities to extract error codes from component screenshots
4. Create a robust visual regression testing workflow
5. Add clear visualization of server/client component boundaries

**Current State:**
The specification has been fully documented, including:
- Component registry integration with existing test infrastructure
- Enhanced scaffold generator for properly rendering components
- Extended server manager for specialized component testing
- Screenshot capture with server/client boundary visualization
- Visual regression testing engine
- OCR text extraction for error code validation

The system builds upon the existing test infrastructure rather than replacing it, ensuring smooth integration with the current workflow.

### Next Steps
1. **Component Registry Implementation** - Create the component registry module that integrates with existing test utils, focusing on `aplio-modern-1/test/utils/component-registry.js`. Expected outcome: Ability to register both server and client components with their metadata.

2. **Enhanced Scaffold Generator** - Modify the existing scaffold generator to render actual components instead of placeholders, focusing on `aplio-modern-1/test/utils/scaffold-templates/create-enhanced-scaffold.js`. Expected outcome: Test scaffolds that properly render the actual components.

3. **Server Manager Extension** - Extend the existing server manager to support proper component rendering in `aplio-modern-1/test/utils/server-manager/enhanced-server.js`. Expected outcome: Working server that can serve enhanced component scaffolds.

4. **OCR Implementation** - Add Tesseract.js-based OCR capabilities to extract error codes from screenshots in `aplio-modern-1/test/utils/ocr/text-extractor.js`. Expected outcome: Ability to extract and validate error codes from component screenshots.

5. **Test Runner Integration** - Create the test runner script that integrates all components in `aplio-modern-1/test/run-visual-tests.js`. Expected outcome: End-to-end test workflow that captures and validates component screenshots.

### Important Files
1. `aplio-modern-1/test/utils/component-registry.js` - Primary component registry for test system, to be implemented
2. `aplio-modern-1/test/utils/scaffold-templates/create-enhanced-scaffold.js` - Enhanced scaffold generator, to be implemented
3. `aplio-modern-1/test/utils/server-manager/enhanced-server.js` - Extended server manager, to be implemented
4. `aplio-modern-1/test/utils/ocr/text-extractor.js` - OCR text extraction module, to be implemented
5. `aplio-modern-1/test/utils/error-code-validator.js` - Error code validation module, to be implemented
6. `aplio-modern-1/test/run-visual-tests.js` - Main test runner script, to be implemented
7. `aplio-modern-1/test/utils/scaffold-templates/create-scaffold.js` - Existing scaffold generator, to be extended
8. `aplio-modern-1/test/utils/server-manager/server-manager.js` - Existing server manager, to be extended
9. `aplio-modern-1/test/utils/capture-screenshots-enhanced.js` - Enhanced screenshot capture, to be implemented

### Important Scripts, Markdown Files, and Specifications
1. `pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-spec.md` - Comprehensive specification for the testing system, including architecture, implementation details, and integration approach. Key sections to review:
   - Section 4: "Integration with Existing Test Infrastructure"
   - Section 6: "Implementation Specification" (contains code for all modules)
   - Section 6.7-6.9: "OCR Text Extraction Module" and related sections
   - Section 7: "Test Execution Workflow"
   - Section 8: "Implementation Timeline"

2. `aplio-modern-1/package.json` - Project dependencies, relevant for ensuring all required packages (tesseract.js, pixelmatch, pngjs) are installed

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