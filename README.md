# package-sort

This is a simple package sorting function that classifies packages based on their dimensions and mass.
The functional requirements can be found in [Requirements.md](Requirements.md).

The presented `sort` function contains more optimizations than the requirements demand to better demonstrate extensibility and performance expected in production-ready code.

AI was used to as a pair programmer to help me write this code efficiently. However, the patterns and practices used are of my own guidence.

## Installation

To install dependencies:

```bash
bun install
```

## Usage

To run:

```bash
bun run index.ts
```

To run tests:

```bash
bun test sort.test.ts
```

## Demos

Demos and versions of this sort function written in other languages can be found in the [`demos`](demos) directory.