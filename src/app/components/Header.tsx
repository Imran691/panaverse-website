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
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Header() {
  return (
      <Box boxShadow={"lg"}>
        <Container maxWidth={1750}>
          <SimpleGrid
            templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          >
            <Box>
              <Image
                src={"/Logo.png"}
                alt={"panaverse-logo"}
                height={"120"}
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
              <Link href={"/"}>Syllabus</Link>
              <Link href={"/"}>Explore</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </Flex>
            <Box pt={9} display={{ base: "none", lg: "initial" }}>
              <Button
                size={"lg"}
                colorScheme={"gray"}
                float={"right"}
                fontSize={{ base: "15px", lg: "20px" }}
                fontWeight={"semibold"}
              >
                Login/Signup
              </Button>
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
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Syllabus</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact us</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
  );
}
