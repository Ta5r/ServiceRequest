import axios from 'axios';
import { React, useState } from 'react';
import {
  ChakraProvider,
  theme,
  Button,
  Text,
  Box,
  Heading, 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import MasterModalBox from '../../components/layouts/MasterModalBox';
import { SimpleGrid } from '@chakra-ui/react';
import FadeInUp from '../../components/Animation/FadeInUp';


const Master = () => {
  var result = [''];
  const [complaint, setcomplaint] = useState([]);
  const [allAdmin, setAllAdmin] = useState([]);
  const callMaster = async () => {
    try {
      result = await axios.get('http://localhost:8000/master');
      setcomplaint(result.data);
      console.log(result.data);
      allAdmins();
    } catch (err) {
      console.log(err);
    }
  };

  const allAdmins = async () => {
    try {
      result = await axios.get('http://localhost:8000/get/admin');
      setAllAdmin(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Heading
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        p={"2rem"}
        px={"4rem"}
        bgColor={"#e5e6e7"}
        >Master dashboard</Heading>
      <br />
      <Button onClick={callMaster} mx={"6rem"}>Refresh</Button>
      <br />
      <Box>
      <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Reported complaints
        </Text>
        <br />

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.master === true ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
      </Box>
      <br />
      <br />
      <br />
      <Box>
      <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Department Wise complaints
        </Text>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >Civil</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.category.toLowerCase() === 'civil' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >Electrical</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.category.toLowerCase() === 'electrical' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >Telecom</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.category.toLowerCase() === 'telecom' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >Internet</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.category.toLowerCase() === 'internet' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <br />
      </Box>
      <Box>
      <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Sector Wise complaints
        </Text>
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >SECTOR - A</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.sector.toLowerCase() === 'a' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >SECTOR - B</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.sector.toLowerCase() === 'b' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >SECTOR - C</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacingY="50px" mx={'6rem'}>
          {complaint.map(res =>
            res.sector.toLowerCase() === 'c' ? (
              <MasterModalBox
                id={res._id} //complaint id
                EID={res.EID} //emp id
                name={res.name}
                designation={res.designation}
                sector={res.sector}
                block={res.block}
                qrtr={res.qrtr}
                phone={res.phone}
                timestamp={res.timestamp}
                category={res.category}
                subcategory={res.subcategory}
                description={res.description}
                status={res.status}
                asgnTO_ID={res.asgnTO_ID} //admin id
                asgnTO_name={res.asgnTO_name}
                asgnTO_contact={res.asgnTO_contact}
                asgnTO_desig={res.asgnTO_desig}
                feedback={res.feedback}
                completedTime={res.completedTime}
                OTP={res.OTP}
                adminRemoved={res.adminRemoved}
              />
            ) : null
          )}
        </SimpleGrid>
        <br />
        <br />
        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Engineers on Duty
        </Text>
        <br />
        <Box
        id="A_admin"
        >

        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Sector A
        </Text>
          </Box>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "A" && res.department==="CIVIL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "A" && res.department==="ELECTRICAL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "A" && res.department==="TELECOM")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "A" && res.department==="INTERNET")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>


        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Sector B
        </Text>

        
       
        <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "B" && res.department==="CIVIL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
        <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "B" && res.department==="ELECTRICAL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "B" && res.department==="TELECOM")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "B" && res.department==="INTERNET")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>



        <br />
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Sector C
        </Text>

        
       
        <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "C" && res.department==="CIVIL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
        <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "C" && res.department==="ELECTRICAL")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "C" && res.department==="TELECOM")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>
              
              <SimpleGrid columns={[2, 3, 4, 6]} spacingY="50px" mx={'6rem'} pb={"5rem"}>
                {allAdmin.map(res => (
                  (res.sector.toUpperCase() === "C" && res.department==="INTERNET")?
                  (<Box
                    py="2rem"
                    px="1.5rem"
                    width="13vw"
                    borderRadius="16px"
                    boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                    height={{ sm: '150px' }}
                    _hover={{
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}
                    position="relative"
                  >
                    {res.name}({res.designation})
                    <br/>
                    {res.AID}
                    <br/>
                    {res.department}
                    <br/>
                  </Box>):null
                ))}
              </SimpleGrid>



        <br />
        <AddAdmins/>
      </Box>
      <Button onClick={callMaster}>Click me</Button>
    </ChakraProvider>
  );
};

const AddAdmins = () =>{
  const [msg, setmsg] = useState('Please fill in the following details');
  const [AID, setAID] = useState('209301');
  const [password, setPassword] = useState('123456');
  const [cpassword, setCpassword] = useState('123456');  
  const [phone, setContact] = useState('9140426929');
  const [sector, setSector] = useState('');
  const [email, setEmail] = useState('');
  const [designation,setDesig] = useState('JE');
  const [department, setDepartment] = useState('');  
  const [name, setName] = useState('');
  const [stat, setStat] = useState('Register User');

  const handleAIDChange = e => setAID(e.target.value);
  const handlepasswordChange = e => setPassword(e.target.value);
  const handleCpasswordChange = e => setCpassword(e.target.value);
  const handleContactChange = e => setContact(e.target.value);
  const handleSector = e => setSector(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleDesigChange = e => setDesig(e.target.value);
  const handleDeptChange = e => setDepartment(e.target.value);
  const handleNameChange = e => setName(e.target.value);


  const handleSubmit = async event => {
    event.preventDefault();
    console.log(AID);
    console.log(password);

    try {
      let dat = await axios.post('http://localhost:8000/admin/register', {
        AID,
        name,
        email,
        phone,
        password,
        cpassword,
        sector,
        department,
        designation,
      });

      // console.log(dat.data.admin);
      // const stringToken = '' + dat.data.token;
      // console.log('String Token : ' + stringToken);
      // setToken(dat.data.token);
      // console.log(dat.data.token);

      if (dat.status === 201) {
        setmsg('Successful Registration');
        setStat('Registered');
        setTimeout(() => {
          setStat('Register User')
        }, 2000);

      
      } else {
        setStat('Registration Failed');
        setmsg('Registration Failed');
        setTimeout(() => {
          setStat('Register User')
        }, 2000);
      }
      console.log('status for admin : ' + dat.status);
    } catch (error) {
      setmsg('Registration Failed');

      console.log(error);
    }
  };

  return(
    <ChakraProvider theme={theme}>
      <FadeInUp>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.10', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Add Engineers</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Add engineers on duty to handle more service requests
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
                <FormControl id="AID">
                    <FormLabel>UNIQUE ADMIN ID</FormLabel>
                    <Input
                      type="text"
                      id="AID"
                      value={AID}
                      onChange={handleAIDChange}
                    />
                  </FormControl>
                  <FormControl id="Contact">
                    <FormLabel>Contact</FormLabel>
                    <Input
                      type="text"
                      id="AID"
                      value={phone}
                      onChange={handleContactChange}
                    />
                  </FormControl>
                  <FormControl id="Name">
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      id="Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </FormControl>
                  <FormControl id="Desig">
                    <FormLabel>Designation</FormLabel>
                    <Input
                      type="text"
                      id="Desig"
                      value={designation}
                      onChange={handleDesigChange}
                    />
                  </FormControl>
                  <FormControl id="AID">
                    <FormLabel>Department</FormLabel>
                    <Input
                      type="text"
                      id="AID"
                      value={department}
                      onChange={handleDeptChange}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Sector</FormLabel>
                    <Input
                      type="text"
                      id="secot"
                      value={sector}
                      onChange={handleSector}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
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
                  <FormControl id="cpassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      id="password"
                      value={cpassword}
                      onChange={handleCpasswordChange}
                    />
                  </FormControl>
                  <Stack spacing={10} mt={"1rem"}>
                    
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="submit"
                    >
                      {stat}
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

export default Master;
