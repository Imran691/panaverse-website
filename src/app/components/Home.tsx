import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box>
        <Container maxW={1400} bgImage={hello.src} py="200px" bgSize="cover" bgAttachment={"fixed"}>
            <Heading color="black" size="2xl">{hello.title}</Heading>
        </Container>
    </Box>
  )
}
