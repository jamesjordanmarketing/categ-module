=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md

First, read the entire file to understand its current structure and content.

Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
   - Be explicit about the task
   - Include full paths where applicable

You are not going to execute the below. Your task is to update: pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md with the details of what I am requesting below:

We have just finished creating the functional requirements here:
pmc\product\03-bmo-functional-requirements.md
and the UI requirements here:
pmc\product\04-bmo-ui-FRs-built.md  (Very large file. 2008 lines)

And we have decided to execute a UI-first project task list that will prioritize creating working prototypes and scaffolds of each component, engine, or functionality as we build it. This is so we always know we are on track toward an application that is human usable with a good UX.  As a result the task list must prioritize visual components, user interactions, and an enhanced progressive functioning application for each step we execute the task build..

We had already created the "non UI" task list here: pmc\product\06b-bmo-tasks-built.md which was derived entirely from the functional requirements document. That was created by pmc\product\_prompt_engineering\06a-product-task-elements-breakdown-prompt-v5.7.md.

Now we need the next agent help us decide on the best way to develop a prompt or prompt that will create the full UI first task list with integrated functioning back end tasks and mockup data.

Options I see:
Option 1. We create a new prompt derived from pmc\product\_prompt_engineering\06a-product-task-elements-breakdown-prompt-v5.7.md. This new version of the prompt takes as input:
pmc\product\03-bmo-functional-requirements.md
and
pmc\product\04-bmo-ui-FRs-built.md
And builds a task list that:
a. Prioritizes visual components, user interactions, and an enhanced progressive functioning application for each step we execute the task build.
b. Includes back end tasks that are integrated with the front end tasks.
c. Includes mockup data for each task.

Option 2. We update pmc\product\_prompt_engineering\06a-product-task-elements-breakdown-prompt-v5.7.md to take as input:
pmc\product\03-bmo-functional-requirements.md
and
pmc\product\04-bmo-ui-FRs-built.md
AND 
pmc\product\06b-bmo-tasks-built.md
And builds a task list that:
a. Prioritizes visual components, user interactions, and an enhanced progressive functioning application for each step we execute the task build.
b. Includes back end tasks that are integrated with the front end tasks.
c. Includes mockup data for each task.
d. Includes a task list that is prioritized by the order we need to execute the tasks.
e. Includes a task list that is broken down into smaller tasks that we can execute.

You are not going to execute this analsyis here.  Your job is simply to update carryover file: pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md with a detailed specification of what needs to be done to make the best decisions ultimately create the new prompt. 

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
`pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the pmc/system/plans/context-carries/context-carry-info-08-05-25-714pm.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

