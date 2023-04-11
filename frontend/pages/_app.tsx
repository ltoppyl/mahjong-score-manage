import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { Box, ChakraProvider, Container } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Box bgColor="#4A6F48" minH={"100vh"}>
          <Container maxW="container.md">
            <Component {...pageProps} />
          </Container>
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
