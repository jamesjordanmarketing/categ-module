# T-2.5.2 Current Active Task Coding Instructions

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
Task ID: T-2.5.2
Task Title: T-2.5.2: Theme Provider Implementation

- FR Reference: FR-2.5.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\providers\theme-provider.tsx`
- Patterns: P007-THEME-PROVIDER, P010-DARK-MODE
- Dependencies: T-2.1.0, T-2.5.1
- Estimated Hours: 2-3
- Description: Implement a type-safe theme provider system with dark mode support for the Next.js 14 design system
- Test Locations: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-5\T-2.5.2\`
- Testing Tools: Jest, React Testing Library, TypeScript, Next.js Testing Utilities, Playwright
- Test Coverage Requirements: 95% code coverage
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 06/27/2025, 04:25:59 PM

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
Create compliance report at: `aplio-modern-1/test/unit-tests/task-{series}/T-2.5.2/design-system-adherence-report.md`

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

- Implement theme provider with context API
- Create light and dark theme presets
- Build theme switching functionality
- Establish theme persistence between sessions

These criteria define successful completion of this task and should guide your implementation work through all phases.

## Task Approach

### Current Approach (Added: 06/27/2025, 04:34:08 PM)

Overview:
Implement a type-safe theme provider system leveraging the validated T-2.5.1 token system (69 token paths). Build React context with light/dark theme presets, system preference detection, and localStorage persistence using existing TypeScript interfaces and token utilities.

Implementation Strategy:
1. **Create Theme Context with T-2.5.1 Integration**
   - Define theme interface using existing TokenPath types from tokens.ts
   - Create ThemeContext with theme mode ('light' | 'dark' | 'system') and token resolver
   - Implement theme type definitions extending validated token system
   - Use existing ColorStateVariations for theme-aware color states

2. **Implement ThemeProvider Component**
   - Build provider component with theme state management using useState/useEffect
   - Integrate system preference detection via window.matchMedia
   - Initialize theme from localStorage with fallback to system preference
   - Apply theme CSS classes to document element for Tailwind dark mode compatibility

3. **Add Theme Switching and Persistence**
   - Implement setTheme function with validation and side effects
   - Add localStorage persistence with error handling and SSR compatibility
   - Create theme toggle utilities and preference synchronization
   - Ensure seamless integration with existing design token resolution

4. **Create Theme Access Hooks**
   - Build useTheme hook for component access to theme state and functions
   - Add useThemeTokens hook for type-safe token resolution with theme awareness
   - Implement theme-aware token utilities leveraging existing TokenResolver patterns
   - Ensure full TypeScript strict mode compliance following T-2.5.1 patterns

5. **Validate Theme System Integration**
   - Test theme provider with mock consumers and token resolution
   - Verify localStorage persistence and system preference detection
   - Validate TypeScript compilation and token path resolution
   - Ensure 95% test coverage following T-2.5.1 testing standards

Key Considerations:
• Leverage T-2.5.1 validated token system - use existing TokenPath types and 69 token paths across 5 categories
• Maintain legacy compatibility with #B1E346 primary color and existing Tailwind dark mode class strategy
• Follow TypeScript strict mode compilation requirements established in T-2.5.1 implementation
• Preserve 95% test coverage standard with proper mock implementations matching T-2.5.1 patterns
• Ensure seamless integration with existing token utilities and ColorStateVariations from T-2.5.1

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
### [T-2.5.2:ELE-1] Theme context implementation: Create a React context for theme management
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:141-148 (theme type definitions)

### [T-2.5.2:ELE-2] Theme provider component: Implement a provider component for theme state
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:236-275 (theme system implementation)

### [T-2.5.2:ELE-3] Theme switching functionality: Implement theme toggling and preference detection
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-legacy\tailwind.config.js`:10 (dark mode configuration)

### [T-2.5.2:ELE-4] Theme persistence: Add theme preference persistence to localStorage
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:236-275 (theme persistence)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.
   - **DSAP REQUIREMENT**: Complete STEP 1 (Documentation Discovery) during this phase for all design-related tasks.

1. [PREP-1] Analyze theme system requirements and design token structure (implements ELE-1)
2. [PREP-2] Study theme provider patterns in React and Next.js (implements ELE-2)
3. [PREP-3] Research theme switching and system preference detection (implements ELE-3)
4. [PREP-4] Investigate localStorage theme persistence implementation (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.
   - **DSAP REQUIREMENT**: Complete STEP 2 (Compliance Implementation) during this phase for all design-related tasks.

1. [IMP-1] Create theme context with TypeScript interfaces (implements ELE-1)
2. [IMP-2] Implement ThemeProvider component with theme state (implements ELE-2)
3. [IMP-3] Add theme toggling and system preference detection (implements ELE-3)
4. [IMP-4] Implement localStorage theme persistence (implements ELE-4)
5. [IMP-5] Add theme access hooks for components (implements ELE-1, ELE-2)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.
   - **DSAP REQUIREMENT**: Complete STEP 3 (Adherence Reporting) during this phase for all design-related tasks.

1. [VAL-1] Test theme context with mock consumers (validates ELE-1)
2. [VAL-2] Verify ThemeProvider component in isolation (validates ELE-2)
3. [VAL-3] Test theme switching functionality (validates ELE-3)
4. [VAL-4] Validate theme persistence across page refreshes (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\unit-tests\task-2-5\T-2.5.2\`

## Current Element
- Element ID: None selected
- Description: Not started
- Status: Not started
- Updated: 06/27/2025, 04:25:59 PM

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
Task initialized on 06/27/2025, 04:25:59 PM
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
Prior Task: T-2.5.1
Task Title: Design Token Typing System Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 112125
Is this task depended on by the current task? Yes

### Next Task in Sequence
Next Task: T-2.5.3
Task Title: Design Token Mapping Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 117753
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