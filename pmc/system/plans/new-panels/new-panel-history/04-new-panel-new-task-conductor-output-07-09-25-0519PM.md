# AI Coding Conductor Prompt - T-3.3.2 Desktop Navigation Implementation

Your primary mission is to implement **T-3.3.2 Desktop Navigation Implementation** building upon the validated T-3.3.1 foundation architecture. You are implementing visual navigation components that build on proven infrastructure. All PMC commands are best run from the pmc directory using `node bin/[command]`. Follow these steps precisely:

## CRITICAL CONTEXT INTEGRATION
**MANDATORY FIRST STEP**: Before beginning implementation, you MUST read and understand these complementary documents:

1. **`pmc/core/active-task.md`** - Contains T-3.3.2 Desktop Navigation Implementation specifications, acceptance criteria, and implementation phases
2. **`system/plans/new-panels/02-new-task-carry-context-07-09-25-0519PM.md`** - Contains critical context from T-3.3.1 testing completion and implementation guidance

**Key Integration Points:**
- The active task provides T-3.3.2 requirements and phases
- The carryover context provides T-3.3.1 foundation architecture details and lessons learned
- You must use BOTH documents together - they are complementary, not conflicting

## FOUNDATION-FIRST IMPLEMENTATION APPROACH
**CRITICAL**: Do NOT start from scratch. T-3.3.1 foundation architecture is complete and validated:

### Validated Foundation Assets (DO NOT RECREATE)
- **530+ lines of TypeScript interfaces** in `Navigation.types.ts` - USE THESE
- **8 TypeScript foundation files** - BUILD UPON THESE
- **Client/server boundaries optimized** - FOLLOW THESE PATTERNS
- **DSAP compliance achieved** - MAINTAIN THESE STANDARDS

### Primary Implementation Target
- **`aplio-modern-1/components/navigation/Desktop/DesktopNavigation.tsx`** - EXTEND this placeholder
- **Use existing hooks**: `useNavigationState.ts` and `useStickyNavigation.ts`
- **Integrate with provider**: `NavigationProvider.tsx` context patterns

## IMPLEMENTATION WORKFLOW

### 1. Foundation Integration Analysis (REQUIRED FIRST)
Before coding, analyze the validated T-3.3.1 foundation:
- Review `aplio-modern-1/components/navigation/types/Navigation.types.ts` (530+ lines of interfaces)
- Understand `aplio-modern-1/test/reports/T-3.3.1-comprehensive-test-report.md` (architectural validation)
- Study `aplio-modern-1/components/navigation/Desktop/DesktopNavigation.tsx` (current placeholder)

### 2. Generate Task Approach
- Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
- Execute those instructions to generate your implementation approach
- Integration focus: Use validated T-3.3.1 patterns, don't recreate foundation

### 3. Integrate Task Approach  
Navigate to `pmc` directory and execute:
```bash
node bin/aplio-agent-cli.js task-approach
```
Verify the Task Approach section in `active-task.md` shows "Added:" notation.

### 4. Execute T-3.3.2 Implementation
Follow the phases in `pmc/core/active-task.md`:
- **PREP Phase**: DSAP documentation discovery, legacy analysis, foundation understanding
- **IMP Phase**: Desktop navigation implementation using T-3.3.1 foundation
- **VAL Phase**: Visual testing, accessibility validation, performance verification

### 5. Enhanced Testing Requirements
Based on T-3.3.1 lessons learned:
- **Fix component path resolution** (identified issue in T-3.3.1 testing)
- **Implement functional scaffold testing** (not possible in T-3.3.1 infrastructure testing)
- **Achieve 90%+ coverage** (maintain T-3.3.1 standard)
- **Visual regression testing** (new requirement for T-3.3.2)

## CRITICAL IMPLEMENTATION GUIDANCE

### Path Resolution Fix (MANDATORY)
T-3.3.1 testing revealed component path issues:
- Ensure components import from `components/navigation/Desktop/`
- Fix scaffold generation to look in correct locations
- Validate TypeScript and Jest module resolution

### Foundation Integration (MANDATORY)
- **Type Definitions**: Use interfaces from `Navigation.types.ts`
- **State Management**: Integrate `useNavigationState.ts` and `useStickyNavigation.ts`
- **Context Provider**: Use `NavigationProvider.tsx` patterns
- **Export Structure**: Maintain barrel export in `index.tsx`

### Testing Adaptation (MANDATORY)
- **Functional UI Testing**: Unlike T-3.3.1's architectural focus, T-3.3.2 requires visual testing
- **Working Scaffolds**: Generate functional components for testing (fix T-3.3.1 path issues)
- **Animation Testing**: Validate dropdown functionality using enhanced testing infrastructure
- **Legacy Fidelity**: Compare with `aplio-legacy/components/navbar/PrimaryNavbar.jsx`

## ACCEPTANCE CRITERIA ENHANCEMENT
In addition to the acceptance criteria in `active-task.md`, you MUST:

### Foundation Integration Validation
- Desktop navigation uses `Navigation.types.ts` interfaces ✅
- State management hooks properly integrated ✅  
- Provider context correctly implemented ✅
- Barrel exports maintained ✅

### Enhanced Testing Standards
- 90%+ code coverage achieved (T-3.3.1 standard) ✅
- Functional scaffolds generate correctly ✅
- Visual regression tests pass ✅
- Component path resolution works ✅

## UNIT TESTING APPROACH
- Unit testing guidance is in `pmc/core/active-task-unit-tests-2.md`
- **After VAL phase completion**, stop and await human operator instructions for unit testing
- Apply T-3.3.1 testing methodology with visual testing enhancements

## ERROR PREVENTION
Common pitfalls to avoid based on T-3.3.1 lessons:

1. **Don't recreate foundation architecture** - it's complete and validated
2. **Don't ignore component path resolution** - fix the T-3.3.1 issues  
3. **Don't limit to architectural testing** - T-3.3.2 needs functional UI testing
4. **Don't skip foundation integration** - use the validated patterns

## SUCCESS CRITERIA
- Desktop navigation component renders with legacy design fidelity
- Dropdown menus function with smooth animations
- Active state correctly highlights current sections
- Full accessibility with keyboard and screen reader support
- **Foundation integration confirmed** (new requirement)
- **Enhanced testing standards met** (90%+ coverage with visual validation)

**REMEMBER**: You are building upon a solid, tested foundation. Leverage the T-3.3.1 architecture rather than starting from scratch. The carryover context provides detailed guidance on what exists and how to use it effectively.
