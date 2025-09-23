# AI Implementation Agent Conductor Prompt - T-2.3.4: Animation Timing and Easing Function Documentation

## Mission Statement
You are the implementation agent responsible for executing T-2.3.4: Animation Timing and Easing Function Documentation. This task builds upon the exceptional success of T-2.3.3 (98/100 quality score) and must replicate that excellence while focusing on animation timing patterns and easing functions.

## Critical Context Integration
**MANDATORY READING ORDER**: You must read these files in sequence to understand your complete mission:

1. **Primary Task Instructions**: `pmc/core/active-task.md` - Contains T-2.3.4 specifications, acceptance criteria, and implementation phases
2. **Success Pattern Context**: `system/plans/new-panels/02-new-task-carry-context-06-24-25-1036AM.md` - Contains critical T-2.3.3 success patterns, quality benchmarks, and implementation requirements that MUST be replicated

**Integration Requirement**: These files are complementary - the active task defines WHAT to implement, while the carry-over context defines HOW to achieve T-2.3.3-level excellence (98/100 quality score).

## Execution Protocol

### Step 1: Context Integration and Task Approach Generation
1. **Read both mandatory files** (active-task.md and carry-context file) to understand the complete scope
2. **Navigate to pmc directory** (all PMC commands must run from here)
3. **Read and execute**: `pmc/system/coding-prompts/02-task-approach-prompt.md`
4. **Generate comprehensive task approach** that integrates T-2.3.3 success patterns with T-2.3.4 requirements
5. **Execute integration command**:
   ```bash
   node bin/aplio-agent-cli.js task-approach
   ```
6. **Verify integration**: Check that `pmc/core/active-task.md` Task Approach section shows "Added:" notation

### Step 2: T-2.3.4 Implementation Execution
**Primary Implementation Target**: `aplio-modern-1/design-system/docs/animations/timing/` directory

**Critical Success Requirements** (from T-2.3.3 pattern):
- **100% Legacy Reference Accuracy** (CRITICAL - any inaccuracy fails entire implementation)
- **Documentation Size**: 80KB-120KB total (4-5 files, 13KB-25KB each)
- **Dark Mode Coverage**: 60+ specifications minimum (T-2.3.3 achieved 101)
- **Quality Score Target**: 95%+ implementation readiness (T-2.3.3 achieved 98/100)

**Legacy Reference Sources** (100% accuracy required):
- `aplio-legacy/data/animation.js` lines 1-94 (duration patterns)
- `aplio-legacy/tailwind.config.js` lines 73-93 (easing functions)
- `aplio-modern-1/design-system/tokens/colors.json` lines 185-189 (timing values)

**Implementation Process**:
1. **Execute PREP Phase**: Analyze timing patterns from legacy sources
2. **Execute IMP Phase**: Create timing documentation following T-2.3.3 structure
3. **Execute VAL Phase**: Validate implementation against T-2.3.3 quality standards
4. **Complete all phase updates** using PMC commands as specified in active-task.md

### Step 3: Quality Assurance Integration
**Replication Requirement**: Your implementation must achieve T-2.3.3 level quality:
- Follow the proven 5-file documentation structure pattern
- Integrate comprehensive dark mode coverage (60+ specifications)
- Maintain WCAG 2.1 Level AA accessibility compliance
- Ensure all legacy references are 100% accurate (critical failure point)

**Documentation Files to Create**:
1. `animation-durations.md` - Standard duration documentation
2. `easing-functions.md` - Easing function specifications with visual guides
3. `timing-consistency.md` - Cross-system timing guidelines
4. `selection-guide.md` - Implementation decision guide
5. `implementation-examples.md` - Code examples and integration patterns

### Step 4: Implementation Completion
1. **Complete all phases** through VAL phase completion
2. **Execute final VAL command**: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.4 "VAL" "complete"`
3. **STOP and await human operator instructions** for unit testing phase

## Key Differentiation from T-2.3.3
**Content Focus Shift**:
- **FROM**: Scroll animations, parallax effects, Intersection Observer patterns
- **TO**: Animation durations, easing functions, timing consistency patterns

**Legacy Analysis Shift**:
- **FROM**: FAQWithLeftText.jsx scroll triggers and FadeUpAnimation.jsx performance
- **TO**: animation.js timing patterns and tailwind.config.js easing definitions

**Maintained Elements**:
- Documentation structure excellence (5-file pattern)
- 100% legacy reference accuracy requirement
- Dark mode coverage excellence (60+ specifications)
- WCAG 2.1 accessibility compliance
- Production-ready TypeScript code examples

## Success Metrics
Your implementation will be measured against T-2.3.3 benchmarks:
- **File Structure**: 4-5 documentation files, 80KB-120KB total size
- **Legacy Accuracy**: 100% reference validation (CRITICAL gate)
- **Dark Mode Coverage**: 60+ specifications minimum
- **Quality Score**: 95%+ implementation readiness target
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Production Readiness**: Complete TypeScript integration

## Critical Reminders
1. **Start with both mandatory files** - active task AND carry-over context
2. **Legacy reference accuracy is CRITICAL** - any inaccuracy fails implementation
3. **Follow T-2.3.3 proven patterns** while adapting to timing-specific content
4. **All PMC commands from pmc directory**
5. **Stop after VAL completion** and await human operator for testing phase

**Your mission**: Replicate T-2.3.3's exceptional success (98/100 quality score) while delivering comprehensive animation timing and easing function documentation that meets all production standards.
