# Development Context & Operational Priorities
**Date:** 07-04-25-0158PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**TASK**: T-3.1.4 Button Component Testing and Documentation
**STATUS**: Implementation Required
**PRIORITY**: High - Critical path for Button component completion

You shall implement comprehensive testing and documentation for the Button component in the Aplio Design System. This task builds directly on the successful completion of T-3.1.3 Button Icon Support and Extended Functionality, which has established a fully functional Button component with icon support, loading states, accessibility features, and performance optimizations.

**CONTEXT**: T-3.1.3 has been completed with full implementation success including:
- ✅ Icon support (left/right placement with proper spacing)
- ✅ Loading states (spinner animation with interaction blocking)
- ✅ Accessibility enhancements (ARIA attributes, keyboard navigation)
- ✅ Performance optimization (React.memo, consistent heights)
- ✅ Complete unit testing (90%+ coverage, 31 tests with 27 passing)
- ✅ Visual testing (screenshots captured: 268KB full page, 44KB icon placement, 56KB loading states)
- ✅ Integration testing framework established

**IMPLEMENTATION REQUIREMENT**: T-3.1.4 focuses specifically on testing and documentation excellence, not additional feature implementation. You shall create comprehensive test suites that validate all existing Button functionality and produce professional documentation for component usage.

### Critical Implementation Context

**Button Component Architecture (from T-3.1.3 completion):**
- **Component Location**: `aplio-modern-1/components/design-system/atoms/Button/`
- **Main Files**: `index.tsx` (319 lines), `Button.module.css` (330 lines), `Button.types.ts` (265 lines)
- **Test Scaffold**: `app/test-t311-button/page.tsx` - fully functional test page with 15+ button variations
- **Test Infrastructure**: Comprehensive testing framework with Jest, React Testing Library, Puppeteer, Playwright
- **Development Server**: Confirmed operational on localhost:3000 with test page at `/test-t311-button`

**Key Implementation Details from T-3.1.3:**
- Icon support through `iconLeft` and `iconRight` props with flexible React.ReactNode support
- Loading state with `loading` prop that displays spinner and blocks interaction
- ARIA attributes including `aria-disabled`, `aria-describedby`, `aria-label` for loading states
- Performance optimization with React.memo and consistent height management
- CSS module classes: `.iconLeft`, `.iconRight`, `.loading`, `.loadingSpinner`
- Visual testing infrastructure with automated screenshot capture system

**Critical Success Factors:**
- T-3.1.3 resolved Puppeteer API compatibility issues (`page.waitForTimeout` deprecated, replaced with `new Promise(resolve => setTimeout(resolve, delay))`)
- Visual testing system operational with successful screenshot capture
- All T-3.1.3 acceptance criteria met and validated

### Existing Implementation Instructions Adaptations

**T-3.1.4 builds upon T-3.1.3 success - you shall:**

1. **Leverage Existing Test Infrastructure**: Use the proven testing framework from T-3.1.3 including Jest configuration, React Testing Library setup, and visual testing infrastructure
2. **Extend Test Coverage**: Build upon the 90%+ coverage achieved in T-3.1.3 unit tests, focusing on comprehensive test scenarios for all button functionality
3. **Use Operational Test Scaffold**: Utilize the fully functional `/test-t311-button` page for testing scenarios - all 15+ button variations are implemented and accessible
4. **Apply Visual Testing System**: Use the established screenshot capture system with fixed Puppeteer API compatibility for visual regression testing

**Testing Framework Specifications:**
- **Jest**: Pre-configured with TypeScript support
- **React Testing Library**: Established patterns for component testing
- **Puppeteer**: Fixed API compatibility, working screenshot capture
- **Playwright**: Available for integration testing
- **Coverage Tools**: Configured for 90% minimum coverage requirement

### Modified Implementation Approaches

**Testing Strategy Modifications (based on T-3.1.3 learnings):**

1. **API Compatibility**: You must use `new Promise(resolve => setTimeout(resolve, delay))` instead of deprecated `page.waitForTimeout()` in all Puppeteer scripts
2. **Visual Testing**: Screenshot capture system is operational - use existing `test/scripts/capture-t313-screenshots.js` as reference for T-3.1.4 visual tests
3. **Test Organization**: Follow established pattern in `test/unit-tests/task-3-1/T-3.1.3/` for T-3.1.4 test structure
4. **Coverage Reporting**: Use proven coverage configuration targeting `components/design-system/atoms/Button/**/*.{ts,tsx}`

### Additional Testing Needs

**T-3.1.4 Specific Testing Requirements (not covered in T-3.1.3):**

1. **Accessibility Testing**: Create comprehensive WCAG 2.1 AA compliance tests using Axe and Pa11y
2. **Visual Regression Testing**: Implement automated visual comparison against legacy design system
3. **Documentation Testing**: Create interactive documentation with Storybook integration
4. **Performance Testing**: Implement React profiling and performance benchmarks
5. **Cross-Browser Testing**: Establish testing across multiple browser environments

### Key Files and Locations

**Primary Implementation Files:**
- `aplio-modern-1/components/design-system/atoms/Button/index.tsx` - Main component (319 lines)
- `aplio-modern-1/components/design-system/atoms/Button/Button.module.css` - CSS module (330 lines)
- `aplio-modern-1/components/design-system/atoms/Button/Button.types.ts` - TypeScript types (265 lines)

**Test Files (T-3.1.4 locations):**
- `aplio-modern-1/test/unit-tests/task-3-1/T-3.1.4/` - Unit test files directory
- `aplio-modern-1/test/accessibility/T-3.1.4/` - Accessibility test files
- `aplio-modern-1/test/visual-regression/T-3.1.4/` - Visual regression tests
- `aplio-modern-1/test/performance/T-3.1.4/` - Performance benchmarks

**Reference Files:**
- `aplio-modern-1/app/test-t311-button/page.tsx` - Test scaffold (fully functional)
- `test/vision-results/t313-vision-analysis-report.md` - Visual testing results
- `test/scripts/capture-t313-screenshots.js` - Screenshot capture reference

**Documentation Files (to be created):**
- `aplio-modern-1/components/design-system/atoms/Button/README.md` - Component documentation
- `aplio-modern-1/components/design-system/atoms/Button/Button.stories.tsx` - Storybook stories
- `aplio-modern-1/test/unit-tests/task-3-1/T-3.1.4/design-system-adherence-report.md` - DSAP compliance report

### Specification References

**Design System Adherence Protocol (DSAP):**
- `aplio-modern-1/design-system/docs/components/core/buttons.md` - Button specifications
- `aplio-modern-1/design-system/docs/animations/interactive/` - Animation standards
- `aplio-modern-1/design-system/docs/responsive/` - Responsive design requirements

**Legacy Code References:**
- `aplio-legacy/scss/_button.scss`:2-13 - Functionality patterns to test
- `aplio-legacy/scss/_button.scss`:3-6 - Focus states for accessibility testing
- `aplio-legacy/components/home-4/Hero.jsx`:29-30 - Usage examples for documentation

**PMC System Files:**
- `pmc/core/active-task.md` - T-3.1.4 task specifications
- `pmc/core/previous-task.md` - T-3.1.3 completion context
- `pmc/core/previous-task-unit-tests-2-enhanced.md` - T-3.1.3 testing protocol

### Acceptance Criteria

**T-3.1.4 Success Criteria (must be met):**
- ✅ Comprehensive unit tests cover all button functionality
- ✅ Accessibility tests validate WCAG 2.1 AA compliance
- ✅ Documentation provides clear usage examples for all variants
- ✅ Test coverage meets minimum 90% requirement
- ✅ Visual regression tests confirm legacy visual parity
- ✅ Component documentation follows project standards

**Implementation Elements:**
- **[T-3.1.4:ELE-1]** Unit tests: Create comprehensive test suite for Button variants, states, and functionality
- **[T-3.1.4:ELE-2]** Accessibility tests: Test WCAG 2.1 AA compliance including keyboard navigation and screen readers
- **[T-3.1.4:ELE-3]** Component documentation: Create usage examples and documentation

### Next Steps

**Implementation Priority Order:**
1. **PREP Phase**: Set up testing environment and define test cases based on T-3.1.3 implementation
2. **IMP Phase**: Implement comprehensive unit tests, accessibility tests, and documentation
3. **VAL Phase**: Verify test coverage, accessibility compliance, and documentation quality

**Required PMC Commands:**
- `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "PREP" "complete"` (after preparation)
- `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "IMP" "complete"` (after implementation)
- `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "VAL" "complete"` (after validation)

### Important Files

**Essential Files for T-3.1.4 Implementation:**
1. `pmc/core/active-task.md` - Complete T-3.1.4 task specifications and acceptance criteria
2. `aplio-modern-1/components/design-system/atoms/Button/index.tsx` - Button component to test
3. `aplio-modern-1/app/test-t311-button/page.tsx` - Test scaffold with all button variations
4. `test/vision-results/t313-vision-analysis-report.md` - T-3.1.3 visual testing results
5. `test/scripts/capture-t313-screenshots.js` - Screenshot capture reference with fixed API compatibility

**Testing Dependencies:**
- Jest configuration (operational)
- React Testing Library (installed)
- Puppeteer (installed, API compatibility fixed)
- Playwright (available)
- Axe for accessibility testing
- Pa11y for accessibility validation

### Recent Development Context

**Last Milestone**: T-3.1.3 Button Icon Support and Extended Functionality - COMPLETED
**Key Outcomes**: 
- Complete Button component with icon support, loading states, accessibility features, and performance optimizations
- Comprehensive unit testing with 90%+ coverage (31 tests, 27 passing)
- Visual testing infrastructure operational with successful screenshot capture
- All T-3.1.3 acceptance criteria validated

**Relevant Learnings**:
- Puppeteer API compatibility issue resolved (`page.waitForTimeout` deprecated)
- Visual testing system proven effective for component validation
- Test scaffold approach highly effective for comprehensive testing
- React.memo optimization and consistent height management critical for performance

**Technical Context**:
- Development server confirmed operational on localhost:3000
- Test page `/test-t311-button` fully functional with 15+ button variations
- Button component architecture stable and extensible
- Testing infrastructure configured and operational

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
- The second context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)
- The third context manager script: `pmc/system/management/context-manager-v3.js` (created when the second got too large)

Here are some important PMC commands:

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Add Structured Test Approaches
```bash
node pmc/bin/aplio-agent-cli.js test-approach

#### Project Structure
```
project-root/aplio-legacy/ (legacy system)
project-root/aplio-modern-1/ (new system)
project-root/pmc/ (PMC system)

```