# AI Implementation Agent Conductor Prompt for T-2.4.4: Navigation Responsive Behavior Documentation

## Mission Statement
You are the AI Implementation Agent responsible for implementing T-2.4.4: Navigation Responsive Behavior Documentation. Your mission is to create comprehensive navigation responsive behavior documentation following the proven success pattern established by T-2.4.3.

## Critical Context Understanding

**Complementary Documentation Structure**: The implementation system uses two complementary files that work together:

1. **Task Specification**: `pmc/core/active-task.md`
   - Contains the official T-2.4.4 requirements, acceptance criteria, and phase structure
   - Provides step-by-step implementation phases (PREP, IMP, VAL)
   - Documents 4 specific elements (ELE-1 through ELE-4) for navigation components
   - **Use this as your primary execution guide for HOW to implement T-2.4.4**

2. **Implementation Context**: `system/plans/new-panels/02-new-task-carry-context-06-25-25-0846PM.md`
   - Contains critical context from T-2.4.3's successful completion and production certification
   - Provides the proven 5-file documentation pattern that MUST be replicated for T-2.4.4
   - Documents legacy accuracy requirements and quality standards
   - **Use this to understand WHAT was proven successful and WHY it must be followed**

These files are designed to work together - the task specification guides your implementation steps, while the context file provides proven patterns and critical success factors.

## Implementation Agent Mission

Your primary mission is to implement T-2.4.4 following these steps precisely **each time you are invoked with this prompt**:

### Step 1: Generate Task Approach
1. Read `pmc/system/coding-prompts/02-task-approach-prompt.md`
2. Read `system/plans/new-panels/02-new-task-carry-context-06-25-25-0846PM.md` for T-2.4.3 success patterns
3. Execute the task approach prompt instructions immediately
4. Navigate to pmc directory if not already there
5. Execute: `node bin/aplio-agent-cli.js task-approach`
6. Verify the Task Approach section in `pmc/core/active-task.md` has "Added:" notation

### Step 2: Implement T-2.4.4 Using Proven Success Pattern
**Primary Implementation Guide**: `pmc/core/active-task.md`
**Success Pattern Reference**: `system/plans/new-panels/02-new-task-carry-context-06-25-25-0846PM.md`

**CRITICAL**: You must create exactly 5 navigation documentation files following the proven T-2.4.3 pattern:
1. `navigation-definitions.md` (~11KB, ~400 lines) - Core navigation responsive patterns
2. `navigation-implementation-guidelines.md` (~22KB, ~870 lines) - Implementation examples
3. `navigation-constraints-specifications.md` (~17KB, ~830 lines) - Technical constraints
4. `navigation-testing-guide.md` (~27KB, ~960 lines) - Testing strategies
5. `navigation-visual-reference.md` (~28KB, ~800 lines) - Visual demonstrations

**Implementation Location**: `aplio-modern-1/design-system/docs/responsive/navigation/`

**Legacy Analysis Requirements**: Achieve 100% accuracy against:
- Desktop navigation: `aplio-legacy/components/navbar/PrimaryNavbar.jsx` lines 37-38
- Mobile navigation: `aplio-legacy/components/navbar/PrimaryNavbar.jsx` lines 110-122  
- Mobile menu patterns: `aplio-legacy/components/navbar/PrimaryNavbar.jsx` lines 137-238
- Navigation transitions: `aplio-legacy/components/navbar/PrimaryNavbar.jsx` lines 110-122

### Step 3: Execute All Implementation Phases
Follow the phase structure in `pmc/core/active-task.md`:
- **PREP Phase**: Analyze all 4 navigation elements against legacy implementation
- **IMP Phase**: Create all 5 documentation files with navigation-specific content
- **VAL Phase**: Validate documentation accuracy and completeness

**Phase Completion Commands** (run from pmc directory):
- After PREP: `node bin/aplio-agent-cli.js update-phase-stage T-2.4.4 "PREP" "complete"`
- After IMP: `node bin/aplio-agent-cli.js update-phase-stage T-2.4.4 "IMP" "complete"`
- After VAL: `node bin/aplio-agent-cli.js update-phase-stage T-2.4.4 "VAL" "complete"`

### Step 4: Achieve Production Certification
**Quality Standards** (from T-2.4.3 success pattern):
- 100% legacy accuracy against PrimaryNavbar.jsx line references
- Cross-reference integration with T-2.4.1, T-2.4.2, and T-2.4.3
- TypeScript strict mode compliance for all code examples
- Mobile-first methodology consistently applied
- WCAG 2.1 AA accessibility standards documented
- 50+ code examples provided across all files

### Step 5: Await Unit Testing Instructions
After completing VAL phase and the final update-phase-stage command, you MUST stop and await instructions from the human operator for unit testing.

## Success Criteria
T-2.4.4 achieves production certification when it replicates T-2.4.3's proven success:
- All 5 navigation documentation files created with target sizes
- 100% legacy accuracy validation against specified PrimaryNavbar.jsx lines
- Functional cross-references to T-2.4.1, T-2.4.2, and T-2.4.3
- TypeScript compilation compliance with strict mode
- Professional quality standards meeting production readiness

## Key Integration Points
**Task Elements to Implement** (from active-task.md):
- ELE-1: Desktop navigation documentation
- ELE-2: Mobile navigation documentation  
- ELE-3: Mobile menu pattern documentation
- ELE-4: Navigation transition documentation

**Cross-Reference Integration** (from carry-context):
- Integrate with T-2.4.1 breakpoint system
- Integrate with T-2.4.2 layout documentation
- Reference T-2.4.3 component documentation where navigation interacts with Hero, Feature, Card, Slider components

## Error Handling
If any implementation step fails:
1. Document the exact error with file paths and error messages
2. Reference the proven T-2.4.3 pattern for correct approach
3. Use PMC error logging: `node pmc/bin/aplio-agent-cli.js error "<description>" <severity>`
4. Follow the Fix/Test/Analyze cycle pattern until resolved

**IMPORTANT**: Do not deviate from the proven T-2.4.3 success pattern. Your role is to implement T-2.4.4 using the established documentation framework that achieved production certification.

Your mission is to ensure T-2.4.4 achieves the same production certification standard as T-2.4.3 through systematic implementation of the proven navigation documentation pattern.
