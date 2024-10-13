// MainSection.jsx
import React from 'react'; // Import React
import Box from '@mui/material/Box'; // Import Box for layout management from MUI
import { styled } from '@mui/material/styles'; // Import styled for creating styled components
import PropertyCard from '../../Property/PropertyCard'; // Import PropertyCard component

// Styled component for the drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1), // Add padding based on theme
  ...theme.mixins.toolbar, // Include toolbar mixins for consistent styling
  justifyContent: 'flex-end', // Align content to the right
}));

// MainSection component
const MainSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
      <PropertyCard /> {/* Render the PropertyCard component */}
    </Box>
  );
};

export default MainSection; // Export MainSection for use in other components
