import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import WakatimeCalendar from '../components/WakaTimeCalender';
import Parallax from '../components/Parallax';
import { ParallaxProvider } from 'react-scroll-parallax';




const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
    
});

export default function Home() {
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        fetch('/resumeData.json')
            .then((res) => res.json())
            .then((data) => {
                setResumeData(data);
            });
    }, []);

    return (
        <div>
        <Head>
        </Head>
        <ParallaxProvider>
            <Header resumeData={resumeData} />
            <Parallax />
            <About resumeData={resumeData} />
            <Resume resumeData={resumeData} />
            <Portfolio resumeData={resumeData} />
            <Testimonials resumeData={resumeData} />
            <Contact resumeData={resumeData} />
            <PDFViewer />
            <WakatimeCalendar />
            <Footer resumeData={resumeData} />
        </ParallaxProvider>
    </div>
);
}