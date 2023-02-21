import { logoUrl } from "@/constants";
import "@/styles/globals.css";
import "@/styles/common.scss";
import { useState } from "react";
import { ThemeContext, SessionContext, ModalContext } from "@/utils/context";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import ProgressIndicator from "@/components/common/NProgress";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
   const [compactTheme, setCompactTheme] = useState(true);
   const [session, setSession] = useState({});
   const [modal, setModal] = useState();
   const router = useRouter();

   return (
      <MantineProvider>
         <CustomHead />
         <DefaultSeo title="DealStreetAsia - Asia focused financial news and intelligence platform" />
         <ThemeContext.Provider value={[compactTheme, setCompactTheme]}>
            <ModalContext.Provider value={[modal, setModal]}>
               <SessionContext.Provider value={[session, setSession]}>
                  <ProgressIndicator />
                  <AnimatePresence mode="wait">
                     <Component {...pageProps} key={router.asPath} />
                  </AnimatePresence>
               </SessionContext.Provider>
            </ModalContext.Provider>
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
