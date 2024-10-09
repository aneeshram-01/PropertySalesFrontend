import React, { useEffect, useState } from "react";
import { Card, Image } from "@nextui-org/react";
import PropertyActions from "./PropertyActions.jsx"; // Import the new component
import { useTheme } from "next-themes"; // Import useTheme

export default function Admin() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const { theme } = useTheme(); // Get the current theme

  const statusMapping = {
    0: "Active",
    1: "Pending",
    2: "Sold",
    3: "Rented",
  };

  const propertyTypeMapping = {
    0: "Sale",
    1: "Rent",
  };

  const statusColorMapping = {
    Active: "bg-green-500 text-white",
    Pending: "bg-yellow-500 text-black",
    Sold: "bg-red-500 text-white",
    Rented: "bg-blue-500 text-white",
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "http://localhost:5176/api/Admin/properties"
        ); // Adjust URL as needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = (propertyId) => {
    setProperties((prevProperties) =>
      prevProperties.filter((property) => property.propertyId !== propertyId)
    );
  };

  const handleEdit = (propertyId, updatedProperty) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.propertyId === propertyId
          ? { ...property, ...updatedProperty }
          : property
      )
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {properties.length > 0 ? (
        properties.map(
          ({
            propertyId,
            propertyType,
            location,
            pincode,
            price,
            description,
            propertyImages,
            status,
          }) => (
            <a
              key={propertyId}
              className={`p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl flex flex-col items-center relative
                ${
                  theme === "dark"
                    ? "bg-gray-700 text-white hover:shadow-white"
                    : "bg-blue-200 text-black hover:shadow-black"
                }`} // Change card background and text color based on theme
              href="#"
            >
              {/* Status Label */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${statusColorMapping[statusMapping[status]]}`}
                style={{ zIndex: 10 }} // Ensure the label is above the image
              >
                {statusMapping[status]}
              </div>

              {/* Image First */}
              <div className="relative">
                {propertyImages && propertyImages.length > 0 ? (
                  <Image
                    alt="Property"
                    className="object-cover w-full h-64 rounded-t-xl z-0" // Set z-index to 0 for the image
                    src={`http://localhost:5176${propertyImages[0].filePath}`}
                  />
                ) : (
                  <div>No Images Available</div>
                )}
              </div>

              {/* Card Body */}
              <div className="mt-4 w-full">
                {/* Display Sale and Price */}
                <div className="flex justify-between items-center w-full">
                  {/* Left-aligned Sale text - bigger than price */}
                  <div>
                    {statusMapping[status] === "Active" && (
                      <p className="text-lg font-bold">
                        {propertyTypeMapping[propertyType]}
                      </p>
                    )}
                  </div>

                  {/* Right-aligned Price */}
                  <div>
                    <p className="text-base font-semibold">${price}</p> {/* Slightly smaller than Sale */}
                  </div>
                </div>

                {/* Location, Pincode, and Description - All Left aligned */}
                <div className="text-left">
                  <p className="mt-2 text-lg font-bold">{location}</p> {/* Larger text for location */}
                  <small className="text-sm">
                    Pincode: {pincode}
                  </small>
                  <p className="mt-2 text-base">
                    {description}
                  </p>
                </div>

                {/* Property Actions */}
                <div className="mt-4">
                  <PropertyActions
                    propertyId={propertyId}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </div>
              </div>
            </a>
          )
        )
      ) : (
        <div className="text-center text-gray-300 col-span-full">
          No properties available
        </div>
      )}
    </div>
  );
}
