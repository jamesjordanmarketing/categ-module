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
Task ID: T-2.2.1
Task Title: T-2.2.1: Core UI Component Visual Documentation

- FR Reference: FR-2.2.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\design-system\docs\components\core\`
- Patterns: P008-COMPONENT-VARIANTS
- Dependencies: T-2.1.0
- Estimated Hours: 2-3
- Description: Document the visual characteristics of core UI components (buttons, inputs, cards) for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.1\`
- Testing Tools: Jest, Storybook, Chromatic, Axe, React Testing Library
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/17/2025, 09:07:48 PM

## Acceptance Criteria
To successfully complete this task, you must:

- Document all Home 4 template core UI component visual characteristics
- Capture component visual states (default, hover, active, disabled)
- Identify and document component variants with their visual differences
- Document component-specific styling overrides and variations

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/17/2025, 09:26:47 PM)

Overview:
I will systematically document the visual characteristics of core UI components (buttons, inputs, cards) by analyzing the legacy SCSS and React implementations to extract precise design specifications. This approach leverages the validated breakpoint system from T-2.1.6 to create comprehensive visual documentation for the Next.js 14 design system implementation.

Implementation Strategy:
1. **Legacy Analysis Phase**: Extract visual specifications from legacy files (`_button.scss`, `_common.scss`, `Feature.jsx`) including colors, dimensions, typography, border-radius, shadows, and hover effects
   - Button variants: `.btn`, `.btn-outline`, `.btn-sm` with state transitions and dark mode variants
   - Input fields: Focus states, border styling, background colors, sizing specifications
   - Card components: Shadow effects, border radius, padding, hover animations, dark mode support

2. **Component State Mapping**: Document all interactive states (default, hover, active, disabled) for each component type
   - Extract Tailwind classes and transform them into design token specifications
   - Map color values using CSS custom properties for theme consistency
   - Document animation timing and transition effects

3. **Visual Documentation Creation**: Generate structured markdown files in `design-system/docs/components/core/` directory
   - Create separate files: `buttons.md`, `inputs.md`, `cards.md`, `component-states.md`
   - Include code examples, visual specifications, and implementation guidelines
   - Document responsive behavior using validated breakpoint system

4. **Documentation Template Implementation**: Establish consistent format for component documentation
   - Visual characteristics (colors, typography, spacing, borders)
   - Behavioral specifications (hover effects, transitions, animations)
   - Accessibility considerations and ARIA patterns
   - Code examples and usage guidelines

5. **Cross-Reference and Validation**: Verify documentation accuracy against legacy implementation
   - Compare extracted specifications with actual rendered components
   - Ensure completeness of all visual states and variants
   - Validate integration with existing design token system

Key Considerations:
- Legacy button system uses complex before/after pseudo-elements for hover animations that need precise documentation
- Dark mode variants are implemented via Tailwind dark: prefix and must be fully captured in specifications
- Card components use shadow-nav utility class requiring custom shadow documentation for design system
- Input components may have additional states beyond basic focus/blur that need identification and documentation
- Component documentation must align with validated breakpoint system from T-2.1.6 for responsive behavior

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
### [T-2.2.1:ELE-1] Button component documentation: Document all button variants, states, and visual characteristics
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_button.scss`:2-13 (button styles)

### [T-2.2.1:ELE-2] Input component documentation: Document all input field variants, states, and visual characteristics
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_common.scss`:26-38 (input styles)

### [T-2.2.1:ELE-3] Card component documentation: Document all card variants, states, and visual characteristics
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Feature.jsx`:37-62 (card implementation)

### [T-2.2.1:ELE-4] Component state documentation: Create visual reference for default, hover, active, and disabled states
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_button.scss`:3-6 (state styles)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.

1. [PREP-1] Analyze core UI components in the legacy codebase (implements ELE-1, ELE-2, ELE-3)
2. [PREP-2] Identify all component states and variations (implements ELE-4)
3. [PREP-3] Create documentation template for component visual characteristics (implements ELE-1, ELE-2, ELE-3)
4. [PREP-4] Set up screenshot capture process for visual references (implements ELE-1, ELE-2, ELE-3, ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.1 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.

1. [IMP-1] Document button component variants, dimensions, colors, and typography (implements ELE-1)
2. [IMP-2] Document input component variants, dimensions, colors, and typography (implements ELE-2)
3. [IMP-3] Document card component variants, dimensions, colors, and typography (implements ELE-3)
4. [IMP-4] Create visual reference documentation for all component states (implements ELE-4)
5. [IMP-5] Document component-specific styling overrides and variations (implements ELE-1, ELE-2, ELE-3)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.2.1 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.

1. [VAL-1] Verify button component documentation against legacy implementation (validates ELE-1)
2. [VAL-2] Verify input component documentation against legacy implementation (validates ELE-2)
3. [VAL-3] Verify card component documentation against legacy implementation (validates ELE-3)
4. [VAL-4] Confirm all component states are properly documented (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.2.1 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-2\T-2.2.1\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/17/2025, 09:07:48 PM

## Recent Actions
Call this command when it will help record context that may be useful while coding this task.
```
node bin/aplio-agent-cli.js log-action "<current task description>" <confidence 1-10>
```
- [06/17/2025, 09:27:09 PM] Starting PREP-1: Analyzing core UI components in legacy codebase (_button.scss, _common.scss, Feature.jsx) (Confidence: 8/10)
- [06/17/2025, 09:28:32 PM] Competing PREP-1 analysis. Found: Button variants (.btn, .btn-outline, .btn-sm), Input fields (rounded-[48px] styling with focus states), Card components (rounded-medium with shadow-nav). Moving to PREP-2: Component state mapping (Confidence: 8/10)
- [06/17/2025, 09:28:52 PM] PREP-2 completed: Mapped component states - Button (default, hover, dark, outline, small, navbar variants), Input (default, focus, dark, placeholder), Card (default, hover, dark, transition). Starting PREP-3: Documentation template creation (Confidence: 8/10)
- [06/17/2025, 09:32:22 PM] PREP-3 completed: Created documentation templates - buttons.md (pseudo-element animations), inputs.md (pill-shaped design), cards.md (shadow-nav system), component-states.md (comprehensive state reference). Starting PREP-4: Visual reference process setup (Confidence: 8/10)
- [06/17/2025, 09:33:23 PM] PREP-4 completed: Visual reference process documented with comprehensive capture specifications, organization structure, and quality assurance guidelines. All PREP phase steps complete - ready for IMP phase (Confidence: 9/10)
- [06/17/2025, 09:33:41 PM] Starting IMP phase - IMP-1: Enhancing button component documentation with precise dimensions, colors, typography specifications extracted from legacy analysis (Confidence: 8/10)
- [06/17/2025, 09:37:16 PM] IMP-5 completed: Comprehensive styling overrides documntation created covering button variants, input overrides, card constraints, theme variations, and implementation guidelines. All IMP phase steps complete - ready for VAL phase (Confidence: 9/10)
- [06/17/2025, 09:37:35 PM] Starting VAL phase - VAL-1: Verifying button component documentation against legacy _button.scss implementation for accuracy and completeness (Confidence: 8/10)
- [06/17/2025, 09:38:01 PM] VAL-1 verified: Button documentation accurately reflects legacy implementation - all variants, states, measurements, and animations match _button.scss. Proceeding to VAL-2, VAL-3, VAL-4 validation of inputs and cards (Confidence: 8/10)
- [06/17/2025, 09:38:16 PM] VAL-2, VAL-3, VAL-4 completed: Input documentation verified against ContactForm implementation (pill-shaped radius, focus states, grid layout). Card documentation verified against Feature component (402px max-width, shadow-nav, responsive padding, dual image system). All component states properly documented with accurate specifications (Confidence: 9/10)


## Notes
You may add implementation notes at any time by calling:
```
node bin/aplio-agent-cli.js update-notes "<your implementation notes>"
```
Task initialized on 06/17/2025, 09:07:48 PM
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
Prior Task: T-2.2.0
Task Title: Component Visual Mapping
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 48009
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.2.2
Task Title: Navigation Component Visual Documentation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 54655
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