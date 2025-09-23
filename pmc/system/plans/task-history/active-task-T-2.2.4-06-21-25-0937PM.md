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
Task ID: T-2.2.4
Task Title: T-2.2.4: Hero Section Component Visual Documentation

- FR Reference: FR-2.2.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\components\sections\hero\`
- Patterns: P008-COMPONENT-VARIANTS
- Dependencies: T-2.1.0
- Estimated Hours: 2-3
- Description: Document the visual characteristics of hero section components for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.4\`
- Testing Tools: Jest, Storybook, Chromatic, Axe, React Testing Library
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/19/2025, 11:11:42 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Document hero section layout structure and content placement
- Document hero typography styles, scales, and hierarchy
- Document background handling including images, gradients, and overlays
- Document responsive behavior and layout changes at different breakpoints

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/19/2025, 11:57:53 PM)

Overview:
Create comprehensive visual documentation for Hero.jsx component (40 lines) by analyzing layout structure with background gradients/SVG shapes, documenting typography hierarchy and responsive padding classes, and capturing FadeUpAnimation patterns. Build on T-2.2.3's proven testing methodology.

Implementation Strategy:
1. **Legacy Component Analysis** (ELE-1, ELE-2)
   - Analyze Hero.jsx lines 6-7 for section structure with gradient backgrounds and SVG positioning
   - Extract layout classes: `hero`, `relative`, `overflow-hidden`, responsive padding (`max-mb:pb-[70px]`, `max-lg:pb-25`, `max-lg:pt-[160px]`)
   - Document container structure with absolute positioned background elements

2. **Typography Documentation** (ELE-2)
   - Document Hero.jsx lines 29-30 heading hierarchy: `<p>` trusted businesses, `<h1>` main heading, `<p>` description
   - Extract text styles, spacing (`mb-8`, `mb-12`, `max-md:mb-8`), and responsive typography classes
   - Document button group layout with flex positioning and gap classes

3. **Responsive Behavior Mapping** (ELE-3)
   - Document breakpoint-specific classes: `max-mb:pb-[70px]`, `max-lg:pb-25`, `max-lg:pt-[160px]`, `max-lg:hidden`
   - Map SVG shape visibility (`max-lg:hidden` for light shapes, `lg:hidden` for dark shapes)
   - Document button layout changes (`flex-col` to `md:flex-row`)

4. **Animation Pattern Documentation** (ELE-4)
   - Reference animation.js fadeUpAnimation pattern (opacity: 0→1, y: 100→0, duration: 0.5s)
   - Document FadeUpAnimation wrapper implementation around hero content
   - Map animation triggers and visual effects for hero entrance

5. **Documentation File Creation**
   - Create 5 markdown files in `aplio-modern-1/design-system/docs/components/sections/hero/`
   - Apply T-2.2.3's proven documentation structure with technical specifications
   - Ensure 100% class coverage of Hero.jsx critical styling classes

Key Considerations:
• Leverage T-2.2.3's testing infrastructure and 96.8% legacy fidelity standard for validation methodology
• Document complex background gradient system with absolute positioning and SVG shape integration
• Ensure responsive documentation covers mobile-first approach with max-width breakpoints
• Maintain Hero.jsx's 40-line component complexity through comprehensive visual specification coverage
• Apply proven 5-phase testing protocol adapted from T-2.2.3's successful validation framework

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
### [T-2.2.4:ELE-1] Hero section layout documentation: Document the layout structure and content placement
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Hero.jsx`:6-7 (layout structure)

### [T-2.2.4:ELE-2] Hero typography documentation: Document heading, subheading, and CTA text styles
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Hero.jsx`:29-30 (typography)

### [T-2.2.4:ELE-3] Hero section responsive behavior: Document layout changes at different breakpoints
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Hero.jsx`:6-7 (responsive behavior)

### [T-2.2.4:ELE-4] Hero section animation patterns: Document entrance animations and background effects
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\data\animation.js`:1-10 (animation patterns)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze hero section components in the legacy codebase (implements ELE-1, ELE-2)
2. [PREP-2] Identify responsive behavior at different breakpoints (implements ELE-3)
3. [PREP-3] Study animation patterns used in hero sections (implements ELE-4)
4. [PREP-4] Create documentation template for hero section visual characteristics (implements ELE-1, ELE-2)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document hero section layout structure and content placement (implements ELE-1)
2. [IMP-2] Document hero typography styles, scales, and hierarchy (implements ELE-2)
3. [IMP-3] Document responsive behavior and layout changes at each breakpoint (implements ELE-3)
4. [IMP-4] Document animation patterns, timing, and visual effects (implements ELE-4)
5. [IMP-5] Create visual reference documentation for hero section design (implements ELE-1, ELE-2)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify hero section layout documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify hero typography documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Test responsive behavior documentation at different viewports (validates ELE-3)
4. [VAL-4] Confirm animation patterns are accurately documented (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.4\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/19/2025, 11:11:42 PM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```

## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/19/2025, 11:11:42 PM
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
Prior Task: T-2.2.3
Task Title: Feature Section Component Visual Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 57733
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.2.5
Task Title: Accordion and FAQ Component Visual Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 63471
Is this task dependent on the current task? Yes

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