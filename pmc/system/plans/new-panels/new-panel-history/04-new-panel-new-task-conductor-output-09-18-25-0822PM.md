# AI Coding Conductor Prompt - Optimized for T-1.2.1

Your primary mission is to execute T-1.2.1 (Statement of Belonging Implementation Enhancement) defined within the Project Memory Core (PMC) system. Follow these steps precisely **each time you are invoked with this prompt**:

## Step 1: Generate Task Approach

1. **Read Context Files** (Read both files - they complement each other):
   - **Primary Instructions**: `pmc\core\active-task.md` - Contains detailed T-1.2.1 task specifications, acceptance criteria, and phase-based execution steps
   - **Critical Context**: `system\plans\new-panels\02-new-task-carry-context-09-18-25-0822PM.md` - Provides essential context from T-1.1.3 implementation including persistence validation results and existing StepA component analysis

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
- The `carry-context` file provides **essential T-1.1.3 context** about persistence validation and existing StepA component analysis
- These files are **complementary** - use both to understand the full picture, but follow the execution steps in `active-task.md`

**Task Execution:**
1. Execute all phases in `pmc\core\active-task.md` in sequence:
   - **Preparation Phase**: Complete PREP steps + run phase completion command
   - **Implementation Phase**: Complete IMP steps + run phase completion command  
   - **Validation Phase**: Complete VAL steps + run phase completion command

2. **Important Notes for T-1.2.1**:
   - Current task is an **enhancement task** - improve existing StepA component, don't create from scratch
   - **CRITICAL**: Existing StepA component is at `4-categories-wf/src/components/client/StepAClient.tsx` (not the path in active-task.md)
   - Persistence infrastructure from T-1.1.3 is validated and working - leverage it, don't reimplement
   - All T-1.1.3 validation tools remain available for testing T-1.2.1 enhancements

3. **Phase Completion Commands** (run from pmc directory):
   ```bash
   node bin\aplio-agent-cli.js update-phase-stage T-1.2.1 "PREP" "complete"
   node bin\aplio-agent-cli.js update-phase-stage T-1.2.1 "IMP" "complete" 
   node bin\aplio-agent-cli.js update-phase-stage T-1.2.1 "VAL" "complete"
   ```

## Step 4: Unit Testing Checkpoint

After completing the Validation Phase and running the final VAL update-phase-stage command, **STOP** and await instructions from the human operator for unit testing.

Unit testing instructions are in: `pmc\core\active-task-unit-tests-2.md`

---

## Key Operational Guidelines for T-1.2.1

- **Context Files Relationship**: `active-task.md` = what to do, `carry-context.md` = critical T-1.1.3 context that affects T-1.2.1
- **Current Task Nature**: Enhancement of existing functional StepA component, not creation from scratch  
- **Enhancement-First Approach**: Build upon existing `StepAClient.tsx` component rather than replacing it
- **Critical Foundation**: T-1.1.3 persistence validation completed - leverage existing validation infrastructure
- **Validation Tools Available**: Use `/test-persistence` and validation suite from T-1.1.3 to test T-1.2.1 enhancements
- **Command Location**: All PMC commands run from `pmc` directory
- **Terminal Fix**: Append ` | cat` to bash commands if terminals hang
- **Stay Focused**: Follow the explicit path in `active-task.md` while incorporating critical context from `carry-context.md`

## T-1.2.1 Specific Context

**What Makes T-1.2.1 Critical:**
- T-1.1.3 validated that persistence infrastructure is solid and working correctly
- Existing StepA component has functional rating interface but needs UX enhancements
- T-1.2.1 must enhance user experience without breaking existing persistence integration
- All enhancements must work seamlessly with validated auto-save and session restoration

**Key Enhancement Priorities:**
1. **Visual Design Enhancement**: Improve existing 1-5 scale interface with better UX
2. **Dynamic Impact Messaging**: Enhance basic impact preview with sophisticated messaging system
3. **Real-time Feedback**: Add micro-interactions and immediate validation responses
4. **Persistence Integration**: Ensure all enhancements work with validated persistence layer

This optimized prompt eliminates confusion by clearly defining the relationship between context files and emphasizing the enhancement nature of T-1.2.1 while highlighting the solid foundation provided by T-1.1.3 validation work.

## Implementation Success Indicators

- [ ] Both context files read and understood as complementary
- [ ] Task approach successfully integrated with "Added:" notation
- [ ] Existing StepAClient.tsx component analyzed before enhancement
- [ ] Progressive enhancement approach applied (preserve existing functionality)
- [ ] T-1.1.3 persistence validation tools leveraged for T-1.2.1 testing
- [ ] All phase completion commands executed successfully
- [ ] Enhanced UI maintains data persistence and session restoration capabilities
