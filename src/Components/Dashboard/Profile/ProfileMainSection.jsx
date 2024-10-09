// MainSection.jsx
import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import PropertyCard from '../../Property/PropertyCard';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MainSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4}}>
      
    </Box>
  );
};

export default MainSection;
