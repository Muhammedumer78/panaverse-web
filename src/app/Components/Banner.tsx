import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import png from "../../../public/logo2.webp";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import png4 from "../../../public/logo3.png";

import Instructor from "./Instructor";

export default function Banner() {
  return (
    <>
      <Box
        bgAttachment="fixed"
        bgImage="https://static.vecteezy.com/system/resources/previews/008/351/029/non_2x/metaverse-blue-purple-technology-background-template-free-vector.jpg"
      >
        <RevealWrapper
          origin="top"
          delay={200}
          duration={400}
          distance="500px"
          reset={true}
        >
          <Container maxW={1400}>
            <Flex
              pt={{ lg: "150px", base: "30px" }}
              pb={{ lg: "100px", base: "0" }}
              px={{ lg: "40px", base: "5px" }}
              display={{ lg: "flex", base: "grid" }}
            >
              <Box
                flexBasis={{ lg: "50%", base: "%" }}
                px={{ lg: "40px", base: "0" }}
              >
                <Heading fontSize={"3xl"} textColor="black">
                  {
                    "  Prepare yourself for the Next Generation of Internet with  "
                  }
                  <Heading as="span" color="yellow">
                    Panaverse
                  </Heading>{" "}
                </Heading>
                <Text
                  pt="30px"
                  color={"black"}
                  fontWeight={"bold"}
                  fontStyle={"italic"}
                  textAlign="justify"
                >
                  One Year Panaverse DAO Earn as you Learn Program.
                  Consolidating Web 3.0, Metaverse, Artificial Intelligence
                  (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                </Text>
                <Button mt="30px" size="lg" bgColor={"blue"} color={"white"}>
                  More Info
                </Button>
              </Box>
              <Box mt={{ lg: "-80px", base: "0" }} flexBasis="50%">
                <Image src={png} alt="Panaverse" />
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            gap={{ lg: "80px", base: "10px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box
              mt="40px"
              flexBasis={"50%"}
              bgImage={
                "https://static.vecteezy.com/system/resources/previews/006/103/513/original/metaverse-purple-technology-background-template-free-vector.jpg"
              }
            >
              <RevealWrapper
                origin="left"
                delay={200}
                duration={400}
                distance="500px"
                reset={true}
              >
                <Image
                  src={png}
                  alt={"Panaverse"}
                  width="400"
                  height="200"
                ></Image>
              </RevealWrapper>
            </Box>

            <Box
              flexBasis={"50%"}
              pt={{ lg: "80px", base: "10px" }}
              px={{ lg: "0", base: "5px" }}
            >
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading pt={"10px"} size={"2xl"}>
                  Program of Studies
                </Heading>
                <Text
                  pt={"15px"}
                  pr={["10px", "60px"]}
                  fontWeight={"bold"}
                  textAlign="justify"
                >
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </Text>
                <Button size={"lg"} mt={"30px"} bgColor={"blue"} color="white">
                  Read More
                </Button>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container pb="20px" maxW={1400} bg="blue.200" px="10px">
          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex mt="30px">
                <Box>
                  <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading
                      borderBottom="5px solid red"
                      size={"xl"}
                      textAlign={"center"}
                    >
                      Our Top Courses
                    </Heading>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>

            <Center>
              <Flex
                gap={"30px"}
                direction={["column", "column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"370px"}
                  bgColor="white"
                  mt="25px"
                >
                  <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading
                      size={"xl"}
                      textDecoration="underline"
                      textAlign={"center"}
                    >
                      Metaverse
                    </Heading>
                    <Text>
                      Panaverse DAO is a community of Web 3 and Metaverse
                      developers, designers, trainers, startup founders and
                      service providers. Panaverse DAO is struggling to produce
                      professionals.
                    </Text>
                    <Link href={"/explore"}>
                      <Button
                        mt="20px"
                        bgColor={"blue"}
                        color="white"
                        flexDir={"column"}
                        _hover={{ bg: "red.500" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </RevealWrapper>
                </Box>
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"370px"}
                  bgColor="white"
                  mt="25px"
                >
                  <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading
                      size={"xl"}
                      textDecoration="underline"
                      textAlign={"center"}
                    >
                      Blockchain
                    </Heading>
                    <Text>
                      Panaverse DAO is a community of Web 3 and Metaverse
                      developers, designers, trainers, startup founders and
                      service providers. Panaverse DAO is struggling to produce
                      professionals.
                    </Text>

                    <Button
                      as={Link}
                      href={"/explore"}
                      mt="20px"
                      bgColor={"blue"}
                      color="white"
                      flexDir={"column"}
                      _hover={{ bg: "red.500" }}
                    >
                      Learn More
                    </Button>
                  </RevealWrapper>
                </Box>
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"370px"}
                  bgColor="white"
                  mt="25px"
                >
                  <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading
                      size={"xl"}
                      textDecoration="underline"
                      textAlign={"center"}
                    >
                      Typescript
                    </Heading>
                    <Text>
                      Panaverse DAO is a community of Web 3 and Metaverse
                      developers, designers, trainers, startup founders and
                      service providers. Panaverse DAO is struggling to produce
                      professionals.
                    </Text>

                    <Button
                      as={Link}
                      href={"/explore"}
                      mt="20px"
                      bgColor={"blue"}
                      color="white"
                      flexDir={"column"}
                      _hover={{ bg: "red.500" }}
                    >
                      Learn More
                    </Button>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
        </Container>
        <Container maxW={1400} mt="80px">
          <>
            <SimpleGrid columns={[1, 1, 2]}>
              <Box>
                {" "}
                <RevealWrapper
                  origin="left"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Heading
                    textAlign={"left"}
                    textShadow="dark-lg"
                    borderBottom={"6px solid blue"}
                  >
                    What Is Panaverse DAO?
                  </Heading>
                  <Text pt={"45px"} pr={"60px"} py="25px" textAlign={"justify"}>
                    Panaverse DAO is a community of Web 3 and Metaverse
                    developers, designers, trainers, startup founders and
                    service providers. Panaverse DAO is struggling to produce
                    professional metaverse developers from Pakistan for the
                    upcoming Era of Internet.
                  </Text>
                  <Button
                    mt="30px"
                    size="lg"
                    bgColor={"blue"}
                    color={"white"}
                    _hover={{ bg: "red.500" }}
                    mb="50px"
                  >
                    Read More
                  </Button>
                </RevealWrapper>
              </Box>
              <Box>
                <RevealWrapper
                  origin="right"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <Image src={png4} alt="Panaverse"></Image>
                </RevealWrapper>
              </Box>
            </SimpleGrid>
          </>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex flexDirection={"row"} mt="30px">
                <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  bg="white"
                  p={6}
                  rounded="md"
                >
                  <Heading
                    mt={"30px"}
                    textDecoration={"underline"}
                    textAlign="center"
                    wordBreak={"normal"}
                  >
                    {"  The Program in a Nutshell "}
                    <Heading as="span" color="blue">
                      Earn While You Learn
                    </Heading>
                    {"  "}
                  </Heading>
                  <Text textAlign={"justify"} mt="30px" mb="30px">
                    In this brand-new type of curriculum, students will learn
                    how to make money and boost exports in the classroom and
                    will begin doing so within six months of the program’s
                    beginning. It resembles a cross between a corporate venture
                    and an educational project.
                  </Text>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
        </Container>
        <Instructor />
      </Box>
    </>
  );
}
