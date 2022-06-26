import { Flex ,Box} from '@chakra-ui/react';
import './App.css';
import CradLeft from './components/CradLeft';
import CardRight1 from './components/CardRight1';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    
    <Flex className="App" backgroundColor={['linear(to-b, #fff, rgba(255,150,105,1))','gray.300']}  justifyContent={'center'} alignItems='center' >
      <Box boxShadow='dark-lg' rounded='md' bg='white' backgroundColor={'white'} w={['100%','60%',]} h={['100%','90%']} blur='2px' filter='auto' bgGradient={'linear(to-b, #fff, rgba(255,150,105,1))'}>
        <Flex h='100%' direction='column'>
        <CradLeft/>
        <CardRight1/>
        </Flex>
        
      </Box>
    </Flex>
  );
}

export default App;
