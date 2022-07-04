import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const SRCard = props => {
  const asgnTO_ID = props.asgnTO_ID;
  const asgnTO_designation = props.asgnTO_designation;
  const asgnTO_name = props.asgnTO_name;
  const timestamp = props.timestamp;
  const status = props.status;
  const subcategory = props.subcategory;
  const description = props.description;
  const phone = props.phone;
  var color = 'white';

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
          <GridItem bgColor="blue.200" w="100%" h="15">
            <Text fontWeight={'bold'} fontSize="18px">
              {asgnTO_designation}-{asgnTO_name}
            </Text>
          </GridItem>
          <GridItem w='100%' bgColor="blue.200" h='15' textAlign={"center"}><Link href={`tel:${phone}`}>{phone}</Link></GridItem>
          <GridItem w="100%" bgColor="blue.200" h="15" textAlign={'center'}>
            {timestamp}
          </GridItem>
          <GridItem w="50%" bgColor="blue.200" h="15" textAlign={'center'}>
            {asgnTO_ID}
          </GridItem>
          <GridItem w="50%" bgColor="blue.200" h="15" textAlign={'center'}>
            {status}
          </GridItem>
          <GridItem w="50%" bgColor="blue.200" h="15" textAlign={'center'}>
            {subcategory}
          </GridItem>
          <GridItem bgColor="blue.200" w="100%" h="15" textAlign={'center'}>
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
