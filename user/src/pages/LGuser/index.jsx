import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FadeInUp from '../../components/Animation/FadeInUp';

export default function LoginUser() {
  const navigate = useNavigate();
  const [EID, setEID] = useState('90875');
  const [password, setpassword] = useState('21062002');
  const [msg, setmsg] = useState('');
  const [token, setToken] = useState('');
  const handleEIDChange = e => setEID(e.target.value);
  const handlepasswordChange = e => setpassword(e.target.value);

  useEffect(() => {
    localStorage.setItem('tokenID', token);
  }, [token]);

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(EID);
    console.log(password);

    try {
      let dat = await axios.post('http://localhost:8000/user/login', {
        EID,
        password,
      });
      console.log('data : ' + dat.data);
      console.log(dat.data.user);
      const stringToken = '' + dat.data.token;
      console.log('String Token : ' + stringToken);
      setToken(dat.data.token);
      console.log(dat.data.token);
      console.log('status : ' + dat.status);
      if (dat.status === 200) {
        setmsg('SUCCEFULL SIGNIN !');
        setTimeout(() => {
          navigate('/user/dashboard');
        }, 2000);
      } else {
        setmsg('INCORRECT CREDENTIALS');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <FadeInUp>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                User Login
              </Text>
              <Text>{msg}</Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                  <FormControl id="EID">
                    <FormLabel>Employee ID</FormLabel>
                    <Input
                      id="EID"
                      type="text"
                      value={EID}
                      onChange={handleEIDChange}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlepasswordChange}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </FadeInUp>
    </ChakraProvider>
  );
}
