# T-3.1.1 – Button Component • Visual-Testing & LLM Vision Analysis

## Mission Statement
You shall execute a complete Phase 3, 4, & 5 testing cycle for the T-3.1.1 atomic Button component from utility validation through comprehensive testing reports to ensure all components (Button structure, Button types, Export structure) are properly implemented, DSAP compliant, and functionally integrated with the T-2.5.6 foundation system.

## Fix/Test/Analyze Cycle Pattern
For any failed validation step in ANY phase, you must:
1. **Log Issue**: Document failure details and error messages immediately
2. **Attempt Fix**: Apply automated correction following T-3.1.1 implementation patterns  
3. **Re-run Test**: Execute the failed step again with exact same parameters
4. **Evaluate Results**: Check if issue is resolved to DSAP compliance standards
5. **Update Artifacts**: Regenerate affected files (scaffolds, screenshots, reports)
6. **Repeat**: Continue until success or maximum 3 iterations reached

---

## ✅ Completed Phases (Historical Context)

### Phase 1 – Component Discovery & Classification
| Element ID | Description | Path |
|------------|-------------|------|
| T-3.1.1:ELE-1 | Button React **Client** component (interactive) | `/aplio-modern-1/components/design-system/atoms/Button/index.tsx` |
| T-3.1.1:ELE-2 | Full TypeScript type definitions | `/aplio-modern-1/components/design-system/atoms/Button/Button.types.ts` |
| T-3.1.1:ELE-3 | Design-system export integration | `/aplio-modern-1/components/design-system/index.ts` |

*Artefacts*
- Discovery log → `/pmc/system/plans/task-approach/current-test-discovery.md`
- Enhanced scaffolds → `/aplio-modern-1/test/scaffolds/T-3.1.1/`

### Phase 2 – Unit & Integration Testing
| Area | Result |
|------|--------|
| Jest Unit Tests | **100 % pass / coverage** (`/aplio-modern-1/test/unit-tests/task-3-1/T-3.1.1/`) |
| Type Safety | Discriminated unions verified – no TS errors |
| DSAP Logic | Padding / border-radius assertions pass |
| Client Directive | `'use client'` present in component, absent in types |
| Accessibility | ARIA & keyboard tests pass |

*Artefacts*
- Coverage report → `/aplio-modern-1/test/coverage/T-3.1.1/index.html`
- Unit-test protocol → `/pmc/core/active-task-unit-tests-2-enhanced.md`

> **Status:** Phases 1-2 are locked and require no further action. Proceed to Phase 3.

---

## Phase 3 – Visual Testing (TO EXECUTE)

### 3.1 Prerequisites
1. Dev server running via `npm run dev`.
2. Scaffold page available at `http://localhost:3000/test-t311-button` (renders 15 variant/size buttons + DSAP target).
3. Playwright installed (`npx playwright install`).
4. Output directories exist (create if absent):
   - Screenshots → `/aplio-modern-1/test/screenshots/T-3.1.1/`
   - Vision results → `/aplio-modern-1/test/vision-results/T-3.1.1/`

### 3.2 Screenshot Capture (Playwright)
File: `/aplio-modern-1/test/visual/t311-button.spec.ts`

```ts
import { test, expect } from '@playwright/test';

test('T-3.1.1 Button – screenshot all variants', async ({ page }) => {
  await page.goto('http://localhost:3000/test-t311-button');

  // Wait for buttons to render
  await page.waitForSelector('[data-testid^="btn-"]');

  const elements = await page.$$('[data-testid^="btn-"]');
  for (const el of elements) {
    const id = await el.getAttribute('data-testid'); // e.g. btn-primary-medium
    await el.screenshot({ path: `test/screenshots/T-3.1.1/${id}.png` });
  }

  // DSAP measurement button
  const dsap = await page.$('#dsap-measurement-button');
  if (dsap) {
    await dsap.screenshot({ path: 'test/screenshots/T-3.1.1/dsap-button.png' });
  }
});
```

Run via:
```bash
npx playwright test test/visual/t311-button.spec.ts | cat
```

### 3.3 Screenshot Validation
`/aplio-modern-1/scripts/validate-screenshots.js`

```js
const fs = require('fs');
const EXPECTED = 16; // 15 variants + 1 dsap
const dir = 'aplio-modern-1/test/screenshots/T-3.1.1';
const pngs = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.png')) : [];
if (pngs.length !== EXPECTED) {
  throw new Error(`Screenshot count mismatch. Expected ${EXPECTED}, found ${pngs.length}`);
}
console.log('✓ All screenshots present:', pngs.length);
```

Execute:
```bash
node scripts/validate-screenshots.js | cat
```

**Success Gate:** exactly 16 PNG files present.

---

## Phase 4 – LLM Vision Analysis (TO EXECUTE)

### 4.1 Analyzer Setup Check
```bash
node test/utils/vision/enhanced-llm-vision-analyzer.js --check | cat
```
Expect output: `✓ Enhanced LLM Vision Analyzer API connection successful`.

### 4.2 Per-Screenshot Analysis
```bash
for img in aplio-modern-1/test/screenshots/T-3.1.1/*.png; do
  node test/utils/vision/enhanced-llm-vision-analyzer.js "$img" \
    --out "aplio-modern-1/test/vision-results/T-3.1.1/$(basename "$img" .png).md" | cat
  sleep 30 # rate-limit safety
done
```

### 4.3 Result Verification
```bash
node -e "const fs=require('fs');const dir='aplio-modern-1/test/vision-results/T-3.1.1';const imgs=fs.readdirSync('aplio-modern-1/test/screenshots/T-3.1.1').filter(f=>f.endsWith('.png'));const reports=fs.existsSync(dir)?fs.readdirSync(dir):[];if(reports.length!==imgs.length)throw new Error('Vision report count mismatch');console.log('✓ Vision reports generated for all screenshots');" | cat
```

**Success Gate:** Vision report markdown file exists for every PNG.

---

## Phase 5 – Aggregated Reporting & Sign-off (TO EXECUTE)

### 5.1 Summary Script
`/aplio-modern-1/scripts/t311-vision-summary.js`
```js
const fs = require('fs');
const ssDir = 'aplio-modern-1/test/screenshots/T-3.1.1';
const vrDir = 'aplio-modern-1/test/vision-results/T-3.1.1';
const screenshots = fs.readdirSync(ssDir).filter(f=>f.endsWith('.png'));
let pass = 0;
let fail = 0;
let lines = ['# T-3.1.1 Vision Analysis Summary\n'];
for (const png of screenshots) {
  const md = `${vrDir}/${png.replace('.png','.md')}`;
  if (fs.existsSync(md)) {
    const txt = fs.readFileSync(md,'utf8');
    const ok = /DSAP Compliance:\s*PASS/i.test(txt);
    ok?pass++:fail++;
    lines.push(`- ${png}: ${ok?'PASS':'FAIL'}`);
  } else {
    fail++;
    lines.push(`- ${png}: MISSING REPORT`);
  }
}
lines.push(`\n**Totals:** ${pass} PASS / ${fail} FAIL\n`);
fs.writeFileSync(`${vrDir}/t311-vision-summary.md`, lines.join('\n'));
console.log('✓ Summary generated');
```
Run:
```bash
node scripts/t311-vision-summary.js | cat
```

### 5.2 Final Report Update
Append artefact links & PASS/FAIL tally to `/pmc/core/active-task.md` under *Phase 3 – Visual Testing*.

---

## Essential Paths
```
/aplio-modern-1/app/test-t311-button/page.tsx
/aplio-modern-1/test/visual/t311-button.spec.ts
/aplio-modern-1/test/screenshots/T-3.1.1/
/aplio-modern-1/test/vision-results/T-3.1.1/
/pmc/core/active-task.md
```

---

### Testing Agent Reminders & NOtes
Execute scripts *exactly* as provided, fix only blocking errors, and report back with:
1. Screenshot count
2. Vision PASS/FAIL tally
3. Path to `t311-vision-summary.md`

- Always run this testing prompt from the `project_root\aplio-modern-1` directory
- New bash shells ALWAYS open in `project_root\pmc` by default. Navigate accordingly when you start a new shell
- The main folders: `project_root\aplio-modern-1` and `project_root\pmc` are adjacent to each other. To navigate from one to the other you need to first do cd .. 
- Always append ` | cat` to all bash terminal commands. The cat command reads all input and then terminates cleanly when the input stream closes. This helps commands not to hang.
- Use the simplest terminal commands that will still get the job done. Compound commands have a tendency to hang even with ` | cat` on the end.

*End of Spec*
