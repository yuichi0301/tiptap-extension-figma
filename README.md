# tiptap-extension-figma

A [TipTap](https://tiptap.dev/) extension for hydrating Figma designs in a TipTap document.

## Installation

```bash
pnpm add tiptap-extension-figma
```

## Usage

```ts
import { Figma } from 'tiptap-extension-figma';

const editor = new Editor({
  extensions: [Figma],
});
```
