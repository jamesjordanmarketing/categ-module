=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md

First, read the entire file to understand its current structure and content.

Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
   - Be explicit about the task
   - Include full paths where applicable

You are not going to execute the below. Your task is to update: pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md with the details of what I am requesting below:

Ok we have implemented a new Test system.  In order to understand the new system you need to read these specifications carefully: 

pmc\context-ai\chat-contexts-log\pmct\testing-system-setup-spec-v3.md
pmc\context-ai\chat-contexts-log\pmct\testing-system-operations-tutorial-v3.md
pmc\context-ai\chat-contexts-log\pmct\testing-system-implementation-summary.md

I will need you to understand not just the instructions but you must understand the ACTUAL reality of whether these things can happen as instructed. To do that you will have to become intimately knowledgeable about ALL the code in the testing application:
aplio-modern-1\test (and all it's subfolders especially aplio-modern-1\test\utils where most of the cod actually lives)
and the testing tools in aplio-modern-1\node_modules

Questions I have:

1. Is the tutorial here: pmc\context-ai\chat-contexts-log\pmct\testing-system-operations-tutorial-v3.md
Accurate? Can I operate the system according to this tutorial?

2. Lets role play a scenario:
I have a new project with the following structure:

model-1-project/
├── old-model/ (if applicable old code needed for reference)
├── new-model-1/ (the end product to be tested. node_modules lives here)
├── pmc/ (my AI agent based project management system)

How do I setup the testing environment?
Does node_module have to exist in order for me to setup the project?
Do I need to setup the testing environment BEFORE I start creating the test paths for tasks?
(e.g. Before creating mkdir for this:
- **Test Location**: `**Test Locations**: `C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-26-a1-c\aplio-modern-1\test\unit-tests\task-5-4\T-5.4.4\`
 )
 I would assume so..but want to check.

 3. In the process of creating this app did you set it up already in aplio-modern-1?
 
 4. Are there any data/reports/tests/links that reside in (or point to) node_module wherein re-creating node_module would cause us to lose progress?

 5. What if I need to delete node_module for some reason in this current project. 
 Do I need to rerun the script?
 Will rerunning the script delete any data/tests/reports/progress I have made using /test?
 If so then we probably need a script which's only purpose is to redeploy needed tools & functions to node_module and that doesn't update anything else. 
 
 6. How will the autonomous testing agent use this system? We need a detailed prompt that we will tell the testing agent to use.

 7. How can I test/view the new web server on port 3333 and the dashboard for it on port 3334?

 8. To create a testing app in a new project, do I simply copy the project folder: aplio-modern-1\test into the product folder of my new product and then run this script: install-test-environment.js?
 and it will create all of the needed assets in the product folder (including product/node_module/ tools like jest..etc...)?
 I am a bit confused...it looks like all the folders already exist in test/ so what does the install-test-environment.js do besides install the testing tool stack in node_module?

I see here in the tutorial that the script:
install-test-environment.js
will:
- Check for and create the configuration file if it doesn't exist
- Create the directory structure in the locations specified by the config
- Install all required dependencies
- Copy template files to the appropriate locations
- Generate initial mock data fixtures
- Configure the test server
- Add required scripts to package.json
- Verify the installation and generate a report

If that is the case...then do I ONLY need the script in aplio-modern-1\test\utils\install-test-environment.js 
and then when I run it it will create everything else in aplio-modern-1\test\ and also add the tools to node_module?

9. The tutorial here: pmc\context-ai\chat-contexts-log\pmct\testing-system-operations-tutorial-v3.md has three main steps for the ai agent to run tests:
#### Step 2: AI Testing Agent Creates Mock Data and Test Scaffold
#### Step 3: AI Testing Agent Implements Tests
#### Step 4: AI Testing Agent Runs Tests

Do these test steps autonomously implmement a copy of the best scaffold for the task to the tesing directory for that task (e.g.: \aplio-modern-1\test\unit-tests\task-5-4\T-5.4.4\) then add the elements being tested to that scaffold instance, then take a snapshot of the resulting test and show it back to the ai testing agent, is the ai testing agent then able to read the snapshot text for errors and then to fix the errors?

10. Can you think of a good name for this new test system? Pretend that at some point it will be a commercial product. Give me 3 suggestions.

In the next carryover file: pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md write a spec to get this done. Delete any sections which are not relevant.


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

5. **Human Context Input**
   If provided, incorporate the following human-supplied context:
   ```
   <human_context>
   NEXT_STEPS: [Brief description of intended next steps]
   FOCUS_AREAS: [Specific areas requiring attention]
   CONCERNS: [Any issues or concerns to address]
   NOTES: [Additional context or instructions]
   </human_context>

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
`pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the pmc/system/plans/context-carries/context-carry-info-05-15-25-1253am.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

