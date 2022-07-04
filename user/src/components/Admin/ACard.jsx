import React from 'react';
import Card from '../layouts/Card';
import ToBeClosed from '../layouts/ToBeClosed/index.jsx';
import Closed from '../layouts/Closed/index.jsx';
import { Link, Text, Button, ChakraProvider, theme } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';

const ACard = props => {
  const EID = props.EID;
  const name = props.name;
  const designation = props.designation;
  const id = props.id;
  const sector = props.sector;
  const block = props.block;
  const qrtr = props.qrtr;
  const phone = props.phone;
  const completedTime = props.completedTime;
  const timestamp = props.timestamp;
  const status = props.status;
  const category = props.category;
  const subcategory = props.subcategory;
  const description = props.description;

  const handleCloseReq = () => {
    var password = prompt('Password');
    if (password == EID) {
      console.log('Can Close req : ' + id);
      axios.post('http://localhost:8000/admin/close',{
        id
      }).then(response => {console.log(response)});
      try {
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Wrong PIN');
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Card
        py="3rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="90vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: '150px' }}
        bg="white"
        position="relative"
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={3}>
          <GridItem w="100%" h="15" textAlign={'center'} fontWeight={'bold'}>
            Mr.{name} ( {designation} ){' '}
          </GridItem>
          <GridItem w="50%" h="15">
            <Text fontSize="18px">
              {sector}-{block}/{qrtr}
            </Text>
          </GridItem>
          <GridItem w="50%" h="15" textAlign={'center'}>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {subcategory}
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {description}
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {status}
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
              {
                (status.toLowerCase() == 'pending')?<Button onClick={handleCloseReq}>Close Request</Button>:<Closed/>
            }
            
          </GridItem>
        </Grid>
      </Card>
    </ChakraProvider>
  );
};

export default ACard;
