import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { theme } from "../styles/theme";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

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
