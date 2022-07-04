import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ToBeClosed = (props) => {
    const eid = props.eid;
    const id = props.id;
    const [F_eid, seteid] = useState('');
    const handleSubmit = async event => {event.preventDefault();console.log("HEHE "+eid);}
    const handleEIDchange = async event => {seteid(event.target.eid);console.log(eid)}
  return (
  <ChakraProvider theme={theme}>
    <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="eid">
                  {/* <FormLabel>EID</FormLabel> */}
                  <Input
                    id={id}
                    type="password"
                    value={F_eid}
                    onChange={handleEIDchange}
                  />
                </FormControl>
            
                  <Button
                    bg={'blue.300'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.400',
                    }}
                    type="submit"
                  >
                    CLOSE REQ.
                  </Button>
                {/* </Stack> */}
              </form>
            </Stack>
  </ChakraProvider>);
};

export default ToBeClosed;
