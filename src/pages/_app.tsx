import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
