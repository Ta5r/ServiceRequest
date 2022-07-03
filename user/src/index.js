import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import LoginUser from './components/LGuser';
import LoginAdmin from './components/LGadmin';
import Footer from './components/Footer';
import AdminDashboard from './pages/admin-dashboard';
import RequestService from './pages/RequestService';
import UserDashBoard from './pages/UserDashBoard';
import RequestStatus from './pages/RequestStatus';
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

const routing = (
  <Router>
    <div>
      <Routes>
      <Route path="/" component={App} element={<App />} exact/>
      <Route path="/admin" component={LoginAdmin} element={<LoginAdmin />}/>
      <Route path="/admin/dashboard" component={AdminDashboard} element={<AdminDashboard />}/>

      <Route path="/user" component={LoginUser} element={<LoginUser />}/>
      <Route path="/user/dashboard" component={UserDashBoard} element={<UserDashBoard />}/>
      <Route path="/user/dashboard/request" component={RequestService} element={<RequestService />}/>
      <Route path="/user/dashboard/status" component={RequestStatus} element={<RequestStatus />}/>

      </Routes>
    </div>
    {/* <Footer/> */}
  </Router>
);

root.render(routing);