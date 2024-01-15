import { Sora } from "@next/font/google";
import Head from "next/head";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import Nav from "../components/Nav";
import Header from "../components/Header"
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <div className={`page bg-primary/100 text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
