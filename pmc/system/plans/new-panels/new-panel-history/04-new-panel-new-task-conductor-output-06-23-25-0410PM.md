# AI Implementation Agent Conductor Prompt - T-2.3.1

## Mission Statement
Your primary mission is to implement **T-2.3.1: Entry and Exit Animation Pattern Documentation** following the successful approach established by T-2.2.6 Component Relationship Documentation testing. You will create comprehensive animation documentation rather than functional components, building on the architecture foundation to enable AI agents to implement sophisticated animation patterns.

## Critical Context Integration
The previous T-2.2.6 task achieved **95/100 implementation-readiness score** by creating architecture documentation files. T-2.3.1 continues this pattern by focusing on **animation pattern documentation** that provides implementation-ready specifications for AI agents building animated components.

## Step-by-Step Execution Protocol

### Step 1: Context Integration and Task Approach Generation
1. **Read Context Files in Order:**
   - `system/plans/new-panels/02-new-task-carry-context-06-23-25-0410PM.md` - Critical context from T-2.2.6 completion
   - `pmc/system/coding-prompts/02-task-approach-prompt.md` - Task approach generation instructions
   - `pmc/core/active-task.md` - T-2.3.1 implementation specifications

2. **Generate Task Approach:**
   - Execute the instructions from `02-task-approach-prompt.md` immediately
   - This will create your implementation approach in `pmc/system/plans/task-approach/current-task-approach.md`
   - Focus on animation documentation following T-2.2.6's successful documentation pattern

3. **Integrate Task Approach:**
   - Navigate to `pmc` directory (always starts from here)
   - Execute: `node bin/aplio-agent-cli.js task-approach`
   - Verify the Task Approach section in `active-task.md` shows an "Added:" notation
   - If no "Added:" notation appears, the command failed - seek human assistance

### Step 2: Execute T-2.3.1 Animation Documentation Implementation
**Primary Focus:** Create comprehensive animation documentation in `aplio-modern-1/design-system/docs/animations/entry-exit/` directory.

**Implementation Approach:**
- Follow the **documentation pattern** established by T-2.2.6 (not functional component development)
- Create 4-5 comprehensive documentation files (9KB-15KB each) with proper markdown structure
- Include precise timing, duration, and easing function specifications
- Provide implementation-ready code examples for AI agents
- Ensure comprehensive dark mode coverage for all animation patterns

**Key Legacy References (verified accurate in T-2.2.6 testing):**
- `aplio-legacy/data/animation.js` lines 1-10 (entry animations)
- `aplio-legacy/data/animation.js` lines 11-30 (exit animations)  
- `aplio-legacy/data/animation.js` lines 11-94 (sequencing patterns)
- `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 (fade implementation)

**Execute All Phases:**
1. **PREP Phase**: Analyze legacy animation patterns from specified line ranges
2. **IMP Phase**: Create comprehensive animation documentation files
3. **VAL Phase**: Validate documentation against legacy implementations

**Phase Completion Commands:**
- After PREP: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.1 "PREP" "complete"`
- After IMP: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.1 "IMP" "complete"`  
- After VAL: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.1 "VAL" "complete"`

### Step 3: Task Completion and Handoff
After completing VAL phase and running the final update-phase-stage command:
- **STOP and await instructions** from the human operator for testing handoff
- Do not proceed to unit testing without explicit instruction
- Testing will follow the same documentation validation approach established in T-2.2.6

## Success Criteria Validation
Your implementation succeeds when you achieve:

**Documentation Quality Gates:**
- All animation documentation files have proper markdown structure
- All legacy animation references cite correct file paths and line numbers
- Animation patterns include precise timing, duration, and easing specifications
- Documentation provides implementation-ready specifications for AI agents
- Similar comprehensiveness to T-2.2.6's successful 95/100 score

**Animation Pattern Coverage:**
- Entry animations for component mounting documented with timing and sequence
- Exit animations for component unmounting and page transitions documented
- Fade animation patterns documented with parameters and variations  
- Animation sequencing and staggering patterns documented for coordinated animations

## Critical Implementation Guidelines

**DO:**
- Create comprehensive **documentation files** (not functional components)
- Follow T-2.2.6's successful documentation structure and approach
- Include precise animation specifications with timing values
- Provide implementation-ready code examples for AI agents
- Ensure accurate legacy code references with correct line numbers
- Include comprehensive dark mode coverage for all patterns

**DO NOT:**
- Create interactive animation components (this is documentation task)
- Deviate from the documentation approach established by T-2.2.6
- Skip any phase completion commands or validation steps
- Proceed to testing without human operator instruction

## File Structure Reference
**Implementation Location:** `aplio-modern-1/design-system/docs/animations/entry-exit/`
**Legacy References:** `aplio-legacy/data/animation.js` and `aplio-legacy/components/animations/FadeUpAnimation.jsx`
**Task Definition:** `pmc/core/active-task.md`
**Context:** `system/plans/new-panels/02-new-task-carry-context-06-23-25-0410PM.md`

## Testing Integration Note
Unit testing will follow the documentation validation approach proven successful in T-2.2.6, focusing on:
- Documentation quality and accuracy validation
- Legacy reference verification  
- Implementation-readiness assessment
- Comprehensive pattern coverage confirmation

**Operational Notes** 
- Execute `pmc/core/active-task.md` diligently following all phases until VAL completion, then await testing instructions from human operator.
- New bash shells ALWAYS open in pmc by default. Navigate accordingly when you start a new shell.