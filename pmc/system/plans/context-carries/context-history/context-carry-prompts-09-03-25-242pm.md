=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
pmc/system/plans/context-carries/context-carry-info-09-03-25-242pm.md

First, read the entire file to understand its current structure and content.

Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
   - Be explicit about the task
   - Include full paths where applicable
## Analysis and Specifications for Functional Requirements and Wireframe Generation Workflow

### Question 1: User Journey Integration with Functional Requirements Generation

**Current State Analysis:**
The project currently has a detailed user journey document (`brun8\pmc\product\03.5-bmo-user-journey.md`) with comprehensive persona definitions, stage-by-stage workflows, and success criteria. The functional requirements generation process uses three sequential prompts:
- `brun8\pmc\product\_prompt_engineering\3a-preprocess-functional-requirements-prompt_v1.md` (organization and cleanup)
- `brun8\pmc\product\_prompt_engineering\3b-#1-functional-requirements-prompt_v1.md` (enhancement part 1)
- `brun8\pmc\product\_prompt_engineering\3b-functional-requirements-prompt_v1.md` (enhancement part 2)

**Integration Assessment Required:**
Determine if the user journey document should be integrated as input for all three functional requirements prompts to improve:
1. **User-Centric Requirements**: Ensure FRs directly address user pain points and success criteria
2. **Persona-Specific Acceptance Criteria**: Tailor requirements to specific user personas (Small Business Owner, Domain Expert, etc.)
3. **Journey Stage Alignment**: Map functional requirements to specific user journey stages
4. **Success Metrics Integration**: Include user journey success definitions in FR acceptance criteria

**Specification for Investigation:**
- **Input Analysis**: Review current FR generation prompts to identify gaps in user-centric perspective
- **Journey Mapping**: Analyze how user journey stages (discovery, upload, exploration, generation, quality control, expansion) could inform FR structure
- **Persona Integration**: Evaluate if persona-specific requirements would improve wireframe generation quality
- **Success Criteria Alignment**: Assess if user journey success metrics should be embedded in FR acceptance criteria

**Recommended Investigation Approach:**
1. Compare current FRs against user journey requirements
2. Identify gaps where user journey insights could strengthen FRs
3. Test integration with one FR generation prompt as proof-of-concept
4. Measure improvement in wireframe generation quality and user-centricity

### Question 2: Wireframe Generation Workflow Optimization Analysis

**Current Workflow Assessment:**
The existing wireframe generation follows this pattern:
1. Template: `brun8\pmc\product\_prompt_engineering\04-FR-wireframes-prompt_v4.md` (generator prompt)
2. Stage-specific prompt: `brun8\pmc\product\_prompt_engineering\04-FR-wireframes-prompt-E01.md` (parameterized)
3. FIGMA output: `brun8\pmc\product\_prompt_engineering\04-bmo-FR-wireframes-output-E01.md` (final prompt)
4. Input dependency: Stage-specific FR file `brun8\pmc\product\04-bmo-FR-wireframes-E01.md`

**Critical Workflow Questions to Address:**

**A. User Journey vs User Stories Input Stack:**
- **Current**: Uses user stories as primary input for wireframe generation
- **Potential**: Replace user stories with user journey document as primary input
- **Investigation Required**: 
  - Does user journey provide more actionable UI/UX guidance than user stories?
  - Would persona-specific wireframes improve user experience?
  - Can journey stage workflows translate directly to wireframe flows?

**B. Functional Requirements Dependency Analysis:**
- **Current**: Stage-specific FR files drive wireframe acceptance criteria
- **Question**: Is this the optimal approach or should wireframes be generated from:
  - User journey workflows directly?
  - Combined user journey + simplified FRs?
  - Persona-specific journey maps?

**C. Input Stack Optimization Options:**

**Option 1: Enhanced Current Approach**
- Keep FR-driven wireframes
- Integrate user journey insights into FR generation
- Maintain current workflow with improved inputs

**Option 2: Journey-First Approach**
- Generate wireframes directly from user journey stages
- Use FRs as validation/enhancement layer
- Prioritize user flow over technical requirements

**Option 3: Hybrid Approach**
- Create persona-specific wireframe variants
- Use journey stages for flow definition
- Use FRs for technical constraint validation

**Specification for Workflow Analysis:**

**Phase 1: Current State Evaluation**
- Analyze quality of existing wireframes generated from FR-driven approach
- Identify gaps in user experience focus
- Document technical vs user-centric requirement balance

**Phase 2: Alternative Input Testing**
- Test wireframe generation using user journey as primary input
- Compare output quality, user-centricity, and technical completeness
- Evaluate persona-specific wireframe variations

**Phase 3: Optimization Recommendation**
- Define optimal input stack for FIGMA wireframe prompts
- Specify integration points between user journey, user stories, and FRs
- Create enhanced workflow that maximizes both user experience and technical accuracy

**Success Criteria for Workflow Optimization:**
1. **User Experience Quality**: Wireframes reflect actual user workflows and pain points
2. **Technical Completeness**: All functional requirements are addressed in UI design
3. **Persona Alignment**: Wireframes serve specific user personas effectively
4. **Development Efficiency**: Wireframes provide clear implementation guidance
5. **Stakeholder Clarity**: Non-technical users can validate wireframes against their needs

**Next Steps for Implementation:**
1. **Document Current Workflow Performance**: Measure existing wireframe quality and gaps
2. **Test User Journey Integration**: Run pilot wireframe generation with journey-first approach
3. **Compare Approaches**: Quantitative and qualitative analysis of different input stacks
4. **Define Optimal Workflow**: Create enhanced wireframe generation process
5. **Update Templates**: Modify prompt templates based on optimization findings

**Key Questions for Resolution:**
- Should user journey replace user stories as wireframe input?
- How can persona-specific needs be better reflected in wireframes?
- What is the optimal balance between user experience and technical requirements?
- Can the workflow be simplified while improving output quality?
- How should functional requirements be restructured to better support wireframe generation?

2. **Section Updates**
   - REQUIRED sections must always be included and fully populated
   - CONDITIONAL sections should only be included if relevant criteria are met
   - You MUST remove any sections marked CONDITIONAL if you don't update those sections because they don't have relevant content
   - Maintain consistent formatting within each section

3. **Content Requirements**
   - All file paths must be from workspace root
   - All task IDs must include both ID and title
   - All descriptions must be specific and actionable
   - All next steps must include clear success criteria

4. **Context Preservation**
   - Include any critical context from the current session
   - Reference relevant documentation and specifications
   - Maintain links between related tasks and components
   - Document any decisions or changes that affect future work

After updating the sections, review the entire file to ensure:
1. All REQUIRED sections are present and complete
2. All CONDITIONAL sections are either properly populated or removed
3. All formatting is consistent
4. All references and links are valid
5. The context is sufficient for a new session to continue the work

=========================Prompt=For=Building=Context=========================================


+++++++++++++++++++++++Prompt+to-Copy+Into+New+Context+Window++++++++++

# Context Loading Instructions for This Development Session

## 1. Primary Context Document
REQUIRED: Carefully review the current context carryover document:
`brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the brun8\pmc\system\plans\context-carries\context-carry-info-09-03-25-242pm.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

