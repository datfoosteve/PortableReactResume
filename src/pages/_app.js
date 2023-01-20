import React from 'react';
import Layout from '../components/Layout';
import MyDocument from './_document';
import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps })  {
  return( <Layout>
   <Head>
    <title>My Portfolio App</title>
  </Head>
  <Component {...pageProps} />
</Layout> 
)}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}
MyApp.renderDocument = MyDocument.render

export default MyApp;
