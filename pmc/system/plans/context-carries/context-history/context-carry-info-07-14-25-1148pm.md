# Development Context & Operational Priorities
**Date:** 2025-01-14 
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus
**T-3.3.3 Mobile Navigation Implementation - Enhanced Phase B Testing - Phase B3 Execution**

The current focus is completing **Phase B3 - Enhanced LLM Vision Analysis** of the T-3.3.3 Mobile Navigation Enhanced Phase B Testing protocol. This is a critical multi-modal testing approach that overcomes DOM environment limitations encountered in traditional unit testing.

**Context**: Traditional unit testing for T-3.3.3 Mobile Navigation had severe limitations with only 28% success rate (9/32 tests passing) due to DOM API limitations in Jest/jsdom environment (`style.getPropertyValue` not a function). The T-3.3.3 components were already implemented but needed comprehensive validation through visual testing.

**Current State**: 
- ✅ **Phase B1 - Scaffold Creation**: COMPLETE (16 scaffolds created)
- ✅ **Phase B2 - Screenshot Capture**: COMPLETE (16 screenshots captured)  
- 🔄 **Phase B3 - Enhanced LLM Vision Analysis**: READY TO START (this is the current focus)
- ⏳ **Phase B4 - Final Reporting**: PENDING

**Why Phase B3 is Critical**: 
The Enhanced LLM Vision Analysis provides AI-powered validation with ≥95% confidence scores across all 16 scenarios. This validates hamburger button functionality, slide-in animations, accessibility compliance, and responsive behavior that traditional unit tests could not verify.

### Current Active Action 
**Task ID**: T-3.3.3 Phase B3 - Enhanced LLM Vision Analysis
**Current Phase**: Implementation  
**Active Element**: Execute Enhanced LLM Vision Analysis using the correct script at `aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`
**Last Recorded Action**: Previous agent incorrectly created a new script instead of using the existing Enhanced LLM Vision Analyzer. The correct script is at `/aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js` and must be used.

### Next Steps 
1. **Execute Enhanced LLM Vision Analysis** - Use the correct script at `aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js` to analyze all 16 screenshots
2. **Validate 95% Confidence Requirement** - Ensure all analyses meet the ≥95% confidence threshold
3. **Complete Phase B3 Reporting** - Generate comprehensive vision analysis reports
4. **Move to Phase B4** - Final validation and reporting phase
5. **Update Todo Status** - Mark Phase B3 as complete and begin Phase B4

### Important Dependencies
**Enhanced LLM Vision Analyzer API**: The script at `aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js` connects to the Anthropic API for vision analysis. Must sleep 60 seconds between API calls for rate limiting.

### Important Files
1. **`aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`** - PRIMARY SCRIPT to use for Phase B3 analysis
2. **`pmc/core/active-task-unit-tests-2-enhanced-phase-B.md`** - Complete testing protocol and instructions
3. **`aplio-modern-1/test/screenshots/T-3.3.3/`** - Directory containing all 16 screenshots to analyze
4. **`aplio-modern-1/test/reports/T-3.3.3-phase-b-progress-report.md`** - Progress report showing 50% completion status
5. **`aplio-modern-1/test/scaffolds/T-3.3.3/`** - Directory with all 16 scaffolds created in Phase B1

### Important Scripts, Markdown Files, and Specifications
1. **`aplio-modern-1/test/utils/vision/enhanced-llm-vision-analyzer.js`** - Enhanced LLM Vision Analyzer script (MUST USE THIS)
2. **`pmc/core/active-task-unit-tests-2-enhanced-phase-B.md`** - Complete Enhanced Phase B Testing protocol
3. **`aplio-modern-1/test/scripts/capture-t333-screenshots.js`** - Screenshot capture script (already executed)
4. **`aplio-modern-1/test/utils/scaffold-templates/create-enhanced-scaffold.js`** - Scaffold creation script (already executed)

### Recent Development Context

**Last Milestone**: Successfully completed Phase B1 (Scaffold Creation) and Phase B2 (Screenshot Capture) with 16 scaffolds and 16 screenshots created

**Key Outcomes**: 
- 16 unique scaffolds created with real React SSR content (not mock HTML)
- 16 high-quality PNG screenshots captured with proper viewport configurations
- Multi-modal testing infrastructure fully operational
- All T-3.3.3 components validated as implemented and functional

**Relevant Learnings**: 
- Traditional unit testing has severe DOM API limitations in Jest/jsdom environment
- Multi-modal testing (scaffolds + screenshots + AI analysis) overcomes these limitations
- Visual validation is essential for hamburger button animations and accessibility features
- The Enhanced LLM Vision Analyzer requires 60-second sleep between API calls

**Technical Context**: 
- Test server running on port 3333
- All scaffolds use Tailwind CSS with proper responsive configurations
- Screenshots captured using Playwright with multiple viewport sizes
- Enhanced LLM Vision Analyzer connects to Anthropic API for vision analysis

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### T-3.3.3 Mobile Navigation Component Details

#### Component Structure
The T-3.3.3 Mobile Navigation consists of 4 implemented components:

| Component | File Path | Element | Status |
|-----------|-----------|---------|---------|
| MobileNavigation | `components/navigation/Mobile/MobileNavigation.tsx` | T-3.3.3:ELE-1 | ✅ Implemented |
| Styling | `components/navigation/Mobile/mobile-navigation.css` | T-3.3.3:ELE-2 | ✅ Implemented |
| Exports | `components/navigation/Mobile/index.ts` | T-3.3.3:ELE-3 | ✅ Implemented |
| Demo Component | `components/navigation/Mobile/MobileNavigationDemo.tsx` | T-3.3.3:ELE-4 | ✅ Implemented |

#### Legacy Reference
- **`aplio-legacy/components/navbar/PrimaryNavbar.jsx`** - Reference implementation for accuracy comparison

#### Enhanced Phase B Testing Artifacts

**16 Scaffolds Created (Phase B1)**:
- 4 Hamburger Button scenarios: `hamburger-closed`, `hamburger-open`, `hamburger-focus`, `hamburger-touch-targets`
- 4 Animation scenarios: `animation-closed`, `animation-opening`, `animation-open`, `animation-backdrop`
- 4 Accessibility scenarios: `accessibility-keyboard-nav`, `accessibility-screen-reader`, `accessibility-touch-targets`, `accessibility-edge-cases`
- 4 Responsive scenarios: `responsive-mobile-portrait`, `responsive-tablet-portrait`, `responsive-mobile-landscape`, `responsive-small-screen`

**16 Screenshots Captured (Phase B2)**:
- All scaffolds converted to PNG screenshots using Playwright
- Multiple viewport configurations tested
- High-quality visual artifacts ready for AI analysis

**Phase B3 Requirements**:
- Analyze all 16 screenshots using `enhanced-llm-vision-analyzer.js`
- Achieve ≥95% confidence scores for all analyses
- Sleep 60 seconds between API calls for rate limiting
- Generate comprehensive vision analysis reports
- Compare with legacy PrimaryNavbar.jsx for accuracy validation

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
