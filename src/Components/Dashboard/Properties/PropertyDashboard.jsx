// Dashboard.jsx
import React from 'react';
import { Box } from '@mui/material'; // Import Box for layout management
import DashNav from '../../DashboardComponents/DashNav'; // Import the main navigation component
import SideNav from '../../DashboardComponents/SideNav'; // Import the sidebar navigation component
import PropertyMainSection from './PropertyMainSection'; // Import the main section for properties

const Dashboard = () => {
  // State to manage the drawer open/close status
  const [open, setOpen] = React.useState(false);

  // Function to handle opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className='p-5'> {/* Outer div for padding */}
      <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}> {/* Flex layout for the dashboard */}
        <DashNav open={open} handleDrawerOpen={handleDrawerOpen} /> {/* Render the main navigation */}
        <SideNav open={open} handleDrawerClose={() => setOpen(false)} /> {/* Render the sidebar navigation */}
        <PropertyMainSection /> {/* Render the main section for properties */}
      </Box>
    </div>
  );
};

export default Dashboard; // Export the Dashboard component for use in other parts of the application
