"use client";
import React from "react";
import Home from "../Components/Home";
import { Box, Text, Heading, Container, Center, Flex } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import Head from "../head";

export default function syllabus() {
  return (
    <>
      <Home
        title="Syllabus"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUVwysIveZBj3MNYXoiZH-GBnmKvMSeteMAeZGsP1Vl_iO35ST_fa9Y4bEPqA80nZl6k&usqp=CAU"
      />
      <Box pt="30px">
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <Container maxW={1400}>
            <Center flexDirection={"column"}>
              <Heading size={"2xl"} textDecoration="underline">
                Course Syllabus
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 2, 10]}>
                The first three quarters are shared by all specialities and are
                dedicated to studying Object Oriented Programming and
                cutting-edge Full-Stack Web 2.0 development. It is going to be a
                fifteen-month-long hybrid programm that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each.
              </Text>
            </Center>
          </Container>
        </RevealWrapper>
        <Container maxW={1400}>
          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"} mt="20px">
              <Heading textDecoration="underline">Common in all</Heading>
              <Text mt={"10px"} textAlign="justify" px={[1, 1, 10]}>
                Every participant of the program will start by completing the
                following three core courses:
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="30px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"280px"}
                >
                  <Heading textDecoration={"underline"}>Quarter I</Heading>
                  <Text mt={"20px"}>
                    CS-101: Object-Oriented Programming using TypeScript and
                    Typescript for React.
                  </Text>
                </Box>
                <Box
                  textAlign={"center"}
                  p="30px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"280px"}
                >
                  <Heading textDecoration={"underline"}>Quarter II</Heading>
                  <Text mt={"20px"}>
                    W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using
                    Next.js 13 and Cloud Development Kit (CDK) for Terraform.
                  </Text>
                </Box>
                <Box
                  textAlign={"center"}
                  p="30px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"280px"}
                >
                  <Heading textDecoration={"underline"}>Quarter III</Heading>
                  <Text mt={"20px"}>
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development.
                  </Text>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
          <Center>
            <RevealWrapper
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Flex mt={"30px"}>
                <Box>
                  <Heading textDecoration={"underline"} textAlign={"center"}>
                    Specialized Tracks
                  </Heading>
                  <Text mt="15px" textAlign={"justify"}>
                    After completing the first two quarters the participants
                    will select one or more specializations consisting of two
                    courses each:
                  </Text>
                </Box>
              </Flex>
            </RevealWrapper>
          </Center>
        </Container>

        <Container
          maxW={1400}
          mt="30px"
          bgSize={"cover"}
          bgAttachment="fixed"
          bgImage={
            "https://www.teahub.io/photos/full/259-2597978_simple-color-background-best.jpg"
          }
        >
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading size={"xl"} mt="12px" textDecoration="underline">
                1- Web 3.0 (Blockchain) and Metaverse Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>
                      W3-351: Developing Smart Contracts and Planet-Scale Web
                      3.0 Dapps
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>
                      MV-361: Developing Planet-Scale and Augmented Metaverse
                      Experiences
                    </Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading size={"xl"} mt="12px" textDecoration="underline">
                2- Artificial Intelligence (AI) and Deep Learning Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>
                      AI-351: Developing Planet-Scale APIs and Python
                      Programming
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>
                      AI-361: Deep Learning and MLOps (Machine Learning
                      Operations)
                    </Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>{" "}
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading size={"xl"} mt="12px" textDecoration="underline">
                3- Cloud-Native Computing Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>
                      CN-351: Certified Kubernetes Application Developer (CKAD)
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>
                      CN-361: Developing Multi-Cloud APIs using CDK for
                      Terraform
                    </Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>{" "}
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading size={"xl"} mt="12px" textDecoration="underline">
                4- Ambient Computing and IoT Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                The Ambient Computing and IoT Specialization focuses on building
                Smart Homes, Offices, Factories, and Cities using Voice
                computing, Matter, and Embedded Devices.
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>
                      AC-351: Ambient Computing with Voice Assistants and Matter
                      Devices
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>
                      AC-361: Embedded Programming using C and Rust
                    </Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>{" "}
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading size={"xl"} mt="12px" textDecoration="underline">
                5- Genomics and Bioinformatics Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                Genomics is the study of the total genetic makeup of individual
                organisms, and how this genetic information is structured,
                functions, and has evolved; bioinformatics encompasses a diverse
                range of analytical methods and tools applied to genomic data.
                This Specialization focus on performing complex bioinformatics
                analysis using the most essential Python libraries and
                applications
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  {" "}
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>Bio-351: Python for Biologists</Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>Bio-361: Bioinformatics with Python</Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>{" "}
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center flexDirection={"column"}>
              <Heading
                size={"xl"}
                mt="12px"
                pt={"18px"}
                textDecoration="underline"
              >
                6- Network Programmability and Automation Specialization
              </Heading>
              <Text mt={"30px"} textAlign="justify" px={[1, 4, 10]}>
                More than ever, network engineers are finding it challenging to
                complete their duties entirely manually. Network automation is
                now crucial due to new protocols, technologies, delivery models,
                and the requirement for enterprises to become more adaptable and
                agile. This course teaches network engineers how to automate
                systems with code using a variety of technologies and tools,
                including Linux, Python, APIs, and Git.
              </Text>
            </Center>
          </RevealWrapper>
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex
                mt={"40px"}
                gap="30px"
                flexDirection={["column", "column", "row"]}
              >
                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>Quarter IV</Heading>
                    <Text mt={"20px"}>
                      NPA-351: CCNA(Cisco Certified Network Ass.) 200-301
                      Certification
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  textAlign={"center"}
                  p="50px"
                  boxShadow={"dark-lg"}
                  borderRadius="80px"
                  width={"350px"}
                  bgColor="white"
                >
                  <RevealWrapper
                    origin="right"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Heading textDecoration={"underline"}>
                      {"   "}
                      <Heading as="span" color="blue">
                        Quarter
                      </Heading>
                      {" V "}
                    </Heading>
                    <Text mt={"20px"}>
                      NPA-361: Network Programmability and Automation
                    </Text>
                  </RevealWrapper>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
        </Container>
      </Box>
    </>
  );
}
