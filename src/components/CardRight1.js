import React from 'react'
import { useEffect } from 'react'
import { Flex, Img, Box, Textarea, Button, Input } from '@chakra-ui/react'
import ReactStars from "react-rating-stars-component";


function CardRight1() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Flex direction={'column'} w={'100%'} pt='50px' justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Flex p={'0px 30px 20px 30px'} textAlign='left' fontWeight={'500'} fontSize={['14px','18px']}>
        Listening to customers has always been important to us. Your feedback will help us better serve people like you!
        In order to enhance our services, we request you to please submit this short survey. 
          </Flex>
      <Flex position={'relative'} w='100%' p={['20px']}>
        <Input type={'text'} backgroundColor='#ffffff78' w={'100%'} h='50px' pt='10px' />
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'59px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Your Name </Box>
      </Flex>
      <Flex position={'relative'} w='100%' p={['20px']} >
        <Input type={'text'} backgroundColor='#ffffff78' w={'100%'} h='50px' pt='10px'/>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'59px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Your Mobile Number</Box>
      </Flex>

      <Flex fontSize={['18px', '22px']} fontWeight='500' mb='10px' mt='10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
        How do you rate overall performance of the Counter Staff?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px'>
        <Box background='#ffffff78'
          borderRadius='20px'
          padding='0px 10px' className='animate fadeInUp one zoom'>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#00c31a"
          />
        </Box>
      </Flex>

      <Flex fontSize={['18px', '22px']} fontWeight='500' mb='10px' mt='30px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
      How likely are you to visit the center again?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px'>
        <Box background='#ffffff78'
          borderRadius='20px'
          padding='0px 10px' className='animate fadeInUp one zoom'>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#00c31a"
          />
        </Box>
      </Flex>

      <Flex fontSize={['18px', '22px']} fontWeight='500' m='30px 0px 10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'} >
        How was the overall service Provided?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} pl={['30px']} className='animate fadeInUp one '>
        <Box background={'#ffffff78'} rounded='md' p={['10px 13px 20px', '10px 15px 20px']} mr='10px' position={'relative'}  className=' zoom'>
          <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-without-mouth_1f636.png' w={['46px', '67px']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['5px', '9px']} fontSize={['11px', '15px']} >Very Bad</Box>
        </Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 13px 20px', '10px 15px 20px']} mr=' 10px' position={'relative'}   className=' zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/expressionless-face_1f611.png' w={['46px', '67px']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['17px', '28px']} fontSize={['11px', '15px']} >Bad</Box></Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 13px 20px', '10px 15px 20px']} mr='10px' position={'relative'}   className=' zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/relieved-face_1f60c.png' w={['46px', '67px']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['7px', '13px']} fontSize={['11px', '15px']} >Average</Box></Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 13px 20px', '10px 15px 20px']} mr='10px' position={'relative'}  className=' zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-smiling-eyes_1f60a.png' w={['46px', '67px']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['11px', '19px']} fontSize={['11px', '15px']} >Happy</Box></Box>
      </Flex>
      <Flex mt={['50px']} justifyContent={'flex-start'} position='relative' w={'100%'} p={['30px']}>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' left={['38px']} top={['20px']} fontSize={['11px', '15px']}  className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Please share any additional comments</Box>
        <Textarea w={['100%']} backgroundColor='#ffffff78' height={'225px !important'} pt='10px'></Textarea>
      </Flex>
      <Flex justifyContent={['center']} w='100%'>
        <Button m={['50px 0px 50px;']} borderRadius={['50px']} backgroundColor='white'>Submit</Button>
      </Flex>
    </Flex>
  )
}

export default CardRight1