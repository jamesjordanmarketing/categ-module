=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md

First, read the entire file to understand its current structure and content.

Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
You are not going to create a javscript program with this prompt. Your task is to update: pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md with the details of what I am requesting below:

Your job is two write a detailed specification for this new script. You will put the detailed specification in: pmc\context-ai\chat-contexts-log\pmct\08-correct-full-pathing.md

I need you to specific a script that goes in pmc\product\_tools\08-migrate-full-paths-v1.js

The purpose of this script is to update all necessary full paths in VS Code/Cursor project to a new full pathing when we create a new branch of our app.  So far we have these:

We need the script to:

1. At the top have a very uncluttered place where we can have the "from" paths and "to" path 
There will be 3 possible "from" paths. The script does not need all three...but it should look for all three if they are there.

The "to" path must be only one

The point of the script is to replace the full pathing that exists up to the top level directory of the paths the correct path when we move folders. So for example:
This current project is in.
C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-26-a1-c\

but we copied it from another directory and we now have files that have the wrong paths.
So 
for example:
C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-26-a1-c\pmc\core\active-task-unit-tests.md

has this path in it:
C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-23-roo\pmc\core\active-task.md

In this instance the script we are specificying would replace
1. The From Path: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-23-roo\
with
2. The To Path: C:\Users\james\Master\BrightHub\Build\APSD-runs\aplio-26-a1-c\

wherever it is found within ALL the files that I have listed below:

Other requirements:
1. There must be a dedicated and easy to read block that contains ALL of the files (relative file path) that must have their file paths checked and updated if appropriate. If a file path is added or subtracted from this block of paths, the script will scan/replace if is added, if subtracted, not crash and not search it)
2. The spec will NOT write the spec to update paths that are only RELATIVE paths.
3. There will be an update report that goes in: pmc\system\management\commits\08-updated-file-paths.md. It must be erased each time the script is run. Then it must:
a. List all the files that were updated in one section.
b. In another section of pmc\system\management\commits\08-updated-file-paths.md list any files that are NOT found in the actual project but ARE on the "file list" in the program. The program will NOT stop if it encounters a missing file. It will just record it to  and move on.

Here is the current list of all the files that must be checked and updated:


pmc\product\06-aplio-mod-1-tasks.md
pmc\product\07b-task-aplio-mod-1-testing-built.md
pmc\product\06b-aplio-mod-1-tasks-built.md

pmc\core\active-task.md
pmc\core\active-task-unit-tests.md


pmc\system\templates\active-task-template-2.md
pmc\system\templates\active-task-test-template.md

pmc\system\coding-prompts\03-conductor-test-prompt.md
pmc\product\_prompt_engineering\06a-product-task-elements-breakdown-prompt-v5.4.md
pmc\product\_prompt_engineering\06b-task-test-mapping-creation-prompt-v3.md


pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E01.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E02.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E03.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E04.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E05.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E06.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E07.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E08.md
pmc\product\_mapping\task-file-maps\6-aplio-mod-1-tasks-E09.md


pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E01.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E02.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E03.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E04.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E05.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E06.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E07.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E08.md
pmc\product\_mapping\task-file-maps\prompts\06a-product-task-elements-breakdown-prompt-v5.4-E09.md


pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E01.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E02.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E03.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E04.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E05.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E06.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E07.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E08.md
pmc\product\_mapping\test-maps\prompts\06b-task-test-mapping-creation-prompt-v3-E09.md


pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E01.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E02.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E03.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E04.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E05.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E06.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E07.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E08.md
pmc\product\_mapping\test-maps\06-aplio-mod-1-task-test-mapping-E09.md


pmc\product\_prompt_engineering\output-prompts\3a-preprocess-functional-requirements-prompt_v1-output.md
pmc\product\_prompt_engineering\output-prompts\3b-#1-functional-requirements-prompt_v1-output.md
pmc\product\_prompt_engineering\output-prompts\3b-#2-functional-requirements-prompt_v1-output.md
pmc\product\_prompt_engineering\output-prompts\04-product-structure-prompt_v1-output.md
pmc\product\_prompt_engineering\output-prompts\05-product-implementation-patterns-prompt_v1-output.md




In the next carryover file: pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md write a spec to get this done. Delete any sections which are not relevant.


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
`pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the pmc/system/plans/context-carries/context-carry-info-05-16-25-858pm.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

