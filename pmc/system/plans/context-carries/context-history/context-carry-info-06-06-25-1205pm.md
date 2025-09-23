# Development Context & Operational Priorities
**Date:** 2025-06-06 12:05 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Current Task**: Unit Testing for T-1.1.5: Layout and Metadata Implementation
**Status**: Implementation Phase Complete - Moving to Unit Testing Phase
**Priority**: High - Critical for project milestone completion

**What is being worked on:**
The next agent must implement comprehensive unit tests for the recently completed T-1.1.5 Layout and Metadata Implementation task. This task successfully migrated the Aplio system from a basic Next.js setup to a sophisticated layout hierarchy with comprehensive metadata management, theme switching, and SEO optimization.

**Why it is being worked on:**
The implementation phase has been completed with 13/13 validation tests passing, but formal unit testing is required to meet the 90% code coverage requirement and ensure production readiness. The unit testing will validate all layout nesting behavior, metadata generation, theme switching functionality, and SEO implementation.

**Current state of implementation:**
- ✅ All implementation phases completed (PREP, IMP, VAL)
- ✅ Layout hierarchy implemented with root, marketing, and auth layouts
- ✅ Comprehensive metadata system with OpenGraph, Twitter Cards, and robots directives
- ✅ Theme switching with legacy font migration (Inter, Jakarta Sans, Playfair Display)
- ✅ SEO optimization with sitemap.ts and robots.ts
- ✅ Utility components (cn.ts, providers.tsx, ThemeSwitcher.tsx)
- ✅ Custom validation script showing 13/13 tests passing
- 🎯 **NEXT**: Formal unit testing with Jest, React Testing Library, Lighthouse, and Cheerio

**Critical context needed for continuation:**
The task has specific testing requirements defined in pmc/core/active-task.md requiring Jest, React Testing Library, Lighthouse, and Cheerio with 90% code coverage. The unit test engineer must create comprehensive tests that validate both the layout nesting behavior and metadata generation functionality across all implemented components.

### Current Active Action

**Task ID**: T-1.1.5: Layout and Metadata Implementation
**Current Phase**: Unit Testing Phase (Implementation Complete)
**Active Element**: Preparing comprehensive unit test suite for two main elements:
- T-1.1.5:ELE-1 - Layout implementation: Create nested layouts for optimal code sharing
- T-1.1.5:ELE-2 - Metadata API: Implement metadata for SEO optimization

**Last recorded action**: VAL-2 Complete: All metadata validation tests passed - 13/13 tests successful for layout and metadata implementation (Confidence: 9/10)

**Implementation Accomplishments**:
1. **Root Layout Foundation** (IMP-1 ✅): Migrated from Geist fonts to legacy fonts, added comprehensive metadata with OpenGraph/Twitter Cards, implemented ThemeSwitcher and Providers
2. **Route Group Architecture** (IMP-2 ✅): Enhanced marketing layout with shared navigation/footer, enhanced auth layout with proper styling and no-index robots
3. **Metadata Implementation** (IMP-3 ✅): Comprehensive metadata in root layout with template-based titles
4. **Dynamic Metadata Generation** (IMP-4 ✅): Enhanced about page metadata, created sitemap.ts and robots.ts

**Files Modified/Created During Implementation**:
- aplio-modern-1/app/layout.tsx (enhanced with legacy fonts and comprehensive metadata)
- aplio-modern-1/app/(marketing)/layout.tsx (shared navigation and footer components)
- aplio-modern-1/app/(auth)/layout.tsx (enhanced styling with no-index robots)
- aplio-modern-1/app/(marketing)/about/page.tsx (comprehensive metadata with OpenGraph/Twitter)
- aplio-modern-1/app/_utils/cn.ts (class name utility function)
- aplio-modern-1/app/_utils/providers.tsx (theme provider component)
- aplio-modern-1/app/_components/ThemeSwitcher.tsx (theme switching component)
- aplio-modern-1/app/sitemap.ts (dynamic sitemap generation)
- aplio-modern-1/app/robots.ts (robots.txt generation)
- aplio-modern-1/app/globals.css (updated with theme toggle styles and font variables)

### Next Steps

1. **Create Unit Test Structure** (Priority: High)
   - Dependencies: Task implementation complete, test environment setup required
   - Expected outcome: Test directory structure in aplio-modern-1/test/unit-tests/task-1-1/T-1.1.5/

2. **Implement Layout Testing** (Priority: High)
   - Dependencies: Test structure created, Jest and React Testing Library configured
   - Expected outcome: Comprehensive tests for layout nesting, theme switching, and component rendering

3. **Implement Metadata Testing** (Priority: High)
   - Dependencies: Layout testing foundation established
   - Expected outcome: Tests for metadata generation, OpenGraph tags, Twitter Cards, and SEO optimization using Cheerio/Lighthouse

4. **Coverage Analysis and Reporting** (Priority: High)
   - Dependencies: All unit tests implemented and passing
   - Expected outcome: 90% code coverage achieved and documented in test-T-1.1.5-coverage.md

5. **Task Completion Documentation** (Priority: Medium)
   - Dependencies: All tests passing and coverage requirements met
   - Expected outcome: Complete test documentation and task closure

### Important Files

1. **aplio-modern-1/app/layout.tsx** - Root layout with enhanced metadata and legacy fonts
2. **aplio-modern-1/app/(marketing)/layout.tsx** - Marketing layout with shared components
3. **aplio-modern-1/app/(auth)/layout.tsx** - Auth layout with no-index robots
4. **aplio-modern-1/app/(marketing)/about/page.tsx** - Enhanced about page with comprehensive metadata
5. **aplio-modern-1/app/_components/ThemeSwitcher.tsx** - Theme switching component requiring testing
6. **aplio-modern-1/app/_utils/providers.tsx** - Theme provider requiring testing
7. **aplio-modern-1/app/_utils/cn.ts** - Utility function requiring testing
8. **aplio-modern-1/app/sitemap.ts** - Dynamic sitemap generation requiring testing
9. **aplio-modern-1/app/robots.ts** - Robots.txt generation requiring testing
10. **aplio-modern-1/validate-metadata.js** - Custom validation script (13/13 tests passed)

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/active-task.md** - Primary task specification
   - Key sections: Task Information (lines 40-60), Acceptance Criteria (lines 61-70), Testing Overview (lines 192-196)
   - Testing requirements: Jest, React Testing Library, Lighthouse, Cheerio, 90% coverage

2. **pmc/core/active-task-unit-tests-2.md** - Unit testing framework
   - Key sections: Test Environment Setup, Element Tests, Coverage Reporting
   - Testing approach: Element-based testing with specific deliverables

3. **aplio-modern-1/package.json** - Dependencies and testing scripts
   - Key dependencies: next-themes, clsx, tailwind-merge for theme management
   - Testing tools: Jest, React Testing Library, Playwright configured

4. **aplio-legacy/app/layout.jsx** - Legacy reference for comparison
   - Original implementation used for migration validation

### Recent Development Context

**Last Milestone**: T-1.1.5 Layout and Metadata Implementation - Full completion with validation
**Key Outcomes**: 
- Comprehensive layout hierarchy with root, marketing, and auth layouts
- Full metadata system with OpenGraph, Twitter Cards, and SEO optimization
- Theme switching system with legacy font migration
- Dynamic sitemap and robots.txt generation
- Custom validation showing 13/13 tests passed

**Relevant Learnings**:
- Next.js route groups require careful page.tsx management to avoid conflicts
- Metadata API inheritance works correctly from layouts to pages
- Theme switching requires proper client-side hydration handling
- Legacy font migration requires updating both imports and CSS variables

**Technical Context**:
- Using Next.js 15.3.3 with App Router architecture
- TypeScript configured with strict type checking
- Theme management via next-themes package
- SEO optimization via Next.js metadata API
- Build issues resolved by removing conflicting route group pages

**Implementation Gaps Identified for Testing**:
1. **Route Group Navigation**: No tests exist for navigation between route groups
2. **Theme Persistence**: No tests for theme state persistence across page reloads
3. **Metadata Inheritance**: No tests verifying metadata inheritance from layouts to pages
4. **SEO Validation**: No tests using Lighthouse as specified in requirements
5. **Error Boundary Integration**: Theme switching error handling not tested
6. **Responsive Behavior**: Layout responsiveness not tested
7. **Accessibility**: ARIA labels and focus management not tested for theme switcher

**Testing Strategy Recommendations**:
- Use React Testing Library for component behavior testing
- Implement Cheerio tests for HTML metadata validation
- Create Lighthouse tests for SEO performance validation
- Mock next-themes for theme switching tests
- Test layout rendering in isolation and nested scenarios
- Validate metadata appears correctly in document head

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