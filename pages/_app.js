import "@/styles/globals.css";
import { Macondo_Swash_Caps } from "next/font/google";

const swash = Macondo_Swash_Caps({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={swash.className}>
      <Component {...pageProps} />
    </main>
  );
}
