import React from 'react'
import { useEffect } from 'react'
import {Flex,Img,Box,Textarea, Button} from '@chakra-ui/react'

function CardRight1() {

  return (
    <Flex direction={'column'}  w={['100%','55%',]} pt='50px' justifyContent={'center'} alignItems={['center','flex-start']}>
        <Flex fontSize={['25px','38px']} fontWeight='600' mb='30px' justifyContent={'center'}>
        How was the service Provided?
        </Flex>
        <Flex justifyContent={'center'} alignItems='center'>
            <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px','10px 15px 20px']} mr='10px' position={'relative'}>
            <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-without-mouth_1f636.png' w={['75%','100%']} m={['0 auto']}></Img>
            <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['5px','9px']} fontSize={['11px','15px']}>Very Bad</Box>
            </Box>  
            <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px','10px 15px 20px']} mr=' 10px'  position={'relative'}><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/expressionless-face_1f611.png' w={['75%','100%']} m={['0 auto']}></Img>
            <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['17px','28px']} fontSize={['11px','15px']}>Bad</Box></Box>
            <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px','10px 15px 20px']} mr='10px'  position={'relative'}><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/relieved-face_1f60c.png' w={['75%','100%']} m={['0 auto']}></Img>
            <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['7px','13px']} fontSize={['11px','15px']}>Average</Box></Box>
            <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px','10px 15px 20px']} mr='10px'  position={'relative'}><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-smiling-eyes_1f60a.png' w={['75%','100%']} m={['0 auto']}></Img>
            <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['11px','19px']} fontSize={['11px','15px']}>Happy</Box></Box>
        </Flex>
        <Flex mt={['50px','80px']} justifyContent={'flex-start'} position='relative' w={'100%'} p={['20px','0px']}>
            <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' left={['28px','10px']} top={['10px','-10px']} fontSize={['11px','15px']} zIndex={'999'}>Your Review</Box>
            <Textarea w={['100%','520px']} backgroundColor='#ffffff78' height={'225px !important'}></Textarea>
        </Flex>
        <Flex justifyContent={['center','flex-end']} w='100%'>
          <Button m={['50px 0px 50px;','100px 0px 0px;']} borderRadius={['50px','50px 0px 0px 50px']} backgroundColor='white'>Next Question</Button>
        </Flex>
    </Flex>
  )
}

export default CardRight1