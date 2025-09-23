# AI Coding Conductor Prompt - T-2.5.6: Styling System Integration with Components

Your primary mission is to implement **T-2.5.6: Styling System Integration with Components** which creates a type-safe styled component system that integrates with the completed T-2.5.5 CSS foundation. This task requires careful integration with existing CSS custom properties and responsive systems.

## Critical Context Integration

**MANDATORY**: You must read and understand BOTH of these files as complementary documentation:

1. **`pmc/core/active-task.md`** - Contains the formal T-2.5.6 task specifications, implementation phases, and acceptance criteria
2. **`system/plans/new-panels/02-new-task-carry-context-07-01-25-0252PM.md`** - Contains critical context from completed T-2.5.5 work that your implementation MUST integrate with

These files are complementary, not conflicting. The active-task.md provides the implementation framework, while the carryover context provides essential constraints and existing architecture you must work within.

## Implementation Sequence

### Step 1: Context Analysis (CRITICAL)
1. **Read carryover context first**: `system/plans/new-panels/02-new-task-carry-context-07-01-25-0252PM.md`
   - Understand the complete CSS architecture established by T-2.5.5
   - Note the exact `--aplio-*` CSS variable naming convention (25 button, 9 card, 15 input variables)
   - Understand the CSS-based theme switching system (no JavaScript re-renders)
   - Review the 7 responsive breakpoints and 28 media queries established

2. **Read active task specifications**: `pmc/core/active-task.md`
   - Understand the 4 elements you must implement
   - Note the implementation location: `aplio-modern-1/components/design-system/system/styled.tsx`
   - Review the DSAP compliance requirements

### Step 2: Generate Task Approach
1. Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
2. Execute those instructions immediately to create your implementation approach
3. Navigate to pmc directory if not already there
4. Run: `node bin/aplio-agent-cli.js task-approach`
5. Verify the Task Approach section in active-task.md has an "Added:" notation

### Step 3: Implementation Requirements (CRITICAL CONSTRAINTS)

**CSS Variable Integration**: Your styled components MUST use the existing `--aplio-*` CSS variables, not JavaScript theme objects. This ensures compatibility with the automatic theme switching.

**No Theme Props**: Do NOT implement theme switching via JavaScript props. All theming must leverage the existing CSS cascade system.

**Responsive Integration**: Use the established 7 breakpoints from breakpoints.css (xs:475px through 2xl:1536px).

**TypeScript Requirements**: Provide full type safety while maintaining CSS custom property integration.

### Step 4: Execute Implementation Phases
Follow the exact phase structure in `pmc/core/active-task.md`:
- **PREP Phase**: Include DSAP documentation discovery
- **IMP Phase**: Create styled.tsx, variant system, composition patterns, example Button
- **VAL Phase**: Test integration with existing CSS and create DSAP compliance report

Execute all phase update commands as specified in the active task file.

### Step 5: Key Integration Points

**Must Integrate With**:
- Existing T-2.5.4 composition system at `aplio-modern-1/styles/system/composition.ts`
- CSS variables from `aplio-modern-1/styles/globals/variables.css`
- DSAP button specifications (30px padding, 30px border-radius)
- Next.js 14 build system compatibility

**Test Integration**: Reference the CSS test page at `/test-css-t255` to understand how the CSS foundation works.

## Success Criteria
1. Create type-safe styled component system using CSS custom properties
2. Implement component variant system with discriminated unions
3. Build reusable style composition patterns
4. Establish design token usage patterns
5. Create working Button component example
6. Maintain compatibility with T-2.5.5 CSS architecture

## Important Notes
- All PMC commands run from pmc directory using `node bin/[command]`
- Do NOT deviate from active-task.md instructions once you begin implementation
- The carryover context provides constraints, not conflicts with the active task
- Focus on enhancing the CSS foundation, not replacing it
- Ensure theme switching remains automatic via CSS cascade

**Upon VAL phase completion**: Stop and await human operator instructions for unit testing.

This prompt serves as the initialization procedure for T-2.5.6 implementation within the PMC system.
