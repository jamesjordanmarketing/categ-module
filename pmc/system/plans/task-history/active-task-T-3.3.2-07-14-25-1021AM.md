# T-3.3.2 Current Active Task Coding Instructions

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
Task ID: T-3.3.2
Task Title: T-3.3.2: Desktop Navigation Implementation

- FR Reference: FR-3.3.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\navigation\Desktop\`
- Patterns: P003-CLIENT-COMPONENT, P017-HOVER-ANIMATION
- Dependencies: T-3.3.1
- Estimated Hours: 3
- Description: Implement desktop navigation menu with dropdown functionality
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-3-3\T-3.3.2\`
- Testing Tools: Jest, TypeScript, React Testing Library, Playwright, Axe
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 07/10/2025, 09:49:08 PM

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
Create compliance report at: `aplio-modern-1/test/unit-tests/task-{series}/T-3.3.2/design-system-adherence-report.md`

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

- Desktop navigation component renders correctly with proper structure
- Navigation items display with appropriate styling matching legacy design
- Dropdown menus open and close smoothly with animations matching legacy timing
- Active state correctly highlights current navigation section
- Navigation is fully accessible with keyboard support and screen reader compatibility

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 07/10/2025, 10:02:19 PM)

Overview:
Building upon the validated T-3.3.1 foundation architecture (530+ lines of TypeScript interfaces, 8 validated TypeScript files), I'll extend the existing DesktopNavigation.tsx placeholder with complete desktop navigation functionality. Using the comprehensive NavigationTypes, useNavigationState, and useStickyNavigation hooks, I'll implement dropdown menus, mega menus, and active state detection while maintaining visual fidelity with the legacy PrimaryNavbar component.

Implementation Strategy:
1. **Foundation Integration & DSAP Compliance**
   - Analyze design system documentation in `/design-system/docs/navigation/` for complete DSAP requirements
   - Review legacy PrimaryNavbar.jsx structure to extract visual patterns and animation timings
   - Integrate existing NavigationTypes interfaces, useNavigationState hook, and useStickyNavigation hook from T-3.3.1

2. **Desktop Navigation Structure Implementation**
   - Extend DesktopNavigation.tsx using DesktopNavigationProps interface with comprehensive state management
   - Implement logo section with light/dark theme support matching legacy logoLight/logoDark pattern
   - Create navigation menu container with proper responsive classes and styling framework
   - Add controls section with search button and CTA button following legacy structure

3. **Dropdown & Mega Menu Implementation**
   - Implement dropdown functionality using NavigationItemData.submenu with proper hover/click interactions
   - Create mega menu support using NavigationItemData.megaMenu with grid layout and image display
   - Add smooth animations matching legacy duration-500 transitions and group-hover patterns
   - Integrate useNavigationState hook for dropdown state management and outside click handling

4. **Active State & Accessibility Implementation**
   - Implement active state detection using router pathname matching with NavigationItemData.active
   - Add comprehensive ARIA attributes following NavigationAccessibilityConfig specifications
   - Implement keyboard navigation with focus management and escape key handling
   - Add screen reader support with proper landmark roles and state announcements

5. **Enhanced Testing & Validation**
   - Fix component path resolution issues identified in T-3.3.1 testing for functional scaffolds
   - Implement visual regression testing with screenshot comparison against legacy navigation
   - Create comprehensive unit tests achieving 90%+ coverage maintaining T-3.3.1 standards
   - Test dropdown animations, keyboard navigation, and accessibility with enhanced testing infrastructure

Key Considerations:
- **Foundation Integration**: Must use validated T-3.3.1 TypeScript interfaces and hooks, not recreate architecture
- **Visual Fidelity**: Maintain exact design elements, animations, and responsive behavior from legacy PrimaryNavbar
- **Path Resolution**: Fix scaffold generation issues from T-3.3.1 testing for proper component imports
- **DSAP Compliance**: Mandatory 100% adherence to design system patterns following T-3.3.1 standards
- **Performance**: Optimize dropdown animations for 60fps and implement proper client/server boundaries

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
### [T-3.3.2:ELE-1] Desktop navigation component: Implement base structure with Next.js 14 patterns
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:35-47 (base structure)

### [T-3.3.2:ELE-2] Dropdown menus: Create dropdown functionality with appropriate animations
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:66-81 (dropdown implementation)

### [T-3.3.2:ELE-3] Active state handling: Implement active link detection and styling
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:54-58 (active state)

### [T-3.3.2:ELE-4] Desktop accessibility: Implement ARIA attributes and keyboard navigation
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:47-112 (accessibility features)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.
   - **DSAP REQUIREMENT**: Complete STEP 1 (Documentation Discovery) during this phase for all design-related tasks.

1. [PREP-1] Analyze desktop navigation layout from legacy code (implements ELE-1)
2. [PREP-2] Extract dropdown animation timing and behavior (implements ELE-2)
3. [PREP-3] Study active state implementation in legacy code (implements ELE-3)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.3.2 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.
   - **DSAP REQUIREMENT**: Complete STEP 2 (Compliance Implementation) during this phase for all design-related tasks.

1. [IMP-1] Create desktop navigation component structure (implements ELE-1)
2. [IMP-2] Implement dropdown menu functionality with animations (implements ELE-2)
3. [IMP-3] Create active state detection and styling (implements ELE-3)
4. [IMP-4] Add ARIA attributes and keyboard navigation handlers (implements ELE-4)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.3.2 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.
   - **DSAP REQUIREMENT**: Complete STEP 3 (Adherence Reporting) during this phase for all design-related tasks.

1. [VAL-1] Verify desktop navigation visual appearance (validates ELE-1)
2. [VAL-2] Test dropdown menu functionality and animations (validates ELE-2)
3. [VAL-3] Validate active state detection across routes (validates ELE-3)
4. [VAL-4] Test keyboard navigation and screen reader support (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-3.3.2 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-3-3\T-3.3.2\`

## Current Element
- Element ID: T-3.3.2
- Description: Not started
- Status: Not started
- Updated: 07/10/2025, 09:49:08 PM

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
Task initialized on 07/10/2025, 09:49:08 PM
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
Prior Task: T-3.3.1
Task Title: Navigation Component Structure and Types
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 162074
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-3.3.3
Task Title: Mobile Navigation Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 167805
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

New bash shells ALWAYS open in pmc by default. Navigate accordingly when you start a new shell

We have been having some problems with bash terminals hanging on commands. To fix this append ` | cat` to all bash commands. The cat command reads all input and then terminates cleanly when the input stream closes. This ensures the command pipeline has a definitive end point.