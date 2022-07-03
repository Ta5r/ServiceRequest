import {
  ChakraProvider,
  Select,
  theme,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserDBNavBar from '../../components/UserDBNavBar';

export default function ServiceRequest() {
  const [Category, setCategory] = useState('');
  const [SubCategory, setSubCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [msg, setmsg] = useState('Please fill the following details');
  const navigate = useNavigate();
  const [S_EID,setEID] = useState('');
  const [S_name, setName] = useState('');
  const [S_designation , setdesignation ] = useState('');
  const [S_phone , setphone ] = useState('');
  const [S_sector , setsector ] = useState('');
  const [S_block , setblock ] = useState('');
  const [S_qrtr , setqrtr ] = useState('');

  const handleCategoryChange = e => setCategory(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleSubCategoryChange = e => setSubCategory(e.target.value);
  

  useEffect(() => {
    //Runs only on the first render
    try {
      fetch('/user/dashboard/requestform', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }).then(response => {
        response.json().then(response => {
          console.log(response);

          setEID(response.EID);
          setName(response.name);
          setdesignation(response.designation);
          setphone(response.phone);
          setsector(response.sector);
          setblock(response.block);
          setqrtr(response.qrtr);

        });
      });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  }, []);

  const navigato_UDB = async event => {
    navigate("/user/dashboard");
  }
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const category = Category;
      const subcategory = SubCategory;
      const description = Description;
      const EID = S_EID;
      const name  = S_name;
      const designation = S_designation;
      const phone = S_phone;
      const sector = S_sector;
      const block = S_block;
      const qrtr  = S_qrtr;

      let dat = await axios.post('http://localhost:8000/user/dashboard/request',{
        EID,
        name,
        designation,
        phone,
        sector,
        block,
        qrtr,
        category,
        subcategory,
        description
      });
      console.log(dat);
      console.log("status : "+dat.status);
      if(dat.status==201)
      {
        console.log("Service Request Successfully placed");
        setmsg("Service Request Successfully placed");
      }
      else{
        console.log("Couldn't place Service Request");
      }
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <ChakraProvider theme={theme}>
      <UserDBNavBar name={S_name} />

      <Flex
        minH={'93vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}> Service Request Form</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {msg}
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="complaint-category">
                  <FormLabel>Category</FormLabel>
                  <Select
                    placeholder="Select Category"
                    onChange={handleCategoryChange}
                  >
                    <option value="Civil">Civil</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Horticulture">Horticulture</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="misc">Miscellaneous</option>
                  </Select>
                </FormControl>

                <FormControl id="subcategory">
                  <FormLabel>Complaint</FormLabel>
                  <Select
                    placeholder="Select option"
                    onChange={handleSubCategoryChange}
                  >
                    <option value="testa">testa</option>
                    <option value="testb">testb</option>
                    <option value="testc">testc</option>
                    <option value="testd">testd</option>
                    <option value="testf">testf</option>
                    <option value="testg">testg</option>
                    <option value="testh">testh</option>
                    <option value="teste">teste</option>
                    <option value="testi">testi</option>
                    <option value="testj">testj</option>
                    <option value="testk">testk</option>
                    <option value="testl">testl</option>
                    <option value="testm">testm</option>
                    <option value="testn">testn</option>
                    <option value="testo">testo</option>
                    <option value="testp">testp</option>
                    <option value="testq">testq</option>
                    <option value="testr">testr</option>
                    <option value="tests">tests</option>
                    <option value="testt">testt</option>
                    <option value="testu">testu</option>
                    <option value="testv">testv</option>
                    <option value="testw">testw</option>
                    <option value="testx">testx</option>
                    <option value="testy">testy</option>
                    <option value="testz">testz</option>
                  </Select>
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Please provide a description for the service request."
                    onChange={handleDescriptionChange}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    my={"1rem"}
                    type="submit"
                  >
                    Submit Request
                  </Button>
                </Stack>
              </form>
              <Stack spacing={10}>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={navigato_UDB}
                  >
                    Back to DashBoard
                  </Button>
                </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
