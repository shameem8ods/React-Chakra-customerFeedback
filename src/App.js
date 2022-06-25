import { Flex ,Box} from '@chakra-ui/react';
import './App.css';
import CradLeft from './components/CradLeft';
import CardRight1 from './components/CardRight1';

function App() {
  return (
    <Flex className="App" backgroundColor={['linear(to-b, #fff, rgba(255,150,105,1))','gray.300']} height='100vh' justifyContent={'center'} alignItems='center' >
      <Box boxShadow='dark-lg' rounded='md' bg='white' backgroundColor={'white'} w={['100%','80%',]} h={['100%','90%']} blur='2px' filter='auto' bgGradient={['linear(to-b, #fff, rgba(255,150,105,1))','linear(to-r, #fff, rgba(255,150,105,1))']}>
        <Flex h='100%' direction={['column','column','row']}>
        <CradLeft/>
        <CardRight1/>
        </Flex>
        
      </Box>
    </Flex>
  );
}

export default App;
