import dynamic from 'next/dynamic';
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'

const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
    ssr: false,
});
    
export default function Home() {
    const [resumeData, setResumeData] = useState({})
  
    useEffect(() => {
      fetch('/resumeData.json')
        .then((res) => res.json())
        .then((data) => {
          setResumeData(data)
        })
    }, [])

  
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center">
            <Head>
    <title>Stephen</title>
    <link rel="icon" href="/two.png" />
  </Head>
           <Header data={resumeData.main} />
          
           <About data={resumeData.main} />
        
      
     
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials}/>
      <Contact data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <PDFViewer />
      <Footer data={resumeData.main} />
      </div>
    )
}
