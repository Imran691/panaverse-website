import { Box, Container, Heading, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Pic1 from "../../../public/pic-1.png";
import Pic2 from "../../../public/pic-2.png";
import Home from "./Home";
import React from "react";
import { RevealWrapper } from "next-reveal";

export default function Banner() {
  return (
    <>
    <Home
        title="Home"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXUQnqy9Ax5hIfW0JYA-GDAia_ioQM4Qg4Q&usqp=CAU"
      ></Home>

      <Box>
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "100px", base: "20px" }}
            // pb={100}
            px={{ lg: "40px", base: "10px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"} px={5}>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading pb={10} fontSize={30} textAlign={"left"}>
                  Prepare yourself for next generation of internet with
                  Panaverse
                </Heading>
                <Text pb={10} fontSize={15} textAlign={"justify"}>
                  One year Panaverse DAO earn while you learn programme.
                  Consolidating Web-3, Metaverse, Artificial Intelligence (AI),
                  Cloud, Edge, Ambient Computing and Internet Of Things(IOT).
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
              </RevealWrapper>
            </Box>
            <Box flexBasis={"50%"}>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image src={Pic1} alt="pic-1" height={800} width={800}></Image>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "100px", base: "20px" }}
            pb={100}
            px={{ lg: "40px", base: "5px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"50%"}>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image src={Pic2} alt="pic-2" height={800} width={800}></Image>
              </RevealWrapper>
            </Box>
            <Box flexBasis={"50%"} px={5}>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading pb={18} fontSize={30} textAlign={"left"}>
                  Programme of studies
                </Heading>
                <Text pb={18} fontSize={15} textAlign={"justify"}>
                  This curriculum is intended for brginners who want to learn
                  software development from scratch. It is going to be a fifteen
                  months hybrid programme including both onsite and online
                  classes and is divided into five quarters of 13 weeks each.
                  The emphasis will on hands-on learning by educating students
                  to produse projects.
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
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
