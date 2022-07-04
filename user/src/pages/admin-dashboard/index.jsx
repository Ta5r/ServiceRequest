import React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import AdminDBNavbar from '../../components/AdminDBNavbar';
import ServiceRequests from '../../components/ServiceRequests';
import axios from 'axios';

const AdminDashboard = () => {
  const [S_AID, setAID] = useState('');
  const [S_name, setName] = useState('');
  const [S_designation, setdesignation] = useState('');
  const [S_phone, setphone] = useState('');
  const [S_sector, setsector] = useState('');
  const [S_department, setdepartment] = useState('');

  console.log(S_AID);

  useEffect(() => {
    try {
      const headers = {
        'token' : localStorage.getItem('AdminTokenID'),
        // 'Content-Type': 'application/json',
      };
      axios
        .get('http://localhost:8000/admin/dashboard/', { headers })
        .then(response => {
          // response.json().then(response => {
            console.log(response.data);

            setAID(response.data.AID);
            setName(response.data.name);
            setdesignation(response.data.designation);
            setphone(response.data.phone);
            setsector(response.data.sector);
            setdepartment(response.data.setdepartment);
          // });
        });
    } catch (err) {
      console.log(err);
    }
  }, [S_AID]);
  return (
    <ChakraProvider theme={theme}>
      <div style={{ backgroundColor: '#edf2f7' }}>
        <AdminDBNavbar name={S_name} sector={S_sector} />
        <ServiceRequests aid={S_AID} />
        <hr />
      </div>
    </ChakraProvider>
  );
};

export default AdminDashboard;
