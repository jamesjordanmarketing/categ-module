# Add Test-Approach Command to Context-Manager-V3 Specification

**Date:** 2025-06-10  
**Purpose:** Add a new `test-approach` command to `pmc/system/management/context-manager-v3.js` that operates exactly like the existing `task-approach` command but for test files  
**Target File:** `pmc/system/management/context-manager-v3.js`  
**Command Name:** `test-approach`  
**Priority:** HIGH - Critical system command that cannot break existing functionality

---

## Executive Summary

The `test-approach` command will be operationally identical to the existing `task-approach` command but will:
1. **Modify `active-task-unit-tests-2.md`** instead of `active-task.md`
2. **Replace the `## Test Approach` section** instead of `## Task Approach`
3. **Use `current-test-approach.md`** as the source instead of `current-task-approach.md`
4. **Change `Overview` to `Test Approach Overview`** in the copied content for proper formatting alignment

This specification provides detailed implementation steps to safely add this functionality to `context-manager-v3.js` without breaking existing commands or shared functions.

---

## Current Implementation Analysis

### Existing Task-Approach Command (Reference Implementation)

**Location:** `pmc/system/management/context-manager-v2.js`  
**Function:** `updateTaskApproach(confidence)` (Lines 382-550)

**Key Operations:**
1. Reads `current-task-approach.md`
2. Extracts confidence level and validates it (1-10)
3. Removes instruction sections from content
4. Extracts and validates section lengths for Overview, Strategy, and Considerations
5. Archives current approach to timestamped history file
6. Formats new approach with timestamp and confidence
7. Replaces `## Task Approach` section in `active-task.md`
8. Maintains approach history (keeps 2 most recent)

**Format Used in active-task.md:**
```
## Task Approach

### Current Approach (Added: MM/DD/YYYY, HH:MM:SS AM/PM, Confidence: X/10)

Overview:
[Content from Overview section]

Implementation Strategy:
[Content from Implementation Strategy section]

Key Considerations:
[Content from Key Considerations section]

### Approach History
[Previous approaches maintained]
```

### Target Test File Structure Analysis

**File:** `pmc/core/active-task-unit-tests-2.md`  
**Target Section:** `## Test Approach` (location varies - found dynamically)

**Current Format:**
```
## Test Approach
<!-- After reading the test requirements, describe your execution approach here -->
(To be filled in by the testing agent)
```

**Source File Structure:**
**File:** `pmc/system/plans/task-approach/current-test-approach.md`

**Content Sections:**
- `## Overview` (needs to become "Test Approach Overview")
- `## Testing Strategy`
- `## Key Considerations`
- `## Confidence Level`

### Context-Manager-V3.js Structure Analysis

**Current Commands Supported:**
1. `updatePhaseStage()` - Updates phase status in progress-phase.md
2. `testPromptBuild()` - Generate customized test prompts

**File Structure:**
- Lines 1-45: Imports, PROJECT_ROOT setup, and PATHS configuration
- Lines 46-330: Data extraction functions for test prompt building
- Lines 331-457: testPromptBuild function implementation
- Lines 458-575: updatePhaseStage function implementation

**Import Pattern:** ES Modules with `import` statements
**Path Configuration:** Uses PATHS object for file references
**Error Handling:** try/catch blocks with detailed logging

---

## Detailed Implementation Plan

### Step 1: Update Command Documentation

**Location:** Lines 4-8 in the COMMANDS SUPPORTED section

**Action:** Add the test-approach command documentation to the header comment

```javascript
/*
 * context-manager-v3.js - Lean context management for the Project Memory Core system
 * 
 * COMMANDS SUPPORTED:
 * ------------------
 * 1. updatePhaseStage(taskId, phase, status) - Updates the phase status in progress-phase.md
 *    CLI: node bin/aplio-agent-cli.js update-phase-stage <taskId> <phase> <status>
 * 2. testPromptBuild() - Generate customized test prompts for current active task
 *    CLI: node bin/aplio-agent-cli.js test-prompt-build
 * 3. updateTestApproach(confidence) - Updates test approach in active-task-unit-tests-2.md using current-test-approach.md
 *    CLI: node bin/aplio-agent-cli.js test-approach [confidence]
 */
```

**Why:** This documents the new command in the file header following the established pattern and makes it clear what the command does and how to use it.

### Step 2: Update PATHS Configuration

**Location:** After line 42 in the PATHS object

**Action:** Add the required file paths for test-approach functionality

```javascript
const PATHS = {
  progressPhaseFile: path.join(PROJECT_ROOT, 'core', 'progress-phase.md'),
  activeTaskFile: path.join(PROJECT_ROOT, 'core', 'active-task.md'),
  testProtocolFile: path.join(PROJECT_ROOT, 'core', 'active-task-unit-tests-2.md'),
  templateFile: path.join(PROJECT_ROOT, 'system', 'templates', 'active-task-test-prompts-template.md'),
  codingPromptsDir: path.join(PROJECT_ROOT, 'system', 'coding-prompts'),
  // ADD THESE NEW PATHS:
  currentTestApproachFile: path.join(PROJECT_ROOT, 'system', 'plans', 'task-approach', 'current-test-approach.md'),
  testApproachHistoryDir: path.join(PROJECT_ROOT, 'system', 'plans', 'task-approach', 'approach-history')
};
```

**Why:** These paths provide access to the source test approach file and history directory needed for archiving previous approaches.

### Step 3: Add Utility Functions

**Location:** After line 330 (before the testPromptBuild function)

**Action:** Add helper functions needed for test-approach operation

```javascript
/**
 * Format timestamp in a human-readable format
 * USAGE: Call this function to create timestamps for test approach entries
 * WHEN: Use during test-approach command execution for dating entries
 * OUTPUT: String in format "MM/DD/YYYY, HH:MM:SS AM/PM"
 * EXAMPLE USAGE: const timestamp = formatTimestamp();
 */
function formatTimestamp(date = new Date()) {
  const options = {
    timeZone: 'America/Los_Angeles',
    hour12: true,
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  return date.toLocaleString('en-US', options);
}

/**
 * Generates a timestamp for file naming (without seconds)
 * USAGE: Call this function to create timestamps for archive filenames
 * WHEN: Use during test-approach archiving to create unique history files
 * OUTPUT: String in format "MM-DD-YY-HHmmAM/PM"
 * EXAMPLE USAGE: const fileTimestamp = generateFileTimestamp();
 */
function generateFileTimestamp() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);
  const hours = now.getHours() % 12 || 12; // 12-hour format
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const period = now.getHours() >= 12 ? 'pm' : 'am';
  
  return `${month}-${day}-${year}-${hours}${minutes}${period}`;
}

/**
 * Extracts confidence level from test approach document
 * USAGE: Call this function to get confidence level from current-test-approach.md
 * WHEN: Use during test-approach command to extract confidence rating
 * INPUT: content (string) - content of current-test-approach.md
 * OUTPUT: number (1-10) or null if not found
 * EXAMPLE USAGE: const confidence = extractTestConfidenceLevel(content);
 */
function extractTestConfidenceLevel(content) {
  const confidenceMatch = content.match(/## Confidence Level\s*\nConfidence:\s*(\d+)/);
  if (!confidenceMatch) {
    return null;
  }
  const confidence = parseInt(confidenceMatch[1], 10);
  return confidence >= 1 && confidence <= 10 ? confidence : null;
}

/**
 * Removes instruction sections from test approach document
 * USAGE: Call this function to clean up current-test-approach.md content
 * WHEN: Use during test-approach command to remove instruction headers
 * INPUT: content (string) - full content of test approach document
 * OUTPUT: String with instruction sections removed
 * EXAMPLE USAGE: const clean = removeTestInstructionsSection(content);
 */
function removeTestInstructionsSection(content) {
  // Look for the pattern starting with "====" line and ending with "===" line
  const instructionRegex = /={3,}[\s\S]*?={3,}.*(\n|$)/g;
  
  // Remove the instruction section
  const cleanedContent = content.replace(instructionRegex, '');
  
  // Additional cleanup: remove any trailing empty lines that might remain
  return cleanedContent.trim();
}

/**
 * Extracts a section from test approach markdown content
 * USAGE: Call this function to extract specific sections from current-test-approach.md
 * WHEN: Use during test-approach command to get Overview, Strategy, Considerations sections
 * INPUT: content (string), sectionName (string) - name of section to extract
 * OUTPUT: String containing section content or null if not found
 * EXAMPLE USAGE: const overview = extractTestApproachSection(content, 'Overview');
 */
function extractTestApproachSection(content, sectionName) {
  const sectionMatch = content.match(new RegExp(`## ${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`));
  return sectionMatch ? sectionMatch[1].trim() : null;
}

 /**
  * Finds a section in active-task-unit-tests-2.md content dynamically
  * USAGE: Call this function to locate sections in the test file for replacement
  * WHEN: Use during test-approach command to find the Test Approach section
  * INPUT: testContent (string), sectionTitle (string) - section to find
  * OUTPUT: Object with found status, start/end indices, and content
  * EXAMPLE USAGE: const section = findTestSection(content, 'Test Approach');
  * NOTE: This function dynamically locates sections regardless of line position
  */
 function findTestSection(testContent, sectionTitle) {
   // Create regex patterns to match both ## and ### section headers dynamically
   const subSectionRegex = new RegExp(`### ${sectionTitle}\\s*\\n([\\s\\S]*?)(?=\\n### |\\n## |$)`, 'i');
   let match = testContent.match(subSectionRegex);
   
   if (!match) {
     // If not found, try to match a ## section header
     const mainSectionRegex = new RegExp(`## ${sectionTitle}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
     match = testContent.match(mainSectionRegex);
   }
   
   if (!match) {
     return {
       found: false,
       startIndex: -1,
       endIndex: -1,
       content: ''
     };
   }
   
   const startIndex = match.index;
   const endIndex = startIndex + match[0].length;
   
   return {
     found: true,
     startIndex,
     endIndex,
     content: match[1].trim()
   };
 }
```

**Why:** These utility functions provide all the core functionality needed for test-approach operation while maintaining the same patterns as the existing task-approach command.

### Step 4: Add Main Test-Approach Function

**Location:** After the utility functions (around line 500)

**Action:** Add the main updateTestApproach function

```javascript
/**
 * Updates the test approach in active-task-unit-tests-2.md and manages test approach history
 * USAGE: Call this function to update the test approach section with content from current-test-approach.md
 * WHEN: Execute this when test-approach command is called from CLI
 * INPUT: confidence (number, optional) - confidence level 1-10 for this approach
 * OUTPUT: Promise resolving to {success: boolean, message: string}
 * EXAMPLE USAGE: const result = await updateTestApproach(8);
 */
async function updateTestApproach(confidence) {
  try {
    console.log(`Executing updateTestApproach with PROJECT_ROOT: ${PROJECT_ROOT}`);
    
    // Read the current test approach file
    const currentTestApproachPath = PATHS.currentTestApproachFile;
    console.log(`Current test approach file path: ${currentTestApproachPath}`);
    
    // Check if the file exists before reading
    if (!fs.existsSync(currentTestApproachPath)) {
      console.error(`File not found: ${currentTestApproachPath}`);
      return {
        success: false,
        message: `Current test approach file not found: ${currentTestApproachPath}`
      };
    }
    
    let currentTestApproach = await fs.promises.readFile(currentTestApproachPath, 'utf8');
    
    // Extract confidence level from the test approach file if specified
    const approachConfidence = extractTestConfidenceLevel(currentTestApproach);
    
    // Use the confidence from the approach file if available, otherwise use the provided confidence
    const finalConfidence = approachConfidence || confidence;
    
    // Only validate confidence if it's being used (either from file or parameter)
    if (finalConfidence !== undefined && finalConfidence !== null) {
      if (!Number.isInteger(finalConfidence) || finalConfidence < 1 || finalConfidence > 10) {
        return {
          success: false,
          message: 'Confidence must be an integer between 1 and 10'
        };
      }
    }
    
    // Remove the instruction section if present
    currentTestApproach = removeTestInstructionsSection(currentTestApproach);
    
    // Try to extract taskId if available (for archiving purposes), but don't require it
    let taskId = "current-test";
    try {
      // Read active task file to try to get task ID
      const activeTaskContent = await fs.promises.readFile(PATHS.activeTaskFile, 'utf8');
      const taskInfoMatch = activeTaskContent.match(/## Task Information[\\s\\S]*?Task ID:\\s*([^\\n]+)/);
      if (taskInfoMatch && taskInfoMatch[1]) {
        taskId = taskInfoMatch[1].trim();
        console.log(`Extracted task ID from active-task.md: ${taskId}`);
      }
    } catch (readError) {
      console.log("Could not read active-task.md to extract task ID, using generic name");
    }
    
    // Archive current test approach - ensure directory exists
    const historyDir = PATHS.testApproachHistoryDir;
    if (!fs.existsSync(historyDir)) {
      console.log(`Creating test approach history directory: ${historyDir}`);
      await fs.promises.mkdir(historyDir, { recursive: true });
    }
    
    // Generate a timestamp for the filename
    const fileTimestamp = generateFileTimestamp();
    const historyPath = path.join(historyDir, `test-approach-${taskId}-${fileTimestamp}.md`);
    await fs.promises.writeFile(historyPath, currentTestApproach);
    console.log(`Archived test approach to: ${historyPath}`);
    
    // Read active task test file
    const activeTaskTestPath = PATHS.testProtocolFile;
    if (!fs.existsSync(activeTaskTestPath)) {
      console.error(`Active task test file not found: ${activeTaskTestPath}`);
      return {
        success: false,
        message: `Active task test file not found: ${activeTaskTestPath}`
      };
    }
    
    const activeTaskTestContent = await fs.promises.readFile(activeTaskTestPath, 'utf8');
    
    // Extract sections from current test approach
    const sections = {
      overview: extractTestApproachSection(currentTestApproach, 'Overview'),
      strategy: extractTestApproachSection(currentTestApproach, 'Testing Strategy'),
      considerations: extractTestApproachSection(currentTestApproach, 'Key Considerations')
    };
    
    // Format new test approach content (note: change "Overview" to "Test Approach Overview")
    const confidenceStr = finalConfidence ? `, Confidence: ${finalConfidence}/10` : '';
    const newTestApproach = `### Current Test Approach (Added: ${formatTimestamp()}${confidenceStr})

Test Approach Overview:
${sections.overview || 'No overview provided'}

Testing Strategy:
${sections.strategy || 'No strategy provided'}

Key Considerations:
${sections.considerations || 'No considerations provided'}`;
    
         // Find or create Test Approach section (dynamically located, not line-dependent)
     let updatedContent;
     if (activeTaskTestContent.includes('## Test Approach')) {
       // Extract existing approaches using dynamic regex matching
       const approachSection = activeTaskTestContent.match(/## Test Approach\\s*([\\s\\S]*?)(?=\\n##|$)/);
       if (!approachSection) {
         return {
           success: false,
           message: 'Failed to locate Test Approach section'
         };
       }
      
      // Get existing approaches
      const existingApproaches = approachSection[1].split(/(?=### Current Test Approach)/).slice(1);
      
      // Keep only the 2 most recent approaches for history
      const historicalApproaches = existingApproaches.slice(0, 2).join('\\n\\n');
      
      // Replace entire Test Approach section
      updatedContent = activeTaskTestContent.replace(
        /## Test Approach[\\s\\S]*?(?=\\n##|$)/,
        `## Test Approach\\n\\n${newTestApproach}\\n\\n### Test Approach History\\n${historicalApproaches}`
      );
    } else {
      // Create new Test Approach section (insert after existing sections)
      // Look for a good insertion point - typically after the Fix-Test-Analyze section
      const insertionMatch = activeTaskTestContent.match(/(## Fix-Test-Analyze Protocol[\\s\\S]*?)(?=\\n##|$)/);
      if (insertionMatch) {
        updatedContent = activeTaskTestContent.replace(
          insertionMatch[0],
          `${insertionMatch[0]}\\n\\n## Test Approach\\n\\n${newTestApproach}`
        );
      } else {
        // Fallback: insert at the end
        updatedContent = activeTaskTestContent + `\\n\\n## Test Approach\\n\\n${newTestApproach}`;
      }
    }
    
    // Write updated content back to active-task-unit-tests-2.md
    await fs.promises.writeFile(activeTaskTestPath, updatedContent);
    
    return {
      success: true,
      message: `Test approach updated successfully${taskId !== "current-test" ? ` for ${taskId}` : ''}${finalConfidence ? ` with confidence level ${finalConfidence}` : ''}`
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}
```

**Why:** This function provides the core test-approach functionality, mirroring the task-approach command but operating on test files. It includes proper error handling, archiving, and maintains the same format patterns.

### Step 5: Export the New Function

**Location:** At the end of the file (around line 575)

**Action:** Add the export statement for the new function

```javascript
// Export the new test-approach function
export { updateTestApproach };
```

**Why:** This makes the function available for import by the CLI interface, following the same pattern as other exported functions.

### Step 6: Update CLI Integration

**Location:** `pmc/bin/aplio-agent-cli.js`

**Action:** Add the test-approach command case and import

**Import Addition (around line 10):**
```javascript
import { updateTestApproach } from '../system/management/context-manager-v3.js';
```

**Switch Case Addition (around line 435):**
```javascript
case 'test-approach':
  const testConfidence = args[0] ? parseInt(args[0], 10) : undefined;
  
  if (testConfidence !== undefined && (isNaN(testConfidence) || testConfidence < 1 || testConfidence > 10)) {
    console.error('Error: Confidence must be a number between 1 and 10');
    process.exit(1);
  }
  
  console.log(`Processing test-approach with confidence: ${testConfidence || 'from approach file'}`);
  
  try {
    const result = await updateTestApproach(testConfidence);
    if (result.success) {
      console.log(`Success: ${result.message}`);
    } else {
      console.error(`Error: ${result.message}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error executing test-approach: ${error.message}`);
    process.exit(1);
  }
  break;
```

**Help Text Addition (around line 700):**
```javascript
test-approach <confidence>           Update test approach in active-task-unit-tests-2.md using current-test-approach.md
```

**Why:** This integrates the new command into the CLI interface with proper error handling and follows the same pattern as the existing task-approach command.

---

## Implementation Checklist

### Pre-Implementation Safety Checks
- [ ] **Backup** `context-manager-v3.js` to `context-manager-v3-backup-[timestamp].js`
- [ ] **Verify** current test-approach command doesn't exist in v3
- [ ] **Test** existing commands in context-manager-v3.js work before changes

### Core Implementation Steps
- [ ] **Step 1:** Update command documentation in COMMANDS SUPPORTED section
- [ ] **Step 2:** Update PATHS configuration with test approach file paths
- [ ] **Step 3:** Add utility functions (formatTimestamp, generateFileTimestamp, etc.)
- [ ] **Step 4:** Add main updateTestApproach function
- [ ] **Step 5:** Export the new function
- [ ] **Step 6:** Update CLI integration with import and case statement

### Post-Implementation Validation
- [ ] **Test** test-approach command with valid confidence level
- [ ] **Verify** current-test-approach.md content is properly copied
- [ ] **Confirm** "Overview" is changed to "Test Approach Overview"
- [ ] **Validate** history archiving works correctly
- [ ] **Check** existing commands still function properly

---

## Expected Behavior After Implementation

### Command Usage
```bash
# Basic usage (confidence from file)
node bin/aplio-agent-cli.js test-approach

# With confidence parameter
node bin/aplio-agent-cli.js test-approach 8
```

### File Operations
1. **Reads:** `pmc/system/plans/task-approach/current-test-approach.md`
2. **Archives:** Previous approach to `pmc/system/plans/task-approach/approach-history/test-approach-T-X.X.X-MM-DD-YY-HHmmAM.md`
3. **Updates:** `pmc/core/active-task-unit-tests-2.md` Test Approach section

### Content Transformation
- **Source "Overview"** → **Target "Test Approach Overview"**
- **Maintains timestamp and confidence formatting**
- **Preserves approach history (2 most recent)**
- **Removes instruction sections from source**

---

## Risk Mitigation

### Critical Function Protection
- **Preserve all existing imports** and shared utility functions
- **Maintain existing command functionality** (updatePhaseStage, testPromptBuild)
- **Use consistent error handling** patterns throughout
- **Follow existing code style** and naming conventions

### Validation Strategy
- **Test with mock files** before using on real content
- **Verify section extraction** works with various content formats
- **Confirm archiving** doesn't overwrite existing files
- **Validate CLI integration** doesn't break existing commands

### Error Recovery
- **Archive failures** should warn but not prevent operation
- **Missing source file** should provide clear error message
- **Invalid confidence** should reject with validation error
- **File permission issues** should be clearly reported

---

## Success Criteria

### Functional Requirements
- [ ] test-approach command copies content from current-test-approach.md to active-task-unit-tests-2.md
- [ ] "Overview" section is renamed to "Test Approach Overview" in target file
- [ ] Previous test approaches are archived with proper timestamps
- [ ] Confidence levels are properly extracted and validated
- [ ] Command follows same patterns as existing task-approach command

### Integration Requirements
- [ ] CLI interface properly handles the new command
- [ ] Error handling is consistent with existing patterns
- [ ] File paths work correctly across different environments
- [ ] Command doesn't interfere with existing functionality

### Quality Requirements
- [ ] Code follows existing style and patterns in context-manager-v3.js
- [ ] All utility functions include proper JSDoc documentation
- [ ] Error messages are clear and actionable
- [ ] Command execution is performant and reliable

---

## Implementation Notes for Coding Agent

### Code Style Consistency
- **Follow existing patterns** in context-manager-v3.js for function structure
- **Use async/await** for all file operations as shown in existing functions
- **Include detailed JSDoc comments** with USAGE, WHEN, INPUT, OUTPUT sections
- **Maintain 2-space indentation** and existing formatting patterns

### Function Organization
- **Place utility functions first** before main updateTestApproach function
- **Group related functions together** (timestamp functions, extraction functions, etc.)
- **Use descriptive function names** that clearly indicate test-related purpose
- **Include comprehensive error handling** in all file operations

### Integration Points
- **Import statement** must be added to aplio-agent-cli.js for the new function
- **Switch case** must handle both with and without confidence parameter
- **Help text** must be clear and follow existing format patterns
- **Export statement** must be added at end of context-manager-v3.js

### Critical Implementation Notes
- **Dynamic Section Finding:** The implementation MUST use regex pattern matching to find the `## Test Approach` section dynamically, NOT rely on specific line numbers as the section location varies between files
- **Pattern-Based Replacement:** All section replacements must use regex patterns that match content structure, not positional assumptions
- **Flexible Section Detection:** The code must handle cases where the Test Approach section may not exist and create it in the appropriate location

This specification ensures the test-approach command will integrate seamlessly into the PMC system while maintaining all existing functionality and following established patterns.
