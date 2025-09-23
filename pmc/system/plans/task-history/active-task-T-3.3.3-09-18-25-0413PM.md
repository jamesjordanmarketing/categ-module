# T-3.3.3 Current Active Task Coding Instructions

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
Task ID: T-3.3.3
Task Title: T-3.3.3: Mobile Navigation Implementation

- FR Reference: FR-3.3.0
- Implementation Location: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-modern-1\components\navigation\Mobile\`
- Patterns: P003-CLIENT-COMPONENT, P018-TRANSITION-ANIMATION
- Dependencies: T-3.3.1
- Estimated Hours: 3
- Description: Implement mobile navigation with hamburger menu and slide-in functionality
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-modern-1\test\unit-tests\task-3-3\T-3.3.3\`
- Testing Tools: Jest, TypeScript, React Testing Library, Playwright, Axe
- Test Coverage Requirements: 90% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 07/14/2025, 10:21:55 AM

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
Create compliance report at: `aplio-modern-1/test/unit-tests/task-{series}/T-3.3.3/design-system-adherence-report.md`

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

- Mobile navigation appears at appropriate breakpoints
- Hamburger button animates smoothly between open and closed states
- Slide-in menu transitions smoothly with appropriate timing
- Touch targets are appropriately sized for mobile interaction
- Navigation is fully accessible on mobile devices
- Menu state is preserved appropriately during interactions

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 07/14/2025, 10:56:49 AM)

Overview:
I will implement mobile navigation by creating a hamburger button component with smooth animations, a slide-in menu container, and mobile-specific accessibility features. The implementation will leverage the existing T-3.3.1 foundation architecture and integrate with T-3.3.2 desktop navigation patterns to ensure consistency across the navigation system.

Implementation Strategy:
1. **PREP Phase - Foundation Analysis**
   - Complete DSAP documentation discovery for mobile navigation, animation, and responsive design patterns
   - Analyze legacy PrimaryNavbar.jsx lines 110-122 (hamburger), 137-238 (mobile menu), and 137-145 (transitions) 
   - Study T-3.3.1 foundation architecture files: NavigationTypes.ts, useNavigationState.ts, useStickyNavigation.ts
   - Review T-3.3.2 desktop navigation patterns for consistency requirements

2. **IMP Phase - Component Implementation**
   - Create MobileNavigation.tsx component using T-3.3.1 foundation types and hooks
   - Implement hamburger button with three-line to X animation using CSS transforms and transitions
   - Build slide-in menu container with proper z-index layering and backdrop overlay
   - Add smooth open/close animations using duration-500 transitions matching T-3.3.2 patterns

3. **IMP Phase - Mobile Optimization**
   - Ensure minimum 44px touch targets for all interactive elements (T-3.3.3:ELE-4)
   - Implement proper ARIA attributes for screen reader compatibility
   - Add keyboard navigation support for accessibility compliance
   - Integrate with existing useNavigationState hook for state management

4. **IMP Phase - Integration & Performance**
   - Connect to existing navigation foundation architecture from T-3.3.1
   - Implement Next.js 14 client component optimization with proper boundaries
   - Add responsive breakpoint integration showing mobile nav at appropriate screen sizes
   - Ensure smooth 60fps animations with hardware acceleration

5. **VAL Phase - Testing & Validation**
   - Create comprehensive unit tests with 90% code coverage requirement
   - Implement visual regression testing against legacy mobile navigation
   - Validate touch target sizes and accessibility features
   - Complete DSAP adherence reporting with compliance documentation

Key Considerations:
- Must integrate with existing T-3.3.1 NavigationTypes interfaces and hooks without breaking changes
- Animation timing must match T-3.3.2 desktop patterns (duration-500) for visual consistency
- Touch targets require minimum 44px size for mobile accessibility compliance
- Component must work seamlessly with responsive breakpoints and desktop navigation switching
- Legacy visual fidelity is critical - must match PrimaryNavbar.jsx mobile sections exactly

### Approach History

### Current Approach (Added: 07/14/2025, 10:51:04 AM)

Overview:
I will implement mobile navigation by creating a hamburger button component with smooth animations, a slide-in menu container, and mobile-specific accessibility features. The implementation will leverage the existing T-3.3.1 foundation architecture and integrate with T-3.3.2 desktop navigation patterns to ensure consistency across the navigation system.

Implementation Strategy:
1. **PREP Phase - Foundation Analysis**
   - Complete DSAP documentation discovery for mobile navigation, animation, and responsive design patterns
   - Analyze legacy PrimaryNavbar.jsx lines 110-122 (hamburger), 137-238 (mobile menu), and 137-145 (transitions) 
   - Study T-3.3.1 foundation architecture files: NavigationTypes.ts, useNavigationState.ts, useStickyNavigation.ts
   - Review T-3.3.2 desktop navigation patterns for consistency requirements

2. **IMP Phase - Component Implementation**
   - Create MobileNavigation.tsx component using T-3.3.1 foundation types and hooks
   - Implement hamburger button with three-line to X animation using CSS transforms and transitions
   - Build slide-in menu container with proper z-index layering and backdrop overlay
   - Add smooth open/close animations using duration-500 transitions matching T-3.3.2 patterns

3. **IMP Phase - Mobile Optimization**
   - Ensure minimum 44px touch targets for all interactive elements (T-3.3.3:ELE-4)
   - Implement proper ARIA attributes for screen reader compatibility
   - Add keyboard navigation support for accessibility compliance
   - Integrate with existing useNavigationState hook for state management

4. **IMP Phase - Integration & Performance**
   - Connect to existing navigation foundation architecture from T-3.3.1
   - Implement Next.js 14 client component optimization with proper boundaries
   - Add responsive breakpoint integration showing mobile nav at appropriate screen sizes
   - Ensure smooth 60fps animations with hardware acceleration

5. **VAL Phase - Testing & Validation**
   - Create comprehensive unit tests with 90% code coverage requirement
   - Implement visual regression testing against legacy mobile navigation
   - Validate touch target sizes and accessibility features
   - Complete DSAP adherence reporting with compliance documentation

Key Considerations:
- Must integrate with existing T-3.3.1 NavigationTypes interfaces and hooks without breaking changes
- Animation timing must match T-3.3.2 desktop patterns (duration-500) for visual consistency
- Touch targets require minimum 44px size for mobile accessibility compliance
- Component must work seamlessly with responsive breakpoints and desktop navigation switching
- Legacy visual fidelity is critical - must match PrimaryNavbar.jsx mobile sections exactly

### Approach History

## Task Development Work Pad

As you work on this task, you may use the dedicated work pad file at:
`C:\Users\james\Master\BrightHub\BRun\brun3a\pmc\core\task-work-pad-dev.md`

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
### [T-3.3.3:ELE-1] Mobile hamburger button: Implement hamburger toggle with animations
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:110-122 (hamburger button)

### [T-3.3.3:ELE-2] Mobile menu container: Create slide-in menu with Next.js 14 optimization
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:137-238 (mobile menu container)

### [T-3.3.3:ELE-3] Mobile menu animations: Implement smooth transitions for opening/closing
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:137-145 (menu transitions)

### [T-3.3.3:ELE-4] Mobile accessibility: Ensure proper touch targets and accessibility
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-legacy\components\navbar\PrimaryNavbar.jsx`:137-238 (mobile accessibility)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.
   - **DSAP REQUIREMENT**: Complete STEP 1 (Documentation Discovery) during this phase for all design-related tasks.

1. [PREP-1] Analyze hamburger menu implementation in legacy code (implements ELE-1)
2. [PREP-2] Study mobile menu structure and behavior (implements ELE-2)
3. [PREP-3] Extract animation timing and effects for menu transitions (implements ELE-3)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.3.3 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.
   - **DSAP REQUIREMENT**: Complete STEP 2 (Compliance Implementation) during this phase for all design-related tasks.

1. [IMP-1] Create hamburger button component with animations (implements ELE-1)
2. [IMP-2] Implement mobile menu container with proper layout (implements ELE-2)
3. [IMP-3] Add slide-in/out animations with smooth transitions (implements ELE-3)
4. [IMP-4] Apply proper accessibility attributes and touch targets (implements ELE-4)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-3.3.3 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.
   - **DSAP REQUIREMENT**: Complete STEP 3 (Adherence Reporting) during this phase for all design-related tasks.

1. [VAL-1] Test hamburger button functionality and appearance (validates ELE-1)
2. [VAL-2] Verify mobile menu layout and structure (validates ELE-2)
3. [VAL-3] Test animation smoothness and timing (validates ELE-3)
4. [VAL-4] Verify touch target sizes and accessibility features (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-3.3.3 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\BRun\brun3a\aplio-modern-1\test\unit-tests\task-3-3\T-3.3.3\`

## Current Element
- Element ID: T-3.3.3
- Description: Not started
- Status: Not started
- Updated: 07/14/2025, 10:21:55 AM

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
Task initialized on 07/14/2025, 10:21:55 AM
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
Prior Task: T-3.3.2
Task Title: Desktop Navigation Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 164792
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-3.3.4
Task Title: Navigation Container and Responsive Integration
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 170830
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