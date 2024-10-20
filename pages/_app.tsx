import NavBar from "@/components/general/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local';

const HexaframeCF_Regular = localFont({
  src:'./HexaframeCF-Regular.ttf'
}) 

export default function App({ Component, pageProps }: AppProps) {
  return <main className={HexaframeCF_Regular.className}>
    <NavBar children={<Component {...pageProps} />}/>
    </main>;
}
