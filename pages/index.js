import dynamic from 'next/dynamic';
import FloatingPop from '../components/FloatingPop';
import FloatingTabs from '../components/FloatingTabs';

const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
});

export default function PDF() {
    return (
        <div>
             <FloatingTabs />

            <FloatingPop />
           
            <PDFViewer />
            </div>
      
    );
}
