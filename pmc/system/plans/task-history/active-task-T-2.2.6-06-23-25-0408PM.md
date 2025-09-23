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
Task ID: T-2.2.6
Task Title: T-2.2.6: Component Relationship Documentation

- FR Reference: FR-2.2.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\architecture\`
- Patterns: P008-COMPONENT-VARIANTS
- Dependencies: T-2.1.0, T-2.2.1, T-2.2.2, T-2.2.3, T-2.2.4, T-2.2.5
- Estimated Hours: 2-3
- Description: Document component relationships, composition patterns, and cross-component styling for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.6\`
- Testing Tools: Jest, Storybook, React Testing Library, Mermaid.js
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/22/2025, 11:33:36 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Document component hierarchy and composition patterns
- Document cross-component styling patterns and overrides
- Document visual consistency patterns across the design system
- Create visual documentation of component relationships

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/23/2025, 01:06:06 AM)

Overview:
I will create comprehensive architecture-level documentation that maps component relationships across the design system by analyzing composition patterns in home-4/page.jsx, cross-component styling in _common.scss, typography consistency in _typography.scss, and variant relationships in colors.json. This approach builds on T-2.2.5's individual component documentation to create system-wide relationship specifications.

Implementation Strategy:
1. **Component Composition Analysis** (PREP-1, IMP-1)
   - Analyze home-4/page.jsx component hierarchy revealing nested layout patterns with containers, sections, and feature components
   - Document parent-child relationships between page-level components (Hero, AboutUs, CoreFeature, etc.)
   - Map component composition patterns showing how legacy components compose together in real implementations
   - Create Mermaid.js diagrams visualizing component hierarchy with data flow and dependency relationships

2. **Cross-Component Styling Pattern Documentation** (PREP-2, IMP-2)
   - Extract shared styling patterns from _common.scss lines 26-317 covering utility classes, layout systems, and responsive patterns
   - Document CSS override mechanisms and cascade patterns affecting multiple components
   - Identify global styling dependencies that components inherit or override
   - Specify how shared styles propagate through component hierarchies with specific class inheritance patterns

3. **Design System Consistency Mapping** (PREP-3, IMP-3)
   - Analyze typography consistency patterns from _typography.scss covering font hierarchies, sizing scales, and line-height relationships
   - Document spacing, color, and visual rhythm patterns that maintain consistency across components
   - Map design token usage patterns showing how consistent visual language is maintained
   - Create comprehensive dark mode pattern documentation for all relationship scenarios

4. **Component Variant Relationship Analysis** (PREP-4, IMP-4)
   - Analyze color variant relationships from colors.json lines 163-220 covering semantic color mappings and theme variants
   - Document how component variants relate across different UI contexts and states
   - Map variant inheritance patterns showing how design variations cascade through related components
   - Create variant relationship matrices showing interaction patterns between different component states

5. **Architecture Documentation and Visual Validation** (IMP-5, VAL-1 through VAL-4)
   - Create comprehensive architecture-level documentation in design-system/docs/architecture/ directory
   - Generate visual relationship diagrams using Mermaid.js for component hierarchies and styling relationships
   - Validate all documented relationships against actual legacy implementations
   - Ensure documentation references T-2.2.5 individual component specifications rather than duplicating content

Key Considerations:
- **Architecture-Level Focus**: Documentation must capture system-wide patterns rather than individual component characteristics, building on T-2.2.5 foundation
- **Component Composition Complexity**: Legacy home-4 page shows complex nesting with containers, sections, and dynamic component arrangements requiring precise hierarchy mapping
- **Comprehensive Dark Mode Coverage**: All relationship patterns must include dark mode variants addressing T-2.2.5 gap where 2 files missed dark mode coverage
- **Cross-Component CSS Inheritance**: _common.scss contains complex cascade patterns affecting multiple components requiring detailed override mechanism documentation
- **Visual Relationship Documentation**: Mermaid.js integration for creating accurate component relationship diagrams with proper technical specifications

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
### [T-2.2.6:ELE-1] Component hierarchy documentation: Document component relationships and composition patterns
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\app\home-4\page.jsx`:1-15 (component composition)

### [T-2.2.6:ELE-2] Cross-component styling documentation: Document shared styling patterns and overrides
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_common.scss`:26-317 (shared styles)

### [T-2.2.6:ELE-3] Design system consistency documentation: Document visual consistency patterns across components
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_typography.scss`:1-48 (typography consistency)

### [T-2.2.6:ELE-4] Component variant mapping: Document how variants relate across different components
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\tokens\colors.json`:163-220 (variant mapping)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze component relationships in the legacy codebase (implements ELE-1)
2. [PREP-2] Identify cross-component styling patterns (implements ELE-2)
3. [PREP-3] Study design system consistency across components (implements ELE-3)
4. [PREP-4] Analyze component variant relationships (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document component hierarchy and composition patterns (implements ELE-1)
2. [IMP-2] Document cross-component styling patterns and overrides (implements ELE-2)
3. [IMP-3] Document visual consistency patterns across the design system (implements ELE-3)
4. [IMP-4] Create component variant relationship maps (implements ELE-4)
5. [IMP-5] Create diagrams illustrating component relationships (implements ELE-1)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify component hierarchy documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Confirm cross-component styling documentation is accurate (validates ELE-2)
3. [VAL-3] Verify design system consistency documentation (validates ELE-3)
4. [VAL-4] Validate component variant mapping accuracy (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.6\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/22/2025, 11:33:36 PM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/23/2025, 01:07:08 AM] Starting T-2.2.6 PREP phase - analyzing component relationships across legacy codebase (Confidence: 8/10)
- [06/23/2025, 01:36:20 AM] Validation complete - all architecture documentation files verified against legacy implementations with accurate component relationships, styling patterns, and variant mappings (Confidence: 9/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/22/2025, 11:33:36 PM
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
Prior Task: T-2.2.5
Task Title: Accordion and FAQ Component Visual Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 63471
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.3.0
Task Title: Animation Pattern Extraction
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 69176
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