# AI Implementation Agent Conductor Prompt - T-3.3.3 Mobile Navigation

## Overview
Your mission is to implement **T-3.3.3: Mobile Navigation Implementation** using the structured Project Memory Core (PMC) system. This task builds upon the completed T-3.3.2 Desktop Navigation and T-3.3.1 Foundation Architecture.

## Context Integration Strategy
You have **TWO COMPLEMENTARY** information sources that work together:

1. **Implementation Specification**: `pmc\core\active-task.md` - Contains the detailed task requirements, phases, and acceptance criteria for T-3.3.3
2. **Context Carryover**: `system\plans\new-panels\02-new-task-carry-context-07-14-25-1022AM.md` - Contains critical context from T-3.3.2 completion and implementation insights

**IMPORTANT**: These files are designed to work together - the context carryover provides the "why" and "how it relates to previous work," while the active task provides the "what" and "how to implement."

## Execution Workflow

### Phase 1: Context Integration (5 minutes)
1. **Read Context First**: Start with `system\plans\new-panels\02-new-task-carry-context-07-14-25-1022AM.md`
   - Focus on "Critical Implementation Context" section
   - Note the T-3.3.1 foundation architecture requirements
   - Understand T-3.3.2 desktop navigation patterns to follow

2. **Read Active Task**: Then read `pmc\core\active-task.md`
   - Understand the T-3.3.3 mobile navigation requirements
   - Review the acceptance criteria and task elements
   - Note the DSAP (Design System Adherence Protocol) requirements

### Phase 2: Task Approach Generation (10 minutes)
1. **Generate Implementation Approach**:
   - Read `pmc\system\coding-prompts\02-task-approach-prompt.md`
   - Execute its instructions to create your detailed approach
   - **Integration Point**: Use insights from the context carryover to inform your approach

2. **Integrate Task Approach**:
   - Navigate to `pmc` directory
   - Execute: `node bin\aplio-agent-cli.js task-approach`
   - **Verification**: Confirm the Task Approach section in `active-task.md` has "Added:" notation

### Phase 3: Implementation Execution
Execute the task following the three-phase structure in `active-task.md`:

**PREP Phase**: 
- Complete DSAP Documentation Discovery (mandatory)
- Analyze legacy mobile navigation code (use context carryover file paths)
- **Context Integration**: Apply T-3.3.1/T-3.3.2 patterns identified in carryover

**IMP Phase**: 
- Implement hamburger button, slide-in menu, animations, and accessibility
- **Context Integration**: Use foundation architecture files specified in carryover
- Follow T-3.3.2 desktop navigation patterns for consistency

**VAL Phase**: 
- Complete comprehensive testing and DSAP adherence reporting
- **Context Integration**: Apply additional testing needs from carryover

**Phase Updates**: Execute these commands after each phase completion:
- `node bin\aplio-agent-cli.js update-phase-stage T-3.3.3 "PREP" "complete"`
- `node bin\aplio-agent-cli.js update-phase-stage T-3.3.3 "IMP" "complete"`
- `node bin\aplio-agent-cli.js update-phase-stage T-3.3.3 "VAL" "complete"`

### Phase 4: Completion Protocol
After completing VAL phase and running the final update-phase-stage command:
- **STOP** and await human operator instructions for unit testing
- Do NOT proceed to unit testing automatically

## Key Integration Points

### Foundation Architecture (from T-3.3.1)
**Must Use**: The context carryover specifies these validated files:
- `aplio-modern-1/components/navigation/types/NavigationTypes.ts`
- `aplio-modern-1/components/navigation/hooks/useNavigationState.ts` 
- `aplio-modern-1/components/navigation/hooks/useStickyNavigation.ts`

### Desktop Navigation Patterns (from T-3.3.2)
**Must Follow**: Animation timing, ARIA attributes, active state detection, theme support

### Mobile-Specific Requirements
**Must Implement**: Hamburger menu, slide-in functionality, 44px touch targets, mobile accessibility

## Critical Success Factors

1. **DSAP Compliance**: Mandatory three-step process (Documentation Discovery → Compliance Implementation → Adherence Reporting)

2. **Context Integration**: Use carryover context to inform implementation decisions, not as conflicting instructions

3. **Foundation Reuse**: Leverage existing T-3.3.1 architecture rather than recreating it

4. **Visual Fidelity**: Match legacy mobile navigation exactly (reference paths in carryover)

5. **Path Resolution**: Fix component import issues identified in T-3.3.1 testing

## Working Directory
All PMC commands must be run from the `pmc` directory using `node bin\[command]`.

## Error Handling
- Use `node bin\aplio-agent-cli.js error "<description>" <severity>` for error reporting
- Stop after 5 failed attempts on any issue and alert human operator

## Final Note
This conductor prompt is optimized for T-3.3.3 Mobile Navigation implementation. The context carryover and active task files are designed to work together seamlessly - use both to ensure complete, informed implementation that builds properly upon the established navigation foundation.
