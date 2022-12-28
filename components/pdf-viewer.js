import { useState, useEffect } from "react";
import FileSaver from 'file-saver';
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../pdf-worker";

// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  // Declare state variables to store the file, the number of pages in the file, and the URL of the file
  const [file, setFile] = useState();
  const [numPages, setNumPages] = useState(null);
  const [fileUrl, setFileUrl] = useState();
  // Declare a state variable to store the current PDF index
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);

  // Declare an event handler to set the file state variable when the file input changes
  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  // Use an effect to fetch the current PDF file and set the file state variable
  useEffect(() => {
    // Determine the file to fetch based on the current PDF index
    const fileToFetch = `sample${currentPdfIndex + 1}.pdf`;

    fetch(fileToFetch).then(res => {
      // Fetch the PDF file and convert it to an ArrayBuffer
      res.arrayBuffer().then(buf => {
        // Set the file state variable to the ArrayBuffer
        setFile(buf);
      });
    });
  }, [currentPdfIndex]);

  // Use an effect to create an object URL for the file and set the fileUrl state variable
  useEffect(() => {
    // Create an object URL for the file
    setFileUrl(URL.createObjectURL(new Blob([file])));
  }, [file]);

  // Declare an event handler to set the numPages state variable when the document is successfully loaded
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  
  // Declare an event handler to cycle through the PDFs when the button is clicked
  function onNextPdfClick() {
    // Increment the current PDF index, wrapping around to 0 when it reaches the end
    setCurrentPdfIndex((currentPdfIndex + 1) % 2);
  }
  
  return (
    <div>
    
     {/* Display a download button that allows the user to download the file */}
    <div>
      <a href={fileUrl} download="myfile.pdf">Download PDF</a>
    </div>
    {/* Display a button to cycle through the PDFs */}
    <div>
      <button onClick={onNextPdfClick}>Next PDF</button>
    </div>
    {/* Display the PDF viewer in a container element with fixed positioning and a bottom of 0,
    which positions it at the bottom of the page. Also add a border around the container. */}
    <div
      className="PDFContainer"
      style={{
        position: 'fixed',
        width: '100%',
        height: 'auto',
        bottom: 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        border: '1px solid #ccc',
      }}
    >
      {/* Render the PDF using the Document component, passing in the file and onLoadSuccess event handler */}
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {/* Render a page for each page in the PDF using the Page component */}
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            // Set the key and pageNumber props
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            // Enable the annotation layer and interactive form rendering
            renderAnnotationLayer = {true}
            renderInteractiveForms
            // Disable the text layer and custom text rendering
            renderTextLayer={false}
            customTextRenderer={false}
          /> 
        ))}
      </Document>
    </div>
  </div>
  );
}