import React from "react";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    src: url(/fonts/montserrat.woff2) format('woff2');
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-display: swap;
    src: url(/fonts/dmsans.woff2) format('woff2');
  }

`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
