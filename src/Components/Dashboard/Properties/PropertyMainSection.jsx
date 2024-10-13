// MainSection.jsx
import React from 'react';
import Box from '@mui/material/Box'; // Import Box for layout management
import { styled } from '@mui/material/styles'; // Import styled for custom styling
import PropertyBuyCard from '../../Property/PropertyBuyCard'; // Import the PropertyBuyCard component

// Styled component for drawer header (if needed in future)
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar, // Apply default toolbar styles
  justifyContent: 'flex-end', // Align items to the right
}));

// MainSection component to display property buy cards
const MainSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}> {/* Main section with padding and top margin */}
      <PropertyBuyCard /> {/* Render the PropertyBuyCard component */}
    </Box>
  );
};

export default MainSection; // Export MainSection component for use in other parts of the application
