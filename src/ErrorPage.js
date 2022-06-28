import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  let navigate = useNavigate();
  const handleNavigate=()=>{
    navigate(`/`)
  }
  return (
    <Box textAlign="center" py={10} px={6}>
    <Box display="inline-block">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={'red.500'}
        rounded={'50px'}
        w={'55px'}
        h={'55px'}
        textAlign="center">
        <CloseIcon boxSize={'15px'} color={'white'} />
      </Flex>
    </Box>
    <Heading as="h2" size="xl" mt={6} mb={2} fontSize='20px'>
      An error occured
    </Heading>
    <Text color={'gray.500'}>
      Pls try again....
    </Text>
  </Box>
  )
}

export default ErrorPage