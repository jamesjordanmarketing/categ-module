# AI Coding Conductor Prompt - T-2.2.6: Component Relationship Documentation

Your primary mission is to implement **T-2.2.6: Component Relationship Documentation** following the Project Memory Core (PMC) structured approach. This task builds directly on the successful completion of T-2.2.5 (Accordion and FAQ Component Visual Documentation) and requires documentation of component hierarchy, cross-component styling, design system consistency, and component relationships.

## Critical Context From Previous Task (T-2.2.5)

**You must understand**: T-2.2.5 established documentation quality standards that you must maintain:
- Implementation-ready specifications with specific measurements (px/rem/ms/%)
- Comprehensive dark mode coverage for all patterns
- Proper markdown structure with H1 headings and section headers
- Legacy code analysis with specific line references
- Code examples and implementation patterns

**Key Difference**: T-2.2.5 focused on individual component documentation. **T-2.2.6 focuses on component relationships and architecture-level patterns.**

## Step-by-Step Implementation Process

### 1. Generate Task Approach
1.  **Generate Task Approach:**
    *   Read the file `pmc\system\coding-prompts\02-task-approach-prompt.md`.
    *   Read the file system\plans\new-panels\02-new-task-carry-context-06-23-25-1228AM.md for relevant context from the task test finished just before this one.
    *   Execute the instructions contained within `pmc\system\coding-prompts\02-task-approach-prompt.md` *immediately*. This will involve reading `pmc\core\active-task.md` and generating the implementation approach in `pmc\system\plans\task-approach\current-task-approach.md`.

2.  **Integrate Task Approach:**
    *  Once you have completed the instructions from the task approach prompt, then:
    1. Check if you are in the directory 'pmc'
    2. If you are then execute the command in step 4. directly below.
    3. If you are NOT in pmc navigate to that directory manually first (not as part of compound '&&' commands)
    4. execute the following terminal command **exactly**:
        ```bash
        node bin\aplio-agent-cli.js task-approach
        ```
    *   Await confirmation that the command has completed successfully before proceeding.

**Validation Check**: Verify that `pmc/core/active-task.md` shows an "Added:" notation in the Task Approach section. If not, the command failed and you must request human assistance.

### 2. Execute T-2.2.6 Implementation
Now, turn your full attention to the file `pmc\core\active-task.md`.
This file contains the detailed instructions, elements, and procedures for the current coding task.
Execute the task described in `pmc\core\active-task.md` diligently, following all specified commands, phase updates, and element status changes outlined within that document until you reach the task completion instructions within that file.
Please note the prompt in: `pmc/core/active-task.md` contains:

**Target Directory**: `design-system/docs/architecture/` (NOT component-specific directories)

**Four Elements to Implement**:
- **ELE-1**: Component hierarchy and composition patterns (`aplio-legacy/app/home-4/page.jsx:1-15`)
- **ELE-2**: Cross-component styling patterns (`aplio-legacy/scss/_common.scss:26-317`)
- **ELE-3**: Design system consistency (`aplio-legacy/scss/_typography.scss:1-48`)
- **ELE-4**: Component variant relationships (`aplio-modern-1/design-system/tokens/colors.json:163-220`)

**Critical Phase Commands** (execute from pmc directory):
```bash
# After completing Preparation Phase
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "PREP" "complete"

# After completing Implementation Phase  
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "IMP" "complete"

# After completing Validation Phase
node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "VAL" "complete"
```

### 3. T-2.2.6 Specific Requirements

**Documentation Quality Standards** (learned from T-2.2.5):
- Include specific measurements and implementation examples
- Provide comprehensive dark mode coverage for ALL relationship patterns
- Use Mermaid.js for visual component relationship diagrams
- Reference T-2.2.5 documentation rather than duplicating individual component details

**Focus Areas**:
- **Component Composition**: How components work together in legacy implementations
- **Shared Styling**: Cross-component CSS patterns and override mechanisms
- **Visual Consistency**: Typography, spacing, and design patterns across components
- **Variant Relationships**: How component variants relate and interact across the design system

**Avoid Duplicating T-2.2.5 Work**: Reference existing accordion/FAQ documentation rather than re-documenting individual component characteristics.

### 4. Testing Protocol
After completing VAL phase and the final `update-phase-stage T-2.2.6 "VAL" "complete"` command:

**STOP and await human operator instructions for unit testing.**

The testing will follow a similar 4-phase approach as T-2.2.5 but focus on:
- Relationship validation across multiple components
- Cross-component consistency verification  
- Architecture diagram accuracy testing
- Design system coherence validation

## Key Success Factors

1. **Build on T-2.2.5 Foundation**: Reference the 5 documentation files in `design-system/docs/components/interactive/accordion/` as examples of quality and format standards

2. **Architecture-Level Thinking**: Focus on how components relate to each other, not individual component details

3. **Legacy Analysis Depth**: T-2.2.5 showed the importance of detailed legacy code analysis - apply this to component relationships

4. **Comprehensive Dark Mode**: Address the T-2.2.5 gap where 2 files missed dark mode coverage - ensure all relationship patterns include dark mode specifications

5. **Visual Documentation**: Use Mermaid.js to create component relationship diagrams and visual representations

## Documentation Standards Reference

**Format Model**: Use `design-system/docs/components/interactive/accordion/` files as reference for:
- Markdown structure and heading hierarchy
- Code example formatting
- Measurement specification patterns
- Implementation guidance detail level

**Testing Validation Model**: Reference `test/reports/T-2.2.5/T-2.2.5-final-testing-report.md` for understanding of validation criteria and quality expectations

## PMC Command Reference

All commands must be executed from `pmc` directory:
- Phase tracking: `node bin/aplio-agent-cli.js update-phase-stage T-2.2.6 "[PHASE]" "complete"`
- Error logging: `node bin/aplio-agent-cli.js error "<description>" <severity>`
- Action logging: `node bin/aplio-agent-cli.js log-action "<description>" <confidence>`

**Do not deviate from the structured PMC workflow.** Your role is to execute T-2.2.6 following the detailed instructions in `pmc/core/active-task.md` while maintaining the quality standards established in T-2.2.5.

---

**This optimized conductor prompt provides**: Clear T-2.2.6 context, specific quality standards from T-2.2.5, architectural focus rather than individual components, enhanced dark mode requirements, Mermaid.js integration guidance, and streamlined command sequences for efficient implementation.
