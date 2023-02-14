import { Box, Container, Heading, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Pic1 from "../../../public/pic-1.png";
import Pic2 from "../../../public/pic-2.png";
import React from "react";

export default function Home() {
  return (
    <>
      <Box>
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "150px", base: "30px" }}
            pb={100}
            px={{ lg: "40px", base: "5px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"} px={5}>
              <Heading pb={18} fontSize={40} textAlign={"left"}>
                Prepare yourself for next generation of internet with Panaverse
              </Heading>
              <Text
                pb={18}
                fontSize={18}
                fontWeight={"semibold"}
                textAlign={"justify"}
              >
                One year Panaverse DAO earn while you learn programme.
                Consolidating Web-3, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing and Internet Of Things(IOT)
              </Text>
              <Button
                size={"md"}
                m={8}
                bg={"#e9b3e9"}
                fontSize={{ base: "15px", lg: "20px" }}
                fontWeight={"semibold"}
                float={{ lg: "left", base: "right" }}
              >
                More Info
              </Button>
            </Box>
            <Box flexBasis={"50%"}>
              <Image src={Pic1} alt="pic-1" height={800} width={800}></Image>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "150px", base: "30px" }}
            pb={100}
            px={{ lg: "40px", base: "5px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"}>
              <Image src={Pic2} alt="pic-2" height={800} width={800}></Image>
            </Box>
            <Box flexBasis={"50%"} px={5}>
              <Heading pb={18} fontSize={40} textAlign={"left"}>
                Programme of studies
              </Heading>
              <Text
                pb={18}
                fontSize={18}
                fontWeight={"semibold"}
                textAlign={"justify"}
              >
                This curriculum is intended for brginners who want to learn
                software development from scratch. It is going to be a fifteen
                months hybrid programme including both onsite and online classes
                and is divided into five quarters of 13 weeks each. The emphasis
                will on hands-on learning by educating students to produse
                projects.
              </Text>
              <Button
                size={"md"}
                m={8}
                bg={"#e9b3e9"}
                fontSize={{ base: "15px", lg: "20px" }}
                fontWeight={"semibold"}
                float={{ lg: "left", base: "right" }}
              >
                More Info
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
