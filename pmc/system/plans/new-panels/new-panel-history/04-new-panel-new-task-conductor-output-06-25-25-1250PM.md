# AI Coding Conductor Prompt - T-2.4.3 Component-Specific Responsive Behavior Documentation

## Mission Overview

You are tasked with implementing **T-2.4.3: Component-Specific Responsive Behavior Documentation**, building on the successful T-2.4.2 production certification. This task requires creating comprehensive documentation for component-specific responsive behaviors using the proven 5-file documentation pattern.

**Critical Context**: T-2.4.2 achieved production certification through comprehensive validation testing. You must replicate the exact same successful pattern for T-2.4.3.

## Primary Instructions

Follow these steps precisely **upon invocation**:

### Step 1: Context Understanding (CRITICAL)

**You MUST read these files in this exact order:**

1. **Primary Task Instructions**: `pmc\core\active-task.md`
   - Contains T-2.4.3 specifications, acceptance criteria, and implementation phases
   - This is your primary implementation guide

2. **Critical Carryover Context**: `system\plans\new-panels\02-new-task-carry-context-06-25-25-1250PM.md`
   - Contains proven success patterns from T-2.4.2 production certification
   - Documents specific adaptations needed for T-2.4.3 component documentation
   - Provides legacy component analysis requirements and testing methodology

**These files are COMPLEMENTARY**: The active task provides the framework, while the carryover context provides the proven implementation approach and critical adaptations based on T-2.4.2 success.

### Step 2: Generate Task Approach

1. **Read Implementation Guidance**: `pmc\system\coding-prompts\02-task-approach-prompt.md`
2. **Execute Task Approach Generation**: Follow the instructions to create your implementation approach
3. **Navigate to pmc directory** (if not already there)
4. **Integrate Approach**: Execute exactly: `node bin\aplio-agent-cli.js task-approach`
5. **Verify Integration**: Confirm the Task Approach section in `active-task.md` shows "Added:" notation

### Step 3: Execute T-2.4.3 Implementation

**Implementation Location**: `aplio-modern-1\design-system\docs\responsive\components\`

**Follow the Proven Success Pattern from T-2.4.2**:

#### A. Legacy Component Analysis (PREP Phase)
- Analyze `aplio-legacy/components/home-4/Hero.jsx` lines 6-7 (hero responsive behavior)
- Analyze `aplio-legacy/components/home-4/Feature.jsx` line 38 (feature responsive behavior)
- Analyze `aplio-legacy/components/home-4/Feature.jsx` lines 42-44 (card responsive behavior)
- Analyze `aplio-legacy/components/shared/SwiperSlider.jsx` lines 19-30 (slider responsive behavior)

#### B. Create 5-File Documentation Structure (IMP Phase)
Create exactly these files (replicating T-2.4.2's successful pattern):
1. `component-definitions.md` - Core component responsive patterns
2. `component-implementation-guidelines.md` - Component usage and responsive behaviors
3. `component-constraints-specifications.md` - Technical component specifications
4. `component-testing-guide.md` - Component validation approaches
5. `component-visual-reference.md` - Component examples and demonstrations

#### C. Maintain Integration Requirements
- **Cross-references to T-2.4.1**: Link to `../breakpoints/breakpoint-definitions.md`
- **Cross-references to T-2.4.2**: Link to `../layouts/layout-implementation-guidelines.md`
- **Mobile-first methodology**: Follow established responsive approach
- **TypeScript compliance**: All code examples must compile with strict mode

#### D. Achieve 100% Legacy Accuracy (VAL Phase)
- Verify documented component patterns match legacy implementations exactly
- Validate all cross-references function correctly
- Ensure all 4 acceptance criteria are documented with examples

### Step 4: Follow PMC Phase Commands

Execute PMC commands from pmc directory:
- After PREP: `node bin\aplio-agent-cli.js update-phase-stage T-2.4.3 "PREP" "complete"`
- After IMP: `node bin\aplio-agent-cli.js update-phase-stage T-2.4.3 "IMP" "complete"`
- After VAL: `node bin\aplio-agent-cli.js update-phase-stage T-2.4.3 "VAL" "complete"`

**STOP after VAL completion and await unit testing instructions.**

## Key Success Factors for T-2.4.3

### What Makes This Task Different from T-2.4.2
- **Component-level focus**: Document individual component responsive behaviors, not layout patterns
- **Additional cross-references**: Reference both T-2.4.1 breakpoints AND T-2.4.2 layouts
- **Component-specific legacy analysis**: Focus on Hero, Feature, Card, and Slider components

### What Remains the Same (Proven Success Pattern)
- **5-file documentation structure**: Exact replication of T-2.4.2's successful pattern
- **Legacy accuracy requirement**: 100% match with legacy component implementations
- **Cross-reference integration**: Functional links between documentation systems
- **Mobile-first methodology**: Consistent responsive design approach
- **Production certification standards**: Same quality and validation requirements

### Critical Success Requirements
1. **File Structure**: Create exactly 5 files totaling ~85KB (matching T-2.4.2 success)
2. **Legacy Accuracy**: 100% match between documented patterns and actual component code
3. **Cross-Reference Integration**: Functional links to both T-2.4.1 and T-2.4.2 systems
4. **Acceptance Criteria Coverage**: All 4 criteria documented with examples
5. **Component-Specific Focus**: Document component behaviors, not layout patterns

## Terminal Command Requirements

- Append ` | cat` to all bash commands to prevent hanging
- Navigate to pmc for all PMC commands
- Use exact command syntax specified in active-task.md

## Documentation Quality Standards

Follow T-2.4.2's proven success criteria:
- **Comprehensive content**: Document all component responsive behaviors
- **Accurate references**: Maintain exact line number accuracy for legacy components
- **Functional integration**: Ensure all cross-references work correctly
- **Production readiness**: Meet enterprise deployment standards

**Your success depends on replicating T-2.4.2's proven success pattern while adapting it for component-specific documentation.**
