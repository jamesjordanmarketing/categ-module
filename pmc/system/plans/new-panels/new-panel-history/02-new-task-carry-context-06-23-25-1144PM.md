# Development Context & Operational Priorities
**Date:** 06-23-25-1144PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**Task ID:** T-2.3.3 - Scroll-Based Animation Pattern Documentation
**Implementation Location:** `aplio-modern-1/design-system/docs/animations/scroll/`
**Status:** Ready for Implementation

You shall implement comprehensive scroll-based animation pattern documentation following the proven T-2.3.2 success pattern that achieved a **98/100 implementation readiness score**. This task builds directly on the interactive animation foundation established in T-2.3.2.

**Critical Context from T-2.3.2 Completion:**
T-2.3.2 successfully created 5 comprehensive interactive animation documentation files (97KB total) with 100% legacy reference accuracy, 60+ dark mode specifications, and full WCAG 2.1 accessibility compliance. The documentation established the foundational patterns for all animation work in the modernized Aplio design system.

### Current Active Action 

**Task:** T-2.3.3: Scroll-Based Animation Pattern Documentation
**Phase:** Preparation Phase (PREP-1 to PREP-4)
**Active Element:** [T-2.3.3:ELE-1] Scroll-triggered animation documentation
**Critical Dependencies:** Legacy reference analysis from `FAQWithLeftText.jsx` and `FadeUpAnimation.jsx`

### Next Steps 

1. **PREP-1**: Analyze scroll-triggered animation patterns in `aplio-legacy/components/home-4/FAQWithLeftText.jsx` lines 22-35
2. **PREP-2**: Study parallax effect implementations in legacy codebase
3. **PREP-3**: Identify trigger points and thresholds for scroll animations
4. **PREP-4**: Research performance optimization techniques for scroll animations
5. **IMP-1**: Create comprehensive scroll animation documentation following T-2.3.2 quality standards

### Important Files

**Primary Implementation Files to Create:**
1. `aplio-modern-1/design-system/docs/animations/scroll/scroll-triggered-animations.md` - Core scroll animation patterns
2. `aplio-modern-1/design-system/docs/animations/scroll/parallax-effects.md` - Parallax and transformation documentation
3. `aplio-modern-1/design-system/docs/animations/scroll/progressive-reveal.md` - Content reveal animation patterns
4. `aplio-modern-1/design-system/docs/animations/scroll/performance-optimization.md` - Performance considerations
5. `aplio-modern-1/design-system/docs/animations/scroll/implementation-guide.md` - Integration guide

**Legacy Reference Files (Critical for Accuracy):**
1. `aplio-legacy/components/home-4/FAQWithLeftText.jsx` lines 22-35 - Scroll triggers, parallax effects, trigger points
2. `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 - Performance techniques
3. `aplio-legacy/scss/_common.scss` lines 39-50 - Mobile scroll behaviors (validation required)

**T-2.3.2 Success Pattern Files (Reference for Quality Standards):**
1. `aplio-modern-1/design-system/docs/animations/interactive/hover-animations.md` - Structure template
2. `aplio-modern-1/design-system/docs/animations/interactive/implementation-guide.md` - Integration pattern reference
3. `test/reports/T-2.3.2/T-2.3.2-comprehensive-validation-report.md` - Quality benchmarks

### Important Scripts, Markdown Files, and Specifications

**Testing Protocol (Critical for T-2.3.3 Success):**
1. `pmc/core/previous-task-unit-tests-2-enhanced.md` - Enhanced documentation testing protocol
2. `pmc/system/plans/task-approach/current-test-approach.md` - Testing approach template
3. `aplio-modern-1/test/validation-results/T-2.3.2/legacy-reference-validation.sh` - Legacy reference validation script

**Quality Standards Documentation:**
1. File size requirements: 15KB-25KB per file, 80KB-120KB total (T-2.3.1 benchmark)
2. Legacy reference accuracy: 100% validation required (CRITICAL)
3. Dark mode coverage: 50+ specifications minimum
4. Accessibility compliance: WCAG 2.1 with `prefers-reduced-motion` support

### Recent Development Context

**Last Milestone**: T-2.3.2 Interactive Animation Pattern Documentation completed with exceptional success (98/100 score)

**Key Outcomes**: 
- Established comprehensive animation documentation framework
- Achieved 100% legacy reference accuracy validation (zero errors)
- Created 60+ dark mode specifications exceeding requirements
- Implemented full WCAG 2.1 accessibility compliance
- Validated production-ready Framer Motion integration patterns

**Relevant Learnings**: 
- Legacy reference accuracy is CRITICAL - any incorrect file/line citations cause failure
- T-2.3.1 success pattern (98/100 score) must be replicated for quality benchmarks
- Documentation must be implementation-ready with precise timing values and easing functions
- Dark mode coverage significantly exceeds minimum requirements for comprehensive theming

**Technical Context**: 
- Markdown validation tools installed and configured
- Testing directory structure established in `aplio-modern-1/test/`
- Enhanced testing protocol validated and proven successful
- Legacy codebase accessible for reference validation

## Critical Implementation Context

**T-2.3.2 Success Pattern Replication Requirements:**
You must replicate the T-2.3.2 success pattern that achieved 98/100 implementation readiness. This means:
- Total documentation: 80KB-120KB range (T-2.3.2 achieved 97KB)
- Individual files: 15KB-25KB each
- 100% legacy reference accuracy (CRITICAL - zero tolerance for errors)
- 50+ dark mode specifications minimum
- Full WCAG 2.1 accessibility compliance with reduced motion support

**Documentation Structure Consistency:**
Follow the exact structure established in T-2.3.2 interactive animation documentation:
- Technical specifications with precise timing values
- Framer Motion integration examples with TypeScript
- Dark mode color specifications for all patterns
- Accessibility considerations with `prefers-reduced-motion` queries
- Implementation-ready React component patterns

## Existing Implementation Instructions Adaptations

**Legacy Reference Validation Enhancement:**
Based on T-2.3.2 testing success, you must implement the enhanced legacy reference validation approach:
- Extract exact line numbers and validate content accuracy
- Use the proven validation script pattern from T-2.3.2
- Cross-reference every cited file path and line number
- Generate validation reports for quality assurance

**Testing Protocol Integration:**
You shall use the enhanced testing protocol proven successful in T-2.3.2:
- Phase 0: Environment setup with documentation testing tools
- Phase 1: Markdown structure and content validation  
- Phase 2: Legacy reference accuracy validation (100% required)
- Phase 3: Code compilation and implementation testing
- Phase 4: Dark mode coverage and accessibility validation
- Phase 5: Quality assessment against T-2.3.1 benchmarks

## Modified Implementation Approaches

**Scroll-Specific Animation Considerations:**
Unlike T-2.3.2's focus on user interaction patterns, T-2.3.3 requires:
- Intersection Observer API integration patterns
- Viewport threshold and trigger point specifications
- Performance optimization for scroll-heavy animations
- Progressive enhancement for reduced motion preferences
- Mobile-specific scroll behavior adaptations

**Enhanced Performance Documentation:**
Building on T-2.3.2's accessibility focus, T-2.3.3 must include:
- GPU acceleration guidelines for scroll animations
- Will-change property usage patterns
- Animation throttling and debouncing techniques
- Memory management for long scroll sessions
- Battery optimization considerations for mobile devices

## Additional Testing Needs

**Scroll-Specific Validation Requirements:**
1. **Intersection Observer Pattern Testing** - Validate code examples compile with proper browser API usage
2. **Performance Threshold Validation** - Ensure documented performance patterns meet 60fps requirements
3. **Mobile Scroll Behavior Testing** - Validate touch scroll interactions and momentum patterns
4. **Accessibility Enhancement Testing** - Verify reduced motion implementations beyond T-2.3.2 standards

## Key Files and Locations

**Implementation Directory:**
`aplio-modern-1/design-system/docs/animations/scroll/` - Primary implementation location

**Testing Directory:**
`aplio-modern-1/test/unit-tests/task-2-3/T-2.3.3/` - Testing artifacts location

**Legacy Reference Sources:**
- `aplio-legacy/components/home-4/FAQWithLeftText.jsx` lines 22-35
- `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11

## Specification References

**Quality Benchmarks:** `test/reports/T-2.3.2/T-2.3.2-comprehensive-validation-report.md` - Section "T-2.3.1 Success Pattern Comparison"
**Testing Protocol:** `pmc/core/previous-task-unit-tests-2-enhanced.md` - Complete enhanced testing methodology
**Documentation Standards:** `aplio-modern-1/design-system/docs/animations/interactive/implementation-guide.md` - Lines 1-50 for structure reference

## Acceptance Criteria

**Core Requirements from T-2.3.3 Task Definition:**
- Document scroll-triggered animations with trigger points and behaviors
- Document parallax effects and scroll-based transformations
- Document progressive reveal animations for content sections
- Document performance considerations for scroll-based animations

**Enhanced Quality Requirements (Based on T-2.3.2 Success):**
- Achieve 95%+ quality score matching T-2.3.1/T-2.3.2 success pattern
- Maintain 100% legacy reference accuracy (CRITICAL)
- Include 50+ dark mode specifications
- Provide implementation-ready Framer Motion code patterns
- Ensure full WCAG 2.1 accessibility compliance

---

**Context Completion Check:** This carryover file contains all required sections and comprehensive implementation context for T-2.3.3. The implementation agent has complete guidance to achieve T-2.3.2 success pattern replication while addressing scroll-specific animation requirements.

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