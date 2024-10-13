import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

export default function PropertyActions({ propertyId, onEdit, onDelete }) {
  const { isOpen: isEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpenChange: onDeleteOpenChange } = useDisclosure();

  const [editData, setEditData] = useState({
    propertyType: "",
    location: "",
    pincode: "",
    price: "",
    description: "",
    amenities: "",
    status: "",
  });

  // Fetch property details for editing
  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`);
      if (!response.ok) throw new Error("Failed to fetch property details");
      const data = await response.json();
      setEditData(data);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  // Handle edit click
  const handleEditClick = async () => {
    console.log("Editing property with ID:", propertyId);
    await fetchPropertyDetails();
    onEditOpenChange(true);
  };

  // Handle delete click
  const handleDeleteClick = () => {
    console.log("Attempting to delete property with ID:", propertyId);
    onDeleteOpenChange(true);
  };

  // Confirm deletion
  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to delete the property");
      }
      console.log("Property deleted successfully.");
      onDelete(propertyId);
      onDeleteOpenChange(false);
    } catch (error) {
      console.error("Error deleting property:", error);
      alert(`Error: ${error.message}`);
    }
  };

  // Handle saving edits
  const handleSaveEdit = async () => {
    const formDataToSend = new FormData();
    Object.entries(editData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key.charAt(0).toUpperCase() + key.slice(1), value);
      }
    });

    try {
      const response = await fetch(`http://localhost:5176/api/Property/${propertyId}`, {
        method: "PATCH",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to edit the property");
      }

      console.log("Property edited successfully.");
      onEdit(propertyId, editData);
      onEditOpenChange(false);
      window.location.reload();
    } catch (error) {
      console.error("Error editing property:", error);
      alert("An error occurred while saving the property. Please try again.");
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex justify-center">
        <Button color="primary" onPress={handleEditClick} className="mr-2">
          Edit
        </Button>

        <Button color="danger" onPress={handleDeleteClick} className="ml-2">
          Delete
        </Button>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isEditOpen} onOpenChange={onEditOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Property</ModalHeader>
              <ModalBody>
                <Input
                  name="location"
                  placeholder="Location"
                  value={editData.location}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="pincode"
                  placeholder="Pincode"
                  value={editData.pincode}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="price"
                  placeholder="Price"
                  value={editData.price}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="description"
                  placeholder="Description"
                  value={editData.description}
                  onChange={handleInputChange}
                  className="mb-2"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose} className="mr-1">
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSaveEdit} >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={isDeleteOpen} onOpenChange={onDeleteOpenChange}>
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalBody>Are you sure you want to delete this property?</ModalBody>
          <ModalFooter>
            <Button color="primary" variant="bordered" onPress={() => onDeleteOpenChange(false)}>
              Cancel
            </Button>
            <Button color="danger" variant="solid" onPress={confirmDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
