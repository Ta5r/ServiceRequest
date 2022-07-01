import React from 'react';
import Card from '../layouts/Card';
import { Link, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

const ECard = (props) => {
    return (
    <div>
        <Card
        py="1rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="60vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: "200px" }}
        bg="white"
        position="relative">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
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

export default ECard;