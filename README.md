<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [react-doc-viewer-pdf](#react-doc-viewer-pdf)
  - [Overview](#overview)
  - [Features](#features)
  - [Install](#install)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# react-doc-viewer-pdf

React Doc Viewer + PDF renderer wrapper/example.

## Overview
This project provides a renderer of `@cyntler/react-doc-viewer`.

> Note: This plugin assumes that you have installed '@cyntler/react-doc-viewer'. because, this plugin is use with DocViewer by `@cyntler/react-doc-viewer'.

## Features
- PDF rendering via `PDFRenderer`
- `react-doc-viewer` renderer fallback chain
- Simple props-based API

## Install
```bash
npm install @momosetkn/react-doc-viewer-pdf
```

## Usage
Remove the PDFRenderer from @cyntler and add the FullspecPDFRenderer from @momosetkn

```tsx
import { memo, useMemo } from "react";
import DocViewer, { DocViewerRenderers, PDFRenderer } from "@cyntler/react-doc-viewer";
import { FullspecPDFRenderer } from "@momosetkn/react-doc-viewer-pdf";

const DocViewerWithDownload = memo(({}: Props) => {
    const pluginRenderers = useMemo(
      () => [
        FullspecPDFRenderer,
        ...DocViewerRenderers.filter((renderer) => renderer !== PDFRenderer),
      ],
      []
    );

    return (
      <StyledDocViewer
        documents={[
          {
            uri: "https://example.com/example.pdf",
            fileName: "example1.pdf",
          },
        ]}
        pluginRenderers={pluginRenderers}
      />
    );
  }
);
```
