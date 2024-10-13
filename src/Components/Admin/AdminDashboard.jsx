import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AdminNavbar from '../Admin/AdminNavbar';
import UserTable from '../Admin/UserTable';
import PropertyTable from '../Admin/PropertyTable';
import { useTheme } from 'next-themes'; // Import useTheme to access the current theme

const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('users'); // Initialize selected section to 'users'
    const [users, setUsers] = useState([]); // State to store users data
    const [properties, setProperties] = useState([]); // State to store properties data
    const { theme } = useTheme(); // Retrieve the current theme

    useEffect(() => {
        // Fetch users or properties based on the selected section
        if (selectedSection === 'users') {
            fetchUsers();
        } else if (selectedSection === 'properties') {
            fetchProperties();
        }
    }, [selectedSection]);

    // Fetch users data from the API
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5176/api/Admin/customers');
            const data = await response.json();
            setUsers(data); // Update users state with fetched data
        } catch (error) {
            console.error('Error fetching users:', error); // Log any errors encountered during the fetch
        }
    };

    // Fetch properties data from the API
    const fetchProperties = async () => {
        try {
            const response = await fetch('http://localhost:5176/api/Admin/properties');
            const data = await response.json();
            setProperties(data); // Update properties state with fetched data
        } catch (error) {
            console.error('Error fetching properties:', error); // Log any errors encountered during the fetch
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', minHeight: '100vh' }}>
            {/* Render the navigation bar */}
            <AdminNavbar />

            {/* Main content area for the dashboard */}
            <Box
                sx={{
                    flexGrow: 1,
                    padding: '24px',
                    marginTop: '20px', // Adjust margin to position content
                    borderRadius: '8px',
                    boxShadow: 2,
                    color: theme === 'dark' ? 'white' : 'black', // Set text color based on theme
                    transition: 'color 0.3s ease', // Smooth transition for text color
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme === 'dark' ? 'white' : 'black', // Set title color based on theme
                        transition: 'color 0.3s ease', // Smooth transition for title color
                        marginTop: '10px', // Maintain margin for title positioning
                    }}
                >
                    Admin Dashboard
                </Typography>

                {/* Buttons to select the section to display */}
                <Box sx={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
                    <Button
                        variant={selectedSection === 'users' ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => setSelectedSection('users')}
                        sx={{
                            borderRadius: '8px',
                            padding: '10px 20px',
                            '&:hover': {
                                bgcolor: selectedSection === 'users' ? '#1976d2' : 'rgba(25, 118, 210, 0.1)', // Change background on hover
                            },
                            color: theme === 'dark' ? 'white' : 'black', // Set button text color based on theme
                        }}
                    >
                        Users
                    </Button>
                    <Button
                        variant={selectedSection === 'properties' ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => setSelectedSection('properties')}
                        sx={{
                            borderRadius: '8px',
                            padding: '10px 20px',
                            '&:hover': {
                                bgcolor: selectedSection === 'properties' ? '#1976d2' : 'rgba(25, 118, 210, 0.1)', // Change background on hover
                            },
                            color: theme === 'dark' ? 'white' : 'black', // Set button text color based on theme
                        }}
                    >
                        Properties
                    </Button>
                </Box>

                {/* Render the corresponding table based on selected section */}
                {selectedSection === 'users' && <UserTable users={users} />}
                {selectedSection === 'properties' && <PropertyTable properties={properties} />}
            </Box>
        </Box>
    );
};

export default AdminDashboard;
