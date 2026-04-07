# Copilot Instructions for d:/Javascript_Learning

## Project Overview
Minimal JavaScript learning sandbox with no build tools, frameworks, or external dependencies. Single-file project for experimenting with core JavaScript concepts and syntax.

## Architecture
**Single-file design**: All JavaScript experiments live in `first.js`, loaded directly by `index.html` via `<script src="first.js"></script>`. No module system or build process—code runs as-is in the browser.

## Code Patterns & Conventions
- **Variable declarations**: Mix of implicit (no declaration keyword) and explicit (`let`, `const`). Both are present; preserve existing patterns.
- **Output method**: `console.*` methods only (`console.log`, `console.group`, `console.error`, `console.warn`). All debugging and output goes to browser console.
- **Code organization**: Heavily commented-out experimental code blocks. Active code is uncommented; experiments remain as comments for reference.
- **Data types explored**: Primitives (`null`, `undefined`, strings, numbers, booleans) and control flow (`if/else` statements).

## Developer Workflow
1. Edit `first.js` to add or modify code
2. Save the file
3. Refresh `index.html` in browser (or view with Live Server)
4. Check browser console for output (F12 → Console tab)

## What NOT to Do
- Do not introduce build tools, bundlers, or npm dependencies
- Do not create additional .js files unless explicitly requested
- Do not refactor into modules or separate concerns across files
- Do not use external libraries or frameworks

## Key Files
- [first.js](../first.js): Active experiments and console output
- [index.html](../index.html): Simple HTML with script loader

---
_This is a learning project. Preserve simplicity and direct browser execution._
