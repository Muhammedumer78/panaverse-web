"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Header() {
  return (
    <>
      <Box boxShadow="lg">
        <Container maxW={1400}>
          <SimpleGrid
            columns={[1,1,1,3]}
          >
            <SimpleGrid   columns={[2]}>
            <Box w={"100px"} h={"50px"} my={"auto"}>
              <Image src={logo} alt="panaverse-logo"></Image>
            </Box>
            <Box
         
              pb={"5px"}
              pt={"20px"}
              float="right"
              display={{ base: "initial", lg: "none" }}
            >
              <Menu>
                <MenuButton
                  bg={"yellow"}
                  _hover={{ bg: "green.500" }}
                  float="right"
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <Link href={"/"}> Home</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/syllabus"}>Syllabus</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href={"/about"}>About</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/contact"}> Contact</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/explore"}> Explore</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            </SimpleGrid>
            <Flex
              my={"auto"}
              display={{ lg: "flex", base: "none" }}
              placeItems="c"
              color={"black"}
              gap={25}
              fontSize={18}
              fontWeight="semibold"
            >
              <Link href="/" color="yellow">
                Home
              </Link>
              <Link href="/syllabus" color="yellow">
                Syllabus
              </Link>
              <Link href={"/explore"} color="yellow">
                Explore
              </Link>
              <Link href="/about" color="yellow">
                About
              </Link>
              <Link href="/contact" color="yellow">
                Contact
              </Link>
            </Flex>
            <Flex justify="flex-end" align="center">
              <Box display={{ lg: "initial", base: "none" }}>
                <Link href={"https://portal.piaic.org/"}>
                  <Button
                    m={"10px"}
                    size={"lg"}
                    float="right"
                    colorScheme={"messenger"}
                    _hover={{ bg: "red.500" }}
                    borderRadius="50px"
                  >
                    Apply
                  </Button>
                </Link>
              </Box>
              <Box display={{ lg: "initial", base: "none" }}>
                <Link href={"https://github.com/panaverse"}>
                  <Button
                    m={"10px"}
                    size={"lg"}
                    float="right"
                    colorScheme={"messenger"}
                    borderRadius="50px"
                    _hover={{ bg: "red.500" }}
                  >
                    Github
                  </Button>
                </Link>
              </Box>
            </Flex>
          
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
