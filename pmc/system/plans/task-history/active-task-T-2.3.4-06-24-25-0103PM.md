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
Task ID: T-2.3.4
Task Title: T-2.3.4: Animation Timing and Easing Function Documentation

- FR Reference: FR-2.3.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\animations\timing\`
- Patterns: P018-TRANSITION-ANIMATION
- Dependencies: T-2.1.0, T-2.1.4
- Estimated Hours: 2-3
- Description: Document animation timing values and easing functions for consistent implementation in the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-3\T-2.3.4\`
- Testing Tools: Jest, React Testing Library, Storybook, Chromatic, Axe
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/24/2025, 10:36:20 AM

## Acceptance Criteria
To successfully complete this task, you must:

- Document standard animation durations for different interaction types
- Document easing functions with visual representations and use cases
- Establish timing consistency patterns across the design system
- Create a guide for selecting appropriate timing and easing combinations

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/24/2025, 11:35:44 AM)

Overview:
I will replicate T-2.3.3's exceptional success (98/100 quality score) by creating comprehensive animation timing documentation following the proven 5-file structure pattern. The implementation will extract timing patterns from animation.js and tailwind.config.js with 100% legacy reference accuracy, establish consistent duration standards and easing function specifications, and achieve 60+ dark mode coverage specifications while maintaining WCAG 2.1 Level AA compliance.

Implementation Strategy:
1. **PREP Phase - Legacy Analysis & Pattern Extraction**
   - Analyze animation.js (lines 1-94) to extract duration patterns: 0.5s base duration, 0.2s/0.4s/0.6s staggered delays
   - Study tailwind.config.js animation keyframes: bounce-open (0.3s), floating/floatingDown (5000ms ease-in-out)
   - Map timing consistency patterns across fadeUp, fadeFromLeft/Right animation variants
   - Research cubic-bezier specifications and visual curve representations for easing functions

2. **IMP Phase - Documentation Creation (Target: 80KB-120KB total)**
   - Create animation-durations.md (15KB-25KB): Standard durations for micro-interactions, transitions, complex animations
   - Create easing-functions.md (15KB-25KB): Visual cubic-bezier guides, built-in Tailwind easings, custom function specs
   - Create timing-consistency.md (15KB-25KB): Cross-component coordination patterns, responsive timing adjustments
   - Create selection-guide.md (15KB-25KB): Performance-aware duration selection, device capability considerations
   - Create implementation-examples.md (15KB-25KB): TypeScript integration patterns, design token usage

3. **Documentation Structure Excellence (Following T-2.3.3 Pattern)**
   - Implement dark mode coverage with 60+ specifications across all files using dark: prefixes
   - Include comprehensive TypeScript code examples with strict mode compliance
   - Integrate accessibility patterns with reduced motion support and WCAG 2.1 Level AA compliance
   - Reference legacy sources with 100% accuracy verification for all timing values and patterns

4. **Integration & Cross-Reference Implementation**
   - Link timing patterns to existing design system tokens and CSS custom properties
   - Establish performance metrics for 60fps maintenance across different timing selections
   - Create visual representations for easing curves with practical use case recommendations
   - Document scaling patterns for responsive timing adjustments across screen sizes

5. **VAL Phase - Quality Assurance & T-2.3.3 Standard Replication**
   - Execute comprehensive validation protocol: file discovery → legacy reference accuracy → dark mode coverage
   - Verify all animation.js timing patterns (0.5s duration, delay variations) are accurately documented
   - Validate tailwind.config.js keyframe timings (0.3s bounce, 5000ms floating) with 100% precision
   - Achieve 95%+ implementation readiness score with production approval following T-2.3.3 benchmarks

Key Considerations:
- **Legacy Reference Accuracy is CRITICAL**: Any inaccuracy in animation.js or tailwind.config.js timing values fails entire implementation
- **File Size Targets**: Individual files 13KB-25KB each, total documentation 80KB-120KB following T-2.3.3 proven structure
- **Dark Mode Excellence**: Minimum 60+ dark mode specifications required, T-2.3.3 achieved 101 (68% above minimum)
- **Performance Integration**: All timing recommendations must maintain 60fps performance with device-aware optimizations
- **Production Readiness**: Complete TypeScript integration with design tokens, WCAG 2.1 Level AA accessibility compliance

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
### [T-2.3.4:ELE-1] Animation duration documentation: Document standard animation durations for different animation types
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\data\animation.js`:1-94 (durations)

### [T-2.3.4:ELE-2] Easing function documentation: Document standard easing functions for different animation types
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:73-93 (easing functions)

### [T-2.3.4:ELE-3] Animation timing consistency: Document timing consistency patterns across the design system
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\tokens\colors.json`:185-189 (timing values)

### [T-2.3.4:ELE-4] Animation function selection guide: Create a guide for selecting appropriate timing and easing
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\data\animation.js`:1-94 (selection patterns)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze animation duration patterns in the legacy codebase (implements ELE-1)
2. [PREP-2] Study easing function implementations in the legacy codebase (implements ELE-2)
3. [PREP-3] Identify timing consistency patterns across components (implements ELE-3)
4. [PREP-4] Research best practices for timing and easing function selection (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.3.4 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document standard animation durations for different animation types (implements ELE-1)
2. [IMP-2] Document standard easing functions with visual representations (implements ELE-2)
3. [IMP-3] Document timing consistency patterns and guidelines (implements ELE-3)
4. [IMP-4] Create a guide for selecting appropriate timing and easing combinations (implements ELE-4)
5. [IMP-5] Create visual reference documentation for timing and easing (implements ELE-1, ELE-2)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.3.4 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify animation duration documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify easing function documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Test timing consistency documentation with example components (validates ELE-3)
4. [VAL-4] Validate selection guide for accuracy and usefulness (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.3.4 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-3\T-2.3.4\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/24/2025, 10:36:20 AM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/24/2025, 11:36:02 AM] Beginning PREP Phase - analyzing legacy animation timing patterns from animation.js and tailwind.config.js (Confidence: 9/10)
- [06/24/2025, 11:46:49 AM] T-2.3.4 completed successfully - Animation Timing and Easing Function Documentation created with 112.2KB total size, 5-file structure, and 100% legacy reference accuracy (Confidence: 10/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/24/2025, 10:36:20 AM
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
Prior Task: T-2.3.3
Task Title: Scroll-Based Animation Pattern Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 78798
Is this task depended on by the current task? No

### Next Task in Sequence
Next Task: T-2.3.5
Task Title: Accessibility and Reduced Motion Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 84752
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