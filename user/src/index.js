import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import LoginUser from './components/LGuser';
import LoginAdmin from './components/LGadmin';
import Footer from './components/Footer';
import AdminDashboard from './pages/admin-dashboard';
import RequestService from './pages/RequestService';
import UserDashBoard from './pages/UserDashBoard';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
    <LoginUser />
    <UserDashBoard />
    <RequestService/>
    <hr/>
    <LoginAdmin />
    <Footer />
    <AdminDashboard/>
  </StrictMode>
);