# AI Implementation Conductor Prompt for T-2.4.5: Touch Interaction and Accessibility Documentation

## Mission Statement
Your primary mission is to implement **T-2.4.5: Touch Interaction and Accessibility Documentation** using the proven 5-file documentation pattern established by T-2.4.4's production-certified success. This task builds directly upon T-2.4.4's validated documentation approach while focusing on touch-specific interactions and accessibility requirements.

## Critical Success Context
**T-2.4.4 Pattern Proven**: The previous task established a production-certified 5-file documentation pattern (~51KB total) that you **MUST replicate exactly** for T-2.4.5. This pattern achieved 100% legacy accuracy and comprehensive WCAG 2.1 AA compliance.

## Implementation Protocol

### Step 1: Context Integration (MANDATORY)
Read **BOTH** files as complementary guidance - they work together, not in conflict:

1. **Primary Task File**: `pmc/core/active-task.md`
   - Contains T-2.4.5 task requirements, acceptance criteria, and implementation phases
   - Defines the 4 core elements: touch interactions, touch targets, hover alternatives, accessibility

2. **Critical Context File**: `system/plans/new-panels/02-new-task-carry-context-06-25-25-1108PM.md`
   - Contains T-2.4.4 success pattern and implementation requirements
   - Provides the exact 5-file structure template you must follow
   - Details legacy accuracy requirements and validation standards

**Integration Approach**: The active-task.md provides the WHAT (requirements), while the context file provides the HOW (proven implementation pattern).

### Step 2: Generate Task Approach
1. Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
2. Execute the task approach generation using the established PMC workflow
3. Navigate to pmc directory if not already there
4. Run: `node bin/aplio-agent-cli.js task-approach`
5. Verify the Task Approach section is updated with "Added:" notation

### Step 3: Implement T-2.4.5 Using Proven Pattern
**Critical Requirements**:
- **5-File Structure**: Create exactly 5 files following T-2.4.4's pattern:
  - `touch-definitions.md` (~14-16KB, 500+ lines)
  - `touch-implementation-guidelines.md` (~19-20KB, 700+ lines)
  - `touch-constraints-specifications.md` (~12KB, 540+ lines)
  - `touch-testing-guide.md` (~1.3-4KB, 50+ lines)
  - `touch-visual-reference.md` (~5-8KB, 120+ lines)

- **Implementation Location**: `aplio-modern-1/design-system/docs/responsive/touch/`

- **100% Legacy Accuracy**: Reference these legacy files with exact accuracy:
  - `aplio-legacy/components/shared/SwiperSlider.jsx` (lines 4-5)
  - `aplio-legacy/components/navbar/PrimaryNavbar.jsx` (lines 110-122)
  - `aplio-legacy/scss/_common.scss` (lines 26-38)
  - `aplio-legacy/components/navbar/PrimaryNavbar.jsx` (lines 47-112)

- **WCAG 2.1 AA Compliance**: Comprehensive accessibility documentation including:
  - 44px minimum touch targets
  - Touch gesture alternatives
  - Screen reader compatibility
  - Focus management for touch interfaces

- **Cross-Reference Integration**: Functional links to T-2.4.1, T-2.4.2, T-2.4.3, T-2.4.4

### Step 4: Phase Execution
Follow the standard PMC phase structure in active-task.md:
- **PREP Phase**: Legacy analysis and requirements research
- **IMP Phase**: Documentation creation using the 5-file pattern
- **VAL Phase**: Validation against T-2.4.4 standards

Execute all phase updates using PMC commands:
```bash
node bin/aplio-agent-cli.js update-phase-stage T-2.4.5 "PREP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-2.4.5 "IMP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-2.4.5 "VAL" "complete"
```

### Step 5: Quality Assurance
Your implementation will be validated against the same 5-phase validation protocol that certified T-2.4.4 production-ready:
1. Environment Setup
2. Content Validation
3. Legacy Accuracy Validation
4. Code Compilation Testing
5. Standards Compliance Assessment

## Success Criteria
- All 5 documentation files created with specified size targets
- 100% accuracy to legacy touch interaction patterns
- Comprehensive WCAG 2.1 AA accessibility compliance
- Functional cross-reference integration
- TypeScript strict mode compilation for all code examples
- Production-ready documentation quality

## Critical Reminders
1. **Follow the Context**: The carry-over context provides your implementation blueprint - use it as your primary guide
2. **Replicate T-2.4.4 Success**: Don't reinvent - follow the proven pattern exactly
3. **Touch-Specific Focus**: While using T-2.4.4's structure, ensure all content addresses touch interactions specifically
4. **Legacy Accuracy**: Extract exact patterns from specified legacy code references
5. **WCAG Compliance**: Touch accessibility is more complex than navigation - ensure comprehensive coverage

## Completion Protocol
After completing VAL phase and running the final update-phase-stage command, **STOP** and await human operator instructions for unit testing phase.

Your implementation will then undergo the same comprehensive validation testing that certified T-2.4.4 production-ready, ensuring T-2.4.5 meets identical quality standards.
