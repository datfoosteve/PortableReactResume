import dynamic from 'next/dynamic';
import react from 'react';

const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
});

export default function PDF() {
    return (
        <div className="container" mx-auto >
        <div className="container mx-auto" mx-auto >
            
            <div className="flex justify-center"flex justify-center>
            <PDFViewer />
            </div>
        </div>
        </div>
    );
}
