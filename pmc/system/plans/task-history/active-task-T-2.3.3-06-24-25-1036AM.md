# Current Active Task Coding Instructions

## Table of Contents
1. [Task Information](#task-information)
2. [Current Implementation Focus](#current-implementation-focus)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Task Approach](#task-approach)
5. [Task Development Work Pad](#task-development-work-pad)
6. [Components/Elements](#componentselements)
7. [Implementation Process Phases](#implementation-process-phases)
   - [7.1 Preparation Phase](#preparation-phase)
   - [7.2 Implementation Phase](#implementation-phase)
   - [7.3 Validation Phase](#validation-phase)
8. [Testing Overview](#testing-overview)
9. [Current Element](#current-element)
10. [Recent Actions](#recent-actions)
11. [Notes](#notes)
12. [Errors Encountered](#errors-encountered)
13. [Next Steps](#next-steps)
14. [Addendums](#addendums)
    - [14.1 Full Project Context](#full-project-context)
    - [14.2 Prior Task and its Current Status](#prior-task-and-its-current-status)
    - [14.3 Next Task in Sequence](#next-task-in-sequence)
    - [14.4 New Dependencies](#new-dependencies)
    - [14.5 Improvement Suggestions](#improvement-suggestions)


Now your job is to code this task.
1. Read it once completely. Then think about how you are going to approach it.
2. Read it again. Make any needed adjustments to your planned approach.
3. Update the Task Approach section with a detailed description of how you will complete this task.
4. Fill in the Expected Implementation Files section with files you plan to create or modify.
5. Remember all PMC commands are best run from the pmc directory using node bin/[command]

## Current Implementation Focus
Currently: Reading task requirements
Phase: Not started
Step: Initial review
Current Element: None - reviewing task requirements

## Task Information
Task ID: T-2.3.3
Task Title: T-2.3.3: Scroll-Based Animation Pattern Documentation

- FR Reference: FR-2.3.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\animations\scroll\`
- Patterns: P019-SCROLL-ANIMATION
- Dependencies: T-2.1.0, T-2.1.4
- Estimated Hours: 2-3
- Description: Document scroll-based animation patterns including scroll-triggered animations and parallax effects for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-3\T-2.3.3\`
- Testing Tools: Jest, Storybook, Cypress, React Testing Library, Intersection Observer
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/23/2025, 11:44:14 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Document scroll-triggered animations with trigger points and behaviors
- Document parallax effects and scroll-based transformations
- Document progressive reveal animations for content sections
- Document performance considerations for scroll-based animations

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/23/2025, 11:52:10 PM)

Overview:
Create comprehensive scroll-based animation pattern documentation in `aplio-modern-1/design-system/docs/animations/scroll/` replicating T-2.3.2's 98/100 implementation readiness success. I will analyze scroll-triggered animations, parallax effects, and trigger points from legacy FAQWithLeftText.jsx and FadeUpAnimation.jsx to produce implementation-ready specifications with Intersection Observer patterns, performance optimization, and WCAG 2.1 accessibility compliance.

Implementation Strategy:
1. **Legacy Scroll Pattern Analysis Phase**: Systematically examine scroll animation implementations in `aplio-legacy/components/home-4/FAQWithLeftText.jsx` lines 22-35 (scroll triggers, parallax effects, trigger points) and `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 (performance techniques) to extract precise scroll thresholds, viewport calculations, and optimization patterns.

2. **Documentation Structure Creation**: Establish `animations/scroll/` directory and create 5 comprehensive documentation files (15KB-25KB each, 80KB-120KB total) following T-2.3.2's successful pattern: scroll-triggered-animations.md, parallax-effects.md, progressive-reveal.md, performance-optimization.md, and implementation-guide.md.

3. **Scroll Animation Specification Documentation**: Document each scroll pattern with implementation-ready specifications including Intersection Observer thresholds, viewport trigger calculations, GPU acceleration guidelines, will-change properties, Framer Motion scroll integration examples, and progressive enhancement patterns.

4. **Performance Optimization Documentation**: Include comprehensive performance considerations for scroll-heavy animations with throttling/debouncing techniques, memory management patterns, battery optimization for mobile devices, and 60fps maintenance strategies.

5. **Validation and Quality Assurance**: Validate all legacy code references for 100% accuracy (critical requirement), ensure comprehensive dark mode coverage (50+ specifications minimum), verify WCAG 2.1 accessibility compliance with prefers-reduced-motion support, and test documentation completeness against T-2.3.2 success standards.

Key Considerations:
- **Legacy Reference Accuracy**: All scroll animation references must cite correct file paths and line numbers - 100% accuracy required for validation success
- **T-2.3.2 Quality Replication**: Must achieve 95%+ readiness score, 80KB-120KB documentation size, and exceed 50+ dark mode specifications
- **Scroll-Specific Performance**: Include GPU acceleration, will-change properties, throttling patterns, and mobile battery optimization
- **Intersection Observer Integration**: Comprehensive API usage patterns with threshold configurations and viewport calculations
- **Enhanced Accessibility**: WCAG 2.1 compliance with prefers-reduced-motion queries and progressive enhancement patterns

### Approach History

## Task Development Work Pad

As you work on this task, you may use the dedicated work pad file at:
`C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\pmc\core\task-work-pad-dev.md`

This work pad is your thinking space where you can:
- Work through complex implementation approaches
- Document decisions you're making and why
- Keep track of issues to revisit later
- Break down challenging problems into steps
- Test code snippets before final implementation
- Track progress across multiple components

Using this work pad is entirely optional but encouraged for complex tasks where external thinking would be beneficial. Nothing written there will be evaluated as final code - it's purely to assist your development process.

When using the work pad, start each new entry with a timestamp and brief context header to keep your thoughts organized.


## Components/Elements
### [T-2.3.3:ELE-1] Scroll-triggered animation documentation: Document animations triggered by scroll position
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\FAQWithLeftText.jsx`:22-35 (scroll triggers)

### [T-2.3.3:ELE-2] Parallax effect documentation: Document parallax and scroll-based transformations
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\FAQWithLeftText.jsx`:22-35 (parallax effects)

### [T-2.3.3:ELE-3] Scroll animation trigger points: Document scroll animation trigger thresholds and behaviors
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\FAQWithLeftText.jsx`:22-35 (trigger points)

### [T-2.3.3:ELE-4] Performance optimization documentation: Document techniques for optimizing scroll animations
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\animations\FadeUpAnimation.jsx`:6-11 (performance techniques)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze scroll-triggered animation patterns in the legacy codebase (implements ELE-1)
2. [PREP-2] Study parallax effect implementations in the legacy codebase (implements ELE-2)
3. [PREP-3] Identify trigger points and thresholds for scroll animations (implements ELE-3)
4. [PREP-4] Research performance optimization techniques for scroll animations (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.3.3 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document scroll-triggered animation patterns with timing and properties (implements ELE-1)
2. [IMP-2] Document parallax and scroll-based transformation effects (implements ELE-2)
3. [IMP-3] Document scroll animation trigger points and viewport thresholds (implements ELE-3)
4. [IMP-4] Document performance optimization techniques for scroll animations (implements ELE-4)
5. [IMP-5] Create visual reference documentation for scroll-based animations (implements ELE-1, ELE-2)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.3.3 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify scroll-triggered animation documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify parallax effect documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Test trigger point documentation with example components (validates ELE-3)
4. [VAL-4] Validate performance optimization documentation for accuracy (validates ELE-4)

Validation Test Failure Strategy:
- Document all validation test failures with error messages and stack traces
- For each validation failure, implement fixes in the corresponding implementation file
- Rerun failed validation tests until they pass
- If a validation test cannot be fixed after 5 attempts, document the issue and proceed only if it doesn't affect critical functionality
- Log all validation test failures using the error command:
  ```
  node pmc/bin/aplio-agent-cli.js error "<error description>" <severity 1-10>
  ```
  Example error logs:
  ```
  node pmc/bin/aplio-agent-cli.js error "Type error in button component" 7
  node pmc/bin/aplio-agent-cli.js error "Critical performance issue" 9
  ```
When the Validation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.3.3 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-3\T-2.3.3\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/23/2025, 11:44:14 PM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/23/2025, 11:53:17 PM] PREP-1 Complete: Analyzed scroll animation patterns in FAQWithLeftText.jsx and FadeUpAnimation.jsx. Identified useWhileInView hook with Intersection Observer integration, fadeUpAnimation timing (0.5s duration), and fadeFromRightAnimation3 parallax patterns. Ready to create comprehensive documentation following T-2.3.2 success pattern. (Confidence: 9/10)
- [06/23/2025, 11:53:29 PM] PREP-2,3,4 Complete: Studied parallax effects from fadeFromRightAnimation3 patterns, identified trigger points using useWhileInView with 'once: true' viewport settings, researched animation.js performance patterns with 0.5s duration standards and staggered delays (0.2s, 0.4s, 0.6s). Ready for IMP phase with comprehensive analysis complete. (Confidence: 9/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/23/2025, 11:44:14 PM
Implementation Status: Not Started

## Errors Encountered
If you encounter any errors, you MUST report them by calling:
```
node bin/aplio-agent-cli.js error "<error description>" <severity 1-10>
```
If you have tried to fix an error 5 times and have not made any progress, you MUST call the error command, alert the human operator, and stop coding.

None yet

## Next Steps
1. Review task details and requirements (Priority: High)
2. Examine legacy code references (Priority: High)
3. Begin with first Preperation Phase Steps (PREP-1) steps and continue through all Validation Phase Steps (VAL-#) (Priority: High)

## Addendums

### Full Project Context
You can refresh your knowledge of the project and this task in context by reading these files:
- pmc/product/06-aplio-mod-1-tasks.md (for detailed task specifications)
- pmc/core/progress.md (for overall project progress)

### Prior Task and its Current Status
Prior Task: T-2.3.2
Task Title: Interactive Animation Pattern Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 75891
Is this task depended on by the current task? No

### Next Task in Sequence
Next Task: T-2.3.4
Task Title: Animation Timing and Easing Function Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 81823
Is this task dependent on the current task? No

### New Dependencies
When implementing this task, if you identify a dependency requirement that meets BOTH criteria:
1. Not documented in the Task Information section
2. Not already implemented in the codebase

You MUST document this dependency by executing:
```
node bin/aplio-agent-cli.js log-dependency "[task-id]" "[detailed dependency specification]"
```
Your dependency specification should include:
- What the dependency is (library, component, service, etc.)
- Why it's necessary for the current task
- How it impacts the implementation approach

After logging the dependency, paste the command output here and await human operator guidance before proceeding with implementation that relies on this dependency.

### Improvement Suggestions
During implementation, if you identify potential improvements that would enhance:
- Code quality or maintainability
- System flexibility or extensibility
- Feature capabilities or user experience
- Performance or security characteristics

You MUST document these insights by executing:
```
node bin/aplio-agent-cli.js log-improvement "[task-id]" "[improvement specification]"
```
Your improvement specification should:
- Clearly articulate the proposed enhancement
- Provide a technical rationale for the suggestion
- Indicate the scope of impact (localized or system-wide)
- Note whether the improvement is critical or could be implemented later

After logging the improvement, paste the command output here, notify the human operator, and continue with your current task implementation.

---

IMPORTANT OPERATIONAL INSTRUCTIONS:

As you code this task if you ever become unsure that you are following the explicit path set for you in this file:
1. Read the active-task.md file to refresh context
2. Return back to what you were doing if it is contributing to the current task
3. If you are working on code that does not contribute to the current task, send a high priority alert to the human operator

As you code this task if you ever become unsure that your current approach to the task is valid you MUST read the Task Approach section of the current active-task.md:
1. If the approach is still valid, continue coding
2. If the approach has new context or details, add an **Addendum** to the Task Approach
3. If the approach has proven to be erroneous, add a **Major Approach Update** with detailed explanation

New bash shells ALWAYS open in pmc by default. Navigate accordingly when you start a new shell