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
Task ID: T-2.1.4
Task Title: T-2.1.4: Animation and Transition System Extraction

- FR Reference: FR-2.1.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\styles\design-tokens\animations.ts`
- Patterns: P006-DESIGN-TOKENS
- Dependencies: T-1.1.0, T-1.2.0
- Estimated Hours: 2-3
- Description: Extract and document animation timing values, easing functions, and transition durations for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-1\T-2.1.4\`
- Testing Tools: Jest, TypeScript, Storybook, Cypress, React Testing Library
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/15/2025, 12:06:42 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Extract animation timing values and easing functions from the legacy codebase
- Document transition durations for different interaction types
- Define animation and transition tokens with appropriate TypeScript types
- Ensure animations maintain visual fidelity with legacy implementation

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/15/2025, 12:16:23 PM)

Overview:
I will extract animation timing values, easing functions, and transition durations from the legacy Aplio codebase into TypeScript design tokens following the successful T-2.1.3 spacing pattern. This involves creating a comprehensive animations.ts file with type-safe tokens that preserve exact legacy animation behavior while implementing modern TypeScript interfaces.

Implementation Strategy:
1. **Extract Animation Timing Values (ELE-1)**
   - Analyze animation.js lines 1-10 to extract base durations (0.5s) and delay patterns (0.2s, 0.4s, 0.6s)
   - Create TypeScript animation timing interfaces following spacing.ts pattern
   - Implement base timing scale with duration and delay token definitions
   - Add semantic timing names (fast, normal, slow) for different animation speeds

2. **Document Easing Functions (ELE-2)**
   - Extract easing implementations from tailwind.config.js lines 73-93 (keyframes section)
   - Identify custom easing patterns: bounce-open, floating (ease-in-out infinite), floatingDown
   - Create easing function token definitions with cubic-bezier values
   - Document built-in easing functions used across components (ease-in-out, linear)

3. **Map Transition Durations for Interactions (ELE-3)**
   - Analyze legacy interaction patterns from animation.js (fade, slide transitions)
   - Define transition duration mapping for hover, focus, modal, page transitions
   - Create interaction-specific timing tokens (button: 150ms, modal: 300ms, page: 500ms)
   - Implement responsive transition logic based on user preferences

4. **Create TypeScript Type System (ELE-4)**
   - Follow spacing.ts interface pattern for animation tokens (AnimationToken, TimingScale, EasingFunctions)
   - Create AnimationSystem interface combining all animation tokens
   - Implement type-safe exports with 'as const' assertions for tree-shaking
   - Add utility functions: getAnimationTiming(), getEasing(), generateAnimationCSS()

5. **Implement Animation Utility Functions**
   - Create getAnimationTiming(), getEasingFunction(), generateAnimationCSS() functions
   - Add animation builder helpers for common patterns (fadeIn, slideUp, bounce)
   - Ensure Next.js 14 optimization with proper tree-shaking support

Key Considerations:
- **Legacy Fidelity**: Exact timing preservation required - all durations (0.5s) and delays (0.2s, 0.4s, 0.6s) must match legacy exactly
- **TypeScript Safety**: Use 'as const' assertions and proper interface definitions following T-2.1.3 successful pattern
- **Pattern Consistency**: Follow spacing.ts structure for exports, interfaces, and utility functions to maintain design system coherence
- **Performance**: Optimize animation tokens for reduced bundle size and runtime performance in Next.js 14
- **Testing Adaptation**: Structure tokens for Jest validation testing using adapted design token testing protocol from T-2.1.3

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
### [T-2.1.4:ELE-1] Animation timing extraction: Create TypeScript definitions for animation durations and delays
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\data\animation.js`:1-10 (animation timing)

### [T-2.1.4:ELE-2] Easing function extraction: Document and implement standard easing functions
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:73-93 (easing functions)

### [T-2.1.4:ELE-3] Transition duration mapping: Define transition durations for different interaction types
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\tokens\colors.json`:185-189 (transition durations)

### [T-2.1.4:ELE-4] Animation token type definitions: Create TypeScript types and interfaces for animation tokens
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:19-35 (type definition pattern)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze legacy animation definitions in animation.js (implements ELE-1)
2. [PREP-2] Study easing function implementations in tailwind.config.js (implements ELE-2)
3. [PREP-3] Identify transition durations used for different interaction types (implements ELE-3)
4. [PREP-4] Plan TypeScript structure for animation token definitions (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.1.4 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Create animations.ts file with animation timing definitions as TypeScript constants (implements ELE-1)
2. [IMP-2] Extract and document standard easing functions (implements ELE-2)
3. [IMP-3] Map transition durations to different interaction types (implements ELE-3)
4. [IMP-4] Create TypeScript interfaces and types for animation tokens (implements ELE-4)
5. [IMP-5] Create type-safe exports for all animation tokens (implements ELE-4)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.1.4 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify animation timing values match legacy implementation (validates ELE-1)
2. [VAL-2] Compare extracted easing functions with legacy implementation (validates ELE-2)
3. [VAL-3] Test transition durations for different interaction types (validates ELE-3)
4. [VAL-4] Validate type definitions for animation tokens (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.1.4 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-1\T-2.1.4\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/15/2025, 12:06:42 PM

## Recent Actions
Every 500 output tokens you MUST call:
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```

You can also call this command at other times if it will help record context that may be useful while coding this task.
- [06/15/2025, 12:16:54 PM] Staring T-2.1.4: Animation and Transition System Extraction - Beginning PREP-1: Analyze legacy animation definitions (Confidence: 8/10)
- [06/15/2025, 12:23:52 PM] T-2.1.4: Animation and Transition System Extraction - SUCCESSFULLY COMPLETED. All 4 elements implemented with exact legacy fidelity and comprehensive TypeScript design tokens. (Confidence: 10/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/15/2025, 12:06:42 PM
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
Prior Task: T-2.1.3
Task Title: Spacing and Layout System Extraction
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 37491
Is this task depended on by the current task? No

### Next Task in Sequence
Next Task: T-2.1.5
Task Title: Shadow and Border System Extraction
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 43328
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