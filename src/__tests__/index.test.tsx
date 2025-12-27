import { render } from "@testing-library/react";

import pdfFile from "../exampleFiles/pdf-file.pdf?url";
import DocViewer from "@cyntler/react-doc-viewer";
import { FullspecPDFRenderer } from "../renderers";

test("renders pdf viewer with FullspecPDFRenderer", () => {
  const docs = [{ uri: pdfFile }];
  render(<DocViewer documents={docs} pluginRenderers={[FullspecPDFRenderer]} />);
});
