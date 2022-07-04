import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserDBNavBar from '../components/UserDBNavBar';
import { Button, Text, ChakraProvider, theme } from '@chakra-ui/react';

const RequestStatus = props => {
  const eid = props.eid;
  
  const [S_EID, setEID] = useState('');
  const [S_name, setName] = useState('');
  const [complaints, setComplaints] = useState(['']);
  const timestampss = [];

  useEffect(() => {
    //Runs only on the first render
    try {
      fetch('/user/dashboard/requestform', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }).then(response => {
        response.json().then(response => {
          console.log(response);
          setEID(response.EID);
          setName(response.name);
        });
      });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  }, [timestampss]);

  const handleLoad = () => {
    try {
      axios.get('http://localhost:8000/user/show/' + S_EID).then(response => {
        console.log(response.data); //works
        response.data.map((res)=>{

          console.log(res.timestamp);
          setComplaints(complaints.push(res.timestamp));
          timestampss.push(res.timestamp);

        });
        console.log("||");
        console.log(complaints);
        // console.log(timestampss[1]);
        console.log("||");
      });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <UserDBNavBar eid={S_EID} name={S_name} />
      <Button bgcolor="red" m="2rem" onClick={handleLoad}>
        Load
      </Button>
      {
        complaints.map((res)=>(<div><p>Hello</p></div>))
      }
    </ChakraProvider>
  );
};

export default RequestStatus;
