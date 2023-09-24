import { Sora } from "next/font/google";
import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";

// --- Setting Sora Next Font ---
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${sora.variable} h-full page bg-site bg-cover bg-no-repeat
      text-white font-sora relative`}
    >
      <Head>
        <title>Hussam Portfolio</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
