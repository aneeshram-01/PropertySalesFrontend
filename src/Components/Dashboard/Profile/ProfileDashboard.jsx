import React from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav'; // Import the dashboard navigation component
import SideNav from '../../DashboardComponents/SideNav'; // Import the side navigation component
import ProfileMainSection from '../Profile/ProfileMainSection'; // Import the main section for the profile

const Dashboard = () => {
  const [open, setOpen] = React.useState(false); // State to manage the open/closed state of the side drawer

  // Function to handle opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true); // Set the state to open
  };

  // Function to handle closing the drawer
  const handleDrawerClose = () => {
    setOpen(false); // Set the state to closed
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <DashNav open={open} handleDrawerOpen={handleDrawerOpen} /> {/* Dashboard navigation */}
      <SideNav open={open} handleDrawerClose={handleDrawerClose} /> {/* Side navigation */}
      <ProfileMainSection /> {/* Main section to display profile information */}
    </Box>
  );
};

export default Dashboard;
