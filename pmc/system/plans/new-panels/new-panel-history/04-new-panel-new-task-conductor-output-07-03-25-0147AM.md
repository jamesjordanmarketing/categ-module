# AI Coding Conductor Prompt - T-3.1.2 Button Base Implementation and Styling

## Mission Statement
Your primary mission is to implement **T-3.1.2: Button Base Implementation and Styling** - the core styling implementation for the Button component that visually matches the legacy design system exactly. This task builds directly upon the T-3.1.1 foundation (Button Component Setup and Type Definitions) that has been completed with full visual testing validation.

## Critical Context Integration
You have access to **two complementary and essential files** that work together:

### 1. Primary Task Instructions
**File**: `pmc\core\active-task.md`
- **Purpose**: Complete task specification, acceptance criteria, and implementation phases for T-3.1.2
- **Contains**: DSAP requirements, component elements, phase instructions, validation criteria
- **Usage**: This is your primary implementation guide with step-by-step instructions

### 2. Essential Implementation Context  
**File**: `system\plans\new-panels\02-new-task-carry-context-07-03-25-0147AM.md`
- **Purpose**: Critical context from T-3.1.1 completion and T-3.1.2 preparation requirements
- **Contains**: Visual testing infrastructure, CSS variable integration details, legacy styling requirements
- **Usage**: Essential background context that informs HOW to implement T-3.1.2 successfully

**IMPORTANT**: These files are complementary - read BOTH before beginning implementation. The carry-context file provides crucial implementation context that the active-task file references but doesn't fully detail.

## Implementation Protocol

### Step 1: Context Understanding (MANDATORY FIRST STEP)
```bash
# Navigate to pmc directory
cd pmc
```

**Read in this specific order:**
1. **First**: Read `system\plans\new-panels\02-new-task-carry-context-07-03-25-0147AM.md` completely
   - Focus on "Active Development Focus" section for T-3.1.2 context
   - Note visual testing infrastructure and CSS variable integration requirements
   - Understand T-3.1.1 completion context and how it affects T-3.1.2

2. **Second**: Read `pmc\core\active-task.md` completely  
   - Focus on T-3.1.2 acceptance criteria and implementation phases
   - Note DSAP compliance requirements (30px padding, 30px border-radius)
   - Understand the 4 component elements (ELE-1 through ELE-4)

### Step 2: Generate Task Approach
Execute these steps **in pmc directory**:

1. Read `pmc\system\coding-prompts\02-task-approach-prompt.md`
2. Execute the task approach generation instructions
3. Run the integration command:
   ```bash
   node bin\aplio-agent-cli.js task-approach
   ```
4. **Verify completion**: Check that `pmc\core\active-task.md` has an "Added:" notation in the Task Approach section

### Step 3: Execute T-3.1.2 Implementation 

**Critical Implementation Requirements for T-3.1.2:**

#### A. DSAP Compliance (MANDATORY)
- Follow Design System Adherence Protocol completely
- Implement exact DSAP specifications: 30px padding, 30px border-radius
- Search design system documentation as specified in active-task.md

#### B. CSS Variable Integration (CRITICAL)
- **MUST use existing `--aplio-*` CSS variables** from T-2.5.6 foundation
- **NO JavaScript theme props** - all theming via CSS cascade only
- Reference CSS variables documented in carry-context file

#### C. Legacy Visual Fidelity (ESSENTIAL)
- Extract exact styling from `aplio-legacy/scss/_button.scss` lines 2-13
- Match all button variants exactly: primary, secondary, tertiary, outline, navbar
- Implement all size variants: small, medium, large
- Implement all states: hover, focus, active, disabled

#### D. Visual Testing Integration (REQUIRED)
- Use existing visual testing infrastructure from T-3.1.1
- Leverage test scaffold page at `/test-t311-button` for validation
- Apply visual testing workflow documented in carry-context file

**Implementation Phases:**
1. **PREP Phase**: Documentation discovery, legacy analysis, token extraction
2. **IMP Phase**: Core styling implementation using CSS variables  
3. **VAL Phase**: Visual comparison, DSAP compliance validation, testing

### Step 4: Phase Completion Protocol
For each phase completion, run from **pmc directory**:
```bash
node bin\aplio-agent-cli.js update-phase-stage T-3.1.2 "[PHASE]" "complete"
```

**CRITICAL**: After completing VAL phase and running the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator for unit testing.

## Key Success Factors for T-3.1.2

1. **Visual Consistency**: Button styling must match legacy implementation exactly
2. **CSS Integration**: Must use existing CSS variable system, not create new variables  
3. **DSAP Compliance**: Exact adherence to design system standards required
4. **Responsive Behavior**: Consistent across all 7 breakpoints (xs:475px through 2xl:1536px)
5. **Theme Compatibility**: Work seamlessly with CSS-based theme switching

## Critical Files for T-3.1.2 (from carry-context)
- `aplio-modern-1/components/design-system/atoms/Button/index.tsx` (main implementation)
- `aplio-legacy/scss/_button.scss` (legacy styling reference)
- `aplio-modern-1/styles/design-tokens/variables.css` (CSS variables)
- `aplio-modern-1/app/test-t311-button/page.tsx` (visual testing scaffold)

## Error Prevention
- **Always run PMC commands from pmc directory**
- **Read both context files before beginning any implementation**
- **Never skip DSAP documentation discovery phase**
- **Validate CSS variable usage before implementing styling**
- **Test visual consistency throughout implementation**

## Unit Testing
Unit testing instructions are in `pmc\core\active-task-unit-tests-2.md`. Begin unit testing **only after** completing VAL phase and receiving human operator instructions.

---

**START HERE**: Begin with Step 1 (Context Understanding) by reading both complementary files, then proceed through the implementation protocol sequentially. Success depends on understanding how T-3.1.1 completion enables T-3.1.2 implementation.
