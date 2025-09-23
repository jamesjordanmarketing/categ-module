# Development Context & Operational Priorities
**Date:** 2025-05-24 01:11 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### [Active Development Focus]

**Mission**: Fix the broken visual testing system that was generating mock HTML instead of rendering actual React components for task T-1.1.3.

**Problem Identified**: The original testing system in `test/utils/scaffold-templates/create-enhanced-scaffold.js` was generating static HTML mocks rather than rendering real React components with Tailwind CSS styling.

**Solution Approach**: Complete rewrite of the scaffolding system to use React Server-Side Rendering (SSR) to generate pixel-perfect component screenshots.

## Progress Made

### 1. Analysis Completed ✅
- **Root Cause**: Scaffold generator creates mock HTML divs instead of importing/rendering actual React components
- **Impact**: Screenshots show placeholder content instead of real component styling
- **Requirements**: Need React SSR with Tailwind CSS processing and component imports

### 2. Specifications Created ✅
- **Functional Specification**: `pmc/context-ai/chat-contexts-log/pmct/testing-system-react-render-spec-v2.md` - Detailed implementation guide. You MUST read the Functional Specification before you proceed with testing.
- **Technical requirements for React SSR integration

### 3. Implementation Started ✅
- **Enhanced Scaffold Generator**: Created new `test/utils/scaffold-templates/create-enhanced-scaffold-v2.js` with React SSR capability. You MUST read this Enhanced Scaffold Generator before you proceed with testing.
- **Complete rewrite of scaffold generator using React SSR
- **Imports actual React components instead of generating mock HTML
- **Includes Tailwind CSS processing and visual boundary injection

#### Files Enhanced/Modified

1. **`aplio-modern-1/test/utils/helpers/component-registry.js`**
   - Enhanced component registration logic
   - Added verification that components actually exist before registering
   - Updated to exclude non-existent ErrorMessage.tsx component

2. **`aplio-modern-1/test/utils/server-manager/enhanced-server.js`**
   - Added routes for real React component rendering
   - Integration with new enhanced scaffold generator
   - Error handling for component import failures

3. **`aplio-modern-1/test/run-visual-tests.js`**
   - Updated to use enhanced component registration
   - Added verification steps for real rendering
   - Modified test execution workflow for React SSR

## Current State

- **Implemented**: React SSR scaffold generation system
- **Testing Status**: Partially working - Card component generated error scaffold
- **Next Debug Target**: `aplio-modern-1/test/scaffolds/TEST/Card-ERROR-enhanced.html`

The new testing agent should examine the error scaffold first, then debug the TypeScript/React import issues in the enhanced scaffold generator to get actual component rendering working.

### 4. Testing Initiated ✅
- **Test Command**: Ran `npm run test:visual:enhanced TEST` to test new system
- **Partial Success**: System attempted to render components
- **Error State**: Card component generated error scaffold (`Card-ERROR-enhanced.html`)

### Current Status: DEBUGGING COMPONENT IMPORT ERRORS

**Last Action**: Testing showed the enhanced scaffolding system tried to render the Card component but generated an error. Need to examine the error and fix component import/rendering issues.

**Immediate Next Steps**:

1. **Examine Error Scaffold**: Check `aplio-modern-1/test/scaffolds/TEST/Card-ERROR-enhanced.html` to understand what went wrong
2. **Debug Component Import**: The Card.tsx component exists at `app/_components/Card.tsx` but import/rendering failed
3. **Fix Import Issues**: Likely TypeScript compilation or path resolution problems
4. **Test Single Component**: Get Card component working first, then expand to others
5. **Verify React SSR**: Ensure React renderToString is working properly

### Technical Context

**Components Available**:
- `app/_components/Card.tsx` - Server component (target for debugging)
- `app/_components/Button.tsx` - Client component  
- `app/_components/FaqItem.tsx` - Client component
- `app/_components/FaqSection.tsx` - Server component
- `app/_components/DashboardStats.tsx` - Server component
- `app/_components/StatChart.tsx` - Client component
- `app/_components/LoginForm.tsx` - Client component

**Key Files Modified**:
- `test/utils/scaffold-templates/create-enhanced-scaffold-v2.js` - New React SSR scaffold generator
- `test/utils/helpers/component-registry.js` - Enhanced registration logic
- `test/utils/server-manager/enhanced-server.js` - Updated server routes

**Dependencies Needed**:
- React 18 with renderToString
- TypeScript compilation (ts-node or dynamic imports)
- Tailwind CSS processing
- Component path resolution

### Success Criteria

**System is working when**:
- Screenshots show actual Tailwind CSS styling (rounded corners, shadows, colors)
- Components display real content, not "Mock Component" text
- Visual boundaries overlay real rendered components
- No import or compilation errors

### Debugging Commands

```bash
# Check the error details
cat aplio-modern-1/test/scaffolds/TEST/Card-ERROR-enhanced.html

# Test component import manually
cd aplio-modern-1
node -e "import('./app/_components/Card.tsx').then(console.log).catch(console.error)"

# Verify React SSR availability
node -e "const { renderToString } = require('react-dom/server'); console.log('React SSR:', typeof renderToString)"
```

### Context for Next Agent

The testing system was fundamentally broken and we've implemented a complete rewrite to use React SSR. The new system is partially working but hitting component import errors. The next agent should:

1. Debug the Card component error first
2. Fix TypeScript/import issues  
3. Get one component working end-to-end
4. Expand to all components
5. Verify pixel-perfect rendering

The goal is screenshots that are indistinguishable from live application rendering with visual boundaries overlaid.

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.


## Project Overview Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Aplio Design System Modernization Project

#### Project Overview
This project aims to transform the existing JavaScript-based Aplio theme into a modern TypeScript-powered Next.js 14 platform. The project specifically focuses on migrating the Home 4 template (https://js-aplio-6.vercel.app/home-4) as the flagship demonstration while preserving Aplio's premium design aesthetics from the existing design system in `/aplio-legacy/`.

#### Key Documents
1. Seed Story: `pmc/product/00-aplio-mod-1-seed-story.md`
2. Project Overview: `pmc/product/00-aplio-mod-1-seed-narrative.md`
3. Raw Data: `pmc/product/_seeds/00-narrative-raw_data-ts-14-v3.md`

#### Project Objectives

##### Primary Goals
1. Migrate Home 4 template to Next.js 14 App Router architecture
2. Preserve exact design elements from `/aplio-legacy/`
3. Implement TypeScript with full type safety
4. Maintain premium design quality and animations

##### Technical Requirements
1. Next.js 14 App Router implementation
2. Complete TypeScript migration
3. Modern component architecture
4. Performance optimization

##### Design Requirements
1. Exact preservation of design elements from `/aplio-legacy/`
2. Maintenance of animation quality
3. Responsive behavior preservation
4. Professional template implementation

### Project Memory Core (PMC) System

#### Core Functionality
Everything in this section is supporting information only. Do NOT select the current task focus from this section.
PMC is a structured modern software development task management and context retention system built around the the main active task file as its central operational component. PMC is product agnostic. In this instance we are using it to code the Aplio Design System Modernization (aplio-mod-1) system described above. The system provides:

1. **Context Locality**: Instructions and context are kept directly alongside their relevant tasks
2. **Structured Checkpoints**: Regular token-based checks prevent context drift
3. **Directive Approach**: Clear commands and instructions with explicit timing requirements
4. **Task-Centric Documentation**: Single source of truth for task implementation

#### Commands

The driver for most PMC commands are in:
`pmc/bin/aplio-agent-cli.js`

The code for most PMC commands are contained within:
- The original context manager script: `pmc/system/management/context-manager.js`
- The next context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)

Here are some important PMC commands:

##### Start Task
```bash
node pmc/bin/aplio-agent-cli.js start-task "T-EXAMPLE.1.1"
```

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Update Element Status
```bash
node pmc/bin/aplio-agent-cli.js update-element-status "T-EXAMPLE.1.2:ELE-1" "Complete"
```

##### Task Completion
```bash
node pmc/bin/aplio-agent-cli.js complete-task "T-EXAMPLE.1.3"
```

##### Context Carryover for New Chat Windows
```bash
node system/management/carryover-command.js
```

#### Project Structure
```
aplio-legacy/ (legacy system)
aplio-modern-1/ (new system)
pmc/ (PMC system)
├── bin/
├── core/
├── system/
│   ├── management/
│   └── templates/
└── product/
```

### Additional Resources

#### Key URLs

#### Important Directories
```

