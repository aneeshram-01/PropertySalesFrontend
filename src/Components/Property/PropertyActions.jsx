import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function PropertyActions({ propertyId, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    pincode: '',
    price: '',
    description: '',
    amenities: '',
    status: '',
  });

  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`);
      if (!response.ok) throw new Error('Failed to fetch property details');
      const data = await response.json();
      setFormData({
        propertyType: data.propertyType || '',
        location: data.location || '',
        pincode: data.pincode || '',
        price: data.price || '',
        description: data.description || '',
        amenities: data.amenities || '',
        status: data.status || '',
      });
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  const handleEditClick = async () => {
    await fetchPropertyDetails();
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete the property');
      onDelete(propertyId);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleSaveEdit = async () => {
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (formData[key] !== '') {
        formDataToSend.append(key.charAt(0).toUpperCase() + key.slice(1), formData[key]);
      }
    }

    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: 'PATCH',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to edit the property');
      }

      setIsEditing(false);
      onEdit(propertyId, formData);
      window.location.reload();
    } catch (error) {
      console.error('Error editing property:', error);
      alert('An error occurred while saving the property. Please try again.');
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
        <div>
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            placeholder="Property Type"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Pincode"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <Button color="success" onPress={handleSaveEdit}>
            Save
          </Button>
          <Button color="warning" onPress={handleCancelEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <>
          <Button color="primary" variant="solid" onPress={handleEditClick}>
            Edit
          </Button>
          <Button color="error" variant="faded" onPress={handleDeleteClick}>
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
