import React from 'react';
import Card from '../layouts/Card';
import { Link, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

const ECard = (props) => {
    return (
    <div>
        <Card
        py="3rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="40vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: "150px" }}
        bg="white"
        position="relative">
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>
            <GridItem w='100%' h='15' textAlign={"center"}>{props.req[0]}</GridItem>
            <GridItem w='100%' h='15' >
                <Text
                fontWeight={"bold"}
                fontSize="18px">
                    {props.req[1]}
                </Text>
            </GridItem>
            <GridItem w='100%' h='15' textAlign={"center"}>{props.req[2]}</GridItem>
            <GridItem w='100%' h='15' textAlign={"center"} >{props.req[3]}</GridItem>
        <GridItem w='100%' h='15' textAlign={"center"}>
        <Link to="#" color={"blue"} >
            DETAILS
        </Link>
            </GridItem>
        </Grid>
        </Card>
    </div>
  )
}

export default ECard;