Here is what I plan to tell the next implementation agent:

----
# AI Coding Conductor Prompt

Your primary mission is to orchestrate the coding process for the current active task defined within the Project Memory Core (PMC) system. All PMC commands are best run from the pmc directory using node bin\[command]. Follow these steps precisely **each time you are invoked with this prompt**:

1.  **Generate Task Approach:**
    *   Read the file `pmc\system\coding-prompts\02-task-approach-prompt.md`.
    *   Read the file {{NEW_PANEL_NEW_TASK_PATH}} for relevant context from the task test finished just before this one.
    *   Execute the instructions contained within `pmc\system\coding-prompts\02-task-approach-prompt.md` *immediately*. This will involve reading `pmc\core\active-task.md` and generating the implementation approach in `pmc\system\plans\task-approach\current-task-approach.md`.

2.  **Integrate Task Approach:**
    *  Once you have completed the instructions from the task approach prompt, then:
    1. Check if you are in the directory 'pmc'
    2. If you are then execute the command in step 4. directly below.
    3. If you are NOT in pmc navigate to that directory manually first (not as part of compound '&&' commands)
    4. execute the following terminal command **exactly**:
        ```bash
        node bin\aplio-agent-cli.js task-approach
        ```
    *   Await confirmation that the command has completed successfully before proceeding.
    *   Check the ** Task Approach section of pmc\core\active-task.md if it does NOT have a "Added:" notation. Then it did not run and you must stop and ask the human operator for assistance.

3.  **Execute Active Task:**
    *   Now, turn your full attention to the file `pmc\core\active-task.md`.
    *   This file contains the detailed instructions, elements, and procedures for the current coding task.
    *   Execute the task described in `pmc\core\active-task.md` diligently, following all specified commands, phase updates, and element status changes outlined within that document until you reach the task completion instructions within that file.

4.  **Unit Testing:**
    *   The `pmc\core\active-task-unit-tests-2.md` file itself contains the instructions for unit testing the task.
    *   Once you have completed all phases by completing the last VAL task and running the VAL update-phase-stage "complete" command, you MUST stop and await instructions from the human operator to begin unit testing.

# Unit Testing Overview
Unit testing for this task is managed in a separate file to reduce cognitive load and ensure comprehensive test implementation.

**IMPORTANT:** Do *not* deviate from the instructions provided in `pmc\core\active-task.md` once you begin step 3. Your role is to execute that specific task. This prompt serves as the standard initialization procedure for *every* active task presented by the PMC system.

---

Based on the current pmc\core\active-task.md file and the carry over context in {{NEW_PANEL_NEW_TASK_PATH}}
Is this enough? too much? please optimize it for the next ai implementation agent who must implement the next task




=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md

First, read the entire file to understand its current structure and content.

Next update system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md to prepare the next agent to start the next task.  

Read system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md first to understand how to update it correctly. Remove any sections not used.

Your main task is to recap everything we have accomplished and executed in this prompt. Including:
   - Include any critical context from the current session
   - Reference relevant documentation and specifications
   - Maintain links between related tasks and components
   - Document any decisions or changes that affect future work
   - mention any variations you made to the task testing which are important to know.
   - Update the appropriate sections in pmc\system\plans\context-carries\context-carry-info-06-19-25-1111pm.md 

The Active Development Focus for the next agent is we are going to start executing the task in sequence after we just completed here in this chat. Review the entire steps and actions completed here and examine any possible gaps in what the task development requirements are. Review the next task here: pmc\core\active-task.md. I have updated it to Task T-2.2.4

Then examine what was completed in this task. Look for requirements gaps.

Do NOT attempt to fix or add any code or content to this task. We will hand it over to the unit testing engineer.  

Give a detailed and comprehensive documentation of what you have done in the test so far.

One more reminder. Your job is ONLY to update pmc\system\plans\context-carries\context-carry-info-06-19-25-1111pm.md  with an in depth context build of all of the information it will need to fully analyze the prompts document.


Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
   - Be explicit about the task
   - Include full paths where applicable

You are not going to execute the below. Your task is to update: system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md with the details of what I am requesting below:

CONTENT

In the next carryover file: system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md write a spec to get this done. Delete any sections which are not relevant.


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
`system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the system\plans\new-panels\new-panel-new-task-driver-06-21-25-1142AM.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

