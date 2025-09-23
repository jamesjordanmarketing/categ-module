# Development Context & Operational Priorities
**Date:** 06-23-25-0410PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

You shall implement **T-2.3.1: Entry and Exit Animation Pattern Documentation** which focuses on documenting entry and exit animation patterns from the legacy codebase for the Next.js 14 design system. This task creates comprehensive animation documentation in the `aplio-modern-1/design-system/docs/animations/entry-exit/` directory, analyzing legacy animation patterns from `aplio-legacy/data/animation.js` and `aplio-legacy/components/animations/FadeUpAnimation.jsx` to create implementation-ready specifications for AI agents building actual animated components.

**What you are implementing:** Animation pattern documentation files that specify entry animations, exit animations, fade patterns, and sequencing patterns with precise timing, duration, and easing function specifications.

**Why this matters:** T-2.2.6 successfully created comprehensive architecture documentation with 15 Mermaid diagrams and 95/100 implementation-readiness score. T-2.3.1 builds on this foundation by adding animation-specific documentation that will enable AI agents to implement sophisticated animation patterns while preserving the legacy system's smooth interactions and visual polish.

**Current state:** T-2.2.6 testing completed successfully with all 5 phases validated. All architecture documentation files exist with comprehensive dark mode coverage and accurate legacy reference validation. T-2.3.1 is ready for immediate implementation.

**Critical implementation context:** Focus on animation documentation rather than functional animation components. Your task is to create comprehensive documentation that AI agents can use to build animated components, similar to how T-2.2.6 created architectural blueprints.

Do not deviate from this focus without explicit instruction.

### Current Active Action 
[CONDITIONAL: Include ONLY if there is an active action in progress. Must include:
1. Task ID and title
2. Current phase (Preparation/Implementation/Validation)
3. Active element being worked on
4. Last recorded action
Remove section if no active action.]

### Bugs & Challenges in the Current Task
[CONDITIONAL: Include ONLY if there are active bugs or challenges. For each issue include:
1. Issue description
2. Current status
3. Attempted solutions
4. Blocking factors
Remove section if no active issues.]

The Current Open Task section and Bugs & Challenges in the Current Task are a subset of the Active Development Focus section.

### Next Steps 

1. **T-2.3.1 PREP-1**: Analyze entry animation patterns in `aplio-legacy/data/animation.js` lines 1-10 to document component mounting animations with timing and sequence
2. **T-2.3.1 PREP-2**: Study exit animation patterns in `aplio-legacy/data/animation.js` lines 11-30 to document component unmounting and page transitions  
3. **T-2.3.1 PREP-3**: Identify fade animation implementations in `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 and document parameters and variations
4. **T-2.3.1 PREP-4**: Research animation sequencing patterns in `aplio-legacy/data/animation.js` lines 11-94 for coordinated animations
5. **T-2.3.1 IMP-1 through IMP-5**: Create comprehensive animation documentation files with implementation-ready specifications

### Important Dependencies
[CONDITIONAL: Include ONLY if there are critical dependencies for the next steps. Each dependency must specify:
1. Dependency identifier
2. Current status
3. Impact on next steps
Remove section if no critical dependencies.]
The Important Dependencies section is a subset of the Active Development Focus section.

### Important Files

**T-2.3.1 Implementation Location:**
- `aplio-modern-1/design-system/docs/animations/entry-exit/` - Primary documentation directory (to be created)

**Legacy Animation Reference Files:**
- `aplio-legacy/data/animation.js` lines 1-10 - Entry animation patterns
- `aplio-legacy/data/animation.js` lines 11-30 - Exit animation patterns  
- `aplio-legacy/data/animation.js` lines 11-94 - Animation sequencing patterns
- `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 - Fade implementation examples

**T-2.2.6 Completed Architecture Documentation (reference for consistency):**
- `aplio-modern-1/design-system/docs/architecture/component-hierarchy.md` - 10,100 bytes, 38 headers, 18 code blocks
- `aplio-modern-1/design-system/docs/architecture/cross-component-styling.md` - 11,988 bytes, 53 headers, 34 code blocks
- `aplio-modern-1/design-system/docs/architecture/design-system-consistency.md` - 11,464 bytes, 57 headers, 56 code blocks  
- `aplio-modern-1/design-system/docs/architecture/component-variant-relationships.md` - 15,524 bytes, 48 headers, 50 code blocks
- `aplio-modern-1/design-system/docs/architecture/visual-component-relationships.md` - 13,621 bytes, 26 headers, 15 Mermaid diagrams

**PMC System Files:**
- `pmc/core/active-task.md` - T-2.3.1 task definition and implementation guidance
- `pmc/core/previous-task.md` - T-2.2.6 completed task reference

### Important Scripts, Markdown Files, and Specifications

**T-2.3.1 Task Specifications:**
- Task Definition: `pmc/core/active-task.md` lines 47-65 (Task Information section)
- Acceptance Criteria: `pmc/core/active-task.md` lines 67-73 (4 animation documentation requirements)
- Component Elements: `pmc/core/active-task.md` lines 103-115 (ELE-1 through ELE-4 specifications)

**Legacy Animation Code References:**
- Entry Animation Reference: `aplio-legacy/data/animation.js` lines 1-10 (component mounting animations)
- Exit Animation Reference: `aplio-legacy/data/animation.js` lines 11-30 (component unmounting animations)  
- Fade Pattern Reference: `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 (fade implementation)
- Sequencing Reference: `aplio-legacy/data/animation.js` lines 11-94 (coordinated animation patterns)

**T-2.2.6 Testing Results Documentation:**
- Enhanced Test Plan: `pmc/core/active-task-unit-tests-2-enhanced.md` - 5-phase testing protocol that was successfully completed
- Test Results: All 5 phases completed with 95/100 implementation-readiness score

### Recent Development Context

- **Last Milestone**: Successfully completed comprehensive testing of T-2.2.6 Component Relationship Documentation with all 5 testing phases validated
- **Key Outcomes**: 
  - Created 5 architecture documentation files totaling 62KB with 15 Mermaid diagrams (exceeding expected 10)
  - Achieved 95/100 implementation-readiness score with comprehensive dark mode coverage
  - Validated all legacy code references for accuracy against actual implementations
  - Established documentation approach that enables AI agents to build implementation-ready components
- **Relevant Learnings**: 
  - Architecture documentation testing requires different validation approach than component functionality testing
  - Focus on specification accuracy and implementation-readiness rather than interactive testing
  - Comprehensive dark mode coverage is critical for design system documentation
  - Mermaid.js diagrams provide effective visual documentation for complex relationships
- **Technical Context**: Documentation testing completed using file reading approach rather than terminal commands to avoid hanging issues with complex grep patterns

## Critical Implementation Context

You shall implement T-2.3.1 animation documentation following the successful pattern established by T-2.2.6. The previous task demonstrated that **architecture-level documentation** (not functional components) is the correct approach for design system tasks in this sequence.

**Implementation approach consistency:** T-2.2.6 created comprehensive documentation files with code examples, legacy references, and implementation-ready specifications. T-2.3.1 shall follow the same pattern for animation patterns.

**File structure consistency:** Create documentation files in `aplio-modern-1/design-system/docs/animations/entry-exit/` following the same comprehensive structure as T-2.2.6's architecture documentation.

**Legacy reference accuracy:** T-2.2.6 testing validated the critical importance of accurate legacy code references. You must ensure all animation pattern documentation cites correct file paths and line numbers from the legacy codebase.

## Modified Implementation Approaches

**Documentation Structure:** Based on T-2.2.6 success, create 4-5 comprehensive documentation files (9KB-15KB each) with:
- Proper markdown structure with consistent heading hierarchy
- Comprehensive code examples with syntactically correct implementations
- Dark mode coverage for all animation patterns
- Implementation-ready specifications for AI agents

**Visual Documentation:** T-2.2.6 successfully used Mermaid.js diagrams. Consider including animation flow diagrams for complex sequencing patterns.

**Testing Approach:** T-2.2.6 established that documentation tasks require documentation quality validation rather than functional component testing. Apply similar validation approach for animation documentation.

## Eliminated Requirements

**Functional Animation Components:** Do not create interactive animation components - this is a documentation task like T-2.2.6.

**Performance Testing:** Animation documentation does not require performance optimization testing.

**User Interaction Testing:** No user-facing features to test - focus on documentation quality validation.

## Additional Implementation Needs

**Animation-Specific Documentation Requirements:**
- Document precise timing values (duration, delay, easing functions)
- Include frame-by-frame animation sequence specifications
- Provide Framer Motion integration examples for Next.js 14
- Document animation state management patterns

**Legacy Animation Pattern Analysis:**
- Extract exact timing values from `animation.js`
- Document fade animation variants and parameters
- Map animation sequencing and staggering patterns
- Identify reusable animation utilities and helpers

**Implementation-Readiness Focus:**
- Provide AI agents with sufficient detail to implement animations without ambiguity
- Include code examples for common animation patterns
- Document integration with existing component architecture from T-2.2.6

## Acceptance Criteria

You must verify these measurable conditions constitute successful completion:

**Documentation Quality Gates:**
- All animation documentation files have proper markdown structure with consistent formatting
- All legacy animation references cite correct file paths and line numbers
- All animation patterns include precise timing, duration, and easing specifications  
- Documentation provides implementation-ready specifications without ambiguity
- Animation documentation achieves similar comprehensiveness to T-2.2.6's 95/100 score

**Animation Pattern Coverage:**
- Entry animations for component mounting documented with timing and sequence
- Exit animations for component unmounting and page transitions documented
- Fade animation patterns documented with parameters and variations
- Animation sequencing and staggering patterns documented for coordinated animations

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