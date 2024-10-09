import React from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav';
import SideNav from '../../DashboardComponents/SideNav';
import PropertyMainSection from './PropertyMainSection';
import { Button } from '@nextui-org/react';

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      <DashNav open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={open} handleDrawerClose={() => setOpen(false)} />
      <PropertyMainSection />

      {/* Success Button placed at the bottom right with zIndex */}
      <Button
        color="primary"
        variant="solid"
        style={{
          position: 'fixed',
          bottom: 16,  // Distance from the bottom
          right: 16,   // Distance from the right
          zIndex: 9999, // Ensures the button stays on top of other elements
        }}
      >
        Add Property
      </Button>
    </Box>
  );
};

export default Dashboard;
