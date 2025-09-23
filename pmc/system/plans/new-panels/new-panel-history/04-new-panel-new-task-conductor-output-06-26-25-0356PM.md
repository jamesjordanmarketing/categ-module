# AI Implementation Agent Conductor Prompt - T-2.5.1 Design Token Typing System

## Mission Overview
You shall implement **T-2.5.1: Design Token Typing System Implementation** by creating a comprehensive typing system for design tokens in the Next.js 14 design system. This task builds directly on the successfully completed T-2.4.6 responsive typography documentation and testing validation.

## Critical Context Integration
**You must read and integrate BOTH of these complementary files**:

1. **`pmc/core/active-task.md`** - Contains the detailed task specification, acceptance criteria, implementation phases, and PMC workflow commands for T-2.5.1
2. **`system/plans/new-panels/02-new-task-carry-context-06-26-25-0356PM.md`** - Contains critical implementation context from T-2.4.6 completion, proven patterns, testing protocols, and integration requirements

**These files work together**: The active task provides the structured implementation framework, while the carryover context provides the proven patterns and validation requirements that must inform your approach.

## Implementation Protocol

### Step 1: Context Integration & Task Approach Generation
1. **Read both context files completely**:
   - `pmc/core/active-task.md` for T-2.5.1 specifications
   - `system/plans/new-panels/02-new-task-carry-context-06-26-25-0356PM.md` for T-2.4.6 context and proven patterns

2. **Generate comprehensive task approach**:
   - Execute instructions from `pmc/system/coding-prompts/02-task-approach-prompt.md`
   - Integrate T-2.4.6 validation protocols and patterns into your approach
   - Navigate to `pmc` directory
   - Run: `node bin/aplio-agent-cli.js task-approach`
   - Verify the Task Approach section in active-task.md shows "Added:" notation

### Step 2: Execute T-2.5.1 Implementation
**Follow the structured implementation in `pmc/core/active-task.md`**:

**Critical Implementation Requirements from T-2.4.6 Context**:
- Apply 100% legacy accuracy validation (like T-2.4.6 typography patterns)
- Use TypeScript strict mode compilation testing
- Implement 95% test coverage requirement
- Reference validated legacy patterns: `colors.ts:19-35`, `tailwind.config.js:68-72`

**Acceptance Criteria (from active-task.md)**:
- ✅ Create TypeScript type definitions for color tokens
- ✅ Create TypeScript type definitions for typography tokens  
- ✅ Create TypeScript type definitions for spacing tokens
- ✅ Implement token value validation utilities

**Implementation Phases**:
1. **PREP Phase**: Analyze existing token patterns using T-2.4.6 validation rigor
2. **IMP Phase**: Implement token typing system with comprehensive testing
3. **VAL Phase**: Validate using proven T-2.4.6 testing protocols

### Step 3: Testing & Validation
- Leverage T-2.4.6 testing infrastructure in `aplio-modern-1/test/`
- Apply proven validation protocols: legacy accuracy, TypeScript compilation, agent workflow testing
- Achieve 95% test coverage as specified in active-task.md
- Use PMC commands for phase updates: `node bin/aplio-agent-cli.js update-phase-stage T-2.5.1 "PHASE" "complete"`

### Step 4: Task Completion
- Complete all VAL phase steps
- Execute final `node bin/aplio-agent-cli.js update-phase-stage T-2.5.1 "VAL" "complete"`
- **STOP and await human operator instructions for unit testing**

## Key Success Factors
1. **Legacy Pattern Integration**: Typography patterns from T-2.4.6 must inform token type definitions
2. **Proven Testing Approach**: Use T-2.4.6's successful validation methodology
3. **Type Safety Excellence**: All implementations must compile in TypeScript strict mode
4. **Documentation Standards**: Follow T-2.4.6's documentation excellence patterns

## Implementation Files
**Primary Target**: `aplio-modern-1/styles/system/tokens.ts`
**Test Location**: `aplio-modern-1/test/unit-tests/task-2-5/T-2.5.1/`
**Reference Files**: See carryover context for complete legacy reference file list

## Critical Dependencies
- T-2.4.6 typography patterns and validation protocols (completed successfully)
- Existing token implementations in `colors.ts` and `tailwind.config.js`
- Established testing infrastructure from T-2.4.6

**Execute with the same excellence standards that achieved T-2.4.6's 100% validation success.**
