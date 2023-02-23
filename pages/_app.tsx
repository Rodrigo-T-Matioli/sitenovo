import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { ColorModeProvider } from "../contexts/ColorModeContext";
import SEO from "../next-seo-config";
import createEmotionCache from "../utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        {/* <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Black Fish - Agencia de marketing digital</title>
          <meta
            name="description"
            content="Alavanque sua presença online com a expertise em marketing digital da nossa agência. Aumente sua visibilidade e conversões agora mesmo!"
          />
        </Head> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ColorModeProvider>
    </CacheProvider>
  );
}
