import React from 'react'
import { Text } from '@chakra-ui/react';
import ECard from './ECard';
import Employees from '../../Static/Employee';
const Employee = () => {
  return (
    <>
        
    <Text
    fontWeight={"bold"}
    fontSize="38px"
    my="4rem"
    mx="5rem"
    >
    Employees
    </Text>
    
    <Text
    fontWeight={"bold"}
    fontSize="20px"
    my="4rem"
    mx="5rem"
    >
    Civil Team
    </Text>

    {
        Employees.map(req=>(
        req[2]==="Civil"
      ? (<ECard req={req}/>)
      : null            
    ))}
    
    
    <Text
    fontWeight={"bold"}
    fontSize="20px"
    my="4rem"
    mx="5rem"
    >
    Waterworks Team
    </Text>
    
    {
        Employees.map(req=>(
        req[2]==="Plumbing"
      ? (<ECard req={req}/>)
      : null            
    ))}
    
    
    <Text
    fontWeight={"bold"}
    fontSize="20px"
    my="4rem"
    mx="5rem"
    >
    Electrical Works Team
    </Text>
    
    
    {
        Employees.map(req=>(
        req[2]==="Electrical"
      ? (<ECard req={req}/>)
      : null            
    ))}
    
    <Text
    fontWeight={"bold"}
    fontSize="20px"
    my="4rem"
    mx="5rem"
    >
    Horticulture Team
    </Text>
    
    {
        Employees.map(req=>(
        req[2]==="Horticulture"
      ? (<ECard req={req}/>)
      : null            
    ))}
    
    </>
  )
}

export default Employee;