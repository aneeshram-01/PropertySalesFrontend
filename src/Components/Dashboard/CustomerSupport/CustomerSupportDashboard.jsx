import React, { useState } from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav';
import SideNav from '../../DashboardComponents/SideNav';
import CustomerMainSection from './CustomerSupportMainSection';
 
const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

 
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
 
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
 

 
  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      <DashNav open={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={drawerOpen} handleDrawerClose={handleDrawerClose} />
      <CustomerMainSection/>
    </Box>
  );
};
 
export default Dashboard;