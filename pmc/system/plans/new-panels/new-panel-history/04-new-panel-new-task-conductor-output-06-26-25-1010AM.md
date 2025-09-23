# AI Implementation Agent Conductor - T-2.4.6 Typography Documentation

## Mission Overview
Your primary mission is to implement **T-2.4.6: Responsive Typography Documentation** by creating comprehensive documentation for responsive typography scaling and behavior in the Next.js 14 design system. This task builds directly upon the successfully validated T-2.4.5 Touch Interaction documentation pattern.

## Critical Context Integration
You have **two complementary information sources** that must be used together:

1. **`pmc/core/active-task.md`** - Complete T-2.4.6 task specification, acceptance criteria, and implementation phases
2. **`system/plans/new-panels/02-new-task-carry-context-06-26-25-1010AM.md`** - Critical context from T-2.4.5 completion testing that informs T-2.4.6 implementation approach

**Key Understanding**: The carry-context file explains *lessons learned from T-2.4.5* that enhance the active-task specifications. Use them together, not separately.

## Implementation Protocol

### Step 1: Context Integration (CRITICAL FIRST STEP)
**Before any coding work, you MUST understand the complete context:**

1. **Read carry-context first**: `system/plans/new-panels/02-new-task-carry-context-06-26-25-1010AM.md`
   - This explains T-2.4.5's successful 5-file documentation pattern (109KB total)
   - Identifies critical implementation insights for T-2.4.6 success
   - Documents proven approaches and quality standards to replicate

2. **Read active-task second**: `pmc/core/active-task.md`
   - This contains T-2.4.6 specific requirements and acceptance criteria
   - Provides implementation phases and element specifications
   - Contains PMC command sequences for progress tracking

3. **Synthesize understanding**: The carry-context provides the *proven implementation approach*, while active-task provides the *specific T-2.4.6 requirements*

### Step 2: Generate Enhanced Task Approach
1. **Execute task approach generation**:
   ```bash
   # Navigate to pmc directory first
   cd pmc
   
   # Generate task approach integrating both context sources
   node bin/aplio-agent-cli.js task-approach
   ```

2. **Verify task approach integration**:
   - Check that `pmc/core/active-task.md` Task Approach section has "Added:" notation
   - If missing, STOP and request human operator assistance
   - The approach should integrate T-2.4.5 lessons with T-2.4.6 requirements

### Step 3: Implement T-2.4.6 Following Proven Pattern
**Implementation Target**: Create comprehensive responsive typography documentation using the validated T-2.4.5 architecture:

**Required Documentation Structure** (based on T-2.4.5 success):
- `typography-definitions.md` - Core typography patterns and TypeScript interfaces
- `typography-implementation-guidelines.md` - Implementation patterns and examples  
- `typography-constraints-specifications.md` - Technical constraints and performance
- `typography-testing-guide.md` - Testing protocols and validation
- `typography-visual-reference.md` - Visual examples and scaling demonstrations

**Implementation Location**: `aplio-modern-1/design-system/docs/responsive/typography/`

**Quality Standards** (proven by T-2.4.5):
- Target 80-120KB total documentation for comprehensive coverage
- Maintain 100% accuracy to legacy patterns in `aplio-legacy/scss/_typography.scss:16-31`
- Include WCAG 2.1 AA accessibility considerations throughout
- Create TypeScript strict mode compatible code examples
- Establish cross-references to existing T-2.4.2 and T-2.4.5 documentation

### Step 4: Execute Implementation Phases
Follow the standard PMC implementation protocol from `active-task.md`:

1. **PREP Phase**: Analyze legacy typography patterns and research responsive typography techniques
2. **IMP Phase**: Create all 5 documentation files with comprehensive content
3. **VAL Phase**: Validate documentation against legacy patterns and accessibility standards

**Critical Phase Commands**:
```bash
# After completing each phase, run from pmc:
node bin/aplio-agent-cli.js update-phase-stage T-2.4.6 "PREP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-2.4.6 "IMP" "complete"  
node bin/aplio-agent-cli.js update-phase-stage T-2.4.6 "VAL" "complete"
```

### Step 5: Validation and Testing Strategy
**Based on T-2.4.5 comprehensive testing approach**:
- Validate all legacy pattern references for 100% accuracy
- Test typography scaling across different breakpoints
- Verify accessibility compliance with WCAG 2.1 AA standards
- Validate TypeScript code examples compile successfully
- Test cross-reference integration with existing documentation

## Success Criteria Integration

**From active-task.md (T-2.4.6 specific)**:
- Document responsive font sizing strategy
- Document typographic scale implementation across breakpoints  
- Document line length and spacing considerations for different viewports
- Establish typographic hierarchy patterns for responsive layouts

**Enhanced by carry-context (T-2.4.5 proven standards)**:
- Achieve comprehensive documentation scope (80-120KB target)
- Maintain 100% legacy pattern accuracy with exact line references
- Include extensive accessibility considerations and testing protocols
- Create visual reference documentation showing scaling examples
- Establish robust testing and validation procedures

## Critical Dependencies

**Legacy Reference Accuracy**: All references to `aplio-legacy/scss/_typography.scss:16-31` must be validated for exact accuracy
**Documentation Architecture**: Use proven 5-file structure from T-2.4.5 success
**Cross-Reference Integration**: Establish proper links to T-2.4.2 and T-2.4.5 documentation
**Testing Framework**: Adapt T-2.4.5 comprehensive testing approach for typography validation

## Completion Protocol
After completing VAL phase and running the final `update-phase-stage T-2.4.6 "VAL" "complete"` command:
1. **STOP implementation work**
2. **Await human operator instructions** for unit testing phase
3. **Do not proceed** to testing without explicit instruction

## Key Success Factors
1. **Context Integration**: Use both information sources together for complete understanding
2. **Pattern Replication**: Follow T-2.4.5's proven 5-file documentation architecture
3. **Quality Standards**: Meet the comprehensive scope and accuracy demonstrated by T-2.4.5
4. **Legacy Accuracy**: Maintain 100% fidelity to typography patterns in specified legacy files
5. **Accessibility Focus**: Include comprehensive WCAG 2.1 AA considerations throughout

**Remember**: You are implementing T-2.4.6 using the proven success pattern of T-2.4.5. The carry-context file is your blueprint for *how to succeed*, while active-task.md defines *what to achieve*.
