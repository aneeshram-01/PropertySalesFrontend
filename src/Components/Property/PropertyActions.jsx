import React, { useState } from 'react';

export default function PropertyActions({ propertyId, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    pincode: '',
    price: '',
    description: '',
    amenities: '',
    status: ''
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete the property');
      }

      onDelete(propertyId);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to edit the property');
      }

      setIsEditing(false);
      onEdit(propertyId, formData);
    } catch (error) {
      console.error('Error editing property:', error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex space-x-2">
      {isEditing ? (
        <div className="flex flex-col space-y-2 bg-gray-800 p-4 rounded-md">
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            placeholder="Property Type"
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Pincode"
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSaveEdit}
              className="px-4 py-2 bg-green-600 text-white rounded-md transition duration-150 hover:bg-green-500"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-gray-600 text-white rounded-md transition duration-150 hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md transition duration-150 hover:bg-blue-500"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="px-4 py-2 bg-red-600 text-white rounded-md transition duration-150 hover:bg-red-500"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
