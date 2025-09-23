# AI Coding Conductor Prompt - T-2.2.4 Hero Section Documentation

## Mission Overview
You are tasked with implementing **T-2.2.4: Hero Section Component Visual Documentation** - a critical documentation task that builds upon the successful completion of T-2.2.3 (96.8% legacy fidelity, 89.2% quality score). This task involves creating comprehensive visual documentation for the Hero.jsx component from the legacy system.

## Pre-Execution Context
**Current Status**: Task approach established, ready for Preparation Phase
**Implementation Location**: `aplio-modern-1/design-system/docs/components/sections/hero/`
**Legacy Reference**: `aplio-legacy/components/home-4/Hero.jsx` (40 lines)
**Quality Target**: ≥96% legacy fidelity, ≥89% quality score (based on T-2.2.3 standards)

## Critical Success Factors
- **Hero Component Complexity**: 40-line component with complex background gradient system and SVG shape integration
- **Animation Integration**: FadeUpAnimation wrapper with fadeUpAnimation pattern (opacity: 0→1, y: 100→0, duration: 0.5s)
- **Responsive System**: Complex padding classes (`max-mb:pb-[70px]`, `max-lg:pb-25`, `max-lg:pt-[160px]`) and conditional SVG visibility
- **Typography Hierarchy**: Trusted businesses text, main heading, description paragraph with specific spacing
- **Background System**: HeroLightShapeSVG and HeroDarkShapeSVG with responsive visibility toggles

## Execution Protocol

### Step 1: Initialize Task Approach
1. **Read Context Files**:
   - `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - `system/plans/new-panels/02-new-task-carry-context-06-21-25-0321PM.md` (contains T-2.2.3 success patterns and Hero.jsx analysis)

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
1. **PREP Phase** (4 steps): Legacy analysis, responsive behavior identification, animation patterns, template creation
2. **IMP Phase** (5 steps): Document layout, typography, responsive behavior, animations, visual references  
3. **VAL Phase** (4 steps): Verify documentation against legacy implementation

**Required Phase Commands**:
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "PREP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "IMP" "complete"`
- `node bin/aplio-agent-cli.js update-phase-stage T-2.2.4 "VAL" "complete"`

**Expected Deliverables** (5 documentation files):
1. `layout.md` - Hero section structure and content placement
2. `typography.md` - Heading, subheading, and CTA text styles  
3. `responsive-behavior.md` - Layout changes at different breakpoints
4. `animations.md` - Entrance animations and background effects
5. `visual-reference.md` - Comprehensive visual specifications

### Step 3: Task Completion Protocol
**After VAL Phase Completion**:
- **MANDATORY**: Stop and await human operator instructions for unit testing
- **Do NOT proceed** to unit testing without explicit authorization
- Unit testing instructions are in `pmc/core/active-task-unit-tests-2.md`

## Quality Assurance Reminders
- **Leverage T-2.2.3 Success Patterns**: Use proven 5-file documentation structure with detailed tables, code examples, and visual diagrams
- **Maintain Legacy Fidelity**: Document exact measurements, color specifications, and responsive behavior details
- **Component Coverage**: Ensure 100% coverage of Hero.jsx's critical styling classes and responsive patterns
- **Professional Standards**: Apply comprehensive structure analysis for accurate component documentation

## Error Handling
- **Phase Update Failures**: Use `node bin/aplio-agent-cli.js error "<description>" <severity>`
- **Template/Reference Issues**: Verify file paths and directory structure
- **Quality Standard Concerns**: Reference T-2.2.3 documentation patterns for guidance

## Important: Scope Discipline
**DO NOT DEVIATE** from the instructions in `pmc/core/active-task.md` once Step 2 begins. Your role is to execute that specific task with precision, building upon the established success patterns from T-2.2.3 while maintaining the exceptional quality standards already achieved.

This prompt provides the complete initialization procedure for T-2.2.4 implementation within the PMC system.
