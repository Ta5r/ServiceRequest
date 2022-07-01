import React from 'react';
import SRCard from '../ServiceRequests/SRCard';
import Requests from '../../Static/StaticReq';
import { Text } from '@chakra-ui/react';
const ServiceRequests = () => {
    return (
        <>
        
    <Text
    fontWeight={"bold"}
    fontSize="38px"
    my="4rem"
    mx="5rem"
    >
        Pending Requests
    </Text>
    {
        Requests.map(req=>(
        req[4]==="Pending"
      ? (<SRCard req={req}/>)
      : null            
    ))}
    <Text
    fontWeight={"bold"}
    fontSize="38px"
    my="4rem"
    mx="5rem"
    >
        Completed Requests
    </Text>
    {
        Requests.map(req=>(
        req[4]==="Completed"
      ? (<SRCard req={req}/>)
      : null            
    ))}
        </>
  )
}

export default ServiceRequests;