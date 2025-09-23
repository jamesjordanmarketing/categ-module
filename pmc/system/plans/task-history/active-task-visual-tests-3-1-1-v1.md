# T-3.1.1 – Button Component Visual-Testing & LLM Vision Workflow (v1)

## Completed Phases (Historical Context)

### ✅ Phase 1 – Component Discovery & Classification (COMPLETED)
| Element ID | Description | Path |
|------------|-------------|------|
| T-3.1.1:ELE-1 | Button React **Client** component (interactive) | `/aplio-modern-1/components/design-system/atoms/Button/index.tsx` |
| T-3.1.1:ELE-2 | Full TypeScript type definitions | `/aplio-modern-1/components/design-system/atoms/Button/Button.types.ts` |
| T-3.1.1:ELE-3 | Design-system export integration | `/aplio-modern-1/components/design-system/index.ts` |

*Scaffolds Generated*
- `/aplio-modern-1/test/scaffolds/T-3.1.1/` – Enhanced HTML scaffolds for component, types, and export validation.

*Key Outcomes*
- All three elements discovered, classified, and logged.
- Import validation succeeded with zero TypeScript errors.
- Discovery log saved at `/pmc/system/plans/task-approach/current-test-discovery.md`.

---

### ✅ Phase 2 – Unit & Integration Testing (COMPLETED)
| Area | Result |
|------|--------|
| Jest Unit Tests | **100 % pass / coverage** – tests located at `/aplio-modern-1/test/unit-tests/task-3-1/T-3.1.1/` |
| Type Safety | No TS errors; discriminated unions verified |
| DSAP Logic | Padding / border-radius token checks pass via unit assertions |
| Client Directive | `'use client'` confirmed in component, absent in types |
| Accessibility | ARIA & keyboard tests pass |

*Important Artefacts*
- Unit-test results HTML: `/aplio-modern-1/test/coverage/T-3.1.1/index.html` (generated during run).
- Validation Script: `/pmc/core/active-task-unit-tests-2-enhanced.md` (now archived).

*Conclusion*: **Phase 2 locked** – component declared production-ready pending visual validation.

---

## Phase 3 – Visual Testing (TO EXECUTE)
Authoritative spec: this document + Playwright script template.

### 3.1 Prerequisites
1. Local dev server running (`npm run dev`) – scaffold page at `http://localhost:3000/test-t311-button`.
2. Ensure Playwright is installed (`npx playwright install`).
3. Directories exist:
   - Screenshots → `/aplio-modern-1/test/screenshots/T-3.1.1/`
   - Vision results → `/aplio-modern-1/test/vision-results/T-3.1.1/`

### 3.2 Screenshot Capture
Execute `playwright test` against `test/visual/t311-button.spec.ts` (create if absent). The spec must:
- Navigate to `/test-t311-button`.
- Iterate over all elements with `data-testid` starting `btn-` plus `dsap-button`.
- Capture full-page PNG per element and name `btn-{variant}-{size}.png` or `dsap-button.png`.
- Save into screenshots directory above.

Success Criteria: **16 PNGs** (15 variant/size + 1 DSAP target) present.

### 3.3 Screenshot Validation
Automated check script `scripts/validate-screenshots.js` should assert file count matches expectation before invoking Vision phase.

---

## Phase 4 – LLM Vision Analysis (TO EXECUTE)
Run the custom CLI described in `/pmc/core/active-task-visual-tests-1.md` against the newly generated screenshots.

Output each analysis as markdown in `/aplio-modern-1/test/vision-results/T-3.1.1/` using the naming convention `btn-{variant}-{size}.md`.

Aggregate summary file → `t311-vision-summary.md`.

Success Criteria:
- Vision report exists for every screenshot.
- Summary file includes DSAP compliance section with PASS indicators.

---

## Phase 5 – Reporting & Sign-off (TO EXECUTE)
1. Append visual-testing outcomes to `/pmc/core/active-task.md` under Phase 3 section.
2. Commit artefacts (screenshots + reports) to repo.
3. Deliver concise completion notice in chat including:
   - Screenshot count
   - Vision PASS/FAIL tally
   - Link paths to artefacts

---

## Essential Paths Recap
- Scaffold page: `/aplio-modern-1/app/test-t311-button/page.tsx`
- Playwright spec template: `/aplio-modern-1/test/visual/t311-button.spec.ts`
- Screenshot output dir: `/aplio-modern-1/test/screenshots/T-3.1.1/`
- Vision output dir: `/aplio-modern-1/test/vision-results/T-3.1.1/`
- Vision spec & CLI: `/pmc/core/active-task-visual-tests-1.md`

---

### Reminder to Testing Agent
Follow this document **and** the CLI spec verbatim. No deviation or improvisation beyond bug-fixes necessary to satisfy success criteria.

*End of File*
