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
Task ID: T-2.2.5
Task Title: T-2.2.5: Accordion and FAQ Component Visual Documentation

- FR Reference: FR-2.2.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\components\interactive\accordion\`
- Patterns: P008-COMPONENT-VARIANTS
- Dependencies: T-2.1.0
- Estimated Hours: 2-3
- Description: Document the visual characteristics of accordion and FAQ components for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.5\`
- Testing Tools: Jest, Storybook, Chromatic, Axe, React Testing Library
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/21/2025, 03:26:44 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Document accordion component design, spacing, and visual states
- Document FAQ section layout structure and typography
- Document expand/collapse animations, timing, and transitions
- Document keyboard navigation patterns and ARIA attribute requirements

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/21/2025, 03:40:29 PM)

Overview:
I will create comprehensive visual documentation for accordion and FAQ components by analyzing the legacy FaqItem.jsx (49 lines) and CustomFAQ.jsx (36 lines) components to document their design patterns, interaction states, animations, and accessibility requirements. This systematic approach ensures all interactive element specifications are captured for the Next.js 14 modernization.

Implementation Strategy:
1. **Component Analysis Phase** (PREP-1, PREP-2)
   - Analyze FaqItem.jsx structure focusing on useRef-based height animation system
   - Study CustomFAQ.jsx container layout with max-width constraints and spacing patterns
   - Document state management patterns (activeIndex toggle system with conditional rendering)
   - Extract visual design elements (rounded corners, dashed borders, padding hierarchy)

2. **Interaction Pattern Documentation** (PREP-3, IMP-3)
   - Document height-based animations using scrollHeight with overflow management
   - Capture expand/collapse transitions with timing and easing specifications
   - Document conditional icon rendering (plus/minus SVG states) with stroke styling
   - Map state transitions from open to closed states with visual feedback patterns

3. **Visual Specification Creation** (IMP-1, IMP-2, IMP-5)
   - Create component design documentation covering spacing (p-2.5, px-5, py-3) and visual states
   - Document typography hierarchy (text-xl font-semibold for questions, text-paragraph-light for answers)
   - Specify dark mode variants (dark:bg-dark-200, dark:border-borderColor-dark)
   - Create FAQ section layout documentation with container structure and responsive behavior

4. **Accessibility Documentation** (PREP-4, IMP-4)
   - Document button element structure and semantic markup requirements
   - Specify keyboard navigation patterns and ARIA attribute implementations
   - Ensure screen reader compatibility with proper heading hierarchy
   - Document focus management during expand/collapse operations

5. **Documentation Structure and Validation** (VAL-1 through VAL-4)
   - Create structured documentation files in interactive/accordion/ directory
   - Validate all documentation against legacy implementation requirements
   - Verify animation specifications match actual component behavior
   - Ensure accessibility documentation covers all interaction scenarios

Key Considerations:
- **Animation Precision**: FaqItem.jsx uses complex useRef-based height calculation requiring exact documentation of scrollHeight implementation and overflow transitions
- **State Management Complexity**: Toggle system (prevIndex === index ? null : index) with conditional rendering needs precise documentation for modernization reference
- **Dark Mode Comprehensive Support**: All visual states must be documented with corresponding dark theme variants for consistent design system implementation
- **Container Layout Architecture**: CustomFAQ.jsx implements advanced CSS selector spacing ([&>*:not(:last-child)]:mb-5) requiring detailed layout pattern documentation
- **Accessibility Standards Compliance**: Button elements, keyboard navigation, and ARIA patterns must be thoroughly documented to meet modern accessibility requirements

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
### [T-2.2.5:ELE-1] Accordion component documentation: Document accordion design, spacing, and states
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\shared\FaqItem.jsx`:4-48 (accordion implementation)

### [T-2.2.5:ELE-2] FAQ section layout documentation: Document the layout structure for FAQ sections
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\CustomFAQ.jsx`:6-36 (FAQ section layout)

### [T-2.2.5:ELE-3] Accordion interaction documentation: Document expand/collapse animations and transitions
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\shared\FaqItem.jsx`:39-43 (interactions)

### [T-2.2.5:ELE-4] Accordion accessibility documentation: Document keyboard navigation and ARIA attributes
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\shared\FaqItem.jsx`:7-10 (accessibility)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze accordion and FAQ components in the legacy codebase (implements ELE-1, ELE-2)
2. [PREP-2] Study interaction patterns and animations (implements ELE-3)
3. [PREP-3] Identify accessibility implementation in accordions (implements ELE-4)
4. [PREP-4] Create documentation template for accordion visual characteristics (implements ELE-1, ELE-2)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document accordion component design, spacing, and visual states (implements ELE-1)
2. [IMP-2] Document FAQ section layout structure and typography (implements ELE-2)
3. [IMP-3] Document expand/collapse animations, timing, and transitions (implements ELE-3)
4. [IMP-4] Document keyboard navigation patterns and ARIA attribute requirements (implements ELE-4)
5. [IMP-5] Create visual reference documentation for accordion states (implements ELE-1, ELE-3)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify accordion component documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify FAQ section layout documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Confirm interaction animations are accurately documented (validates ELE-3)
4. [VAL-4] Verify accessibility documentation is complete and accurate (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.5\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/21/2025, 03:26:44 PM

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
Task initialized on 06/21/2025, 03:26:44 PM
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
Prior Task: T-2.2.4
Task Title: Hero Section Component Visual Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 60624
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.2.6
Task Title: Component Relationship Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 66375
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