import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { useTheme } from 'next-themes'; // Import useTheme for managing dark/light mode

const ProfileSection = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [error, setError] = useState(null); // State to hold error messages
  const { theme } = useTheme(); // Get the current theme (dark or light)

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Get user ID from local storage
      if (!userId) {
        setError('User not logged in. Please log in.'); // Error if user is not logged in
        return;
      }

      try {
        const response = await fetch(`http://localhost:5176/api/Admin/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data'); // Error if the fetch fails
        }
        const data = await response.json(); // Parse JSON response
        setUserData(data); // Set user data state
      } catch (err) {
        setError(err.message); // Set error message state
      }
    };

    fetchUserData(); // Call the fetch function
  }, []);

  // Display error message if there is one
  if (error) return <div className="text-red-500">{error}</div>;

  // Show loading indicator while fetching user data
  if (!userData) return <div>Loading...</div>;

  return (
    <div className="p-14">
      <Card className={`py-4 max-w-4xl mx-auto shadow-lg rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 border-2 ${theme === "dark" ? "border-gray-300" : "border-gray-700"}`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="text-2xl font-bold">Profile Information</h2>
          <p className="text-sm text-gray-500">User Details</p>
        </CardHeader>

        <CardBody className="overflow-visible py-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/** Display user information in read-only inputs */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">User ID</label>
              <input
                type="text"
                value={userData.userId || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={userData.name || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Username</label>
              <input
                type="text"
                value={userData.userName || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Contact Number</label>
              <input
                type="text"
                value={userData.contactNumber || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Address</label>
              <input
                type="text"
                value={userData.address || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Pincode</label>
              <input
                type="text"
                value={userData.pincode || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Aadhaar Card</label>
              <input
                type="text"
                value={userData.aadhaarCard || ''}
                readOnly
                className="mt-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileSection;
