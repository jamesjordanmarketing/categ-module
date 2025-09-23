# How to Run 25 Wireframe Prompts Efficiently - Simple Guide

**Date:** 2025-01-09  
**Goal:** Run 25 AI prompts that create wireframes, but do it smart and fast  
**Problem:** Each prompt is HUGE (like 20,000+ words) and would break a single AI chat

## 🤔 THE PROBLEM EXPLAINED

Imagine you have 25 really long homework assignments that you need to give to an AI tutor. Each assignment is so long that if you tried to give them all to one tutor, they'd get overwhelmed and forget the earlier ones.

**What we have:**
- 25 wireframe prompts (think of them as detailed instructions)
- Each prompt is super long (15,000-25,000 words)
- They're organized into 10 folders (E01, E02, E03... E10)
- Some folders have more prompts than others

**The challenge:**
- If we run them one by one = Takes 10+ hours
- If we try to run them all in one chat = AI gets confused and crashes
- We need a smart way to run many at the same time

## 🚀 THE SOLUTION: Multiple Browser Tabs (Like Having Multiple Tutors)

Think of it like this: Instead of one overworked tutor, you get 4-10 different tutors, each handling different assignments at the same time.

### STRATEGY 1: The "Multiple Tabs" Method ⭐ RECOMMENDED

**What you're doing:** Opening multiple Cursor windows (like having multiple browser tabs open), each one working on different prompts simultaneously.

**Why this works:**
- Each tab = separate AI brain with fresh memory
- 4 tabs running = 4 times faster than 1 tab
- No confusion between different prompts
- You can watch progress in real-time

## 📋 STEP-BY-STEP INSTRUCTIONS (Strategy 1)

### PREPARATION (5 minutes)
1. **Make sure you have these files ready:**
   - All your E01-E10 prompt files are in: `pmc/product/_mapping/fr-maps/prompts/`
   - Your output folders exist to save results

2. **Get organized:**
   - Close other programs to free up computer memory
   - Have a notepad ready to track which tab is doing what

### PHASE 1: Start with 4 Tabs (High Priority)

#### Step 1: Open Your First 4 Cursor Windows
```
Tab 1: Will handle E01 folder (has 4 prompts inside)
Tab 2: Will handle E02 folder (has 3 prompts inside)  
Tab 3: Will handle E03 folder (has 3 prompts inside)
Tab 4: Will handle E04 folder (has 3 prompts inside)
```

**How to do this:**
1. Open Cursor normally (this is Tab 1)
2. Press `Ctrl+Shift+N` to open new Cursor window (Tab 2)
3. Press `Ctrl+Shift+N` again (Tab 3)
4. Press `Ctrl+Shift+N` again (Tab 4)

Now you have 4 separate Cursor windows open!

#### Step 2: Set Up Each Tab
**In Tab 1 (E01 folder):**
1. Open file: `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E01.md`
2. Scroll down and find the first prompt that starts with: `# FR1.1.1 — Wireframe Generator Prompt`
3. Select and copy EVERYTHING from that heading down to the `---` separator line

**In Tab 2 (E02 folder):**
1. Open file: `pmc/product/_mapping/fr-maps/prompts/04-FR-wireframes-prompt-E02.md`
2. Find the first prompt: `# FR2.1.1 — Wireframe Generator Prompt`
3. Copy everything from that heading to the `---` line

**In Tab 3 and Tab 4:** Do the same thing with E03 and E04 files

#### Step 3: Start All 4 Tabs Running
**In each tab, one by one:**
1. Click in the chat area where you talk to Claude
2. Paste the prompt you copied
3. Press Enter to start the AI working
4. **DON'T WAIT** - immediately go to the next tab and start it too

**Result:** Now you have 4 AIs working simultaneously on different prompts!

#### Step 4: Monitor Progress (like a teacher watching 4 students work)
- **Check Tab 1:** Is it done with FR1.1.1? If yes, copy the result and save it
- **Check Tab 2:** Is it done with FR2.1.1? If yes, copy the result and save it  
- **Keep rotating** between tabs every 5-10 minutes

#### Step 5: When a Tab Finishes, Give It the Next Prompt
**When Tab 1 finishes FR1.1.1:**
1. Copy the AI's response
2. Save it to: `pmc/product/_mapping/fr-maps/04-bmo-FR-wireframes-output-E01.md`
3. Go back to the E01 file and copy the NEXT prompt (FR1.1.2)
4. Paste it into Tab 1 and start it running again

**Keep doing this until all prompts in E01, E02, E03, E04 are done**

### PHASE 2: Add More Tabs for Remaining Work

Once you're comfortable with 4 tabs, you can add more:

#### Step 6: Open 6 More Tabs for E05-E10
- Tab 5: E05 folder (2 prompts)
- Tab 6: E06 folder (3 prompts)
- Tab 7: E07 folder (2 prompts)
- Tab 8: E08 folder (1 prompt)
- Tab 9: E09 folder (3 prompts)
- Tab 10: E10 folder (1 prompt)

#### Step 7: Run the Same Process
Same idea as before - copy prompts, paste in tabs, monitor progress, save results, move to next prompt.

## ⏰ TIMELINE EXPECTATIONS

**With 4 tabs running:**
- Each prompt takes 15-30 minutes
- 4 prompts at once = finish 4 every 30 minutes
- Total time: 3-4 hours for all 25 prompts

**With 10 tabs running:**
- Same speed per prompt, but more running at once
- Total time: 2-3 hours for all 25 prompts

## 🎯 SIMPLE TRACKING SYSTEM

Create a simple checklist on paper or notepad:

```
✅ = Done    🔄 = In Progress    ⏳ = Waiting

E01: FR1.1.1 ✅  FR1.1.2 🔄  FR1.1.3 ⏳  FR1.1.4 ⏳
E02: FR2.1.1 ✅  FR2.2.1 🔄  FR2.3.1 ⏳
E03: FR3.1.1 🔄  FR3.2.1 ⏳  FR3.3.1 ⏳
E04: FR4.1.1 🔄  FR4.2.1 ⏳  FR4.3.1 ⏳
... continue for E05-E10
```

## 🚨 WHAT CAN GO WRONG & HOW TO FIX IT

### Problem 1: "AI says it can't find the file"
**Fix:** The AI can't actually open files. You need to copy the content from the file and paste it into the chat.

### Problem 2: "AI response is incomplete"
**Fix:** Ask the AI to continue: "Please continue from where you left off"

### Problem 3: "I'm getting confused which tab is doing what"
**Fix:** 
- Rename your Cursor windows (if possible) 
- Or write tab numbers on sticky notes
- Or keep that checklist updated

### Problem 4: "One tab seems stuck"
**Fix:** 
- Wait 5 more minutes
- If still stuck, restart that specific tab
- Copy the prompt again and re-run

### Problem 5: "My computer is getting slow"
**Fix:** 
- Start with fewer tabs (maybe just 2-3)
- Close other programs
- Make sure you have enough RAM

## 📁 WHERE TO SAVE RESULTS

**Each stage has its own output file:**
- E01 results go in: `pmc/product/_mapping/fr-maps/04-bmo-FR-wireframes-output-E01.md`
- E02 results go in: `pmc/product/_mapping/fr-maps/04-bmo-FR-wireframes-output-E02.md`
- ... and so on for E03-E10

**Format for saving each result:**
```
=== BEGIN PROMPT FR: FR1.1.1 ===
[Paste the AI's full response here]
=== END PROMPT FR: FR1.1.1 ===

```

## 🏆 SUCCESS CHECKLIST

You're done when you have:
- [ ] 25 AI-generated wireframe prompts completed
- [ ] All results saved in the correct E01-E10 output files
- [ ] Each result is between the correct BEGIN/END markers
- [ ] All prompts are ready to copy-paste into Figma for actual wireframe creation

## 🤓 WHY THIS METHOD IS SMART

**Traditional way (one at a time):**
- Prompt 1 (30 min) → Prompt 2 (30 min) → Prompt 3 (30 min)...
- Total: 25 × 30 minutes = 12.5 hours

**Our way (4 at once):**
- 4 prompts simultaneously (30 min) → Next 4 (30 min) → Next 4 (30 min)...
- Total: 25 ÷ 4 = 6.25 groups × 30 minutes = 3.1 hours

**You save 9+ hours of time!** 🎉

## 🔄 ALTERNATIVE: Start Small and Learn

**If this feels overwhelming, start simple:**

1. **Try with just 2 tabs first**
   - Tab 1: E01 folder
   - Tab 2: E02 folder
   - Get comfortable with the process

2. **Once you're confident, add more tabs**
   - Add Tab 3: E03 folder
   - Add Tab 4: E04 folder

3. **Scale up when ready**
   - Eventually work up to 6-10 tabs

**Remember:** It's better to do 2 tabs successfully than to try 10 tabs and get confused!

---

**Bottom Line:** You're basically becoming a manager of multiple AI workers, giving each one different tasks and collecting their results. It's like running a small team instead of doing everything yourself!

**Ready to start?** Open your first 2-4 Cursor tabs and begin with the highest priority folders (E01-E04)!
