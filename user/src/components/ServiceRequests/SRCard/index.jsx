import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

const SRCard = (props) => {
    var color="white";
    if(props.req[2]==="Civil")
    {
         color = "#d1b394";
    }
    else 
    if(props.req[2]==="Electrical")
    {
         color = "#e6df87";
    }
    else
    if(props.req[2]==="Horticulture")
    {
         color = "#86e39a";
    }
    else
    if(props.req[2]==="Plumbing")
    {
         color = "#9bb5e8";
    }
    else
    {
        color = "#e8e7e6"
    }
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
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='15'  >
            <Text
            fontWeight={"bold"}
            fontSize="18px">
            {props.req[0]}
            </Text>
            </GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[1]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"}>{props.req[2]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[3]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[4]}</GridItem>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Link to="#" color={"blue"} >
            DETAILS
        </Link>
        </Card>
    </div>
  )
}

export default SRCard;