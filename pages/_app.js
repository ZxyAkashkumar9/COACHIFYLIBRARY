import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import "../style/globals.css";

export default function App({ Component, pageProps }) { 
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <title>Lirary</title>
        <meta name="description" content="Coachify | Best Coachify Institute in Rajasthan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />       
        
       
      </Head>
     
    
      <Component {...pageProps} />
     
      
    </>
  );
}
