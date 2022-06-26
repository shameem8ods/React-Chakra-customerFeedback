import React from 'react'
import {Flex, Img} from '@chakra-ui/react'

function CradLeft() {
  return (
    <Flex  w={'100%'} height={'100%'}  justifyContent='center' alignItems={'center'}>
        <Flex w={['85%','60%']} h='max-content' direction={'column'} justifyContent='center' alignItems={'center'}>
        <Img src='https://amer247.com/wp-content/uploads/2021/02/amerlogo.png' h='20%' w={['70%','80%']} mb='20px' mt={['30px','0px']} className='animate fadeInUp one'></Img>
        <Flex fontSize={['14px','17px']} fontWeight='500' >
          <h1 >
          Amer 247 is a Semi Government Organization, which allows residents to complete all Visa and Residency transactions.Amer 24/7 is the first and only center available 24/7 to assist you with our services
          </h1></Flex>
        </Flex>
    
    </Flex>
  )
}

export default CradLeft