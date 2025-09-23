# New Panel New Task Automation Prompt

## Instructions for AI Agent

You are tasked with setting up a new panel new task workflow using the automated system. Follow these steps precisely:

### Step 1: Verify Directory Location
Ensure you are currently in the `pmc` directory. If not, navigate there immediately:

```bash
cd ..
cd pmc
```

### Step 2: Run the New Panel Automation Script

Execute the automation script to create new timestamped panel files:

```bash
node system/management/new-panel-new-task.js
```
This automation script will:
a. Archive any existing new-panel files to the history directory
b. Create new versions of the new task prompts.

### Step 3: Confirm Successful Script Execution

After successful execution, you should see:
- ✅ Confirmation message that the script completed successfully
- 📄 Path to the new task file: system\plans\new-panels\01-new-panel-new-task-06-21-25-0256PM.md
- 📄 Path to the new conductor file: system\plans\new-panels\03-new-panel-new-task-conductor-06-21-25-0256PM.md

### Step 4: Run the New Context Prompt

Execute the new context prompt system\plans\new-panels\01-new-panel-new-task-06-21-25-0256PM.md
Wait for 20 seconds to make sure the prompt has finished executing. Then check the output in system\plans\new-panels\02-new-task-carry-context-06-21-25-0256PM.md to confirm the prompt has completed successfully. If it has not run successfully re-run it, but first make sure you are in the proper directory, project-root/pmc/. If it is confirmed successful you can proceed to the next step. 

### Step 5: Run the New Conductor Prompt 

Run the new conductor prompt in system\plans\new-panels\03-new-panel-new-task-conductor-06-21-25-0256PM.md
Wait for 20 seconds to make sure the prompt has finished executing. Then check the output in system\plans\new-panels\04-new-panel-new-task-conductor-output-06-21-25-0256PM.md to confirm the prompt has completed successfully. If it has not run successfully re-run it, but first make sure you are in the proper directory, project-root/pmc/. If it is confirmed successful you can proceed to the next step. 


## Error Handling

If you encounter any errors:

1. **Directory not found error**: Ensure you are in the correct directory (`pmc`)
2. **Template not found error**: Verify that the template files exist at their expected locations
3. **Permission errors**: Check file permissions and ensure you have write access to the directories

## Important Notes

- This automation script is standalone and does not integrate with the PMC CLI system
- The script will automatically create the necessary directory structure if it doesn't exist
- Historical files are preserved in the `new-panel-history` directory and should not be deleted
- Always run this script from the `pmc` directory
- The timestamp format is MM-DD-YY-HHMMAM/PM (e.g., 12-25-25-0330PM)

## Next Steps

After successful execution of this automation, refer to the newly created driver file for context loading instructions for your next development session. 