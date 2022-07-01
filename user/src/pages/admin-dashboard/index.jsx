import React from 'react';
import {
    ChakraProvider,
    theme,
  } from '@chakra-ui/react';
  import AdminDBNavbar from "../../components/AdminDBNavbar";
  import ServiceRequests from "../../components/ServiceRequests";
  import Employee from '../../components/Employee';

const AdminDashboard = () => {
  return (
    <ChakraProvider theme={theme}>
    <div style={{backgroundColor: "#edf2f7"}}>

    <AdminDBNavbar/>
    <ServiceRequests/>
    <hr/>
    <Employee/>
    </div>
    </ChakraProvider>

  )
}

export default AdminDashboard;