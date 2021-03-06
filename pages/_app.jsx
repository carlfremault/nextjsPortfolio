import { createContext, useEffect, useState } from "react";
import "../styles/globals.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import ReactGA from "react-ga";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "../theme/darkTheme";
import lightTheme from "../theme/lightTheme";

export const ColorContext = createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appliedTheme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // Initialize react-ga
    ReactGA.initialize("UA-183090947-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Head>
        <title>Carl Fremault - Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/imgs/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/imgs/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/imgs/favicon-16x16.png"
        />
        <link rel="manifest" href="/imgs/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Carl Fremault - Etudiant développeur en 2ième année du BTS Services Informatiques aux Organisations - Portfolio"
        />
      </Head>
      <ColorContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={{ ...appliedTheme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorContext.Provider>
    </>
  );
}

export default MyApp;
