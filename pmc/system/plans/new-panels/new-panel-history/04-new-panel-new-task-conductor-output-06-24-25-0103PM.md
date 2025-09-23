# AI Implementation Agent Conductor Prompt - T-2.3.5

## Mission Statement
You are tasked with implementing **T-2.3.5: Accessibility and Reduced Motion Documentation** for the Next.js 14 design system animations. This task builds directly upon the successful completion of T-2.3.4 and requires careful integration of accessibility patterns with established timing specifications.

## Critical Context Integration
You have **two complementary information sources** that work together:

1. **`pmc/core/active-task.md`** - Contains the official T-2.3.5 task specifications, acceptance criteria, implementation phases, and PMC command requirements
2. **`system/plans/new-panels/02-new-task-carry-context-06-24-25-0103PM.md`** - Contains critical context from T-2.3.4 completion, including lessons learned, dependencies, and implementation patterns that inform T-2.3.5

**These files are complementary, not conflicting.** The active-task.md provides the "what" and "how", while the carry-context provides the "why" and "building upon what was learned."

## Implementation Protocol

### Step 1: Context Assimilation (REQUIRED)
Before beginning any implementation work:

1. **Read both context files completely**:
   - `pmc/core/active-task.md` (T-2.3.5 specifications)
   - `system/plans/new-panels/02-new-task-carry-context-06-24-25-0103PM.md` (T-2.3.4 context)

2. **Understand the relationship**:
   - T-2.3.4 created comprehensive timing documentation (5 files, 112.2KB)
   - T-2.3.5 must create accessibility documentation that references and builds upon T-2.3.4's timing patterns
   - Both tasks follow the same proven 5-file documentation structure for consistency

3. **Key Context Points for T-2.3.5**:
   - **Legacy Reference**: `aplio-legacy/components/animations/FadeUpAnimation.jsx` lines 6-11 contain existing reduced motion patterns
   - **Timing Foundation**: All accessibility alternatives must reference timing patterns established in T-2.3.4
   - **Dark Mode Integration**: Must include dark mode accessibility considerations from the start (lesson from T-2.3.4)
   - **WCAG 2.1 Level AA**: All documentation must meet accessibility standards

### Step 2: Generate Task Approach
1. **Navigate to pmc directory** (all PMC commands run from here)
2. **Read the task approach prompt**: `pmc/system/coding-prompts/02-task-approach-prompt.md`
3. **Execute the task approach generation** following the prompt instructions
4. **Integrate the approach** using the PMC command:
   ```bash
   node bin/aplio-agent-cli.js task-approach
   ```
5. **Verify integration** by checking that the Task Approach section in `active-task.md` shows an "Added:" notation

### Step 3: Execute T-2.3.5 Implementation
Follow the three-phase implementation process defined in `active-task.md`:

#### Preparation Phase (PREP-1 through PREP-4)
- Analyze legacy reduced motion implementations
- Research WCAG 2.1 Level AA requirements for animations
- Study motion preference detection techniques
- Research accessibility impact assessment methods
- **Complete with**: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.5 "PREP" "complete"`

#### Implementation Phase (IMP-1 through IMP-5)
- Document reduced motion alternatives for each animation type
- Create accessibility guidelines and best practices
- Document motion preference detection techniques
- Create accessibility impact assessment guide
- Create visual reference documentation
- **Complete with**: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.5 "IMP" "complete"`

#### Validation Phase (VAL-1 through VAL-4)
- Verify documentation against accessibility standards
- Review guidelines for completeness
- Test motion preference detection techniques
- Validate impact assessment guide
- **Complete with**: `node bin/aplio-agent-cli.js update-phase-stage T-2.3.5 "VAL" "complete"`

### Step 4: Implementation Quality Standards
Based on T-2.3.4's success patterns, ensure:

- **Documentation Structure**: Follow the proven 5-file pattern established by T-2.3.4
- **Legacy Reference Accuracy**: All references to existing reduced motion patterns must be 100% accurate
- **TypeScript Integration**: All code examples must compile with strict mode
- **Accessibility Compliance**: Meet WCAG 2.1 Level AA standards throughout
- **Dark Mode Integration**: Include dark mode accessibility patterns as core requirement
- **Cross-Reference Integration**: Reference T-2.3.4 timing documentation appropriately

### Step 5: Completion Protocol
After completing the Validation Phase and running the final `update-phase-stage` command:
1. **STOP** and await instructions from the human operator
2. **Do NOT** proceed to unit testing without explicit instruction
3. The human operator will initiate the testing phase separately

## Critical Success Factors

### What Made T-2.3.4 Successful (Apply to T-2.3.5):
- **100% Legacy Reference Accuracy** - Critical for maintaining system consistency
- **Comprehensive Documentation Structure** - 5-file pattern with clear organization
- **TypeScript Strict Mode Compliance** - All examples must compile successfully
- **Accessibility Integration** - WCAG 2.1 Level AA compliance throughout

### T-2.3.5 Specific Requirements:
- **Reduced Motion Focus** - Primary emphasis on accessibility for motion-sensitive users
- **Motion Preference Detection** - Comprehensive coverage of `prefers-reduced-motion` and related techniques
- **Impact Assessment** - Practical methods for evaluating animation accessibility
- **Cross-System Integration** - Seamless integration with T-2.3.4 timing specifications

## Implementation Location
- **Target Directory**: `aplio-modern-1/design-system/docs/animations/accessibility/`
- **Test Directory**: `aplio-modern-1/test/unit-tests/task-2-3/T-2.3.5/`
- **Reference Directory**: `aplio-modern-1/design-system/docs/animations/timing/` (T-2.3.4 output)

## Final Reminders
- **All PMC commands** run from `pmc` directory using `node bin/[command]`
- **Follow phase-by-phase approach** - do not skip preparation or validation steps
- **Maintain context awareness** - T-2.3.5 builds upon T-2.3.4, not replacing it
- **Stop at completion** - await human operator instruction for testing phase

Your mission is to create accessibility documentation that complements T-2.3.4's timing specifications, ensuring all animations in the design system can be made accessible for users with motion sensitivities while maintaining the high quality standards established by the previous task.
