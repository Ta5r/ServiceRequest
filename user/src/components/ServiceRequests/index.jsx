import React from 'react';
import SRCard from '../ServiceRequests/SRCard';
import Requests from '../../Static/StaticReq';
import { Text } from '@chakra-ui/react';
const ServiceRequests = (props) => {
  
  const sector=props.sector;
    return (
        <>
    <Text
    fontWeight={"bold"}
    fontSize="38px"
    my="4rem"
    mx="5rem"
    >
        Pending Requests of SECTOR {sector}
    </Text>
    {
        Requests.map(req=>(
        req[17]===""&&req[4]===sector
      ? (<SRCard req={req}/>)
      : null            
    ))}
    <Text
    fontWeight={"bold"}
    fontSize="38px"
    mt="4rem"
    mx="5rem"
    >
        Completed Requests of Sector {sector}
    </Text>
    <Text
    fontSize="16px"
    my="1rem"
    mx="5rem">
      Will automatically removed after 24hours.
    </Text>
    {
        Requests.map(req=>(
        req[11]==="Completed"&&req[4]===sector
      ? (<SRCard req={req}/>)
      : null            
    ))}
        </>
  )
}

export default ServiceRequests;