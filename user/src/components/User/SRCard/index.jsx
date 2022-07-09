import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text, Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import ModalBox from '../../layouts/ModalBox';
import FadeInUp from '../../Animation/FadeInUp';

const SRCard = props => {
  var color = 'white';
  var statusColor = 'blue.200';

  var completedTime = props.completedTime.slice(0, 25);
  const asgnTO_desig = props.asgnTO_desig;
  const asgnTO_contact = props.asgnTO_contact;
  const asgnTO_name = props.asgnTO_name;
  const timestamp = props.timestamp.slice(0, 25);
  const status = props.status.toUpperCase();
  const description = props.description;
  const subcategory = props.subcategory;
  const OTP = props.OTP;
  const phone = props.asgnTO_contact;
  const category = props.category;

  if (completedTime === '') {
    completedTime = '-- --';
  }
  if (status === 'PENDING') {
    statusColor = 'yellow.300';
  }

  return (
    <FadeInUp>
      <Card
        py="3rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="80vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: '200px' }}
        bg={color}
        position="relative"
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={10}>
          <GridItem
            w="100%"
            bgColor={statusColor}
            textAlign={'center'}
            verticalAlign={'middle'}
            h={"30px"}
            borderRadius={"50px"}
          >
            <Text>{status}</Text>
          </GridItem>
          <GridItem w="200%">
            <Text fontWeight={'bold'} fontSize="18px">
              Mr.{asgnTO_name} <br /> ({asgnTO_desig})
            </Text>
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            <Link href={`tel:${asgnTO_contact}`}>
              <b>Call</b>
              <br />
              {asgnTO_contact}
            </Link>
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            {subcategory}
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            {timestamp.slice(4, 16)}
          </GridItem>
          <GridItem w="50%" textAlign={'center'}>
            OTP:
            <br />
            <b>{OTP}</b>
          </GridItem>
          <ModalBox
            status={status}
            name={asgnTO_name}
            phone={phone}
            OTP={OTP}
            timestamp={timestamp}
            completedTime={completedTime}
            description={description}
            category={category}
            subcategory={subcategory}
          />
        </Grid>
        <br />
        <br />
      </Card>
    </FadeInUp>
  );
};

export default SRCard;
