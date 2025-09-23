## FR1 wireframe selection and merge analysis

### 1) Which wireframe best fits FR1 acceptance requirements?

- **Recommendation: `wireframes/FR-1.1-Brun-upload-page`**
  - **FR1.1 Document Processing coverage: Strong.** Implements multi-format support, drag-and-drop upload, validation, queue/progress, content preview with formatting controls, metadata and encoding display, 100MB limit, and processing logs.
  - **FR1.2 Export Generation: Not covered.** No export UI/flows.
  - **FR1.3 Training Integration: Not covered.** No HF Hub/RunPod integration UI.
  - Evidence (supported types + 100MB limit):

```1:12:wireframes/FR-1.1-Brun-upload-page/utils/constants.ts
// File format configurations
export const SUPPORTED_FORMATS = [
  { type: 'application/pdf', label: 'PDF', extension: '.pdf' },
  { type: 'application/msword', label: 'DOC', extension: '.doc' },
  { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', label: 'DOCX', extension: '.docx' },
  { type: 'application/vnd.ms-powerpoint', label: 'PPT', extension: '.ppt' },
  { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', label: 'PPTX', extension: '.pptx' },
  { type: 'text/plain', label: 'TXT', extension: '.txt' },
  { type: 'text/markdown', label: 'MD', extension: '.md' },
  { type: 'text/csv', label: 'CSV', extension: '.csv' },
  { type: 'application/json', label: 'JSON', extension: '.json' }
]
```

```64:69:wireframes/FR-1.1-Brun-upload-page/components/UploadScreen.tsx
const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  accept: createAcceptAttribute(SUPPORTED_FORMATS),
  maxSize: MAX_FILE_SIZE,
  multiple: true,
})
```

```69:71:wireframes/FR-1.1-Brun-upload-page/supabase/functions/server/index.tsx
if (file.size > 100 * 1024 * 1024) { // 100MB limit
  return c.json({ error: 'File size exceeds 100MB limit' }, 400)
}
```

- **Why not `FR-1.1B`?** It only supports TXT/DOC/DOCX/PDF and lacks validation/remediation, logs, and extracted-content preview. It adds a configuration panel and analysis job controls (great for FR2.x) but misses many FR1.1 acceptance items.

### 2) Feature matches between functionality and wireframes

- **2a — In both (wireframes reflect backend FR1 tasks):**
  - **Multi-format support**, **100MB handling**, **drag-and-drop**, **batch uploads with queue/progress**, **validation & error handling**, **content preview (formatting toggle + metadata/encoding)**, **processing logs**.
- **2b — In wireframes but NOT in backend task list:**
  - From `FR-1.1B`: configuration save/load, start analysis job + job polling, previously uploaded files (duplicates, reprocess/delete), signed URL preview, breadcrumb/progress bar.
  - From `FR-1.1`: export logs JSON, pause/resume/cancel controls.
- **2c — In backend FR1 tasks but NOT in wireframes:**
  - **FR1.2 Export Generation**: HF datasets, JSON/JSONL/CSV/Parquet/TFRecord/PyTorch, custom templates, batch multi-format export, compression, versioning/lineage, manifests, scheduling, export validation.
  - **FR1.3 Training Integration**: HF Hub upload, RunPod/Vast job initiation with params/resources, progress notifications, model registry, evaluation, deployment automation, training queue/priority, cost tracking, reproducibility.

### 3) Best ways to build FR1 to MVP

- **Plan A — Finish FR1.1 on `FR-1.1`, bolt on minimal FR1.2/FR1.3**
  - Phase 1 (FR1.1, 3–7 days): solidify endpoints; real ETA calc; real parsers (pdf.js+OCR as needed, mammoth/docx-parser, officeparser, native TXT/MD/CSV/JSON); persist logs; keep LogsPanel.
  - Phase 2 (FR1.2, 2–4 days): add Export CTA on Summary; ship JSONL + basic HF datasets; emit manifest + lineage.
  - Phase 3 (FR1.3, 3–5 days): “Upload to HF Hub (private)” and “Start RunPod training” (1 pre-baked template); poll status; record model version.

- **Plan B — Merge strengths into a guided flow**
  - Phase 1: use `FR-1.1` Upload→Validation→Preview; embed `FR-1.1B` PreviouslyUploadedFiles in Upload sidebar.
  - Phase 2: compact “Export & Train” panel on Summary with minimal FR1.2/1.3 actions (Export JSONL/HF Datasets; HF Hub; RunPod).
  - Phase 3: add `FR-1.1B` Configuration Panel as an Advanced tab (aligns with FR2.x), gated behind a toggle; doesn’t block MVP.

- **Do first**
  - Use `FR-1.1` as FR1.1 MVP foundation.
  - Add minimal export + training CTAs to satisfy FR1.2/1.3 quickly.
  - Defer advanced analysis config/dashboard (mostly `FR-1.1B`) to FR2.x.
