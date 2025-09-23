# AI Coding Conductor Prompt - T-2.2.5 Accordion and FAQ Documentation

## Mission Overview
You are tasked with implementing **T-2.2.5: Accordion and FAQ Component Visual Documentation** - a critical interactive component documentation task that continues the systematic documentation effort for the Aplio Design System modernization project. This task involves creating comprehensive visual documentation for accordion and FAQ components with complex interaction patterns, accessibility requirements, and animation systems.

## Pre-Execution Context
**Current Status**: Task initialized, ready for Preparation Phase
**Implementation Location**: `aplio-modern-1/design-system/docs/components/interactive/accordion/`
**Legacy References**: 
- `aplio-legacy/components/shared/FaqItem.jsx` (49 lines) - Primary accordion component
- `aplio-legacy/components/home-4/CustomFAQ.jsx` (36 lines) - FAQ section layout
**Quality Target**: ≥90% code coverage, maintain standards from previous documentation tasks

## Critical Success Factors
- **Interactive Component Complexity**: FaqItem.jsx (49 lines) with sophisticated useRef-based height animation system
- **State Management**: Toggle-based activeIndex system with conditional rendering (prevIndex === index ? null : index)
- **Animation System**: Dynamic height transitions using contentHeight.current.scrollHeight with overflow management
- **Visual Design**: Rounded medium backgrounds, dashed border styling, comprehensive padding structure (p-2.5, px-5, py-3)
- **Icon System**: Conditional SVG rendering for open/closed states with stroke-based styling and accessibility
- **Typography Hierarchy**: Question text (text-xl font-semibold) and answer text (text-paragraph-light)
- **Dark Mode Support**: Comprehensive theme implementation (dark:bg-dark-200, dark:border-borderColor-dark)
- **Layout Structure**: Container max-width constraints (max-w-[830px]) with advanced spacing ([&>*:not(:last-child)]:mb-5)
- **Accessibility Requirements**: Button elements, semantic structure, keyboard navigation support

## Execution Protocol

### Step 1: Initialize Task Approach
1. **Read Context Files**:
   - `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - `system/plans/new-panels/02-new-task-carry-context-06-21-25-0328PM.md` (contains detailed FaqItem.jsx and CustomFAQ.jsx analysis)

2. **Execute Task Approach Generation**:
   - Follow instructions in `02-task-approach-prompt.md` immediately
   - Generate implementation approach in `pmc/system/plans/task-approach/current-task-approach.md`

3. **Integrate Task Approach**:
   - Ensure you are in `pmc` directory
   - Execute: `node bin/aplio-agent-cli.js task-approach`
   - **Verification**: Check that `pmc/core/active-task.md` Task Approach section shows "Added:" notation
   - **If no "Added:" notation**: STOP and request human operator assistance

### Step 2: Execute Active Task Implementation
**Primary Directive**: Execute `pmc/core/active-task.md` completely through all phases:

**Phase Sequence**:
1. **PREP Phase** (4 steps): Legacy component analysis, interaction pattern study, accessibility identification, template creation
2. **IMP Phase** (5 steps): Document component design, layout structure, animations, accessibility, visual references
3. **VAL Phase** (4 steps): Verify documentation against legacy implementation

**Required Phase Commands**:
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "PREP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "IMP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.5 "VAL" "complete"`

**Expected Deliverables** (Documentation files in `interactive/accordion/`):
1. **Component Design Documentation** - Accordion spacing, visual states, and design specifications
2. **Layout Structure Documentation** - FAQ section layout and typography systems  
3. **Interaction Documentation** - Expand/collapse animations, timing, and transitions
4. **Accessibility Documentation** - Keyboard navigation patterns and ARIA attribute requirements
5. **Visual Reference Documentation** - Comprehensive accordion state specifications

### Step 3: Task Completion Protocol
**After VAL Phase Completion**:
- **MANDATORY**: Stop and await human operator instructions for unit testing
- **Do NOT proceed** to unit testing without explicit authorization
- Unit testing instructions are in `pmc/core/active-task-unit-tests-2.md`

## Component-Specific Documentation Requirements

### FaqItem.jsx Key Features to Document:
- **Height Animation System**: useRef-based dynamic height calculation with scrollHeight
- **State Transitions**: Open/closed state management with conditional styling
- **Visual Elements**: Rounded medium styling, dashed borders, padding hierarchy
- **Icon Rendering**: SVG icons with conditional plus/minus display and stroke styling
- **Typography Structure**: Question (text-xl font-semibold) and answer (text-paragraph-light) hierarchy
- **Dark Mode Implementation**: Complete theme variant documentation

### CustomFAQ.jsx Layout Patterns to Document:
- **Container Structure**: Max-width constraints (830px) and responsive behavior
- **Spacing System**: Advanced CSS selector spacing ([&>*:not(:last-child)]:mb-5)
- **State Management**: ActiveIndex toggle system with array slicing (slice(0, 3))
- **Component Integration**: FaqItem integration patterns and data flow

## Quality Assurance Reminders
- **Leverage Previous Success**: Apply proven documentation methodology from T-2.2.3 and T-2.2.4
- **Interactive Focus**: Emphasize state transitions, animation timing, and user interaction patterns
- **Accessibility Priority**: Ensure comprehensive keyboard navigation and ARIA documentation
- **Animation Precision**: Document exact timing, easing functions, and height calculation methods
- **Component Coverage**: Ensure complete coverage of both FaqItem.jsx and CustomFAQ.jsx patterns

## Error Handling
- **Phase Update Failures**: Use `node bin/aplio-agent-cli.js error "<description>" <severity>`
- **Component Analysis Issues**: Reference carry context file for detailed component breakdowns
- **Animation Documentation Challenges**: Focus on useRef patterns and dynamic style application

## Important: Scope Discipline
**DO NOT DEVIATE** from the instructions in `pmc/core/active-task.md` once Step 2 begins. Your role is to execute the accordion and FAQ documentation task with precision, focusing on the interactive nature of these components while maintaining the systematic documentation approach established by previous tasks.

This prompt provides the complete initialization procedure for T-2.2.5 implementation within the PMC system, specifically optimized for interactive component documentation requirements.
