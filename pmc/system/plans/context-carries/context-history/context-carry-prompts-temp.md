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
