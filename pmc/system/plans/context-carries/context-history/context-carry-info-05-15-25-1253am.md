# Development Context & Operational Priorities
**Date:** 2025-05-15 00:53 PST
**Project:** Aplio Design System Modernization (aplio-mod-1) & Project Memory Core (PMC)
**Context Version:** 3.0.0

## Introduction

This context document addresses two integrated projects that operate in tandem:

1. **Aplio Design System Modernization (aplio-mod-1)**: A comprehensive modernization project converting the legacy Aplio Design System to leverage Next.js 14's App Router architecture and TypeScript. The project focuses on the Home-4 template implementation while preserving visual fidelity and enhancing developer experience.

2. **Project Memory Core (PMC)**: A structured task management and context retention system that manages the development of the Aplio project. PMC provides methodical task tracking, context preservation, and implementation guidance through its command-line interface and document-based workflow.

These projects are deliberately interconnected - PMC requires a real-world development project to refine its capabilities, while Aplio benefits from PMC's structured approach to development. Depending on current priorities, work may focus on either advancing the Aplio Design System implementation or enhancing the PMC tooling itself.

## Current Focus

### Active Development Focus

Ok we have implemented a new Test system.  In order to understand the new system you MUST read these specifications carefully & twice: 

pmc\context-ai\chat-contexts-log\pmct\testing-system-setup-spec-v3.md
pmc\context-ai\chat-contexts-log\pmct\testing-system-operations-tutorial-v3.md
pmc\context-ai\chat-contexts-log\pmct\testing-system-implementation-summary.md

I will need you to understand not just the specs & instructions but you must also understand the ACTUAL reality of whether these things can happen as instructed. To do that you will have to become intimately knowledgeable about ALL the code in the testing application:
aplio-modern-1\test (and all it's subfolders especially aplio-modern-1\test\utils where most of the code actually lives)
PLUS you will need to have intimate knowledge of exactly what testing tools have been installed in aplio-modern-1\node_modules

You MUST put ALL the answers to these questions here: pmc\context-ai\chat-contexts-log\pmct\testing-system-faqs-v2.md

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

10. What if the component being tested does not have a "logged in" view? For example, this current product is a design system and front end template. There are no data interfaces with it as it stands. Is it still required for a testing agent to create mock data?

11. One of the goals of our testing system is that we will remove as much cognitive load on the testing agent as possible. This means that in the suggested prompt:

   1. Understand the component requirements and implementation
   2. Generate realistic test data using the data factory (import from '../utils/data-factory')
   3. Create test scaffolds using scaffoldGenerator.createStaticScaffold()
   4. Implement unit/component tests following Jest + Testing Library patterns
   5. Use MSW to mock API responses where needed
   6. Register tests with serverManager.registerTest()
   7. Run tests and fix any failures
   8. Provide the test server URL for human validation
   9. Respond to feedback from the human validator

We would want as much of the steps in this prompt as possible to be done mechanically by s javascript script. To reply to this question do three things:
1. Name the testing system steps, partial steps, and actions that can be done mechanically by a script
2. Name the testing system steps, partial steps, and actions that MUST be done by a thinking agent.
3. Adapt this example test plan to our new testing system: pmc\core\active-task-unit-tests.md
put the adapted version here:
pmc\core\active-task-unit-tests-2.2.4-v2.md

12. Can you think of a good name for this new test system? Pretend that at some point it will be a commercial product. Give me 3 suggestions.

As stated previously: You MUST put ALL the answers to these questions here: pmc\context-ai\chat-contexts-log\pmct\testing-system-faqs-v2.md

Do not deviate from this focus without explicit instruction.



All other information in this document is reference material only.

## Project Reference Guide
REFERENCE MATERIALS
Everything below this line is supporting information only. Do NOT select the current task focus from this section.

### Aplio Design System Modernization Project

#### Project Overview
This project aims to transform the existing JavaScript-based Aplio theme into a modern TypeScript-powered Next.js 14 platform. The project specifically focuses on migrating the Home 4 template (https://js-aplio-6.vercel.app/home-4) as the flagship demonstration while preserving Aplio's premium design aesthetics from the existing design system in `/aplio-legacy/`.

#### Key Documents
1. Project Overview: `pmc/product/00-aplio-mod-1-seed-narrative.md`

#### Project Objectives

##### Primary Goals
1. Migrate Home 4 template to Next.js 14 App Router architecture
2. Preserve exact design elements from `/aplio-legacy/`
3. Implement TypeScript with full type safety
4. Maintain premium design quality and animations

##### Technical Requirements
1. Next.js 14 App Router implementation
2. Complete TypeScript migration
3. Modern component architecture
4. Performance optimization

##### Design Requirements
1. Exact preservation of design elements from `/aplio-legacy/`
2. Maintenance of animation quality
3. Responsive behavior preservation
4. Professional template implementation

### Project Memory Core (PMC) System

#### Core Functionality
Everything in this section is supporting information only. Do NOT select the current task focus from this section.
PMC is a structured modern software development task management and context retention system built around the the main active task file as its central operational component. PMC is product agnostic. In this instance we are using it to code the Aplio Design System Modernization (aplio-mod-1) system described above. The system provides:

1. **Context Locality**: Instructions and context are kept directly alongside their relevant tasks
2. **Structured Checkpoints**: Regular token-based checks prevent context drift
3. **Directive Approach**: Clear commands and instructions with explicit timing requirements
4. **Task-Centric Documentation**: Single source of truth for task implementation

#### Commands

The driver for most PMC commands are in:
`pmc/bin/aplio-agent-cli.js`

The code for most PMC commands are contained within:
- The original context manager script: `pmc/system/management/context-manager.js`
- The next context manager script: `pmc/system/management/context-manager-v2.js` (created when the original got too large)

Here are some important PMC commands:

##### Start Task
```bash
node pmc/bin/aplio-agent-cli.js start-task "T-EXAMPLE.1.1"
```

##### Add Structured Task Approaches
```bash
node pmc/bin/aplio-agent-cli.js task-approach
```

##### Update Element Status
```bash
node pmc/bin/aplio-agent-cli.js update-element-status "T-EXAMPLE.1.2:ELE-1" "Complete"
```

##### Task Completion
```bash
node pmc/bin/aplio-agent-cli.js complete-task "T-EXAMPLE.1.3"
```

##### Context Carryover for New Chat Windows
```bash
node system/management/carryover-command.js
```

#### Project Structure
```
aplio-legacy/ (legacy system)
aplio-modern-1/ (new system)
pmc/ (PMC system)
├── bin/
├── core/
├── system/
│   ├── management/
│   └── templates/
└── product/
```

### Additional Resources

#### Key URLs

#### Important Directories