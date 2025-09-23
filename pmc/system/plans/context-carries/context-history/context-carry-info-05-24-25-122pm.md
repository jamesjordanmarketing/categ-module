# Development Context & Operational Priorities
**Date:** 2025-05-24 13:22 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**T-1.1.3: Server Component Implementation - Visual Testing System Enhancement**

We are currently working on completing the T-1.1.3 Server Component Implementation visual testing system. This session successfully established a fully functional React SSR-based visual testing pipeline that generates pixel-perfect screenshots of actual React components with complete Tailwind CSS styling.

**What Has Been Accomplished:**
1. **Enhanced React Scaffold System**: Complete implementation of real React Server-Side Rendering for component testing, replacing previous mock HTML generation
2. **Screenshot Capture Pipeline**: Successfully generated 7 high-quality screenshots (19-59KB each) of all T-1.1.3 components with proper visual boundaries
3. **Component Boundary System**: Implemented visual distinction between server components (blue borders) and client components (green borders)
4. **Comprehensive Validation**: Achieved 100% success rate for scaffold generation and screenshot capture
5. **OCR System Analysis**: Conducted deep technical analysis identifying critical failures and created comprehensive solution plan

**Current State:**
- ✅ All 7 T-1.1.3 components (Card, Button, FaqItem, FaqSection, DashboardStats, StatChart, LoginForm) have enhanced scaffolds generated
- ✅ All components have pixel-perfect screenshots captured at `aplio-modern-1/test/screenshots/T-1.1.3/`
- ✅ Visual testing system shows real React components with actual Tailwind CSS styling
- ❌ OCR (Optical Character Recognition) system is non-functional due to Tesseract.js worker thread configuration issues

**Critical Context:**
The visual testing system represents a major breakthrough in component verification capability. The enhanced scaffolding system successfully renders actual React components using Server-Side Rendering, includes complete Tailwind CSS processing, and captures high-quality screenshots. However, the OCR text extraction component failed due to Node.js worker thread compatibility issues with Tesseract.js, preventing automated screenshot content verification.


### Next Steps 

1. **OCR System Implementation** - `pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-ocr.md`
   - Fix Tesseract.js worker thread configuration issues
   - Implement Phase 1 diagnostic assessment from OCR technical analysis
   - Dependencies: Node.js v22.12.0 compatibility verification
   - Expected outcome: Basic OCR text extraction functional for component verification

2. **TextExtractor Class Refactoring** - `aplio-modern-1/test/utils/ocr/text-extractor.js`
   - Remove problematic logger function causing DataCloneError
   - Implement worker-safe configuration architecture
   - Dependencies: Tesseract.js API compatibility verification
   - Expected outcome: OCR worker initialization successful without errors

3. **OCR Integration Testing** - `aplio-modern-1/test/screenshots/T-1.1.3/`
   - Test OCR analysis on all 7 generated screenshots
   - Validate component verification logic using extracted text
   - Dependencies: Working OCR system from steps 1-2
   - Expected outcome: Automated verification of "Client Component" vs "Server Component" labels

4. **Visual Testing Pipeline Completion** - T-1.1.3 task completion
   - Integrate OCR results into visual testing reports
   - Document complete visual testing system usage
   - Dependencies: Functional OCR system
   - Expected outcome: Complete autonomous visual testing capability for T-1.1.3

5. **Testing System Documentation** - Enhanced visual testing protocol
   - Create comprehensive usage guide for enhanced React rendering system
   - Document OCR-based verification procedures
   - Dependencies: Completed OCR implementation
   - Expected outcome: Reusable visual testing system for future tasks

### Important Files

1. **aplio-modern-1/test/utils/scaffold-templates/create-enhanced-scaffold.js** - Core enhanced scaffolding system that renders real React components with SSR
2. **aplio-modern-1/test/utils/ocr/text-extractor.js** - Broken OCR system requiring refactoring to fix worker thread issues
3. **pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-ocr.md** - Complete technical analysis and solution plan for OCR system fix
4. **aplio-modern-1/test/screenshots/T-1.1.3/** - Directory containing 7 successfully generated component screenshots
5. **aplio-modern-1/test/scaffolds/T-1.1.3/** - Directory containing 7 enhanced HTML scaffolds with real React component rendering
6. **aplio-modern-1/capture-t113-screenshots.js** - Successful screenshot capture script that generated all current images
7. **aplio-modern-1/test-all-components.js** - Batch component testing script that validates all T-1.1.3 components
8. **aplio-modern-1/validate-t113.js** - Component validation script that achieved 100% success rate

### Important Scripts, Markdown Files, and Specifications

1. **pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-ocr.md** 
   - Purpose: Complete technical analysis of OCR system failures with 5-phase solution plan
   - Key sections: Technical Failure Analysis, Comprehensive Solution Plan, Implementation Priority Matrix

2. **aplio-modern-1/test/utils/scaffold-templates/component-importer.js**
   - Purpose: Component discovery and import system for React SSR rendering
   - Key sections: Dynamic component loading, TypeScript compilation support

3. **aplio-modern-1/test/utils/scaffold-templates/boundary-injector.js**
   - Purpose: Visual boundary injection system for server/client component distinction
   - Key sections: Server component (blue) and client component (green) boundary logic

4. **aplio-modern-1/test/utils/capture-screenshots-enhanced.js**
   - Purpose: Enhanced screenshot capture system with Playwright integration
   - Key sections: Component registration requirements, visual boundary highlighting

### Recent Development Context

- **Last Milestone**: Successfully implemented complete React SSR-based visual testing system for T-1.1.3 with 100% component scaffold generation and screenshot capture success
- **Key Outcomes**: 
  - Real React component rendering replaced mock HTML generation
  - All 7 T-1.1.3 components have pixel-perfect screenshots with proper Tailwind CSS styling
  - Visual boundary system clearly distinguishes server vs client components
  - Enhanced scaffolding system processes actual component props and renders realistic content
- **Relevant Learnings**: 
  - React Server-Side Rendering in test environment highly effective for component verification
  - Playwright screenshot capture provides consistent high-quality results
  - Component boundary injection enables clear visual testing validation
  - OCR worker thread issues are primary blocker for automated verification
- **Technical Context**: 
  - Enhanced scaffold system uses real React renderToString for component processing
  - Screenshot capture uses 1280x800 viewport with full-page capture
  - All components successfully imported and rendered with TypeScript compilation
  - OCR system requires complete refactoring due to Tesseract.js worker configuration failures

## OCR System Implementation Guide

### Overview of Testing System Architecture

The T-1.1.3 visual testing system consists of four main components:

1. **Enhanced React Scaffolding** - Renders actual React components with SSR
2. **Screenshot Capture** - Uses Playwright to generate pixel-perfect images
3. **Visual Boundary Injection** - Adds server/client component visual indicators
4. **OCR Content Verification** - Extracts and validates text from screenshots (BROKEN)

### Current Scaffolding System Status

**FULLY FUNCTIONAL** - The scaffolding system successfully:
- Imports actual React components from `aplio-modern-1/app/_components/`
- Renders components using React Server-Side Rendering with real props
- Processes complete Tailwind CSS styling from `aplio-modern-1/app/globals.css`
- Injects visual boundaries (blue for server, green for client components)
- Generates enhanced HTML scaffolds with component metadata
- Creates realistic component content (not placeholder/mock data)

**Generated Assets:**
- 7 enhanced scaffold HTML files in `aplio-modern-1/test/scaffolds/T-1.1.3/`
- 7 high-quality PNG screenshots in `aplio-modern-1/test/screenshots/T-1.1.3/`
- Component validation achieving 100% success rate

### OCR System Implementation Instructions

Based on the technical analysis in `pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-ocr.md`, implement the OCR system fix using this detailed approach:

#### Phase 1: Diagnostic Assessment (CRITICAL FIRST STEP)

1. **Dependency Audit**
   - Execute `npm list tesseract.js` in `aplio-modern-1/` directory
   - Execute `npm list tesseract.js-core` to verify core module installation
   - Check `aplio-modern-1/node_modules/tesseract.js/` for actual installed files
   - Document exact version numbers and compare with Node.js v22.12.0 compatibility

2. **API Compatibility Investigation**
   - Access Tesseract.js documentation for the detected installed version
   - Compare `createWorker()` API signature with current usage in `text-extractor.js`
   - Identify correct worker initialization sequence for the specific version
   - Document required API changes before implementing fixes

#### Phase 2: TextExtractor Class Critical Fix

1. **Logger Function Removal** (PRIMARY ISSUE)
   - Open `aplio-modern-1/test/utils/ocr/text-extractor.js`
   - Locate line: `logger: m => (this.config.verbose ? console.log(m) : null)`
   - Replace with serializable configuration: `logger: this.config.verbose ? console.log : undefined`
   - Alternative: Remove logger entirely from worker configuration

2. **Worker Configuration Restructuring**
   - Separate logging configuration from worker configuration
   - Implement worker message handling in main thread
   - Create simple, serializable configuration object for worker initialization
   - Test worker creation without any function references

#### Phase 3: API Method Verification and Correction

1. **Worker Initialization Pattern**
   - Test correct API pattern for detected Tesseract.js version
   - Common patterns to try:
     - `await worker.load()`
     - `await worker.loadLanguage('eng')`
     - `await worker.initialize('eng')`
   - Document working initialization sequence

2. **OCR Processing Method**
   - Verify correct method signature for text recognition
   - Test: `await worker.recognize(imagePath)`
   - Validate data structure returned by recognition process

#### Phase 4: Implementation and Testing

1. **Create Fixed OCR Module**
   - Create new file: `aplio-modern-1/test/utils/ocr/simple-ocr-extractor.js`
   - Implement minimal working OCR without problematic features
   - Use only serializable configurations and verified API methods
   - Test with single screenshot before batch processing

2. **Integration Testing**
   - Test OCR on `aplio-modern-1/test/screenshots/T-1.1.3/FaqItem-enhanced.png`
   - Verify text extraction of "Client Component: FaqItem"
   - Validate prop extraction: "Test Question?" and "Test Answer"
   - Confirm confidence scoring and word detection

#### Phase 5: Visual Testing Integration

1. **Automated Verification Script**
   - Create script to process all 7 T-1.1.3 screenshots
   - Implement component verification logic:
     - Server components should contain "Server Component: [ComponentName]"
     - Client components should contain "Client Component: [ComponentName]"
   - Generate OCR results JSON files for each screenshot

2. **Complete Visual Testing Pipeline**
   - Integrate OCR verification into existing validation scripts
   - Update `aplio-modern-1/validate-t113.js` to include OCR-based verification
   - Generate comprehensive testing reports combining scaffold, screenshot, and OCR results

### Success Criteria for OCR Implementation

**Minimum Viable Solution:**
- OCR successfully extracts text from all 7 T-1.1.3 screenshots
- Component type verification works ("Client Component" vs "Server Component")
- Text extraction confidence >70%
- No worker thread errors or memory leaks

**Optimal Solution:**
- OCR accuracy >90% for component verification text
- Processing time <5 seconds per screenshot
- Integration with automated testing pipeline
- Comprehensive error handling and logging

### Critical Implementation Notes

1. **Worker Thread Safety**: All configurations passed to Tesseract.js workers must be serializable (no functions, closures, or complex objects)
2. **Version Compatibility**: Verify Tesseract.js version compatibility with Node.js v22.12.0 before implementing fixes
3. **Error Handling**: Implement robust error handling for worker initialization failures
4. **Resource Cleanup**: Ensure proper worker termination to prevent memory leaks
5. **Fallback Strategy**: Consider alternative OCR libraries if Tesseract.js proves incompatible

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