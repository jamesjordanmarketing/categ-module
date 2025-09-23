# AI Implementation Agent Conductor Prompt - T-2.5.5 CSS Implementation Strategy

## Mission Overview

You are tasked with implementing **T-2.5.5: CSS Implementation Strategy** - a comprehensive CSS architecture for the Next.js 14 design system. This task builds directly upon the completed T-2.5.4 Style Composition System and requires careful integration with existing theme infrastructure.

## Critical Context Integration

**ESSENTIAL READING ORDER**: You must read these files in this exact sequence to understand the complete implementation context:

1. **`system\plans\new-panels\02-new-task-carry-context-07-01-25-1121AM.md`** - Contains critical context from T-2.5.4 completion including:
   - How the composition system expects CSS variables to be structured
   - Specific CSS custom properties required by working examples
   - Integration requirements with T-2.5.3 semantic tokens and T-2.5.3a Theme Switcher
   - Modified implementation approaches based on T-2.5.4 learnings

2. **`pmc\core\active-task.md`** - Contains the formal T-2.5.5 task specifications including:
   - Four implementation elements (ELE-1 through ELE-4)
   - DSAP compliance requirements
   - Implementation phases and validation steps
   - Legacy code references and testing requirements

**Integration Understanding**: These documents are complementary. The carryover context provides the "why" and "how" based on T-2.5.4 completion, while the active task provides the "what" for T-2.5.5 implementation.

## Implementation Execution Protocol

### Step 1: Context Absorption Phase
1. **Thoroughly read** the carryover context file to understand T-2.5.4 dependencies
2. **Analyze** the active task file to understand T-2.5.5 requirements  
3. **Identify** integration points between composition system expectations and CSS implementation needs

### Step 2: Generate & Integrate Task Approach

1. Read the file `pmc\system\coding-prompts\02-task-approach-prompt.md`.
2. Read the file system\plans\new-panels\02-new-task-carry-context-07-01-25-1121AM.md for relevant context from the task test finished just before this one.
3. Execute the instructions contained within `pmc\system\coding-prompts\02-task-approach-prompt.md` *immediately*. This will involve reading `pmc\core\active-task.md` and generating the implementation approach in `pmc\system\plans\task-approach\current-task-approach.md`.

4. Once the instructions from the task approach prompt is completed
5. Check if you are in the directory 'pmc'. If you are then execute the command in step 4. directly below.
   * If you are NOT in pmc navigate to that directory manually first (not as part of compound '&&' commands)
6. Execute the following terminal command **exactly**:
        ```bash
        node bin\aplio-agent-cli.js task-approach
        ```
7. Await confirmation that the command has completed successfully before proceeding.
8. Check the ** Task Approach section of pmc\core\active-task.md if it does NOT have a "Added:" notation. Then it did not run and you must stop and ask the human operator for assistance.

### Step 3: Implementation Execution
Execute the task phases exactly as specified in `pmc\core\active-task.md`:

**PREP Phase**: 
- Research modern CSS practices while keeping T-2.5.4 integration requirements in mind
- Focus on CSS custom property strategies that align with composition system expectations

**IMP Phase**:
- Implement at `aplio-modern-1\styles\globals\` as specified
- **Critical Integration Point**: Ensure CSS variables match the `--aplio-*` naming convention expected by T-2.5.4
- Test integration with existing composition utilities during implementation

**VAL Phase**:
- Validate CSS implementation works with T-2.5.4 composition system
- Test button, card, input, and typography variants render correctly
- Ensure theme switching functionality is preserved

### Step 4: Integration Validation
**Essential**: Your CSS implementation must enable the T-2.5.4 composition utilities to function correctly. Test specifically:
- Button variants using your CSS custom properties
- Card variants with your responsive foundation
- Input variants with your global styles
- Typography variants with your CSS variable system

## Key Success Factors

1. **CSS Custom Property Alignment**: Your CSS variables must match exactly what the T-2.5.4 composition system expects
2. **Theme Integration**: Preserve the automatic theme switching functionality without component re-renders
3. **Responsive Compatibility**: Ensure your media queries work with the composition system's responsive utilities
4. **Foundation Layer**: Provide the global CSS foundation that enables composition utilities to function optimally

## File Location Guidance

**Primary Work**: `aplio-modern-1\styles\globals\` (your implementation directory)
**Integration Reference**: `aplio-modern-1\styles\system\composition.ts` (dependency that relies on your work)
**Theme Context**: `aplio-modern-1\styles\themes\` (tokens to convert to CSS variables)

## Testing Focus

Your testing must verify both:
- **Standalone CSS functionality** (as specified in active task)
- **Integration with T-2.5.4** (as detailed in carryover context)

## Completion Criteria

Task completion requires:
1. All four ELE elements implemented per active task specifications
2. Successful integration with T-2.5.4 composition system per carryover context
3. Theme switching functionality preserved
4. DSAP compliance achieved

**Remember**: The carryover context provides the integration strategy; the active task provides the implementation specifications. Both are essential for successful T-2.5.5 completion.

---

**Begin implementation immediately with Step 1: Context Absorption Phase.**
