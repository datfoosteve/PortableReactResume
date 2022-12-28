import dynamic from 'next/dynamic';
import react from 'react';

const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
});

export default function PDF() {
    return (
        <div className="container" mx-auto="true" px-4>
            
            <div className="flex justify-center">
            <PDFViewer />
            </div>
        </div>
    );
}
