// <container> component provides max width property. Max width a box can have.
// Boxes inside a box can be aligned horizontally by wrapping in <Flex>, <Grid> or <SimpleGrid>

// We keep our images in public directory
// We can name anything in import statement of image. We will have to provide this name in <image> tag as a variable.

"use client";
import React from "react";
import {
  Box,
  SimpleGrid,
  Container,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png";

export default function Header() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxWidth={1400}>
        <SimpleGrid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          <Box>
            <Image
              src={Logo}
              alt="panaverse-logo"
              height={150}
              width={150}
            ></Image>
          </Box>
          <Flex
            color={"black"}
            fontSize={{ base: "15px", lg: "20px" }}
            fontWeight="semibold"
            gap={10}
            placeItems={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/syllabus"}>Syllabus</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/contact"}>Contact</Link>
          </Flex>
          <Box pt={9} display={{ base: "none", lg: "initial" }}>
            <Link href={"https://portal.piaic.org/"}>
              <Button
                size={"md"}
                bg={"#e9b3e9"}
                float={"right"}
                fontSize={{ base: "10px", lg: "15px" }}
                fontWeight={"semibold"}
                mb={"30px"}
              >
                Login/Signup
              </Button>
            </Link>
          </Box>

          <Box display={{ base: "initial", lg: "none" }} pt="15px">
            <Menu>
              <MenuButton
                float={"right"}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  <Link href={"/"}>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/about"}>About</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/syllabus"}>Syllabus</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/explore"}>Explore</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/contact"}>Contact us</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
