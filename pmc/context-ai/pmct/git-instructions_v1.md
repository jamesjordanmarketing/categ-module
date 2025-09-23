# Git Instructions

## Pulling Changes from GitHub Repository

**Basic pull (most common):**
```bash
git pull
```

**Pull from specific remote and branch:**
```bash
git pull origin main
```
(Replace `main` with your branch name if different, could be `master`)

**Pull with rebase (cleaner history):**
```bash
git pull --rebase
```

**Force pull (overwrites local changes - use with caution):**
```bash
git fetch origin
git reset --hard origin/main
```

## Complete Workflow:
1. Check current status: `git status`
2. Commit any local changes first: `git add . && git commit -m "Save local changes"`
3. Pull latest changes: `git pull`
4. Resolve any merge conflicts if they occur

## Troubleshooting:
- If you have uncommitted changes, git will ask you to commit or stash them first
- Use `git stash` to temporarily save changes, then `git stash pop` after pulling
- Check your remote with: `git remote -v`