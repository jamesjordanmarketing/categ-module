# Development Context & Operational Priorities
**Date:** 06-25-25-1250PM
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses the transition from successful completion of T-2.4.2 Responsive Layout Pattern Documentation to the implementation of T-2.4.3 Component-Specific Responsive Behavior Documentation. The previous task achieved production certification through comprehensive documentation validation testing, establishing proven patterns that must be replicated for the next task.

## Active Development Focus

### T-2.4.3: Component-Specific Responsive Behavior Documentation

You shall implement T-2.4.3 Component-Specific Responsive Behavior Documentation by creating comprehensive documentation for component-specific responsive behaviors including hero sections, feature sections, card components, and slider components. This task builds directly on the proven 5-file documentation pattern and enhanced testing protocol successfully validated in T-2.4.2.

**Implementation Location**: `aplio-modern-1\design-system\docs\responsive\components\`

**Why This Matters**: T-2.4.3 extends the responsive documentation framework established by T-2.4.1 (breakpoints) and T-2.4.2 (layouts) to complete the responsive behavior documentation suite with component-specific responsive patterns. This creates a comprehensive responsive design documentation system for the Aplio design system.

**Current State**: Ready for implementation. T-2.4.2 production certification provides the proven foundation and testing methodology to replicate.

### Critical Implementation Context

**Proven 5-File Documentation Pattern**: T-2.4.2 achieved production certification using exactly 5 files totaling 86.7KB. You must replicate this exact pattern:
1. **Component definitions file**: Core component responsive patterns  
2. **Implementation guidelines file**: Component usage patterns and responsive behaviors
3. **Constraints specifications file**: Technical component specifications and responsive principles
4. **Testing guide file**: Component validation and responsive testing approaches
5. **Visual reference file**: Component examples and responsive demonstrations

**Enhanced Testing Protocol Validated**: The 6-phase documentation testing protocol successfully validated T-2.4.2 with 100% accuracy. You must adapt this same protocol for component documentation testing.

**Legacy Component Analysis Required**: T-2.4.2 achieved 100% accuracy by analyzing specific legacy components. T-2.4.3 requires similar analysis of:
- `aplio-legacy/components/home-4/Hero.jsx` (lines 6-7) - hero responsive behavior
- `aplio-legacy/components/home-4/Feature.jsx` (line 38) - feature responsive behavior  
- `aplio-legacy/components/home-4/Feature.jsx` (lines 42-44) - card responsive behavior
- `aplio-legacy/components/shared/SwiperSlider.jsx` (lines 19-30) - slider responsive behavior

### Existing Implementation Instructions Adaptations

**T-2.4.1/T-2.4.2 Integration Requirements**: You must maintain the established cross-reference pattern to both:
- T-2.4.1 breakpoint system at `../breakpoints/breakpoint-definitions.md`
- T-2.4.2 layout system at `../layouts/layout-implementation-guidelines.md`

**Mobile-First Methodology**: Continue the mobile-first approach established in T-2.4.1 and validated in T-2.4.2. All component responsive patterns must follow mobile-first progression.

**TypeScript Strict Mode Compliance**: Follow T-2.4.2's proven pattern of TypeScript code examples that compile with strict mode enabled.

### Modified Implementation Approaches

**Component-Specific Documentation Focus**: Unlike T-2.4.2's layout focus, T-2.4.3 requires component-level responsive behavior documentation. You must document how individual components respond to breakpoint changes rather than overall layout patterns.

**Legacy Component Line-Number Accuracy**: T-2.4.2 achieved 100% accuracy by referencing exact line numbers. You must maintain this precision for component references:
- Hero.jsx:6-7 for hero responsive patterns
- Feature.jsx:38 for feature responsive patterns  
- Feature.jsx:42-44 for card responsive patterns
- SwiperSlider.jsx:19-30 for slider responsive patterns

**Testing Protocol Adaptation**: The enhanced testing protocol must be adapted from layout documentation testing to component documentation testing, maintaining the same 6-phase approach but focusing on component-specific validation.

### Eliminated Requirements

**React Component Implementation**: T-2.4.3 is documentation-only, not component implementation. Do NOT create React components.

**Interactive Component Testing**: Unlike React component tasks, T-2.4.3 requires documentation validation testing, not interactive UI testing.

**Visual Regression Testing**: Component visual testing is not required for documentation tasks.

### Additional Testing Needs

**Component-Specific Cross-Reference Testing**: Beyond the T-2.4.1/T-2.4.2 cross-references, you must validate component-to-component responsive behavior references within the documentation.

**Component Pattern Accuracy Validation**: Similar to T-2.4.2's legacy pattern accuracy testing, you must validate that documented component behaviors match actual legacy component implementations with 100% accuracy.

**Component-Level TypeScript Compilation**: TypeScript examples must compile successfully for component-specific responsive patterns, not just layout patterns.

### Key Files and Locations

**Primary Implementation Location**: `aplio-modern-1/design-system/docs/responsive/components/`

**Expected 5-File Structure**:
1. `component-definitions.md` - Core component responsive patterns
2. `component-implementation-guidelines.md` - Component usage and responsive behaviors  
3. `component-constraints-specifications.md` - Technical component specifications
4. `component-testing-guide.md` - Component validation approaches
5. `component-visual-reference.md` - Component examples and demonstrations

**Critical Dependencies**:
- T-2.4.1: `aplio-modern-1/design-system/docs/responsive/breakpoints/breakpoint-definitions.md`
- T-2.4.2: `aplio-modern-1/design-system/docs/responsive/layouts/layout-implementation-guidelines.md`
- Legacy components: `aplio-legacy/components/home-4/Hero.jsx`, `Feature.jsx`, `shared/SwiperSlider.jsx`

**Testing Infrastructure**: `aplio-modern-1/test/unit-tests/task-2-4/T-2.4.3/`

### Specification References

**T-2.4.2 Production Validation Report**: `aplio-modern-1/test/reports/T-2.4.2/T-2.4.2-validation-report.md` - Contains proven testing methodology and success criteria

**Enhanced Testing Protocol**: `pmc/core/previous-task-unit-tests-2-enhanced.md` - 6-phase documentation testing approach validated in T-2.4.2

**Legacy Component References**:
- Hero responsive behavior: `aplio-legacy/components/home-4/Hero.jsx` lines 6-7
- Feature responsive behavior: `aplio-legacy/components/home-4/Feature.jsx` line 38
- Card responsive behavior: `aplio-legacy/components/home-4/Feature.jsx` lines 42-44
- Slider responsive behavior: `aplio-legacy/components/shared/SwiperSlider.jsx` lines 19-30

### Acceptance Criteria

**From T-2.4.3 Active Task**:
1. Document card and list component responsive behaviors
2. Document container and section responsive behaviors  
3. Document form element responsive behaviors
4. Document responsive behavior implementation patterns

**Additional Requirements Based on T-2.4.2 Success**:
5. Achieve 100% accuracy to legacy component implementations
6. Maintain functional cross-references to T-2.4.1 and T-2.4.2 systems
7. Create 5-file documentation structure matching T-2.4.2 pattern
8. Pass enhanced 6-phase documentation validation testing

### Next Steps

1. **Analyze Legacy Components**: Study Hero.jsx, Feature.jsx, and SwiperSlider.jsx for responsive patterns
2. **Create Component Documentation Structure**: Implement 5-file pattern in `design-system/docs/responsive/components/`
3. **Document Component Responsive Behaviors**: Focus on component-specific responsive patterns vs layout patterns
4. **Validate Component Documentation**: Adapt T-2.4.2's 6-phase testing protocol for component validation
5. **Achieve Production Certification**: Follow T-2.4.2's proven validation approach for production deployment

### Important Dependencies

**T-2.4.2 Proven Success Pattern**: All files and testing methodology from T-2.4.2 provide the foundation for T-2.4.3 implementation.

**Legacy Component Accessibility**: All referenced legacy components must be accessible for accurate pattern extraction and validation.

### Important Files

**T-2.4.2 Reference Files**:
- `aplio-modern-1/design-system/docs/responsive/layouts/*.md` - Proven 5-file documentation pattern
- `aplio-modern-1/test/reports/T-2.4.2/T-2.4.2-validation-report.md` - Successful validation methodology

**T-2.4.3 Implementation Files** (to be created):
- `aplio-modern-1/design-system/docs/responsive/components/component-definitions.md`
- `aplio-modern-1/design-system/docs/responsive/components/component-implementation-guidelines.md`
- `aplio-modern-1/design-system/docs/responsive/components/component-constraints-specifications.md`
- `aplio-modern-1/design-system/docs/responsive/components/component-testing-guide.md`
- `aplio-modern-1/design-system/docs/responsive/components/component-visual-reference.md`

### Important Scripts, Markdown Files, and Specifications

**Enhanced Testing Protocol**: `pmc/core/active-task-unit-tests-2-enhanced.md` - Contains the proven 6-phase documentation testing approach that achieved 100% validation for T-2.4.2

**Active Task Specifications**: `pmc/core/active-task.md` - Contains complete T-2.4.3 requirements including acceptance criteria and component elements

**PMC Commands**: Use from pmc directory:
- `node bin/aplio-agent-cli.js update-phase-stage T-2.4.3 "PREP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.4.3 "IMP" "complete"`  
- `node bin/aplio-agent-cli.js update-phase-stage T-2.4.3 "VAL" "complete"`

### Recent Development Context

**Last Milestone**: T-2.4.2 Responsive Layout Pattern Documentation achieved production certification through comprehensive 6-phase validation testing

**Key Outcomes**: 
- 5-file documentation pattern proven successful (86.7KB total)
- Enhanced testing protocol validated with 100% accuracy 
- Cross-reference integration with T-2.4.1 confirmed functional
- Legacy pattern accuracy achieved 100% match with source implementations

**Relevant Learnings**: 
- Documentation-specific testing requires file system validation, not UI testing
- Legacy component line-number accuracy is critical for validation success
- 6-phase testing protocol effectively validates documentation quality
- TypeScript compilation testing can be deferred if terminal complexity issues arise

**Technical Context**: 
- Enhanced testing protocol adapted specifically for documentation validation
- Terminal commands require `| cat` suffix to prevent hanging
- pmc directory is default shell location
- Relative path cross-references proven functional between documentation systems

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