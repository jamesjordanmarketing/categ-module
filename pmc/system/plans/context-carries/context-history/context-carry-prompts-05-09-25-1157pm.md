=========================Prompt=For=Building=Context=========================================
You are tasked with updating the context carryover file at:
pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md

First, read the entire file to understand its current structure and content.

Then, update the "Current Focus" section with the following requirements:

1. **Active Development Focus**
You are not going to execute the below. Your task is to update: pmc\system\plans\context-carries\context-carry-info-05-09-25-1157pm.mdd with the details of what I am requesting below:

In the next chat window we are going to work on a creating a specification for setting up a variety of testing tools. What I want:
1. I want the most common testing tools with the largest footprint (# of files, size on disk) to be preinstalled before we start unit testing, integration test, and QA testing. I also want to avoid testing bloat I don't want to build a test bed that is filled with confusing or opaque testing processes.

By preinstalled I mean:
a. The tool will be custom configured for the span of functionality needed by the PMC system.
This means that instead of having a "tools build" section at the start of every active unit test spec (pmc\core\active-task-unit-tests.md)
We are going to build a plan that will pre-install all of these environments and then test to make sure they are functiong. I would love it if we can build a standard PMC "package" that will be stored in one directory on our hard drive is then copied over to our project directory when we are ready to start testing.

The list of all testing tools that have been recommended for our project is here:
pmc\docs\specs\06-testing-tools.md
the main task file that describes the types of coding tasks we will be testing: pmc\product\06b-aplio-mod-1-tasks-built.md
The main testing file that contains the test descriptions for all of the task testing requirements and a list of the testing tools recommended on the metadata lines: **Testing Tools**:

Question #1
Is it possible to have a "testing build" that installs and pre-configures  everything in an install directory such as: pmc\testing-tools-install\ and then write a script that will automatically move everything needed and pre-configured from pmc\testing-tools-install\ into the correct place in our product build directory (aplio-modern-1)?

Question #2
Do all testing tools live in \node_modules\ in individual folders with node_modules as the root?)

Question #3
Can all tools live in one directory (i.e. aplio-modern-1\node_modules\testing-tools\)?

Question #4
The subtext of all 4 of these questions is are there links or relationship paths that these tools expect to have to the project directory that results in a default installation that is not amenable to a "one folder for testing tools" strategy?

I don't want us to build a customized testing configuration that will take a lot of maintenance or require a novel build of the tools.

5. List of Testing Tools for Testing package.
I am just guessing here but i am guessing that the tools we will want to have in our standard install package are:
Jest
Typescript
ts-jest
Framer Motion
dtslint
Next.js Testing Tools/Utilities
what else am I missing (read my intent for this iteration of testing below)

My main goal for testing is:
Fix syntax bugs
Fix structural code bugs
Fix component integrations
Automatic iteration of viewable working web interfaces via the ai chat panel with the ai testing agent
Human viewing and signoff of web interfaces

6. My main concerns
I am concerned about these:
### Storybook
### Playwright
### Cypress

Even though they are very robust I am wondering if they are required.  I see that they are used in only a very few tasks in pmc\product\07b-task-aplio-mod-1-testing-built.md
I am wondering what they have that is so important for testing.

What I do NOT want to be bogged down by in this iteration of testing
core vitals
vague "end to end" testing (what does this even mean?)
testing of user flows (we will do this with intent when we get to the component integration stage of the build
accessibility guidelines
automated 
web performance benchmarks

I believe that the first iteration of testing must focus on just getting code working to it's intended behavior.
I have found that installing "user flow" libraries results in an endless loop because we have not applied an actual intent to the testing iteration.  Just using it because a flow exists and therefore a user flow should be used to test does not apply any logic or rationality to WHAT we are testing.
In addition I have found that in 98% of human facing apps, testing a user flow by clicking through the expected behavior manually does not take that long. Implementing working code and component interfaces is what causes that success, not coding to a "flow"

If we use user flow testing then I want it to be, not in this iteration, and designed by a human for visible results (not autonomous technical "shoulds")

So next agent's job is to:
1. Answer all the questions in this prompt for this iteration of testing with these principles. 
2. Create a specification for this testing package. Put the spec here: pmc\docs\specs\06-task-generation-spec-v6.md (read it first ..then use it's format for the specification. Delete any content not relevant to this task).

What type of testing package do I want?
A. The ideal testing package for the iteration of testing I want to accomplish
B. The best way to build it in package format, so that it may be used in all types of projects that we manage with PMC

(p.s. Remember..you are are just standardizing this request and improving it for the next chat window. You are NOT answering these questions now)

In the next carryover file: pmc\system\plans\context-carries\context-carry-info-05-09-25-1157pm.md write a spec to get this done. Delete any sections which are not relevant.

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
`pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md`

You Must Focus on:
- The ## Active Development Focus section
- Current Implementation State
- Next Steps and Implementation Plan

## 2. Technical Specifications
Review any technical specifications referenced in the "### Important Files" and "### Important Scripts, Markdown Files, and Specifications" sections of:
`pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md`

Key areas to understand:
- File purposes and roles
- Current state and requirements
- Integration points
- Technical constraints

## 3. Core Implementation Files
Review the implementation files listed in the "### Important Files" section of:
`pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md`

For each file, focus on:
- File purpose and role
- Current state
- Integration requirements
- Implementation notes

## 4. Review Process
- Read each section of `pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md` carefully
- Cross-reference between context and implementation files
- Note any dependencies or integration requirements
- Identify potential implementation challenges

## 5. Development Continuity
Review the "### Recent Development Context" section of:
`pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md`

Focus on:
- Last completed milestone
- Key outcomes and learnings
- Technical context that carries forward
- Current development trajectory

## 5. Restate the Active Development Focus
Once you've completed this review process, please provide:
1. A summary of the active development context as you understand it from reading the: ## Active Development Focus section of the pmc/system/plans/context-carries/context-carry-info-05-09-25-1157pm.md
2. Key technical considerations identified
3. Any potential implementation challenges
4. Questions or clarifications needed before proceeding

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

