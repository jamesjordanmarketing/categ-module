# T-2.5.4 Style Composition System - AI Implementation Conductor Prompt

## Mission Overview
Your primary mission is to implement T-2.5.4 Style Composition System Implementation, building upon the completed theme foundation from T-2.5.3 and T-2.5.3a. This task requires careful integration with existing theme systems while creating new style composition utilities.

## Critical Context Understanding

### Dual Document System
You must understand that two complementary documents provide your implementation guidance:

1. **Technical Specification**: `pmc/core/active-task.md`
   - Contains detailed T-2.5.4 implementation requirements
   - Defines 4 core elements (ELE-1 through ELE-4)
   - Provides acceptance criteria and phase structure
   - Specifies legacy code references and testing requirements

2. **Context Integration Guide**: `system/plans/new-panels/02-new-task-carry-context-06-30-25-0441PM.md`
   - Contains critical context from completed T-2.5.3/T-2.5.3a implementation
   - Explains how to integrate with existing theme system
   - Provides updated implementation approaches based on completed work
   - Identifies eliminated requirements and additional testing needs

**CRITICAL**: These documents are complementary, not conflicting. The active-task.md provides the core requirements while the context file explains how to adapt those requirements based on the completed theme foundation.

## Implementation Sequence

### Phase 1: Foundation Analysis (PREP Phase)
1. **Read Context Integration Guide FIRST**:
   - Understand completed T-2.5.3 semantic token system
   - Review T-2.5.3a Theme Switcher implementation patterns
   - Note theme system architecture (dual provider + CSS custom properties)
   - Identify integration requirements for T-2.5.4

2. **Generate Task Approach**:
   - Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - Execute the task approach generation immediately
   - Navigate to pmc directory if needed
   - Run: `node bin/aplio-agent-cli.js task-approach`
   - Verify approach is added to active-task.md with "Added:" notation

3. **Integration Planning**:
   - Study existing theme files in `aplio-modern-1/styles/themes/`
   - Review Theme Switcher component in `components/shared/ThemeSwitcher/`
   - Understand CSS custom property patterns in `app/globals.css`
   - Plan composition utilities that leverage existing token foundation

### Phase 2: Implementation (IMP Phase)
1. **Create Style Composition Utilities** (ELE-1):
   - Build utilities that integrate with T-2.5.3 semantic tokens
   - Ensure theme-aware composition (light/dark compatibility)
   - Use existing TypeScript interfaces from theme system

2. **Implement Variant Prop System** (ELE-2):
   - Leverage existing token paths and interfaces
   - Integrate with T-2.5.2 theme provider hooks
   - Maintain Theme Switcher compatibility

3. **Build Style Override System** (ELE-3):
   - Preserve existing CSS custom property functionality
   - Ensure Theme Switcher continues to work seamlessly
   - Use established component architecture patterns

4. **Develop Responsive Style Utilities** (ELE-4):
   - Maintain theme consistency across breakpoints
   - Work with existing Tailwind dark mode configuration
   - Leverage existing breakpoint tokens

### Phase 3: Validation (VAL Phase)
1. **Theme Integration Testing**:
   - Test all utilities with both light and dark themes
   - Verify theme switching preserves functionality
   - Validate backwards compatibility with existing systems

2. **Comprehensive Testing**:
   - Achieve 95% code coverage requirement
   - Test integration with T-2.5.3 semantic tokens
   - Verify T-2.5.3a Theme Switcher continues to work
   - Validate responsive behavior across breakpoints

## Key Implementation Adaptations

### What to Use from Context Guide:
- **Theme Integration Requirements**: All composition utilities must work with light/dark themes
- **Type Safety Enhancements**: Extend existing interfaces, don't replace them
- **CSS Custom Property Integration**: Use reactive --aplio-* variables
- **Reference Implementations**: Use completed theme files as authoritative patterns

### What to Avoid:
- **Do NOT** implement external theme libraries (theme system is complete)
- **Do NOT** manually manage CSS custom properties (handled by T-2.5.3)
- **Do NOT** modify existing theme provider system (tested and production-ready)

### Testing Priorities:
1. Theme integration scenarios (highest priority)
2. Backwards compatibility with T-2.5.3a Theme Switcher
3. Standard 95% code coverage
4. Integration with existing semantic token system

## Success Criteria

### Technical Completion:
- All 4 elements (ELE-1 through ELE-4) implemented
- 95% test coverage achieved
- Integration with theme system validated
- No regression in existing functionality

### Integration Validation:
- Style composition works with semantic tokens from T-2.5.3
- Theme switching continues to work seamlessly
- CSS custom properties remain reactive
- Responsive utilities maintain theme consistency

## Critical Files to Reference

### Implementation Target:
- `aplio-modern-1/styles/system/composition.ts` - Your main implementation file

### Integration Dependencies:
- `aplio-modern-1/styles/themes/index.ts` - Semantic token system
- `aplio-modern-1/components/providers/theme-provider.tsx` - Theme context
- `aplio-modern-1/app/globals.css` - CSS custom property patterns

### Reference Patterns:
- `aplio-modern-1/components/shared/ThemeSwitcher/ThemeSwitcher.tsx` - Proper token usage
- `aplio-modern-1/styles/themes/theme-switcher-foundation.ts` - Component token patterns

## Execution Command

Once you understand both documents, execute the task following the active-task.md phases while applying the context integration guidance. Use PMC commands from pmc directory:

```bash
# Phase completion commands
node bin/aplio-agent-cli.js update-phase-stage T-2.5.4 "PREP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-2.5.4 "IMP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-2.5.4 "VAL" "complete"
```

## Unit Testing Transition

After VAL phase completion, you MUST stop and await human operator instructions for unit testing. The unit testing process will be managed separately to ensure comprehensive validation of your implementation.

**Remember**: Your implementation must enhance the design system while preserving all existing functionality. The theme foundation is complete and production-ready - your job is to build upon it, not replace it.
