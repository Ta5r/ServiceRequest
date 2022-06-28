import React from 'react';
import {
  ChakraProvider,
  Text,
  Stack,
  Flex,
  Button,
  Image,
  Heading,
  theme
} from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                // height: useBreakpointValue({ base: '20%', md: '30%' }),
                // height : {variant},
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              RDSO - IOW Dept
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
             SERVICE REQUEST
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            This platform is an exclusive resource for residents of RDSO Colony
             Lucknow. It provides a simple solution of placing serivce requests.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Login
            </Button>
            <Button rounded={'full'}>Admin</Button>
            <Button rounded={'full'}>Employee</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'IOW-IMAGE'}
          objectFit={'cover'}
          h='100vh'
          w='50vw'
          src={
            'https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-714.jpg?w=2000'
          }
        />
      </Flex>
    </Stack>
    </ChakraProvider>
  );
}

export default App;
