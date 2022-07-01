import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

const SRCard = (props) => {
    var color="white";

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
        height={{ sm: "200px" }}
        bg={color}
        position="relative">
        
        
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
            <GridItem w='100%' h='15'  >
            <Text
            fontWeight={"bold"}
            fontSize="18px">
            {props.req[3]}-{props.req[2]}
            </Text>
            </GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[5]}/{props.req[6]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"}>{props.req[7]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[8]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[9]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[10]}</GridItem>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='100%' h='15'  >
            <Text
            fontWeight={"bold"}
            fontSize="18px">
            {props.req[14]}-{props.req[13]}
            </Text>
            </GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[15]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[16]}</GridItem>
        </Grid>
        
        
        {/* <Link to="#" color={"blue"} >
            DETAILS
        </Link> */}
        </Card>
    </div>
  )
}

export default SRCard;