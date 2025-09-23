# Development Context & Operational Priorities
**Date:** 07-07-25-0100PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task ID**: T-3.2.3: Accordion Container Implementation
**Current State**: Ready for implementation (T-3.2.2 successfully completed)
**Phase**: Preparation Phase (Not started)
**Implementation Location**: `aplio-modern-1/components/design-system/molecules/Accordion/Accordion.tsx`

You are implementing the Accordion container component that will manage accordion items with support for different variants (single-open and multiple-open modes). This task builds directly on the successful completion of T-3.2.2 AccordionItem implementation, which provides the foundation items that your container will orchestrate.

**Why This Matters**: The Accordion container is the orchestration layer that transforms individual AccordionItem components into a cohesive accordion interface. It provides state management, focus control, and variant behavior that makes the accordion system complete and production-ready.

**What You're Building**: 
- Server component container optimized for Next.js 14 patterns
- Single-open and multiple-open variant support
- Controlled and uncontrolled usage patterns
- Focus management system between accordion items
- State synchronization between container and items

### Critical Implementation Context

**T-3.2.2 Completion Status**: PRODUCTION READY
- All 5 phases completed successfully (24/24 unit tests passing, 100% coverage)
- Enhanced 18-scaffold visual testing protocol executed with 95% confidence validation
- Zero accessibility violations with complete ARIA accordion pattern implementation
- Animation timing validated (300ms ±10ms) with 60fps smooth transitions
- DSAP compliance score: 98%

**Key Infrastructure Available**:
- AccordionItem.tsx: Complete client component with expand/collapse state management
- AccordionIcon.tsx: Icon component with state-based switching and animation synchronization
- useAccordionAnimation.ts: Custom hook for smooth height transitions and content handling
- AccordionItem.module.css: Complete styling with responsive design and theme support
- AccordionProvider Context: From T-3.2.1 (dependency component for state management)

**Testing Framework Ready**: T-3.2.2 established a comprehensive testing protocol with:
- Enhanced scaffold system (18 scaffolds covering all states/themes/viewports)
- Sequential LLM vision analysis with 60-second rate limiting
- Visual regression testing with puppeteer screenshot capture
- Automated accessibility testing with zero violations baseline

### Existing Implementation Instructions Adaptations

**Container-Item Relationship**: Your Accordion container must integrate with the existing AccordionItem components from T-3.2.2. The AccordionItem components are client components with local state management, but your container should coordinate their behavior through:
- Context provider patterns (leverage existing AccordionProvider from T-3.2.1)
- Props-based state synchronization
- Focus management coordination
- Variant-specific behavior control

**Animation Coordination**: The AccordionItem components already have individual animation systems (300ms transitions). Your container must NOT interfere with these animations but should coordinate them when multiple items are involved (e.g., single-open mode closing one item while opening another).

**Server Component Optimization**: Unlike AccordionItem (client component), your Accordion container should follow P002-SERVER-COMPONENT pattern where possible, delegating interactivity to AccordionItem children and using server-side rendering for initial state.

### Modified Implementation Approaches

**State Management Strategy**: Based on T-3.2.2 implementation, you must use a hybrid approach:
- Server component for initial rendering and static content
- Context provider for coordinating multiple AccordionItem components
- Props-based controlled/uncontrolled patterns for flexible usage
- Local state delegation to AccordionItem components for animations

**Focus Management Requirements**: T-3.2.2 established keyboard navigation within individual items. Your container must extend this with:
- Tab order management across multiple items
- Arrow key navigation between accordion headers
- Home/End key support for first/last item navigation
- Focus restoration when items are dynamically shown/hidden

**Variant Implementation**: T-3.2.2 AccordionItem supports individual open/close state. Your container variants must coordinate this:
- Single-open mode: Automatically close other items when one opens
- Multiple-open mode: Allow multiple items to be open simultaneously
- Controlled mode: Parent component manages all open/close state
- Uncontrolled mode: Container manages state internally

### Additional Testing Needs

**Integration Testing**: Beyond T-3.2.2's individual component testing, you must test:
- Container-item state synchronization
- Multiple AccordionItem coordination
- Variant behavior switching
- Focus management across multiple items
- Performance with large numbers of items

**Enhanced Visual Testing**: Extend T-3.2.2's 18-scaffold approach with:
- Multi-item scenarios (2-5 items per scaffold)
- Variant-specific behavior (single-open vs multiple-open)
- Focus state visualization
- State transition testing between variants

### Key Files and Locations

**Files You Will Create**:
- `aplio-modern-1/components/design-system/molecules/Accordion/Accordion.tsx` (main container)
- `aplio-modern-1/test/unit-tests/task-3-2/T-3.2.3/` (test directory)
- `aplio-modern-1/test/scaffolds/T-3.2.3/` (visual testing scaffolds)

**Files You Will Modify**:
- `aplio-modern-1/components/design-system/molecules/Accordion/index.ts` (exports)
- Potentially `aplio-modern-1/components/design-system/molecules/Accordion/AccordionProvider.tsx` (if Context enhancements needed)

**Critical Reference Files**:
- `aplio-modern-1/components/design-system/molecules/Accordion/AccordionItem.tsx` (integration target)
- `aplio-legacy/components/home-4/CustomFAQ.jsx` (legacy container reference)
- `aplio-modern-1/test/reports/T-3.2.2-final-validation-report.md` (T-3.2.2 completion evidence)

### Specification References

**Design System Adherence Protocol (DSAP)**:
- Location: `aplio-modern-1/design-system/docs/`
- Required sections: `/components/interactive/accordion/`, `/animations/interactive/`
- DSAP compliance score target: ≥95% (T-3.2.2 achieved 98%)

**Pattern References**:
- P002-SERVER-COMPONENT: `aplio-modern-1/patterns/server-components.md`
- P022-STATE-MANAGEMENT: `aplio-modern-1/patterns/state-management.md`
- Legacy container patterns: `aplio-legacy/components/home-4/CustomFAQ.jsx:6-11`

**Testing Framework References**:
- Enhanced testing protocol: `aplio-modern-1/test/utils/T-3.2.2-sequential-vision-analysis.js`
- Scaffold system: `aplio-modern-1/test/utils/scaffold-templates/create-enhanced-scaffold.js`
- Screenshot capture: `aplio-modern-1/test/utils/T-3.2.2-screenshot-capture.js`

### Acceptance Criteria

**Core Functionality**:
- Accordion container properly renders and manages accordion items
- Both single-open and multiple-open variants are supported
- Container provides state management for controlled and uncontrolled usage
- Focus management works correctly between accordion items
- Component follows Next.js 14 server component patterns where possible
- State is properly synchronized between container and items

**Enhanced Criteria from T-3.2.2 Integration**:
- Container seamlessly integrates with existing AccordionItem components
- Animation coordination doesn't interfere with T-3.2.2's 300ms transitions
- Focus management extends T-3.2.2's keyboard navigation to multi-item scenarios
- Performance remains optimal with multiple AccordionItem children
- Visual fidelity matches legacy CustomFAQ container behavior

### Next Steps

1. **PREP Phase**: Complete DSAP Documentation Discovery for accordion container patterns
2. **PREP Phase**: Analyze legacy CustomFAQ container implementation for variant behavior
3. **PREP Phase**: Review T-3.2.2 AccordionItem integration points and Context system
4. **IMP Phase**: Implement Accordion container with server component optimization
5. **IMP Phase**: Add single-open and multiple-open variant support
6. **IMP Phase**: Implement controlled/uncontrolled state management patterns
7. **IMP Phase**: Build focus management system for multi-item coordination
8. **VAL Phase**: Execute enhanced testing protocol based on T-3.2.2 framework
9. **VAL Phase**: Generate comprehensive validation report following T-3.2.2 template

### Important Dependencies

**T-3.2.2 Completion**: RESOLVED - All components ready for integration
**T-3.2.1 AccordionProvider**: AVAILABLE - Context system ready for container usage
**Legacy Reference**: `aplio-legacy/components/home-4/CustomFAQ.jsx` - Container patterns documented
**Testing Infrastructure**: ESTABLISHED - T-3.2.2 framework ready for T-3.2.3 testing

### Important Scripts, Markdown Files, and Specifications

**Testing Scripts**: 
- `aplio-modern-1/test/utils/T-3.2.2-sequential-vision-analysis.js` - Proven LLM analysis framework
- `aplio-modern-1/test/utils/T-3.2.2-screenshot-capture.js` - Visual testing infrastructure

**Specification Files**:
- `pmc/core/active-task.md` - T-3.2.3 complete requirements
- `pmc/core/previous-task-unit-tests-2-enhanced.md` - T-3.2.2 testing protocol template

**Key Documentation**:
- `aplio-modern-1/test/reports/T-3.2.2-final-validation-report.md` - Production readiness confirmation
- `aplio-modern-1/design-system/docs/components/interactive/accordion/` - Container-specific design patterns

### Recent Development Context

**Last Milestone**: T-3.2.2 AccordionItem Implementation - PRODUCTION READY
**Key Outcomes**: 
- Complete AccordionItem component with 24/24 unit tests passing
- Enhanced 5-phase testing protocol with 95% confidence visual validation
- Zero accessibility violations with full ARIA accordion pattern
- Smooth 300ms animations with 60fps performance
- DSAP compliance score of 98%

**Relevant Learnings**: 
- Sequential LLM vision analysis (60-second delays) required for stable batch processing
- Enhanced scaffold system with 18 variations provides comprehensive visual coverage
- Static screenshot validation cannot assess interactive features - methodological limitation identified
- Phase 2 unit testing provides definitive validation of interactive behavior

**Technical Context**: 
- AccordionItem components are client components with local state management
- useAccordionAnimation hook provides 300ms timing with height transitions
- AccordionProvider Context from T-3.2.1 available for container coordination
- Testing infrastructure established and validated for T-3.2.3 usage

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