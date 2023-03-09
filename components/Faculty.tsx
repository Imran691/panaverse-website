import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { facultyData } from "./FacultyData";
import { RevealList } from  'next-reveal'

export default function Faculty() {
  return (
    <>
      <Box>
        <RevealList interval={60} delay={500}  className='flex flex-wrap items-center justify-center'>
        <Container maxW={1400}>
          <Center>
            <Heading pb={"20px"}>Faculty Members</Heading>
          </Center>
          <Flex flexDirection={{base:"column", lg:"row"}}>
           {facultyData.map( (fac) => (
            <Box key={fac.id}>
                <center>
                    <Image borderRadius={"full"} width={90} height={90} src={fac.src}></Image>
                </center>
                <Heading textAlign={"center"} size={"md"}>{fac.heading}</Heading>
                <Text px="30px" fontSize={"sm"} textAlign="center">{fac.text}</Text>
            </Box>
           ))}
          </Flex>
        </Container>
        </RevealList>
      </Box>
    </>
  );
}
