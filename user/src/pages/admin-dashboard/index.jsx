import React from 'react';
import { useState,useEffect } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react';
import AdminDBNavbar from '../../components/AdminDBNavbar';
import ServiceRequests from '../../components/ServiceRequests';
import Employee from '../../components/Admin';
import axios from 'axios';

const AdminDashboard = () => {
  const [S_AID, setEID] = useState('');
  const [S_name, setName] = useState('');
  const [S_designation, setdesignation] = useState('');
  const [S_phone, setphone] = useState('');
  const [S_sector, setsector] = useState('');
  const [S_department, setdepartment] = useState('');

  useEffect(()=>{
    try {
      axios.get('http://localhost:8000/admin/dashboard/').then(response => {
        response.json().then(response => {
          console.log(response);
  
          setEID(response.AID);
          setName(response.name);
          setdesignation(response.designation);
          setphone(response.phone);
          setsector(response.sector);
          setdepartment(response.setdepartment);
        });
      });
    } catch (err) {
      console.log(err);
    }
  },[]);
  return (
    <ChakraProvider theme={theme}>
      <div style={{ backgroundColor: '#edf2f7' }}>
        <AdminDBNavbar name={S_name} sector={S_sector} />
        <ServiceRequests sector={S_sector} />
        <hr />
        <Employee />
      </div>
    </ChakraProvider>
  );
};

export default AdminDashboard;
