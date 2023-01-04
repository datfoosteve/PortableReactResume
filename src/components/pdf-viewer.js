import { useState, useEffect } from 'react';
import { LinkAnnotation, Document, Page, pdfjs } from 'react-pdf';
import workerSrc from '../../pdf-worker.js';

// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

<LinkAnnotation source={{ type: 'URL', url: 'http://example.com' }} />;

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

    function onPrevPdfClick() {
        // Decrement the current PDF index, wrapping around to 3 when it reaches 0
        setCurrentPdfIndex((currentPdfIndex - 1 + 4) % 4);
    }

    return (
        <section id="about" className="about bg-slate">
            <span className="title decoration-orange">Printable Resume</span>
            <div className="mx-auto mt-12 mb-12 max-w-lg md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl">
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: numPages }, (_, index) => (
                        <Page
                            className={'border-slate-900 border-4'}
                            pageLayout={'twoColumnLeft'}
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderMode={'canvas'}
                            renderAnnotationLayer={false}
                            renderInteractiveForms
                            renderTextLayer={false}
                            customTextRenderer={false}
                            fixed={true}
                        />
                    ))}
                    <div className="mx-auto mt-12 mb-12 max-w-4xl md:grid md:grid-rows-1 md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl">
                    <button className="resumeDownload" onClick={onPrevPdfClick}><div className="download">Previous PDF</div></button>
                    
                    <button>
                        <a className="resumeDownload" href={fileUrl} download="myfile.pdf">
                            <div className="download">Download Pdf</div>
                        </a>
                    </button>

                    <button className="resumeDownload" onClick={onNextPdfClick}><div className="download">Next PDF</div></button></div>
                </Document>
            </div>
            <div />
        </section>
    );
}
