# Development Context & Operational Priorities
**Date:** 2025-07-19 23:17 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses the specific task of updating and fixing the `01-02-generate-product-specs.js` script to work properly, following the same pattern and fixes applied to `00-generate-seed-story.js`.

## Current Focus

### Active Development Focus

**Task**: Update and fix `pmc/product/_tools/01-02-generate-product-specs.js` to work properly

**Objective**: Make the product specs generator script functional and consistent with the seed story generator pattern.

**Critical Issues Identified**:
1. **Missing Configuration File**: Script expects `pmc/product/_tools/config/prompts-config.json` which doesn't exist
2. **Template Path Issues**: Script references prompt templates that may need path corrections
3. **Output Method**: Script only displays prompts in terminal instead of saving to files
4. **Template Naming**: Need to update to use `01-product-overview-prompt-template_v1.md` (available) instead of the non-existent `00-product-overview-prompt-template_v1.md`
5. **Path Validation**: All file paths need to be validated for existence and accessibility

**Current State**: Script is non-functional due to missing configuration and path issues.

### Next Steps 

1. **Create Missing Configuration File**: `pmc/product/_tools/config/prompts-config.json`
   - Dependencies: Analyze script requirements and existing template structure
   - Expected outcome: Functional configuration file with correct paths

2. **Update Template References**: Change script to use `01-product-overview-prompt-template_v1.md`
   - Dependencies: Configuration file creation
   - Expected outcome: Script references existing template files

3. **Add File Output Functionality**: Implement prompt saving to `pmc/product/_run-prompts/`
   - Dependencies: Configuration and template fixes
   - Expected outcome: Generated prompts saved as `00-product-[abbreviation]-overview-prompt-v1.md`

4. **Validate All Required Files**: Ensure all referenced files exist and are accessible
   - Dependencies: Configuration and template updates
   - Expected outcome: All file paths validated and working

5. **Test Script Execution**: Run script from `pmc/product/_tools/` directory
   - Dependencies: All previous fixes completed
   - Expected outcome: Script executes successfully and generates prompt files

### Important Files

1. **`pmc/product/_tools/01-02-generate-product-specs.js`** 
   - Purpose: Main script requiring fixes
   - Current state: Non-functional, needs configuration and output updates

2. **`pmc/product/_tools/config/prompts-config.json`** 
   - Purpose: Required configuration file (MISSING)
   - Current state: Does not exist, must be created

3. **`pmc/product/_prompt_engineering/01-product-overview-prompt-template_v1.md`**
   - Purpose: Available prompt template to use
   - Current state: Exists and available

4. **`pmc/product/_prompt_engineering/product-overview-prompt-template_v1.md`**
   - Purpose: Alternative prompt template available
   - Current state: Exists, determine if this or 01- version should be used

5. **`pmc/product/_tools/00-generate-seed-story.js`**
   - Purpose: Reference implementation showing correct patterns
   - Current state: Working correctly, use as template for fixes

6. **`pmc/product/_tools/seed-story-config.json`**
   - Purpose: Reference configuration structure
   - Current state: Working example to model new config after

### Important Scripts, Markdown Files, and Specifications

1. **`pmc/product/_tools/00-generate-seed-story.js`**
   - Purpose: Reference implementation for file output patterns
   - Key sections: `savePromptToFile()` function, filename generation, path handling

2. **`pmc/product/_tools/seed-story-config.json`**
   - Purpose: Configuration structure reference
   - Key sections: Path definitions, placeholder structure, conditional sections

3. **Analysis from Current Script (`01-02-generate-product-specs.js`)**:
   - **Expected Config Path**: `config/prompts-config.json` (relative to script)
   - **Expected Structure**: Based on code analysis, needs `documents` array with template configurations
   - **Current Template References**: Uses `prompt_template_path` field in config
   - **Path Handling**: Has complex path resolution logic that may need updating

### Required Configuration File Structure

Based on script analysis, the missing `config/prompts-config.json` needs:

```json
{
  "documents": [
    {
      "type": "overview",
      "prompt_template_path": "../_prompt_engineering/01-product-overview-prompt-template_v1.md",
      "template_config": {
        "required_placeholders": {
          "PROJECT_NAME": "{{project_name}}",
          "SEED_STORY_PATH": "product/00-{{project_abbreviation}}-seed-story.md",
          "TEMPLATE_PATH": "product/_templates/01-overview-template.md",
          "REFERENCE_EXAMPLE_PATH": "product/_examples/01-aplio-mod-1-overview.md",
          "OUTPUT_PATH": "product/01-{{project_abbreviation}}-overview.md"
        },
        "conditional_sections": {
          "current_status": {
            "placeholders": {
              "CODEBASE_REVIEW_PATH": "codebase_path_here"
            }
          }
        }
      }
    }
  ]
}
```

### Required Script Updates

1. **Add File Output Function**: Similar to `savePromptToFile()` in seed story script
2. **Update Filename Generation**: Create `00-product-[abbreviation]-overview-prompt-v1.md`
3. **Fix Path References**: Ensure all paths include `product/` prefix where needed
4. **Update Template Path**: Use existing `01-product-overview-prompt-template_v1.md`

### Files That Need to Exist for Script to Work

1. ✅ `pmc/product/_tools/01-02-generate-product-specs.js` (exists)
2. ❌ `pmc/product/_tools/config/prompts-config.json` (missing - must create)
3. ✅ `pmc/product/_prompt_engineering/01-product-overview-prompt-template_v1.md` (exists)
4. ✅ `pmc/product/_templates/01-overview-template.md` (need to verify)
5. ✅ `pmc/product/_examples/01-aplio-mod-1-overview.md` (need to verify)
6. ✅ `pmc/product/00-bmo-seed-story.md` (or equivalent seed story file)

### Template File Verification Needed

- Verify existence of: `pmc/product/_templates/01-overview-template.md`
- Verify existence of: `pmc/product/_examples/01-aplio-mod-1-overview.md`
- Confirm which overview prompt template to use: `01-product-overview-prompt-template_v1.md` vs `product-overview-prompt-template_v1.md`

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Pattern Reference from Working Script (00-generate-seed-story.js)

#### File Output Implementation
```javascript
function savePromptToFile(prompt, filename, projectAbbrev) {
  const outputDir = path.resolve(__dirname, '../_run-prompts');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, prompt, 'utf-8');
  console.log(`✅ Prompt saved to: ${toProjectPath(filePath)}`);
  return filePath;
}
```

#### Filename Generation Pattern
- Narrative: `00-product-${projectAbbrev}-seed-narrative-prompt-v1.md`
- Story: `00-product-${projectAbbrev}-seed-story-prompt-v1.md`
- Overview should be: `00-product-${projectAbbrev}-overview-prompt-v1.md`

#### Configuration Structure Reference (seed-story-config.json)
```json
{
  "seed-narrative": {
    "promptPath": "../_prompt_engineering/00-product-seed-narrative-prompt-template_v1.md",
    "required_placeholders": {
      "PROJECT_NAME": {
        "type": "text",
        "default": "{{project_name}}"
      },
      "OUTPUT_PATH": {
        "type": "product_path",
        "default": "product/00-{{project_abbreviation}}-seed-narrative.md"
      }
    }
  }
}
```

### Quick Implementation Priority

1. **Immediate**: Create config file with minimal overview document definition
2. **Immediate**: Add file output functionality to script
3. **Secondary**: Validate all template file paths
4. **Secondary**: Test with real project abbreviation (bmo)
5. **Final**: Verify output files are created correctly in `_run-prompts/`
