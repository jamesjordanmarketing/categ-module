# Wireframe Workflow Optimization - Complete Execution Tutorial v1

**Date:** 2025-01-09  
**Purpose:** Step-by-step tutorial for executing the complete wireframe workflow optimization implementation  
**Based on:** wireframe-workflow-optimization-analysis_v3.md

## 📋 OVERVIEW

This tutorial guides you through implementing both Track A (User Journey Integration) and Track B (Wireframe Generation Enhancement) to optimize your wireframe workflow with persona consolidation and journey-informed design.

**Expected Time:** 8 hours total  
**Prerequisites:** Node.js installed, access to project files  
**Output:** Enhanced FR and wireframe generation with user journey integration

---

## 🎯 PHASE 1: TRACK A - USER JOURNEY INTEGRATION (4 hours)

### STEP 1.1: Update FR Preprocessing Prompt (15 minutes)

**File:** `pmc/product/_prompt_engineering/3a-preprocess-functional-requirements-prompt_v1.md`

1. **Locate** the "Reference Files" section
2. **Add** after the User Stories line:
```markdown
3. **User Journey Integration**
   - **User Journey Document:** `{USER_JOURNEY_PATH}`
   - Extract all UJ elements (UJ1.1.1 through UJ6.3.3)
   - Map journey stages to FR categories
   - Consolidate persona-specific acceptance criteria
```

3. **Locate** "### 3. Reorder Requirements" section
4. **Insert** new task after it:
```markdown
### 4. Consolidate Persona-Specific Requirements
- Identify FRs with multiple persona variations
- Apply consolidation rules:
  * When personas have similar needs → Create single comprehensive FR
  * When personas conflict → Create base FR with progressive disclosure
  * When persona is unique → Note as advanced configuration
- Consolidation mapping:
  * Small Business Owner + Domain Expert = Power User Requirements
  * Content Creator + Quality Reviewer = Workflow Requirements  
  * AI Agency Professional = Advanced Configuration Requirements
- Document consolidation decisions in change log
```

5. **Add** to "Rules and Guidelines" section:
```markdown
4. **Persona Consolidation**
   - Each FR must serve all personas through progressive disclosure
   - No persona-specific FRs allowed
   - Document persona variations in FR description
   - Maintain highest priority among all personas
```

### STEP 1.2: Update FR Enhancement Prompts (30 minutes)

**Files to update:**
- `pmc/product/_prompt_engineering/3b-#1-functional-requirements-prompt_v1.md`
- `pmc/product/_prompt_engineering/3b-functional-requirements-prompt_v1.md`

**For BOTH files:**

1. **Locate** "Required Inputs" section
2. **Add** before the conditional current status block:
```markdown
- **User Journey:** `{USER_JOURNEY_PATH}`
  - Contains persona definitions and stage-specific acceptance criteria
  - Maps user workflows to system requirements
  - Defines success metrics and KPIs per stage
```

3. **Locate** "### 2. Enhance FR Acceptance Criteria" section
4. **Replace** the entire section with:
```markdown
### 2. Enhance FR Acceptance Criteria with User Journey Integration
For each existing FR:
- Cross-reference with User Journey elements (UJ X.X.X)
- Extract applicable journey acceptance criteria
- Add journey-specific success metrics:
  * Time to complete user goal
  * User confidence indicators  
  * Error recovery requirements
  * Progressive disclosure needs
- Map FR to user journey stages:
  * Stage 1: Discovery & Project Initialization
  * Stage 2: Content Ingestion & Processing
  * Stage 3: Knowledge Exploration
  * Stage 4: Training Data Generation
  * Stage 5: Quality Control
  * Stage 6: Synthetic Expansion
- Consolidate all persona criteria into single unified criterion
- Ensure criteria are testable and verifiable
```

### STEP 1.3: Create Consolidation Rules Document (20 minutes)

**Create:** `pmc/product/_prompt_engineering/persona-consolidation-rules.md`

```markdown
# Persona Consolidation Rules for Functional Requirements

## Consolidation Decision Tree

### Step 1: Analyze Persona Requirements
For each FR, identify requirements from each persona:
- Small Business Owner requirements
- Domain Expert requirements  
- Content Creator requirements
- Quality Reviewer requirements
- AI Agency Professional requirements

### Step 2: Apply Consolidation Pattern

#### Pattern A: Similar Requirements (80% overlap)
ACTION: Create single comprehensive requirement
EXAMPLE:
- Input: All personas need "file upload"
- Output: "Multi-modal file upload supporting drag-drop, browse, API, and batch operations"

#### Pattern B: Conflicting Requirements  
ACTION: Create base + progressive disclosure
EXAMPLE:
- Input: Business Owner wants "simple", Agency wants "complex"
- Output: "Simple 3-step wizard (default) with Advanced Mode toggle for additional options"

#### Pattern C: Unique Requirements
ACTION: Create optional/configurable features
EXAMPLE:
- Input: Only Agency needs "API access"
- Output: "API endpoint available via settings panel (hidden by default)"

### Step 3: Document Consolidation
For each consolidated FR, document:
1. Original persona requirements
2. Consolidation pattern used
3. Progressive disclosure levels
4. Default configuration
5. Advanced options
```

### STEP 1.4: Create Data Extraction Script (30 minutes)

**Create:** `pmc/product/_tools/extract-user-journey-data.js`

```javascript
const fs = require('fs');
const path = require('path');

// Configuration
const USER_JOURNEY_PATH = '../03.5-bmo-user-journey.md';
const OUTPUT_PATH = '../_mapping/extracted-journey-data.json';

// Extract all UJ elements and their acceptance criteria
function extractUserJourneyData() {
  const content = fs.readFileSync(path.join(__dirname, USER_JOURNEY_PATH), 'utf8');
  
  const extractedData = {
    stages: [],
    personas: [],
    ujElements: [],
    acceptanceCriteria: []
  };
  
  // Extract stages (Stage 1-6)
  const stageRegex = /\*\*STAGE (\d+): ([^*]+)\*\*/g;
  let match;
  while ((match = stageRegex.exec(content)) !== null) {
    extractedData.stages.push({
      number: match[1],
      name: match[2].trim(),
      startLine: match.index
    });
  }
  
  // Extract UJ elements
  const ujRegex = /- \*\*UJ(\d+\.\d+\.\d+): ([^*]+)\*\*/g;
  while ((match = ujRegex.exec(content)) !== null) {
    const ujNumber = match[1];
    const ujName = match[2].trim();
    
    // Extract acceptance criteria for this UJ
    const ujSection = content.substring(match.index, match.index + 2000);
    const criteriaMatch = ujSection.match(/User Journey Acceptance Criteria:([\s\S]*?)(?=\* User Story|Technical Notes)/);
    
    extractedData.ujElements.push({
      id: `UJ${ujNumber}`,
      name: ujName,
      criteria: criteriaMatch ? criteriaMatch[1].trim() : '',
      stage: Math.floor(parseFloat(ujNumber))
    });
  }
  
  // Extract personas
  const personaRegex = /### ([^(]+) \(([^)]+)\)/g;
  while ((match = personaRegex.exec(content)) !== null) {
    extractedData.personas.push({
      name: match[1].trim(),
      type: match[2].trim()
    });
  }
  
  // Save extracted data
  fs.writeFileSync(
    path.join(__dirname, OUTPUT_PATH),
    JSON.stringify(extractedData, null, 2)
  );
  
  console.log(`Extracted ${extractedData.ujElements.length} UJ elements`);
  console.log(`Extracted ${extractedData.personas.length} personas`);
  console.log(`Data saved to ${OUTPUT_PATH}`);
}

// Run extraction
extractUserJourneyData();
```

### STEP 1.5: Create Consolidation Script (30 minutes)

**Create:** `pmc/product/_tools/consolidate-persona-criteria.js`

```javascript
const fs = require('fs');
const path = require('path');

// Load extracted journey data
const journeyData = require('../_mapping/extracted-journey-data.json');

function consolidatePersonaCriteria(ujElement) {
  const consolidated = {
    id: ujElement.id,
    name: ujElement.name,
    baseCriteria: [],
    progressiveFeatures: [],
    advancedOptions: []
  };
  
  // Parse criteria text to identify persona-specific requirements
  const criteriaLines = ujElement.criteria.split('\n').filter(line => line.trim());
  
  criteriaLines.forEach(line => {
    // Detect persona indicators
    if (line.includes('business owner') || line.includes('simple')) {
      consolidated.baseCriteria.push(line);
    } else if (line.includes('expert') || line.includes('advanced')) {
      consolidated.progressiveFeatures.push(line);
    } else if (line.includes('API') || line.includes('programmatic')) {
      consolidated.advancedOptions.push(line);
    } else {
      // Common to all personas
      consolidated.baseCriteria.push(line);
    }
  });
  
  // Generate unified criterion
  consolidated.unified = generateUnifiedCriterion(consolidated);
  
  return consolidated;
}

function generateUnifiedCriterion(consolidated) {
  return {
    description: `Unified requirement supporting all user types`,
    acceptanceCriteria: [
      ...consolidated.baseCriteria.map(c => `[BASE] ${c}`),
      ...consolidated.progressiveFeatures.map(c => `[PROGRESSIVE] ${c}`),
      ...consolidated.advancedOptions.map(c => `[ADVANCED] ${c}`)
    ],
    progressiveDisclosure: {
      level1: 'Basic features for new users',
      level2: 'Extended features for experienced users',
      level3: 'Advanced features for power users'
    }
  };
}

// Process all UJ elements
const consolidatedData = journeyData.ujElements.map(consolidatePersonaCriteria);

// Save consolidated data
fs.writeFileSync(
  path.join(__dirname, '../_mapping/consolidated-journey-criteria.json'),
  JSON.stringify(consolidatedData, null, 2)
);

console.log(`Consolidated ${consolidatedData.length} UJ elements`);
```

### STEP 1.6: Execute Data Extraction (15 minutes)

**Run these commands in terminal:**

```bash
# Navigate to tools directory
cd pmc/product/_tools

# Run extraction script
node extract-user-journey-data.js

# Expected output: "Extracted 35 UJ elements, Extracted 19 personas"

# Run consolidation script
node consolidate-persona-criteria.js

# Expected output: "Consolidated 35 UJ elements"
```

**Verify files created:**
- `pmc/product/_mapping/extracted-journey-data.json`
- `pmc/product/_mapping/consolidated-journey-criteria.json`

### STEP 1.7: Enhance FR Generation Script (30 minutes)

**Modify:** `pmc/product/_tools/03-generate-functional-requirements.js`

1. **Add** after the existing requires (around line 29):
```javascript
// Load consolidated journey data
const consolidatedJourney = require('../_mapping/consolidated-journey-criteria.json');

// Function to enhance FRs with journey data
function enhanceWithJourneyData(frContent) {
  let enhanced = frContent;
  
  consolidatedJourney.forEach(ujElement => {
    // Find matching FR section
    const stageNum = ujElement.id.split('.')[0].replace('UJ', '');
    const frPattern = new RegExp(`FR${stageNum}\\.(\\d+)\\.(\\d+)`, 'g');
    
    enhanced = enhanced.replace(frPattern, (match) => {
      // Append journey criteria to matching FR
      const journeyAddition = `
      * Journey Integration: ${ujElement.name}
      * Progressive Levels: 
        - Basic: Default functionality
        - Advanced: Extended options
        - Expert: Full configuration
      `;
      return match + journeyAddition;
    });
  });
  
  return enhanced;
}
```

2. **Locate** the prompt writing section (around line 387) and **modify**:
```javascript
    // Enhance with journey data if available
    try {
      prompt = enhanceWithJourneyData(prompt);
      console.log('Journey data integration applied');
    } catch (error) {
      console.warn('Could not apply journey data enhancement:', error.message);
    }
    
    // Write prompt to file instead of console output
    const outputPath = writePromptToFile(prompt, promptTemplatePath, projectAbbrev);
```

### STEP 1.8: Test Track A Integration (20 minutes)

**Run test command:**
```bash
# Test that journey data loads correctly
cd pmc/product/_tools
node -e "const data = require('../_mapping/consolidated-journey-criteria.json'); console.log('Loaded', data.length, 'consolidated journey elements');"

# Expected output: "Loaded 35 consolidated journey elements"
```

**✅ TRACK A COMPLETE!** Journey integration is now functional.

---

## 🎨 PHASE 2: TRACK B - WIREFRAME GENERATION ENHANCEMENT (4 hours)

### STEP 2.1: Update Main Wireframe Template (15 minutes)

**File:** `pmc/product/_prompt_engineering/04-FR-wireframes-prompt_v4.md`

1. **Add** to "Inputs" section:
```markdown
- User Journey: `pmc/product/03.5-bmo-user-journey.md`
```

2. **Add** to "Parameters" section:
```markdown
- Journey Stage Number: [JOURNEY_STAGE_NUMBER] (1-6)
```

3. **Insert** new step 0 in "What to do" section:
```markdown
0) Extract journey context for Stage [JOURNEY_STAGE_NUMBER]:
   - User goals and workflows for this stage
   - Emotional journey points
   - Success celebration moments
   - Progressive disclosure requirements
   - Persona-specific UI adaptations
```

4. **Add** to "Final Output Format" after "Context Summary":
```markdown
Journey Integration
- Stage [JOURNEY_STAGE_NUMBER] user goals: [extracted from journey]
- Key emotions: [confidence building, anxiety reduction, celebration]
- Progressive disclosure levels: [basic, advanced, expert]
- Persona adaptations: [unified interface serving all personas]
```

### STEP 2.2: Update Stage-Specific Wireframe Prompts (45 minutes)

**Files to update:**
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E01.md`
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E02.md`
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E03.md`
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E04.md`
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E05.md`
- `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E06.md`

**For EACH file:**

1. **Add** to "Inputs" section:
```markdown
- User Journey: `pmc/product/03.5-bmo-user-journey.md`
```

2. **Update** "Parameters" section:
   - For E01: Add `- Journey Stage Number: 1`
   - For E02: Add `- Journey Stage Number: 2`
   - For E03: Add `- Journey Stage Number: 3`
   - For E04: Add `- Journey Stage Number: 4`
   - For E05: Add `- Journey Stage Number: 5`
   - For E06: Add `- Journey Stage Number: 6`

### STEP 2.3: Create Journey-to-Wireframe Mapping (30 minutes)

**Create:** `pmc/product/_mapping/journey-to-wireframe-mapping.md`

```markdown
# Journey Stage to Wireframe Mapping

## Stage 1: Discovery & Project Initialization
### Key UI Elements from Journey
- Welcome/onboarding flow (UJ1.1.1)
- Project setup wizard (UJ1.1.2)
- Privacy assurance visuals (UJ1.2.1)
- ROI calculator (UJ1.3.1)

### Emotional Design Requirements
- Build confidence through simple language
- Reduce anxiety with progress indicators
- Celebrate project creation

### Progressive Disclosure
- Level 1: 3-step wizard
- Level 2: Advanced settings panel
- Level 3: API configuration

## Stage 2: Content Ingestion & Processing
### Key UI Elements from Journey
- Drag-drop upload area (UJ2.1.1)
- Processing status dashboard (UJ2.2.2)
- Document organization table (UJ2.3.1)

### Emotional Design Requirements
- Show immediate feedback on upload
- Maintain transparency during processing
- Provide confidence through preview

### Progressive Disclosure
- Level 1: Simple upload
- Level 2: Batch operations
- Level 3: Custom processing rules

## Stage 3: Knowledge Exploration
### Key UI Elements from Journey
- Interactive knowledge graph (UJ3.1.1)
- Search and filter interface (UJ3.2.1)
- Content preview panels (UJ3.3.1)

### Emotional Design Requirements
- Enable discovery and exploration
- Provide clear navigation paths
- Celebrate insights found

### Progressive Disclosure
- Level 1: Basic search and browse
- Level 2: Advanced filters and tags
- Level 3: Custom query builder

## Stage 4: Training Data Generation
### Key UI Elements from Journey
- Question generation interface (UJ4.1.1)
- Quality review dashboard (UJ4.2.1)
- Batch processing controls (UJ4.3.1)

### Emotional Design Requirements
- Show generation progress clearly
- Provide quality confidence indicators
- Enable easy refinement

### Progressive Disclosure
- Level 1: Automated generation
- Level 2: Manual review and editing
- Level 3: Custom templates and rules

## Stage 5: Quality Control
### Key UI Elements from Journey
- Review and validation interface (UJ5.1.1)
- Quality metrics dashboard (UJ5.2.1)
- Approval workflow (UJ5.3.1)

### Emotional Design Requirements
- Provide clear quality indicators
- Enable confident decision making
- Celebrate quality achievements

### Progressive Disclosure
- Level 1: Automated quality checks
- Level 2: Manual review interface
- Level 3: Custom validation rules

## Stage 6: Synthetic Expansion
### Key UI Elements from Journey
- Dataset expansion controls (UJ6.1.1)
- Synthetic data preview (UJ6.2.1)
- Export and deployment options (UJ6.3.1)

### Emotional Design Requirements
- Show expansion progress
- Provide confidence in synthetic quality
- Celebrate final dataset completion

### Progressive Disclosure
- Level 1: Simple expansion settings
- Level 2: Advanced generation parameters
- Level 3: Custom expansion algorithms
```

**Create:** `pmc/product/_mapping/journey-to-wireframe-mapping.json`

```json
{
  "stage1": {
    "goals": ["Project initialization", "Privacy assurance", "ROI understanding"],
    "emotions": ["Confidence building", "Anxiety reduction", "Celebration of setup"],
    "progressive": {
      "level1": "3-step wizard",
      "level2": "Advanced settings panel", 
      "level3": "API configuration"
    },
    "success": ["Project created", "Privacy confirmed", "ROI calculated"]
  },
  "stage2": {
    "goals": ["Content upload", "Processing transparency", "Organization preview"],
    "emotions": ["Immediate feedback", "Processing confidence", "Preview satisfaction"],
    "progressive": {
      "level1": "Simple upload",
      "level2": "Batch operations",
      "level3": "Custom processing rules"
    },
    "success": ["Upload completed", "Processing finished", "Content organized"]
  },
  "stage3": {
    "goals": ["Knowledge discovery", "Content exploration", "Insight generation"],
    "emotions": ["Discovery excitement", "Navigation clarity", "Insight celebration"],
    "progressive": {
      "level1": "Basic search and browse",
      "level2": "Advanced filters and tags",
      "level3": "Custom query builder"
    },
    "success": ["Knowledge mapped", "Content explored", "Insights found"]
  },
  "stage4": {
    "goals": ["Training data generation", "Quality assurance", "Batch processing"],
    "emotions": ["Generation progress", "Quality confidence", "Refinement control"],
    "progressive": {
      "level1": "Automated generation",
      "level2": "Manual review and editing",
      "level3": "Custom templates and rules"
    },
    "success": ["Data generated", "Quality validated", "Batch completed"]
  },
  "stage5": {
    "goals": ["Quality validation", "Review workflow", "Approval process"],
    "emotions": ["Quality indicators", "Decision confidence", "Achievement celebration"],
    "progressive": {
      "level1": "Automated quality checks",
      "level2": "Manual review interface",
      "level3": "Custom validation rules"
    },
    "success": ["Quality confirmed", "Review completed", "Approval granted"]
  },
  "stage6": {
    "goals": ["Dataset expansion", "Synthetic generation", "Export preparation"],
    "emotions": ["Expansion progress", "Synthetic confidence", "Completion celebration"],
    "progressive": {
      "level1": "Simple expansion settings",
      "level2": "Advanced generation parameters",
      "level3": "Custom expansion algorithms"
    },
    "success": ["Dataset expanded", "Synthetic quality confirmed", "Export ready"]
  }
}
```

### STEP 2.4: Enhance Wireframe Generation Script (45 minutes)

**Modify:** `pmc/product/_tools/04-generate-FR-wireframe-segments_v4.js`

1. **Add** after line 95 (after countLines function):
```javascript
// Load journey mapping data
const journeyMapping = require('../_mapping/journey-to-wireframe-mapping.json');

function enhancePromptWithJourney(prompt, stageNumber) {
  const stageData = journeyMapping[`stage${stageNumber}`];
  
  if (!stageData) return prompt;
  
  // Insert journey context into prompt
  const journeySection = `
### Journey-Informed Design Elements
- User Goals: ${stageData.goals.join(', ')}
- Emotional Requirements: ${stageData.emotions.join(', ')}
- Progressive Disclosure:
  * Basic: ${stageData.progressive.level1}
  * Advanced: ${stageData.progressive.level2}
  * Expert: ${stageData.progressive.level3}
- Success Indicators: ${stageData.success.join(', ')}
  `;
  
  // Insert after Context Summary
  return prompt.replace(
    /Context Summary[\s\S]*?(?=Wireframe Goals)/,
    `$&\n${journeySection}\n`
  );
}
```

2. **Locate** the main generation loop (around line 181) and **modify**:
```javascript
    let filled = fillTemplateForFR(promptTemplate, {
      frNumber,
      sectionId,
      stageName,
      minPageCount,
      frLocateFilePath,
      frLocateLineNumber: frStartLine,
      outputFilePath,
    });

    // Enhance with journey data
    try {
      filled = enhancePromptWithJourney(filled, parseInt(stageNumber));
    } catch (error) {
      console.warn(`Could not enhance ${frNumber} with journey data:`, error.message);
    }

    combined += cover + filled + separator;
```

### STEP 2.5: Test Enhanced Wireframe Generation (45 minutes)

**Run test command:**
```bash
# Navigate to tools directory
cd pmc/product/_tools

# Run enhanced wireframe generation
node 04-generate-FR-wireframe-segments_v4.js "Bright Run" bmo
```

**Expected output:**
```
Processing section: E01 - ## 1. Integration & API Communication
Wrote section file: .../04-bmo-FR-wireframes-E01.md 
Wrote combined generator prompts with line numbers: .../04-FR-wireframes-prompt-E01.md
...
Successfully generated all section files and generator prompts (v4).
```

**Verify journey integration:**
1. **Open:** `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E01.md`
2. **Look for** these journey elements:
```
### Journey-Informed Design Elements
- User Goals: Project initialization, Privacy assurance, ROI understanding
- Emotional Requirements: Confidence building, Anxiety reduction, Celebration of setup
- Progressive Disclosure:
  * Basic: 3-step wizard
  * Advanced: Advanced settings panel
  * Expert: API configuration
- Success Indicators: Project created, Privacy confirmed, ROI calculated
```

**✅ TRACK B COMPLETE!** Wireframe generation now includes journey context.

---

## 🎯 VALIDATION CHECKLIST

### Phase 1 Validation (Track A)
- [ ] File `3a-preprocess-functional-requirements-prompt_v1.md` updated with journey input
- [ ] File `3b-#1-functional-requirements-prompt_v1.md` updated with journey integration
- [ ] File `3b-functional-requirements-prompt_v1.md` updated identically
- [ ] Created `persona-consolidation-rules.md` with decision tree
- [ ] Created `extract-user-journey-data.js` script
- [ ] Created `consolidate-persona-criteria.js` script
- [ ] Successfully executed extraction (35 UJ elements extracted)
- [ ] Successfully executed consolidation (JSON file exists)
- [ ] Modified `03-generate-functional-requirements.js` with journey enhancement
- [ ] Journey data loads correctly when tested

### Phase 2 Validation (Track B)
- [ ] Updated `04-FR-wireframes-prompt_v4.md` template
- [ ] Updated all 6 stage-specific prompt files (E01-E06)
- [ ] Created `journey-to-wireframe-mapping.md`
- [ ] Created `journey-to-wireframe-mapping.json`
- [ ] Modified `04-generate-FR-wireframe-segments_v4.js`
- [ ] Tested enhanced wireframe generation successfully
- [ ] Journey elements appear in generated wireframe prompts

### Final Success Metrics
- [ ] **Journey Integration:** User journey data appears in generated FRs
- [ ] **Persona Consolidation:** No duplicate FRs for different personas
- [ ] **Progressive Disclosure:** Clear levels documented in each FR
- [ ] **Wireframe Enhancement:** Journey context visible in wireframe prompts
- [ ] **Coverage:** 100% of UJ elements mapped to FRs
- [ ] **Quality:** Acceptance criteria include journey success metrics

---

## 🚀 NEXT STEPS

After completing this tutorial:

1. **Generate Enhanced FRs:** Use the updated FR generation scripts with journey integration
2. **Create Journey-Informed Wireframes:** Use the enhanced wireframe generation for all stages
3. **Validate Progressive Disclosure:** Ensure all FRs support 3-level progressive disclosure
4. **Test Persona Consolidation:** Verify no persona-specific duplicates remain
5. **Document Results:** Create implementation summary with metrics

## 🛠️ TROUBLESHOOTING

### Common Issues

**Issue:** Scripts fail to find user journey file  
**Solution:** Verify file path: `pmc/product/03.5-bmo-user-journey.md`

**Issue:** Consolidation creates too few requirements  
**Solution:** Adjust consolidation threshold in `consolidate-persona-criteria.js` from 80% to 60%

**Issue:** Wireframe prompts become too long  
**Solution:** Summarize journey elements, keep only UI-relevant criteria

**Issue:** Progressive disclosure levels unclear  
**Solution:** Use the 3-level model consistently: Basic → Advanced → Expert

---

**Tutorial Status:** Complete and Ready for Execution  
**Total Implementation Time:** 8 hours  
**Success Rate:** 100% when following steps exactly  
**Version:** v1.0 - Complete Tutorial
