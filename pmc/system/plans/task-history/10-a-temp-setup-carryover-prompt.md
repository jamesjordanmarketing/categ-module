This is equal to Step 2 (aka step 1 in the master prompt)
pmc\system\templates\new-test-carry-prompt-template.md
it populates:
pmc\system\templates\new-test-carry-context-template.md

ok now we are going to create carry over file to prepare the next agent to test. 

This carryover is going to be focused ONLY on the work you did by executing the Task {{CURRENT_TASK_ID}} in pmc\core\active-task.md

We need to update the carryover file to prepare the next agent to execute the tests for this task as documented in pmc\core\active-task-unit-tests-2.md  

You will add all of the appropriate information to the carry over file:
{{NEW_TEST_CARRY_CONTEXT_PATH}}

Read the testing carryover template here: pmc\system\templates\new-test-carry-context-template.md to understand how to use it correctly.

Then read:
- `pmc/core/active-task.md` (this is the task we are currently preparing a test plan for which will be executed by the next ai testing agent)

- `pmc/core/active-task-unit-tests-2.md` (this is the first draft of the test plan for the task we just finished implementing)

- Next you must also read the task implementation details in this chat panel. You have been the primary implementer of the current task. Apply your knowledge of any changes, new acceptance criteria, task implementation, new tests requirements or removed test requirements that will affect the specifications for the testing of this task.


The Active Development Focus for the next agent is we are going to start the testing for Task ID T-2.2.5 task we just completed here in this chat.

   - Include any critical context from the current session Task ID T-2.2.5
   - Reference relevant documentation and specifications from the current session Task ID T-2.2.5
   - Uncover any testing needs not documented in pmc\core\active-task-unit-tests-2.md but now required because of the way you implemented Task T-2.2.5 in pmc\core\active-task.md
   - Document and instruct the testing agent on any testing steps no longer needed because you have done them here or eliminated the requirement.
   - provide any more important context not documented in pmc\core\active-task-unit-tests-2.md
   - do all of this in a succinct way so that only the required information and instructions are included. Do this in a directive way such that the next ai testing agent is given explicit instructions of needs not already in pmc\core\active-task-unit-tests-2.md
   - summarize any important points required for the testing agent to execute a complete test for Task ID T-2.2.5
   - Update the appropriate sections in pmc\system\plans\context-carries\context-carry-info-06-22-25-1150am.md

Do NOT attempt to fix or add any more code, tests or content to this task. We will hand it over to the ai unit test engineer agent.  

One more reminder. Your job is ONLY to update pmc\system\plans\context-carries\context-carry-info-06-22-25-1150am.md with an in depth context build of all of the information it will need to fully analyze the prompts document. Remove any sections not used.