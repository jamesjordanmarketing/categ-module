# AI Coding Conductor Prompt - T-3.1.1: Button Component Setup and Type Definitions

## Mission Overview
You are implementing **T-3.1.1: Button Component Setup and Type Definitions** - the first atomic-level component that builds directly upon the successful T-2.5.6 styled component foundation. This task establishes the reference implementation pattern for all future atomic components.

## Critical Integration Context
**ESSENTIAL UNDERSTANDING**: T-3.1.1 leverages the comprehensive styled component system from T-2.5.6. You are NOT creating a new styling system - you are creating an atomic component that uses the established foundation.

**Key Files Relationship**:
- `pmc/core/active-task.md` - Contains your specific T-3.1.1 implementation instructions, phases, and acceptance criteria
- `system/plans/new-panels/02-new-task-carry-context-07-01-25-0845PM.md` - Contains critical context from T-2.5.6 implementation showing what foundation systems are available

**These files are complementary - not conflicting. The active task tells you WHAT to implement, the carryover context tells you HOW to integrate with existing systems.**

## Implementation Protocol

### 1. Context Integration Phase
**Before starting any coding**, you must understand the integration requirements:

1. **Read Carryover Context FIRST**:
   ```bash
   # Read this file to understand T-2.5.6 foundation systems
   system/plans/new-panels/02-new-task-carry-context-07-01-25-0845PM.md
   ```
   
2. **Then Read Active Task Instructions**:
   ```bash
   # Read this file for specific T-3.1.1 implementation requirements  
   pmc/core/active-task.md
   ```

3. **Key Integration Points to Understand**:
   - Existing `components/design-system/system/styled.tsx` with discriminated union types (ButtonVariant, CardVariant, InputVariant)
   - Established `components/design-system/system/Button.tsx` with DSAP compliance (30px padding, 30px border-radius, Inter font, 500ms transitions)
   - CSS custom properties (--aplio-*) for automatic theme switching
   - NO JavaScript theme props allowed - all theming via CSS cascade

### 2. Task Approach Generation
1. **Generate Implementation Approach**:
   - Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - Execute the task approach prompt instructions immediately
   - Reference carryover context for integration patterns with T-2.5.6 foundation

2. **Integrate Task Approach**:
   - Navigate to `pmc` directory
   - Execute: `node bin/aplio-agent-cli.js task-approach`
   - Verify the Task Approach section in `active-task.md` shows "Added:" notation
   - If no "Added:" notation appears, STOP and request human assistance

### 3. Execute T-3.1.1 Implementation
**Implementation Location**: `aplio-modern-1/components/design-system/atoms/Button/` (atomic design structure)

**Critical Success Requirements**:
- **Reuse T-2.5.6 Foundation**: Import and extend existing ButtonVariant types from `../../../system/styled.tsx`
- **CSS Variable Integration**: Use established `--aplio-button-*` custom properties for styling  
- **DSAP Compliance**: Maintain 30px padding, 30px border-radius, Inter font, 500ms transitions
- **Atomic Structure**: Create proper directory structure at `/atoms/Button/` with index.tsx, Button.types.ts files
- **Size Variants**: Add small, medium, large size options (new requirement beyond T-2.5.6)
- **Icon Placement**: Include left/right icon positioning options (new requirement beyond T-2.5.6)

**Implementation Phases** (follow active-task.md exactly):
1. **PREP Phase**: Analyze T-2.5.6 Button example + legacy patterns + DSAP documentation discovery
2. **IMP Phase**: Create atomic component structure + extend type definitions + implement exports + DSAP compliance
3. **VAL Phase**: Verify integration + test exports + validate DSAP adherence + create adherence report

**Phase Update Commands** (from pmc directory):
```bash
node bin/aplio-agent-cli.js update-phase-stage T-3.1.1 "PREP" "complete"
node bin/aplio-agent-cli.js update-phase-stage T-3.1.1 "IMP" "complete"  
node bin/aplio-agent-cli.js update-phase-stage T-3.1.1 "VAL" "complete"
```

### 4. Integration Validation Requirements
You must validate successful integration with T-2.5.6 foundation:
- ✅ ButtonVariant types imported from existing styled.tsx
- ✅ CSS custom properties (--aplio-button-*) referenced correctly  
- ✅ No JavaScript theme props used (CSS-only theming)
- ✅ DSAP specifications maintained (30px padding, 30px border-radius, Inter font, 500ms transitions)
- ✅ Component consumable by other design system parts
- ✅ Size variants (small/medium/large) properly implemented
- ✅ Icon placement options (left/right/none) functional

## Error Prevention Guidelines

### Common Integration Mistakes to Avoid
- **DO NOT** create new CSS variables - use existing --aplio-* from T-2.5.6
- **DO NOT** implement JavaScript theme props - use CSS cascade only
- **DO NOT** recreate ButtonVariant types - import and extend from styled.tsx
- **DO NOT** place files in `/system/` directory - use atomic structure `/atoms/Button/`
- **DO NOT** skip DSAP compliance requirements - maintain exact specifications

### File Path Clarity
- **T-2.5.6 Reference**: `components/design-system/system/` (foundation system)
- **T-3.1.1 Implementation**: `components/design-system/atoms/Button/` (atomic component)
- **Legacy Reference**: `aplio-legacy/scss/_button.scss` and `aplio-legacy/components/home-4/Hero.jsx`

## Completion Protocol
After completing VAL phase and running the VAL update-phase-stage "complete" command:
1. **STOP** and await human operator instructions for unit testing
2. **DO NOT** proceed to unit testing automatically
3. Unit testing will be conducted by a separate testing agent using established T-2.5.6 patterns

## Quality Assurance Reminders
- Reference carryover context for integration patterns with T-2.5.6 styled component system
- Follow active-task.md phases and acceptance criteria exactly
- Maintain DSAP compliance throughout implementation
- Use established CSS custom properties for all styling
- Create properly consumable atomic component exports
- Document any discovered dependencies or improvement suggestions using PMC commands

**SUCCESS DEFINITION**: T-3.1.1 creates a fully functional atomic Button component that seamlessly integrates with T-2.5.6 foundation, demonstrates all required variants and sizes, maintains DSAP compliance, and serves as the reference pattern for future atomic components.

---

**IMPORTANT**: All PMC commands must be run from the `pmc` directory. Navigate there before executing any `node bin/aplio-agent-cli.js` commands. Append ` | cat` to all bash commands to prevent terminal hanging issues.
