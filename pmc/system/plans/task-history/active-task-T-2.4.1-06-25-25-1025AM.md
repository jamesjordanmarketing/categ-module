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
Task ID: T-2.4.1
Task Title: T-2.4.1: Breakpoint System Documentation

- FR Reference: FR-2.4.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\responsive\breakpoints\`
- Patterns: P009-RESPONSIVE-STYLES
- Dependencies: T-2.1.0, T-2.1.6
- Estimated Hours: 2-3
- Description: Document the breakpoint system and container width constraints for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-4\T-2.4.1\`
- Testing Tools: Jest, React Testing Library, Storybook, Chromatic, Playwright
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/24/2025, 02:40:12 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Extract and document breakpoint values from legacy codebase
- Define standard breakpoint naming conventions and pixel values
- Document breakpoint usage patterns with component examples
- Create integration guides for breakpoints with CSS and JavaScript

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/24/2025, 02:45:00 PM)

Overview:
Implement comprehensive breakpoint system documentation following the proven 5-file structure pattern from T-2.3.5. Extract breakpoint definitions from `aplio-legacy/tailwind.config.js` lines 13-17 and container widths from lines 18-23, creating TypeScript-compliant responsive documentation that integrates seamlessly with existing accessibility patterns for complete design system coverage.

Implementation Strategy:
1. **Legacy Analysis & Data Extraction**: Extract breakpoint values from `aplio-legacy/tailwind.config.js` screens object (xs: '475px', '1xl': '1400px', plus defaultTheme.screens) and container configuration. Analyze current responsive patterns in aplio-modern-1 components to understand usage contexts.

2. **5-File Documentation Structure Creation**: 
   - `breakpoint-definitions.md` - Core breakpoint values, naming conventions, and pixel definitions
   - `responsive-guidelines.md` - Implementation guidelines and component usage patterns  
   - `container-width-constraints.md` - Container width documentation at each breakpoint
   - `breakpoint-testing-guide.md` - Testing strategies and validation approaches
   - `responsive-visual-reference.md` - Visual examples and reference implementations

3. **TypeScript Integration & Code Examples**: Create working TypeScript utility functions for breakpoint detection, responsive hooks, and SSR-safe implementations. All code examples must compile with strict mode and be Next.js 14 App Router compatible.

4. **Cross-Reference Integration**: Integrate with T-2.3.5 accessibility documentation patterns, documenting responsive motion accessibility, reduced motion at different breakpoints, and dark mode responsive considerations as core requirements.

5. **Validation & Testing Protocol**: Apply Enhanced Documentation Testing Protocol from T-2.3.5 - verify 100% accuracy to legacy tailwind.config.js, TypeScript compilation testing, cross-browser responsive validation, and integration testing with accessibility patterns.

Key Considerations:
- **Legacy Reference Accuracy**: Must achieve 100% accuracy to `aplio-legacy/tailwind.config.js` breakpoint definitions following T-2.3.5 standard
- **TypeScript Strict Compliance**: All code examples must compile successfully with TypeScript strict mode enabled  
- **5-File Pattern Replication**: Follow exact documentation structure proven successful in T-2.3.5 accessibility implementation
- **Responsive Motion Integration**: Document intersection of breakpoints with motion accessibility from T-2.3.5
- **Next.js 14 SSR Compatibility**: All responsive patterns must be server-side rendering safe and App Router compatible

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
### [T-2.4.1:ELE-1] Breakpoint definition documentation: Document standard breakpoints and their pixel values
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:13-17 (breakpoint definitions)

### [T-2.4.1:ELE-2] Container width documentation: Document container width constraints at each breakpoint
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:18-23 (container widths)

### [T-2.4.1:ELE-3] Responsive utility documentation: Document Next.js 14 compatible responsive utility functions
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:13-17 (responsive utilities)

### [T-2.4.1:ELE-4] Breakpoint testing guide: Create guidance for testing at different breakpoints
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:13-17 (breakpoint usage)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze breakpoint definitions in the legacy codebase (implements ELE-1)
2. [PREP-2] Study container width constraints at each breakpoint (implements ELE-2)
3. [PREP-3] Research responsive utility functions in Next.js 14 (implements ELE-3)
4. [PREP-4] Identify breakpoint testing best practices (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.4.1 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document standard breakpoints and their pixel values (implements ELE-1)
2. [IMP-2] Document container width constraints for each breakpoint (implements ELE-2)
3. [IMP-3] Document responsive utility functions for Next.js 14 (implements ELE-3)
4. [IMP-4] Create a guide for testing designs at different breakpoints (implements ELE-4)
5. [IMP-5] Create visual reference for breakpoint system (implements ELE-1, ELE-2)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.4.1 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify breakpoint documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify container width documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Test responsive utility function documentation (validates ELE-3)
4. [VAL-4] Validate breakpoint testing guide with sample components (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.4.1 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-4\T-2.4.1\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/24/2025, 02:40:12 PM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/24/2025, 03:15:56 PM] Starting PREP-1: Analyzing breakpoint definitions in legacy codebase (Confidence: 9/10)
- [06/24/2025, 03:16:18 PM] Completed PREP-1: Analyzed legacy breakpoint system - Found custom xs:475px and 1xl:1400px extending defaultTheme.screens with center:true container (Confidence: 9/10)
- [06/24/2025, 03:16:30 PM] Starting PREP-2: Analyzing container width constraints - Legacy uses center:true, modern codebase shows container usage patterns (Confidence: 8/10)
- [06/24/2025, 03:16:39 PM] Completed PREP-2 & PREP-3: Found responsive patterns with sm:, md:, lg:, xl:, 2xl: usage and Next.js 14 SSR compatibility needs (Confidence: 8/10)
- [06/24/2025, 03:16:40 PM] Starting PREP-4: Researching breakpoint testing best practices including browser testing, container queries, and accessibility integration (Confidence: 8/10)
- [06/24/2025, 03:16:48 PM] Completed PREP-4: Identified testing needs - visual regression, container query validation, responsive motion accessibility patterns, SSR testing (Confidence: 9/10)
- [06/24/2025, 03:16:58 PM] Starting IMP-1: Creating breakpoint-definitions.md with comprehensive breakpoint documentation including xs:475px and 1xl:1400px custom values (Confidence: 9/10)
- [06/24/2025, 03:18:34 PM] Completed IMP-1: Created breakpoint-definitions.md (553 lines). Starting IMP-2: Creating responsive-guidelines.md with implementation patterns (Confidence: 9/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/24/2025, 02:40:12 PM
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
Prior Task: T-2.4.0
Task Title: Responsive Behavior Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 87695
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.4.2
Task Title: Responsive Layout Pattern Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 94206
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

We have been having some problems with bash terminals hanging on commands. To fix this append ` | cat` to all bash commands. The cat command reads all input and then terminates cleanly when the input stream closes. This ensures the command pipeline has a definitive end point.