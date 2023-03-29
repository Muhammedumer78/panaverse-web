"use client";
import {
  Image,
  Box,
  Heading,
  Center,
  Container,
  Text,
  SimpleGrid,
  Flex,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import png2 from "../../../public/ziakhan2.png";
import png3 from "../../../public/daniyalnagori.png";
import png4 from "../../../public/hirakhan.jpg";
import png5 from "../../../public/zeeshan.jpg";
import png6 from "../../../public/adil.jpg";
import { RevealWrapper } from "next-reveal";

export default function Instructor() {
  return (
    <Box>
      <Container maxW={1400}>
        <Center>
          <Heading mt={"20px"} textDecoration="underline">
            Our Instructors
          </Heading>
        </Center>
        <Box>
          <SimpleGrid columns={[1, 1, 2, 3, 5]} mt="15px">
            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center>
                  <Box borderRadius={"full"} overflow="hidden">
                    <Image
                      src="/ziakhan2.png"
                      width={"100"}
                      height={"100"}
                      alt="Zia Khan"
                    />
                  </Box>
                </Center>
                <Heading textAlign={"center"} size="sm">
                  Zia Khan
                </Heading>
                <Text pt={"15px"} px={"10px"} textAlign={"justify"}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders
                </Text>
              </RevealWrapper>
            </Box>
            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center>
                  <Box borderRadius={"full"} overflow="hidden">
                    <Image
                      src="/daniyalnagori.png"
                      width={"100"}
                      height={"100"}
                      alt="Daniyal Nagori"
                    />
                  </Box>
                </Center>
                <Heading textAlign={"center"} size="sm">
                  Daniyal Nagori
                </Heading>
                <Text px={"10px"} pt={"15px"} textAlign={"center"}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders
                </Text>
              </RevealWrapper>
            </Box>

            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center>
                  <Box borderRadius={"full"} overflow="hidden">
                    <Image
                      src="/zeeshan.jpg"
                      width={"100"}
                      height={"100"}
                      alt="Zeeshan Hanif"
                    />
                  </Box>
                </Center>
                <Heading textAlign={"center"} size="sm">
                  Zeeshan Hanif
                </Heading>
                <Text px={"10px"} textAlign={"center"} pt={"15px"}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders
                </Text>
              </RevealWrapper>
            </Box>
            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center>
                  <Box borderRadius={"full"} overflow="hidden">
                    <Image
                      src="/hirakhan.jpg"
                      width={"100"}
                      height={"100"}
                      alt="Hira Khan"
                    />
                  </Box>
                </Center>
                <Heading textAlign={"center"} size="sm">
                  Hira Khan
                </Heading>
                <Text px={"10px"} pt={"15px"} textAlign={"center"}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders
                </Text>
              </RevealWrapper>
            </Box>
            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center>
                  <Box borderRadius={"full"} overflow="hidden">
                    <Image
                      src="/adil.jpg"
                      width={"100"}
                      height={"100"}
                      alt="Adil Altaf"
                    />
                  </Box>
                </Center>
                <Heading textAlign={"center"} size="sm">
                  Adil Altaf
                </Heading>
                <Text px={"10px"} textAlign={"center"} pt={"15px"}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders
                </Text>
              </RevealWrapper>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
