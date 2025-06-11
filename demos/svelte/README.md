# Package Sort Svelte Demo

This is a demo UI for the Package Sorter, built with Svelte, TypeScript, and Vite. It provides an interactive interface to classify packages based on their dimensions and mass, using the core logic from the main repository. It is little more than a template project when starting with Svelte + TypeScript + Vite.

## How it Works
- The demo imports the core sorting logic from `sort.ts`.
- You can try example packages or input custom dimensions and mass to see their classification (`STANDARD`, `SPECIAL`, or `REJECTED`).

## Getting Started

### 1. Install dependencies
Make sure you are in the `demos/svelte` directory:

```bash
cd demos/svelte
bun install
```

### 2. Run the development server
```bash
bun run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 3. Build for production
```bash
bun run build
```

## Editing the Demo
- Demo UI source: `src/App.svelte` and `src/main.ts`
- Static HTML: `public/index.html`
- Svelte config: `svelte.config.js`
- Vite config: `vite.config.ts`

## Relationship to Core Logic
- The demo does **not** duplicate or modify the core sorting logic.
- All classification is performed by importing `sort.ts` from the main repository.
- To change the sorting rules, edit `sort.ts` in the main repo.

## Project Structure
```
repo-root/
  src/sort.ts         # Core package sorting logic
  demos/svelte/       # This demo UI
    src/App.svelte    # Svelte UI
    src/main.ts       # Svelte entry
    public/index.html # HTML entry
    ...
```

## Questions?

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. 
