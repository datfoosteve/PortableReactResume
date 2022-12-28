import { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState();
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }
  useEffect(() => {
    fetch('sample2.pdf').then(res => {
      // res.blob().then(b => {
      //   console.log(b)
      //   setFile(b)
      // })
      res.arrayBuffer().then(buf => {
        console.log(buf)
        setFile(buf)
      })
    })
  }, [ ])

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div>
      </div>
      <div className= "PDFContainer" >
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page 
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={true}
              renderTextLayer={false}
              renderInteractiveForms={true}
              customTextRenderer={true}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
