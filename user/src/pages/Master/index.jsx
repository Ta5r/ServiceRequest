import axios from 'axios';
import { React, useState } from 'react';
import {
  ChakraProvider,
  theme,
  Button,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react';

import MasterModalBox from '../../components/layouts/MasterModalBox';
import { SimpleGrid } from '@chakra-ui/react';

// const MasterCard = props => {
//   const id = props.id;
//   const EID = props.EID;
//   const name = props.name;
//   const designation = props.designation;
//   const sector = props.sector;
//   const block = props.block;
//   const qrtr = props.qrtr;
//   const phone = props.phone;
//   const timestamp = props.timestamp;
//   const category = props.category;
//   const subcategory = props.subcategory;
//   const description = props.description;
//   const status = props.status;
//   const asgnTO_ID = props.asgnTO_ID;
//   const asgnTO_name = props.asgnTO_name;
//   const asgnTO_contact = props.asgnTO_contact;
//   const asgnTO_desig = props.asgnTO_desig;
//   const feedback = props.feedback;
//   const completedTime = props.completedTime;
//   const OTP = props.OTP;
//   const adminRemoved = props.adminRemoved;

//   // <MasterModalBox />;

//   return (
//     <>
//       <Box
//         py="3rem"
//         px="2rem"
//         width="20vw"
//         borderRadius="16px"
//         boxShadow="0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
//         height={{ sm: '300px' }}
//         _hover={{
//           boxShadow:
//             '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         }}
//         position="relative"
//       >
//         {/* <Text>Complaint ID {id}</Text> */}
//         {/* <b>asgnTO_ID</b> : {asgnTO_ID}, <br /> */}
//         {asgnTO_name}({asgnTO_desig}) , {asgnTO_contact} <br />
//         {/* <b>adminRemoved</b> : {adminRemoved}, <br /> */}
//         <br />
//         {/* {timestamp}<br/> {completedTime}, <br /> */}
//         {/* <br /> */}
//         {/* <b>EID</b> : {EID}, <br /> */}
//         {/* <b>name</b> : {name}({designation})<br /> */}
//         <b>phone</b> : {phone}, <br />
//         <b>Address</b> : {sector}-{block}/{qrtr}, <br />
//         <b>status</b> : {status}, <br />
//         <b>Complaint type</b> : {category} || {subcategory}, <br />
//         {/* <b>Description</b> : {description}, <br /> */}
//         {/* <b>OTP</b> : {OTP}, <br /> */}
//         <b>Feedback</b> : {feedback}, <br />
//       </Box>
//     </>
//   );
// };

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
            res.master == true ? (
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
        <Text
        fontSize={"26px"}
        fontWeight={"bold"}
        my={"2rem"}
        mx={"6rem"}
        >
          Sector A
        </Text>
              
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
      </Box>
      <Button onClick={callMaster}>Click me</Button>
    </ChakraProvider>
  );
};

export default Master;
