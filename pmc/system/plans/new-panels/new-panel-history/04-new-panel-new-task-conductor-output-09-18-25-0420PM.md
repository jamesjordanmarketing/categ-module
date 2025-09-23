# AI Coding Conductor Prompt - Optimized

Your primary mission is to execute the current active task defined within the Project Memory Core (PMC) system. Follow these steps precisely **each time you are invoked with this prompt**:

## Step 1: Generate Task Approach

1. **Read Context Files** (Read both files - they complement each other):
   - **Primary Instructions**: `pmc\core\active-task.md` - Contains detailed task specifications, acceptance criteria, and phase-based execution steps
   - **Historical Context**: `system\plans\new-panels\02-new-task-carry-context-09-18-25-0420PM.md` - Provides crucial context from previous testing phase including what's already implemented and what needs validation

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
- The `carry-context` file provides **historical context** about what's already been implemented and tested
- These files are **complementary** - use both to understand the full picture, but follow the execution steps in `active-task.md`

**Task Execution:**
1. Execute all phases in `pmc\core\active-task.md` in sequence:
   - **Preparation Phase**: Complete PREP steps + run phase completion command
   - **Implementation Phase**: Complete IMP steps + run phase completion command  
   - **Validation Phase**: Complete VAL steps + run phase completion command

2. **Important Notes**:
   - Current task (T-1.1.1) is a **validation task** for existing components - focus on validation, not creation
   - Components already exist and are functional - validate against acceptance criteria
   - Use the carry-context file to understand what's already implemented

3. **Phase Completion Commands** (run from pmc directory):
   ```bash
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.1 "PREP" "complete"
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.1 "IMP" "complete" 
   node bin\aplio-agent-cli.js update-phase-stage T-1.1.1 "VAL" "complete"
   ```

## Step 4: Unit Testing Checkpoint

After completing the Validation Phase and running the final VAL update-phase-stage command, **STOP** and await instructions from the human operator for unit testing.

Unit testing instructions are in: `pmc\core\active-task-unit-tests-2.md`

---

## Key Operational Guidelines

- **Context Files Relationship**: `active-task.md` = what to do, `carry-context.md` = what's already done
- **Current Task Nature**: Validation of existing functional components, not creation from scratch  
- **Command Location**: All PMC commands run from `pmc` directory
- **Terminal Fix**: Append ` | cat` to bash commands if terminals hang
- **Stay Focused**: Follow the explicit path in `active-task.md` - alert human operator if you deviate

This optimized prompt eliminates confusion by clearly defining the relationship between context files and emphasizing the validation nature of the current task.
