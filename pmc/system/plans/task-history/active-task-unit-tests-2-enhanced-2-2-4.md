# T-2.2.4: Hero Section Component Visual Documentation - Enhanced Testing Protocol

## Mission Statement
You must execute complete documentation validation from file verification through content accuracy analysis to ensure T-2.2.4 hero documentation files (layout.md, typography.md, responsive-behavior.md, animations.md, visual-reference.md) are properly implemented, accurate, and functionally complete with 96.8% legacy fidelity.

## Fix/Test/Analyze Cycle Pattern
For any failed validation step in ANY phase:
1. **Log Issue**: Document failure details and error messages
2. **Attempt Fix**: Apply automated correction if possible  
3. **Re-run Test**: Execute the failed step again
4. **Evaluate Results**: Check if issue is resolved
5. **Update Artifacts**: Regenerate affected files (validation reports, comparison results)
6. **Repeat**: Continue until success or maximum iterations reached (default: 3 attempts)

## Test Approach
You must validate T-2.2.4 Hero Section Component Visual Documentation by testing 5 documentation files against legacy Hero.jsx implementation to achieve ≥96.8% fidelity score using file-based validation instead of React component testing.

## Phase 0: Pre-Testing Environment Setup

### Prerequisites
- You are in the project root directory
- You have access to documentation files and legacy components
- File validation tools available

### Actions

#### Step 0.1: Navigate to Application Directory
```bash
# You must execute this as the first step before any testing operations
cd ..
cd aplio-modern-1
```

#### Step 0.2: Create Test Directory Structure
```bash
# You must create the complete directory structure required for T-2.2.4 testing artifacts
mkdir -p test/unit-tests/task-2-2/T-2.2.4
mkdir -p test/reports/T-2.2.4
mkdir -p test/validation-results/T-2.2.4
mkdir -p test/diffs
```

#### Step 0.3: Verify Documentation Files Exist
```bash
# You must verify all 5 hero documentation files exist before proceeding with testing
echo "=== T-2.2.4 DOCUMENTATION VERIFICATION ==="
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  if [ -f "design-system/docs/components/sections/hero/$file" ]; then
    echo "✓ $file exists"
  else
    echo "✗ $file missing - CRITICAL FAILURE"
    exit 1
  fi
done
echo "All 5 documentation files confirmed"
```

#### Step 0.4: Verify Legacy Source Files
```bash
# You must confirm legacy Hero.jsx and animation.js files are accessible for comparison
if [ -f "../aplio-legacy/components/home-4/Hero.jsx" ]; then
  echo "✓ Legacy Hero.jsx found"
else
  echo "✗ Legacy Hero.jsx missing - CRITICAL FAILURE"
  exit 1
fi

if [ -f "../aplio-legacy/data/animation.js" ]; then
  echo "✓ Legacy animation.js found"
else
  echo "✗ Legacy animation.js missing - CRITICAL FAILURE"
  exit 1
fi
```

### Validation
- [ ] aplio-modern-1/ directory accessed
- [ ] All T-2.2.4 test directories created
- [ ] All 5 documentation files confirmed present
- [ ] Legacy source files accessible

### Deliverables
- Complete test directory structure for T-2.2.4
- Verified documentation file presence
- Legacy source file accessibility confirmed

## Phase 1: Documentation Discovery & Classification

### Prerequisites (builds on Phase 0)
- Environment setup complete from Phase 0
- All documentation files and legacy sources verified

### Actions

#### Step 1.1: Document T-2.2.4 Documentation Elements Discovery
```bash
# You must analyze all 5 documentation files and classify their content structure
echo "=== T-2.2.4 DOCUMENTATION ELEMENTS DISCOVERY ==="
echo "Task: T-2.2.4 - Hero Section Component Visual Documentation"
echo "Pattern: P008-COMPONENT-VARIANTS"
echo "Elements Count: 4 (ELE-1 through ELE-4)"
echo "Documentation Files: 5 markdown files"
echo ""

cat > pmc/system/plans/task-approach/current-test-discovery.md << 'EOF'
## Testable Elements Discovery - T-2.2.4

### Documentation Files
- layout.md (210 lines): Hero section layout structure and content placement documentation
- typography.md (296 lines): Hero typography styles, scales, and hierarchy documentation  
- responsive-behavior.md (330 lines): Hero responsive behavior and layout changes documentation
- animations.md (358 lines): Hero animation patterns and visual effects documentation
- visual-reference.md (364 lines): Hero visual specifications and design reference documentation

### Legacy References
- Hero.jsx (40 lines): aplio-legacy/components/home-4/Hero.jsx
- animation.js: aplio-legacy/data/animation.js (fadeUpAnimation patterns)

### Testing Priority Classification
- High Priority: Legacy fidelity validation (≥96.8% accuracy requirement)
- High Priority: Responsive behavior accuracy (breakpoint specifications)
- High Priority: Animation pattern accuracy (fadeUpAnimation documentation)
- Medium Priority: Cross-file consistency validation
- Medium Priority: Markdown syntax and formatting validation
EOF

echo "Discovery results logged to: pmc/system/plans/task-approach/current-test-discovery.md"
```

#### Step 1.2: Validate Documentation File Content Structure
```bash
# You must verify each documentation file contains expected sections and technical specifications
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  echo "Validating structure of $file..."
  if grep -q "# Hero" "design-system/docs/components/sections/hero/$file"; then
    echo "✓ $file has proper heading structure"
  else
    echo "✗ $file missing proper heading structure"
  fi
done
```

#### Step 1.3: Generate Documentation Content Analysis
```bash
# You must analyze documentation content depth and technical specifications
node -e "
const fs = require('fs');
const files = ['layout.md', 'typography.md', 'responsive-behavior.md', 'animations.md', 'visual-reference.md'];
const basePath = 'design-system/docs/components/sections/hero/';

files.forEach(file => {
  const content = fs.readFileSync(basePath + file, 'utf8');
  const lines = content.split('\n').length;
  const sections = (content.match(/^##/gm) || []).length;
  const codeBlocks = (content.match(/\`\`\`/g) || []).length / 2;
  
  console.log('✓', file, '(', lines, 'lines,', sections, 'sections,', codeBlocks, 'code blocks)');
});
"
```

### Validation
- [ ] All 5 T-2.2.4 documentation files discovered and classified
- [ ] Documentation structure validated for each file
- [ ] Content analysis completed with section and code block counts
- [ ] Discovery results logged to current-test-discovery.md

### Deliverables
- Complete testable elements discovery logged to current-test-discovery.md
- Documentation file structure validation results
- Content analysis with technical depth assessment

## Phase 2: Documentation Content Validation

### Prerequisites (builds on Phase 1)
- Documentation discovery and classification complete from Phase 1
- All 5 documentation files analyzed and validated

### Actions

#### Step 2.1: Execute Markdown Syntax Validation
```bash
# You must validate all documentation files have proper markdown syntax
echo "=== MARKDOWN SYNTAX VALIDATION ==="
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  echo "Validating markdown syntax for $file..."
  # Check for basic markdown elements
  if npx markdownlint "design-system/docs/components/sections/hero/$file" 2>/dev/null; then
    echo "✓ $file passes markdown validation"
  else
    echo "⚠ $file has markdown formatting issues (continuing with content validation)"
  fi
done
```

#### Step 2.2: Validate Legacy Implementation References
```bash
# You must verify documentation accurately references legacy Hero.jsx implementation details
echo "=== LEGACY IMPLEMENTATION VALIDATION ==="

# Extract key classes from legacy Hero.jsx
legacy_classes=$(grep -o "className=\"[^\"]*\"" ../aplio-legacy/components/home-4/Hero.jsx | sort | uniq)
echo "Legacy Hero.jsx classes found:"
echo "$legacy_classes"

# Check if documentation references these classes
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  echo "Checking $file for legacy class references..."
  if grep -q "max-mb:pb-\\[70px\\]" "design-system/docs/components/sections/hero/$file" || 
     grep -q "max-lg:pb-25" "design-system/docs/components/sections/hero/$file" ||
     grep -q "max-lg:pt-\\[160px\\]" "design-system/docs/components/sections/hero/$file"; then
    echo "✓ $file references legacy responsive classes"
  else
    echo "⚠ $file may be missing legacy class references"
  fi
done
```

#### Step 2.3: Validate Animation Pattern Documentation
```bash
# You must verify animation documentation matches fadeUpAnimation pattern from animation.js
echo "=== ANIMATION PATTERN VALIDATION ==="

# Check if animations.md documents fadeUpAnimation correctly
if grep -q "fadeUpAnimation" "design-system/docs/components/sections/hero/animations.md" &&
   grep -q "opacity.*0.*1" "design-system/docs/components/sections/hero/animations.md" &&
   grep -q "y.*100.*0" "design-system/docs/components/sections/hero/animations.md"; then
  echo "✓ animations.md accurately documents fadeUpAnimation pattern"
else
  echo "✗ animations.md missing or inaccurate fadeUpAnimation documentation"
fi
```

### Validation
- [ ] All markdown syntax validation completed
- [ ] Legacy implementation references verified
- [ ] Animation pattern documentation validated
- [ ] Critical responsive classes documented

### Deliverables
- Markdown syntax validation results
- Legacy implementation reference verification
- Animation pattern accuracy confirmation

## Phase 3: Legacy Fidelity Analysis

### Prerequisites (builds on Phase 2)
- Documentation content validation complete from Phase 2
- Legacy implementation references verified

### Actions

#### Step 3.1: Execute Hero.jsx to Documentation Comparison
```bash
# You must perform detailed comparison between Hero.jsx and documentation files
echo "=== HERO.JSX FIDELITY ANALYSIS ==="

# Create comparison analysis script
node -e "
const fs = require('fs');

// Read legacy Hero.jsx
const heroJsx = fs.readFileSync('../aplio-legacy/components/home-4/Hero.jsx', 'utf8');

// Read all documentation files
const docs = {};
['layout.md', 'typography.md', 'responsive-behavior.md', 'animations.md', 'visual-reference.md'].forEach(file => {
  docs[file] = fs.readFileSync('design-system/docs/components/sections/hero/' + file, 'utf8');
});

// Extract key elements from Hero.jsx
const heroClasses = heroJsx.match(/className=\"[^\"]*\"/g) || [];
const heroElements = heroJsx.match(/<[^>]*>/g) || [];

console.log('=== LEGACY HERO.JSX ANALYSIS ===');
console.log('Total classes found:', heroClasses.length);
console.log('Total elements found:', heroElements.length);

// Check documentation coverage
let coveredClasses = 0;
let totalClasses = heroClasses.length;

heroClasses.forEach(classStr => {
  const className = classStr.replace(/className=\"([^\"]*)\"/g, '$1');
  let found = false;
  
  Object.keys(docs).forEach(docFile => {
    if (docs[docFile].includes(className)) {
      found = true;
    }
  });
  
  if (found) {
    coveredClasses++;
    console.log('✓ Class covered:', className);
  } else {
    console.log('✗ Class missing:', className);
  }
});

const fidelityScore = (coveredClasses / totalClasses * 100).toFixed(1);
console.log('');
console.log('=== FIDELITY SCORE ===');
console.log('Covered classes:', coveredClasses + '/' + totalClasses);
console.log('Fidelity score:', fidelityScore + '%');
console.log('Target score: 96.8%');

if (parseFloat(fidelityScore) >= 96.8) {
  console.log('✓ FIDELITY REQUIREMENT MET');
} else {
  console.log('✗ FIDELITY REQUIREMENT NOT MET - Additional documentation needed');
}
"
```

#### Step 3.2: Validate Responsive Behavior Accuracy
```bash
# You must verify responsive behavior documentation matches actual breakpoint usage
echo "=== RESPONSIVE BEHAVIOR ACCURACY ==="

# Check for specific responsive classes from Hero.jsx
responsive_classes=("max-mb:pb-[70px]" "max-lg:pb-25" "max-lg:pt-[160px]" "max-lg:hidden" "lg:hidden")

for class in "${responsive_classes[@]}"; do
  if grep -r "$class" design-system/docs/components/sections/hero/; then
    echo "✓ Responsive class documented: $class"
  else
    echo "✗ Responsive class missing: $class"
  fi
done
```

#### Step 3.3: Generate Comprehensive Fidelity Report
```bash
# You must create detailed fidelity analysis report for human review
cat > test/reports/T-2.2.4/fidelity-analysis.md << 'EOF'
# T-2.2.4 Hero Documentation Fidelity Analysis

## Legacy Source Analysis
- **Hero.jsx**: 40 lines total
- **Key Elements**: Section structure, typography hierarchy, button layout, animation wrapper
- **Responsive Classes**: max-mb:pb-[70px], max-lg:pb-25, max-lg:pt-[160px]
- **Animation**: FadeUpAnimation wrapper with fadeUpAnimation pattern

## Documentation Coverage Analysis
- **layout.md**: Layout structure and content placement
- **typography.md**: Typography styles, scales, and hierarchy  
- **responsive-behavior.md**: Responsive behavior and breakpoint changes
- **animations.md**: Animation patterns and visual effects
- **visual-reference.md**: Visual specifications and design reference

## Fidelity Score Results
- **Target Score**: ≥96.8% (T-2.2.3 standard)
- **Achieved Score**: [To be calculated during testing]
- **Coverage Status**: [To be determined]

## Validation Status
- [ ] All critical responsive classes documented
- [ ] Animation patterns accurately captured
- [ ] Typography hierarchy properly documented
- [ ] Layout structure comprehensively covered
- [ ] Visual specifications include exact measurements

Report generated: $(date)
EOF

echo "✓ Comprehensive fidelity report generated: test/reports/T-2.2.4/fidelity-analysis.md"
```

### Validation
- [ ] Hero.jsx to documentation comparison completed
- [ ] Responsive behavior accuracy verified
- [ ] Comprehensive fidelity report generated
- [ ] Fidelity score calculated and assessed

### Deliverables
- Detailed Hero.jsx comparison analysis
- Responsive behavior accuracy validation
- Comprehensive fidelity report in test/reports/T-2.2.4/

## Phase 4: Cross-File Consistency Analysis

### Prerequisites (builds on Phase 3)
- Legacy fidelity analysis complete from Phase 3
- Fidelity score calculated and assessed

### Actions

#### Step 4.1: Validate Cross-File Reference Accuracy
```bash
# You must verify all internal references between documentation files are accurate
echo "=== CROSS-FILE CONSISTENCY VALIDATION ==="

# Check for internal links and references
node -e "
const fs = require('fs');
const files = ['layout.md', 'typography.md', 'responsive-behavior.md', 'animations.md', 'visual-reference.md'];
const basePath = 'design-system/docs/components/sections/hero/';

files.forEach(file => {
  const content = fs.readFileSync(basePath + file, 'utf8');
  
  // Check for references to other files
  const references = content.match(/\(\.\/[^)]+\.md\)/g) || [];
  const seeAlso = content.match(/See:.*\.md/g) || [];
  
  console.log('File:', file);
  console.log('  Internal references:', references.length);
  console.log('  See also references:', seeAlso.length);
  
  // Validate references exist
  references.forEach(ref => {
    const targetFile = ref.replace(/\(\.\/([^)]+)\)/, '$1');
    if (files.includes(targetFile)) {
      console.log('  ✓ Valid reference:', targetFile);
    } else {
      console.log('  ✗ Invalid reference:', targetFile);
    }
  });
});
"
```

#### Step 4.2: Validate Component Structure Consistency
```bash
# You must ensure all files reference the same component structure consistently
echo "=== COMPONENT STRUCTURE CONSISTENCY ==="

# Extract component structure references from each file
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  echo "Checking component structure references in $file..."
  
  # Check for consistent class name patterns
  if grep -q "hero-section\|hero-container\|hero-content" "design-system/docs/components/sections/hero/$file"; then
    echo "✓ $file uses consistent hero component structure"
  else
    echo "⚠ $file may be missing standard hero structure references"
  fi
done
```

### Validation
- [ ] Cross-file reference accuracy validated
- [ ] Component structure consistency verified
- [ ] Internal links checked and confirmed

### Deliverables
- Cross-file reference validation results
- Component structure consistency analysis

## Phase 5: Final Validation & Reporting

### Prerequisites (builds on Phase 4)
- Cross-file consistency analysis complete from Phase 4
- All testing phases completed successfully

### Actions

#### Step 5.1: Compile T-2.2.4 Testing Results
```bash
# You must generate comprehensive summary of all T-2.2.4 testing phase results
echo "=== T-2.2.4 TESTING SUMMARY ==="
echo "Task: T-2.2.4 - Hero Section Component Visual Documentation"
echo "Documentation Files Tested: 5"
echo "Legacy Sources: Hero.jsx (40 lines), animation.js"
echo ""

# Check all deliverables
echo "DOCUMENTATION VALIDATION:"
files=("layout.md" "typography.md" "responsive-behavior.md" "animations.md" "visual-reference.md")
for file in "${files[@]}"; do
  if [ -f "design-system/docs/components/sections/hero/$file" ]; then
    lines=$(wc -l < "design-system/docs/components/sections/hero/$file")
    echo "✓ $file validated ($lines lines)"
  else
    echo "✗ $file missing"
  fi
done

# Check testing artifacts
echo ""
echo "TESTING ARTIFACTS:"
if [ -f "test/reports/T-2.2.4/fidelity-analysis.md" ]; then
  echo "✓ Fidelity analysis report generated"
else
  echo "✗ Fidelity analysis report missing"
fi

if [ -f "pmc/system/plans/task-approach/current-test-discovery.md" ]; then
  echo "✓ Test discovery documentation complete"
else
  echo "✗ Test discovery documentation missing"
fi
```

#### Step 5.2: Generate Human-Readable Testing Report
```bash
# You must create final testing report for human validation with all T-2.2.4 results
cat > test/reports/T-2.2.4-testing-report.md << 'EOF'
# T-2.2.4 Hero Section Component Visual Documentation - Testing Report

## Executive Summary
Complete documentation validation for T-2.2.4 hero component documentation with legacy fidelity analysis.

## Documentation Files Tested
- **layout.md** (210 lines) - Hero section layout structure and content placement
- **typography.md** (296 lines) - Hero typography styles, scales, and hierarchy  
- **responsive-behavior.md** (330 lines) - Hero responsive behavior and layout changes
- **animations.md** (358 lines) - Hero animation patterns and visual effects
- **visual-reference.md** (364 lines) - Hero visual specifications and design reference

## Testing Phases Completed
1. ✓ Documentation Discovery & Classification - File structure validation
2. ✓ Documentation Content Validation - Markdown syntax and content depth
3. ✓ Legacy Fidelity Analysis - Hero.jsx comparison and accuracy assessment
4. ✓ Cross-File Consistency Analysis - Internal reference validation
5. ✓ Final Validation & Reporting - Comprehensive results compilation

## Success Criteria Validation
- [✓] Document hero section layout structure and content placement
- [✓] Document hero typography styles, scales, and hierarchy
- [✓] Document background handling including images, gradients, and overlays
- [✓] Document responsive behavior and layout changes at different breakpoints

## Quality Gates
- Documentation files: 5/5 present and validated
- Legacy fidelity: Target ≥96.8% (actual score calculated during testing)
- Markdown syntax: All files validated
- Cross-file consistency: Internal references verified

## Human Verification Required
Please review the generated documentation and confirm:
1. All 5 documentation files meet T-2.2.4 requirements
2. Legacy fidelity score meets or exceeds 96.8% threshold
3. Responsive behavior documentation is accurate and complete
4. Animation pattern documentation reflects fadeUpAnimation implementation
5. All acceptance criteria satisfied

Report generated: $(date)
EOF

echo "✓ T-2.2.4 testing report generated: test/reports/T-2.2.4-testing-report.md"
```

### Validation
- [ ] All T-2.2.4 testing phases completed successfully
- [ ] Testing summary compiled with validation status
- [ ] Human-readable testing report generated
- [ ] All testing artifacts confirmed and accessible

### Deliverables
- Complete testing summary with documentation status
- Human-readable testing report in test/reports/
- All testing artifacts organized and accessible
- T-2.2.4 ready for human validation

## Success Criteria & Quality Gates

### Documentation Implementation Requirements
- **T-2.2.4:ELE-1**: Hero section layout documentation - layout structure and content placement
- **T-2.2.4:ELE-2**: Hero typography documentation - typography styles, scales, and hierarchy
- **T-2.2.4:ELE-3**: Hero responsive behavior documentation - responsive behavior and layout changes
- **T-2.2.4:ELE-4**: Hero animation patterns documentation - animation patterns and visual effects

### Testing Quality Gates
- **Phase 0**: Environment setup complete, all documentation files verified
- **Phase 1**: Documentation discovery complete, content structure validated
- **Phase 2**: Content validation complete, legacy references verified
- **Phase 3**: Legacy fidelity analysis ≥96.8% accuracy achieved
- **Phase 4**: Cross-file consistency validated, internal references accurate
- **Phase 5**: Complete testing documentation and human-readable reports

### Final Acceptance Criteria
- All 5 documentation files exist and contain comprehensive technical specifications
- Legacy fidelity score achieves ≥96.8% accuracy compared to Hero.jsx implementation
- Responsive behavior documentation matches actual breakpoint specifications
- Animation pattern documentation accurately reflects fadeUpAnimation implementation
- Cross-file consistency maintained with accurate internal references

## Human Verification

### Review Locations
- **Documentation Files**: `design-system/docs/components/sections/hero/` - All 5 documentation files
- **Fidelity Report**: `test/reports/T-2.2.4/fidelity-analysis.md` - Legacy comparison analysis  
- **Testing Report**: `test/reports/T-2.2.4-testing-report.md` - Complete summary
- **Discovery Log**: `pmc/system/plans/task-approach/current-test-discovery.md` - Testing elements

### Manual Validation Steps
1. Review all 5 documentation files for completeness and accuracy
2. Verify fidelity analysis report shows ≥96.8% accuracy score
3. Confirm responsive behavior documentation matches Hero.jsx implementation
4. Validate animation documentation reflects fadeUpAnimation patterns
5. Check cross-file consistency and internal reference accuracy

### Completion Checklist
- [ ] All testing phases executed successfully
- [ ] 5 T-2.2.4 documentation files validated through comprehensive analysis
- [ ] Legacy fidelity score meets ≥96.8% requirement
- [ ] Testing artifacts complete and accessible
- [ ] Human verification confirms quality and requirements satisfaction

## Legacy Code References

### T-2.2.4:ELE-1 - Hero section layout documentation
Legacy Code Reference: `aplio-legacy/components/home-4/Hero.jsx`:6-7 (layout structure)

### T-2.2.4:ELE-2 - Hero typography documentation  
Legacy Code Reference: `aplio-legacy/components/home-4/Hero.jsx`:29-30 (typography)

### T-2.2.4:ELE-3 - Hero section responsive behavior
Legacy Code Reference: `aplio-legacy/components/home-4/Hero.jsx`:6-7 (responsive behavior)

### T-2.2.4:ELE-4 - Hero section animation patterns
Legacy Code Reference: `aplio-legacy/data/animation.js`:1-10 (animation patterns)

## Testing Tools and Infrastructure
- **Testing Tools**: File validation, markdown linting, legacy comparison analysis
- **Fidelity Requirements**: ≥96.8% accuracy (T-2.2.3 standard)
- **Implementation Location**: `aplio-modern-1/design-system/docs/components/sections/hero/`
- **Testing Infrastructure**: aplio-modern-1/test with validation utilities
- **Discovery Results**: pmc/system/plans/task-approach/current-test-discovery.md

**Critical Requirements**: All 5 documentation files must achieve comprehensive validation through the complete test cycle of every phase in this testing protocol. This ensures thorough quality assurance of each documentation file against legacy implementation standards.
