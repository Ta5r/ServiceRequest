import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const SRCard = props => {
  var color = 'white';
  var statusColor= "blue.200"
  // const EID=props.EID;
  // const name=props.name;
  // const designation=props.designation;
  // const sector=props.sector; 
  // const block=props.block;
  // const qrtr=props.qrtr;
  // const feedback=props.feedback;
  // const category=props.category;
  // const phone=props.phone;
  // const asgnTO_ID=props.asgnTO_ID;

  
  var completedTime=props.completedTime;
  const asgnTO_desig=props.asgnTO_desig;
  const asgnTO_contact=props.asgnTO_contact;
  const asgnTO_name=props.asgnTO_name;
  const timestamp=props.timestamp;
  const status=props.status.toUpperCase();
  const description=props.description;
  const subcategory=props.subcategory;
  
  if(completedTime===""){completedTime="-- --"}
  if(status==="PENDING"){statusColor="yellow.300"}
  return (
    <div>
      <Card
        py="3rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="60vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: '200px' }}
        bg={color}
        position="relative"
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={6}>
          <GridItem w="100%" h="15">
            <Text fontWeight={'bold'} fontSize="18px">
              {asgnTO_desig}-{asgnTO_name}
            </Text>
          </GridItem>
          <GridItem w='100%' h='15' textAlign={"center"}><Link href={`tel:${asgnTO_contact}`}>{asgnTO_contact}</Link></GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {timestamp}
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {completedTime}
          </GridItem>
          <GridItem w="100%" bgColor={statusColor} h="15" textAlign={'center'}>
            {status}
          </GridItem>
          <GridItem w="50%" h="15" textAlign={'center'}>
            {subcategory}
          </GridItem>
          <GridItem w="100%" h="15" textAlign={'center'}>
            {description}
          </GridItem>
        </Grid>
        <br />
        <br />
      </Card>
    </div>
  );
};

export default SRCard;
