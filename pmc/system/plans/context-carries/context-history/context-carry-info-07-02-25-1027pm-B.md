# Development Context & Operational Priorities – Conductor Prompt
**Date:** 2025-07-02 22:27 PST  
**Project:** Aplio Design System Modernization – Visual Testing Phase  
**Context Version:** 3.0.0-B

---

## Conductor Overview  
This carry-over document is **not** a step-by-step implementation guide.  
Instead, it **directs** the next Testing Agent (you) to the authoritative specification that must be executed **verbatim**.

| Key Spec | Path |
|---|---|
| Visual-Testing & LLM Vision Procedure – *Version 1* | `pmc/core/active-task-visual-tests-3-1-1-v3.md` |

Your primary responsibility is to open that spec, follow its scripted workflow, and report results.

---

## Current Focus (High-Level)
T-3.1.1 **Button Component – Visual Validation**  
*Goal:* Capture pixel-perfect screenshots for all Button variants via Playwright and run the LLM Vision analysis described in the spec above.

*Context You Inherit:*
1. **Scaffold Page Ready** – `/aplio-modern-1/app/test-t311-button/page.tsx` renders all 15 variant/size combinations.  
2. **Client-Side Fix Applied** – `'use client'` directive added; page loads without server errors.  
3. **No Existing Visual Artefacts** – Screenshot & vision directories are empty.

---

## Guidance to the Testing Agent
1. **Read the Spec** (link above) – Do *not* improvise; the spec contains the approved commands, expected artefact locations, and success criteria.  
2. **Execute the Workflow End-to-End** – From Playwright screenshot capture to LLM Vision markdown report generation.  
3. **Validate & Summarise** – Ensure all artefacts exist in their target directories and produce an aggregate summary.

> 🟢 *Complete the tasks exactly as written in the spec, then return here with a concise completion report.*

---

## Essential Paths
• `/aplio-modern-1/app/test-t311-button/page.tsx` – Visual scaffold  
• `/pmc/core/active-task-visual-tests-3-1-1-v3.md` – **AUTHORITATIVE SPEC**  
• `/aplio-modern-1/test/screenshots/T-3.1.1/` – Destination for screenshots  
• `/aplio-modern-1/test/vision-results/T-3.1.1/` – Destination for LLM Vision reports

---

## Success Definition (for Agent)
• All screenshots are generated and saved to the screenshots directory.  
• A markdown vision report exists for **each** screenshot, plus a summary file.  
• No test failures in Playwright run.  
• A short delivery report is logged back to the conductor (this document's thread) confirming completion.

---

## Reference Context
The underlying Button component has already passed unit, type-safety, and structural validation with 100 % compliance. This phase strictly addresses **visual fidelity** and **DSAP compliance**.

---

*End of Conductor Prompt*
