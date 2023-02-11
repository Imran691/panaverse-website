import { Box, ChakraBaseProvider, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <ChakraBaseProvider>
      <Box p={{base:"50px", sm:"75px", lg:"100px"}}>
        <Box pt={"45px"}>
          <Heading
            textAlign={{ base: "left", sm: "left", lg: "center" }}
            fontSize={{ base: "10px", sm: "20px", lg: "50px" }}
            fontWeight={"bold"}
          >
            Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
            Karachi, Lahore, Islamabad, and Peshawar
          </Heading>
        </Box>
        <Box pt={{base:"20px", sm:"30px", lg:"45px"}}>
          <Text
            textAlign={{ base: "left", sm: "left", lg: "center" }}
            fontSize={{ base: "7px", sm: "15px", lg: "30px" }}
            fontWeight="bold"
          >
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
        </Box>
        <Box pt={{base:"20px", sm:"30px", lg:"45px"}}>
          <Text
            textAlign={{ base: "left", sm: "left", lg: "center" }}
            fontSize={{ base: "5px", sm: "10px", lg: "20px" }}
            fontWeight={"semibold"}
          >
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
        </Box>
        <Box pt={{base:"20px", sm:"30px", lg:"45px"}}>
          <Text
            textAlign={{ base: "left", sm: "left", lg: "center" }}
            fontSize={{ base: "5px", sm: "10px", lg: "20px" }}
            fontWeight={"semibold"}
          >
            The internet is without a doubt the most important technological
            development in human history. Web3 and metaverse technologies expand
            the internet as we know it by introducing novel features and
            advancements. Metaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, cloud computing,
            voice computing, ambient computing, and more. Citi is the latest
            Wall Street business to give a positive prognosis for Web 3.0 and
            the Metaverse, terms used to depict a future internet vision centred
            on decentralised technologies and virtual worlds. Citi stated in a
            March 2022 research paper that the metaverse economy might have a
            total addressable market of up to $13 trillion and five billion
            people by 2030.
          </Text>
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
}
