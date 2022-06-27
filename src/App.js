import { Flex ,Box,Select} from '@chakra-ui/react';
import './App.css';
import CradLeft from './components/CradLeft';
import CardRight1 from './components/CardRight1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';

function App() {
  const [language,SetLanguage] = useState('english')
  AOS.init()
  return (
    
    <Flex className="App" backgroundColor={['linear(to-b, #fff, rgba(255,150,105,1))','gray.300']}  justifyContent={'center'} alignItems='center' direction={'column'}>
      
      <Box boxShadow='dark-lg' rounded='md' bg='white' backgroundColor={'white'} w={['100%','60%',]} h={['100%','90%']} blur='2px' filter='auto' bgGradient={'linear(to-b, #fff, rgba(255,150,105,1))'}>
        
        <Flex h='100%' direction='column'>
        <Select placeholder='Language' w={['30%','15%']} margin='20px 0px 0px 20px' backgroundColor={'gray.200'} borderRadius={'20px'} h='30px' onChange={(e)=>SetLanguage(e.target.value)}>
        <option value='english'>English</option>
        <option value='arabic'>Arabic</option>
      </Select>
        <CradLeft language={language}/>
        <CardRight1 language={language}/>
        </Flex>
        
      </Box>
    </Flex>
  );
}

export default App;
