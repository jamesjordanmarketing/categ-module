# Development Context & Operational Priorities
**Date:** 2025-06-17 21:41 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]
**TESTING PHASE FOR TASK T-2.2.1: Core UI Component Visual Documentation**

Execute comprehensive testing protocol for completed Task T-2.2.1 which has successfully documented visual characteristics of core UI components (buttons, inputs, cards) for the Next.js 14 design system.

**TASK T-2.2.1 COMPLETION STATUS:**
- **Task ID**: T-2.2.1
- **Title**: Core UI Component Visual Documentation
- **Status**: Implementation COMPLETE - All phases (PREP, IMP, VAL) completed
- **Implementation Location**: `aplio-modern-1/design-system/docs/components/core/`
- **Created Deliverables**: 6 comprehensive documentation files
- **Legacy Fidelity**: 100% achieved with precise measurements and specifications

**CRITICAL IMPLEMENTATION FINDINGS:**
1. **Button System**: Complex pseudo-element animations with transform origins, 500ms transitions, z-index layering, primary color #B1E346
2. **Input System**: Distinctive pill-shaped design (rounded-[48px]), focus states with primary color highlighting
3. **Card System**: 402px max-width constraint, custom shadow-nav effects, responsive padding (32px→20px)
4. **Dark Mode**: Comprehensive support with specific color overrides throughout all components
5. **Design Tokens**: Precise color integration (#B1E346 primary, #18181B paragraph) with Tailwind configuration

**TESTING REQUIREMENTS:**
The testing agent must execute the complete testing protocol documented in `pmc/core/active-task-unit-tests-2.md` with focus on:
- Validating documentation accuracy against legacy implementations
- Testing component visual specifications and measurements
- Verifying design token integration and color system compliance
- Ensuring responsive behavior documentation is complete

### Current Active Action 
**IMMEDIATE ACTION REQUIRED:** Execute Unit Testing Protocol for Task T-2.2.1
- **Task ID and Title**: T-2.2.1 - Core UI Component Visual Documentation
- **Current Phase**: TESTING (Post-Implementation Validation)
- **Active Element**: All 4 implemented documentation elements require testing
- **Last Recorded Action**: VAL phase completed - all documentation validated against legacy implementation

**ELEMENTS TO TEST:**
- **T-2.2.1:ELE-1**: Button component documentation (buttons.md) - ALL variants, states, measurements
- **T-2.2.1:ELE-2**: Input component documentation (inputs.md) - Form layout, pill-shaped design, focus states
- **T-2.2.1:ELE-3**: Card component documentation (cards.md) - 402px constraint, shadow-nav, responsive behavior
- **T-2.2.1:ELE-4**: Component states documentation (component-states.md) - Universal state reference matrix

### Next Steps 
**EXECUTE TESTING PROTOCOL IN SEQUENCE:**
1. **Phase 0**: Pre-Testing Environment Setup - Navigate to aplio-modern-1/, start test infrastructure
2. **Phase 1**: Component Discovery & Classification - Document all testable elements in current-test-discovery.md
3. **Phase 2**: Unit Testing - Execute Jest tests, validate documentation completeness
4. **Phase 3**: Visual Testing - Generate screenshots, validate visual specifications
5. **Phase 4**: LLM Vision Analysis - AI-powered validation of documentation accuracy

**CRITICAL TESTING DEPENDENCIES:**
- Testing Location: `aplio-modern-1/test/unit-tests/task-2-2/T-2.2.1/`
- Documentation Files: All 6 files in `aplio-modern-1/design-system/docs/components/core/`
- Legacy References: `aplio-legacy/scss/_button.scss`, `aplio-legacy/components/shared/ContactForm.jsx`, `aplio-legacy/components/home-4/Feature.jsx`

### Important Files
**CRITICAL DOCUMENTATION FILES CREATED (MUST TEST):**
1. `aplio-modern-1/design-system/docs/components/core/buttons.md` - Complete button specifications with exact measurements
2. `aplio-modern-1/design-system/docs/components/core/inputs.md` - Input field specifications with form layout integration
3. `aplio-modern-1/design-system/docs/components/core/cards.md` - Card specifications with responsive behavior documentation
4. `aplio-modern-1/design-system/docs/components/core/component-states.md` - Universal state reference matrix
5. `aplio-modern-1/design-system/docs/components/core/styling-overrides.md` - Context-specific variations and overrides
6. `aplio-modern-1/design-system/docs/components/core/visual-reference-process.md` - Visual capture process documentation

**LEGACY REFERENCE FILES (FOR VALIDATION):**
1. `aplio-legacy/scss/_button.scss` - Button system with pseudo-element animations
2. `aplio-legacy/components/shared/ContactForm.jsx` - Input implementations with pill-shaped design
3. `aplio-legacy/components/home-4/Feature.jsx` - Card implementations with shadow-nav system
4. `aplio-legacy/tailwind.config.js` - Color tokens and design specifications

### Important Scripts, Markdown Files, and Specifications
**TESTING PROTOCOL DOCUMENTATION:**
1. `pmc/core/active-task-unit-tests-2.md` - Complete 5-phase testing protocol with Enhanced LLM Vision analysis
2. `pmc/core/active-task.md` - Task completion status and implementation details
3. `pmc/system/plans/task-approach/current-task-approach.md` - Implementation approach used for T-2.2.1

**PMC COMMANDS FOR TESTING AGENT:**
- Navigate to pmc directory for PMC commands
- Use `node bin/aplio-agent-cli.js` for task status updates
- Testing execution should be performed from aplio-modern-1/ directory

### Recent Development Context
**Last Milestone**: T-2.2.1 Core UI Component Visual Documentation - COMPLETED
**Key Outcomes**: 
- 6 comprehensive documentation files created with 100% legacy fidelity
- Precise measurements extracted: buttons (500ms transitions, z-index layering), inputs (48px border radius), cards (402px max-width)
- Color system integration: #B1E346 primary, #18181B paragraph, complete dark mode support
- Design token integration with Tailwind configuration validated

**Relevant Learnings**: 
- Legacy button system uses complex before/after pseudo-elements requiring precise documentation
- Input system's pill-shaped design (rounded-[48px]) is a distinctive design pattern requiring special attention
- Card system's 402px max-width constraint and shadow-nav utilities need custom documentation
- Dark mode implementation is comprehensive and requires documentation of all color overrides

**Technical Context**: 
- All documentation files created in `aplio-modern-1/design-system/docs/components/core/`
- Legacy analysis completed for scss/_button.scss, ContactForm.jsx, Feature.jsx
- PMC system tracking: All phases (PREP, IMP, VAL) marked complete
- Ready for comprehensive testing protocol execution

**ADDITIONAL TESTING REQUIREMENTS NOT IN UNIT TESTS FILE:**
1. **Color Accuracy Testing**: Validate exact color values (#B1E346, #18181B) are correctly documented in all files
2. **Measurement Precision Testing**: Verify 402px card width, 48px border radius, 500ms transitions are accurate
3. **Shadow System Testing**: Validate shadow-nav system documentation matches legacy implementation
4. **Responsive Behavior Testing**: Ensure padding transitions (32px→20px) and responsive behavior is documented
5. **Dark Mode Completeness Testing**: Verify all dark mode variations are comprehensively documented

**TESTING STEPS NO LONGER NEEDED:**
- Implementation phase testing (already completed and validated)
- Legacy code analysis (completed during implementation)
- Component variant identification (all variants documented)
- Documentation template creation (all templates completed and used)

**CRITICAL SUCCESS METRICS FOR TESTING AGENT:**
- All 6 documentation files must pass accuracy validation against legacy implementations
- Button documentation must validate complex pseudo-element animation specifications
- Input documentation must validate pill-shaped design (rounded-[48px]) specifications
- Card documentation must validate 402px max-width constraint and shadow-nav system
- Component states documentation must validate complete state matrix coverage

The testing agent MUST execute the complete 5-phase testing protocol and validate that all documentation accurately reflects the legacy implementation with 100% fidelity before marking T-2.2.1 as fully complete.

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