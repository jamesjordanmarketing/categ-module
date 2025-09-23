# T-2.5.6 Current Active Task Coding Instructions

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
Task ID: T-2.5.6
Task Title: T-2.5.6: Styling System Integration with Components

- FR Reference: FR-2.5.0
- Implementation Location: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\components\design-system\system\styled.tsx`
- Patterns: P008-COMPONENT-VARIANTS, P009-RESPONSIVE-STYLES
- Dependencies: T-2.1.0, T-2.5.1, T-2.5.2, T-2.5.3, T-2.5.4
- Estimated Hours: 2-3
- Description: Implement the integration of the styling system with React components in the Next.js 14 design system
- Test Locations: Not specified
- Testing Tools: Not specified
- Test Coverage Requirements: Not specified
- Completes Component?: Not specified
- Confidence: 
- Last Updated: 07/01/2025, 02:52:08 PM

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
Create compliance report at: `aplio-modern-1/test/unit-tests/task-{series}/T-2.5.6/design-system-adherence-report.md`

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



## Task Approach

### Current Approach (Added: 07/01/2025, 03:05:06 PM)

Overview:
I will create a type-safe styled component system that integrates with the completed T-2.5.5 CSS foundation. The approach leverages existing `--aplio-*` CSS variables and CSS-based theme switching to provide TypeScript-safe component variants without JavaScript theme props, ensuring seamless integration with the established responsive and composition systems.

Implementation Strategy:
1. **Create Type-Safe Styled Component Foundation (ELE-1)**
   - Implement `styled.tsx` at `aplio-modern-1/components/design-system/system/` with CSS custom property integration
   - Create TypeScript interfaces that map to existing `--aplio-*` variables from T-2.5.5 variables.css
   - Build component factory pattern that generates styled components using CSS variables, not JavaScript themes
   - Reference legacy `colors.ts` lines 67-141 for type integration patterns while adapting for CSS variables
   - Ensure full type safety while maintaining CSS cascade-based theme switching

2. **Implement Discriminated Union Variant System (ELE-2)**
   - Create component variant types using discriminated unions for button, card, input, and typography categories
   - Map variant props to existing CSS variable categories (25 button, 9 card, 15 input variables)
   - Build variant resolver that applies CSS classes rather than inline styles for theme compatibility
   - Reference legacy `colors.ts` lines 77-140 for variant system patterns
   - Ensure variants work with CSS-based theme switching without component re-renders

3. **Build Style Composition Utilities (ELE-3)**
   - Create reusable composition patterns that enhance existing T-2.5.4 composition.ts system
   - Implement style merging utilities that combine CSS variable references with responsive breakpoints
   - Build component base class patterns that integrate with established 7 breakpoints (xs:475px through 2xl:1536px)
   - Reference legacy `colors.ts` lines 149-182 for composition patterns
   - Ensure composition utilities work with CSS custom properties and automatic theme switching

4. **Establish Design Token Usage Patterns (ELE-4)**
   - Create patterns for referencing CSS custom properties as authoritative design token source
   - Build token mapping utilities that connect TypeScript types to `--aplio-*` variable names
   - Implement design token validation patterns that ensure CSS variable availability
   - Reference legacy `colors.ts` lines 19-35 for token usage patterns
   - Document patterns for consuming existing CSS variables in component implementations

5. **Create Working Button Component Example (ELE-1,2,3,4)**
   - Implement complete Button component demonstrating all patterns with DSAP compliance (30px padding, 30px border-radius)
   - Showcase variant system, composition utilities, and token usage in single working example
   - Validate integration with existing CSS architecture and theme switching functionality
   - Test TypeScript safety and CSS variable integration across all breakpoints and themes

Key Considerations:
- Must use existing `--aplio-*` CSS variables, not JavaScript theme objects, to maintain automatic theme switching
- No theme props allowed - all theming through CSS cascade to prevent component re-renders on theme changes
- Integration with T-2.5.4 composition.ts system at `aplio-modern-1/styles/system/composition.ts` required
- TypeScript safety required while maintaining CSS custom property integration and responsive breakpoints
- DSAP compliance mandatory with existing button specifications (30px padding, 30px border-radius)

### Approach History

### Current Approach (Added: 07/01/2025, 03:04:21 PM)

Overview:
I will implement a comprehensive CSS architecture that provides the foundational layer for the completed T-2.5.4 Style Composition System. The approach focuses on creating CSS custom properties in `--aplio-*` format, modern reset principles, global responsive foundations, and media query systems that enable seamless theme switching and composition utility integration.

Implementation Strategy:
1. **Create Modern CSS Reset (ELE-1)**
   - Implement `reset.css` at `aplio-modern-1/styles/globals/` using modern principles from legacy `_common.scss` lines 1-25
   - Focus on box-sizing, normalize margins/padding, and consistent typography baseline
   - Ensure reset doesn't conflict with T-2.5.4 composition utilities or CSS custom properties
   - Test cross-browser compatibility and integration with existing global styles

2. **Generate CSS Custom Properties (ELE-2)**
   - Convert all T-2.5.3 semantic tokens to CSS variables in `--aplio-{category}-{property}` format
   - Create `variables.css` that maps theme tokens to CSS custom properties for automatic theme switching
   - Ensure variable names align exactly with T-2.5.4 composition system expectations (button, card, input, typography)
   - Generate both light and dark theme variable sets using existing theme provider data
   - Reference legacy `colors.ts` lines 298-310 for CSS variable generation patterns

3. **Implement Global Style Foundation (ELE-3)**
   - Create `base.css` with responsive typography, spacing, and layout foundations
   - Extract global style patterns from legacy `_common.scss` lines 26-317 while modernizing approach
   - Implement styles using CSS custom properties to maintain theme reactivity
   - Ensure global styles complement rather than conflict with composition utilities
   - Focus on typography scales, spacing systems, and component base styles

4. **Develop Responsive Media Query System (ELE-4)**
   - Create `breakpoints.css` with media query utilities compatible with T-2.5.4 responsive composition
   - Use breakpoint definitions from legacy `tailwind.config.js` lines 13-17 (sm, md, lg, xl, 2xl)
   - Implement CSS custom property responsive patterns that work with theme switching
   - Create responsive utility classes that integrate with composition system expectations
   - Test responsive behavior across all viewport sizes with theme switching

5. **Integration and Testing**
   - Import all CSS files into Next.js 14 build system through `app/globals.css`
   - Validate T-2.5.4 composition utilities function correctly with CSS foundation
   - Test theme switching preserves CSS custom property reactivity
   - Verify button, card, input, and typography variants render correctly with new CSS infrastructure

Key Considerations:
- CSS custom properties must match exact `--aplio-*` naming expected by T-2.5.4 composition utilities
- Theme switching functionality must remain automatic without component re-renders using CSS variables
- Global styles must provide foundation without conflicting with composition utility approach
- Media queries must use same breakpoint names/values as T-2.5.4 responsive composition utilities
- All CSS must be compatible with Next.js 14 App Router build system and existing theme provider

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
### [T-2.5.6:ELE-1] Styled component system: Create a type-safe styled component integration pattern
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:67-141 (type integration)

### [T-2.5.6:ELE-2] Component variant system: Implement the component variant system with prop types
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:77-140 (variant system)

### [T-2.5.6:ELE-3] Style composition pattern: Create reusable style composition patterns for components
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:149-182 (composition patterns)

### [T-2.5.6:ELE-4] Design token usage pattern: Establish patterns for using design tokens in components
  Refer to Legacy Code Reference: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\src\lib\design-system\tokens\colors.ts`:19-35 (token usage)

## Implementation Process Phases
### Preparation Phase    
   - PREP Phase guidance: These Preparation Steps highlight key research and analysis activities but aren't exhaustive. Your primary goal is to prepare for complete implementation of all requirements in the ## Acceptance Criteria section of this document. Enhance these steps as needed to ensure comprehensive preparation.
   - **DSAP REQUIREMENT**: Complete STEP 1 (Documentation Discovery) during this phase for all design-related tasks.

1. [PREP-1] Research styled component approaches for Next.js 14 (implements ELE-1)
2. [PREP-2] Study component variant systems in modern design systems (implements ELE-2)
3. [PREP-3] Analyze style composition patterns for React components (implements ELE-3)
4. [PREP-4] Investigate optimal design token usage in components (implements ELE-4)

When the Preparation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.5.6 "PREP" "complete"
from the directory pmc

### Implementation Phase
   - IMP Phase guidance: These Implementation Steps outline core coding activities but aren't exhaustive. Your primary responsibility is to implement code that fulfills all requirements in the ## Acceptance Criteria section of this document. Extend beyond these steps when necessary to create a complete solution.
   - **DSAP REQUIREMENT**: Complete STEP 2 (Compliance Implementation) during this phase for all design-related tasks.

1. [IMP-1] Create styled component integration with TypeScript (implements ELE-1)
2. [IMP-2] Implement component variant system with discriminated unions (implements ELE-2)
3. [IMP-3] Build reusable style composition utilities for components (implements ELE-3)
4. [IMP-4] Establish design token usage patterns with examples (implements ELE-4)
5. [IMP-5] Create example implementation for a Button component (implements ELE-1, ELE-2, ELE-3, ELE-4)

When the Implementation phase steps are complete you MUST call: 
node bin/aplio-agent-cli.js update-phase-stage T-2.5.6 "IMP" "complete"
from the directory pmc

### Validation Phase
   - VAL Phase guidance: These Validation Steps suggest key testing activities but aren't comprehensive. Your ultimate goal is to verify that your implementation meets all requirements in the ## Acceptance Criteria section of this document. Add additional validation steps as needed to ensure complete quality assurance.
   - **DSAP REQUIREMENT**: Complete STEP 3 (Adherence Reporting) during this phase for all design-related tasks.

1. [VAL-1] Test styled component system with various components (validates ELE-1)
2. [VAL-2] Verify component variant system type safety (validates ELE-2)
3. [VAL-3] Validate style composition patterns with diverse examples (validates ELE-3)
4. [VAL-4] Review design token usage in component implementations (validates ELE-4)

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
node bin/aplio-agent-cli.js update-phase-stage T-2.5.6 "VAL" "complete"
from the directory pmc

After completing the Validation Phase and submitting the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator.

## Testing Overview
Testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.
See test mapping file: Not specified

## Current Element
- Element ID: T-2.5.6
- Description: Not started
- Status: Not started
- Updated: 07/01/2025, 02:52:08 PM

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
Task initialized on 07/01/2025, 02:52:08 PM
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
Prior Task: T-2.5.5
Task Title: CSS Implementation Strategy
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 123295
Is this task depended on by the current task? No

### Next Task in Sequence
Next Task: T-3.1.0
Task Title: Button Component Implementation
Task Details: pmc\product\06-aplio-mod-1-tasks.md starts on line 129034
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