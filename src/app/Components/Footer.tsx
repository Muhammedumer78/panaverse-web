"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import png from "../../../public/logo.png";
export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container maxW={2000}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          spacingX={"30px"}
          spacingY={"30px"}
          py={"40px"}
          columns={[1, 1, 1, 4]}
        >
          <Box bg="black">
            <Heading pt={"20px"} pb="20px" color="yellow">
              About Us
            </Heading>
            <Image width={190} height={190} src={png} alt="Panaverse"></Image>
            <Text fontWeight={"bold"} pt={"15px"} pr={"90px"} color={"white"}>
              The Future of the Web is 3.0,Metaverse,and Edge
              Computing.Panaverse DAO is a movement to spread these technologies
              globally.It is a community of Web3 and Metaverse
              developers,designers,trainers,startup founders and service
              providers.
            </Text>
          </Box>
          <Box>
            <Heading pt={10} color={"white"}>
              Useful Links
            </Heading>
            <Grid pt="20px" color={"white"}>
              <Link href={""}>Home</Link>
              <Link href={""}>Syllabus</Link>
              <Link href={""}>Explore</Link>
              <Link href={""}>About</Link>
              <Link href={""}>Contact</Link>
            </Grid>
          </Box>
          <Box bg={"black"}>
            <Heading pt={"40px"} color={"white"}>
              Follow Us
            </Heading>
            <Grid pt="20px" color={"white"}>
              <Link href={""}>Facebook</Link>
              <Link href={""}>Linkedin</Link>
              <Link href={""}>Github</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>Youtube</Link>
            </Grid>
          </Box>
          <Box bg="black">
            <Grid pt="20px" color={"white"}>
              <Heading pb="20px" pt={"20px"} color={"white"}>
                Contact Us
              </Heading>
              <Link href={"Contact"}>+92 123-4567890</Link>
              <Link href={"Contact"}>abcdefgh@gmail.com</Link>
              <Link href={"Contact"}>Karachi,Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
