# Development Context & Operational Priorities
**Date:** 2025-06-13 23:43 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**PRIMARY TASK**: T-1.3.3 Testing Addendum Completion - Test Suite Execution Phase

**WHAT IS BEING WORKED ON**: 
The execution of a comprehensive test suite created for Task T-1.3.3 Testing Addendum Completion. The test suite has been fully created with 16 comprehensive test files covering 5 distinct testing phases (A through E). The current focus is to execute all tests and achieve the target of 95% comprehensive testing coverage.

**WHY IT IS BEING WORKED ON**:
This is the completion phase of T-1.3.3, which was identified as a critical testing gap in the project. The previous development session successfully created a comprehensive test suite, and now we need to execute these tests to validate functionality, identify any issues, and confirm we have achieved our 95% testing coverage goal.

**CURRENT STATE OF IMPLEMENTATION**:
- **Test Creation**: 100% COMPLETE ✅
- **Test Execution**: 0% - READY TO BEGIN 🚀
- **Coverage Target**: 95% comprehensive testing coverage
- **Jest Configuration**: Known issues need resolution before execution

**CRITICAL CONTEXT FROM PREVIOUS SESSION**:
1. **Test Suite Structure**: Complete 5-phase testing approach implemented
2. **Known Jest Issues**: Configuration conflicts between root and local Jest configs
3. **File Locations**: All tests in `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/`
4. **Dependencies**: ts-jest installed, @swc/jest configuration conflicts identified
5. **Test Types**: Functional, Integration, Performance, Error Handling tests created

** Fix/Test/Analyze Cycle Pattern**:
For any failed validation step in ANY phase:
1. **Log Issue**: Document failure details and error messages
2. **Attempt Fix**: Apply automated correction if possible  
3. **Re-run Test**: Execute the failed step again
4. **Evaluate Results**: Check if issue is resolved
5. **Update Artifacts**: Regenerate affected files (scaffolds, screenshots, reports)
6. **Repeat**: Continue until success or maximum iterations reached (default: 3 attempts)

**WORKING DIRECTORY**: `aplio-modern-1/`

Do not deviate from this focus without explicit instruction.
All other information in this document is reference material only.

### Current Active Action 

**Task ID**: T-1.3.3 Testing Addendum Completion
**Phase**: Test Execution Phase
**Active Element**: Comprehensive Test Suite Execution (All 5 Phases)
**Last Recorded Action**: Test suite creation completed successfully with 16 test files totaling ~6,000+ lines of comprehensive test coverage

### Next Steps 

1. **JEST-CONFIG-RESOLUTION** - Resolve Jest configuration conflicts
   - Description: Fix conflicting Jest configurations between root and aplio-modern-1 directories
   - Dependencies: Access to jest.config.js files and package.json
   - Expected Outcome: Jest runs without configuration errors

2. **PHASE-A-EXECUTION** - Execute Individual Hook Testing (6 test files)
   - Description: Run all hook functional tests and validate results
   - Dependencies: Jest configuration resolved
   - Expected Outcome: All hook tests pass, identify any functional issues

3. **PHASE-B-EXECUTION** - Execute Utility Testing (4 test files)
   - Description: Run all utility functional tests and validate results  
   - Dependencies: Phase A completed
   - Expected Outcome: All utility tests pass, confirm utility functionality

4. **PHASE-C-EXECUTION** - Execute Integration Testing (2 test files)
   - Description: Run integration tests for hook-component and utility-component interactions
   - Dependencies: Phases A & B completed
   - Expected Outcome: Integration tests pass, validate component interactions

5. **PERFORMANCE-ERROR-EXECUTION** - Execute Phases D & E (Performance + Error Handling)
   - Description: Run performance benchmarks and error handling tests
   - Dependencies: Phases A, B, C completed
   - Expected Outcome: Performance meets benchmarks, error handling validates graceful degradation

### Important Dependencies

1. **JEST-CONFIGURATION** - Current Status: BLOCKING
   - Issue: Root jest.config.js uses ts-jest, aplio-modern-1/jest.config.js uses @swc/jest
   - Impact: Cannot execute tests until configuration conflicts resolved

2. **DEPENDENCY-MOCKS** - Current Status: READY
   - Issue: next-themes, framer-motion, fs, gray-matter mocks implemented
   - Impact: All test dependencies properly mocked and ready for execution

3. **TYPESCRIPT-COMPILATION** - Current Status: READY
   - Issue: TypeScript configuration validated for test execution
   - Impact: Tests should compile and run once Jest config resolved

### Important Files

**TEST SUITE FILES** (All files are essential for test execution):

**Phase A - Individual Hook Testing (6 files):**
1. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useTabState-functional.test.ts` - Tab state management testing
2. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useTheme-functional.test.ts` - Theme switching functionality testing  
3. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useViewportAnimation-functional.test.ts` - Viewport animation testing
4. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useFilterState-functional.test.ts` - Filter state management testing
5. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useCounterAnimation-functional.test.ts` - Counter animation testing
6. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/hooks/useAsyncData-functional.test.ts` - Async data handling testing

**Phase B - Utility Testing (4 files):**
7. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/utils/markdown-functional.test.ts` - Markdown processing testing
8. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/utils/animationVariants-functional.test.ts` - Animation variants testing
9. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/utils/cn-functional.test.ts` - Class name utility testing
10. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/utils/formatters-functional.test.ts` - Formatting utilities testing

**Phase C - Integration Testing (2 files):**
11. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/integration/hook-component-integration.test.tsx` - Hook-component integration testing
12. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/integration/utility-component-integration.test.tsx` - Utility-component integration testing

**Phase D - Performance Testing (2 files):**
13. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/performance/hook-performance.test.ts` - Hook performance benchmarking
14. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/performance/utility-performance.test.ts` - Utility performance benchmarking

**Phase E - Error Handling Testing (2 files):**
15. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/error-handling/hook-error-handling.test.ts` - Hook error scenarios testing
16. `aplio-modern-1/test/unit-tests/task-1-3/T-1.3.3/error-handling/utility-error-handling.test.ts` - Utility error scenarios testing

**CONFIGURATION FILES:**
17. `aplio-modern-1/jest.config.js` - Local Jest configuration (needs review/modification)
18. `jest.config.js` - Root Jest configuration (potential conflict source)
19. `aplio-modern-1/package.json` - Project dependencies and scripts

### Important Scripts, Markdown Files, and Specifications

1. `pmc/core/active-task-unit-tests-2.md` - Core unit testing documentation and protocols
   - Purpose: Reference documentation for testing approaches and methodologies
   - Key Sections: Testing protocols, coverage requirements, validation criteria

2. `pmc/system/plans/context-carries/context-carry-info-06-13-25-850pm.md` - Previous context document
   - Purpose: Historical context from test creation phase
   - Key Sections: Original T-1.3.3 task definition, testing protocol establishment

### Recent Development Context

- **Last Milestone**: Complete test suite creation for T-1.3.3 with 16 comprehensive test files
- **Key Outcomes**: 
  - 95%+ test coverage framework established
  - All 5 testing phases (A-E) implemented
  - Comprehensive mocking strategy deployed
  - Performance benchmarking and error handling coverage achieved
- **Relevant Learnings**: 
  - Jest configuration conflicts between root and local configs
  - Complex integration testing requires React Testing Library + Jest integration
  - Performance testing needs careful memory leak detection
  - Error handling tests require comprehensive browser API mocking
- **Technical Context**: 
  - Working directory: `aplio-modern-1/`
  - ts-jest dependency installed
  - All test dependencies mocked (next-themes, framer-motion, fs, gray-matter)
  - TypeScript compilation ready for test execution

## COMPREHENSIVE TEST EXECUTION PLAN

### PHASE-BY-PHASE EXECUTION DIRECTIVES

**EXECUTE IN THIS EXACT ORDER - DO NOT SKIP OR REORDER PHASES**

#### PRE-EXECUTION SETUP

**STEP 1: Jest Configuration Resolution**
```bash
# Navigate to working directory
cd aplio-modern-1

# Check current Jest configuration
cat jest.config.js
cat ../jest.config.js

# Expected Issue: Configuration conflicts
# Resolution Required: Choose single Jest config approach
# Recommendation: Use aplio-modern-1/jest.config.js with @swc/jest
```

**STEP 2: Validate Test Environment**
```bash
# Verify all test files exist
find test/unit-tests/task-1-3/T-1.3.3 -name "*.test.*" -type f | wc -l
# Expected: 16 test files

# Check dependencies
npm list @testing-library/react @testing-library/jest-dom jest
```

#### PHASE A: INDIVIDUAL HOOK TESTING EXECUTION

**DIRECTIVE: Execute each hook test file individually to isolate any issues**

**TEST EXECUTION COMMANDS:**
```bash
# Execute Phase A tests individually
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useTabState-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useTheme-functional.test.ts  
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useViewportAnimation-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useFilterState-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useCounterAnimation-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/useAsyncData-functional.test.ts

# Execute all Phase A tests together
npm test test/unit-tests/task-1-3/T-1.3.3/hooks/
```

**VALIDATION CRITERIA:**
- All hook state management tests pass
- Mock implementations work correctly
- No memory leaks detected
- Error handling scenarios validate properly

**EXPECTED TEST COVERAGE:**
- useTabState: Tab switching, callbacks, persistence, edge cases
- useTheme: Theme switching, system detection, SSR considerations
- useViewportAnimation: IntersectionObserver, viewport detection, animation triggers
- useFilterState: Large datasets, filter performance, edge cases
- useCounterAnimation: Animation timing, number range handling
- useAsyncData: Promise handling, loading states, error scenarios

#### PHASE B: UTILITY TESTING EXECUTION

**DIRECTIVE: Execute utility tests to validate helper function reliability**

**TEST EXECUTION COMMANDS:**
```bash
# Execute Phase B tests individually
npm test test/unit-tests/task-1-3/T-1.3.3/utils/markdown-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/utils/animationVariants-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/utils/cn-functional.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/utils/formatters-functional.test.ts

# Execute all Phase B tests together  
npm test test/unit-tests/task-1-3/T-1.3.3/utils/
```

**VALIDATION CRITERIA:**
- File system operations properly mocked
- Class name merging handles edge cases
- Animation variants structure validated
- Formatting functions handle various input types

**EXPECTED TEST COVERAGE:**
- Markdown: File processing, metadata extraction, error handling
- AnimationVariants: Structure validation, Framer Motion compatibility
- CN Utility: Class merging, conditional logic, Tailwind conflicts
- Formatters: Date formatting, number formatting, string utilities

#### PHASE C: INTEGRATION TESTING EXECUTION

**DIRECTIVE: Execute integration tests to validate component interactions**

**TEST EXECUTION COMMANDS:**
```bash
# Execute Phase C tests individually
npm test test/unit-tests/task-1-3/T-1.3.3/integration/hook-component-integration.test.tsx
npm test test/unit-tests/task-1-3/T-1.3.3/integration/utility-component-integration.test.tsx

# Execute all Phase C tests together
npm test test/unit-tests/task-1-3/T-1.3.3/integration/
```

**VALIDATION CRITERIA:**
- Hook-component interactions work correctly
- Multiple hooks integrate without conflicts
- Utility-component integration functions properly
- Real-world usage scenarios validate

**EXPECTED TEST COVERAGE:**
- Hook-Component: useTabState+TabPanel, useFilterState+FilterableList, useTheme+ThemeToggle
- Utility-Component: cn+styled components, theme+styling, animationVariants+Framer Motion
- Complex Scenarios: Multiple hooks, state sharing, error boundaries

#### PHASE D: PERFORMANCE TESTING EXECUTION

**DIRECTIVE: Execute performance tests to validate optimization and benchmarks**

**TEST EXECUTION COMMANDS:**
```bash
# Execute Phase D tests individually
npm test test/unit-tests/task-1-3/T-1.3.3/performance/hook-performance.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/performance/utility-performance.test.ts

# Execute all Phase D tests together
npm test test/unit-tests/task-1-3/T-1.3.3/performance/
```

**VALIDATION CRITERIA:**
- Performance benchmarks met
- Memory leak detection working
- Large dataset handling efficient
- Animation performance acceptable

**EXPECTED PERFORMANCE BENCHMARKS:**
- Hook initialization: <15ms per hook
- Large dataset filtering: <200ms for 10k items
- Class name merging: <100ms for 1000 classes
- Memory usage: <10MB increase during testing

#### PHASE E: ERROR HANDLING TESTING EXECUTION

**DIRECTIVE: Execute error handling tests to validate graceful degradation**

**TEST EXECUTION COMMANDS:**
```bash
# Execute Phase E tests individually  
npm test test/unit-tests/task-1-3/T-1.3.3/error-handling/hook-error-handling.test.ts
npm test test/unit-tests/task-1-3/T-1.3.3/error-handling/utility-error-handling.test.ts

# Execute all Phase E tests together
npm test test/unit-tests/task-1-3/T-1.3.3/error-handling/
```

**VALIDATION CRITERIA:**
- Error scenarios handled gracefully
- Invalid inputs don't crash applications
- Network failures handled appropriately
- Recovery mechanisms function correctly

**EXPECTED ERROR HANDLING COVERAGE:**
- Invalid inputs (null, undefined, malformed data)
- Network failures and timeouts
- File system errors
- Browser API unavailability
- Memory pressure scenarios
- Security validation (prototype pollution, XSS)

### COMPREHENSIVE EXECUTION VALIDATION

**FINAL VALIDATION COMMANDS:**
```bash
# Execute entire test suite
npm test test/unit-tests/task-1-3/T-1.3.3/

# Generate coverage report
npm test -- --coverage test/unit-tests/task-1-3/T-1.3.3/

# Performance summary
npm test -- --verbose test/unit-tests/task-1-3/T-1.3.3/performance/
```

**SUCCESS CRITERIA FOR T-1.3.3 COMPLETION:**
1. **All 16 test files execute successfully** ✅
2. **95%+ test coverage achieved** ✅ 
3. **No critical performance issues identified** ✅
4. **Error handling validates graceful degradation** ✅
5. **Integration tests confirm component interactions** ✅

**TROUBLESHOOTING DIRECTIVES:**

**If Jest Configuration Fails:**
1. Remove root jest.config.js temporarily
2. Use only aplio-modern-1/jest.config.js
3. Install missing dependencies: `npm install --save-dev ts-jest @types/jest`

**If Mock Failures Occur:**
1. Verify next-themes mock in each test file
2. Check framer-motion mock implementations
3. Validate fs and gray-matter mocks

**If Performance Tests Fail:**
1. Check if performance.now() is available
2. Verify memory measurement APIs
3. Adjust performance thresholds if needed

**If Integration Tests Fail:**
1. Verify React Testing Library setup
2. Check component import paths
3. Validate mock implementations for component dependencies

### POST-EXECUTION TASKS

**AFTER SUCCESSFUL TEST EXECUTION:**
1. **Generate comprehensive test report**
2. **Document any discovered issues**
3. **Validate 95% coverage achievement**
4. **Mark T-1.3.3 as COMPLETE**
5. **Update project status documentation**

**CRITICAL SUCCESS METRICS:**
- Test Execution Rate: 100% (16/16 test files executed)
- Test Pass Rate: Target >95% (acceptable: some performance tests may need tuning)
- Coverage Achievement: 95%+ comprehensive testing coverage
- Performance Validation: All benchmarks within acceptable ranges
- Error Handling Validation: Graceful degradation confirmed

## Project Reference Guide
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