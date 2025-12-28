/* eslint-disable */
import React, { FC, useContext, useEffect, useMemo } from "react";
import { Document } from "react-pdf";
import styled from "styled-components";
import { useTranslation } from "../../../../hooks/useTranslation";
import { PDFContext } from "../../state";
import { setNumPages } from "../../state/actions";
import { initialPDFState } from "../../state/reducer";
import { PDFAllPages } from "./PDFAllPages";
import PDFSinglePage from "./PDFSinglePage";

// const cMapUrl = new URL(
//   "./node_modules/pdfjs-dist/cmaps/",
//   // "../../../../cmaps/",
//   // @ts-ignore
//   import.meta.url,
// ).toString();
// const standardFontDataUrl = new URL(
//   "./node_modules/pdfjs-dist/standard_fonts/",
//   // "../../../../standard_fonts/",
//   // @ts-ignore
//   import.meta.url,
// ).toString();
// console.log("cMapUrl", cMapUrl);
// console.log("fontUrl", standardFontDataUrl);

// ライブラリ内の assets を URL に変換
// @ts-ignore
const CMAP_URL = new URL("./assets/cmaps/", import.meta.url).toString();
// @ts-ignore
const STANDARD_FONT_URL = new URL("./assets/standard_fonts/", import.meta.url).toString();
console.log("CMAP_URL", CMAP_URL);
console.log("STANDARD_FONT_URL", STANDARD_FONT_URL);

const PDFPages: FC<{}> = () => {
  const {
    state: { mainState, paginated },
    dispatch,
  } = useContext(PDFContext);
  const { t } = useTranslation();

  const currentDocument = mainState?.currentDocument || null;

  useEffect(() => {
    dispatch(setNumPages(initialPDFState.numPages));
  }, [currentDocument]);

  if (!currentDocument || currentDocument.fileData === undefined) return null;
  const options = useMemo(
    () => ({
      cMapUrl: CMAP_URL,
      cMapPacked: true,
      standardFontDataUrl: STANDARD_FONT_URL,
    }),
    [], // 依存なしなら一度だけ生成
  );

  return (
    <DocumentPDF
      file={currentDocument.fileData}
      onLoadSuccess={({ numPages }) => dispatch(setNumPages(numPages))}
      loading={<span>{t("pdfPluginLoading")}</span>}
      options={options}
    >
      {paginated ? <PDFSinglePage /> : <PDFAllPages />}
    </DocumentPDF>
  );
};

const DocumentPDF = styled(Document)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default PDFPages;
