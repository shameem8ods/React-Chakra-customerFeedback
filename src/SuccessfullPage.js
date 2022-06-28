import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function SuccessfullPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
    <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
    <Heading as="h2" size="xl" mt={6} mb={2} fontSize='20px'>
      Submitted succesfully
    </Heading>
    <Text color={'gray.500'}>
      Thank your for your valueble feedback...
    </Text>
  </Box>
  )
}

export default SuccessfullPage