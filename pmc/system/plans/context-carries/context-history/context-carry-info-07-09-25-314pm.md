# Development Context & Operational Priorities
**Date:** 2025-07-09 15:14 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**Task:** T-3.2.4 Required Animation Testing Components Implementation

**What is being worked on:**
Comprehensive animation testing for the Accordion component that was identified as missing from the previously completed T-3.2.4 task. While T-3.2.4 achieved 90% code coverage and is marked as COMPLETED, analysis revealed that the Required Animation Testing Components were not fully executed, creating a compliance gap with the acceptance criteria.

**Why it is being worked on:**
The acceptance criteria in `pmc/core/active-task.md` explicitly require animation testing through:
- **ELE-3 Performance Optimization**: "Optimize component rendering and **animations**"
- **DSAP (Design System Adherence Protocol)**: Mandates animation compliance including state-transitions.md, animation performance standards, and animation accessibility
- **WCAG 2.1 AA Compliance**: Requires animation accessibility testing including reduced motion
- **90% Code Coverage**: Cannot be achieved without testing animation logic
- **Dynamic Content Height**: Requires height transition animation testing

**Current state of implementation:**
T-3.2.4 base task is COMPLETED with:
- 90% code coverage achieved across 3 components (Accordion.tsx, AccordionFocusManager.tsx, AccordionProvider.tsx)
- 120+ comprehensive test cases implemented
- 81/81 tests passing consistently
- Jest focus management crisis resolved with enhanced setup v1.3.0
- WCAG 2.1 AA compliance and performance optimization implemented
- Production ready status achieved

**Missing Animation Testing Components:**
- **Animation Coverage**: Testing animation state transitions and coverage
- **Performance**: Animation performance testing and optimization validation
- **CSS Mocking**: Mock CSS animations for consistent test environment
- **Height Animation**: Dynamic content height transition testing
- **State Testing**: Animation state management and transition validation
- **Performance Mocking**: Mock performance APIs for animation testing

**Critical context needed for continuation:**
- Base accordion implementation is complete and stable at `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\design-system\molecules\Accordion\`
- Test infrastructure is established at `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-3-2\T-3.2.4\`
- Legacy reference implementation at `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\shared\FaqItem.jsx` (lines 39-43 for animation performance)
- Animation testing must align with DSAP requirements in `aplio-modern-1/design-system/docs/animations/`

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.



### Next Steps 

1. **Animation Testing Setup** (T-3.2.4-ANIM-1)
   - Implement CSS animation mocking in Jest configuration
   - Set up performance API mocking for animation timing tests
   - Dependencies: Existing test infrastructure, Jest enhanced setup v1.3.0
   - Expected outcome: Stable animation testing environment

2. **Height Animation Testing** (T-3.2.4-ANIM-2)
   - Test dynamic content height transitions using CSS Grid and transform properties
   - Validate smooth animation performance for various content sizes
   - Dependencies: Animation testing setup complete
   - Expected outcome: Comprehensive height transition test coverage

3. **Animation State Management Testing** (T-3.2.4-ANIM-3)
   - Test animation state transitions (closed → opening → open → closing → closed)
   - Validate state synchronization with animation timing
   - Dependencies: Height animation testing complete
   - Expected outcome: Complete animation state validation

4. **Performance Animation Testing** (T-3.2.4-ANIM-4)
   - Test animation performance under various conditions
   - Validate 60fps targets and smooth transitions
   - Dependencies: State management testing complete
   - Expected outcome: Performance compliance validation

5. **Accessibility Animation Testing** (T-3.2.4-ANIM-5)
   - Test reduced motion preferences and accessibility compliance
   - Validate WCAG 2.1 AA animation accessibility requirements
   - Dependencies: Performance testing complete
   - Expected outcome: Full DSAP animation accessibility compliance

The Next Steps section is a subset of the Active Development Focus section.

### Important Dependencies

1. **Jest Enhanced Setup v1.3.0**
   - Current status: Implemented and stable
   - Impact: Foundation for animation testing environment, resolved focus management issues

2. **DSAP Animation Documentation**
   - Current status: Required documentation may be incomplete in `/design-system/docs/animations/`
   - Impact: Missing documentation should be noted but not block implementation using best practices

3. **CSS Animation Mocking Configuration**
   - Current status: Not yet implemented
   - Impact: Required for consistent animation testing environment in Jest

4. **Performance API Mocking**
   - Current status: Not yet implemented  
   - Impact: Required for animation timing and performance testing

5. **Legacy Animation Pattern Reference**
   - Current status: Available in FaqItem.jsx lines 39-43
   - Impact: Provides implementation patterns for height transitions and animation timing

The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

1. **pmc/core/active-task.md**
   - Contains T-3.2.4 acceptance criteria and DSAP requirements
   - Current state: Contains explicit animation testing requirements in ELE-3

2. **aplio-modern-1/components/design-system/molecules/Accordion/Accordion.tsx**
   - Main accordion component requiring animation testing
   - Current state: Completed implementation with 90% coverage

3. **aplio-modern-1/components/design-system/molecules/Accordion/AccordionFocusManager.tsx**
   - Focus management component with animation state dependencies
   - Current state: Completed implementation with 90% coverage

4. **aplio-modern-1/components/design-system/molecules/Accordion/AccordionProvider.tsx**
   - Provider component managing accordion state and animations
   - Current state: Completed implementation with 90% coverage

5. **aplio-modern-1/test/unit-tests/task-3-2/T-3.2.4/**
   - Test directory containing existing 120+ test cases
   - Current state: Complete functional tests, missing animation tests

6. **aplio-legacy/components/shared/FaqItem.jsx**
   - Legacy reference implementation for animation patterns (lines 39-43)
   - Current state: Unchanged legacy reference

7. **aplio-modern-1/jest.config.js**
   - Jest configuration requiring animation mocking setup
   - Current state: Enhanced setup v1.3.0, needs animation mock configuration

8. **aplio-modern-1/design-system/docs/animations/**
   - DSAP animation documentation directory
   - Current state: Contains animation compliance requirements

The Important Files section is a subset of the Active Development Focus section.

### Important Scripts, Markdown Files, and Specifications

1. **aplio-modern-1/design-system/docs/animations/interactive/state-transitions.md**
   - DSAP animation state transition requirements
   - Key sections: Animation timing, state synchronization, performance standards

2. **aplio-modern-1/design-system/docs/animations/timing/**
   - Animation timing and performance specifications
   - Key sections: Duration standards, easing functions, 60fps targets

3. **aplio-modern-1/design-system/docs/animations/accessibility/**
   - Animation accessibility compliance requirements
   - Key sections: Reduced motion preferences, WCAG 2.1 AA compliance

4. **pmc/core/active-task-unit-tests-2.md**
   - Enhanced test plan documentation with animation testing phases
   - Key sections: Phases 3-5 containing animation testing specifications

5. **pmc/system/plans/context-carries/02-new-test-carry-context-07-09-25-0155PM.md**
   - Previous context carryover with T-3.2.4 completion details
   - Key sections: Animation testing gap analysis, completion status

6. **pmc/system/plans/enhanced-test-plan-phases-1-2.md**
   - Test plan foundation phases
   - Key sections: Environment setup, component discovery patterns

7. **pmc/system/plans/enhanced-test-plan-phases-3-5.md**
   - Advanced testing phases including animation testing
   - Key sections: Visual testing, integration testing, animation validation

The Important Scripts, Markdown Files, and Specifications section is a subset of the Active Development Focus section.

### Recent Development Context

- **Last Milestone**: T-3.2.4 Accordion Testing and Optimization task completed with 90% code coverage achievement
- **Key Outcomes**: 
  - 120+ comprehensive test cases implemented across 3 accordion components
  - Jest focus management crisis resolved with enhanced setup v1.3.0
  - 81/81 tests passing consistently
  - WCAG 2.1 AA compliance and performance optimization implemented
  - Production ready status achieved
- **Relevant Learnings**: 
  - Analysis revealed animation testing gap despite 90% coverage completion
  - DSAP requirements mandate comprehensive animation testing for compliance
  - Animation testing is required for ELE-3 performance optimization acceptance criteria
  - Animation accessibility testing is required for WCAG 2.1 AA compliance
- **Technical Context**: 
  - Stable accordion component implementation with complete functional testing
  - Jest enhanced setup v1.3.0 provides foundation for animation testing
  - Animation testing requires CSS mocking and performance API mocking configuration
  - Legacy reference implementation provides animation pattern guidance (FaqItem.jsx lines 39-43)

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