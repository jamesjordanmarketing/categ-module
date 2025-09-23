# Development Context & Operational Priorities
**Date:** 06-24-25-0240PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses the completed implementation and comprehensive testing of **T-2.3.5: Accessibility and Reduced Motion Documentation** and its transition to **T-2.4.1: Breakpoint System Documentation**. The previous task has been successfully implemented with 5 comprehensive accessibility documentation files created in the accessibility directory, following the proven 5-file structure pattern. All testing has been completed with a comprehensive PASS status.

## Active Development Focus

### T-2.4.1 Breakpoint System Documentation Implementation

You shall implement comprehensive breakpoint system documentation for the Next.js 14 design system that extracts and documents breakpoint values from the legacy codebase (`aplio-legacy/tailwind.config.js`), defines standard breakpoint naming conventions and pixel values, documents breakpoint usage patterns with component examples, and creates integration guides for breakpoints with CSS and JavaScript.

**Implementation Location**: `aplio-modern-1/design-system/docs/responsive/breakpoints/`

**Why This Matters**: T-2.4.1 creates the responsive foundation documentation that complements the animation accessibility work from T-2.3.5, providing a complete design system documentation suite that covers both motion accessibility and responsive design patterns.

**Current State**: Ready for implementation - T-2.3.5 accessibility documentation is complete and tested, providing a proven 5-file documentation pattern to follow.

### Critical Implementation Context

**T-2.3.5 Completion Impact on T-2.4.1**:
1. **Proven Documentation Pattern**: T-2.3.5 established a successful 5-file documentation structure that you MUST replicate for T-2.4.1:
   - Overview/main documentation file
   - Detailed implementation guide
   - Quick reference/utilities documentation
   - Testing and validation guide
   - Visual reference documentation

2. **Legacy Reference Accuracy Required**: T-2.3.5 testing confirmed 100% accuracy to `aplio-legacy/data/animation.js` is mandatory. You MUST maintain this same accuracy standard when referencing `aplio-legacy/tailwind.config.js` breakpoint definitions.

3. **TypeScript Compilation Standards**: All code examples in T-2.4.1 documentation must compile successfully with strict mode, following the pattern established in T-2.3.5.

4. **Cross-Reference Integration**: T-2.4.1 must seamlessly integrate with T-2.3.5 accessibility documentation, especially where responsive design intersects with motion accessibility.

### Existing Implementation Instructions Adaptations

**CRITICAL ADAPTATIONS based on T-2.3.5 completion**:

1. **Documentation Structure**: You MUST follow the 5-file pattern proven successful in T-2.3.5:
   - `breakpoint-definitions.md` (equivalent to reduced-motion-alternatives.md)
   - `responsive-guidelines.md` (equivalent to animation-accessibility-guidelines.md) 
   - `container-width-constraints.md` (equivalent to motion-preference-detection.md)
   - `breakpoint-testing-guide.md` (equivalent to accessibility-impact-assessment.md)
   - `responsive-visual-reference.md` (equivalent to visual-reference-documentation.md)

2. **Legacy Reference Standards**: You MUST achieve 100% accuracy to `aplio-legacy/tailwind.config.js` breakpoint definitions, matching the accuracy standard established for `animation.js` references in T-2.3.5.

3. **TypeScript Code Examples**: All breakpoint utility functions and responsive patterns must be provided as TypeScript examples that compile with strict mode, following T-2.3.5 patterns.

### Modified Implementation Approaches

**MODIFIED APPROACHES based on T-2.3.5 implementation**:

1. **Documentation-First Focus**: T-2.3.5 proved that comprehensive documentation with working code examples is more valuable than standalone component implementations. Apply this same approach to T-2.4.1.

2. **Testing Protocol Adaptation**: Apply the Enhanced Documentation Testing Protocol used for T-2.3.5 to validate T-2.4.1 breakpoint documentation:
   - File structure validation
   - TypeScript compilation testing
   - Legacy reference accuracy verification
   - Cross-reference integration testing

3. **Dark Mode Integration**: Following T-2.3.5 pattern, include dark mode responsive considerations as core requirement from the start, not as afterthought.

### Eliminated Requirements

**REMOVE these approaches that were not applicable in T-2.3.5**:
- React component discovery and validation (T-2.4.1 creates documentation files, not React components)
- Interactive component state testing (documentation focus, not interactive functionality)
- User event simulation (documentation files have no user interactions)
- Component lifecycle testing (documentation files have no component lifecycle)

### Additional Testing Needs

**NEW REQUIREMENTS discovered during T-2.3.5 testing**:

1. **Responsive Testing Validation**: Create automated verification that all documented breakpoint values match `tailwind.config.js` source code exactly
2. **Container Width Validation**: Test all container width constraints work correctly across documented breakpoints
3. **Cross-Browser Responsive Testing**: Verify responsive patterns work across Chrome, Firefox, Safari, Edge
4. **Integration Testing**: Validate seamless integration with T-2.3.5 accessibility patterns for responsive motion design
5. **Documentation Load Performance**: Test documentation examples for responsive performance optimization

### Key Files and Locations

**Implementation Directory**: `aplio-modern-1/design-system/docs/responsive/breakpoints/`

**Legacy Reference Source**: `aplio-legacy/tailwind.config.js` (lines 13-23 for breakpoint definitions and container widths)

**Integration Points**: 
- `aplio-modern-1/design-system/docs/animations/accessibility/` (T-2.3.5 files for responsive motion patterns)
- Existing Next.js 14 responsive utilities and patterns

**T-2.3.5 Reference Implementation** (COMPLETED - use as pattern):
1. `reduced-motion-alternatives.md` (540 lines) - Complete alternatives for all animation types
2. `animation-accessibility-guidelines.md` (260 lines) - WCAG 2.1 Level AA compliance framework  
3. `motion-preference-detection.md` (764 lines) - Comprehensive detection techniques
4. `accessibility-impact-assessment.md` (694 lines) - Detailed assessment framework
5. `visual-reference-documentation.md` (815 lines) - Visual reference patterns and examples

### Specification References

**Primary Sources**:
- `aplio-legacy/tailwind.config.js` lines 13-17 (breakpoint definitions)
- `aplio-legacy/tailwind.config.js` lines 18-23 (container width constraints)
- Next.js 14 responsive patterns and SSR considerations
- T-2.3.5 accessibility documentation for responsive motion integration

**Integration Requirements**:
- Tailwind CSS breakpoint system compatibility
- Next.js 14 App Router responsive utilities
- TypeScript strict mode compliance for all examples
- T-2.3.5 accessibility patterns for responsive design

### Success Criteria

**T-2.4.1 passes when ALL conditions are met**:

1. **Documentation Completeness**: All 5 breakpoint files contain required sections and meet content thresholds (follow T-2.3.5 line count pattern)
2. **Legacy Reference Accuracy**: 100% accuracy verified between documentation and `tailwind.config.js` source code
3. **Code Compilation Success**: All TypeScript examples compile successfully with strict mode enabled
4. **Responsive Testing**: All breakpoint patterns work correctly across target browsers
5. **Cross-Reference Integration**: Seamless integration with T-2.3.5 accessibility documentation verified
6. **Container Width Validation**: All container width constraints function correctly at documented breakpoints
7. **Next.js 14 Compatibility**: All examples are SSR-safe and App Router compatible

### Acceptance Criteria

**FRESH ACCEPTANCE CRITERIA discovered during T-2.3.5**:

1. **Responsive Motion Accessibility**: Document how breakpoint changes interact with motion preferences (building on T-2.3.5 patterns)
2. **Container Query Integration**: Include modern container query patterns alongside traditional breakpoint documentation
3. **Performance Optimization**: Document responsive image and content loading patterns specific to breakpoint thresholds
4. **Dark Mode Responsive**: Document dark mode responsive patterns as core requirement
5. **Testing Automation**: Provide automated testing patterns for responsive breakpoint validation

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