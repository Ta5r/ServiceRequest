import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserDBNavBar from '../components/UserDBNavBar';
import { Button, ChakraProvider, theme } from '@chakra-ui/react';
import SRCard from '../components/ServiceRequests/SRCard';

const RequestStatus = props => {
  const eid = props.eid;

  const [S_EID, setEID] = useState('');
  const [S_name, setName] = useState('');
  const [complaints, setComplaints] = useState(['']);

  useEffect(() => {
    //Runs only on the first render
    try {
      fetch('/user/dashboard/requestform', {
        method: 'GET',
        headers: {
          token: localStorage.getItem('tokenID'),
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
  }, []);

  const handleLoad = () => {
    try {
      axios.get('http://localhost:8000/user/show/' + S_EID).then(response => {
        setComplaints(response.data);
      });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  };
  console.log('||');
  console.log(complaints);
  console.log('||');

  return (
    <ChakraProvider theme={theme}>
      <UserDBNavBar eid={S_EID} name={S_name} />
      <Button bgcolor="red" m="2rem" onClick={handleLoad}>
        Load
      </Button>
      {complaints.map(res => (
        <SRCard
          asgnTO_ID={res.asgnTO_ID}
          asgnTO_name={res.asgnTO_name}
          asgnTO_designation={res.asgnTO_designation}
          timestamp={res.timestamp}
          status={res.status}
          description={res.description}
          subcategory={res.subcategory}
          category={res.category}
          phone={res.phone}
        />
      ))}
    </ChakraProvider>
  );
};

export default RequestStatus;
