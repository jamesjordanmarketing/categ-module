# Development Context & Operational Priorities
**Date:** 07-07-25-0851PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task Transition: T-3.2.3 → T-3.2.4 Accordion Testing and Optimization**

**What was just completed (T-3.2.3 - Accordion Container Implementation):**
T-3.2.3 successfully implemented accordion container components with comprehensive testing validation. The implementation achieved 96% DSAP compliance and production-ready status through a complete 6-phase testing protocol (Phases 0-5). Key deliverables included:

- **Container Orchestration**: Accordion container managing multiple AccordionItems with single-open and multiple-open variants
- **State Management**: Both controlled and uncontrolled usage patterns implemented
- **Focus Management**: Advanced keyboard navigation and accessibility features
- **Visual Testing**: 27 screenshots captured across multiple component states
- **LLM Vision Analysis**: 4 core components analyzed (FaqSection, FaqItem, Card, Button) with AI-powered validation
- **Integration Testing**: Comprehensive component interaction and workflow validation
- **Performance Validation**: Sub-100ms render times and efficient animation timing

**Current Task (T-3.2.4 - Accordion Testing and Optimization):**
You must implement comprehensive testing and optimization for the accordion components created in T-3.2.3. This task focuses on performance optimization, accessibility compliance, and robust test coverage rather than new component implementation. The accordion implementation exists and is functional - your job is to optimize and comprehensively test it.

### Critical Implementation Context

**Testing Infrastructure Ready:**
- Enhanced testing environment already established in `aplio-modern-1/test/`
- Test server and dashboard infrastructure operational
- 27 screenshots and 14 LLM Vision analysis reports from T-3.2.3 available as baseline
- Testing directories created: `test/unit-tests/task-3-2/T-3.2.4/`
- Enhanced scaffold system and LLM Vision analyzer operational

**Component Architecture Validated:**
- `components/design-system/molecules/Accordion/Accordion.tsx` - Main container component
- `components/design-system/molecules/Accordion/AccordionFocusManager.tsx` - Focus coordination
- Integration with T-3.2.2 AccordionItem components confirmed
- Server component architecture with client-side state coordination established

**Performance Baseline Established:**
- Current render performance: <100ms (validated in T-3.2.3)
- Animation timing: 300ms ±10ms tolerance (validated in T-3.2.3)
- Memory usage: <2MB (validated in T-3.2.3)
- Test coverage requirement: 90% (new requirement for T-3.2.4)

### Existing Implementation Instructions Adaptations

**Enhanced Testing Requirements:**
Unlike T-3.2.3 which focused on implementation validation, T-3.2.4 requires comprehensive unit and integration testing. You must:

1. **Leverage Existing Test Infrastructure**: Use the enhanced testing environment from T-3.2.3 but expand testing scope
2. **Build on Visual Testing Results**: The 27 screenshots from T-3.2.3 provide baseline for visual regression testing
3. **Address LLM Vision Analysis Gaps**: T-3.2.3 LLM analysis showed task-specific validation failures that need attention
4. **Implement Performance Optimizations**: Based on T-3.2.3 performance metrics, implement targeted optimizations

**Modified Testing Approach:**
- **Test Coverage**: 90% code coverage requirement (vs T-3.2.3's functional validation)
- **Accessibility Testing**: WCAG 2.1 AA compliance validation (new requirement)
- **Performance Testing**: Optimize rendering and animations (builds on T-3.2.3 baseline)
- **Dynamic Content Testing**: Variable content height handling (new requirement)

### Modified Implementation Approaches

**Focus on Optimization, Not Implementation:**
T-3.2.4 is a testing and optimization task, not a new implementation task. The accordion components exist and are functional. Your approach must:

1. **Optimize Existing Code**: Implement memoization, lazy loading, and performance improvements
2. **Comprehensive Testing**: Create unit tests, integration tests, and accessibility tests
3. **Performance Measurement**: Establish metrics and benchmarks beyond T-3.2.3's functional validation
4. **Accessibility Enhancement**: Ensure WCAG 2.1 AA compliance with screen reader and keyboard-only testing

**Testing Strategy Evolution:**
- **T-3.2.3**: Implementation validation through visual testing and LLM analysis
- **T-3.2.4**: Comprehensive testing through unit tests, performance benchmarks, and accessibility validation

### Eliminated Requirements

**No New Component Implementation:**
- Do NOT create new accordion components - they exist from T-3.2.3
- Do NOT modify core accordion functionality - focus on optimization
- Do NOT recreate testing infrastructure - leverage existing T-3.2.3 setup

**Simplified Visual Testing:**
- Enhanced scaffolds and screenshots from T-3.2.3 provide baseline
- Focus on performance testing rather than extensive new visual validation
- LLM Vision analysis can reference existing T-3.2.3 analysis reports

### Additional Testing Needs

**Performance Optimization Testing:**
Based on T-3.2.3 implementation, you must add:
1. **Rendering Performance Tests**: Measure and optimize component render times
2. **Animation Performance Tests**: Validate smooth transitions and memory usage
3. **Dynamic Content Tests**: Test accordion behavior with variable content heights
4. **Memory Leak Testing**: Ensure proper cleanup of event listeners and animations

**Accessibility Testing Expansion:**
T-3.2.3 validated basic accessibility, but T-3.2.4 requires:
1. **Screen Reader Testing**: Comprehensive ARIA pattern validation
2. **Keyboard Navigation Testing**: Full keyboard-only navigation validation
3. **Focus Management Testing**: Advanced focus coordination testing
4. **Reduced Motion Testing**: Respect user motion preferences

### Next Steps

1. **Review T-3.2.3 Implementation**: Examine existing accordion components and their current state
2. **Establish Testing Environment**: Leverage existing T-3.2.3 testing infrastructure
3. **Implement Performance Benchmarks**: Create baseline measurements for optimization
4. **Create Comprehensive Test Suite**: Develop unit, integration, and accessibility tests
5. **Optimize Based on Testing Results**: Implement performance improvements based on test findings

### Important Files

**Core Implementation Files (from T-3.2.3):**
- `components/design-system/molecules/Accordion/Accordion.tsx` - Main container component
- `components/design-system/molecules/Accordion/AccordionFocusManager.tsx` - Focus management
- `components/design-system/molecules/Accordion/index.tsx` - Export management
- `components/design-system/molecules/Accordion/Accordion.module.css` - Component styling

**Testing Infrastructure Files:**
- `test/unit-tests/task-3-2/T-3.2.4/` - Target directory for new tests
- `test/utils/enhanced-llm-vision-analyzer.js` - LLM Vision testing tool
- `test/utils/scaffold-templates/create-enhanced-scaffold.js` - Scaffold generation
- `test/screenshots/T-3.2.3/` - Existing screenshots for baseline comparison

**Testing Results from T-3.2.3:**
- `test/validation/T-3.2.3-final-validation-report.md` - Comprehensive validation results
- `test/reports/T-3.2.3-testing-report.md` - Human-readable testing summary
- `test/screenshots/T-3.2.3/T-3.2.3-*-analysis.md` - LLM Vision analysis reports (14 files)

### Important Scripts, Markdown Files, and Specifications

**Task Documentation:**
- `pmc/core/active-task.md` - T-3.2.4 task specifications (lines 1-200)
- `pmc/core/previous-task.md` - T-3.2.3 completed task context
- `pmc/core/active-task-unit-tests-2.md` - Testing protocol documentation (lines 560-650)

**Legacy Reference Files:**
- `aplio-legacy/components/shared/FaqItem.jsx` - Legacy accordion implementation for reference
- `aplio-legacy/components/home-4/CustomFAQ.jsx` - Legacy container pattern reference

**Design System Documentation:**
- `aplio-modern-1/design-system/docs/` - DSAP compliance documentation
- `aplio-modern-1/design-system/docs/components/interactive/accordion/` - Accordion-specific design patterns

### Recent Development Context

**Last Milestone**: T-3.2.3 Accordion Container Implementation completed with comprehensive testing validation achieving 96% DSAP compliance and production-ready status.

**Key Outcomes**: 
- Fully functional accordion container with single-open and multiple-open variants
- Advanced focus management and keyboard navigation implemented
- Comprehensive visual testing with 27 screenshots and 14 LLM Vision analysis reports
- Integration testing validating container orchestration, state management, and component interactions
- Performance validation showing <100ms render times and efficient animation timing

**Relevant Learnings**: 
- Enhanced testing infrastructure with 6-phase validation protocol proved effective
- LLM Vision analysis identified task-specific validation gaps that need attention in T-3.2.4
- Visual testing revealed proper server/client component boundary identification
- Performance metrics established solid baseline for T-3.2.4 optimization work

**Technical Context**: 
- Testing environment operational with enhanced scaffold system and LLM Vision analyzer
- Component architecture validated with server component optimization and client-side coordination
- Focus management system extends T-3.2.2 patterns effectively
- Animation timing preserved at 300ms ±10ms tolerance from T-3.2.2 baseline

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