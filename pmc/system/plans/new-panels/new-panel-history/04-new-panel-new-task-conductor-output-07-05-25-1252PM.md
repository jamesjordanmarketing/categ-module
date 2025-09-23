# AI Implementation Agent Conductor Prompt - T-3.2.1 Accordion Component Structure and Types

## Mission Overview
You are tasked with implementing **T-3.2.1: Accordion Component Structure and Types** - a foundational task that creates the structure and type definitions for the Accordion component system. This task builds upon the successful completion of T-3.1.4 Button Component Testing and Documentation, leveraging established patterns while focusing specifically on structure and types.

## Critical Context Integration
**You must read BOTH documents as complementary sources:**

### Primary Task Authority
- **`pmc/core/active-task.md`** - Your primary implementation guide
  - Contains T-3.2.1 requirements, acceptance criteria, and phase-by-phase instructions
  - Defines the three core elements: Component structure, Type definitions, Server/client boundaries
  - Provides specific implementation steps and PMC commands

### Implementation Context & Patterns
- **`system/plans/new-panels/02-new-task-carry-context-07-05-25-1252PM.md`** - Your success blueprint
  - Provides proven patterns from T-3.1.4's successful implementation
  - Details established TypeScript, testing, and component architecture patterns
  - Explains how T-3.2.1 differs from atomic components (composite/molecular architecture)

## Implementation Approach (Execute in Order)

### 1. Context Integration (Start Here)
**Read both documents thoroughly:**
- First: `pmc/core/active-task.md` (complete T-3.2.1 requirements)
- Second: `system/plans/new-panels/02-new-task-carry-context-07-05-25-1252PM.md` (proven patterns and context)
- **Critical**: Understand T-3.2.1 is **structure and types only** - no full implementation, no comprehensive testing

### 2. Generate Task Approach
**Navigate to pmc directory and execute:**
```bash
node bin/aplio-agent-cli.js task-approach
```
**This will:**
- Generate your implementation approach based on the task requirements
- Integrate your approach into the active task file
- You MUST verify the Task Approach section shows "Added:" notation indicating success

### 3. Execute T-3.2.1 Implementation
**Follow the active task document precisely through all phases:**

#### **PREP Phase (Preparation)**
- **PREP-1**: Analyze legacy accordion implementation (`aplio-legacy/components/home-4/CustomFAQ.jsx` and `aplio-legacy/components/shared/FaqItem.jsx`)
- **PREP-2**: Extract props and state requirements from legacy code
- **PREP-3**: Analyze interactive vs. static parts for client/server boundaries
- **DSAP Requirement**: Complete Design System documentation discovery
- **Execute**: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "PREP" "complete"`

#### **IMP Phase (Implementation)**
- **IMP-1**: Create directory structure at `aplio-modern-1/components/design-system/molecules/Accordion/`
- **IMP-2**: Define comprehensive types in `Accordion.types.ts` (single and multiple open variants)
- **IMP-3**: Set up initial component files with optimized server/client boundaries
- **Apply proven patterns** from Button component (see carryover context)
- **Execute**: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "IMP" "complete"`

#### **VAL Phase (Validation)**
- **VAL-1**: Verify component structure matches project conventions
- **VAL-2**: Ensure type definitions cover all variants and states
- **VAL-3**: Validate client/server boundary optimization
- **DSAP Requirement**: Create design system adherence report
- **Execute**: `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "VAL" "complete"`

## Key Implementation Guidelines

### Focus Scope (Critical)
✅ **DO IMPLEMENT:**
- Directory structure for Accordion components
- Comprehensive TypeScript interfaces and types
- Server/client component boundary definitions
- Design system pattern adherence

❌ **DO NOT IMPLEMENT:**
- Full component functionality (future tasks)
- Comprehensive testing suites (future tasks)
- Complete documentation (future tasks)
- Visual styling implementation (future tasks)

### Leverage Proven Patterns
**Apply these successful T-3.1.4 patterns to T-3.2.1:**
- **Component file organization** (index.tsx, Component.types.ts structure)
- **TypeScript excellence** (comprehensive interfaces, strict type safety)
- **Design system integration** (atomic patterns adapted for molecular components)
- **Server/client optimization** (Next.js 14 App Router performance)

### Composite Component Considerations
**T-3.2.1 requires composite/molecular patterns:**
- **Accordion container** manages multiple AccordionItem components
- **State management** for single vs. multiple open accordion variants
- **Component composition** enabling flexible accordion configurations
- **Performance optimization** for composite component interactions

## Success Criteria
**Task completion requires:**
- Component structure follows P012-COMPOSITE-COMPONENT and P005-COMPONENT-TYPES patterns
- Type definitions support single and multiple open accordion variants
- Server/client boundaries are optimized for Next.js 14 App Router
- Component structure enables proper composition of accordion items
- All acceptance criteria from active task are met

## PMC Command Requirements
**Execute these commands from pmc directory:**
1. `node bin/aplio-agent-cli.js task-approach` (after reading both documents)
2. `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "PREP" "complete"` (after PREP phase)
3. `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "IMP" "complete"` (after IMP phase)
4. `node bin/aplio-agent-cli.js update-phase-stage T-3.2.1 "VAL" "complete"` (after VAL phase)

## Stop Condition
**After completing VAL phase and executing the final PMC command, you MUST:**
1. Verify all acceptance criteria are met
2. Confirm all implementation elements are complete
3. **STOP and await instructions** from the human operator for the next task

## Important Notes
- **T-3.2.1 is foundational** - creates structure for future accordion implementation tasks
- **Carryover context** provides proven patterns but adapt for composite architecture
- **Active task document** is your primary authority for specific requirements
- **Both documents complement each other** - use together for complete understanding
- **Focus on structure and types only** - resist implementing full functionality

Your mission is to create a solid foundation for the accordion component system that future tasks can build upon using the proven patterns established in T-3.1.4.
