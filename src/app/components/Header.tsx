// <container> component provides max width property. Max width a box can have.
// Boxes inside a boc can be aligned horizontally by wrappin in <Flex>, <Grid> or <SimpleGrid>

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
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <ChakraProvider>
      <Box boxShadow={"lg"}>
        <Container maxWidth={1750}>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }}>
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
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
