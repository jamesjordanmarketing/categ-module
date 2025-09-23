# AI Coding Conductor Prompt - T-2.5.2 Theme Provider Implementation

## Mission Overview
Your primary mission is to implement **T-2.5.2: Theme Provider Implementation** for the Aplio Design System Modernization project. This task builds directly upon the successfully completed T-2.5.1 Design Token Typing System Implementation.

## Critical Context Integration
You have two complementary sources of information that must be used together:

1. **Primary Task Specification**: `pmc\core\active-task.md` - Contains the formal task requirements, implementation phases, and acceptance criteria for T-2.5.2
2. **Implementation Context**: `system\plans\new-panels\02-new-task-carry-context-06-27-25-0419PM.md` - Contains critical insights from T-2.5.1 completion that directly impact your T-2.5.2 implementation

**IMPORTANT**: These files are complementary, not conflicting. The carryover context provides the implementation foundation and constraints based on T-2.5.1's successful completion, while the active task file provides the formal requirements for T-2.5.2.

## Execution Protocol

### Step 1: Context Preparation
1. **Read Carryover Context First**: Start by thoroughly reading `system\plans\new-panels\02-new-task-carry-context-06-27-25-0419PM.md` to understand:
   - T-2.5.1's successful completion (108/108 tests passing)
   - The validated token system with 69 token paths
   - Type safety patterns and integration requirements
   - Testing standards and mock implementation resolution patterns

2. **Read Active Task File**: Then read `pmc\core\active-task.md` to understand:
   - T-2.5.2 formal requirements and acceptance criteria
   - Implementation phases (PREP, IMP, VAL)
   - Component elements and task approach requirements

### Step 2: Generate Task Approach
1. **Read Task Approach Prompt**: Execute the instructions in `pmc\system\coding-prompts\02-task-approach-prompt.md`
2. **Integrate Context**: When generating your approach, you MUST leverage the insights from the carryover context, specifically:
   - Use the validated token system from T-2.5.1
   - Follow the established type safety patterns
   - Apply the testing standards that achieved 100% pass rate
   - Maintain legacy compatibility (#B1E346 primary color preservation)

3. **Execute PMC Command**: After completing the task approach generation:
   ```bash
   node bin\aplio-agent-cli.js task-approach
   ```
   ⚠️ **CRITICAL**: Verify the Task Approach section in `pmc\core\active-task.md` shows an "Added:" notation. If not, the command failed and you must stop and request assistance.

### Step 3: Implementation Execution
Execute the task following the phases outlined in `pmc\core\active-task.md`:

#### Key Integration Points:
- **Theme Provider Context**: Must use TokenPath types from T-2.5.1's validated system
- **Type Safety**: All implementations must compile in TypeScript strict mode (proven in T-2.5.1)
- **Token Integration**: Leverage `aplio-modern-1/styles/system/tokens.ts` and `token-utils.ts` from T-2.5.1  
- **Testing Standards**: Follow the 95% coverage requirement and mock implementation patterns from T-2.5.1

#### Phase Execution:
1. **PREP Phase**: Research and analyze theme system requirements using T-2.5.1 token foundation
2. **IMP Phase**: Implement theme provider components with type-safe token integration
3. **VAL Phase**: Validate theme functionality with the testing standards from T-2.5.1

#### Required PMC Commands:
- `node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "PREP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "IMP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.5.2 "VAL" "complete"`

### Step 4: Testing Protocol
- **Testing File**: `pmc\core\active-task-unit-tests-2.md` contains comprehensive testing instructions
- **Coverage Requirement**: Achieve 95% test coverage following T-2.5.1 patterns
- **Type Safety**: All theme operations must maintain TypeScript strict mode compliance
- **Integration Testing**: Verify theme provider works seamlessly with T-2.5.1 token system

## Success Criteria Alignment
Your implementation must satisfy both:
1. **Active Task Acceptance Criteria**: Theme provider, context API, light/dark presets, persistence
2. **Carryover Context Requirements**: Type safety integration, token system leverage, legacy compatibility

## Key Implementation Constraints
Based on T-2.5.1 completion:
- You MUST use the validated token system (69 token paths across 5 categories)
- You MUST maintain TypeScript strict mode compilation
- You MUST preserve legacy compatibility (#B1E346 primary color)
- You MUST achieve 95% test coverage with proper mock implementations
- You MUST follow the established utility function patterns for token resolution

## Directory Operations
- **Primary working directory**: `aplio-modern-1/` for implementation
- **PMC commands**: Run from `pmc/` directory
- **Target implementation**: `aplio-modern-1/components/providers/theme-provider.tsx`
- **Testing location**: `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.2/`

## Completion Protocol
After completing VAL phase and running the final update-phase-stage command, you MUST:
1. Stop and await human operator instructions for unit testing
2. Provide summary of implementation aligned with both task file and carryover context
3. Confirm all integration requirements with T-2.5.1 token system have been satisfied

**Remember**: The carryover context provides the implementation foundation and constraints, while the active task file provides the formal requirements. Use them together for successful T-2.5.2 implementation.
