# AI Implementation Agent Instructions for T-2.5.3: Design Token Mapping Implementation

## Mission Overview
You will implement **T-2.5.3: Design Token Mapping Implementation** - a semantic token mapping system that builds upon the successfully completed T-2.5.2 Theme Provider and validated T-2.5.1 token system. This task completes the design token infrastructure by providing semantic mappings for component-level token usage.

## Critical Context Integration
**IMPORTANT:** This task has two complementary information sources that you MUST read together:

1. **`pmc\core\active-task.md`** - Contains the complete T-2.5.3 task specification, acceptance criteria, and implementation phases
2. **`system\plans\new-panels\02-new-task-carry-context-06-28-25-0118PM.md`** - Contains critical context from T-2.5.2 completion that directly impacts how you implement T-2.5.3

**These files are complementary, not conflicting.** The active task file provides the "what" and the carry-over context provides the "how" based on what was learned from implementing T-2.5.2.

## Pre-Implementation Requirements

### Step 1: Read Context Files
Execute in this exact order:
1. First, read `system\plans\new-panels\02-new-task-carry-context-06-28-25-0118PM.md` to understand the foundation you're building upon
2. Then, read `pmc\core\active-task.md` to understand the specific T-2.5.3 requirements
3. Note how the carry-over context provides critical integration details that modify the standard task approach

## Key Integration Points from T-2.5.2
**Critical Success Factors** (from carry-over context):

### Theme Provider Integration
- Your semantic token mappings MUST work with the existing `useThemeTokens` hook interface: `{ theme, color, typography, spacing, resolve }`
- Token mappings must respond to theme changes automatically through the T-2.5.2 theme context
- Do NOT implement separate theme detection - use the established React Context

### TypeScript Compliance
- Maintain the TypeScript strict mode compliance standard established in T-2.5.2
- Integrate with existing TokenPath and theme interfaces
- Follow the comprehensive error handling patterns from T-2.5.2

### Implementation Location
- Create files in `aplio-modern-1/styles/themes/` directory
- Reference the theme provider at `components/providers/theme-provider.tsx` for integration patterns
- Use the 69 validated token paths from `lib/design-system/tokens/`

## Task Execution Protocol

### Phase Execution
Follow the three-phase structure in `active-task.md`:
1. **Preparation Phase**: Complete DSAP compliance (design system adherence protocol)
2. **Implementation Phase**: Code the 4 elements (ELE-1 through ELE-4) following carry-over context guidance
3. **Validation Phase**: Test integration with T-2.5.2 theme provider system

### Phase Updates
Execute these commands from `pmc` directory:
- After PREP: `node bin\aplio-agent-cli.js update-phase-stage T-2.5.3 "PREP" "complete"`
- After IMP: `node bin\aplio-agent-cli.js update-phase-stage T-2.5.3 "IMP" "complete"`

### Success Criteria
You must achieve all acceptance criteria from `active-task.md`:
- Create semantic token mapping system
- Implement token aliasing mechanism  
- Build component-specific token mappings
- Establish token value transformation utilities

**Plus integration requirements from carry-over context:**
- Semantic mappings work with T-2.5.2 theme switching
- CSS custom properties update automatically with theme changes
- Component-specific organization following T-2.5.2 patterns
- Performance doesn't impact theme switching speed

## Implementation Strategy

### Build Upon Established Foundations
1. **Leverage T-2.5.1**: Use the 69 validated token paths across 5 categories
2. **Integrate with T-2.5.2**: Ensure semantic mappings work with theme provider hooks
3. **Follow T-2.5.2 Patterns**: Use established error handling, TypeScript interfaces, and CSS custom property strategies

### Avoid Redundant Implementation
- Do NOT implement theme detection (T-2.5.2 handles this)
- Do NOT create hardcoded token values (must respond to theme changes)
- Do NOT add localStorage logic (T-2.5.2 handles persistence)

## Testing Requirements
- Create test suite in `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.3/`
- Achieve 95% code coverage following T-2.5.2 standards
- Test integration with theme provider `setTheme` function
- Validate component-specific mappings work in both light and dark themes

## Post-Implementation
After completing all phases and update commands:
1. **STOP** and await further instructions for unit testing
2. Unit testing will be managed separately as indicated in the active task file

## Key Success Indicators
✅ Semantic token mappings integrate seamlessly with T-2.5.2 theme provider  
✅ Theme switching updates semantic tokens automatically  
✅ Component-specific token organization improves developer experience  
✅ TypeScript strict mode compliance maintained  
✅ 95% test coverage achieved with T-2.5.2 integration testing  
✅ No performance impact on existing theme switching functionality  

**Remember:** You are implementing the final piece of a three-part design token system (T-2.5.1 → T-2.5.2 → T-2.5.3). Your implementation must seamlessly integrate with the established foundation while providing the semantic layer that makes the token system developer-friendly and maintainable.
