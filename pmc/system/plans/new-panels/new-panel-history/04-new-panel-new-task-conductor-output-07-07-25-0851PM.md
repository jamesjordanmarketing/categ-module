# AI Coding Conductor Prompt - T-3.2.4 Accordion Testing and Optimization

## 🎯 Mission Overview
You are tasked with **T-3.2.4: Accordion Testing and Optimization** - a comprehensive testing and performance optimization task for accordion components that were successfully implemented in T-3.2.3. This is **NOT a new implementation task** - the accordion components exist and are functional. Your role is to optimize and comprehensively test them.

## 📋 Critical Context Integration
**BEFORE starting any work, you MUST read these two complementary files:**

1. **Primary Task Instructions**: `pmc/core/active-task.md`
   - Contains detailed T-3.2.4 task specifications, acceptance criteria, and implementation phases
   - Defines your testing and optimization requirements (90% code coverage, WCAG 2.1 AA compliance)
   - Provides structured PREP → IMP → VAL workflow with PMC command requirements

2. **Essential Context from T-3.2.3**: `system/plans/new-panels/02-new-task-carry-context-07-07-25-0851PM.md`
   - Documents what was successfully completed in T-3.2.3 (accordion container implementation)
   - Explains existing testing infrastructure and baseline performance metrics
   - Identifies which components exist and where they're located
   - Provides critical context about testing environment and existing artifacts

**These files are complementary, not conflicting.** The active-task.md tells you WHAT to do, while the carry-over context tells you what already EXISTS and what you can BUILD UPON.

## 🚀 Execution Steps

### 1. **Generate Task Approach:**
   ```bash
   # From pmc directory:
   node bin/aplio-agent-cli.js task-approach
   ```
   - Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - Integrate insights from both the active-task.md and carry-over context
   - Generate your approach in `pmc/system/plans/task-approach/current-task-approach.md`

### 2. **Key T-3.2.4 Focus Areas:**
   Based on T-3.2.3 completion and T-3.2.4 requirements:

   **🔍 Testing & Optimization (NOT New Implementation):**
   - **Leverage Existing**: Use accordion components from T-3.2.3 (`components/design-system/molecules/Accordion/`)
   - **Optimize Performance**: Implement memoization, lazy loading, rendering optimizations
   - **Comprehensive Testing**: 90% code coverage with Jest, React Testing Library
   - **Accessibility Testing**: WCAG 2.1 AA compliance with screen readers and keyboard navigation
   - **Dynamic Content Testing**: Variable content height handling and edge cases

   **📊 Available Testing Infrastructure:**
   - Enhanced testing environment from T-3.2.3 (27 screenshots, 14 LLM analysis reports)
   - Test directories: `test/unit-tests/task-3-2/T-3.2.4/`
   - Performance baseline: <100ms render, 300ms animations, <2MB memory

### 3. **Execute T-3.2.4 Following Active Task Instructions:**
   - Follow the structured PREP → IMP → VAL workflow in `pmc/core/active-task.md`
   - Execute all PMC phase update commands as specified
   - Focus on testing and optimization, not new component creation
   - Use existing T-3.2.3 components as the foundation for your testing work

### 4. **Important Reminders:**
   - **Don't create new accordion components** - they exist from T-3.2.3
   - **Don't recreate testing infrastructure** - leverage existing setup
   - **Do optimize existing code** - performance improvements and comprehensive testing
   - **Do follow DSAP compliance** - create adherence report as specified

## ⚠️ Critical Success Factors

1. **Read Both Context Files**: Understanding T-3.2.3 completion is essential for T-3.2.4 success
2. **Focus on Testing/Optimization**: This is not an implementation task - it's a testing and optimization task
3. **Leverage Existing Work**: Build upon the 96% DSAP compliant accordion implementation from T-3.2.3
4. **Follow PMC Commands**: Execute all phase updates and commands as specified in active-task.md
5. **Achieve 90% Test Coverage**: Comprehensive testing is the primary deliverable

## 📁 Key Files to Reference
- **Active Task**: `pmc/core/active-task.md` (T-3.2.4 specifications)
- **Carry-Over Context**: `system/plans/new-panels/02-new-task-carry-context-07-07-25-0851PM.md` (T-3.2.3 results)
- **Existing Components**: `components/design-system/molecules/Accordion/` (from T-3.2.3)
- **Testing Infrastructure**: `test/unit-tests/task-3-2/T-3.2.4/` (your target directory)
- **Performance Baseline**: `test/validation/T-3.2.3-final-validation-report.md` (reference metrics)

Your success depends on understanding what was built in T-3.2.3 and optimizing/testing it thoroughly in T-3.2.4. The accordion components are ready - your job is to make them production-perfect through comprehensive testing and optimization.
