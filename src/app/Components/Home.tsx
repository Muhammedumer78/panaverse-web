import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function Home(hello: any) {
  return (
    <Box bgAttachment={"fixed"} bgImage={hello.src} py={"200px"} bgSize="cover">
      <Container maxW={1100}>
        <Heading color={"yellow"} size="2xl">
          {hello.title}
        </Heading>
      </Container>
    </Box>
  );
}
