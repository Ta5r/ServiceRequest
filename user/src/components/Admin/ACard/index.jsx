import React from 'react';
import Card from '../../layouts/Card';
import Closed from '../Closed/';
import { Link, Text, Button, ChakraProvider, theme } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import FadeInUp from '../../Animation/FadeInUp';

const ACard = props => {
  const EID = props.EID;
  const OTP = props.OTP
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
    if (password == OTP) {
      console.log('Can Close req : ' + id);
      axios
        .post('http://localhost:8000/admin/close', {
          id,
        })
        .then(res => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
    } else {
      alert('Wrong PIN');
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <FadeInUp>
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
          <Grid templateColumns="repeat(8, 1fr)" gap={3}>
            <GridItem w="100%" h="15" textAlign={'center'} fontWeight={'bold'}>
              Mr.{name} ({designation}){' '}
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
              {timestamp.slice(0,25)}
            </GridItem>
            <GridItem w="100%" h="15" textAlign={'center'}>
              {
                (status.toLowerCase() == 'pending')?"Pending":completedTime.slice(0,25)
              }
            </GridItem>
            <GridItem w="100%" h="15" textAlign={'center'}>
              {status.toLowerCase() == 'pending' ? (
                <Button onClick={handleCloseReq}>Close Request</Button>
              ) : (
                <Closed cid={id} />
              )}
            </GridItem>
          </Grid>
        </Card>
      </FadeInUp>
    </ChakraProvider>
  );
};

export default ACard;
