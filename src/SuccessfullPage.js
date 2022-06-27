import React from 'react'
import {Flex} from '@chakra-ui/react'

function SuccessfullPage() {
  return (
<Flex className="App" bgGradient={'linear(to-b, #fff, rgba(255,150,105,1))'} height='100vh'  justifyContent={'center'} alignItems='center' direction={'column'}>
    <Flex fontSize={'20px'} fontWeight={500} color='green'>Submitted Successfully</Flex>
    <Flex>Thank you for your feedback...</Flex>
 </Flex>
  )
}

export default SuccessfullPage