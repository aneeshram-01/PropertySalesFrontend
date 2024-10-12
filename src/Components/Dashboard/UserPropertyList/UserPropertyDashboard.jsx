import React, { useState } from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav';
import SideNav from '../../DashboardComponents/SideNav';
import PropertyMainSection from '../UserPropertyList/UserPropertyMainSection';
import PropertyAdd from '../../Property/PropertyAdd';
import { Button } from '@nextui-org/react';
 
const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
 
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
 
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
 
  // Open the Add Property Modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };
 
  // Close the Add Property Modal
  const handleModalClose = () => {
    setModalOpen(false);
  };
 
  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      <DashNav open={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={drawerOpen} handleDrawerClose={handleDrawerClose} />
      
      <PropertyMainSection />
 
      {/* Add Property Button */}
      <Button
        color="primary"
        variant="solid"
        onPress={handleModalOpen}
        style={{
          position: 'fixed',
          bottom: 16,  // Distance from the bottom
          right: 16,   // Distance from the right
          zIndex: 9990, // Ensures the button stays on top of other elements
        }}
      >
        Add Property
      </Button>
 
      {/* Pass modal state and close handler to PropertyAdd */}
      <PropertyAdd isOpen={modalOpen} onClose={handleModalClose} />
    </Box>
  );
};
 
export default Dashboard;