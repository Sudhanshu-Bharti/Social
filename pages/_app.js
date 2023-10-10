import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "ethereum";
// secret id = PpB7d42vA6nKgJbQb4Q7C6exParcfY0h1hcRQaZaUIlxvVZkJcPS5yx-6Hu8gpwo7HfMt-2Ml7ZyLMaupkkT_w
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
