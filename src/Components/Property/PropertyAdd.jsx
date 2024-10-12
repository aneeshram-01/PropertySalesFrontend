import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function PropertyAdd({ isOpen, onClose }) {
  const [propertyType, setPropertyType] = useState(0); // 0: Sale, 1: Rent
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState("");
  const [status, setStatus] = useState(0); // 0: Active, 1: Pending, 2: Sold, 3: Rented
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("PropertyType", propertyType);
    formData.append("Location", location);
    formData.append("Pincode", pincode);
    formData.append("Price", price);
    formData.append("Description", description);
    formData.append("Amenities", amenities);
    formData.append("Status", status);
    formData.append("AadhaarCard", aadhaarCard);

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("ImageFiles", imageFiles[i]);
    }

    try {
      const response = await fetch("http://localhost:5176/api/Property/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add property");
      }

      const result = await response.json();
      setMessage("Property added successfully! ID: " + result.propertyId);
      resetForm();
      onClose(); // Close the modal after successful addition
      window.location.reload(); // Refresh the page
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const resetForm = () => {
    setPropertyType(0);
    setLocation("");
    setPincode("");
    setPrice("");
    setDescription("");
    setAmenities("");
    setStatus(0);
    setAadhaarCard("");
    setImageFiles([]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="center"
      css={{
        zIndex: 2000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200vh",
        marginTop: "10px",
      }}
    >
      <ModalContent
        css={{
          maxWidth: "900px", // Increased width for better layout
          width: "90%",
          margin: "0 auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 9999,
          position: "relative",
          top: "50px",
        }}
      >
        <ModalHeader
          css={{ marginBottom: "5px", marginTop: "10px", textAlign: "center" }}
        >
          Add Property
        </ModalHeader>
        <ModalBody css={{ marginBottom: "5px", // Reduced margin at the bottom
    paddingTop: "5px"}}>
          
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                {/* Row 1 */}
                <div
                  style={{ display: "flex", gap: "15px", marginBottom: "10px" }}
                >
                  <Input
                    label="Property Type"
                    placeholder="Enter Sale (0) or Rent (1)"
                    value={propertyType}
                    onChange={(e) => setPropertyType(Number(e.target.value))}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                  <Input
                    label="Location"
                    placeholder="Enter the location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                  <Input
                    label="Price"
                    placeholder="Enter the price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                </div>
                <div
                  style={{ display: "flex", gap: "15px", marginBottom: "10px" }}
                >
                  <Input
                    label="Status"
                    placeholder="Enter status (0: Active, 1: Pending, 2: Sold, 3: Rented)"
                    value={status}
                    onChange={(e) => setStatus(Number(e.target.value))}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                  <Input
                    label="Pincode"
                    placeholder="Enter the pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                  <Input
                    label="Aadhaar Card"
                    placeholder="Enter Aadhaar number"
                    value={aadhaarCard}
                    onChange={(e) => setAadhaarCard(e.target.value)}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 30%" }} // Flex for 3-column layout
                  />
                </div>

                {/* Row 2 */}
                <div
                  style={{ display: "flex", gap: "15px", marginBottom: "10px" }}
                >
                  <Textarea
                    label="Description"
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="bordered"
                    required
                    css={{ flex: "1 1 100%" }} // Full width for Description
                  />
                </div>
                <div
                  style={{ display: "flex", gap: "6px", marginBottom: "10px" }}
                >
                  <Input
                    label="Amenities"
                    placeholder="Enter amenities"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                    variant="bordered"
                    css={{ flex: "1 1 100%" }} // Flex for 3-column layout
                  />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    <Input
                      label="Upload Images"
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      variant="bordered"
                      required
                      css={{ flex: "1 1 100%" }}
                    />
                  </div>
                </div>
              </form>
            </div>

          {message && <div className="text-green-500">{message}</div>}
        </ModalBody>
        <ModalFooter
          css={{ justifyContent: "space-between", marginTop: "5px" }}
        >
          <Button color="primary" type="submit" onClick={handleSubmit}>
            Add Property
          </Button>
          <Button color="danger" variant="bordered" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
