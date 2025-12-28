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

// @ts-ignore
const cMapUrl = new URL(  "../../../../cmaps/", import.meta.url).toString();
const standardFontDataUrl = new URL(
  "../../../../standard_fonts/",
  // @ts-ignore
  import.meta.url,
).toString();

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
      cMapUrl: cMapUrl,
      cMapPacked: true,
      standardFontDataUrl: standardFontDataUrl,
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
