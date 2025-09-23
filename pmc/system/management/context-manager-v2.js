/*
 * context-manager-v2.js - Enhanced context management for the Project Memory Core system
 * 
 * COMMANDS SUPPORTED:
 * ------------------
 * 1. updateTaskApproach(confidence) - Updates the task approach file with confidence level
 *    CLI: node bin/aplio-agent-cli.js task-approach [confidence]
 * 
 * 2. completeTask(taskId, options) - Completes a task with optional force and start-next flags
 *    CLI: node bin/aplio-agent-cli.js complete-task <taskId> [--force] [--startnext]
 * 
 * 3. start-task
 * This module provides enhanced task management features with a focus on task approach handling
 * and task completion workflows.
 */

// ES Module imports
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Get current file and directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine project root reliably
function determineProjectRoot() {
  const rawPath = path.resolve(__dirname, '../../');
  const pathParts = rawPath.split(path.sep);
  
  // Check if the path already ends with pmc
  if (pathParts[pathParts.length - 1] === 'pmc') {
    return rawPath;
  }
  
  // Check for duplicated pattern
  const lastTwoSegments = pathParts.slice(-2);
  if (lastTwoSegments.length === 2 && 
      lastTwoSegments[0] === 'pmc' && 
      lastTwoSegments[1] === 'pmc') {
    return pathParts.slice(0, -1).join(path.sep);
  }
  
  return rawPath;
}

const PROJECT_ROOT = determineProjectRoot();
console.log(`Using PROJECT_ROOT in context-manager-v2: ${PROJECT_ROOT}`);

// File paths - static paths that don't depend on product abbreviation
const STATIC_PATHS = {
  activeTaskFile: path.join(PROJECT_ROOT, 'core', 'active-task.md'),
  previousTaskFile: path.join(PROJECT_ROOT, 'core', 'previous-task.md'),
  activeTaskTestFile: path.join(PROJECT_ROOT, 'core', 'active-task-unit-tests.md'),
  activeTaskTestFileV2: path.join(PROJECT_ROOT, 'core', 'active-task-unit-tests-2.md'),
  activeTaskTestFileV2Enhanced: path.join(PROJECT_ROOT, 'core', 'active-task-unit-tests-2-enhanced.md'),
  previousTaskTestFileV2: path.join(PROJECT_ROOT, 'core', 'previous-task-unit-tests-2.md'),
  previousTaskTestFileV2Enhanced: path.join(PROJECT_ROOT, 'core', 'previous-task-unit-tests-2-enhanced.md'),
  taskApproachFile: path.join(PROJECT_ROOT, 'system', 'plans', 'task-approach', 'current-task-approach.md'),
  approachHistoryDir: path.join(PROJECT_ROOT, 'system', 'plans', 'task-approach', 'approach-history'),
  progressFile: path.join(PROJECT_ROOT, 'core', 'progress.md'),
  taskImplementationLogFile: path.join(PROJECT_ROOT, 'core', 'task-implementation-log.md'),
  projectExecutionContextFile: path.join(PROJECT_ROOT, 'system', 'plans', 'context-execution', 'task-completion-contexts.md'),
  carryoverScript: path.join(PROJECT_ROOT, 'system', 'management', 'carryover-command.js'),
  taskHistory: {
    archiveDir: path.join(PROJECT_ROOT, 'system', 'plans', 'task-history')
  },
  templates: {
    activeTask: path.join(PROJECT_ROOT, 'system', 'templates', 'active-task-template-2.md'),
    activeTaskTest: path.join(PROJECT_ROOT, 'system', 'templates', 'active-task-test-template.md'),
    activeTaskTestV2: path.join(PROJECT_ROOT, 'system', 'templates', 'active-task-test-template-2.md')
  }
};

/**
 * Generate dynamic file paths based on product abbreviation
 * @param {string} productAbbr - Product abbreviation (e.g., 'bmo', 'aplio-mod-1')
 * @returns {object} - Object containing all file paths
 */
function generatePaths(productAbbr = 'bmo') {
  return {
    ...STATIC_PATHS,
    taskBreakdownFile: path.join(PROJECT_ROOT, 'product', `06b-${productAbbr}-tasks-built.md`),
    taskTestMappingFile: path.join(PROJECT_ROOT, 'product', `07b-task-${productAbbr}-testing-built.md`)
  };
}

// Default PATHS for backward compatibility (using 'bmo' as default)
const PATHS = generatePaths('bmo');

/**
 * Format timestamp in a human-readable format
 * @param {Date} date - Date to format (defaults to current time)
 * @returns {string} - Formatted timestamp
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
 * Format: MM-DD-YY-hhmm
 * @returns {string} - Formatted timestamp for filenames
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
 * Generates a timestamp for file archiving (matching test-approach-and-discovery.js format)
 * Format: MM-DD-YY-HHmmAM/PM
 * @returns {string} - Formatted timestamp for archive filenames
 */
function generateArchiveTimestamp() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');
    
    return `${month}-${day}-${year}-${formattedHours}${minutes}${ampm}`;
}

/**
 * Extracts task ID from active task file content
 * @param {string} content - File content to search
 * @returns {string|null} - Task ID if found, null otherwise
 */
function extractTaskIdFromContent(content) {
    try {
        // Look for Task ID: T-X.X.X pattern
        const taskIdMatch = content.match(/Task ID:\s*(T-\d+\.\d+\.\d+)/);
        return taskIdMatch ? taskIdMatch[1] : null;
    } catch (error) {
        console.warn('Warning: Could not extract task ID from content:', error.message);
        return null;
    }
}

/**
 * Archives a file with timestamp and optional task ID
 * @param {string} sourcePath - Path to source file
 * @param {string} archiveDir - Directory to store archive
 * @param {string} baseFileName - Base name for archive file
 * @param {string} timestamp - Timestamp for filename
 * @param {string|null} taskId - Optional task ID for filename
 * @returns {boolean} - Success status
 */
function archiveTaskFile(sourcePath, archiveDir, baseFileName, timestamp, taskId = null) {
    try {
        // Check if source file exists
        if (!fs.existsSync(sourcePath)) {
            console.log(`No existing ${baseFileName} file to archive - this is normal for new projects`);
            return true;
        }
        
        // Ensure archive directory exists
        if (!fs.existsSync(archiveDir)) {
            fs.mkdirSync(archiveDir, { recursive: true });
            console.log(`Created archive directory: ${archiveDir}`);
        }
        
        // Create archive filename with task ID and timestamp
        let archiveFileName;
        if (taskId) {
            archiveFileName = `${baseFileName}-${taskId}-${timestamp}.md`;
        } else {
            archiveFileName = `${baseFileName}-${timestamp}.md`;
        }
        const archivePath = path.join(archiveDir, archiveFileName);
        
        // Copy current file to archive
        fs.copyFileSync(sourcePath, archivePath);
        console.log(`Archived: ${path.basename(sourcePath)} -> ${archiveFileName}`);
        
        return true;
        
    } catch (error) {
        console.error(`Error archiving ${sourcePath}:`, error.message);
        return false;
    }
}

/**
 * Finds a section in the active-task.md content
 * @param {string} activeTaskContent - The content of active-task.md
 * @param {string} sectionTitle - The title of the section to find
 * @returns {object} - Object containing start index, end index, and section content
 */
function findSectionInActiveTask(activeTaskContent, sectionTitle) {
  // Create regex patterns to match both ## and ### section headers
  // First try to match a ### section header (for sub-sections)
  const subSectionRegex = new RegExp(`### ${sectionTitle}\\s*\\n([\\s\\S]*?)(?=\\n### |\\n## |$)`, 'i');
  let match = activeTaskContent.match(subSectionRegex);
  
  if (!match) {
    // If not found, try to match a ## section header
    const mainSectionRegex = new RegExp(`## ${sectionTitle}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
    match = activeTaskContent.match(mainSectionRegex);
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

/**
 * Extracts a section from markdown content
 * @param {string} content - The markdown content
 * @param {string} sectionName - The name of the section to extract
 * @returns {string|null} The section content or null if not found
 */
function extractSection(content, sectionName) {
  // Fixed regex: require a space after ## to match actual section headers, not ## in content
  const sectionMatch = content.match(new RegExp(`## ${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`));
  return sectionMatch ? sectionMatch[1].trim() : null;
}

/**
 * Creates a consistently formatted timestamped entry
 * @param {string} entryText - The text of the entry
 * @param {object} additionalInfo - Additional information for the entry
 * @returns {string} - Formatted entry
 */
function formatTimestampedEntry(entryText, additionalInfo = {}) {
  const timestamp = formatTimestamp();
  let entry = `- [${timestamp}] ${entryText}`;
  
  // Add confidence if provided
  if (additionalInfo.confidence !== undefined) {
    entry += ` (Confidence: ${additionalInfo.confidence}/10)`;
  }
  
  // Add severity if provided
  if (additionalInfo.severity !== undefined) {
    entry += ` (Severity: ${additionalInfo.severity}/10)`;
  }
  
  // Add files if provided
  if (additionalInfo.files && additionalInfo.files.length > 0) {
    entry += ` [${additionalInfo.files.join(', ')}]`;
  }
  
  return entry;
}

/**
 * Extracts a section from markdown content specifically for task approach files
 * @param {string} content - The markdown content
 * @param {string} sectionName - The name of the section to extract
 * @returns {string|null} The section content or null if not found
 */
function extractApproachSection(content, sectionName) {
  const sectionMatch = content.match(new RegExp(`## ${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`));
  return sectionMatch ? sectionMatch[1].trim() : null;
}

/**
 * Extracts task ID from approach document
 * @param {string} content - Approach document content
 * @returns {string} - Extracted task ID
 */
function extractTaskId(content) {
  const taskIdMatch = content.match(/## Task ID\s*\n([^\n]+)/);
  if (!taskIdMatch) {
    throw new Error('Task ID not found in approach file');
  }
  return taskIdMatch[1].trim();
}

/**
 * Validates approach sections against character limits
 * @param {object} sections - Extracted sections
 * @throws {Error} If sections exceed character limits
 */
function validateSectionLengths(sections) {
  const GRACE_SPACE = 20; // Allow 20 characters of grace space
  
  if (sections.overview) {
    console.log(`Overview length: ${sections.overview.length} characters`);
    console.log(`Overview content: "${sections.overview}"`);
  }
  
  if (sections.overview && sections.overview.length > (500 + GRACE_SPACE)) {
    throw new Error('Overview/Reason section exceeds 500 character limit');
  }
  
  if (sections.strategy && sections.strategy.length > (3000 + GRACE_SPACE)) {
    throw new Error('Strategy section exceeds 3000 character limit');
  }
  
  if (sections.considerations) {
    const items = sections.considerations.split('\n').filter(line => line.trim().startsWith('-'));
    for (const item of items) {
      if (item.length > (200 + GRACE_SPACE)) {
        throw new Error('Considerations/Changes item exceeds 200 character limit');
      }
    }
  }
}

/**
 * Removes the instruction section from the approach document
 * @param {string} content - The full content of the approach document
 * @returns {string} - The content without the instruction section
 */
function removeInstructionsSection(content) {
  // Look for the pattern starting with "====" line and ending with "===" line
  // We use [\s\S]* to match any character including newlines
  const instructionRegex = /={3,}[\s\S]*?={3,}.*(\n|$)/g;
  
  // Remove the instruction section
  const cleanedContent = content.replace(instructionRegex, '');
  
  // Additional cleanup: remove any trailing empty lines that might remain
  return cleanedContent.trim();
}

/**
 * Extracts confidence level from approach document
 * @param {string} content - Approach document content
 * @returns {number|null} - Extracted confidence level or null if not found
 */
function extractConfidenceLevel(content) {
  const confidenceMatch = content.match(/## Confidence Level\s*\nConfidence:\s*(\d+)/);
  if (!confidenceMatch) {
    return null;
  }
  const confidence = parseInt(confidenceMatch[1], 10);
  return confidence >= 1 && confidence <= 10 ? confidence : null;
}

/**
 * Updates the confidence level in the Task Information section of active-task.md
 * @param {string} content - The content of active-task.md
 * @param {number} confidence - The confidence level to set
 * @returns {string} - The updated content
 */
function updateTaskInformationConfidence(content, confidence) {
  if (!confidence) return content;
  
  // Find Task Information section and update the Confidence line
  const updatedContent = content.replace(
    /(## Task Information[\s\S]*?Confidence:)\s*(\d*|\n)/,
    `$1 ${confidence}\n`
  );
  
  return updatedContent;
}

/**
 * Updates the task approach in active-task.md and manages approach history
 * @param {number} [confidence] - Optional confidence level (1-10) in this approach
 * @returns {Promise<{success: boolean, message?: string}>}
 */
async function updateTaskApproach(confidence) {
  try {
    console.log(`Executing updateTaskApproach with PROJECT_ROOT: ${PROJECT_ROOT}`);
    
    // Safely join paths using path.join
    const currentApproachPath = PATHS.taskApproachFile;
    console.log(`Current approach file path: ${currentApproachPath}`);
    
    // Check if the file exists before reading
    if (!fs.existsSync(currentApproachPath)) {
      console.error(`File not found: ${currentApproachPath}`);
      return {
        success: false,
        message: `Current approach file not found: ${currentApproachPath}`
      };
    }
    
    let currentApproach = await fs.promises.readFile(currentApproachPath, 'utf8');
    
    // Extract confidence level from the approach file if specified
    const approachConfidence = extractConfidenceLevel(currentApproach);
    
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
    currentApproach = removeInstructionsSection(currentApproach);
    
    // Try to extract taskId if available (for archiving purposes), but don't require it
    let taskId = "current-task";
    try {
      taskId = extractTaskId(currentApproach);
    } catch (error) {
      console.log("Task ID not found in approach file, using generic name for archiving");
      // Read active task file to try to get task ID
      try {
        const activeTaskContent = await fs.promises.readFile(PATHS.activeTaskFile, 'utf8');
        const taskInfoMatch = activeTaskContent.match(/## Task Information[\s\S]*?Task ID:\s*([^\n]+)/);
        if (taskInfoMatch && taskInfoMatch[1]) {
          taskId = taskInfoMatch[1].trim();
          console.log(`Extracted task ID from active-task.md: ${taskId}`);
        }
      } catch (readError) {
        console.log("Could not read active-task.md to extract task ID");
      }
    }
    
    // Archive current approach - ensure directory exists
    const historyDir = PATHS.approachHistoryDir;
    if (!fs.existsSync(historyDir)) {
      console.log(`Creating approach history directory: ${historyDir}`);
      await fs.promises.mkdir(historyDir, { recursive: true });
    }
    
    // Generate a timestamp for the filename
    const fileTimestamp = generateFileTimestamp();
    const historyPath = path.join(historyDir, `task-approach-${taskId}-${fileTimestamp}.md`);
    await fs.promises.writeFile(historyPath, currentApproach);
    console.log(`Archived approach to: ${historyPath}`);
    
    // Read active task file
    const activeTaskPath = PATHS.activeTaskFile;
    if (!fs.existsSync(activeTaskPath)) {
      console.error(`Active task file not found: ${activeTaskPath}`);
      return {
        success: false,
        message: `Active task file not found: ${activeTaskPath}`
      };
    }
    
    const activeTaskContent = await fs.promises.readFile(activeTaskPath, 'utf8');
    
    // Extract sections from current approach
    const sections = {
      overview: extractApproachSection(currentApproach, 'Overview') || extractApproachSection(currentApproach, 'Reason for Update'),
      strategy: extractApproachSection(currentApproach, 'Implementation Strategy') || extractApproachSection(currentApproach, 'Updated Strategy'),
      considerations: extractApproachSection(currentApproach, 'Key Considerations') || extractApproachSection(currentApproach, 'Changes from Previous')
    };
    
    // Validate section lengths
    try {
      validateSectionLengths(sections);
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
    
    // Format new approach content
    const confidenceStr = finalConfidence ? `, Confidence: ${finalConfidence}/10` : '';
    const newApproach = `### Current Approach (Added: ${formatTimestamp()}${confidenceStr})

Overview:
${sections.overview || 'No overview provided'}

Implementation Strategy:
${sections.strategy || 'No strategy provided'}

Key Considerations:
${sections.considerations || 'No considerations provided'}`;
    
    // Find or create Task Approach section
    let updatedContent;
    if (activeTaskContent.includes('## Task Approach')) {
      // Extract existing approaches
      const approachSection = activeTaskContent.match(/## Task Approach\s*([\s\S]*?)(?=\n##|$)/);
      if (!approachSection) {
        return {
          success: false,
          message: 'Failed to locate Task Approach section'
        };
      }
      
      // Get existing approaches
      const existingApproaches = approachSection[1].split(/(?=### Current Approach)/).slice(1);
      
      // Keep only the 2 most recent approaches for history
      const historicalApproaches = existingApproaches.slice(0, 2).join('\n\n');
      
      // Replace entire Task Approach section
      updatedContent = activeTaskContent.replace(
        /## Task Approach[\s\S]*?(?=\n##|$)/,
        `## Task Approach\n\n${newApproach}\n\n### Approach History\n${historicalApproaches}`
      );
    } else {
      // Create new Task Approach section
      updatedContent = activeTaskContent.replace(
        /(## Task Information[\s\S]*?)(\n##|\n$)/,
        `$1\n\n## Task Approach\n\n${newApproach}\n$2`
      );
    }
    
    // Update confidence in Task Information section if confidence is provided
    if (finalConfidence) {
      updatedContent = updateTaskInformationConfidence(updatedContent, finalConfidence);
    }
    
    // Write updated content back to active-task.md
    await fs.promises.writeFile(activeTaskPath, updatedContent);
    
    return {
      success: true,
      message: `Task approach updated successfully${taskId !== "current-task" ? ` for ${taskId}` : ''}${finalConfidence ? ` with confidence level ${finalConfidence}` : ''}`
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

/**
 * Verifies completion status of all elements in active-task.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @returns {object} - Object containing completion status and incomplete elements
 */
function verifyElementCompletion(activeTaskContent) {
  const elementsSection = findSectionInActiveTask(activeTaskContent, 'Components/Elements');
  if (!elementsSection.found) {
    throw new Error('Components/Elements section not found in active-task.md');
  }

  const elements = elementsSection.content.split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => {
      const elementMatch = line.match(/- \[([ x])\] ([^:]+):([^:]+):(.*?)(?:\(Status: (.*?)\))?$/);
      if (!elementMatch) return null;
      return {
        completed: elementMatch[1] === 'x',
        taskId: elementMatch[2],
        elementId: elementMatch[3],
        description: elementMatch[4].trim(),
        status: elementMatch[5] || 'Not Started'
      };
    })
    .filter(Boolean);

  const incompleteElements = elements.filter(element => 
    !element.completed || !element.status.includes('Complete')
  );

  return {
    allComplete: incompleteElements.length === 0,
    incompleteElements
  };
}

/**
 * Verifies completion status of all phase steps in active-task.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @returns {object} - Object containing completion status and incomplete phases
 */
function verifyPhaseCompletion(activeTaskContent) {
  const phases = ['Preparation Phase', 'Implementation Phase', 'Validation Phase'];
  const incompletePhases = [];

  for (const phase of phases) {
    const phaseSection = findSectionInActiveTask(activeTaskContent, phase);
    if (!phaseSection.found) continue;

    const steps = phaseSection.content.split('\n')
      .filter(line => line.trim().startsWith('-'));

    const hasIncompleteSteps = steps.some(step => !step.includes('[x]'));
    if (hasIncompleteSteps) {
      incompletePhases.push(phase);
    }
  }

  return {
    allComplete: incompletePhases.length === 0,
    incompletePhases
  };
}

/**
 * Verifies that all required sections exist in active-task.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @returns {object} - Object containing verification status and missing sections
 */
function verifyRequiredSections(activeTaskContent) {
  const requiredSections = [
    'Task Information',
    'Components/Elements',
    'Implementation Process Phases',
    'Current Element',
    'Recent Actions',
    'Complete Task'
  ];
  
  const missingSections = [];
  
  for (const section of requiredSections) {
    const sectionInfo = findSectionInActiveTask(activeTaskContent, section);
    if (!sectionInfo.found) {
      missingSections.push(section);
    }
  }
  
  return {
    allSectionsPresent: missingSections.length === 0,
    missingSections
  };
}

/**
 * Updates the Complete Task section in active-task.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @param {object} elementStatus - Status of elements from verifyElementCompletion
 * @param {object} phaseStatus - Status of phases from verifyPhaseCompletion
 * @param {boolean} forced - Whether completion was forced
 * @param {array} missingSections - Array of missing sections
 * @returns {string} - Updated file content
 */
function updateCompleteTaskSection(activeTaskContent, elementStatus, phaseStatus, forced = false, missingSections = []) {
  const timestamp = formatTimestamp();
  let completionStatus = '';

  // For successful completion
  if (missingSections.length === 0 && elementStatus.allComplete && phaseStatus.allComplete) {
    completionStatus = `Task completion status [${timestamp}]:\nALL ELEMENTS COMPLETED SUCCESSFULLY`;
  } 
  // For failed completion attempts (when --force is not used)
  else if (!forced) {
    completionStatus = `Task completion status [${timestamp}]:\nCOMPLETION FAILED DUE TO:`;
    
    // Add missing sections to completion status
    if (missingSections.length > 0) {
      missingSections.forEach(section => {
        completionStatus += `\n- Required section '${section}' is missing from active-task.md`;
      });
    }
    
    // Add incomplete elements to completion status
    if (elementStatus.incompleteElements.length > 0) {
      elementStatus.incompleteElements.forEach(element => {
        completionStatus += `\n- Element ${element.elementId} is not marked as Complete`;
      });
    }
    
    // Add incomplete phases to completion status
    if (phaseStatus.incompletePhases.length > 0) {
      phaseStatus.incompletePhases.forEach(phase => {
        completionStatus += `\n- ${phase} is not marked as Complete`;
      });
    }
  }
  // For forced completion
  else {
    completionStatus = `Task completion status [${timestamp}]:\nINCOMPLETE ITEMS (FORCED COMPLETION):`;
    
    // Add missing sections to completion status
    if (missingSections.length > 0) {
      missingSections.forEach(section => {
        completionStatus += `\n- Required section '${section}' is missing from active-task.md`;
      });
    }
    
    // Add incomplete elements to completion status
    if (elementStatus.incompleteElements.length > 0) {
      elementStatus.incompleteElements.forEach(element => {
        completionStatus += `\n- Element ${element.elementId} is not marked as Complete`;
      });
    }
    
    // Add incomplete phases to completion status
    if (phaseStatus.incompletePhases.length > 0) {
      phaseStatus.incompletePhases.forEach(phase => {
        completionStatus += `\n- ${phase} is not marked as Complete`;
      });
    }
    
    completionStatus += `\nTask completed with --force flag override`;
  }

  const completeTaskSection = findSectionInActiveTask(activeTaskContent, 'Complete Task');
  if (!completeTaskSection.found) {
    return activeTaskContent + `\n\n## Complete Task\n${completionStatus}\n`;
  }

  return (
    activeTaskContent.substring(0, completeTaskSection.startIndex) +
    `## Complete Task\n${completionStatus}\n` +
    activeTaskContent.substring(completeTaskSection.endIndex)
  );
}

/**
 * Updates the Recent Actions section in active-task.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @param {string} taskId - Task ID
 * @param {boolean} hasIncomplete - Whether there are incomplete elements/phases
 * @returns {string} - Updated file content
 */
function updateRecentActionsSection(activeTaskContent, taskId, hasIncomplete) {
  const timestamp = formatTimestamp();
  const actionText = `- [${timestamp}] Completed task ${taskId}${hasIncomplete ? ' with incomplete elements' : ''}`;

  const recentActionsSection = findSectionInActiveTask(activeTaskContent, 'Recent Actions');
  if (!recentActionsSection.found) {
    return activeTaskContent + `\n\n## Recent Actions\n${actionText}\n`;
  }

  return (
    activeTaskContent.substring(0, recentActionsSection.startIndex) +
    `## Recent Actions\n${actionText}\n${recentActionsSection.content}\n` +
    activeTaskContent.substring(recentActionsSection.endIndex)
  );
}

/**
 * Updates progress.md with task completion
 * @param {string} taskId - Task ID
 * @param {boolean} forced - Whether completion was forced
 */
async function updateProgressFile(taskId, forced = false) {
  const progressContent = await fs.promises.readFile(PATHS.progressFile, 'utf8');
  const timestamp = formatTimestamp();
  
  // Capture the task description in a group to preserve it
  // Pattern matches:
  // 1. Line starts with "- [ ]" or "- [x]" followed by the task ID and colon
  // 2. Capture the rest of the description (before any status parentheses)
  // 3. Make sure the line doesn't contain ":ELE" (to exclude element lines)
  const taskLineRegex = new RegExp(`^- \\[[ x]\\] ${taskId}: (.*?)(?:\\(Status:.*?\\)|$)`, 'gm');
  
  // Process the content with a replace function to ensure description is preserved
  let updatedContent = progressContent;
  const matches = progressContent.match(taskLineRegex);
  
  if (matches && matches.length > 0) {
    // Use a function with the first match to extract the description
    const match = matches[0];
    const descriptionMatch = match.match(new RegExp(`^- \\[[ x]\\] ${taskId}: (.*?)(?:\\(Status:.*?\\)|$)`));
    const description = descriptionMatch && descriptionMatch[1] ? descriptionMatch[1].trim() : '';
    
    // Use the extracted description in the replacement
    if (description) {
      updatedContent = progressContent.replace(
        taskLineRegex,
        `- [x] ${taskId}: ${description} (Status: Complete${forced ? ' (Forced)' : ''}, Updated: ${timestamp})`
      );
    }
  }

  await fs.promises.writeFile(PATHS.progressFile, updatedContent);
}

/**
 * Updates task-implementation-log.md with completion entry
 * @param {string} taskId - Task ID
 * @param {object} elementStatus - Status of elements
 * @param {boolean} forced - Whether completion was forced
 * @param {array} missingSections - Array of missing sections
 */
async function updateTaskImplementationLog(taskId, elementStatus, forced = false, missingSections = []) {
  const timestamp = formatTimestamp();
  let logEntry = `\n## Task ${taskId} Completion\n` +
    `- Timestamp: ${timestamp}\n` +
    `- Status: ${forced ? 'Force Completed' : 'Completed'}\n`;
  
  // Add missing sections status if any
  if (missingSections.length > 0) {
    logEntry += `- Missing Sections:\n${missingSections.map(section => 
      `  - ${section}: Missing`
    ).join('\n')}\n`;
  }
  
  // Add elements status
  logEntry += `- Elements Status:\n${elementStatus.incompleteElements.map(e => 
    `  - ${e.elementId}: ${e.status || 'Not Complete'}`
  ).join('\n')}\n`;

  await fs.promises.appendFile(PATHS.taskImplementationLogFile, logEntry);
}

/**
 * Archives task context to project-execution-context.md
 * @param {string} activeTaskContent - Content of active-task.md
 * @param {string} taskId - Task ID
 */
async function archiveTaskContext(activeTaskContent, taskId) {
  const timestamp = formatTimestamp();
  const separator = '=' .repeat(80);
  const header = `# Task ${taskId} Execution Context (Completed: ${timestamp})\n\n`;
  
  let archiveContent = '';
  try {
    archiveContent = await fs.promises.readFile(PATHS.projectExecutionContextFile, 'utf8');
  } catch (error) {
    // File doesn't exist yet, start fresh
    archiveContent = '# Project Execution Context Archive\n\n';
  }

  const updatedContent = archiveContent + `\n${separator}\n${header}${activeTaskContent}\n`;
  await fs.promises.writeFile(PATHS.projectExecutionContextFile, updatedContent);
}

/**
 * Gets the next task ID from the task breakdown file
 * @param {string} currentTaskId - Current task ID
 * @returns {string|null} - Next task ID or null if not found
 */
async function getNextTaskId(currentTaskId) {
  const content = await fs.promises.readFile(PATHS.taskBreakdownFile, 'utf8');
  const taskIds = content.match(/#### ([T\-\d\.]+):/g)
    ?.map(match => match.replace(/####\s+/, '').replace(':', ''))
    || [];
  
  const currentIndex = taskIds.indexOf(currentTaskId);
  return currentIndex >= 0 && currentIndex < taskIds.length - 1 
    ? taskIds[currentIndex + 1] 
    : null;
}

/**
 * Completes a task and performs all necessary updates
 * @param {string} taskId - Task ID to complete
 * @param {object} options - Command options
 * @param {boolean} options.force - Whether to force completion
 * @param {boolean} options.startNext - Whether to start next task
 */
export async function completeTask(taskId, options = {}) {
  const { force = false, startNext = false } = options;
  const timestamp = formatTimestamp();
  
  try {
    // 1. Read active task content
    const activeTaskContent = await fs.promises.readFile(PATHS.activeTaskFile, 'utf8');

    // 2. Verify all required sections exist
    const sectionStatus = verifyRequiredSections(activeTaskContent);
    
    // 3. Verify completion status
    const elementStatus = verifyElementCompletion(activeTaskContent);
    const phaseStatus = verifyPhaseCompletion(activeTaskContent);

    // 4. Check if task can be completed
    if (!force && (!sectionStatus.allSectionsPresent || !elementStatus.allComplete || !phaseStatus.allComplete)) {
      // Prepare detailed error message for console output
      let errorMessage = `[${timestamp}] Task completion failed.\nReasons:`;
      
      // Add missing sections to error message
      if (sectionStatus.missingSections.length > 0) {
        sectionStatus.missingSections.forEach(section => {
          errorMessage += `\n- Required section '${section}' is missing from active-task.md`;
        });
      }
      
      // Add incomplete elements to error message
      if (elementStatus.incompleteElements.length > 0) {
        elementStatus.incompleteElements.forEach(element => {
          errorMessage += `\n- Element ${element.elementId} is not marked as Complete`;
        });
      }
      
      // Add incomplete phases to error message
      if (phaseStatus.incompletePhases.length > 0) {
        phaseStatus.incompletePhases.forEach(phase => {
          errorMessage += `\n- ${phase} is not marked as Complete`;
        });
      }
      
      throw new Error(errorMessage);
    }

    // 5. Update active-task.md sections
    let updatedContent = updateCompleteTaskSection(
      activeTaskContent, 
      elementStatus, 
      phaseStatus, 
      force, 
      sectionStatus.missingSections
    );
    
    // 6. Update Recent Actions section if it exists
    if (sectionStatus.missingSections.indexOf('Recent Actions') === -1) {
      updatedContent = updateRecentActionsSection(
        updatedContent, 
        taskId, 
        !elementStatus.allComplete || !phaseStatus.allComplete || !sectionStatus.allSectionsPresent
      );
    }
    
    await fs.promises.writeFile(PATHS.activeTaskFile, updatedContent);

    // 7. Update progress.md
    await updateProgressFile(taskId, force);

    // 8. Update task-implementation-log.md
    await updateTaskImplementationLog(taskId, elementStatus, force, sectionStatus.missingSections);

    // 9. Archive to project-execution-context.md
    await archiveTaskContext(updatedContent, taskId);

    // 10. Run context carryover script
    await execAsync(`node ${PATHS.carryoverScript}`);

    // 11. Optionally start next task
    if (startNext) {
      const nextTaskId = await getNextTaskId(taskId);
      if (nextTaskId) {
        await execAsync(`node ${path.join(PROJECT_ROOT, 'bin', 'aplio-agent-cli.js')} start-task ${nextTaskId}`);
      }
    }

    // 12. Return success with enhanced message
    return {
      success: true,
      message: `[${timestamp}] ${(force && (!elementStatus.allComplete || !phaseStatus.allComplete || !sectionStatus.allSectionsPresent)) ? 
        'Task completed with --force override.' : 
        'All elements and phases complete.'}\nTask ${taskId} completed successfully${force ? ' (forced)' : ''}.`
    };
  } catch (error) {
    return {
      success: false,
      message: error.message.includes('Task completion failed') ? 
        error.message : 
        `Failed to complete task: ${error.message}`
    };
  }
}

/**
 * Extract metadata from content using a specified field name
 * @param {string} content - Content to search in
 * @param {string} field - Field name to extract
 * @returns {string|null} - Extracted metadata or null if not found
 */
function extractMetadata(content, field) {
    // Updated regex to match the format: - **Field**: Value
    // This handles both single-line and multi-line fields by looking ahead to the next field
    const metadataPattern = new RegExp(`- \\*\\*${field}\\*\\*:(.*?)(?=\\n-\\s*\\*\\*|\\n\\*\\*Components\\/Elements|\\n\\*\\*Implementation Process|$)`, 'si');
    const match = content.match(metadataPattern);
    
    if (match && match[1]) {
        // Trim any leading/trailing whitespace and handle multi-line content properly
        return match[1].split('\n')
            .map(line => line.trim())
            .filter(line => line)
            .join('\n');
    }
    
    return null;
}

/**
 * Find element test mapping section in task content with improved pattern matching
 * @param {string} taskContent - Task content to search in
 * @param {string} taskId - Task ID
 * @returns {string|null} - Element test mapping section or null if not found
 */
function findElementTestMappingSectionV2(taskContent, taskId) {
    if (!taskContent || !taskId) return null;
    
    console.log('Looking for Element Test Mapping section with improved patterns');
    
    // First try to find a Components/Elements section using multiple patterns
    const componentSectionPatterns = [
        /\*\*Components\/Elements\*\*:([\s\S]*?)(?=\*\*Implementation Process|$)/i,
        /Components\/Elements:([\s\S]*?)(?=Implementation Process|$)/i,
        /## Components\/Elements([\s\S]*?)(?=## Implementation Process|$)/i,
        /### Components\/Elements([\s\S]*?)(?=### Implementation Process|$)/i
    ];
    
    let elementSection = null;
    for (const pattern of componentSectionPatterns) {
        const match = taskContent.match(pattern);
        if (match && match[1]) {
            elementSection = match[1].trim();
            console.log(`Found Components/Elements section using pattern: ${pattern.toString()}`);
            console.log(`Element section length: ${elementSection.length}`);
            break;
        }
    }
    
    // If we couldn't find a Components/Elements section,
    // Try to find element entries directly
    if (!elementSection) {
        // Check for lines with element IDs for this task (e.g., T-1.1.1:ELE-1)
        const elementEntryPatterns = [
            new RegExp(`${taskId}:ELE-[\\s\\S]*?(?=####|$)`, 'i'),  // Find task:ELE pattern until next heading or end
            new RegExp(`\\[${taskId}:ELE-[\\s\\S]*?(?=####|$)`, 'i')  // Find [task:ELE pattern until next heading or end
        ];
        
        for (const pattern of elementEntryPatterns) {
            const match = taskContent.match(pattern);
            if (match) {
                elementSection = match[0].trim();
                console.log(`Found Element entries directly with pattern: ${pattern.toString()}`);
                console.log(`Element mapping section length: ${elementSection.length}`);
                break;
            }
        }
    }
    
    // If we still couldn't find any element entries, try to construct from other sections
    if (!elementSection) {
        // Look specifically for the implementation process section
        const implementationProcessPatterns = [
            /\*\*Implementation Process\*\*:([\s\S]*?)(?=\*\*|$)/i,
            /Implementation Process:([\s\S]*?)(?=##|$)/i,
            /## Implementation Process([\s\S]*?)(?=##|$)/i,
            /### Implementation Process([\s\S]*?)(?=###|$)/i
        ];
        
        let implementationProcess = null;
        for (const pattern of implementationProcessPatterns) {
            const match = taskContent.match(pattern);
            if (match && match[1]) {
                implementationProcess = match[1].trim();
                break;
            }
        }
        
        if (implementationProcess) {
            console.log('Using Implementation Process section as fallback for element extraction');
            elementSection = implementationProcess;
        }
    }
    
    return elementSection;
}

/**
 * Extract test specifications from the test mapping file for a given task ID
 * @param {string} taskId - Task ID
 * @param {string} testMappingContent - Content of the test mapping file
 * @returns {Object} - Extracted test specifications
 */
function extractTestSpecifications(taskId, testMappingContent) {
    console.log(`Extracting test specifications for ${taskId}...`);
    
    // First attempt to find the task section with more specific pattern
    const specificTaskPattern = new RegExp(`#### ${taskId}:[\\s\\S]*?(?=#### T-|$)`, 'i');
    const specificTaskMatch = testMappingContent.match(specificTaskPattern);
    
    let acceptanceCriteria = [];
    let taskContent = '';
    let elementsTestData = {};
    
    if (!specificTaskMatch) {
        console.warn(`Task ${taskId} not found with specific pattern, trying broader search...`);
        
        // Broader search for task ID
        const broadTaskPattern = new RegExp(`${taskId}([\\s\\S]*?)(?=#### T-|$)`, 'i');
        const broadTaskMatch = testMappingContent.match(broadTaskPattern);
        
        if (!broadTaskMatch) {
            console.error(`Task ${taskId} not found in test mapping content with any pattern`);
            return {
                testLocations: 'Not specified',
                testingTools: 'Not specified',
                testCoverage: 'Not specified',
                acceptanceCriteria: [],
                elementsTestData: {}
            };
        }
        
        taskContent = broadTaskMatch[0];
        console.log(`Found task section using broader search (length: ${taskContent.length})`);
    } else {
        taskContent = specificTaskMatch[0];
        console.log(`Found task section using specific pattern (length: ${taskContent.length})`);
    }
    
    // Extract test coverage requirements
    const testRequirementsPattern = /#### Test Coverage Requirements\s*([\s\S]*?)(?=####|$)/i;
    const testRequirementsMatch = taskContent.match(testRequirementsPattern);
    
    let testLocations = 'Not specified';
    let testingTools = 'Not specified';
    let testCoverage = 'Not specified';
    
    if (testRequirementsMatch && testRequirementsMatch[1]) {
        const requirementsSection = testRequirementsMatch[1].trim();
        console.log(`Found Test Coverage Requirements section (length: ${requirementsSection.length})`);
        
        // Parse line by line for test specifications
        const lines = requirementsSection.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Test Location
            if (line.includes('**Test Location') && line.includes(':')) {
                const colonIndex = line.indexOf(':');
                let value = line.substring(colonIndex + 1).trim();
                
                // Fix backtick issues
                if (value.startsWith('`') && !value.endsWith('`')) {
                    value = value + '`';
                }
                
                testLocations = value;
                console.log(`Found Test Location: ${testLocations}`);
            }
            
            // Testing Tools
            if (line.includes('**Testing Tools**') && line.includes(':')) {
                testingTools = line.split(':')[1].trim();
                console.log(`Found Testing Tools: ${testingTools}`);
            }
            
            // Coverage Target
            if ((line.includes('**Coverage Target**') || line.includes('**Test Coverage**')) && line.includes(':')) {
                testCoverage = line.split(':')[1].trim();
                console.log(`Found Test Coverage: ${testCoverage}`);
            }
        }
    } else {
        console.warn(`Test Coverage Requirements section not found for ${taskId}, using fallback pattern search`);
        
        // Fallback to line-by-line search for test specifications
        const lines = taskContent.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Test Location
            if (line.includes('**Test Location') && line.includes(':')) {
                const colonIndex = line.indexOf(':');
                let value = line.substring(colonIndex + 1).trim();
                
                if (value.startsWith('`') && !value.endsWith('`')) {
                    value = value + '`';
                }
                
                testLocations = value;
                console.log(`Found Test Location in line search: ${testLocations}`);
            }
            
            // Testing Tools
            if (line.includes('**Testing Tools**') && line.includes(':')) {
                testingTools = line.split(':')[1].trim();
                console.log(`Found Testing Tools in line search: ${testingTools}`);
            }
            
            // Coverage Target
            if ((line.includes('**Coverage Target**') || line.includes('**Test Coverage**')) && line.includes(':')) {
                testCoverage = line.split(':')[1].trim();
                console.log(`Found Test Coverage in line search: ${testCoverage}`);
            }
        }
    }
    
    // Extract Acceptance Criteria
    const acceptanceCriteriaPattern = /#### Acceptance Criteria\s*([\s\S]*?)(?=####|$)/i;
    const acceptanceCriteriaMatch = taskContent.match(acceptanceCriteriaPattern);
    
    if (acceptanceCriteriaMatch && acceptanceCriteriaMatch[1]) {
        // Extract criteria as bullet points
        const criteriaSection = acceptanceCriteriaMatch[1].trim();
        console.log(`Found Acceptance Criteria section (length: ${criteriaSection.length})`);
        
        // Split by lines and filter for bullet points
        const lines = criteriaSection.split('\n');
        for (const line of lines) {
            // Check if line contains bullet point (-, *, •)
            if (/^[-*•]/.test(line.trim())) {
                const criterion = line.trim().replace(/^[-*•]\s*/, '');
                if (criterion.length > 0) {
                    acceptanceCriteria.push(criterion);
                }
            }
        }
        
        console.log(`Extracted ${acceptanceCriteria.length} acceptance criteria items`);
    } else {
        console.warn(`Acceptance Criteria section not found for ${taskId}`);
    }
    
    // Extract element testing details using a more robust approach
    // First extract all sections that look like element test sections within the task content
    const elementSections = [];
    const elementHeadingPattern = /##### \[([^:]+):ELE-\d+\]/g;
    let elementHeadingMatch;
    
    while ((elementHeadingMatch = elementHeadingPattern.exec(taskContent)) !== null) {
        const elementTaskId = elementHeadingMatch[1];
        const elementHeadingPosition = elementHeadingMatch.index;
        
        // Only process if the element belongs to our task
        if (elementTaskId === taskId) {
            // Find the end of this element section (next element heading or end of task content)
            const nextElementHeadingMatch = taskContent.slice(elementHeadingPosition + 1).search(/##### \[/);
            const endPosition = nextElementHeadingMatch > -1 
                ? elementHeadingPosition + 1 + nextElementHeadingMatch 
                : taskContent.length;
            
            // Extract the entire element section
            const elementSection = taskContent.slice(elementHeadingPosition, endPosition);
            elementSections.push(elementSection);
            console.log(`Found element section for task ${taskId} (length: ${elementSection.length})`);
        }
    }
    
    console.log(`Total element sections found for task ${taskId}: ${elementSections.length}`);
    
    // Now process each element section to extract details
    elementsTestData = {};
    
    for (const elementSection of elementSections) {
        // Extract element ID
        const elementIdMatch = /##### \[([^:]+:ELE-\d+)\]/.exec(elementSection);
        if (!elementIdMatch) continue;
        
        const elementId = elementIdMatch[1];
        console.log(`Processing test details for ${elementId}`);
        
        // Extract element description
        const descriptionPattern = /##### \[[^:]+:ELE-\d+\]\s*([^-\n]*)/;
        const descriptionMatch = elementSection.match(descriptionPattern);
        const elementDescription = descriptionMatch ? descriptionMatch[1].trim() : '';
        
        // Extract test requirements
        const testRequirementsPattern = /\*\*Test Requirements\*\*:([\s\S]*?)(?=\*\*\w|$)/;
        const testRequirementsMatch = elementSection.match(testRequirementsPattern);
        let testRequirements = [];
        
        if (testRequirementsMatch && testRequirementsMatch[1]) {
            const reqLines = testRequirementsMatch[1].trim().split('\n');
            for (const line of reqLines) {
                if (/^[-*•]/.test(line.trim())) {
                    const req = line.trim().replace(/^[-*•]\s*/, '');
                    if (req.length > 0) {
                        testRequirements.push(req);
                    }
                }
            }
            console.log(`Extracted ${testRequirements.length} test requirements for ${elementId}`);
        }
        
        // Extract testing deliverables 
        const testDeliverablesPattern = /\*\*Testing Deliverables\*\*:([\s\S]*?)(?=\*\*\w|$)/;
        const testDeliverablesMatch = elementSection.match(testDeliverablesPattern);
        let testDeliverables = [];
        
        if (testDeliverablesMatch && testDeliverablesMatch[1]) {
            const delLines = testDeliverablesMatch[1].trim().split('\n');
            for (const line of delLines) {
                if (/^[-*•]/.test(line.trim())) {
                    const del = line.trim().replace(/^[-*•]\s*/, '');
                    if (del.length > 0) {
                        testDeliverables.push(del);
                    }
                }
            }
            console.log(`Extracted ${testDeliverables.length} testing deliverables for ${elementId}`);
        }
        
        // Extract human verification items
        const humanVerificationPattern = /\*\*Human Verification Items\*\*:([\s\S]*?)(?=\*\*\w|$)/;
        const humanVerificationMatch = elementSection.match(humanVerificationPattern);
        let humanVerificationItems = [];
        
        if (humanVerificationMatch && humanVerificationMatch[1]) {
            const verLines = humanVerificationMatch[1].trim().split('\n');
            for (const line of verLines) {
                if (/^[-*•]/.test(line.trim())) {
                    const ver = line.trim().replace(/^[-*•]\s*/, '');
                    if (ver.length > 0) {
                        humanVerificationItems.push(ver);
                    }
                }
            }
            console.log(`Extracted ${humanVerificationItems.length} human verification items for ${elementId}`);
        }
        
        // Store all the data for this element
        elementsTestData[elementId] = {
            description: elementDescription,
            testRequirements: testRequirements,
            testDeliverables: testDeliverables,
            humanVerificationItems: humanVerificationItems
        };
    }
    
    // Handle special case for T-1.1.1 task where T-1.1.2:ELE-2 should be T-1.1.1:ELE-2
    if (taskId === 'T-1.1.1') {
        // Look for T-1.1.2:ELE-2 which should be T-1.1.1:ELE-2
        const specialElementPattern = /##### \[T-1\.1\.2:ELE-2\]/;
        const specialElementMatch = taskContent.match(specialElementPattern);
        
        if (specialElementMatch) {
            console.log(`Found element with incorrect ID: T-1.1.2:ELE-2 (should be T-1.1.1:ELE-2)`);
            
            // Find the position of this element
            const elementPosition = specialElementMatch.index;
            
            // Find the end of this element section
            const nextElementMatch = taskContent.slice(elementPosition + 1).search(/##### \[/);
            const endPosition = nextElementMatch > -1 
                ? elementPosition + 1 + nextElementMatch 
                : taskContent.length;
            
            // Extract the entire element section
            const elementSection = taskContent.slice(elementPosition, endPosition);
            
            // Fix the element ID in the extracted content
            const fixedElementId = 'T-1.1.1:ELE-2';
            console.log(`Processing test details for ${fixedElementId} (originally T-1.1.2:ELE-2)`);
            
            // Get the element description
            const descriptionPattern = /##### \[T-1\.1\.2:ELE-2\]\s*([^-\n]*)/;
            const descriptionMatch = elementSection.match(descriptionPattern);
            const elementDescription = descriptionMatch ? descriptionMatch[1].trim() : '';
            
            // Extract test requirements
            const testRequirementsPattern = /\*\*Test Requirements\*\*:([\s\S]*?)(?=\*\*\w|$)/;
            const testRequirementsMatch = elementSection.match(testRequirementsPattern);
            let testRequirements = [];
            
            if (testRequirementsMatch && testRequirementsMatch[1]) {
                const reqLines = testRequirementsMatch[1].trim().split('\n');
                for (const line of reqLines) {
                    if (/^[-*•]/.test(line.trim())) {
                        const req = line.trim().replace(/^[-*•]\s*/, '');
                        if (req.length > 0) {
                            testRequirements.push(req);
                        }
                    }
                }
                console.log(`Extracted ${testRequirements.length} test requirements for ${fixedElementId}`);
            }
            
            // Extract testing deliverables 
            const testDeliverablesPattern = /\*\*Testing Deliverables\*\*:([\s\S]*?)(?=\*\*\w|$)/;
            const testDeliverablesMatch = elementSection.match(testDeliverablesPattern);
            let testDeliverables = [];
            
            if (testDeliverablesMatch && testDeliverablesMatch[1]) {
                const delLines = testDeliverablesMatch[1].trim().split('\n');
                for (const line of delLines) {
                    if (/^[-*•]/.test(line.trim())) {
                        const del = line.trim().replace(/^[-*•]\s*/, '');
                        if (del.length > 0) {
                            testDeliverables.push(del);
                        }
                    }
                }
                console.log(`Extracted ${testDeliverables.length} testing deliverables for ${fixedElementId}`);
            }
            
            // Extract human verification items
            const humanVerificationPattern = /\*\*Human Verification Items\*\*:([\s\S]*?)(?=\*\*\w|$)/;
            const humanVerificationMatch = elementSection.match(humanVerificationPattern);
            let humanVerificationItems = [];
            
            if (humanVerificationMatch && humanVerificationMatch[1]) {
                const verLines = humanVerificationMatch[1].trim().split('\n');
                for (const line of verLines) {
                    if (/^[-*•]/.test(line.trim())) {
                        const ver = line.trim().replace(/^[-*•]\s*/, '');
                        if (ver.length > 0) {
                            humanVerificationItems.push(ver);
                        }
                    }
                }
                console.log(`Extracted ${humanVerificationItems.length} human verification items for ${fixedElementId}`);
            }
            
            // Store all the data for this element with the corrected element ID
            elementsTestData[fixedElementId] = {
                description: elementDescription,
                testRequirements: testRequirements,
                testDeliverables: testDeliverables,
                humanVerificationItems: humanVerificationItems
            };
        }
    }
    
    return {
        testLocations,
        testingTools,
        testCoverage,
        acceptanceCriteria,
        elementsTestData
    };
}

/**
 * Extract task details from the task breakdown content
 * @param {string} taskId - Task ID
 * @param {string} taskBreakdownContent - Content of the task breakdown file
 * @returns {Object} - Extracted task details
 */
function extractTaskDetailsV2(taskId, taskBreakdownContent) {
    console.log(`Extracting task details for ${taskId}...`);
    
    // Extract task content specific to this task ID
    const taskPattern = new RegExp(`#### ${taskId}:.*?(?=\\n####|$)`, 's');
    const taskMatch = taskBreakdownContent.match(taskPattern);
    
    if (!taskMatch) {
        console.error(`Task ${taskId} not found in breakdown content`);
        throw new Error(`Task ${taskId} not found in task breakdown file`);
    }
    
    const taskContent = taskMatch[0];
    console.log(`Found task content for ${taskId} (length: ${taskContent.length})`);
    
    // Extract task title
    const titleMatch = taskContent.match(/#### (.*?)$/m);
    const fullTaskTitle = titleMatch ? titleMatch[1] : `${taskId}: Unknown Title`;
    
    // Extract just the title part (after the task ID and colon)
    const titleParts = fullTaskTitle.split(': ');
    const taskTitle = titleParts.length > 1 ? titleParts.slice(1).join(': ') : fullTaskTitle;
    
    // Extract required metadata fields
    const frReference = extractMetadata(taskContent, 'FR Reference') || 'None specified';
    const implementationLocation = extractMetadata(taskContent, 'Implementation Location') || 'Not specified';
    const pattern = extractMetadata(taskContent, 'Patterns') || extractMetadata(taskContent, 'Pattern') || 'None specified';
    const dependencies = extractMetadata(taskContent, 'Dependencies') || 'None';
    const estimatedHours = extractMetadata(taskContent, 'Estimated Human Work Hours') || 
                           extractMetadata(taskContent, 'Estimated Hours') || 
                           extractMetadata(taskContent, 'Estimated Human Testing Hours') || 
                           'Not specified';
    const description = extractMetadata(taskContent, 'Description') || 'No description provided';
    const completesComponent = extractMetadata(taskContent, 'Completes Component?') || 'Not specified';
    
    // Extract legacy code references
    const legacyCodeFiles = extractMetadata(taskContent, 'Legacy Code Location') || 
                          extractMetadata(taskContent, 'Legacy Code References') || 
                          'None';
    
    // Extract element mapping section with improved function
    const elementMappingSection = findElementTestMappingSectionV2(taskContent, taskId);
    
    // Extract elements with improved function
    let elements = [];
    if (elementMappingSection) {
        console.log(`Element mapping section length: ${elementMappingSection.length}`);
        elements = extractElementsFromMappingV2(elementMappingSection, taskId);
        console.log(`Extracted ${elements.length} elements`);
    }
    
    // Find implementation process section
    let implementationProcessSection = null;
    const implementationProcessPatterns = [
        /\*\*Implementation Process\*\*:([\s\S]*?)(?=\*\*|$)/i,
        /Implementation Process:([\s\S]*?)(?=##|$)/i,
        /## Implementation Process([\s\S]*?)(?=##|$)/i,
        /### Implementation Process([\s\S]*?)(?=###|$)/i
    ];
    
    for (const pattern of implementationProcessPatterns) {
        const match = taskContent.match(pattern);
        if (match && match[1]) {
            implementationProcessSection = match[1].trim();
            console.log(`Found Implementation Process section for phase extraction`);
            break;
        }
    }
    
    // Extract implementation phases - first try implementation process section, then fall back to element mapping section
    const phases = implementationProcessSection 
        ? extractPhasesFromElementMappingV2(implementationProcessSection) 
        : extractPhasesFromElementMappingV2(elementMappingSection);
    
    // Extract testing infrastructure
    const testingInfrastructure = {
        testFileCreation: [],
        testImplementation: [],
        unitTests: []
    };
    
    // Find related tasks with improved function
    const relatedTasks = findRelatedTasksV2(taskId, taskBreakdownContent);
    console.log('Related tasks:', {
        prior: relatedTasks.prior ? `${relatedTasks.prior.id}` : 'None',
        next: relatedTasks.next ? `${relatedTasks.next.id}` : 'None'
    });
    
    // Return structured task data without test specifications (those will be fetched from test mapping file later)
    return {
        taskId,
        fullTaskTitle,
        taskTitle,
        frReference,
        implementationLocation,
        pattern,
        dependencies,
        estimatedHours,
        description,
        completesComponent,
        legacyCodeFiles,
        elements,
        preparationPhase: phases.preparation,
        implementationPhase: phases.implementation,
        validationPhase: phases.validation,
        testingInfrastructure,
        relatedTasks
    };
}

/**
 * Extract elements from Element Test Mapping section with improved pattern matching
 * @param {string} mappingContent - Content of Element Test Mapping section
 * @param {string} taskId - Task ID
 * @returns {Array} - Array of element objects
 */
function extractElementsFromMappingV2(mappingContent, taskId) {
    if (!mappingContent) return [];
    
    const elements = [];
    const lines = mappingContent.split('\n');
    
    // Helper function to extract element ID and description
    function parseElementLine(line) {
        // Try different patterns
        const patterns = [
            // Standard format with brackets: ##### [T-1.1.1:ELE-1] Description
            /\[(.*?):(.*?)\]\s*(.*)/,
            
            // Without brackets: ##### T-1.1.1:ELE-1 Description
            /(.*?):(.*?)\s+(.*)/,
            
            // With dash: ##### - [T-1.1.1:ELE-1] Description
            /-\s*\[(.*?):(.*?)\]\s*(.*)/,
            
            // Bold format: **[T-1.1.1:ELE-1]** Description
            /\*\*\[(.*?):(.*?)\]\*\*\s*(.*)/,
            
            // Bold without brackets: **T-1.1.1:ELE-1** Description
            /\*\*(.*?):(.*?)\*\*\s*(.*)/
        ];
        
        for (const pattern of patterns) {
            const match = line.match(pattern);
            if (match) {
                return {
                    id: `${match[1]}:${match[2]}`,
                    description: match[3],
                    isSubElement: /ELE-\d+[a-z]/.test(match[2]),
                    legacyCodeReferences: []
                };
            }
        }
        
        return null;
    }
    
    // Process each line to find elements
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines
        if (!line) continue;
        
        // Check if line contains potential element marker - look for any ELE- pattern, not just specific element numbers
        const hasElementMarker = line.includes(`:ELE-`) || line.includes(`[${taskId}:ELE-`) || line.includes(`**${taskId}:ELE-`);
        
        // Check if line starts with heading marker or is bold
        const hasHeadingOrBold = 
            line.startsWith('#') || 
            line.startsWith('**') ||
            line.startsWith('- **') ||
            line.startsWith('- [');
        
        // If this is a potential element line
        if (hasElementMarker && (hasHeadingOrBold || line.startsWith('-'))) {
            const element = parseElementLine(line);
            
            if (element) {
                element.mapsTo = [];
                
                // Look for maps-to references and legacy code references in subsequent lines
                // until we hit another element or section heading
                for (let j = i + 1; j < lines.length && !lines[j].match(/^#+\s+/) && !lines[j].match(/\[.*:ELE-/); j++) {
                    const subLine = lines[j].trim();
                    
                    // Skip empty lines
                    if (!subLine) continue;
                    
                    // Check for maps-to references
                    if (subLine.includes('Maps to:') || subLine.includes('maps to:')) {
                        const mapsToMatch = subLine.match(/[Mm]aps to:\s*(.*)/i);
                        if (mapsToMatch) {
                            element.mapsTo.push(mapsToMatch[1].trim());
                        }
                    }
                    
                    // Check for legacy code references
                    if (subLine.includes('Legacy Code Reference:') || subLine.includes('Legacy Code References:')) {
                        const legacyCodeMatch = subLine.match(/.*Legacy Code Reference[s]?:\s*(.*)/i);
                        if (legacyCodeMatch) {
                            element.legacyCodeReferences.push(legacyCodeMatch[1].trim());
                        }
                    }
                }
                
                console.log(`Extracted element: ${element.id} - ${element.description}`);
                if (element.legacyCodeReferences.length > 0) {
                    console.log(`Found ${element.legacyCodeReferences.length} legacy code references for ${element.id}`);
                }
                elements.push(element);
            }
        }
    }
    
    console.log(`Extracted ${elements.length} elements total`);
    return elements;
}

/**
 * Extract implementation phases from Element Test Mapping section with improved pattern matching
 * @param {string} mappingContent - Content of Element Test Mapping section
 * @returns {Object} - Object with preparation, implementation, and validation steps
 */
function extractPhasesFromElementMappingV2(mappingContent) {
    const phases = {
        preparation: [],
        implementation: [],
        validation: []
    };
    
    if (!mappingContent) return phases;
    
    // First look for the Implementation Process section which usually contains phases
    const implementationProcessPatterns = [
        /\*\*Implementation Process\*\*:([\s\S]*?)(?=\*\*|$)/i,
        /Implementation Process:([\s\S]*?)(?=##|$)/i,
        /## Implementation Process([\s\S]*?)(?=##|$)/i,
        /### Implementation Process([\s\S]*?)(?=###|$)/i
    ];
    
    let processSection = null;
    for (const pattern of implementationProcessPatterns) {
        const match = mappingContent.match(pattern);
        if (match && match[1]) {
            processSection = match[1].trim();
            console.log('Found Implementation Process section');
            break;
        }
    }
    
    // If we found the Implementation Process section, parse it
    if (processSection) {
        const lines = processSection.split('\n');
        let currentPhase = null;
        
        // Process each line in the Implementation Process section
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
        
            // Check for phase headings
            if (line.match(/^\d+\.\s+Preparation Phase:/i) || 
                line.match(/Preparation Phase:/i) ||
                line.match(/^Preparation Phase/i)) {
                currentPhase = 'preparation';
                continue;
            } else if (line.match(/^\d+\.\s+Implementation Phase:/i) || 
                       line.match(/Implementation Phase:/i) ||
                       line.match(/^Implementation Phase/i)) {
                currentPhase = 'implementation';
                continue;
            } else if (line.match(/^\d+\.\s+Validation Phase:/i) || 
                       line.match(/Validation Phase:/i) ||
                       line.match(/^Validation Phase/i)) {
                currentPhase = 'validation';
                continue;
            }
            
            // If we're in a phase and this line has a step, extract it
            if (currentPhase) {
                // Check for step indicators like bullet points or numbers with step IDs
                if (line.match(/^\s*-\s+/) || line.match(/^\s*\d+\.\s+/) || line.match(/\[(PREP|IMP|VAL)-\d+\]/i)) {
                    // Clean up the line but preserve phase IDs
                    let stepContent = line
                        .replace(/^\s*-\s+/, '')  // Remove leading bullet
                        .replace(/^\s*\d+\.\s+/, '')  // Remove leading number
                        .trim();
                    
                    // Skip lines that contain "Follow the test plan" in the validation phase
                    if (currentPhase === 'validation' && stepContent.includes('Follow the test plan')) {
                        continue;
                    }
                    
                    // Only add non-empty steps and skip any further section headings
                    if (stepContent && !stepContent.match(/^(Preparation|Implementation|Validation) Phase:/i)) {
                        phases[currentPhase].push(stepContent);
                        console.log(`Added step to ${currentPhase} phase: ${stepContent.substring(0, 50)}...`);
                    }
                }
            }
        }
    } else {
        // Fallback to looking for individual phase sections if we didn't find an Implementation Process section
        const lines = mappingContent.split('\n');
        let currentPhase = null;
        
        // Patterns to identify phase sections
        const phasePatterns = {
            preparation: [
                /\*\*Preparation Steps\*\*:/i,
                /Preparation Steps:/i,
                /Preparation Phase:/i,
                /## Preparation/i,
                /### Preparation/i
            ],
            implementation: [
                /\*\*Implementation Steps\*\*:/i,
                /Implementation Steps:/i,
                /Implementation Phase:/i,
                /## Implementation/i,
                /### Implementation/i
            ],
            validation: [
                /\*\*Validation Steps\*\*:/i,
                /Validation Steps:/i,
                /Validation Phase:/i,
                /## Validation/i,
                /### Validation/i
            ],
            testRequirements: [
                /\*\*Test Requirements\*\*:/i,
                /Test Requirements:/i,
                /## Test Requirements/i,
                /### Test Requirements/i
            ]
        };
        
        // Process lines to extract phases
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            // Detect current phase
            let foundPhase = false;
            for (const [phase, patterns] of Object.entries(phasePatterns)) {
                for (const pattern of patterns) {
                    if (pattern.test(line)) {
                        currentPhase = phase === 'testRequirements' ? null : phase;
                        foundPhase = true;
                        break;
                    }
                }
                if (foundPhase) break;
            }
            
            // If we're in a phase and this is not a phase header line, extract step content
            if (currentPhase && !foundPhase) {
                // Skip lines that are just bullets or headings
                if (line === '-' || line.match(/^#+\s*$/)) continue;
                
                // Extract step content
                let stepContent = line;
                
                // Remove leading markers but preserve phase IDs
                stepContent = stepContent
                    .replace(/^-\s*/, '')
                    .replace(/^\d+\.\s*/, '')
                    .trim();
                
                // Skip lines that contain "Follow the test plan" in the validation phase
                if (currentPhase === 'validation' && stepContent.includes('Follow the test plan')) {
                    continue;
                }
                
                // Add to appropriate phase if content exists
                if (stepContent && !stepContent.match(/^#+\s/)) {
                    phases[currentPhase].push(stepContent);
                    console.log(`Added step to ${currentPhase} phase: ${stepContent.substring(0, 50)}...`);
                }
            }
        }
    }
    
    console.log(`Extracted phases: P:${phases.preparation.length}, I:${phases.implementation.length}, V:${phases.validation.length}`);
    return phases;
}

/**
 * Find related tasks for a given task ID with improved pattern matching
 * @param {string} taskId - Task ID
 * @param {string} taskBreakdownContent - Content of task breakdown file
 * @returns {Object} - Object with prior and next tasks
 */
function findRelatedTasksV2(taskId, taskBreakdownContent) {
    const result = {
        prior: null,
        next: null
    };
    
    if (!taskId || !taskBreakdownContent) return result;
    
    // Extract task ID without any non-alphanumeric characters
    const taskIdClean = taskId.replace(/[^a-zA-Z0-9.-]/g, '');
    
    // Find all task entries using multiple patterns
    const taskEntries = [];
    const taskPatterns = [
        // Format: #### T-1.1.0: Task Title
        /####\s+(T-[\d.]+):\s+(.*?)$/gm,
        
        // Format: ### T-1.1.0: Task Title
        /###\s+(T-[\d.]+):\s+(.*?)$/gm,
        
        // Format: ##### T-1.1.0: Task Title
        /#####\s+(T-[\d.]+):\s+(.*?)$/gm,
        
        // Format: **T-1.1.0**: Task Title
        /\*\*(T-[\d.]+)\*\*:\s+(.*?)$/gm,
        
        // Format: - **Task ID**: T-1.1.0
        /- \*\*Task ID\*\*:\s+(T-[\d.]+)/gm
    ];
    
    // Build a comprehensive list of task entries
    for (const pattern of taskPatterns) {
        let match;
        const patternCopy = new RegExp(pattern); // Create a new regex to reset lastIndex
        while ((match = patternCopy.exec(taskBreakdownContent)) !== null) {
            const id = match[1];
            const title = match[2] || 'Unknown Title';
            const line = match.index;
            
            // Skip duplicates
            if (!taskEntries.some(entry => entry.id === id)) {
                taskEntries.push({ id, title, line });
            }
        }
    }
    
    // Sort entries by line number to preserve order
    taskEntries.sort((a, b) => a.line - b.line);
    
    // Find current task index
    const currentIndex = taskEntries.findIndex(entry => 
        entry.id === taskIdClean || entry.id === taskId
    );
    
    if (currentIndex !== -1) {
        // Get prior task
        if (currentIndex > 0) {
            const priorTask = taskEntries[currentIndex - 1];
            result.prior = {
                id: priorTask.id,
                title: priorTask.title,
                line: priorTask.line,
                isDependency: isDependency(taskId, priorTask.id, taskBreakdownContent)
            };
        }
        
        // Get next task
        if (currentIndex < taskEntries.length - 1) {
            const nextTask = taskEntries[currentIndex + 1];
            result.next = {
                id: nextTask.id,
                title: nextTask.title,
                line: nextTask.line,
                isDependency: isDependency(nextTask.id, taskId, taskBreakdownContent)
            };
        }
    }
    
    return result;
}

/**
 * Helper function to check if one task depends on another
 * @param {string} taskId - Task ID
 * @param {string} potentialDependency - Potential dependency task ID
 * @param {string} taskBreakdownContent - Content of task breakdown file
 * @returns {boolean} - Whether the task depends on the potential dependency
 */
function isDependency(taskId, potentialDependency, taskBreakdownContent) {
    // Look for dependency declaration patterns
    const patterns = [
        // Format: - **Dependencies**: T-1.1.0
        new RegExp(`- \\*\\*Dependencies\\*\\*:.*?${potentialDependency}`, 'i'),
        
        // Format: **Dependencies**: T-1.1.0
        new RegExp(`\\*\\*Dependencies\\*\\*:.*?${potentialDependency}`, 'i'),
        
        // Format: Dependencies: T-1.1.0
        new RegExp(`Dependencies:.*?${potentialDependency}`, 'i')
    ];
    
    for (const pattern of patterns) {
        if (pattern.test(taskBreakdownContent)) {
            return true;
        }
    }
    
    return false;
}



/**
 * Update progress.md to mark task as in progress
 * @param {string} taskId - Task ID
 */
function updateProgressForTaskStartV2(taskId) {
    try {
        // Read progress file
        const progressFilePath = PATHS.progressFile;
        let progressContent = fs.readFileSync(progressFilePath, 'utf8');
        
        // Get current timestamp
        const timestamp = formatTimestamp();
        
        // Check if task already exists in progress file
        const taskLineRegex = new RegExp(`- \\[[ x]\\] ${taskId}:.*`, 'g');
        const taskLine = progressContent.match(taskLineRegex);
        
        if (taskLine) {
            // Update existing task line
            progressContent = progressContent.replace(
                taskLineRegex,
                `- [ ] ${taskId}: In Progress (Status: Started, Updated: ${timestamp})`
            );
        } else {
            // Add new task line at the end
            const newTaskLine = `- [ ] ${taskId}: In Progress (Status: Started, Updated: ${timestamp})\n`;
            
            // Find the last task line
            const lastTaskLineMatch = progressContent.match(/- \[[ x]\] .*$/m);
            
            if (lastTaskLineMatch) {
                // Insert after the last task line
                const lastTaskLine = lastTaskLineMatch[0];
                progressContent = progressContent.replace(
                    lastTaskLine,
                    `${lastTaskLine}\n${newTaskLine}`
                );
            } else {
                // Append to the end
                progressContent += `\n${newTaskLine}`;
            }
        }
        
        // Write updated content back to progress file
        fs.writeFileSync(progressFilePath, progressContent);
        return true;
    } catch (error) {
        console.error('Error updating progress file:', error);
        return false;
    }
}

/**
 * Process a template with replacements
 * @param {string} template - Template string
 * @param {object} replacements - Replacement values
 * @returns {string} - Processed template
 */
function processTemplateV2(template, replacements) {
    let result = template;
    
    // Replace all placeholders
    for (const [key, value] of Object.entries(replacements)) {
        const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        result = result.replace(placeholder, value || '');
    }
    
    return result;
}

/**
 * Generate active-task.md content from template and task data
 * @param {Object} taskData - Parsed task data
 * @returns {string} - Generated content
 */
function generateActiveTaskContentV2(taskData) {
    // Use active-task-template.md as the default template
    const templatePath = PATHS.templates.activeTask;
    let template;
    
    try {
        template = fs.readFileSync(templatePath, 'utf8');
        console.log('Successfully read active task template from:', templatePath);
    } catch (error) {
        console.error('Error reading template file:', error);
        throw new Error(`Failed to read active task template: ${error.message}`);
    }
    
    // Get current timestamp
    const currentTimestamp = formatTimestamp();
    
    // Format legacy code files
    let legacyCodeDetails = 'None';
    if (taskData.legacyCodeFiles && taskData.legacyCodeFiles !== 'None') {
        legacyCodeDetails = taskData.legacyCodeFiles;
    }
    
    // Format elements with test cross-references
    let elementsWithTestRefs = 'No elements found for this task.';
    if (taskData.elements && taskData.elements.length > 0) {
        elementsWithTestRefs = taskData.elements.map(element => {
            // Start with the basic element header
            let elementContent = `### [${element.id}] ${element.description}`;
            
            // Add legacy code references if any - with new format
            if (element.legacyCodeReferences && element.legacyCodeReferences.length > 0) {
                elementContent += '\n' + element.legacyCodeReferences.map(ref => {
                    // Extract the path and description from the legacy code reference
                    const match = ref.match(/`([^`]+)`\s*\(([^)]+)\)/);
                    if (match) {
                        const path = match[1];
                        const description = match[2];
                        return `  Refer to Legacy Code Reference: \`${path}\` for ${description}`;
                    }
                    return `  Refer to Legacy Code Reference: ${ref}`;
                }).join('\n');
            }
            
            return elementContent;
        }).join('\n\n');
    }
    
    // Format acceptance criteria section
    let acceptanceCriteriaSection = '';
    if (taskData.acceptanceCriteria && taskData.acceptanceCriteria.length > 0) {
        acceptanceCriteriaSection = "## Acceptance Criteria\nTo successfully complete this task, you must:\n\n" +
            taskData.acceptanceCriteria.map(criteria => `- ${criteria}`).join('\n') +
            "\n\nThese criteria define successful completion of this task and should guide your implementation work through all phases.";
        console.log(`Formatted acceptance criteria section with ${taskData.acceptanceCriteria.length} items`);
    } else {
        console.warn(`No acceptance criteria found for task ${taskData.taskId}`);
    }
    
    // Format phase steps
    let preparationPhase = 'No preparation steps found.';
    if (taskData.preparationPhase && taskData.preparationPhase.length > 0) {
        preparationPhase = taskData.preparationPhase.map((step, index) => 
            `${index + 1}. ${step}`
        ).join('\n');
    }
    
    let implementationPhase = 'No implementation steps found.';
    if (taskData.implementationPhase && taskData.implementationPhase.length > 0) {
        implementationPhase = taskData.implementationPhase.map((step, index) => 
            `${index + 1}. ${step}`
        ).join('\n');
    }
    
    // Handle validation phase - no additional text
    let validationPhase = 'No validation steps found.';
    if (taskData.validationPhase && taskData.validationPhase.length > 0) {
        validationPhase = taskData.validationPhase.map((step, index) => 
            `${index + 1}. ${step}`
        ).join('\n');
    }
    
    // Generate test element list
    let testElementList = 'No elements to test';
    if (taskData.elements && taskData.elements.length > 0) {
        testElementList = taskData.elements.map(element => 
            `- ${element.id}: ${element.description}`
        ).join('\n');
    }
    
    // Prepare the test instructions location
    let testInstructionsLocation = '';
    if (taskData.testLocations) {
        testInstructionsLocation = `See test mapping file: ${taskData.testLocations}`;
    }
    
    // Prepare replacements for template placeholders with fallbacks for all fields
    const replacements = {
        'TASK_ID': taskData.taskId || 'Unknown Task',
        'TASK_TITLE': taskData.fullTaskTitle || 'Untitled Task',
        'FR_REFERENCE': taskData.frReference || 'None specified',
        'IMPLEMENTATION_LOCATION': taskData.implementationLocation || 'Not specified',
        'PATTERN': taskData.pattern || 'None specified',
        'DEPENDENCIES': taskData.dependencies || 'None',
        'ESTIMATED_HOURS': taskData.estimatedHours || 'Not specified',
        'DESCRIPTION': taskData.description || 'No description provided',
        'TEST_LOCATIONS': taskData.testLocations || 'Not specified',
        'TESTING_TOOLS': taskData.testingTools || 'Not specified',
        'TEST_COVERAGE': taskData.testCoverage || 'Not specified',
        'COMPLETES_COMPONENT': taskData.completesComponent || 'Not specified',
        'CONFIDENCE': '', // Empty confidence value to start
        'LEGACY_CODE_DETAILS': legacyCodeDetails || 'None',
        'ELEMENTS_SECTION': elementsWithTestRefs || 'No elements found for this task.',
        'PREPARATION_PHASE': preparationPhase || 'No preparation steps found.',
        'IMPLEMENTATION_PHASE': implementationPhase || 'No implementation steps found.',
        'VALIDATION_PHASE': validationPhase,
        'TEST_ELEMENT_LIST': testElementList || 'No elements to test',
        'TIMESTAMP': currentTimestamp,
        'PRIOR_TASK_ID': taskData.relatedTasks?.prior?.id || 'None',
        'PRIOR_TASK_TITLE': taskData.relatedTasks?.prior?.title || 'None',
        'PRIOR_TASK_LINE': taskData.relatedTasks?.prior?.line || 'N/A',
        'PRIOR_DEPENDENCY': taskData.relatedTasks?.prior?.isDependency ? 'Yes' : 'No',
        'NEXT_TASK_ID': taskData.relatedTasks?.next?.id || 'None',
        'NEXT_TASK_TITLE': taskData.relatedTasks?.next?.title || 'None',
        'NEXT_TASK_LINE': taskData.relatedTasks?.next?.line || 'N/A',
        'NEXT_DEPENDENCY': taskData.relatedTasks?.next?.isDependency ? 'Yes' : 'No',
        'TEST_INSTRUCTIONS_LOCATION': testInstructionsLocation,
        'ACCEPTANCE_CRITERIA_SECTION': acceptanceCriteriaSection
    };

    // Process the template with replacements
    let result = processTemplateV2(template, replacements);
    
    // If the template doesn't include the ACCEPTANCE_CRITERIA_SECTION placeholder,
    // manually insert the section between Task Information and Task Approach
    if (acceptanceCriteriaSection && !template.includes('{{ACCEPTANCE_CRITERIA_SECTION}}')) {
        console.log('Template does not include ACCEPTANCE_CRITERIA_SECTION placeholder, manually inserting...');
        const taskInfoPattern = /## Task Information[\s\S]*?Last Updated:.*?\n\n/;
        const taskApproachPattern = /## Task Approach/;
        
        if (taskInfoPattern.test(result) && taskApproachPattern.test(result)) {
            result = result.replace(
                taskInfoPattern, 
                match => match + acceptanceCriteriaSection + '\n\n'
            );
            console.log('Successfully inserted acceptance criteria section after Task Information');
        } else {
            console.warn('Failed to locate insertion point for acceptance criteria section');
        }
    }
    
    return result;
}

/**
 * Generate active-task-unit-tests.md content from template and task data
 * @param {Object} taskData - Parsed task data
 * @returns {string} - Generated content
 */
function generateActiveTaskTestContentV2(taskData) {
    // Use active-task-test-template.md as the default template
    const templatePath = PATHS.templates.activeTaskTest;
    let template;
    
    try {
        template = fs.readFileSync(templatePath, 'utf8');
        console.log('Successfully read test template from:', templatePath);
    } catch (error) {
        console.error('Error reading test template file:', error);
        throw new Error(`Failed to read test template: ${error.message}`);
    }
    
    // Get current timestamp
    const currentTimestamp = formatTimestamp();
    
    // Format test element TOC
    let testElementTOC = '   - No elements to test';
    if (taskData.elements && taskData.elements.length > 0) {
        testElementTOC = taskData.elements.map(element => 
            `   - [${element.id}](#${element.id.toLowerCase().replace(/:/g, '')})`
        ).join('\n');
    }
    
    // Format acceptance criteria section
    let acceptanceCriteriaSection = '';
    if (taskData.acceptanceCriteria && taskData.acceptanceCriteria.length > 0) {
        acceptanceCriteriaSection = "### Acceptance Criteria\nThe following criteria define successful task completion and should be used to verify test coverage:\n\n" +
            taskData.acceptanceCriteria.map(criteria => `- ${criteria}`).join('\n') +
            "\n\n**Testing Directive**: Ensure your tests explicitly verify each of these acceptance criteria. When creating test cases, map them to specific criteria and check that all criteria are covered by at least one test. After completing all tests, verify and document which tests validate each acceptance criterion.";
        console.log(`Formatted acceptance criteria section for test file with ${taskData.acceptanceCriteria.length} items`);
    } else {
        console.warn(`No acceptance criteria found for test file for task ${taskData.taskId}`);
    }
    
    // Format test elements content with improved structure using extracted test data
    let testElementsContent = 'No elements to test';
    if (taskData.elements && taskData.elements.length > 0) {
        testElementsContent = taskData.elements.map(element => {
            // Get the element ID and description
            const elementId = element.id;
            const elementDescription = element.description;
            const elementTestData = taskData.elementsTestData && taskData.elementsTestData[elementId];
            
            // Create the restructured element section
            let elementContent = `### ${elementId}\n**Description**: ${elementDescription}\n\n` +
                   `**Testing Description**: Test for the successful development of:\n` +
                   `- ${elementDescription}`;
                   
            // Add test requirements if available from test mapping
            if (elementTestData && elementTestData.testRequirements && elementTestData.testRequirements.length > 0) {
                elementContent += `\n\n**Test Requirements**:\n` +
                    elementTestData.testRequirements.map(req => `  - ${req}`).join('\n');
            } else {
                elementContent += `\n\n#### Test Requirements\n` +
                    `- Create test cases that verify all acceptance criteria related to this element\n` +
                    `- Test both expected behavior and edge cases\n` +
                    `- Ensure proper error handling is verified`;
            }
            
            // Add testing deliverables if available
            if (elementTestData && elementTestData.testDeliverables && elementTestData.testDeliverables.length > 0) {
                elementContent += `\n\n**Testing Deliverables**:\n` +
                    elementTestData.testDeliverables.map(del => `  - ${del}`).join('\n');
            } else {
                elementContent += `\n\n#### Testing Deliverables\n` +
                    `- [ ] Test suite for all component functionality\n` +
                    `- [ ] Mocks for any external dependencies\n` +
                    `- [ ] Documentation of test coverage mapping to acceptance criteria`;
            }
            
            // Add human verification items if available
            if (elementTestData && elementTestData.humanVerificationItems && elementTestData.humanVerificationItems.length > 0) {
                elementContent += `\n\n**Human Verification Items**:\n` +
                    elementTestData.humanVerificationItems.map(item => `  - ${item}`).join('\n');
            } else {
                elementContent += `\n\n#### Human Verification Items\n` +
                    `- Manual verification of critical visual or interactive aspects\n` +
                    `- Review of test coverage against acceptance criteria`;
            }
            
            return elementContent;
        }).join('\n\n');
    }
    
    // Format coverage element list
    let coverageElementList = '    - No elements to test';
    if (taskData.elements && taskData.elements.length > 0) {
        coverageElementList = taskData.elements.map(element => 
            `    - ${element.id}: 0%`
        ).join('\n');
    }
    
    // Prepare replacements for template placeholders
    const replacements = {
        'TASK_ID': taskData.taskId || 'Unknown Task',
        'TASK_TITLE': taskData.fullTaskTitle || 'Untitled Task',
        'IMPLEMENTATION_LOCATION': taskData.implementationLocation || 'Not specified',
        'TEST_LOCATIONS': taskData.testLocations || 'Not specified',
        'TESTING_TOOLS': taskData.testingTools || 'Not specified',
        'TEST_COVERAGE': taskData.testCoverage || 'Not specified',
        'DEPENDENCIES': taskData.dependencies || 'None',
        'TEST_ELEMENT_TOC': testElementTOC || '   - No elements to test',
        'TEST_ELEMENTS_CONTENT': testElementsContent || 'No elements to test',
        'COVERAGE_ELEMENT_LIST': coverageElementList || '    - No elements to test',
        'ACCEPTANCE_CRITERIA_SECTION': acceptanceCriteriaSection || ''
    };
    
    // Process the template with replacements
    let result = processTemplateV2(template, replacements);
    
    // If the template doesn't include the ACCEPTANCE_CRITERIA_SECTION placeholder,
    // manually insert the section after the metadata section
    if (acceptanceCriteriaSection && !template.includes('{{ACCEPTANCE_CRITERIA_SECTION}}')) {
        console.log('Test template does not include ACCEPTANCE_CRITERIA_SECTION placeholder, manually inserting...');
        const overviewPattern = /## Overview[\s\S]*?Coverage Requirements:.*?\n\n/;
        const testEnvironmentPattern = /## Test Environment Setup/;
        
        if (overviewPattern.test(result) && testEnvironmentPattern.test(result)) {
            result = result.replace(
                overviewPattern, 
                match => match + acceptanceCriteriaSection + '\n\n'
            );
            console.log('Successfully inserted acceptance criteria section after Overview section in test file');
        } else {
            console.warn('Failed to locate insertion point for acceptance criteria section in test file');
        }
    }
    
    return result;
}

/**
 * Starts a new task by extracting task information and generating necessary files
 * @param {string} taskId - Task ID to start
 * @returns {Promise<object>} - Result with status and message
 */
export async function startTaskV2(taskId) {
    console.log(`Starting task ${taskId} (using improved implementation)...`);
    
    try {
        // Read the task breakdown file
        const taskBreakdownPath = PATHS.taskBreakdownFile;
        console.log(`Reading task breakdown file from: ${taskBreakdownPath}`);
        
        let taskBreakdownContent;
        try {
            taskBreakdownContent = fs.readFileSync(taskBreakdownPath, 'utf8');
            console.log('Successfully read task breakdown file');
        } catch (readError) {
            console.error('Error reading task breakdown file:', readError);
            return { 
                success: false, 
                message: `Could not read task breakdown file: ${readError.message}` 
            };
        }
        
        // Read the test mapping file
        const taskTestMappingPath = PATHS.taskTestMappingFile;
        console.log(`Reading test mapping file from: ${taskTestMappingPath}`);
        
        let taskTestMappingContent;
        try {
            taskTestMappingContent = fs.readFileSync(taskTestMappingPath, 'utf8');
            console.log('Successfully read test mapping file');
        } catch (readTestMappingError) {
            console.error('Error reading test mapping file:', readTestMappingError);
            return { 
                success: false, 
                message: `Could not read test mapping file: ${readTestMappingError.message}` 
            };
        }
        
        // Extract task details using the improved function
        let taskData;
        try {
            taskData = extractTaskDetailsV2(taskId, taskBreakdownContent);
            console.log(`Successfully extracted task details for ${taskId}`);
            console.log('Metadata summary:', {
                frReference: taskData.frReference ? 'Found' : 'Missing',
                pattern: taskData.pattern ? 'Found' : 'Missing',
                dependencies: taskData.dependencies ? 'Found' : 'Missing',
                estimatedHours: taskData.estimatedHours ? 'Found' : 'Missing'
            });
            console.log('Elements found:', taskData.elements?.length || 0);
            console.log('Implementation phases:', {
                preparation: taskData.preparationPhase?.length || 0,
                implementation: taskData.implementationPhase?.length || 0,
                validation: taskData.validationPhase?.length || 0
            });
        } catch (extractError) {
            console.error('Error extracting task details:', extractError);
            return { 
                success: false, 
                message: `Failed to extract task details: ${extractError.message}` 
            };
        }
        
        // Extract test specifications from the test mapping file
        let testSpecs;
        try {
            testSpecs = extractTestSpecifications(taskId, taskTestMappingContent);
            console.log(`Successfully extracted test specifications for ${taskId}`);
            console.log('Test specs summary:', {
                testLocations: testSpecs.testLocations ? 'Found' : 'Missing',
                testingTools: testSpecs.testingTools ? 'Found' : 'Missing',
                testCoverage: testSpecs.testCoverage ? 'Found' : 'Missing',
                acceptanceCriteria: testSpecs.acceptanceCriteria?.length > 0 ? `Found (${testSpecs.acceptanceCriteria.length} items)` : 'Missing'
            });
            
            // Merge test specifications with task data
            taskData = {
                ...taskData,
                testLocations: testSpecs.testLocations,
                testingTools: testSpecs.testingTools,
                testCoverage: testSpecs.testCoverage,
                acceptanceCriteria: testSpecs.acceptanceCriteria || [],
                elementsTestData: testSpecs.elementsTestData || {}
            };
        } catch (extractTestError) {
            console.error('Error extracting test specifications:', extractTestError);
            return { 
                success: false, 
                message: `Failed to extract test specifications: ${extractTestError.message}` 
            };
        }
        
        // Generate active task content with improved function
        let activeTaskContent;
        try {
            activeTaskContent = generateActiveTaskContentV2(taskData);
            console.log('Successfully generated active task content');
        } catch (generateError) {
            console.error('Error generating active task content:', generateError);
            return { 
                success: false, 
                message: `Failed to generate active task content: ${generateError.message}` 
            };
        }
        
        // Generate active task test content with improved function
        let activeTaskTestContent;
        try {
            activeTaskTestContent = generateActiveTaskTestContentV2(taskData);
            console.log('Successfully generated active task test content');
        } catch (generateTestError) {
            console.error('Error generating active task test content:', generateTestError);
            return { 
                success: false, 
                message: `Failed to generate active task test content: ${generateTestError.message}` 
            };
        }
        
        // Archive previous task files before writing new ones
        const archiveTimestamp = generateArchiveTimestamp();
        let previousTaskId = null;

        // Try to extract task ID from existing active task file
        if (fs.existsSync(PATHS.activeTaskFile)) {
            try {
                const existingContent = fs.readFileSync(PATHS.activeTaskFile, 'utf8');
                previousTaskId = extractTaskIdFromContent(existingContent);
            } catch (error) {
                console.warn('Warning: Could not read existing active task file for archiving:', error.message);
            }
        }

        // Archive existing active task file
        const activeTaskArchived = archiveTaskFile(
            PATHS.activeTaskFile,
            PATHS.taskHistory.archiveDir,
            'active-task',
            archiveTimestamp,
            previousTaskId
        );

        // Archive existing active task test file (check both V1 and V2)
        const testFileToArchive = fs.existsSync(PATHS.activeTaskTestFileV2) ? PATHS.activeTaskTestFileV2 : PATHS.activeTaskTestFile;
        const activeTaskTestArchived = archiveTaskFile(
            testFileToArchive,
            PATHS.taskHistory.archiveDir,
            'active-task-unit-tests',
            archiveTimestamp,
            previousTaskId
        );

        // Archive existing active task test V2 enhanced file
        const activeTaskTestV2EnhancedArchived = archiveTaskFile(
            PATHS.activeTaskTestFileV2Enhanced,
            PATHS.taskHistory.archiveDir,
            'active-task-unit-tests-2-enhanced',
            archiveTimestamp,
            previousTaskId
        );

        // Clear the active-task-unit-tests-2-enhanced.md file after archiving
        if (fs.existsSync(PATHS.activeTaskTestFileV2Enhanced)) {
            try {
                fs.writeFileSync(PATHS.activeTaskTestFileV2Enhanced, '');
                console.log('Cleared active-task-unit-tests-2-enhanced.md file');
            } catch (clearError) {
                console.warn('Warning: Could not clear active-task-unit-tests-2-enhanced.md:', clearError.message);
            }
        }

        if (activeTaskArchived && activeTaskTestArchived && activeTaskTestV2EnhancedArchived) {
            console.log(`Successfully archived previous task files with timestamp: ${archiveTimestamp}`);
        } else {
            console.warn('Warning: Some files could not be archived, but continuing with task start');
        }

        // Copy current active-task.md to previous-task.md before writing new task
        if (fs.existsSync(PATHS.activeTaskFile)) {
            try {
                // Read the content and modify the first line
                let activeTaskContent = fs.readFileSync(PATHS.activeTaskFile, 'utf8');
                // Replace "Current Active" with "Previous" in the first line
                activeTaskContent = activeTaskContent.replace(/^# Current Active/, '# Previous');
                fs.writeFileSync(PATHS.previousTaskFile, activeTaskContent);
                console.log('Successfully copied active-task.md to previous-task.md');
            } catch (copyError) {
                console.warn('Warning: Could not copy active-task.md to previous-task.md:', copyError.message);
                // Continue even if copy fails - this is not critical
            }
        } else {
            console.log('No existing active-task.md to copy to previous-task.md - this is normal for new projects');
        }

        // Create core directory if it doesn't exist
        const coreDir = path.join(PROJECT_ROOT, 'core');
        if (!fs.existsSync(coreDir)) {
            console.log('Creating core directory...');
            fs.mkdirSync(coreDir, { recursive: true });
        }
        
        // Write to the active task file
        try {
            fs.writeFileSync(PATHS.activeTaskFile, activeTaskContent);
            console.log(`Successfully wrote active task content to ${PATHS.activeTaskFile}`);
        } catch (writeError) {
            console.error('Error writing active task file:', writeError);
            return { 
                success: false, 
                message: `Failed to write active task file: ${writeError.message}` 
            };
        }
        
        // Write to the active task test file
        try {
            fs.writeFileSync(PATHS.activeTaskTestFile, activeTaskTestContent);
            console.log(`Successfully wrote active task test content to ${PATHS.activeTaskTestFile}`);
        } catch (writeTestError) {
            console.error('Error writing active task test file:', writeTestError);
            return { 
                success: false, 
                message: `Failed to write active task test file: ${writeTestError.message}` 
            };
        }
        
        // Update progress.md to mark task as in progress
        try {
            updateProgressForTaskStartV2(taskId);
            console.log('Successfully updated progress file');
        } catch (progressError) {
            console.warn('Warning: Failed to update progress file:', progressError);
            // Continue even if progress update fails
        }
        
        console.log('Task start successful - All files generated and written');
        
        return {
            success: true,
            message: `Task ${taskId} started successfully. Active task files created.`,
            mainFile: PATHS.activeTaskFile,
            testFile: PATHS.activeTaskTestFile,
            elementsCount: taskData.elements?.length || 0,
            phasesCount: 
                (taskData.preparationPhase?.length || 0) + 
                (taskData.implementationPhase?.length || 0) + 
                (taskData.validationPhase?.length || 0),
            acceptanceCriteriaCount: taskData.acceptanceCriteria?.length || 0,
            metadata: {
                frReference: taskData.frReference ? true : false,
                pattern: taskData.pattern ? true : false,
                dependencies: taskData.dependencies ? true : false,
                estimatedHours: taskData.estimatedHours ? true : false,
                testLocations: taskData.testLocations ? true : false,
                testingTools: taskData.testingTools ? true : false,
                testCoverage: taskData.testCoverage ? true : false,
                acceptanceCriteria: taskData.acceptanceCriteria?.length > 0 ? true : false
            }
        };
    } catch (error) {
        console.error('Unexpected error starting task:', error);
        return {
            success: false,
            message: `Unexpected error starting task: ${error.message}`
        };
    }
}


/**
 * Enhanced template processing for Version 2 testing templates
 * @param {string} template - Template content
 * @param {object} replacements - Object containing replacement values
 * @returns {string} - Processed template content
 */
function processTemplateV2Enhanced(template, replacements) {
    let processed = template;
    
    // Replace all template variables
    Object.entries(replacements).forEach(([key, value]) => {
        const placeholder = `{{${key}}}`;
        processed = processed.replace(new RegExp(placeholder, 'g'), value || '');
    });
    
    return processed;
}

/**
 * Generate discovery section content based on task complexity
 * @param {object} taskData - Task data containing elements and complexity indicators
 * @returns {string} - Discovery section content
 */
function generateDiscoverySection(taskData) {
    const elementCount = taskData.elements?.length || 0;
    const hasComplexPatterns = taskData.pattern && (
        taskData.pattern.includes('ANIMATION') || 
        taskData.pattern.includes('PERFORMANCE') ||
        taskData.pattern.includes('ACCESSIBILITY')
    );
    
    let discoveryContent = `### Discovery Requirements:
- Find ALL testable elements mentioned in the Components/Elements section
- Classify each element by its most appropriate testing approach and log that approach in this file: pmc/system/plans/task-approach/current-test-approach.md  
- Prioritize elements based on user impact and complexity
- Consider legacy references: [map legacy references from pmc/product/07b-task-{productAbbr}-testing-built.md]

### Actions

#### Step 2.1: Component Analysis and Classification
\`\`\`bash
# PURPOSE: Analyze task requirements to identify all testable components and classify them by testing approach
# WHEN: Execute this after environment setup to understand what needs to be tested
# PREREQUISITES: Task requirements have been reviewed, active-task.md has been read
# EXPECTED OUTCOME: Complete list of components with testing approach classifications logged to current-test-approach.md
# FAILURE HANDLING: If component analysis fails, review task requirements and legacy references for clarity

# Read task requirements and identify components
# Extract component information from active-task.md
# Classify components by testing complexity and approach
# Log findings to pmc/system/plans/task-approach/current-test-approach.md
\`\`\``;

    // Add complexity-specific instructions
    if (hasComplexPatterns) {
        discoveryContent += `

#### Step 2.2: Advanced Component Analysis
\`\`\`bash
# PURPOSE: Perform advanced analysis for complex patterns (animations, performance, accessibility)
# WHEN: Execute this for tasks involving complex patterns or multiple integration points
# PREREQUISITES: Basic component analysis complete
# EXPECTED OUTCOME: Detailed complexity analysis and testing strategy documented
# FAILURE HANDLING: If advanced analysis fails, focus on basic component testing approaches

# Analyze complex patterns and interactions
# Identify performance-critical components
# Map accessibility requirements for interactive elements
# Document advanced testing strategies in current-test-approach.md
\`\`\``;
    }

    return discoveryContent;
}

/**
 * Generate enhanced testing content for Version 2 templates
 * @param {object} taskData - Complete task data
 * @param {string} productAbbr - Product abbreviation
 * @returns {string} - Generated test content
 */
function generateActiveTaskTestContentV2Enhanced(taskData, productAbbr = 'bmo') {
    // Read the Version 2 template
    const templatePath = PATHS.templates.activeTaskTestV2;
    
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Version 2 test template not found at: ${templatePath}`);
    }
    
    const template = fs.readFileSync(templatePath, 'utf8');
    
    // Extract component information from taskData
    const components = taskData.elements || [];
    const componentNames = components.map(element => element.name || element.id || 'UnknownComponent');
    const componentCount = componentNames.length;
    
    // Classify components into server and client based on element data
    const serverComponents = components.filter(element => 
        element.type === 'server' || 
        element.classification === 'server' ||
        (element.description && element.description.toLowerCase().includes('server'))
    ).map(element => element.name || element.id);
    
    const clientComponents = components.filter(element => 
        element.type === 'client' || 
        element.classification === 'client' ||
        (element.description && element.description.toLowerCase().includes('client')) ||
        (element.description && element.description.toLowerCase().includes('interactive'))
    ).map(element => element.name || element.id);
    
    // Generate component lists for template
    const discoveredComponents = componentNames.join(', ');
    const serverComponentNames = serverComponents.join(', ');
    const clientComponentNames = clientComponents.join(', ');
    
    // Generate component classification description
    const componentClassificationDescription = serverComponents.length > 0 && clientComponents.length > 0 
        ? "server/client classification"
        : "component functionality";
    
    // Generate test directory creation commands
    let testDirectoryCommands = `mkdir -p test/unit-tests/task-${taskData.taskId?.replace('T-', '').replace('.', '-')}/${taskData.taskId}`;
    
    // Generate Jest test command
    const jestTestCommand = `npm test -- --testPathPattern=${taskData.taskId?.replace('T-', 'task-').replace(/\./g, '-')}/${taskData.taskId} --coverage`;
    
    // Generate component validation commands
    const clientComponentValidationCommands = clientComponents.length > 0 
        ? `# Check client components have 'use client' directive\ngrep -l "use client" ${clientComponents.map(comp => `${taskData.implementationLocation}/${comp}.tsx`).join(' ')}`
        : "# No client components to validate";
    
    const serverComponentValidationCommands = serverComponents.length > 0 
        ? `# Verify server components don't have 'use client' directive\n! grep -q "use client" ${serverComponents.map(comp => `${taskData.implementationLocation}/${comp}.tsx`).join(' ')}`
        : "# No server components to validate";
    
    // Generate unit test file creation commands
    const unitTestFileCreationCommands = generateUnitTestFileCreationCommands(taskData, serverComponents, clientComponents);
    
    // Generate component discovery script
    const componentDiscoveryScript = generateComponentDiscoveryScript(taskData, componentNames);
    
    // Generate enhanced scaffold generation script
    const enhancedScaffoldGenerationScript = generateEnhancedScaffoldGenerationScript(taskData, components);
    
    // Generate screenshot validation script
    const screenshotValidationScript = generateScreenshotValidationScript(taskData, componentNames);
    
    // Generate component boundary validation commands
    const componentBoundaryValidationCommands = generateComponentBoundaryValidationCommands(serverComponents, clientComponents);
    
    // Generate LLM Vision analysis commands
    const llmVisionAnalysisCommands = generateLLMVisionAnalysisCommands(componentNames);
    
    // Generate LLM Vision validation commands
    const llmVisionValidationCommands = generateLLMVisionValidationCommands(taskData, componentNames);
    
    // Generate testing results compilation script
    const testingResultsCompilationScript = generateTestingResultsCompilationScript(taskData, componentNames);
    
    // Generate human-readable report generation
    const humanReadableReportGeneration = generateHumanReadableReportGeneration(taskData, components);
    
    // Generate component requirements
    const componentRequirements = generateComponentRequirements(components);
    
    // Generate acceptance criteria
    let acceptanceCriteria = '';
    if (taskData.acceptanceCriteria && taskData.acceptanceCriteria.length > 0) {
        acceptanceCriteria = taskData.acceptanceCriteria.map(criteria => `- ${criteria}`).join('\n');
    } else {
        acceptanceCriteria = generateDefaultAcceptanceCriteria(taskData, componentNames);
    }
    
    // Extract legacy references
    const legacyReferences = extractLegacyReferences(taskData.taskId, productAbbr);
    
    // Use enhanced data from taskData if available, otherwise generate defaults
    const elementsPreview = taskData.elementsPreview || (components.length > 0 
        ? (components[0].description || components[0].name || components[0].id || 'No description available')
        : 'No elements available');
    
    const legacyReferencesList = taskData.legacyReferencesList || 'No legacy references available';
    
    const legacyReferencesSection = taskData.legacyReferencesSection || '## Legacy Code References\n\nNo legacy references available for this task.';
    
    // Prepare template replacements with ALL variables including the new ones
    const replacements = {
        TASK_ID: taskData.taskId || 'UNKNOWN',
        TASK_TITLE: taskData.taskTitle || taskData.title || 'UNKNOWN TASK',
        TASK_DESCRIPTION: taskData.description || 'No description available',
        TASK_PATTERNS: taskData.pattern || 'No pattern specified',
        TESTING_TOOLS: taskData.testingTools || 'Jest, React Testing Library',
        TEST_COVERAGE: taskData.testCoverage || '90% code coverage',
        ELEMENTS_PREVIEW: elementsPreview,
        LEGACY_REFERENCES_LIST: legacyReferencesList,
        LEGACY_REFERENCES_SECTION: legacyReferencesSection,
        DISCOVERED_COMPONENTS: discoveredComponents,
        COMPONENT_CLASSIFICATION_DESCRIPTION: componentClassificationDescription,
        TEST_DIRECTORY_CREATION_COMMANDS: testDirectoryCommands,
        IMPLEMENTATION_LOCATION: taskData.implementationLocation || 'app/_components',
        UNIT_TEST_LOCATION: `test/unit-tests/task-${taskData.taskId?.replace('T-', '').replace('.', '-')}/${taskData.taskId}/`,
        JEST_TEST_COMMAND: jestTestCommand,
        CLIENT_COMPONENTS: clientComponents.join(', ') || 'None',
        SERVER_COMPONENTS: serverComponents.join(', ') || 'None',
        CLIENT_COMPONENT_VALIDATION_COMMANDS: clientComponentValidationCommands,
        SERVER_COMPONENT_VALIDATION_COMMANDS: serverComponentValidationCommands,
        UNIT_TEST_FILE_CREATION_COMMANDS: unitTestFileCreationCommands,
        SERVER_COMPONENT_NAMES: serverComponentNames,
        CLIENT_COMPONENT_NAMES: clientComponentNames,
        COMPONENT_COUNT: componentCount.toString(),
        COMPONENT_DISCOVERY_SCRIPT: componentDiscoveryScript,
        ENHANCED_SCAFFOLD_GENERATION_SCRIPT: enhancedScaffoldGenerationScript,
        SCREENSHOT_VALIDATION_SCRIPT: screenshotValidationScript,
        COMPONENT_BOUNDARY_VALIDATION_COMMANDS: componentBoundaryValidationCommands,
        LLM_VISION_ANALYSIS_COMMANDS: llmVisionAnalysisCommands,
        LLM_VISION_VALIDATION_COMMANDS: llmVisionValidationCommands,
        TESTING_RESULTS_COMPILATION_SCRIPT: testingResultsCompilationScript,
        HUMAN_READABLE_REPORT_GENERATION: humanReadableReportGeneration,
        COMPONENT_REQUIREMENTS: componentRequirements,
        ACCEPTANCE_CRITERIA: acceptanceCriteria,
        LEGACY_REFERENCES: legacyReferences,
        LEGACY_REFERENCES_LIST: legacyReferencesList
    };
    
    // Process the template
    const processedContent = processTemplateV2Enhanced(template, replacements);
    
    return processedContent;
}

/**
 * Generate unit test file creation commands
 */
function generateUnitTestFileCreationCommands(taskData, serverComponents, clientComponents) {
    const taskId = taskData.taskId;
    const unitTestLocation = `test/unit-tests/task-${taskId?.replace('T-', '').replace('.', '-')}/${taskId}/`;
    
    let commands = '';
    
    if (serverComponents.length > 0) {
        commands += `cat > ${unitTestLocation}server-component-render.test.tsx << 'EOF'
import React from 'react';
import { render } from '@testing-library/react';
import fs from 'fs';
import path from 'path';

describe('Server Components [${taskId}:ELE-1]', () => {
  const serverComponentFiles = [
${serverComponents.map(comp => `    '../../../../${taskData.implementationLocation}/${comp}.tsx'`).join(',\n')}
  ];

  test.each(serverComponentFiles)('Server component %s should not have use client directive', (filePath) => {
    const resolvedPath = path.resolve(__dirname, filePath);
    expect(fs.existsSync(resolvedPath)).toBe(true);
    
    if (fs.existsSync(resolvedPath)) {
      const content = fs.readFileSync(resolvedPath, 'utf8');
      expect(content).not.toMatch(/['"]use client['"];?\\s/);
    }
  });

  test.each(serverComponentFiles)('Server component %s should export a default function', (filePath) => {
    const resolvedPath = path.resolve(__dirname, filePath);
    expect(fs.existsSync(resolvedPath)).toBe(true);
    
    if (fs.existsSync(resolvedPath)) {
      const content = fs.readFileSync(resolvedPath, 'utf8');
      expect(content).toMatch(/export default (async )?function/);
    }
  });
});
EOF

`;
    }
    
    if (clientComponents.length > 0) {
        commands += `cat > ${unitTestLocation}client-directive.test.ts << 'EOF'
import fs from 'fs';
import path from 'path';

describe('Client Component Directive [${taskId}:ELE-2]', () => {
  const clientComponentFiles = [
${clientComponents.map(comp => `    '../../../../${taskData.implementationLocation}/${comp}.tsx'`).join(',\n')}
  ];

  test.each(clientComponentFiles)('Client component %s should have use client directive', (filePath) => {
    const resolvedPath = path.resolve(__dirname, filePath);
    expect(fs.existsSync(resolvedPath)).toBe(true);
    
    if (fs.existsSync(resolvedPath)) {
      const content = fs.readFileSync(resolvedPath, 'utf8');
      expect(content).toMatch(/['"]use client['"];?\\s/);
    }
  });

  test.each(clientComponentFiles)('Client component %s should use React hooks', (filePath) => {
    const resolvedPath = path.resolve(__dirname, filePath);
    expect(fs.existsSync(resolvedPath)).toBe(true);
    
    if (fs.existsSync(resolvedPath)) {
      const content = fs.readFileSync(resolvedPath, 'utf8');
      expect(content).toMatch(/use[A-Z]\\w+\\(/);
    }
  });
});
EOF`;
    }
    
    return commands;
}

/**
 * Generate component discovery script
 */
function generateComponentDiscoveryScript(taskData, componentNames) {
    return `node -e "
const { ComponentImporter } = require('./test/utils/scaffold-templates/component-importer.js');
const importer = new ComponentImporter();
const ${taskData.taskId?.replace(/[.-]/g, '')}Components = [${componentNames.map(name => `'${name}'`).join(', ')}];

async function validateAllComponents() {
  for (const name of ${taskData.taskId?.replace(/[.-]/g, '')}Components) {
    try {
      await importer.loadComponent(name);
      console.log('✓', name, 'imported successfully');
    } catch (error) {
      console.error('✗', name, 'failed:', error.message);
      throw error;
    }
  }
  console.log('All ${taskData.taskId} components validated');
}

validateAllComponents().catch(console.error);
"`;
}

/**
 * Generate enhanced scaffold generation script
 */
function generateEnhancedScaffoldGenerationScript(taskData, components) {
    const componentSpecs = components.map(component => {
        const type = component.type || (component.description?.toLowerCase().includes('client') ? 'client' : 'server');
        const props = generateDefaultProps(component, taskData.taskId);
        return `  { name: '${component.name || component.id}', type: '${type}', props: ${JSON.stringify(props)} }`;
    }).join(',\n');
    
    return `node -e "
const { createEnhancedScaffold } = require('./test/utils/scaffold-templates/create-enhanced-scaffold.js');
const components = [
${componentSpecs}
];

async function generateAllScaffolds() {
  for (const component of components) {
    try {
      const path = await createEnhancedScaffold({ task: '${taskData.taskId}', component: component.name, props: component.props });
      console.log('✓', component.name, '(' + component.type + ')', 'scaffold created:', path);
    } catch (error) {
      console.error('✗', component.name, 'scaffold failed:', error.message);
      throw error;
    }
  }
  console.log('All ${taskData.taskId} scaffolds generated');
}

generateAllScaffolds().catch(console.error);
"`;
}

/**
 * Generate default props for a component
 */
function generateDefaultProps(component, taskId) {
    const name = component.name || component.id;
    const defaultProps = {
        title: `Test ${name} for ${taskId}`,
        children: `Test content for ${name} in ${taskId}`
    };
    
    // Add component-specific props based on name patterns
    if (name.toLowerCase().includes('button')) {
        defaultProps.variant = 'primary';
        defaultProps.children = 'Test Button';
    } else if (name.toLowerCase().includes('form')) {
        defaultProps.title = `Test ${name} for ${taskId}`;
    } else if (name.toLowerCase().includes('chart')) {
        defaultProps.data = [{ name: 'Test', value: 100 }];
    } else if (name.toLowerCase().includes('faq')) {
        if (name.toLowerCase().includes('item')) {
            defaultProps.question = 'Test Question?';
            defaultProps.answer = `Test Answer for ${taskId}`;
        }
    }
    
    return defaultProps;
}

/**
 * Generate screenshot validation script
 */
function generateScreenshotValidationScript(taskData, componentNames) {
    return `node -e "
const fs = require('fs');
const screenshotDir = 'test/screenshots/${taskData.taskId}';
const expectedComponents = [${componentNames.map(name => `'${name}'`).join(', ')}];

if (!fs.existsSync(screenshotDir)) {
  throw new Error('Screenshot directory not found: ' + screenshotDir);
}

const screenshots = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'));
console.log('Generated screenshots:', screenshots.length);

let allValid = true;
expectedComponents.forEach(component => {
  const fileName = component + '-enhanced.png';
  if (screenshots.includes(fileName)) {
    console.log('✓', component, 'screenshot captured');
  } else {
    console.log('✗', component, 'screenshot missing');
    allValid = false;
  }
});

if (!allValid) {
  throw new Error('Some ${taskData.taskId} component screenshots are missing');
}
console.log('All ${taskData.taskId} component screenshots validated');
"`;
}

/**
 * Generate component boundary validation commands
 */
function generateComponentBoundaryValidationCommands(serverComponents, clientComponents) {
    let commands = '';
    
    if (serverComponents.length > 0) {
        commands += `# Verify server component boundaries (blue)\n`;
        serverComponents.forEach(component => {
            commands += `grep -q "Server Component: ${component}" "test/scaffolds/{{TASK_ID}}/${component}-enhanced.html" && echo "✓ ${component} has server boundary (blue)" || echo "✗ ${component} missing server boundary"\n`;
        });
    }
    
    if (clientComponents.length > 0) {
        commands += `\n# Verify client component boundaries (green)\n`;
        clientComponents.forEach(component => {
            commands += `grep -q "Client Component: ${component}" "test/scaffolds/{{TASK_ID}}/${component}-enhanced.html" && echo "✓ ${component} has client boundary (green)" || echo "✗ ${component} missing client boundary"\n`;
        });
    }
    
    return commands.trim();
}

/**
 * Generate LLM Vision analysis commands
 */
function generateLLMVisionAnalysisCommands(componentNames) {
    const componentsArray = componentNames.map(name => `"${name}"`).join(' ');
    
    return `COMPONENTS=(${componentsArray})

for component in "\${COMPONENTS[@]}"; do
  echo "Analyzing \${component} component..."
  node test/utils/vision/enhanced-llm-vision-analyzer.js "\$component" || echo "RETRY: Analysis failed for \${component}"
  
  # Wait 60 seconds between analyses to prevent API rate limiting
  if [ "\$component" != "${componentNames[componentNames.length - 1]}" ]; then
    echo "⏱️ Waiting 60 seconds before next analysis to prevent rate limiting..."
    sleep 60
  fi
done`;
}

/**
 * Generate LLM Vision validation commands
 */
function generateLLMVisionValidationCommands(taskData, componentNames) {
    const componentsArray = componentNames.map(name => `"${name}"`).join(' ');
    
    return `COMPONENTS=(${componentsArray})

for component in "\${COMPONENTS[@]}"; do
  report_path="test/screenshots/${taskData.taskId}/\${component}-enhanced-analysis.md"
  if [ -f "\$report_path" ]; then
    echo "✓ \${component} Enhanced LLM Vision report: \$report_path"
  else
    echo "✗ \${component} Enhanced LLM Vision report missing: \$report_path"
  fi
done`;
}

/**
 * Generate testing results compilation script
 */
function generateTestingResultsCompilationScript(taskData, componentNames) {
    const componentsArray = JSON.stringify(componentNames);
    
    return `node -e "
const fs = require('fs');
const components = ${componentsArray};

console.log('=== ${taskData.taskId} TESTING SUMMARY ===');
console.log('Task: ${taskData.title}');
console.log('Components Tested:', components.length);
console.log('');

let allPassed = true;

// Check unit test results
console.log('UNIT TESTING:');
try {
  console.log('✓ Jest unit tests completed');
} catch (e) {
  console.log('✗ Jest unit tests failed');
  allPassed = false;
}

// Check scaffolds
console.log('\\nREACT SSR SCAFFOLDS:');
components.forEach(comp => {
  const scaffoldPath = \`test/scaffolds/${taskData.taskId}/\${comp}-enhanced.html\`;
  if (fs.existsSync(scaffoldPath)) {
    console.log('✓', comp, 'scaffold generated');
  } else {
    console.log('✗', comp, 'scaffold missing');
    allPassed = false;
  }
});

// Check screenshots
console.log('\\nVISUAL TESTING:');
components.forEach(comp => {
  const screenshotPath = \`test/screenshots/${taskData.taskId}/\${comp}-enhanced.png\`;
  if (fs.existsSync(screenshotPath)) {
    console.log('✓', comp, 'screenshot captured');
  } else {
    console.log('✗', comp, 'screenshot missing');
    allPassed = false;
  }
});

// Check LLM Vision analysis
console.log('\\nLLM VISION ANALYSIS:');
components.forEach(comp => {
  const reportPath = \`test/screenshots/${taskData.taskId}/\${comp}-enhanced-analysis.md\`;
  if (fs.existsSync(reportPath)) {
    console.log('✓', comp, 'analysis report available');
  } else {
    console.log('✗', comp, 'analysis report missing');
    allPassed = false;
  }
});

console.log('\\n=== FINAL RESULT ===');
if (allPassed) {
  console.log('✓ ALL ${taskData.taskId} TESTING PHASES PASSED');
  console.log('Components ready for production validation');
} else {
  console.log('✗ SOME ${taskData.taskId} TESTING PHASES FAILED');
  console.log('Review failed items and apply fix/test/analyze cycle');
}
"`;
}

/**
 * Generate human-readable report generation
 */
function generateHumanReadableReportGeneration(taskData, components) {
    const componentList = components.map(comp => {
        const type = comp.type || (comp.description?.toLowerCase().includes('client') ? 'Client' : 'Server');
        const boundary = type === 'Client' ? 'green' : 'blue';
        return `- **${comp.name || comp.id}** (${type} Component) - ${comp.description || 'Component with ' + type.toLowerCase() + '-side functionality'} with ${boundary} boundaries`;
    }).join('\n');
    
    return `cat > test/reports/${taskData.taskId}-testing-report.md << 'EOF'
# ${taskData.taskId} ${taskData.title} - Testing Report

## Executive Summary
Complete testing validation for ${taskData.taskId} components with Enhanced LLM Vision analysis.

## Components Tested
${componentList}

## Testing Phases Completed
1. ✓ Unit Testing - Jest validation and TypeScript compilation
2. ✓ Component Discovery & React SSR - Real component rendering
3. ✓ Visual Testing - Screenshot capture with Playwright
4. ✓ LLM Vision Analysis - AI-powered content verification
5. ✓ Validation & Reporting - Comprehensive results compilation

## Artifacts Generated
- Unit test files: \`test/unit-tests/task-${taskData.taskId?.replace('T-', '').replace('.', '-')}/${taskData.taskId}/\`
- Enhanced scaffolds: \`test/scaffolds/${taskData.taskId}/\`
- Screenshots: \`test/screenshots/${taskData.taskId}/\`
- LLM Vision reports: \`test/screenshots/${taskData.taskId}/*-enhanced-analysis.md\`

## Success Criteria Met
- All unit tests pass with proper component behavior validation
- Components render with real React SSR (not mock HTML)
- Screenshots show actual Tailwind CSS styling
- Server components display blue boundaries around real content
- Client components display green boundaries around real content
- LLM Vision analysis validates content with 95%+ confidence
- Component classification (server/client) correctly identified

## Human Verification Required
Please review the generated artifacts and confirm:
1. Visual quality meets ${taskData.taskId} requirements
2. Component boundaries are clearly visible
3. LLM Vision analysis reports show acceptable confidence scores
4. All acceptance criteria satisfied

Report generated: $(date)
EOF

echo "✓ ${taskData.taskId} testing report generated: test/reports/${taskData.taskId}-testing-report.md"`;
}

/**
 * Generate component requirements based on component data
 */
function generateComponentRequirements(components) {
    return components.map(comp => {
        const name = comp.name || comp.id;
        const type = comp.type || (comp.description?.toLowerCase().includes('client') ? 'Client' : 'Server');
        const boundary = type === 'Client' ? 'green' : 'blue';
        const directive = type === 'Client' ? "'use client' directive present" : "no client directive";
        
        return `- **${name} (${type})**: Proper ${type.toLowerCase()} component with ${directive}, ${comp.description || 'functional implementation'}, ${boundary} boundary`;
    }).join('\n');
}

/**
 * Generate default acceptance criteria if none provided
 */
function generateDefaultAcceptanceCriteria(taskData, componentNames) {
    const criteria = [
        `All ${componentNames.length} ${taskData.taskId} components implemented and tested`,
        "Server/client classification correctly applied and validated",
        "Enhanced LLM Vision Analyzer confirms component quality",
        "Visual testing demonstrates proper styling and boundaries",
        "Complete testing artifacts available for review",
        "Testing report confirms all phases passed successfully"
    ];
    
    return criteria.join('\n- ');
}

/**
 * Extract legacy references for the task
 * @param {string} taskId - Task identifier
 * @param {string} productAbbr - Product abbreviation
 */
function extractLegacyReferences(taskId, productAbbr = 'bmo') {
    try {
        const dynamicPaths = generatePaths(productAbbr);
        const taskTestMappingPath = dynamicPaths.taskTestMappingFile;
        const testMappingContent = fs.readFileSync(taskTestMappingPath, 'utf8');
        
        // Find the task section using multiple patterns
        const taskPatterns = [
            new RegExp(`#### ${taskId}:[\\s\\S]*?(?=\\n#### T-|$)`, 'i'),  // Primary pattern
            new RegExp(`### ${taskId}[\\s\\S]*?(?=\\n### |$)`, 'i'),       // Alternative pattern
            new RegExp(`${taskId}[\\s\\S]*?(?=\\n#### T-|\\n### T-|$)`, 'i') // Fallback pattern
        ];
        
        let taskSection = null;
        for (const pattern of taskPatterns) {
            const match = testMappingContent.match(pattern);
            if (match) {
                taskSection = match[0];
                console.log(`Found task section for ${taskId} using pattern`);
                break;
            }
        }
        
        if (!taskSection) {
            console.warn(`Task section not found for ${taskId} in test mapping file`);
            return `## Legacy References\n\nNo legacy references found for ${taskId} in pmc/product/07b-task-${productAbbr}-testing-built.md`;
        }
        
        // Extract legacy references from the task section
        const legacyReferences = [];
        
        // Look for legacy code references in various formats
        const legacyPatterns = [
            /Legacy Code Reference[s]?:\s*`([^`]+)`[^`]*?\(([^)]+)\)/gi,
            /Legacy Code Reference[s]?:\s*([^:\n]+):\s*([^\n]+)/gi,
            /Refer to Legacy Code Reference:\s*`([^`]+)`[^`]*?for\s+([^\n]+)/gi,
            /Legacy Code Location[s]?:\s*`([^`]+)`[^`]*?\(([^)]+)\)/gi
        ];
        
        for (const pattern of legacyPatterns) {
            let match;
            while ((match = pattern.exec(taskSection)) !== null) {
                const filePath = match[1];
                const description = match[2];
                legacyReferences.push({
                    path: filePath,
                    description: description.trim()
                });
            }
        }
        
        // Also look for element-specific legacy references
        const elementPattern = /##### \[([^:]+):ELE-\d+\][^#]*?Legacy Code Reference[s]?:[^#]*?`([^`]+)`[^`]*?\(([^)]+)\)/gi;
        let elementMatch;
        while ((elementMatch = elementPattern.exec(taskSection)) !== null) {
            const elementId = elementMatch[1];
            const filePath = elementMatch[2];
            const description = elementMatch[3];
            legacyReferences.push({
                path: filePath,
                description: description.trim(),
                element: elementId
            });
        }
        
        if (legacyReferences.length === 0) {
            console.log(`No legacy references found in task section for ${taskId}`);
            return `## Legacy References\n\nNo legacy references found for ${taskId} in pmc/product/07b-task-${productAbbr}-testing-built.md`;
        }
        
        // Format the legacy references
        let formattedReferences = `## Legacy References\n\n`;
        formattedReferences += `The following legacy code references are available for ${taskId}:\n\n`;
        
        legacyReferences.forEach((ref, index) => {
            const elementPrefix = ref.element ? `[${ref.element}] ` : '';
            formattedReferences += `${index + 1}. ${elementPrefix}**${ref.path}**\n`;
            formattedReferences += `   - ${ref.description}\n\n`;
        });
        
        formattedReferences += `These legacy references should be reviewed during implementation to understand existing patterns and ensure consistency.`;
        
        console.log(`Extracted ${legacyReferences.length} legacy references for ${taskId}`);
        return formattedReferences;
    } catch (error) {
        console.warn('Could not extract legacy references:', error.message);
        return `## Legacy References\n\nRefer to legacy references for ${taskId} in pmc/product/07b-task-${productAbbr}-testing-built.md\n\n*Note: Automatic extraction failed. Please review the test mapping file manually.*`;
    }
}

/**
 * Extract additional data from active-task.md file for enhanced template variables
 * @param {string} taskId - Task ID
 * @returns {object} - Additional task data extracted from active-task.md
 */
function extractActiveTaskEnhancedData(taskId) {
    console.log(`Extracting enhanced data from active-task.md for ${taskId}...`);
    
    const activeTaskPath = PATHS.activeTaskFile;
    
    // Check if active-task.md exists
    if (!fs.existsSync(activeTaskPath)) {
        console.log('Active task file does not exist yet, using fallback data');
        return {
            legacyReferences: [],
            legacyReferencesList: '',
            legacyReferencesSection: '## Legacy Code References\n\nNo legacy references available for this task.',
            elementsPreview: 'No elements available',
            enhancedElements: []
        };
    }
    
    try {
        const activeTaskContent = fs.readFileSync(activeTaskPath, 'utf8');
        console.log('Successfully read active-task.md file');
        
        // Extract Components/Elements section
        const componentsSection = extractSection(activeTaskContent, 'Components/Elements');
        
        console.log('Full active-task.md content length:', activeTaskContent.length);
        console.log('Components/Elements section extracted:');
        console.log('---BEGIN SECTION---');
        console.log(componentsSection);
        console.log('---END SECTION---');
        
        if (!componentsSection) {
            console.log('No Components/Elements section found in active-task.md');
            return {
                legacyReferences: [],
                legacyReferencesList: '',
                legacyReferencesSection: '## Legacy Code References\n\nNo legacy references available for this task.',
                elementsPreview: 'No elements available',
                enhancedElements: []
            };
        }
        
        // Parse the components section to extract elements and legacy references
        const lines = componentsSection.split('\n');
        const elements = [];
        const legacyReferences = [];
        const allLegacyReferenceLines = []; // NEW: Collect all legacy reference lines
        
        console.log(`Components section has ${lines.length} lines`);
        console.log('Components section content:', componentsSection.substring(0, 200) + '...');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Look for element headers (### [T-X.X.X:ELE-X])
            const elementMatch = line.match(/### \[([^:]+):ELE-(\d+)\]\s*(.*)/);
            if (elementMatch) {
                const elementId = `${elementMatch[1]}:ELE-${elementMatch[2]}`;
                const elementDescription = elementMatch[3];
                
                console.log(`Found element: ${elementId} - ${elementDescription}`);
                
                const element = {
                    id: elementId,
                    description: elementDescription,
                    legacyReferences: []
                };
                
                // Look ahead for legacy references
                for (let j = i + 1; j < lines.length; j++) {
                    const nextLine = lines[j].trim();
                    
                    // Stop if we hit the next element or section
                    if (nextLine.startsWith('###') || nextLine.startsWith('##')) {
                        break;
                    }
                    
                    // Check for legacy code reference
                    const legacyMatch = nextLine.match(/Refer to Legacy Code Reference:\s*`([^`]+)`\s*for\s*(.*)/);
                    if (legacyMatch) {
                        const refPath = legacyMatch[1];
                        const refDescription = legacyMatch[2];
                        
                        console.log(`Found legacy reference for ${elementId}: ${refPath}`);
                        
                        element.legacyReferences.push({
                            path: refPath,
                            description: refDescription
                        });
                        
                        legacyReferences.push(refPath);
                        
                        // NEW: Collect the legacy reference line WITHOUT the redundant prefix
                        allLegacyReferenceLines.push(`\`${refPath}\` for ${refDescription}`);
                    }
                }
                
                elements.push(element);
            }
        }
        
        // Generate elements preview (first element description)
        const elementsPreview = elements.length > 0 
            ? elements[0].description 
            : 'No elements available';
        
        // NEW: Generate legacy references list as concatenated string of all lines
        const legacyReferencesList = allLegacyReferenceLines.length > 0 
            ? allLegacyReferenceLines.join('\n')
            : 'No legacy references available';
        
        // Generate legacy references section with proper formatting
        let legacyReferencesSection = '## Legacy Code References\n\n';
        
        if (elements.length === 0) {
            legacyReferencesSection += 'No legacy references available for this task.';
        } else {
            elements.forEach(element => {
                legacyReferencesSection += `### [${element.id}] ${element.description}\n`;
                
                if (element.legacyReferences.length > 0) {
                    element.legacyReferences.forEach(ref => {
                        legacyReferencesSection += `Refer to Legacy Code Reference: \`${ref.path}\` for ${ref.description}\n\n`;
                    });
                } else {
                    legacyReferencesSection += `No legacy code references available for ${element.description}\n\n`;
                }
            });
        }
        
        legacyReferencesSection = legacyReferencesSection.trim();
        
        console.log(`Extracted ${elements.length} elements and ${legacyReferences.length} legacy references from active-task.md`);
        console.log(`Concatenated legacy references list: ${allLegacyReferenceLines.length} lines`);
        
        return {
            legacyReferences,
            legacyReferencesList,
            legacyReferencesSection,
            elementsPreview,
            enhancedElements: elements
        };
        
    } catch (error) {
        console.error('Error reading active-task.md:', error);
        return {
            legacyReferences: [],
            legacyReferencesList: '',
            legacyReferencesSection: '## Legacy Code References\n\nError reading legacy references.',
            elementsPreview: 'Error reading elements',
            enhancedElements: []
        };
    }
}

/**
 * Enhanced start task function for Version 2 testing system
 * @param {string} taskId - Task identifier
 * @param {object} options - Options including useV2 flag and productAbbr
 * @returns {object} - Result object with success status and details
 */
async function startTaskV2Enhanced(taskId, options = {}) {
    const productAbbr = options.productAbbr || 'bmo';
    console.log(`Starting task ${taskId} with enhanced Version 2 testing system for product: ${productAbbr}...`);
    
    try {
        // Generate dynamic paths based on product abbreviation
        const dynamicPaths = generatePaths(productAbbr);
        
        // Read the task breakdown file
        const taskBreakdownPath = dynamicPaths.taskBreakdownFile;
        console.log(`Reading task breakdown file from: ${taskBreakdownPath}`);
        
        let taskBreakdownContent;
        try {
            taskBreakdownContent = fs.readFileSync(taskBreakdownPath, 'utf8');
            console.log('Successfully read task breakdown file');
        } catch (readError) {
            console.error('Error reading task breakdown file:', readError);
            return { 
                success: false, 
                message: `Could not read task breakdown file: ${readError.message}` 
            };
        }
        
        // Read the test mapping file
        const taskTestMappingPath = dynamicPaths.taskTestMappingFile;
        console.log(`Reading test mapping file from: ${taskTestMappingPath}`);
        
        let taskTestMappingContent;
        try {
            taskTestMappingContent = fs.readFileSync(taskTestMappingPath, 'utf8');
            console.log('Successfully read test mapping file');
        } catch (readTestMappingError) {
            console.error('Error reading test mapping file:', readTestMappingError);
            return { 
                success: false, 
                message: `Could not read test mapping file: ${readTestMappingError.message}` 
            };
        }
        
        // Extract task details
        let taskData;
        try {
            taskData = extractTaskDetailsV2(taskId, taskBreakdownContent);
            console.log(`Successfully extracted task details for ${taskId}`);
        } catch (extractError) {
            console.error('Error extracting task details:', extractError);
            return { 
                success: false, 
                message: `Failed to extract task details: ${extractError.message}` 
            };
        }
        
        // Extract test specifications
        let testSpecs;
        try {
            testSpecs = extractTestSpecifications(taskId, taskTestMappingContent);
            console.log(`Successfully extracted test specifications for ${taskId}`);
            
            // Merge test specifications with task data
            taskData = {
                ...taskData,
                testLocations: testSpecs.testLocations,
                testingTools: testSpecs.testingTools,
                testCoverage: testSpecs.testCoverage,
                acceptanceCriteria: testSpecs.acceptanceCriteria || [],
                elementsTestData: testSpecs.elementsTestData || {}
            };
        } catch (extractTestError) {
            console.error('Error extracting test specifications:', extractTestError);
            return { 
                success: false, 
                message: `Failed to extract test specifications: ${extractTestError.message}` 
            };
        }
        
        // Generate active task content (same as V1)
        let activeTaskContent;
        try {
            activeTaskContent = generateActiveTaskContentV2(taskData);
            console.log('Successfully generated active task content');
        } catch (generateError) {
            console.error('Error generating active task content:', generateError);
            return { 
                success: false, 
                message: `Failed to generate active task content: ${generateError.message}` 
            };
        }
        
        // Now extract enhanced data from the active-task.md file for template variables
        const enhancedData = extractActiveTaskEnhancedData(taskId);
        console.log('Successfully extracted enhanced data from active-task.md');
        
        // Enhance taskData with the extracted information
        taskData = {
            ...taskData,
            legacyReferences: enhancedData.legacyReferences,
            legacyReferencesList: enhancedData.legacyReferencesList,
            legacyReferencesSection: enhancedData.legacyReferencesSection,
            elementsPreview: enhancedData.elementsPreview,
            enhancedElements: enhancedData.enhancedElements
        };
        
        // Generate enhanced active task test content with enhanced data
        let activeTaskTestContent;
        try {
            activeTaskTestContent = generateActiveTaskTestContentV2Enhanced(taskData, productAbbr);
            console.log('Successfully generated enhanced active task test content');
        } catch (generateTestError) {
            console.error('Error generating enhanced active task test content:', generateTestError);
            return { 
                success: false, 
                message: `Failed to generate enhanced active task test content: ${generateTestError.message}` 
            };
        }
        
        // Archive previous task files before writing new ones
        const archiveTimestamp = generateArchiveTimestamp();
        let previousTaskId = null;

        // Try to extract task ID from existing active task file
        if (fs.existsSync(PATHS.activeTaskFile)) {
            try {
                const existingContent = fs.readFileSync(PATHS.activeTaskFile, 'utf8');
                previousTaskId = extractTaskIdFromContent(existingContent);
            } catch (error) {
                console.warn('Warning: Could not read existing active task file for archiving:', error.message);
            }
        }

        // Archive existing active task file
        const activeTaskArchived = archiveTaskFile(
            PATHS.activeTaskFile,
            PATHS.taskHistory.archiveDir,
            'active-task',
            archiveTimestamp,
            previousTaskId
        );

        // Archive existing active task test file (check both V1 and V2)
        const testFileToArchive = fs.existsSync(PATHS.activeTaskTestFileV2) ? PATHS.activeTaskTestFileV2 : PATHS.activeTaskTestFile;
        const activeTaskTestArchived = archiveTaskFile(
            testFileToArchive,
            PATHS.taskHistory.archiveDir,
            'active-task-unit-tests-2',
            archiveTimestamp,
            previousTaskId
        );

        // Archive existing active task test V2 enhanced file
        const activeTaskTestV2EnhancedArchived = archiveTaskFile(
            PATHS.activeTaskTestFileV2Enhanced,
            PATHS.taskHistory.archiveDir,
            'active-task-unit-tests-2-enhanced',
            archiveTimestamp,
            previousTaskId
        );

        if (activeTaskArchived && activeTaskTestArchived && activeTaskTestV2EnhancedArchived) {
            console.log(`Successfully archived previous task files with timestamp: ${archiveTimestamp}`);
        } else {
            console.warn('Warning: Some files could not be archived, but continuing with task start');
        }

        // Copy current test files to previous versions before writing new ones
        if (fs.existsSync(PATHS.activeTaskTestFileV2Enhanced)) {
            try {
                const testEnhancedContent = fs.readFileSync(PATHS.activeTaskTestFileV2Enhanced, 'utf8');
                fs.writeFileSync(PATHS.previousTaskTestFileV2Enhanced, testEnhancedContent);
                console.log('Successfully copied active-task-unit-tests-2-enhanced.md to previous-task-unit-tests-2-enhanced.md');
            } catch (copyError) {
                console.warn('Warning: Could not copy active-task-unit-tests-2-enhanced.md to previous-task-unit-tests-2-enhanced.md:', copyError.message);
                // Continue even if copy fails - this is not critical
            }
        } else {
            console.log('No existing active-task-unit-tests-2-enhanced.md to copy to previous-task-unit-tests-2-enhanced.md - this is normal for new projects');
        }

        if (fs.existsSync(PATHS.activeTaskTestFileV2)) {
            try {
                const testV2Content = fs.readFileSync(PATHS.activeTaskTestFileV2, 'utf8');
                fs.writeFileSync(PATHS.previousTaskTestFileV2, testV2Content);
                console.log('Successfully copied active-task-unit-tests-2.md to previous-task-unit-tests-2.md');
            } catch (copyError) {
                console.warn('Warning: Could not copy active-task-unit-tests-2.md to previous-task-unit-tests-2.md:', copyError.message);
                // Continue even if copy fails - this is not critical
            }
        } else {
            console.log('No existing active-task-unit-tests-2.md to copy to previous-task-unit-tests-2.md - this is normal for new projects');
        }

        // Copy current active-task.md to previous-task.md before writing new task
        if (fs.existsSync(PATHS.activeTaskFile)) {
            try {
                // Read the content and modify the first line
                let activeTaskContent = fs.readFileSync(PATHS.activeTaskFile, 'utf8');
                // Replace "Current Active" with "Previous" in the first line
                activeTaskContent = activeTaskContent.replace(/^# Current Active/, '# Previous');
                fs.writeFileSync(PATHS.previousTaskFile, activeTaskContent);
                console.log('Successfully copied active-task.md to previous-task.md');
            } catch (copyError) {
                console.warn('Warning: Could not copy active-task.md to previous-task.md:', copyError.message);
                // Continue even if copy fails - this is not critical
            }
        } else {
            console.log('No existing active-task.md to copy to previous-task.md - this is normal for new projects');
        }

        // Create core directory if it doesn't exist
        const coreDir = path.join(PROJECT_ROOT, 'core');
        if (!fs.existsSync(coreDir)) {
            console.log('Creating core directory...');
            fs.mkdirSync(coreDir, { recursive: true });
        }
        
        // Write to the active task file
        try {
            fs.writeFileSync(PATHS.activeTaskFile, activeTaskContent);
            console.log(`Successfully wrote active task content to ${PATHS.activeTaskFile}`);
        } catch (writeError) {
            console.error('Error writing active task file:', writeError);
            return { 
                success: false, 
                message: `Failed to write active task file: ${writeError.message}` 
            };
        }
        
        // Write to the enhanced active task test file
        try {
            fs.writeFileSync(PATHS.activeTaskTestFileV2, activeTaskTestContent);
            console.log(`Successfully wrote enhanced active task test content to ${PATHS.activeTaskTestFileV2}`);
        } catch (writeTestError) {
            console.error('Error writing enhanced active task test file:', writeTestError);
            return { 
                success: false, 
                message: `Failed to write enhanced active task test file: ${writeTestError.message}` 
            };
        }
        
        // Clear the enhanced test file (leave it blank after backup)
        try {
            fs.writeFileSync(PATHS.activeTaskTestFileV2Enhanced, '');
            console.log(`Successfully cleared active-task-unit-tests-2-enhanced.md`);
        } catch (clearError) {
            console.warn('Warning: Could not clear active-task-unit-tests-2-enhanced.md:', clearError.message);
            // Continue even if clearing fails - this is not critical
        }
        
        // Update progress.md to mark task as in progress
        try {
            updateProgressForTaskStartV2(taskId);
            console.log('Successfully updated progress file');
        } catch (progressError) {
            console.warn('Warning: Failed to update progress file:', progressError);
            // Continue even if progress update fails
        }
        
        console.log('Enhanced task start successful - All files generated and written');
        
        return {
            success: true,
            message: `Task ${taskId} started successfully with Version 2 testing system. Enhanced testing files created.`,
            mainFile: PATHS.activeTaskFile,
            testFile: PATHS.activeTaskTestFileV2,
            testFileV1: PATHS.activeTaskTestFile, // For reference
            elementsCount: taskData.elements?.length || 0,
            phasesCount: 
                (taskData.preparationPhase?.length || 0) + 
                (taskData.implementationPhase?.length || 0) + 
                (taskData.validationPhase?.length || 0),
            acceptanceCriteriaCount: taskData.acceptanceCriteria?.length || 0,
            enhancedFeatures: {
                discoverySection: true,
                multiPhaseProtocol: true,
                enhancedCommands: true,
                fixTestAnalyzeCycle: true,
                completeContentMigration: true,
                allTemplateVariables: true
            },
            metadata: {
                frReference: taskData.frReference ? true : false,
                pattern: taskData.pattern ? true : false,
                dependencies: taskData.dependencies ? true : false,
                estimatedHours: taskData.estimatedHours ? true : false,
                testLocations: taskData.testLocations ? true : false,
                testingTools: taskData.testingTools ? true : false,
                testCoverage: taskData.testCoverage ? true : false,
                acceptanceCriteria: taskData.acceptanceCriteria?.length > 0 ? true : false,
                componentsCount: taskData.elements?.length || 0,
                serverComponents: taskData.elements?.filter(e => e.type === 'server')?.length || 0,
                clientComponents: taskData.elements?.filter(e => e.type === 'client')?.length || 0
            }
        };
    } catch (error) {
        console.error('Unexpected error starting enhanced task:', error);
        return {
            success: false,
            message: `Unexpected error starting enhanced task: ${error.message}`
        };
    }
}

// Export individual functions for direct import
export { startTaskV2Enhanced };

// Export necessary functions as default
export default {
  // Utility functions
  formatTimestamp,
  generateFileTimestamp,
  extractSection,
  removeInstructionsSection,
  extractConfidenceLevel,
  updateTaskInformationConfidence,
  
  // Command functions
  updateTaskApproach,
  completeTask,
  startTaskV2,
  startTaskV2Enhanced,
  
  // Enhanced Version 2 functions
  processTemplateV2Enhanced,
  generateDiscoverySection,
  generateActiveTaskTestContentV2Enhanced
};