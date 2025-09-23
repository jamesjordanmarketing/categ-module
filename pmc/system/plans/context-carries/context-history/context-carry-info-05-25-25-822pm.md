# Development Context & Operational Priorities
**Date:** 2025-05-25 20:22 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

**CRITICAL TESTING INFRASTRUCTURE FIXES REQUIRED**

#### What is being worked on
Comprehensive fixes for the T-1.1.3 Server Component Implementation testing infrastructure that has fundamental flaws in its architecture, configuration, and tool integration.

#### Why it is being worked on
The current testing implementation has multiple critical failures that prevent reliable automated testing:
1. **JSX Coverage Collection Failure**: Babel configuration issues prevent code coverage analysis
2. **Non-existent LLM Vision Commands**: Documented npm scripts don't exist in package.json
3. **Broken Tool Integration**: Vision analysis tools exist but lack proper integration points
4. **Flawed Testing Logic**: Testing approach has architectural problems requiring complete redesign

#### Current state of implementation
- **Phase 1-5 Testing**: Completed but with significant infrastructure debt
- **Coverage Collection**: FAILED due to JSX parsing errors
- **Vision Analysis**: Partially working but missing proper CLI integration
- **Test Server**: Functional on port 3333
- **Component Scaffolds**: Generated successfully but tooling around them is broken

#### Critical context needed for continuation
The testing system requires complete infrastructure overhaul before any further testing can be conducted. This is NOT a simple configuration fix - it requires systematic rebuilding of the testing architecture.

---
## CURRENT ACTION
The first step in fixing this issues is splitting them each into their own detailed specification file.  

Read this entire file first so you understand the entirety of each spec that needs to be written. You can read the associated pseudo-code in the file as well as ingest the totality of the files referred to and then enhance these specs so the next coding agent knows exactly what to do. 

Your job is to:

1. Put the #### 1. JSX Coverage Collection Failure spec here:
pmc\context-ai\chat-contexts-log\pmct\phase-2-test-system-jsx-coverage.md

2. Put the #### 2. Non-existent LLM Vision Commands spec here:
pmc\context-ai\chat-contexts-log\pmct\phase-2-test-system-missing-commands.md

3. Put the #### 3. Broken Tool Integration Architecture spec here:
pmc\context-ai\chat-contexts-log\pmct\phase-2-test-system-broken-integration.md

Include the: 
#### Step 4: Build Unified Testing Framework (Priority: MEDIUM)
1. **Create `TestingFramework.js`** main orchestrator class
2. **Implement individual phase classes** in 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\`
3. **Create integration tests** to validate phase coordination
4. **Update main testing entry point** to use new framework
in the Broken Tool Integration Architecture. Organize it so it is the last step of the specification instruction.

4. Put the #### 4. CRITICAL DEFECT: FALSE POSITIVE TESTING LOGIC spec here:
pmc\context-ai\chat-contexts-log\pmct\phase-2-test-system-false-positive.md

I have found that pseudocode or snippets in our specifications are very problematic because they often have no context and no direct instruction on their use. If you are going to include new pseudocode or add pseudocode examples in this spec, make sure you tell the coding agent EXACTLY why, when, and how to use each instance of the code examples.

For each specification include the documentation steps that are needed to update the tutorials here: pmc\docs\stm-5a\testing-system-operations-tutorial-v6.md (this is NOT updating the tutorial. It is documenting what needs to be changed in the tutorial after each specification is executed. Read it first so you understand it's current state.)

Include a Validation Testing step for each specification in the spec file.

Remember you are NOT to code or implement these fixes in any way. Your ONLY job is to create the comprehensive specs.

## DETAILED FIX SPECIFICATION

### ROOT CAUSE ANALYSIS

#### 1. JSX Coverage Collection Failure
**Root Cause**: Missing Babel configuration for JSX parsing in coverage collection tools
**Affected Files**:
- `package.json` (missing babel presets for coverage)
- `babel.config.js` (missing or incorrectly configured)
- `jest.config.js` (improper transform configuration)
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\coverage-collection.js` (uses incorrect parsing approach)

**Technical Details**: The coverage collection tool attempts to parse JSX files without proper Babel preprocessing, resulting in syntax errors when encountering JSX syntax.

#### 2. Non-existent LLM Vision Commands
**Root Cause**: Documentation references npm scripts that were never implemented
**Affected Files**:
- `aplio-modern-1\package.json` (missing scripts: `test:vision:analyze`, `test:vision:batch`, `test:vision:report`)
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\vision\llm-vision-analyzer.js` (exists but no CLI wrapper)
- Documentation files referencing non-existent commands

**Technical Details**: The vision analysis tools exist as standalone modules but lack proper npm script integration and CLI interfaces.

#### 3. Broken Tool Integration Architecture
**Root Cause**: Tools were developed in isolation without proper integration framework
**Affected Files**:
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\utils\vision\` (multiple standalone tools without coordination)
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts\` (missing orchestration scripts)
- Missing integration layer between tools

#### 4. CRITICAL DEFECT: FALSE POSITIVE TESTING LOGIC
**Root Cause**: Fundamentally flawed test validation logic that reports infrastructure success as component validation success
**Affected Files**:
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\vision-test-suite.js` (Line 409 contains critical flaw)
- All test reports generated by this logic
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\comprehensive-testing-report.md` (contains false positive results)

**Technical Details**: The testing logic only validates:
1. No errors occurred during LLM Vision API execution
2. A component classification was returned from the API

**BUT COMPLETELY IGNORES** whether `analysisResult.validation.passed` is true or false.

**Evidence of False Positive**:
- **DashboardStats Component Analysis**:
  - `analysisResult.componentClassification`: ✅ "Server Component: DashboardStats" (exists)
  - `analysisResult.validation.passed`: ❌ **false** (SHOULD FAIL THE TEST)
  - `analysisResult.validation.confidence`: 0.95 (high confidence in the FAILURE)
  - **Critical Issues Found**: React rendering errors, Promise objects being rendered
  - **Test Result**: ❌ **INCORRECTLY MARKED AS PASSED**

**Impact**: This creates a systematic false positive where broken components with serious rendering issues are reported as successful, completely undermining the validity of all test results.

---

### DETAILED SOLUTION ANALYSIS

#### Solution 1: Fix JSX Coverage Collection
**Approach**: Implement proper Babel configuration for JSX parsing in coverage tools

**Required Changes**:
1. **Create/Update `babel.config.js`**:
   ```javascript
   // USAGE: This config is used by Jest and coverage tools to transform JSX
   // WHEN: Automatically loaded during test runs and coverage collection
   // HOW: Place in project root, Jest will auto-detect and use
   module.exports = {
     presets: [
       ['@babel/preset-env', { targets: { node: 'current' } }],
       ['@babel/preset-react', { runtime: 'automatic' }],
       '@babel/preset-typescript'
     ],
     plugins: [
       '@babel/plugin-transform-runtime'
     ]
   };
   ```

2. **Update `package.json` dependencies**:
   ```json
   // USAGE: These dependencies enable JSX parsing in testing tools
   // WHEN: Install these before running any coverage collection
   // HOW: Run npm install after adding these to devDependencies
   "devDependencies": {
     "@babel/core": "^7.23.0",
     "@babel/preset-env": "^7.23.0", 
     "@babel/preset-react": "^7.22.0",
     "@babel/preset-typescript": "^7.23.0",
     "@babel/plugin-transform-runtime": "^7.23.0",
     "babel-jest": "^29.7.0"
   }
   ```

3. **Fix `jest.config.js`**:
   ```javascript
   // USAGE: Configures Jest to properly handle JSX files
   // WHEN: Used automatically by Jest during test execution
   // HOW: Jest reads this config file automatically from project root
   module.exports = {
     testEnvironment: 'jsdom',
     transform: {
       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
     },
     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
     collectCoverageFrom: [
       'src/**/*.{js,jsx,ts,tsx}',
       '!src/**/*.d.ts',
     ],
   };
   ```

4. **Rewrite 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\coverage-collection.js`**:
   ```javascript
   // USAGE: This script collects coverage data from JSX components
   // WHEN: Called during Phase 5 of testing process
   // HOW: Run via npm script or direct node execution after Babel setup
   const babel = require('@babel/core');
   const fs = require('fs');
   
   function parseJSXFile(filePath) {
     // Transform JSX to regular JS before analysis
     const code = fs.readFileSync(filePath, 'utf8');
     const result = babel.transformSync(code, {
       presets: ['@babel/preset-react', '@babel/preset-typescript']
     });
     return result.code;
   }
   ```

#### Solution 2: Fix Critical False Positive Testing Logic
**Approach**: Completely rewrite test validation logic to properly check component quality instead of just API functionality

**Required Changes**:
1. **Fix 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\vision-test-suite.js` Line 409**:
   ```javascript
   // USAGE: This is the CORRECTED test validation logic
   // WHEN: Used during LLM Vision Analysis to determine if component passed
   // HOW: Replace existing flawed logic with proper validation checks
   
   // ❌ CURRENT FLAWED LOGIC (Line 409):
   // const testPassed = analysisResult && analysisResult.componentClassification;
   
   // ✅ CORRECTED LOGIC:
   const testPassed = analysisResult && 
                     analysisResult.componentClassification && 
                     analysisResult.validation && 
                     analysisResult.validation.passed === true;
   
   // Additional validation for confidence threshold
   const confidenceThreshold = 0.8;
   const meetsConfidenceRequirement = analysisResult.validation.confidence >= confidenceThreshold;
   
   const finalTestResult = testPassed && meetsConfidenceRequirement;
   ```

2. **Create separate infrastructure vs. component validation**:
   ```javascript
   // USAGE: Separates API functionality tests from component quality tests
   // WHEN: Use during Phase 4 to distinguish between different types of failures
   // HOW: Run both test types and report results separately
   
   function validateInfrastructure(analysisResult) {
     // USAGE: Tests if the LLM Vision API and tools are working
     // WHEN: Use to verify testing infrastructure is functional
     // HOW: Returns true if API calls succeed and return data
     return analysisResult && analysisResult.componentClassification;
   }
   
   function validateComponentQuality(analysisResult) {
     // USAGE: Tests if the component actually rendered correctly
     // WHEN: Use to verify component implementation quality
     // HOW: Returns true only if validation.passed is true
     return analysisResult && 
            analysisResult.validation && 
            analysisResult.validation.passed === true;
   }
   ```

3. **Update test reporting to show actual failures**:
   ```javascript
   // USAGE: Provides accurate test reporting that shows real component issues
   // WHEN: Used in test report generation to show true component status
   // HOW: Reports infrastructure success separately from component validation
   
   const testResults = {
     infrastructureWorking: validateInfrastructure(analysisResult),
     componentValid: validateComponentQuality(analysisResult),
     analysisDetails: {
       classification: analysisResult.componentClassification,
       validationPassed: analysisResult.validation.passed,
       confidence: analysisResult.validation.confidence,
       issues: analysisResult.validation.issues || []
     }
   };
   ```

4. **Add validation for common rendering errors**:
   ```javascript
   // USAGE: Detects specific types of React rendering errors
   // WHEN: Use during component analysis to catch common problems
   // HOW: Analyzes validation results for specific error patterns
   
   function detectRenderingErrors(analysisResult) {
     const commonErrors = [
       'Promise objects being rendered',
       'React rendering errors', 
       'Hydration mismatches',
       'Undefined prop errors',
       'Component lifecycle errors'
     ];
     
     const issues = analysisResult.validation.issues || [];
     return issues.filter(issue => 
       commonErrors.some(error => issue.toLowerCase().includes(error.toLowerCase()))
     );
   }
   ```

#### Solution 3: Implement Missing LLM Vision Commands
**Approach**: Create proper npm script integration and CLI wrappers for existing vision tools

**Required Changes**:
1. **Add to `package.json` scripts section**:
   ```json
   // USAGE: These scripts provide command-line access to vision analysis tools
   // WHEN: Use during Phase 4 (LLM Vision Analysis) of testing process
   // HOW: Run via npm run [script-name] [arguments]
   "scripts": {
     "test:vision:analyze": "node test/scripts/vision-cli.js analyze",
     "test:vision:batch": "node test/scripts/vision-cli.js batch", 
     "test:vision:report": "node test/scripts/vision-cli.js report",
     "test:vision:single": "node test/scripts/vision-cli.js single"
   }
   ```

2. **Create 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts/vision-cli.js`**:
   ```javascript
   // USAGE: Command-line interface for all vision analysis operations
   // WHEN: Called by npm scripts or direct node execution
   // HOW: Parses command line arguments and delegates to appropriate vision tools
   const { LLMVisionAnalyzer } = require('../utils/vision/llm-vision-analyzer');
   
   async function main() {
     const command = process.argv[2];
     const args = process.argv.slice(3);
     
     switch(command) {
       case 'analyze':
         // USAGE: Analyzes single screenshot with LLM vision
         // WHEN: Use for analyzing specific component screenshots
         // HOW: npm run test:vision:analyze [image-path]
         await analyzeSingle(args[0]);
         break;
       case 'batch':
         // USAGE: Processes all screenshots in test directory
         // WHEN: Use during Phase 4 automated testing
         // HOW: npm run test:vision:batch
         await batchAnalyze();
         break;
       case 'report':
         // USAGE: Generates comprehensive vision analysis report
         // WHEN: Use for final reporting in Phase 5
         // HOW: npm run test:vision:report
         await generateReport();
         break;
     }
   }
   ```

3. **Create 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts\vision-orchestrator.js`**:
   ```javascript
   // USAGE: Coordinates multiple vision analysis tools for comprehensive testing
   // WHEN: Used during automated testing phases to run all vision analyses
   // HOW: Called by main testing scripts to orchestrate vision workflow
   class VisionOrchestrator {
     async runFullAnalysis(screenshotDir) {
       // Coordinates screenshot capture, analysis, and reporting
       const results = await this.batchAnalyze(screenshotDir);
       const report = await this.generateReport(results);
       return { results, report };
     }
   }
   ```

#### Solution 4: Fix Tool Integration Architecture
**Approach**: Create unified testing framework with proper tool coordination

**Required Changes**:
1. **Create 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\TestingFramework.js`**:
   ```javascript
   // USAGE: Main orchestrator for all testing phases
   // WHEN: Entry point for running complete testing suites
   // HOW: Instantiate and call runPhase() methods in sequence
   class TestingFramework {
     constructor(config) {
       this.phases = [
         new UnitTestingPhase(),
         new ComponentDiscoveryPhase(), 
         new VisualTestingPhase(),
         new LLMVisionPhase(),
         new ValidationPhase()
       ];
     }
     
     async runAllPhases() {
       // USAGE: Executes all 5 testing phases in sequence
       // WHEN: Use for complete autonomous testing
       // HOW: await framework.runAllPhases()
       for (const phase of this.phases) {
         await phase.execute();
       }
     }
   }
   ```

2. **Create individual phase classes in 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\`**:
   - `UnitTestingPhase.js` 
   - `ComponentDiscoveryPhase.js`
   - `VisualTestingPhase.js` 
   - `LLMVisionPhase.js`
   - `ValidationPhase.js`

   ```javascript
   // USAGE EXAMPLE for LLMVisionPhase.js:
   // This class encapsulates all LLM vision analysis logic
   // WHEN: Called during Phase 4 of testing framework
   // HOW: Automatically instantiated and executed by TestingFramework
   class LLMVisionPhase {
     async execute() {
       const screenshots = await this.discoverScreenshots();
       const analyses = await this.analyzeWithLLM(screenshots);
       const validation = await this.validateResults(analyses);
       return { screenshots, analyses, validation };
     }
   }
   ```

---

### STEP-BY-STEP SOLUTION PROCESS

#### Step 1: Fix Critical False Positive Testing Logic (Priority: CRITICAL - MUST BE DONE FIRST)
1. **IMMEDIATELY fix Line 409 in 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\vision-test-suite.js`**:
   ```bash
   # USAGE: Locate and fix the false positive logic immediately
   # WHEN: Before any other testing work can be trusted
   # HOW: Edit the file and replace the flawed validation logic
   ```

2. **Replace flawed logic with proper validation**:
   ```javascript
   // FIND THIS LINE (approximately line 409):
   // const testPassed = analysisResult && analysisResult.componentClassification;
   
   // REPLACE WITH:
   const testPassed = analysisResult && 
                     analysisResult.componentClassification && 
                     analysisResult.validation && 
                     analysisResult.validation.passed === true;
   ```

3. **Add infrastructure vs. component validation separation**:
   ```bash
   # USAGE: Create separate validation functions to distinguish test types
   # WHEN: Immediately after fixing the main logic flaw
   # HOW: Add the validation functions shown in Solution 2 above
   ```

4. **Rerun ALL existing tests with corrected logic**:
   ```bash
   # USAGE: Validates which components actually pass vs. fail with correct logic
   # WHEN: After implementing the corrected validation logic
   # HOW: Should reveal that DashboardStats and potentially other components FAIL
   npm run test:vision:batch
   ```

5. **Generate corrected test report**:
   ```bash
   # USAGE: Creates accurate test report showing real component validation results
   # WHEN: After rerunning tests with corrected logic
   # HOW: Will show true pass/fail status instead of false positives
   npm run test:vision:report
   ```

#### Step 2: Fix Babel Configuration (Priority: CRITICAL)
1. **Install required Babel packages**:
   ```bash
   # USAGE: Installs Babel packages needed for JSX parsing
   # WHEN: Run this first before any other fixes
   # HOW: Execute in project root directory
   npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-jest
   ```

2. **Create `babel.config.js`** in ''C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\' with exact configuration shown above
3. **Update `'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\jest.config.js`** to use babel-jest transformer
4. **Test configuration**:
   ```bash
   # USAGE: Validates that Babel can now parse JSX files
   # WHEN: After completing Babel setup
   # HOW: Should run without JSX syntax errors
   npm run test
   ```

#### Step 3: Implement Vision CLI Integration (Priority: HIGH)
1. **Create directory structure**:
   ```
   test/
   ├── scripts/
   │   ├── vision-cli.js
   │   └── vision-orchestrator.js
   └── framework/
       └── phases/
           ├── LLMVisionPhase.js
           └── [other phase files]
   ```

2. **Implement 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts\vision-cli.js`** with all four commands (analyze, batch, report, single)
3. **Add npm scripts** to package.json exactly as specified above
4. **Test each command**:
   ```bash
   # USAGE: Validates that each vision command works correctly
   # WHEN: After implementing all CLI scripts
   # HOW: Test each command individually before integration
   npm run test:vision:analyze test/screenshots/sample.png
   npm run test:vision:batch
   npm run test:vision:report
   ```

#### Step 4: Build Unified Testing Framework (Priority: MEDIUM)
1. **Create 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\TestingFramework.js`** main orchestrator class
2. **Implement individual phase classes** in 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\`
3. **Create integration tests** to validate phase coordination
4. **Update main testing entry point** to use new framework

#### Step 5: Update Documentation (Priority: LOW)
1. **Update all README files** to reference correct npm scripts
2. **Remove references** to non-existent commands
3. **Add usage examples** for each new script and tool
4. **Create troubleshooting guide** for common configuration issues

#### Step 6: Validation Testing (Priority: CRITICAL)
1. **Run complete test suite** using new framework
2. **Validate coverage collection** works without JSX errors
3. **Confirm vision analysis** integrates properly with CLI
4. **Generate test report** to verify all fixes are working

---

### FILES REQUIRING UPDATES

#### Critical False Positive Fix (CRITICAL - HIGHEST PRIORITY)
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\vision-test-suite.js` - FIX Line 409 false positive logic immediately
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\comprehensive-testing-report.md` - REGENERATE with corrected results
- All existing test result files - REVALIDATE with corrected logic

#### Configuration Files (CRITICAL)
- `'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\babel.config.js` - CREATE with JSX parsing configuration
- `'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\jest.config.js` - UPDATE transformer configuration  
- `'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\package.json` - ADD babel dependencies and vision npm scripts

#### Testing Infrastructure (HIGH PRIORITY)
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts\vision-cli.js` - CREATE CLI interface for vision tools
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\scripts\vision-orchestrator.js` - CREATE coordination layer
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\coverage-collection.js` - REWRITE to use Babel preprocessing
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\TestingFramework.js` - CREATE main orchestrator

#### Phase Implementation (MEDIUM PRIORITY)  
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\UnitTestingPhase.js` - CREATE
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\ComponentDiscoveryPhase.js` - CREATE
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\VisualTestingPhase.js` - CREATE
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\LLMVisionPhase.js` - CREATE  
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\framework\phases\ValidationPhase.js` - CREATE

#### Documentation (LOW PRIORITY)
- `README.md` - UPDATE with correct npm scripts
- 'C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-27-a1-c\aplio-modern-1\test\README.md` - CREATE usage documentation
- Vision tool documentation files - UPDATE command references

#### Cleanup Required (put this information in the proper spec file. Do NOT clean it up no!)
- Remove any remaining references to non-existent npm scripts
- Delete obsolete testing files that are no longer needed
- Consolidate duplicate testing logic into unified framework


## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Aplio Design System Modernization Project

#### Project Overview
This project aims to transform the existing JavaScript-based Aplio theme into a modern TypeScript-powered Next.js 14 platform. The project specifically focuses on migrating the Home 4 template (https://js-aplio-6.vercel.app/home-4) as the flagship demonstration while preserving Aplio's premium design aesthetics from the existing design system in `\aplio-legacy\`.

#### Key Documents
1. Seed Story: `pmc\product\00-aplio-mod-1-seed-story.md`
2. Project Overview: `pmc\product\00-aplio-mod-1-seed-narrative.md`
3. Raw Data: `pmc\product\_seeds\00-narrative-raw_data-ts-14-v3.md`

#### Project Objectives

##### Primary Goals
1. Migrate Home 4 template to Next.js 14 App Router architecture
2. Preserve exact design elements from `\aplio-legacy\`
3. Implement TypeScript with full type safety
4. Maintain premium design quality and animations

##### Technical Requirements
1. Next.js 14 App Router implementation
2. Complete TypeScript migration
3. Modern component architecture
4. Performance optimization

##### Design Requirements
1. Exact preservation of design elements from `\aplio-legacy\`
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
`pmc\bin\aplio-agent-cli.js`

The code for most PMC commands are contained within:
- The original context manager script: `pmc\system\management\context-manager.js`
- The next context manager script: `pmc\system\management\context-manager-v2.js` (created when the original got too large)

Here are some important PMC commands:

##### Start Task
```bash
node pmc\bin\aplio-agent-cli.js start-task "T-EXAMPLE.1.1"
```

##### Add Structured Task Approaches
```bash
node pmc\bin\aplio-agent-cli.js task-approach
```

##### Update Element Status
```bash
node pmc\bin\aplio-agent-cli.js update-element-status "T-EXAMPLE.1.2:ELE-1" "Complete"
```

##### Task Completion
```bash
node pmc\bin\aplio-agent-cli.js complete-task "T-EXAMPLE.1.3"
```

##### Context Carryover for New Chat Windows
```bash
node system\management\carryover-command.js
```

#### Project Structure
```
aplio-legacy\ (legacy system)
aplio-modern-1\ (new system)
pmc\ (PMC system)
├── bin\
├── core\
├── system\
│   ├── management\
│   └── templates\
└── product\
```

### Additional Resources

#### Key URLs

#### Important Directories