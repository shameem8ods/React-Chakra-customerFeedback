import React from 'react'
import {Flex, Img,H1} from '@chakra-ui/react'

function CradLeft({language}) {
  return (
    <Flex  w={'100%'} height={'100%'}  justifyContent='center' alignItems={'center'}>
        <Flex w={['85%','60%']} h='max-content' direction={'column'} justifyContent='center' alignItems={'center'}>
          <Flex justifyContent={'center'} alignItems='center' width={'100%'} className='animate fadeInUp one' m={'30px 0px 15px'}> 
          <Img src='https://www.smartnts.ae/wp-content/uploads/2017/11/small-logo-150x150.png' h='20%' w={['30%','20%']}   ></Img>
          <Flex h={'62px'} w='1px' m='0px 5px' backgroundColor={'#808080d4'}></Flex>
          <Img src='https://www.smartnts.ae/wp-content/uploads/2019/03/99044-1-6.png' h='20%' w={['40%','25%']}   ></Img>
          </Flex>
        
        <Flex  fontWeight='500' direction={'column'} justifyContent={'center'} alignItems='center'>
        {
          language == 'arabic'?
          <Flex fontSize={['25px','32px']} fontWeight='600'>
          استبيان تقييم خدمات
          </Flex>
           :<Flex fontSize={['22px','28px']} fontWeight='600'>
           Customer Satisfaction Survey
           </Flex>
}
          <Flex fontSize={['14px','20px']} fontWeight='500'>
               SMART NTS GOVERNMENT TRANSACTIONS CENTER
          </Flex>
          
          
          
          </Flex>
        </Flex>
    
    </Flex>
  )
}

export default CradLeft