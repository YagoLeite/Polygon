import { ChakraProvider } from "@chakra-ui/react";
import ControlerState from "../Context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ControlerState>
        <Component {...pageProps} />
      </ControlerState>
    </ChakraProvider>
  );
}

export default MyApp;
