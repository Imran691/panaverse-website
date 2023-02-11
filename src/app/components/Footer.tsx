import {
  ChakraProvider,
  Box,
  SimpleGrid,
  Container,
  Heading,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <ChakraProvider>
      <Box bg={"gray.700"} textColor="white">
        <Container maxWidth={1700} paddingY="30px">
          <SimpleGrid
            gap={"30px"}
            py={"20px"}
            fontSize={{ base: "15px", lg: "20px" }}
            fontWeight="semibold"
            textAlign={{ base: "center", lg: "left" }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            <Box>
              <Heading fontSize={"25px"}> About us</Heading>
              <Text align={"justify"} pr={{ base: "0", lg: "30px" }} pt={10}>
                Future of the web is Web-03, Metaverse and edge computing.
                Panaverse DAO is a movement to spred these technologies
                globally. It is a community of Web-03 and Metaverse developers,
                designers, trainers, startup founders and services providers.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={"25px"}>Useful Links</Heading>
              <Grid pt={"50px"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Syllabus</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
              </Grid>
            </Box>
            <Box>
              <Heading fontSize={"25px"}>Follow us</Heading>
              <Grid pt={"50px"}>
                <Link href={"/"}>Twitter</Link>
                <Link href={"/"}>LinkedIn</Link>
                <Link href={"/"}>Youtube</Link>
                <Link href={"/"}>GitHub</Link>
              </Grid>
            </Box>
            <Box>
              <Heading fontSize={"25px"}>Conatct us</Heading>
              <Grid pt={"50px"}>
                <Link href={"/"}>+92 21 123464899</Link>
                <Link href={"/"}>abc@panaverse.com</Link>
                <Link href={"/"}>Karachi, Pakistan</Link>
              </Grid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
