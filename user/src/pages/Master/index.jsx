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

const MasterCard = props => {
  const id = props.id;
  const EID = props.EID;
  const name = props.name;
  const designation = props.designation;
  const sector = props.sector;
  const block = props.block;
  const qrtr = props.qrtr;
  const phone = props.phone;
  const timestamp = props.timestamp;
  const category = props.category;
  const subcategory = props.subcategory;
  const description = props.description;
  const status = props.status;
  const asgnTO_ID = props.asgnTO_ID;
  const asgnTO_name = props.asgnTO_name;
  const asgnTO_contact = props.asgnTO_contact;
  const asgnTO_desig = props.asgnTO_desig;
  const feedback = props.feedback;
  const completedTime = props.completedTime;
  const OTP = props.OTP;
  const adminRemoved = props.adminRemoved;

  return (
    <>
      <br />
      <hr />
      <Text>Complaint ID {id}</Text>
      <b>asgnTO_ID</b> : {asgnTO_ID}, <br />
      <b>asgnTO_name</b> : {asgnTO_name}({asgnTO_desig}), <br />
      <b>asgnTO_contact</b> : {asgnTO_contact}, <br />
      <b>adminRemoved</b> : {adminRemoved}, <br />
      <br />
      <b>timestamp</b> : {timestamp}, <br />
      <b>completedTime</b> : {completedTime}, <br />
      <br />
      <b>EID</b> : {EID}, <br />
      <b>name</b> : {name}({designation})<br />
      <b>phone</b> : {phone}, <br />
      <b>Address</b> : {sector}-{block}/{qrtr}, <br />
      <b>status</b> : {status}, <br />
      <b>Complaint type</b> : {category} || {subcategory}, <br />
      <b>Description</b> : {description}, <br />
      <b>OTP</b> : {OTP}, <br />
      <b>Feedback</b> : {feedback}, <br />
      <hr />
    </>
  );
};

const Master = () => {
  var result = [''];
  const [complaint, setcomplaint] = useState([]);

  const callMaster = async () => {
    try {
      result = await axios.get('http://localhost:8000/master');
      setcomplaint(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Heading>Master dashboard</Heading>
      <br />
      <br />
      <Box>
        <Text fontSize="18px" fontWeight={'bold'}>
          Department Wise complaints
        </Text>
        <br />
        <Text fontSize="20px">Civil</Text>
        {complaint.map(res =>
          res.category.toLowerCase() === 'civil' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <Text fontSize="20px">Electrical</Text>
        {complaint.map(res =>
          res.category.toLowerCase() === 'electrical' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <Text fontSize="20px">Telecom</Text>
        {complaint.map(res =>
          res.category.toLowerCase() === 'telecom' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <Text fontSize="20px">Internet</Text>
        {complaint.map(res =>
          res.category.toLowerCase() === 'internet' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <br />
      </Box>
      <Box>
        <Text fontSize="24px" fontWeight={'bold'}>
          Sector Wise complaints
        </Text>
        <Text fontSize="20px">A</Text>
        {complaint.map(res =>
          res.sector.toLowerCase() === 'a' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <Text fontSize="20px">B</Text>
        {complaint.map(res =>
          res.sector.toLowerCase() === 'b' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <Text fontSize="20px">C</Text>
        {complaint.map(res =>
          res.sector.toLowerCase() === 'c' ? (
            <MasterCard
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
              feedback="Feedback"
              completedTime={res.completedTime}
              OTP={res.OTP}
              adminRemoved={res.adminRemoved}
            />
          ) : null
        )}
        <br />
        <br />
        <br />
      </Box>
      <Button onClick={callMaster}>Click me</Button>
    </ChakraProvider>
  );
};

export default Master;
