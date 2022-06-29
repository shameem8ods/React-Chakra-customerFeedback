import React from 'react'
import { useState } from 'react'
import { Flex, Img, Box, Textarea, Button, Input,Icon } from '@chakra-ui/react'
import ReactStars from "react-rating-stars-component";
import {BsEmojiFrown,BsEmojiNeutral,BsEmojiSmile,BsEmojiLaughing,BsStar} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import env from "react-dotenv";





function CardRight1({language}) {
  const schema = yup.object().shape({
    nme: yup.string().required(),
    mobile: yup.string().matches(new RegExp('[0-9]{9}'))
  });
  
  const { register, formState: { errors },handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();
  const[staff,setStaff] = useState()
  const[visistAgain,setVisitAgain] = useState()
  const[overall,setOverall] = useState()
  const[review,setReview] = useState()

  
  const[staffError,setStaffError] = useState(false)
  const[visitError,setVisitError] = useState(false)
  const[overollError,setOverollError] = useState(false)
  

  const [isLoading,setIsLoading]=useState(false)

  const[selected,setSelected] = useState({
    veryBad : '#ffffff78',
    bad : '#ffffff78',
    average : '#ffffff78',
    happy : '#ffffff78'
  })
  const ratingChanged = (e) => {
    setStaff(e)
    if(e){
      setStaffError(false)
    }
  };
  const ratingChanged2 = (e) => {
    setVisitAgain(e)
    if(e){
      setVisitError(false)
    }
  };


  const handleError=()=>{
    if (!staff) {
      setStaffError(true)
    }  else {
      setStaffError(false)
    }
    
    if (!visistAgain ) {
      setVisitError(true)
    } else{
      setVisitError(false)
    }
    
    if (!overall) {
      setOverollError(true)
    } else {
      setOverollError(false)
    }
  }

  const onSubmit=(formData)=>{
    if(staff && visistAgain && overall ){
      setIsLoading(true)
      let data={
        name:formData.nme,
        mobile:formData.mobile,
        staff:staff,
        visistAgain:visistAgain,
        overall:overall,
        comment:review,
        key: env.KEY
      }
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    try{
      fetch('https://amer-backend.herokuapp.com', requestOptions)
      .then(response => {
        if(response.status == 200){
          setIsLoading(false)
          console.log('submitted successfully')
          navigate(`/successful`);
        } else {
          setIsLoading(false)
          console.log('an error occured pls try after some time')
          navigate(`/error`);
        }
      } )
    }catch(err){
      setIsLoading(false)
  console.log(err)
    }
    
          
        
    }
     
   
  }

  const handleBorder = (item) =>{
     setOverollError(false)
    setOverall(item)
    if(item == 'veryBad'){
      setSelected({
        veryBad : '#00c31a',
        bad : '#ffffff78',
        average : '#ffffff78',
        happy : '#ffffff78'
      })
    } else if(item == 'bad'){
      setSelected({
        veryBad : '#ffffff78',
        bad : '#00c31a',
        average : '#ffffff78',
        happy : '#ffffff78'
      })

    } else if(item == 'average'){
      setSelected({
        veryBad : '#ffffff78',
        bad : '#ffffff78',
        average : '#00c31a',
        happy : '#ffffff78'
      })
      
    } else if(item == 'happy'){
      setSelected({
        veryBad : '#ffffff78',
        bad : '#ffffff78',
        average : '#ffffff78',
        happy : '#00c31a'
      })
    }
  }

  
 
  return (
    isLoading?
    <Flex w='100%' h='100vh' justifyContent={'center'} alignItems='center'>
      <Flex  direction={'column'} width='max-content' backgroundColor={'white'} borderRadius='10px' padding={'10px'} height='max-content' justifyContent={'center'} alignItems='center'> 

      <Flex>
      <Flex mb='8px'>Please wait...</Flex>
      <Flex mb='8px'>submitting your feedback</Flex>
      </Flex>
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
      </Flex>
     
    </Flex>


    :<Flex direction={'column'} w={'100%'} pt='50px' justifyContent={'center'} alignItems={['center', 'flex-start']}>
    <form onSubmit={handleSubmit(onSubmit)}>
    {
      language == 'arabic'?
      <Flex p={'0px 30px 20px 30px'} textAlign='left' fontWeight={'500'}  fontSize={['14px','18px']} display='column'>
      Listening to customers has always been important to us. Your feedback will help us better serve people like you!<br></br>
      <Flex justifyContent={'flex-end'} fontSize={['17px','21px']} textAlign='right'>
      حرصاً من شركتنا على رفع مستوى الأداء، نرجو منكم تعبئة استبيان تقييم الخدمات هذا
      </Flex>
      
      </Flex>
     : <Flex p={'0px 30px 20px 30px'} textAlign='left' fontWeight={'500'} fontSize={['14px','18px']} >
      Listening to customers has always been important to us. Your feedback will help us better serve people like you!
      In order to enhance our services, we request you to please submit this short survey. 
      </Flex>
     
    }
    <Flex position={'relative'} w='100%' p={['20px']} direction={'column'}>
      <Input type={'text'} zIndex={0} backgroundColor='#ffffff78' w={'100%'} h='50px' pt='10px' {...register("nme")}  />
      {errors.nme&&<p style={{'position': 'absolute',
    'font-size': '12px',
    'right': '31px','color':'#7f6f6f','zIndex':'999'}}>pls enter your name <span style={{'color':'red'}}>*</span></p>}
     {
       language == 'arabic'?
         <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'58px'} left={['29px']} fontSize={['14px', '17px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>الاسم</Box>
        :<Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'59px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Your Name </Box>
     }
    </Flex>
    <Flex position={'relative'} w='100%' p={['20px']} >
      <Box position={'absolute'} top='38px' left={'35px'} zIndex='999' color={'#7f6f6f'}>+971</Box>
      <Input  backgroundColor='#ffffff78' w={'100%'} h='50px' pt='10px' pl='50px' type="tel" zIndex={'0'}
      {...register("mobile")}  />
      {errors.mobile&&<p style={{'position': 'absolute',
    'font-size': '12px',
    'right': '31px','color':'#7f6f6f','zIndex':'999'}}>pls enter a valid number<span style={{'color':'red'}}>*</span></p>}
      {
        language == 'arabic'?
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'58px'} left={['29px']} fontSize={['14px', '17px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>رقم الموبايل</Box>
        :<Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'59px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Your Mobile Number</Box>
      }
    </Flex>

    {
      language == 'arabic'?
      <Flex fontSize={['21px', '25px']} fontWeight='500' mb='10px' mt='10px' justifyContent={'right'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
       ما تقييمك لجودة موظف خدمة العملاء؟
    </Flex>
    :<Flex fontSize={['18px', '22px']} fontWeight='500' mb='10px' mt='10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
    How do you rate overall performance of the Counter Staff?
  </Flex>
    }
    <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px' position={'relative'}>
      <Box background='#ffffff78'
        borderRadius='20px'
        padding='0px 10px' className='animate fadeInUp one zoom'>
       <ReactStars
          count={5}
          onChange={(e)=>ratingChanged(e)}
          size={24}
          activeColor="#00c31a"
        />
      </Box>
      {
        staffError ?
        <Flex fontSize={'12px'} color='#7f6f6f' position={'absolute'} bottom='-18px' left={'42px'}>Pls put your rating<span style={{'color':'red'}}>*</span></Flex>
        :''
      }
      
    </Flex>

    {
      language == 'arabic'?
      <Flex fontSize={['21px', '25px']} fontWeight='500' mb='10px' mt='30px' justifyContent={'right'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
      ما مدى احتمالية زيارتك لمركزنا مرة أخرى؟
      </Flex>
      :<Flex fontSize={['18px', '22px']} fontWeight='500' mb='10px' mt='30px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'}>
      How likely are you to visit the center again?
      </Flex>
    }
    <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px' position={'relative'}>
      <Box background='#ffffff78'
        borderRadius='20px'
        padding='0px 10px' className='animate fadeInUp one zoom'>
        <ReactStars
          count={5}
          onChange={(e)=>ratingChanged2(e)}
          size={24}
          activeColor="#00c31a"
        />
      </Box>
      {
        visitError ?
        <Flex fontSize={'12px'} color='#7f6f6f' position={'absolute'} bottom='-18px' left={'42px'}>Pls put your rating<span style={{'color':'red'}}>*</span></Flex>
        :''
      }
    </Flex>

    {
      language == 'arabic'?
      <Flex fontSize={['21px', '25px']} fontWeight='500' m='30px 0px 10px' justifyContent={'right'} padding={['0px 30px;']} textAlign='left' w={'100%'} >
      كيف تم تقديم الخدمة بشكل عام؟
    </Flex>
    :<Flex fontSize={['18px', '22px']} fontWeight='500' m='30px 0px 10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'} >
      How was the overall service Provided?
    </Flex>
    }
    <Flex justifyContent={'left'} alignItems='center' w={'100%'} pl={['30px']} className='animate fadeInUp one ' position={'relative'} flexWrap='wrap'>
      <Box background={'#ffffff78'} rounded='md' p={['10px 13px 15px', '10px 15px 15px']} mr='10px' position={'relative'}  className=' zoom' onClick={()=>handleBorder('veryBad')} border='2px' borderColor={selected.veryBad} mb='20px'>
        {/* <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-without-mouth_1f636.png' w={['46px', '67px']} m={['0 auto']}></Img> */}
        <Icon as={BsEmojiFrown}  w={['46px', '67px']}  h={['46px', '67px']} m={['0 auto']} color='red'/>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['5px', '9px']} fontSize={['11px', '15px']} >Very Bad</Box>
      </Box>
      <Box background={'#ffffff78'} rounded='md' p={['10px 13px 15px', '10px 15px 15px']} mr=' 10px' position={'relative'}   className=' zoom' onClick={()=>handleBorder('bad')} border='2px' borderColor={selected.bad} mb='20px'>
        {/* <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/expressionless-face_1f611.png' w={['46px', '67px']} m={['0 auto']}></Img> */}
        <Icon as={BsEmojiNeutral}  w={['46px', '67px']}  h={['46px', '67px']} m={['0 auto']} color='#ff6500'/>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['17px', '28px']} fontSize={['11px', '15px']} >Bad</Box></Box>
      <Box background={'#ffffff78'} rounded='md' p={['10px 13px 15px', '10px 15px 15px']} mr='10px' position={'relative'}   className=' zoom' onClick={()=>handleBorder('average')} border='2px' borderColor={selected.average} mb='20px'>
        {/* <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/relieved-face_1f60c.png' w={['46px', '67px']} m={['0 auto']}></Img> */}
        <Icon as={BsEmojiSmile}  w={['46px', '67px']}  h={['46px', '67px']} m={['0 auto']} color='#b6990e'/>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['7px', '13px']} fontSize={['11px', '15px']} >Average</Box></Box>
      <Box background={'#ffffff78'} rounded='md' p={['10px 13px 15px', '10px 15px 15px']} mr='10px' position={'relative'}  className=' zoom' onClick={()=>handleBorder('happy')} border='2px' borderColor={selected.happy} mb='20px'>
        {/* <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-smiling-eyes_1f60a.png' w={['46px', '67px']} m={['0 auto']}></Img> */}
        <Icon as={BsEmojiLaughing}  w={['46px', '67px']}  h={['46px', '67px']} m={['0 auto']} color='green'/>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['11px', '19px']} fontSize={['11px', '15px']} >Happy</Box></Box>
        {
        overollError ?
        <Flex fontSize={'12px'} color='#7f6f6f' position={'absolute'} bottom='-12px' left={'32px'}>Pls select preferred one<span style={{'color':'red'}}>*</span></Flex>
        :''
      }
    </Flex>
    <Flex mt={['25px']} justifyContent={'flex-start'} position='relative' w={'100%'} p={['30px']}>
      {
        language == 'arabic'?
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' left={['38px']} top={['20px']} fontSize={['14px', '17px']}  className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>في حال كان لديك أي ملاحظات أخرى، يرجى تركها هنا</Box>
        :<Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' left={['38px']} top={['20px']} fontSize={['11px', '15px']}  className='animate fadeInUp one' zIndex={'999'} fontWeight='500'>Please share any additional comments</Box>
      }
      <Textarea w={['100%']} backgroundColor='#ffffff78' height={'225px !important'} pt={['15px','22px']} onChange={(e)=>setReview(e.target.value)}></Textarea>
    </Flex>
    <Flex justifyContent={['center']} w='100%' >
      <Flex position={'relative'} width='max-content'>
      <Button m={['50px 0px 50px;']} borderRadius={['50px']} backgroundColor='white' type='submit' onClick={handleError}>Submit</Button>
      </Flex>
      
    </Flex>
    </form>
  </Flex>
  )
}

export default CardRight1