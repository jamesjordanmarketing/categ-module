# AI Coding Conductor Prompt - Optimized for T-1.1.3

Your primary mission is to execute the current active task T-1.1.3 (Data Persistence and Draft Management Validation) defined within the Project Memory Core (PMC) system. Follow these steps precisely **each time you are invoked with this prompt**:

## Step 1: Generate Task Approach

1. **Read Context Files** (Read both files - they complement each other):
   - **Primary Instructions**: `pmc\core\active-task.md` - Contains detailed T-1.1.3 task specifications, acceptance criteria, and phase-based execution steps
   - **Critical Context**: `system\plans\new-panels\02-new-task-carry-context-09-18-25-0620PM.md` - Provides essential context from T-1.1.2 implementation including RouteGuard dependencies and persistence requirements

2. **Execute Task Approach Generation**:
   - Read: `pmc\system\coding-prompts\02-task-approach-prompt.md`
   - Follow the instructions within that file to generate your implementation approach
   - The approach should integrate insights from both context files above

## Step 2: Integrate Task Approach

1. **Navigate to PMC Directory** (if not already there):
   ```bash
   cd pmc
   ```

2. **Run Integration Command**:
   ```bash
   node bin\aplio-agent-cli.js task-approach
   ```

3. **Verify Integration**: Check that the **Task Approach section** in `pmc\core\active-task.md` contains an "Added:" notation. If missing, stop and request human assistance.

## Step 3: Execute Active Task

**CRITICAL CONTEXT UNDERSTANDING:**
- The `active-task.md` file contains your **primary execution roadmap** (phases, steps, acceptance criteria)
- The `carry-context` file provides **essential T-1.1.2 context** about RouteGuard dependencies and persistence requirements
- These files are **complementary** - use both to understand the full picture, but follow the execution steps in `active-task.md`

**Task Execution:**
1. Execute all phases in `pmc\core\active-task.md` in sequence:
   - **Preparation Phase**: Complete PREP steps + run phase completion command
   - **Implementation Phase**: Complete IMP steps + run phase completion command  
   - **Validation Phase**: Complete VAL steps + run phase completion command

2. **Important Notes for T-1.1.3**:
   - Current task is a **validation task** for existing persistence functionality - focus on validation, not creation
   - Zustand store with persist middleware already exists but needs comprehensive validation  
   - **CRITICAL**: RouteGuard component from T-1.1.2 depends entirely on persistent state - persistence failures break navigation
   - Use validation-first approach proven successful in T-1.1.2
   - All T-1.1.2 components (progress tracking, navigation validation) depend on persistence working correctly

3. **Phase Completion Commands** (run from pmc directory):
   ```bash
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.3 "PREP" "complete"
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.3 "IMP" "complete" 
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.3 "VAL" "complete"
   ```

## Step 4: Unit Testing Checkpoint

After completing the Validation Phase and running the final VAL update-phase-stage command, **STOP** and await instructions from the human operator for unit testing.

Unit testing instructions are in: `pmc\core\active-task-unit-tests-2.md`

---

## Key Operational Guidelines for T-1.1.3

- **Context Files Relationship**: `active-task.md` = what to do, `carry-context.md` = critical T-1.1.2 dependencies that affect T-1.1.3
- **Current Task Nature**: Validation of existing persistence functionality, not creation from scratch  
- **Validation-First Approach**: Proven successful in T-1.1.2 - validate existing implementations against acceptance criteria
- **Critical Dependencies**: RouteGuard navigation security, progress calculation accuracy, all depend on persistence
- **Foundation Systems**: Zustand store with persist middleware exists but needs comprehensive validation against T-1.1.3 criteria
- **Command Location**: All PMC commands run from `pmc` directory
- **Terminal Fix**: Append ` | cat` to bash commands if terminals hang
- **Stay Focused**: Follow the explicit path in `active-task.md` while incorporating critical context from `carry-context.md`

## T-1.1.3 Specific Context

**What Makes T-1.1.3 Critical:**
- T-1.1.2 created RouteGuard component that prevents unauthorized stage access based on `completedSteps` from persistence
- T-1.1.2 fixed progress calculation logic that depends on accurate `completedSteps` persistence  
- If persistence fails, users lose both progress tracking AND navigation capabilities
- Auto-save must work seamlessly without interfering with RouteGuard redirects or progress updates

**Key Validation Priorities:**
1. **Session Restoration**: Users must resume workflows at correct stage with proper navigation permissions
2. **State Consistency**: Persistent state must accurately drive progress display (0%/33%/67%/100%)
3. **Integration Testing**: Persistence must work seamlessly with all T-1.1.2 validated components
4. **Error Handling**: Graceful degradation when persistence fails - don't break navigation or progress

This optimized prompt eliminates confusion by clearly defining the relationship between context files and emphasizing the validation nature of T-1.1.3 while highlighting critical T-1.1.2 dependencies that make persistence essential infrastructure.
