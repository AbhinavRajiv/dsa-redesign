import { logoUrl } from "@/constants";
import "@/styles/globals.css";
import { useState } from "react";
import { ThemeContext, SessionContext } from "@/utils/context";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
   const [compactTheme, setCompactTheme] = useState(false);
   const [session, setSession] = useState({});
   return (
      <MantineProvider>
         <CustomHead />
         <DefaultSeo title="DealStreetAsia - Asia focused financial news and intelligence platform" />
         <ThemeContext.Provider value={[compactTheme, setCompactTheme]}>
            <SessionContext.Provider value={[session, setSession]}>
               <Component {...pageProps} />
            </SessionContext.Provider>
         </ThemeContext.Provider>
      </MantineProvider>
   );
}

function CustomHead() {
   return (
      <Head>
         <link rel="icon" type="image/x-icon" href={logoUrl} />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
         />
      </Head>
   );
}
