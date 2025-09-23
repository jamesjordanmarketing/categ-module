# T-3.2.3 Accordion Container Implementation - AI Conductor Prompt

## Mission Overview
You are implementing T-3.2.3: Accordion Container Implementation, which builds directly on the successfully completed T-3.2.2 AccordionItem implementation. This task creates the orchestration layer that transforms individual AccordionItem components into a cohesive accordion interface.

## Critical Success Context
**T-3.2.2 Status**: PRODUCTION READY - All foundation components are implemented and tested (24/24 unit tests passing, 95% confidence visual validation, zero accessibility violations).

**Your Integration Challenge**: Build a container that seamlessly coordinates existing AccordionItem components while adding variant support, state management, and focus orchestration.

## Essential Reading Order
To succeed, you MUST read these files in this exact order:

### 1. Context Foundation (READ FIRST)
**File**: `system\plans\new-panels\02-new-task-carry-context-07-07-25-0100PM.md`
**Purpose**: Understand what T-3.2.2 accomplished and how it impacts your T-3.2.3 implementation
**Key Sections**: Focus on "Critical Implementation Context" and "Integration Requirements"

### 2. Implementation Specifications (READ SECOND)
**File**: `pmc\core\active-task.md`
**Purpose**: Your detailed implementation roadmap with acceptance criteria and phase-by-phase guidance
**Key Sections**: Focus on "Acceptance Criteria" and "Implementation Process Phases"

**INTEGRATION PRINCIPLE**: These documents are complementary, not conflicting. The carryover context explains HOW to integrate with existing components, while the active task defines WHAT to implement.

## Streamlined Execution Process

### Phase 1: Context Integration (Essential)
1. **Read Context File**: Study `system\plans\new-panels\02-new-task-carry-context-07-07-25-0100PM.md` completely
2. **Read Active Task**: Study `pmc\core\active-task.md` completely
3. **Generate Task Approach**: Execute instructions from `pmc\system\coding-prompts\02-task-approach-prompt.md`
4. **Integrate Approach**: 
   - Navigate to `pmc` directory
   - Execute: `node bin\aplio-agent-cli.js task-approach`
   - Verify the Task Approach section has "Added:" notation

### Phase 2: Implementation Execution
1. **Execute PREP Phase**: Complete all preparation steps from active-task.md
   - CRITICAL: Include DSAP Documentation Discovery
   - CRITICAL: Analyze integration with existing T-3.2.2 components
   - Execute: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "PREP" "complete"`

2. **Execute IMP Phase**: Complete all implementation steps from active-task.md
   - CRITICAL: Follow server component patterns (P002-SERVER-COMPONENT)
   - CRITICAL: Implement variant support and state management
   - Execute: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "IMP" "complete"`

3. **Execute VAL Phase**: Complete all validation steps from active-task.md
   - CRITICAL: Test integration with AccordionItem components
   - CRITICAL: Validate focus management and accessibility
   - Execute: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "VAL" "complete"`

### Phase 3: Completion Protocol
After completing VAL phase and executing the final update-phase-stage command, STOP and await human operator instructions for unit testing.

## Integration Success Factors

### Component Integration Priority
1. **AccordionItem.tsx**: Your container must orchestrate these existing client components
2. **AccordionProvider Context**: Leverage existing T-3.2.1 context system for state coordination  
3. **Animation System**: Coordinate (don't interfere with) existing 300ms transitions
4. **Focus Management**: Extend existing keyboard navigation to multi-item scenarios

### Implementation Approach Guidelines
- **Server Component First**: Use P002-SERVER-COMPONENT pattern where possible
- **State Coordination**: Implement controlled/uncontrolled patterns without breaking existing AccordionItem behavior
- **Variant Support**: Add single-open and multiple-open modes through coordination, not replacement
- **Focus Orchestration**: Extend T-3.2.2's keyboard navigation to container-level management

## Testing Framework Ready
The comprehensive testing protocol established in T-3.2.2 is ready for T-3.2.3:
- Enhanced scaffold system with 18 variations
- Sequential LLM vision analysis with 60-second rate limiting
- Visual regression testing infrastructure
- Automated accessibility validation

## Key Success Metrics
- Container properly renders and manages AccordionItem components
- Single-open and multiple-open variants work correctly
- State management supports controlled and uncontrolled usage
- Focus management coordinates between multiple accordion items
- Integration maintains T-3.2.2's animation timing and accessibility
- All acceptance criteria from active-task.md are met

## Critical Commands
All PMC commands must be run from the `pmc` directory:
- `node bin\aplio-agent-cli.js task-approach` (Task approach integration)
- `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "PREP" "complete"` (Phase completion)
- `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "IMP" "complete"` (Phase completion)
- `node bin/aplio-agent-cli.js update-phase-stage T-3.2.3 "VAL" "complete"` (Phase completion)
- `node bin/aplio-agent-cli.js error "<description>" <severity>` (Error reporting)
- `node bin/aplio-agent-cli.js log-action "<description>" <confidence>` (Action logging)

## Error Handling
- Report all errors using the error command with appropriate severity (1-10)
- After 5 failed attempts on any issue, alert human operator and stop
- Append `| cat` to all bash commands to prevent terminal hanging

## Final Notes
This is an integration task, not a standalone implementation. Your success depends on understanding how T-3.2.2 components work and building a container that enhances rather than replaces their functionality. The carryover context provides the integration blueprint, while the active task provides the implementation roadmap.

Execute with confidence - all prerequisite infrastructure is in place and ready for your container implementation.
