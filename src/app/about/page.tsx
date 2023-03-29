"use client";
import {
  Text,
  Heading,
  Box,
  Flex,
  Container,
  Image,
  Button,
  theme
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import React from "react";
import Home from "../Components/Home";
import logo from "../../../public/logo23.webp";
import president from "../../../public/president.webp";
import ziakhan from "../../../public/ziakhan.png";
import Instructor from "../Components/Instructor";
import RevealList from "next-reveal/dist/esm/components/RevealList";
export default function About() {
  return (
    <>
      <Home
        title="About"
        src="https://wallpapers.com/images/featured/1ovz9er6jk6otp61.jpg"
      />
      <Box>
        <Container maxW={1400}>
          <Flex
            my={"50px"}
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"}>
            <RevealList interval={60} origin='left' delay={200} duration={1000} distance='500px' reset={true} >
              <Image
                mx={"auto"}
                height={"360"}
                width={"320"}
                src="/president.webp"
                alt="President"
              />
              </RevealList>
            </Box>
            <Box flexBasis={"50%"}>
            <RevealList interval={60} origin='right' delay={200} duration={1000} distance='500px' reset={true} >
            <Heading
              
                
              textDecoration={"underline"}
              textAlign="center"
            >
              {"Dr. "}
              <Heading as="span" color="blue">
               Arif Alvi
              </Heading>

              {""}
            </Heading>
              <Text mt={"6px"} gap={{ base: "30px", lg: "20px" }}textAlign="justify">
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text mt={"6px"} gap={{ base: "30px", lg: "20px" }}textAlign="justify">
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
              </Text>
              <Text mt={"6px"} gap={{ base: "30px", lg: "20px" }} textAlign="justify">
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also the author of
                a book, theses, and many articles.
              </Text>
              <Button mt={"15px"} bgColor="black" color={"white"} size="md">
                More Info
              </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            my={"50px"}
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"} >
            <RevealList interval={60} origin='left' delay={200} duration={1000} distance='500px' reset={true} >
            <Heading
              
            
              textDecoration={"underline"}
              textAlign="center"
            >
              {" "}
              <Heading as="span" color="blue" >
               Panaverse
              </Heading>

              {" DAO"}
            </Heading>
              <Text mt={"15px"} gap={{ base: "30px", lg: "20px" }}textAlign="justify">
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet
              </Text>
             
            </RevealList>
            </Box>
            <Box flexBasis={"50%"} m={"auto"}>
            <RevealList interval={60} origin='right' delay={200} duration={1000} distance='500px' reset={true} >
              <Image
                pl="15px"
                mx="auto"
                src="/logo23.webp"
                alt="Panaverse"
                width={{ lg: 450, base: 200 }}
                height={{ lg: 280, base: 150 }}
              />

              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex
            my={"50px"}
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"}>
            <RevealList interval={60} origin='left' delay={200} duration={1000} distance='500px' reset={true} >
              <Image
                m={"auto"}
                height={"360"}
                width={"320"}
                src="/ziakhan.png"
                alt="Zia Khan"
              />
              </RevealList>
            </Box>
            <Box flexBasis={"50%"}>
            <RevealList interval={60} origin='right' delay={200} duration={1000} distance='500px' reset={true} >
            <Heading
              
                size="2xl"
              textDecoration={"underline"}
              textAlign="center"
            >
              {" Zia "}
              <Heading as="span" color="blue" size="2xl">
               Khan
              </Heading>

              {""}
            </Heading>
              <Text mt={"12px"} gap={{ base: "30px", lg: "20px" }}textAlign="justify">
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
              </Text>

              <Text mt={"6px"} gap={{ base: "30px", lg: "20px" }}textAlign="justify">
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text>
            </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructor/>
    </>
  );
}
