# Development Context & Operational Priorities
**Date:** 06-24-25-1036AM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses the transition from successful T-2.3.3 validation to T-2.3.4 implementation within the Aplio Design System Modernization project. T-2.3.3 (Scroll-Based Animation Pattern Documentation) achieved exceptional success with 98/100 quality score and production approval. The next task, T-2.3.4 (Animation Timing and Easing Function Documentation), builds upon this success to complete the animation documentation system.

## Current Focus

### Active Development Focus

**What is being worked on:**
T-2.3.4: Animation Timing and Easing Function Documentation - Creating comprehensive documentation for animation timing values and easing functions for consistent implementation in the Next.js 14 design system, targeting the `design-system/docs/animations/timing/` directory.

**Why it is being worked on:**
Following the exceptional success of T-2.3.3 (98/100 implementation readiness), T-2.3.4 completes the animation documentation foundation by establishing standardized timing values and easing functions. This ensures consistent animation behavior across all components and provides implementation-ready specifications for the development team.

**Current state of implementation:**
Task T-2.3.4 is ready for implementation with all dependencies (T-2.1.0, T-2.1.4) completed. The implementation will leverage proven patterns from T-2.3.3's success while focusing on timing-specific documentation including duration standards, easing function specifications, and selection guidelines.

**Critical context needed for continuation:**
T-2.3.3 validation confirmed 100% legacy reference accuracy, 101 dark mode specifications (68% above minimum), and WCAG 2.1 Level AA compliance. T-2.3.4 must replicate this quality standard while focusing on timing documentation from legacy sources: `aplio-legacy/data/animation.js` (lines 1-94), `aplio-legacy/tailwind.config.js` (lines 73-93), and modern timing tokens.

### Next Steps

1. **T-2.3.4 PREP Phase Execution** - Analyze animation duration patterns and easing functions from legacy codebase following T-2.3.3 proven methodology
2. **Documentation Structure Creation** - Establish `animations/timing/` directory and create comprehensive timing documentation files following T-2.3.3 success pattern  
3. **Legacy Reference Integration** - Extract timing values from animation.js and tailwind.config.js with 100% accuracy requirement
4. **Implementation Documentation** - Create timing selection guides and easing function references with visual representations
5. **Quality Validation** - Execute comprehensive testing following T-2.3.3 validation protocol to ensure production readiness

### Important Files

1. **pmc/core/active-task.md** - T-2.3.4 complete task specification and acceptance criteria
2. **aplio-legacy/data/animation.js** (lines 1-94) - Critical legacy reference for animation durations and timing patterns
3. **aplio-legacy/tailwind.config.js** (lines 73-93) - Essential legacy reference for easing function definitions
4. **aplio-modern-1/design-system/tokens/colors.json** (lines 185-189) - Modern timing values integration point
5. **aplio-modern-1/design-system/docs/animations/scroll/** - T-2.3.3 reference implementation achieving 98/100 quality score
6. **test/validation-results/T-2.3.3/final-validation-report.txt** - Successful validation template and quality benchmarks

### Important Scripts, Markdown Files, and Specifications

1. **pmc/core/previous-task-unit-tests-2-enhanced.md** - T-2.3.3 validation protocol template for T-2.3.4 testing adaptation
2. **aplio-modern-1/test/validation-results/T-2.3.3/** - Complete validation artifact structure and success patterns
3. **pmc/system/plans/new-panels/02-new-task-carry-context-06-24-25-1036AM.md** - This context document for T-2.3.4 implementation guidance

### Recent Development Context

- **Last Milestone**: T-2.3.3 validation completed successfully with 98/100 quality score and production approval
- **Key Outcomes**: Established proven documentation methodology with 100% legacy reference accuracy and exceptional dark mode coverage (101 specifications)
- **Relevant Learnings**: T-2.3.3 success pattern: 5-file documentation structure (13KB-22KB each, 88KB total), comprehensive legacy integration, and accessibility-first approach
- **Technical Context**: All validation artifacts preserved in test/validation-results/T-2.3.3/ for replication in T-2.3.4 testing

## Critical Implementation Context

### T-2.3.3 Success Pattern Replication Requirements
T-2.3.4 MUST replicate the exceptional success achieved by T-2.3.3 by following the proven implementation methodology:

**Documentation Structure Excellence:**
- Target implementation location: `aplio-modern-1/design-system/docs/animations/timing/`
- Required file structure: Multiple comprehensive documentation files (minimum 4-5 files)
- Individual file size targets: 13KB-25KB each file
- Total documentation size target: 80KB-120KB (T-2.3.3 achieved 88KB)
- Quality score target: 95%+ implementation readiness (T-2.3.3 achieved 98/100)

**Legacy Reference Integration Excellence:**
- 100% legacy reference accuracy is CRITICAL - any inaccuracy fails entire implementation
- Primary legacy sources: `aplio-legacy/data/animation.js` lines 1-94 (duration patterns)
- Secondary legacy sources: `aplio-legacy/tailwind.config.js` lines 73-93 (easing functions)
- Tertiary sources: `aplio-modern-1/design-system/tokens/colors.json` lines 185-189 (timing values)
- All file paths and line numbers must be verified for 100% accuracy before documentation

**Dark Mode Coverage Excellence:**
- Minimum requirement: 60+ dark mode specifications across all documentation files
- T-2.3.3 achieved: 101 specifications (68% above minimum) - T-2.3.4 must match or exceed
- Coverage areas: CSS classes (dark:), theme patterns, mode implementation examples
- Integration requirement: Consistent dark mode timing behavior with light mode performance parity

### Existing Implementation Instructions Adaptations

**Testing Protocol Adaptation:**
The T-2.3.3 validation protocol in `pmc/core/previous-task-unit-tests-2-enhanced.md` must be adapted for T-2.3.4 with these modifications:

1. **File Discovery Updates**: Modify discovery scripts to target `design-system/docs/animations/timing/` instead of scroll directory
2. **Legacy Reference Validation**: Update critical reference validation to focus on animation.js (lines 1-94) and tailwind.config.js (lines 73-93)
3. **Content Validation Focus**: Adapt validation to timing-specific content (duration patterns, easing functions) rather than scroll-specific patterns
4. **Testing Directory Structure**: Create `test/validation-results/T-2.3.4/` following T-2.3.3 successful structure

**Quality Assurance Integration:**
- Leverage T-2.3.3 validation artifacts as quality benchmarks and templates
- Replicate the 5-phase validation protocol: Pre-Testing Setup → File Discovery → Legacy Validation → Dark Mode Coverage → Final Assessment
- Maintain the critical failure handling: any legacy reference inaccuracy fails entire test suite
- Preserve the exceptional quality standards: 98/100 target score with production approval

### Modified Implementation Approaches

**Documentation Content Focus Shift:**
While T-2.3.3 focused on scroll-triggered animations and parallax effects, T-2.3.4 shifts to timing-specific documentation:

- **Duration Documentation**: Standard animation durations for different interaction types (replacing scroll trigger documentation)
- **Easing Function Specification**: Visual representations and use cases for easing functions (replacing parallax effect documentation) 
- **Timing Consistency Patterns**: Cross-system timing guidelines (replacing progressive reveal patterns)
- **Selection Guide Creation**: Timing and easing combination recommendations (replacing performance optimization focus)

**Legacy Code Analysis Adaptation:**
- Primary analysis shifts from FAQWithLeftText.jsx scroll patterns to animation.js timing patterns
- Secondary analysis shifts from FadeUpAnimation.jsx performance to tailwind.config.js easing definitions
- Tertiary analysis includes modern timing tokens from design-system/tokens/colors.json
- Maintain 100% accuracy requirement but focus on timing-specific line ranges and patterns

### Eliminated Requirements

**Obsolete Implementation Elements from T-2.3.3:**
- **Scroll-Specific Documentation**: No scroll trigger points, viewport calculations, or Intersection Observer patterns needed
- **Parallax Effect Documentation**: No multi-layer parallax systems or transform-based effects required
- **Progressive Reveal Patterns**: No sequential animation delays or staggered reveals needed
- **Scroll Performance Optimization**: No throttling/debouncing or scroll-specific battery optimization required

**Removed Technical Integrations:**
- **Intersection Observer API Integration**: Not applicable to timing documentation
- **Viewport Threshold Calculations**: No scroll-based threshold requirements
- **Scroll Event Handling**: No scroll listener patterns or scroll position tracking
- **Mobile Scroll Optimization**: No scroll-specific mobile performance patterns needed

### Additional Implementation Needs

**Fresh Implementation Scenarios Specific to T-2.3.4:**
1. **Animation Duration Categorization**: Document timing patterns for micro-interactions, transitions, and complex animations
2. **Easing Function Visual Representation**: Create visual guides and implementation examples for cubic-bezier functions
3. **Timing Consistency Validation**: Establish patterns for consistent timing across different animation contexts
4. **Performance-Aware Duration Selection**: Document timing selections based on device capabilities and battery optimization
5. **Cross-Component Timing Coordination**: Guidelines for coordinated animations across multiple components

**Technical Documentation Requirements:**
- **Cubic-Bezier Function Documentation**: Complete specifications with visual curves and use case recommendations
- **Duration Scaling Patterns**: Responsive timing adjustments for different screen sizes and device capabilities
- **Timing Token Integration**: Integration patterns with design system tokens and CSS custom properties
- **Animation Performance Metrics**: Guidelines for timing selections that maintain 60fps performance standards

### Key Files and Locations

**Implementation Files to Create:**
- `aplio-modern-1/design-system/docs/animations/timing/animation-durations.md` - Standard duration documentation
- `aplio-modern-1/design-system/docs/animations/timing/easing-functions.md` - Easing function specifications with visual guides
- `aplio-modern-1/design-system/docs/animations/timing/timing-consistency.md` - Cross-system timing pattern guidelines
- `aplio-modern-1/design-system/docs/animations/timing/selection-guide.md` - Implementation decision guide for timing and easing
- `aplio-modern-1/design-system/docs/animations/timing/implementation-examples.md` - Code examples and integration patterns

**Critical Legacy Reference Files:**
- `aplio-legacy/data/animation.js` (lines 1-94) - Animation duration patterns and timing configurations
- `aplio-legacy/tailwind.config.js` (lines 73-93) - Easing function definitions and cubic-bezier specifications  
- `aplio-modern-1/design-system/tokens/colors.json` (lines 185-189) - Modern timing value integrations

**Testing and Validation Files:**
- `test/validation-results/T-2.3.4/` - Complete validation artifact structure (to be created)
- `test/reports/T-2.3.4/` - Testing reports and quality assessments (to be created)
- `test/legacy-reference-validation/T-2.3.4/` - Legacy accuracy validation artifacts (to be created)

### Specification References

**Authoritative Implementation Standards:**
- **Task Definition**: `pmc/core/active-task.md` - Complete T-2.3.4 requirements and acceptance criteria
- **Quality Benchmarks**: T-2.3.3 validation report achieving 98/100 quality score with production approval
- **Legacy Integration Standards**: 100% reference accuracy requirement with critical failure on any inaccuracy
- **Documentation Standards**: 80KB-120KB total size with 15KB-25KB individual file targets

**Technical Standards Integration:**
- **Accessibility Standard**: WCAG 2.1 Level AA compliance with reduced motion support (replicated from T-2.3.3)
- **Performance Standard**: 60fps maintenance with optimized timing selections and device-aware duration scaling
- **Code Quality Standard**: TypeScript strict mode compliance with full type safety for all code examples
- **Dark Mode Standard**: 60+ dark mode specifications minimum with consistent timing behavior across themes

### Acceptance Criteria Additions

**Fresh Acceptance Criteria from T-2.3.3 Learning:**
1. **Legacy Reference Accuracy Validation**: All timing values and easing functions must be validated against legacy sources with 100% accuracy
2. **Cross-File Timing Consistency**: All documented timing patterns must maintain consistency across different documentation files
3. **Visual Easing Representation**: Easing functions must include visual curve representations and practical use case examples
4. **Performance-Aware Documentation**: All timing recommendations must include performance implications and device capability considerations
5. **Integration Pattern Completeness**: Documentation must include complete integration examples with design tokens and CSS custom properties

**Quality Assurance Criteria from T-2.3.3 Success:**
- **Documentation Size Compliance**: Individual files 13KB-25KB, total 80KB-120KB following T-2.3.3 proven structure
- **Dark Mode Coverage Excellence**: Minimum 60+ dark mode specifications with consistent performance across themes
- **Accessibility Integration**: WCAG 2.1 Level AA compliance with comprehensive reduced motion support
- **Production Readiness**: All code examples must be implementation-ready with complete TypeScript support
- **Validation Protocol Success**: Must pass comprehensive 5-phase validation protocol achieving 95%+ quality score

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