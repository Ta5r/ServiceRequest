import {
    ChakraProvider,
    Select,
    theme,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Textarea,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ServiceRequest() {
    return (
        <ChakraProvider theme={theme}>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}> Service Request Form</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Please fill the following form
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>

            <FormControl id="complaint-category">
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select option'>
  <option value='Civil'>Civil</option>
  <option value='Electrical'>Electrical</option>
  <option value='Horticulture'>Horticulture</option>
  <option value='Plumbing'>Plumbing</option>
  <option value='misc'>Miscellaneous</option>
</Select>
              </FormControl>

              <FormControl id="subcategory">
                <FormLabel>Complaint</FormLabel>
                <Select placeholder='Select option'>
  <option value='Civil'>Civil</option>
  <option value='Electrical'>Electrical</option>
  <option value='Horticulture'>Horticulture</option>
  <option value='Plumbing'>Plumbing</option>
  <option value='misc'>Miscellaneous</option>
</Select>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Description</FormLabel>
                <Textarea placeholder='Please provide a description for the service request.' />
              </FormControl>
              <Stack spacing={10}>
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Submit Request
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        </ChakraProvider>
    );
  }