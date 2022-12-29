import dynamic from 'next/dynamic';
import react from 'react';


const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
});

export default function PDF() {
    return (
            <div >
            <PDFViewer/>
            </div>
      
    );
} 
