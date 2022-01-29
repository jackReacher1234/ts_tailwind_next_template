import "../styles/globals.css";
import { GlobalStyles } from "twin.macro";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
