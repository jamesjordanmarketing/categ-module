# T-3.1.4 Current Active Task Coding Instructions

## Table of Contents
1. [Task Information](#task-information)
2. [Design System Adherence Protocol (DSAP)](#design-system-adherence-protocol-dsap)
3. [Current Implementation Focus](#current-implementation-focus)
4. [Acceptance Criteria](#acceptance-criteria)
5. [Task Approach](#task-approach)
6. [Task Development Work Pad](#task-development-work-pad)
7. [Components/Elements](#componentselements)
8. [Implementation Process Phases](#implementation-process-phases)
   - [8.1 Preparation Phase](#preparation-phase)
   - [8.2 Implementation Phase](#implementation-phase)
   - [8.3 Validation Phase](#validation-phase)
9. [Testing Overview](#testing-overview)
10. [Current Element](#current-element)
11. [Recent Actions](#recent-actions)
12. [Notes](#notes)
13. [Errors Encountered](#errors-encountered)
14. [Next Steps](#next-steps)
15. [Addendums](#addendums)
    - [15.1 Full Project Context](#full-project-context)
    - [15.2 Prior Task and its Current Status](#prior-task-and-its-current-status)
    - [15.3 Next Task in Sequence](#next-task-in-sequence)
    - [15.4 New Dependencies](#new-dependencies)
    - [15.5 Improvement Suggestions](#improvement-suggestions)


Now your job is to code this task.
1. Read it once completely. Then think about how you are going to approach it.
2. Read it again. Make any needed adjustments to your planned approach.
3. Update the Task Approach section with a detailed description of how you will complete this task.
4. Fill in the Expected Implementation Files section with files you plan to create or modify.
5. Remember all PMC commands are best run from the pmc directory using node bin/[command]

## Task Information
Task ID: T-3.1.4
Task Title: T-3.1.4: Button Component Testing and Documentation

- FR Reference: FR-3.1.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\design-system\atoms\Button\`
- Patterns: P026-COMPONENT-TESTING, P028-ACCESSIBILITY-TESTING
- Dependencies: T-3.1.3
- Estimated Hours: 2
- Description: Implement comprehensive tests and documentation for the Button component
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-3-1\T-3.1.4\`
- Testing Tools: Jest, TypeScript, React Testing Library, Storybook, Chromatic, Axe, Playwright, Pa11y
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 07/04/2025, 01:58:18 PM

## Design System Adherence Protocol (DSAP)

**MANDATORY REQUIREMENT**: IF this task involves design, component, token, or animation implementation, you MUST follow the Design System Adherence Protocol.

**Design System Documentation Location**: `aplio-modern-1/design-system/docs/`

### DSAP Compliance Process

**STEP 1: Documentation Discovery** (PREP Phase)
Search ALL relevant documentation categories:

**Components** (`/components/`):
- `/core/` - buttons.md, cards.md, inputs.md, component-states.md
- `/interactive/` - accordion/, modals/, dropdowns/ (component-specific folders)
- `/navigation/` - nav bars, menus, breadcrumbs
- `/sections/` - page sections, layouts, containers

**Animations** (`/animations/`):
- `/interactive/` - hover-animations.md, focus-animations.md, touch-interactions.md, state-transitions.md
- `/entry-exit/` - page/component mount/unmount animations
- `/timing/` - duration, easing, performance standards
- `/accessibility/` - reduced motion, animation accessibility

**Responsive Design** (`/responsive/`):
- `/breakpoints/` - screen size definitions and usage
- `/typography/` - responsive text scaling
- `/layouts/` - grid systems, spacing
- `/components/` - component responsive behavior

**Architecture** (`/architecture/`):
- `component-hierarchy.md` - component relationships
- `design-system-consistency.md` - visual consistency rules
- `cross-component-styling.md` - shared styling patterns

**STEP 2: Compliance Implementation** (IMP Phase)
- Follow ALL discovered documentation standards
- For missing documentation: implement best practices and document decisions
- Reference specific documentation files in implementation comments

**STEP 3: Adherence Reporting** (VAL Phase)
Create compliance report at: `aplio-modern-1/test/unit-tests/task-{series}/T-3.1.4/design-system-adherence-report.md`

**Missing Documentation Protocol**:
- Continue with implementation using best practices
- Document all gaps and agent decisions in adherence report
- Flag gaps for future documentation creation

**FAILURE TO COMPLY**: Implementation without DSAP compliance will be rejected.

---

## Current Implementation Focus
Currently: Reading task requirements
Phase: Not started
Step: Initial review
Current Element: None - reviewing task requirements

## Acceptance Criteria
To successfully complete this task, you must:

- Comprehensive unit tests cover all button functionality
- Accessibility tests validate WCAG 2.1 AA compliance
- Documentation provides clear usage examples for all variants
- Test coverage meets minimum 90% requirement
- Visual regression tests confirm legacy visual parity
- Component documentation follows project standards

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 07/04/2025, 02:30:59 PM)

Overview:
Build comprehensive testing and documentation for the Button component by leveraging the proven T-3.1.3 infrastructure. Create exhaustive unit tests, accessibility validation, and professional documentation while maintaining the existing component architecture and test scaffold.

Implementation Strategy:
**1. Testing Environment Setup (PREP Phase)**
- Configure Jest, React Testing Library, Axe, and Pa11y for comprehensive testing
- Create test directory structure: `test/unit-tests/task-3-1/T-3.1.4/`, `test/accessibility/T-3.1.4/`, `test/performance/T-3.1.4/`
- Set up visual regression testing using existing Puppeteer infrastructure with fixed API compatibility
- Configure coverage reporting to target 90% minimum on Button component files

**2. Unit Testing Implementation (IMP Phase - ELE-1)**
- Create comprehensive test suites covering all Button variants (primary, secondary, destructive, outline, ghost)
- Test icon functionality (`iconLeft`, `iconRight` props with React.ReactNode support)
- Test loading states with spinner animation and interaction blocking
- Test accessibility features (ARIA attributes, keyboard navigation, focus management)
- Test performance optimizations (React.memo, consistent height management)
- Leverage existing test scaffold at `/test-t311-button` with 15+ button variations

**3. Accessibility Testing Implementation (IMP Phase - ELE-2)**
- Create WCAG 2.1 AA compliance tests using Axe-core for automated accessibility validation
- Implement keyboard navigation testing (Tab, Enter, Space key interactions)
- Test screen reader compatibility with ARIA attributes (`aria-disabled`, `aria-describedby`, `aria-label`)
- Validate focus states and color contrast ratios
- Use Pa11y for additional accessibility validation across all button variants

**4. Documentation Creation (IMP Phase - ELE-3)**
- Create comprehensive README.md with usage examples for all button variants
- Document all props, states, and functionality with TypeScript interfaces
- Create Storybook stories for interactive documentation
- Include accessibility guidelines and best practices
- Provide code examples demonstrating icon placement, loading states, and ARIA usage

**5. Validation and Reporting (VAL Phase)**
- Verify test coverage meets 90% minimum requirement
- Execute accessibility testing with screen readers and keyboard-only navigation
- Create Design System Adherence Protocol (DSAP) compliance report
- Perform visual regression testing against legacy design system
- Generate comprehensive test execution reports

Key Considerations:
**• Test Infrastructure**: Leverage proven T-3.1.3 testing framework with fixed Puppeteer API compatibility (use Promise-based delays, not page.waitForTimeout)

**• Coverage Requirements**: Target 90% minimum coverage on Button component files (index.tsx, Button.module.css, Button.types.ts)

**• Accessibility Compliance**: Validate WCAG 2.1 AA compliance using automated tools (Axe, Pa11y) and manual testing

**• Visual Regression**: Use existing screenshot capture system for visual comparison against legacy design system

**• Documentation Standards**: Follow project documentation standards with comprehensive examples and TypeScript integration

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
### [T-3.1.4:ELE-1] Unit tests: Create comprehensive test suite for Button variants, states, and functionality
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_button.scss`:2-13 (functionality to test)

### [T-3.1.4:ELE-2] Accessibility tests: Test WCAG 2.1 AA compliance including keyboard navigation and screen readers
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\scss\_button.scss`:3-6 (focus states)

### [T-3.1.4:ELE-3] Component documentation: Create usage examples and documentation
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\home-4\Hero.jsx`:29-30 (usage examples)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.
   - **DSAP REQUIREMENT**: Complete STEP 1 (Documentation Discovery) during this phase for all design-related tasks.

1. [PREP-1] Set up testing environment and tools (implements ELE-1, ELE-2)
2. [PREP-2] Define test cases based on acceptance criteria (implements ELE-1)
3. [PREP-3] Create documentation template (implements ELE-3)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.
   - **DSAP REQUIREMENT**: Complete STEP 2 (Compliance Implementation) during this phase for all design-related tasks.

1. [IMP-1] Implement unit tests for all component functionality (implements ELE-1)
2. [IMP-2] Create accessibility tests (implements ELE-2)
3. [IMP-3] Write comprehensive documentation with examples (implements ELE-3)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.
   - **DSAP REQUIREMENT**: Complete STEP 3 (Adherence Reporting) during this phase for all design-related tasks.

1. [VAL-1] Verify test coverage meets requirements (validates ELE-1)
2. [VAL-2] Test with screen readers and keyboard-only navigation (validates ELE-2)
3. [VAL-3] Verify documentation accuracy and completeness (validates ELE-3)

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
node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-3-1\T-3.1.4\`

## Current Element
- Element ID: T-3.1.4
- Description: Not started
- Status: Not started
- Updated: 07/04/2025, 01:58:18 PM

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
Task initialized on 07/04/2025, 01:58:18 PM
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
2. **DSAP**: Complete Documentation Discovery if this is a design-related task (Priority: High)
3. Examine legacy code references (Priority: High)
4. Begin with first Preparation Phase Steps (PREP-1) steps and continue through all Validation Phase Steps (VAL-#) (Priority: High)

## Addendums

### Full Project Context
You can refresh your knowledge of the project and this task in context by reading these files:
- pmc/product/06-aplio-mod-1-tasks.md (for detailed task specifications)
- pmc/core/progress.md (for overall project progress)

### Prior Task and its Current Status
Prior Task: T-3.1.3
Task Title: Button Icon Support and Extended Functionality
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 138062
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-3.2.0
Task Title: Accordion Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 143566
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