import { useState, useEffect } from 'react';
import { LinkAnnotation, Document, Page, pdfjs } from 'react-pdf';
import workerSrc from '../pdf-worker';

// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

<LinkAnnotation source={{ type: "URL", url: "http://example.com" }} style={{
  position: 'fixed',
  top: '300px',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%'
}} />


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

        fetch(fileToFetch).then((res) => {
            // Fetch the PDF file and convert it to an ArrayBuffer
            res.arrayBuffer().then((buf) => {
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
      setCurrentPdfIndex((currentPdfIndex + 1) % 4);
    }

    return (
        <div
            className="container"
            style={{
                display: 'block',
                justifyContent: 'center',
                overflowy: 'scroll',
                backgroundAttachment: 'scroll',
            }}
        >
            <a
                style={{
                    position: 'flex',
                    width: '100%',
                    border: '6px solid rgba(black, black, black, 0.1)',
                }}
                href={fileUrl}
                download="myfile.pdf"
            >
                Download PDF
            </a>

            <div
                className="PDFContainer"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '50%',
                    bottom: 'auto',
                    left: 'fit-content',
                    // transform: 'translateX(-50%)',
                    border: '6px solid rgba(black, black, black, 0.1)'
                }}
            >
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: numPages }, (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            renderInteractiveForms
                            renderTextLayer={false}
                            customTextRenderer={false}
                        />
                    ))}

                    <button onClick={onNextPdfClick}>Next PDF</button>
                </Document>
                
                <div />
            </div>
        </div>
    );
} 

