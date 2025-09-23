# T-3.1.4 Button Component Testing and Documentation - AI Implementation Conductor

## Mission Statement
Execute comprehensive testing and documentation implementation for T-3.1.4 Button Component Testing and Documentation, building upon the successful completion of T-3.1.3 Button Icon Support and Extended Functionality.

## Context Integration Protocol

**CRITICAL**: You have TWO complementary information sources that must be used together:

1. **Primary Task Specifications**: `pmc/core/active-task.md` - Contains detailed T-3.1.4 task structure, acceptance criteria, and implementation phases
2. **Implementation Context**: `system/plans/new-panels/02-new-task-carry-context-07-04-25-0158PM.md` - Contains critical context from T-3.1.3 completion and specific implementation guidance

**Integration Rules**:
- The active-task.md provides the WHAT (task requirements, acceptance criteria, phases)
- The carry-over context provides the HOW (implementation approach, existing infrastructure, lessons learned)
- When information appears in both files, the carry-over context provides the operational details while active-task.md provides the acceptance criteria
- All PMC commands must be executed from the pmc directory

## Pre-Implementation Checklist

**BEFORE starting implementation, verify these T-3.1.3 completions:**
- ✅ Development server operational on localhost:3000
- ✅ Test page `/test-t311-button` accessible with 15+ button variations
- ✅ Button component files exist: `index.tsx`, `Button.module.css`, `Button.types.ts`
- ✅ Visual testing infrastructure operational (screenshots captured successfully)
- ✅ Testing framework configured (Jest, React Testing Library, Puppeteer)

## Implementation Sequence

### Step 1: Context Preparation
1. **Read both context files thoroughly**:
   - `pmc/core/active-task.md` - T-3.1.4 specifications
   - `system/plans/new-panels/02-new-task-carry-context-07-04-25-0158PM.md` - Implementation context

2. **Generate Task Approach**:
   - Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - Execute task approach generation immediately
   - Run: `node bin/aplio-agent-cli.js task-approach` (from pmc directory)
   - Verify the Task Approach section in active-task.md has "Added:" notation

### Step 2: PREP Phase Implementation
**Focus**: Set up testing environment and define test cases for T-3.1.4

**Key Actions**:
- Navigate to `aplio-modern-1` directory for implementation
- Set up testing environment (Jest, React Testing Library, Axe, Pa11y)
- Create test directory structure: `test/unit-tests/task-3-1/T-3.1.4/`
- Create accessibility test directory: `test/accessibility/T-3.1.4/`
- Create performance test directory: `test/performance/T-3.1.4/`
- Define comprehensive test cases based on T-3.1.3 implementation

**Critical Context from T-3.1.3**:
- Button component has 319 lines (index.tsx), 330 lines (CSS), 265 lines (types)
- Icon support: `iconLeft`, `iconRight` props with flexible ReactNode support
- Loading states: `loading` prop with spinner and interaction blocking
- Accessibility: ARIA attributes, keyboard navigation implemented
- Performance: React.memo optimization, consistent height management

**PMC Command**: `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "PREP" "complete"`

### Step 3: IMP Phase Implementation
**Focus**: Implement comprehensive test suites and documentation

**Key Actions**:
1. **Unit Tests (T-3.1.4:ELE-1)**:
   - Create comprehensive test suite covering all T-3.1.3 functionality
   - Test icon placement, loading states, accessibility features, performance
   - Target 90% minimum coverage on Button component files
   - Use existing test infrastructure (Jest, React Testing Library)

2. **Accessibility Tests (T-3.1.4:ELE-2)**:
   - Implement WCAG 2.1 AA compliance tests using Axe
   - Test keyboard navigation, screen reader compatibility
   - Validate focus states, ARIA attributes, color contrast
   - Use Pa11y for automated accessibility validation

3. **Component Documentation (T-3.1.4:ELE-3)**:
   - Create `README.md` with comprehensive usage examples
   - Document all props, variants, and use cases
   - Create Storybook stories for interactive documentation
   - Include accessibility guidelines and best practices

**Critical Implementation Notes**:
- Leverage existing test scaffold at `/test-t311-button` with 15+ button variations
- Use fixed Puppeteer API: `new Promise(resolve => setTimeout(resolve, delay))` not `page.waitForTimeout()`
- Reference visual testing results in `test/vision-results/t313-vision-analysis-report.md`
- Follow T-3.1.3 test organization patterns

**PMC Command**: `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "IMP" "complete"`

### Step 4: VAL Phase Implementation
**Focus**: Validate test coverage, accessibility compliance, and documentation quality

**Key Actions**:
- Verify 90% minimum test coverage achieved
- Run accessibility tests with screen readers and keyboard navigation
- Validate documentation accuracy and completeness
- Create Design System Adherence Protocol (DSAP) compliance report
- Execute visual regression tests against legacy design system

**PMC Command**: `node bin/aplio-agent-cli.js update-phase-stage T-3.1.4 "VAL" "complete"`

## Task Completion Protocol

**After completing VAL phase and running the VAL update-phase-stage "complete" command:**
- STOP and await instructions from human operator
- Do NOT proceed to unit testing without explicit instruction
- Unit testing is managed separately as per PMC protocol

## Critical Success Factors

**T-3.1.4 Acceptance Criteria (must be met):**
- ✅ Comprehensive unit tests cover all button functionality
- ✅ Accessibility tests validate WCAG 2.1 AA compliance
- ✅ Documentation provides clear usage examples for all variants
- ✅ Test coverage meets minimum 90% requirement
- ✅ Visual regression tests confirm legacy visual parity
- ✅ Component documentation follows project standards

**Implementation Requirements**:
- Focus on testing and documentation excellence, NOT new feature development
- Leverage proven T-3.1.3 infrastructure and learnings
- Maintain operational development server and test scaffold
- Follow established PMC phase update protocols

**Key Files**:
- Button Component: `aplio-modern-1/components/design-system/atoms/Button/`
- Test Scaffold: `aplio-modern-1/app/test-t311-button/page.tsx`
- Visual Results: `test/vision-results/t313-vision-analysis-report.md`
- Screenshot Script: `test/scripts/capture-t313-screenshots.js`

## Error Handling

**If you encounter any issues:**
1. Use PMC error logging: `node bin/aplio-agent-cli.js error "<description>" <severity>`
2. Reference T-3.1.3 solutions in carry-over context
3. Consult visual testing results for implementation guidance
4. Stop after 5 failed attempts and alert human operator

**Navigation Notes**:
- All PMC commands run from `pmc` directory
- Implementation work occurs in `aplio-modern-1` directory
- New bash shells open in `pmc` by default
- Use `cd ../aplio-modern-1` to navigate to implementation directory

This conductor prompt is specifically optimized for T-3.1.4 implementation, integrating the comprehensive T-3.1.3 completion context with the detailed T-3.1.4 task specifications to ensure seamless, efficient, and successful implementation.
