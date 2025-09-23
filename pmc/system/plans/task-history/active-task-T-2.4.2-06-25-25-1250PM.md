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
Task ID: T-2.4.2
Task Title: T-2.4.2: Responsive Layout Pattern Documentation

- FR Reference: FR-2.4.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\responsive\layouts\`
- Patterns: P009-RESPONSIVE-STYLES
- Dependencies: T-2.1.0, T-2.1.6
- Estimated Hours: 2-3
- Description: Document responsive layout patterns and grid systems for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-4\T-2.4.2\`
- Testing Tools: Jest, React Testing Library, Storybook, Chromatic, Playwright
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/25/2025, 10:25:29 AM

## Acceptance Criteria
To successfully complete this task, you must:

- Document responsive grid system implementation
- Document content reflow strategies at different viewport sizes
- Document responsive spacing adjustments across breakpoints
- Create visual examples of responsive layout patterns

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/25/2025, 11:17:32 AM)

Overview:
I will implement T-2.4.2 Responsive Layout Pattern Documentation by replicating T-2.4.1's proven 5-file documentation structure, analyzing legacy layout patterns in Feature.jsx and PrimaryNavbar.jsx, and creating comprehensive layout documentation that integrates with the established breakpoint system. This approach leverages the production-certified pattern from T-2.4.1 while focusing on layout-specific responsive behaviors.

Implementation Strategy:
1. **Legacy Pattern Analysis and Extraction**
   - Analyze `aplio-legacy/components/home-4/Feature.jsx` lines 38-39 for grid system implementation patterns
   - Extract mobile layout patterns from `aplio-legacy/components/navbar/PrimaryNavbar.jsx` lines 110-122
   - Validate exact line numbers and cross-reference with actual implementation code
   - Document layout change behaviors at different breakpoints from Feature component

2. **Apply T-2.4.1 Proven 5-File Documentation Pattern**
   - Create primary definitions file for core layout patterns and grid systems (ELE-1)
   - Implement guidelines file for layout usage patterns and breakpoint-specific behaviors (ELE-2)
   - Develop constraints file for technical layout specifications and responsive principles (ELE-4)
   - Build testing guide for layout validation and responsive testing approaches
   - Create visual reference file with layout examples and responsive demonstrations (ELE-3, ELE-5)

3. **Breakpoint System Integration**
   - Reference T-2.4.1 breakpoint system at `design-system/docs/responsive/breakpoints/` for all layout patterns
   - Ensure all layout behaviors specify response at xs, sm, md, lg, xl, and 2xl breakpoints
   - Maintain functional cross-references between layout documentation and breakpoint definitions
   - Validate mobile-first methodology established in T-2.4.1 continues through layout patterns

4. **TypeScript Strict Mode Compliance**
   - Follow T-2.4.1's proven TypeScript validation methodology for all layout code examples
   - Extract layout code examples to separate validation files for compilation testing
   - Ensure all responsive layout patterns compile successfully with TypeScript strict mode
   - Create validation test suite replicating T-2.4.1's testing approach

5. **Production Certification Validation**
   - Implement comprehensive validation testing following T-2.4.1's proven protocols
   - Verify 100% accuracy to legacy component implementations in Feature.jsx and PrimaryNavbar.jsx
   - Validate cross-reference functionality between layout and breakpoint documentation
   - Create testing report matching T-2.4.1's production certification standards

Key Considerations:
- **T-2.4.1 Pattern Replication**: Must exactly replicate the proven 5-file structure that achieved production certification
- **Legacy Reference Accuracy**: Critical to verify exact line numbers and achieve 100% accuracy to legacy implementations
- **Breakpoint Integration**: All layout patterns must properly reference and integrate with T-2.4.1's established breakpoint system
- **Mobile-First Methodology**: Continue the mobile-first approach established in T-2.4.1 for consistency in responsive documentation
- **TypeScript Validation**: All layout examples must compile with strict mode using T-2.4.1's proven validation methodology

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
### [T-2.4.2:ELE-1] Grid system documentation: Document responsive grid system and layout patterns
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Feature.jsx`:38-39 (grid system)

### [T-2.4.2:ELE-2] Layout change documentation: Document layout changes at each breakpoint
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Feature.jsx`:38 (layout changes)

### [T-2.4.2:ELE-3] Mobile layout documentation: Document mobile-specific layout adjustments
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:110-122 (mobile layouts)

### [T-2.4.2:ELE-4] Responsive design principles: Document responsive design principles and best practices
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Feature.jsx`:38-39 (responsive principles)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze grid system and layout patterns in the legacy codebase (implements ELE-1)
2. [PREP-2] Study layout changes at different breakpoints (implements ELE-2)
3. [PREP-3] Identify mobile-specific layout adjustments (implements ELE-3)
4. [PREP-4] Research responsive design principles and best practices (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.4.2 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document responsive grid system and layout patterns (implements ELE-1)
2. [IMP-2] Document layout changes at each breakpoint with visual references (implements ELE-2)
3. [IMP-3] Document mobile-specific layout adjustments in detail (implements ELE-3)
4. [IMP-4] Create responsive design principles and best practices guide (implements ELE-4)
5. [IMP-5] Create visual reference documentation for responsive layouts (implements ELE-1, ELE-2, ELE-3)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.4.2 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify grid system documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify layout change documentation at different breakpoints (validates ELE-2)
3. [VAL-3] Test mobile layout documentation with sample devices (validates ELE-3)
4. [VAL-4] Review responsive design principles for completeness (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.4.2 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-4\T-2.4.2\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/25/2025, 10:25:29 AM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/25/2025, 11:19:06 AM] Starting T-2.4.2 PREP Phase - analyzing legacy layout patterns in Feature.jsx and PrimaryNavbar.jsx (Confidence: 9/10)
- [06/25/2025, 02:15:00 PM] T-2.4.2 PRODUCTION CERTIFIED ✅ - 84.6KB documentation suite complete with full T-2.4.1 integration (Confidence: 10/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/25/2025, 10:25:29 AM
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
Prior Task: T-2.4.1
Task Title: Breakpoint System Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 91448
Is this task depended on by the current task? No

### Next Task in Sequence
Next Task: T-2.4.3
Task Title: Component-Specific Responsive Behavior Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 96990
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