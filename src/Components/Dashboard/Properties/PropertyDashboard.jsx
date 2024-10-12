import React from 'react';
import { Box } from '@mui/material';
import DashNav from '../../DashboardComponents/DashNav';
import SideNav from '../../DashboardComponents/SideNav';
import PropertyMainSection from './PropertyMainSection';

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className='p-5'>
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      <DashNav open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={open} handleDrawerClose={() => setOpen(false)} />
        
      <PropertyMainSection />
    </Box>
    </div>
  );
};

export default Dashboard;
