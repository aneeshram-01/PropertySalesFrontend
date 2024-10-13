import React, { useState } from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav';
import SideNav from '../../DashboardComponents/SideNav';
import CustomerMainSection from './CustomerSupportMainSection';

const Dashboard = () => {
  // State to manage the open/closed state of the side navigation drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to open the drawer
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Function to close the drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      {/* Dashboard Navigation */}
      <DashNav open={drawerOpen} handleDrawerOpen={handleDrawerOpen} />

      {/* Side Navigation */}
      <SideNav open={drawerOpen} handleDrawerClose={handleDrawerClose} />

      {/* Main Section for Customer Support */}
      <CustomerMainSection />
    </Box>
  );
};

export default Dashboard;
