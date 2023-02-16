import {
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
    <Box bg={"#161016"} textColor="white">
      <Container maxWidth={1400} paddingY="30px">
        <SimpleGrid
          gap={10}
          py={"10px"}
          fontSize={{ base: "15px", lg: "20px" }}
          fontWeight="semibold"
          textAlign={{ base: "center", lg: "left" }}
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <Box>
            <Heading fontSize={"20px"}> About us</Heading>
            <Text
              align={{ lg: "left", base: "left" }}
              pr={{ base: "0", lg: "20px" }}
              pt={10}
              fontSize="15px"
            >
              Future of the web is Web-03, Metaverse and edge computing.
              Panaverse DAO is a movement to spred these technologies globally.
              It is a community of Web-03 and Metaverse developers, designers,
              trainers, startup founders and services providers.
            </Text>
          </Box>
          <Box>
            <Heading fontSize={"20px"}>Useful Links</Heading>
            <Grid pt={"50px"} fontSize="15px" pr={"30px"}>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/syllabus"}>Syllabus</Link>
              <Link href={"/explore"}>Explore</Link>
              <Link href={"/contact"}>Contact</Link>
            </Grid>
          </Box>
          <Box>
            <Heading fontSize={"20px"}>Follow us</Heading>
            <Grid pt={"50px"} fontSize="15px">
              <Link href={"https://web.facebook.com/groups/piaic"}>
                Facebook
              </Link>
              <Link href={"https://twitter.com/piaicofficial"}>Twitter</Link>
              <Link
                href={
                  "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A28761257&keywords=piaic&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=4db5f94d-58ee-4b85-9574-1daee00ae334&sid=8h8"
                }
              >
                LinkedIn
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCu8v7dLyAix44NXjKCNNgRA"
                }
              >
                Youtube
              </Link>
              <Link href={"https://github.com/panaverse"}>GitHub</Link>
            </Grid>
          </Box>
          <Box>
            <Heading fontSize={"20px"}>Conatct us</Heading>
            <Grid pt={"50px"} fontSize="15px">
              <Link href={"/"}>+92 21 123464899</Link>
              <Link href={"/"}>abc@panaverse.com</Link>
              <Link href={"/"}>Karachi, Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
