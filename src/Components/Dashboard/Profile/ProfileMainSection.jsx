// MainSection.jsx
import React from 'react';
import Box from '@mui/material/Box'; // Import Box component for layout
import { styled } from '@mui/material/styles'; // Import styled for custom styling
import ProfileCard from "../Profile/ProfileCard"; // Import ProfileCard component for user profile display

// Styled component for the drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex', // Use flexbox for layout
  alignItems: 'center', // Center items vertically
  padding: theme.spacing(0, 1), // Add horizontal padding
  ...theme.mixins.toolbar, // Include toolbar mixins for consistency
  justifyContent: 'flex-end', // Align items to the end
}));

const MainSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}> {/* Main section layout with padding and margin */}
      <ProfileCard /> {/* Render the ProfileCard component */}
    </Box>
  );
};

export default MainSection; // Export the MainSection component for use in other parts of the app
