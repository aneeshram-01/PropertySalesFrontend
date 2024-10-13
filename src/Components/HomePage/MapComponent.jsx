import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Import necessary components from react-leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for map styling

// MapComponent to render the map
export default function MapComponent() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Centered on India
      zoom={5} // Adjust the zoom level to fit the map properly
      scrollWheelZoom={false} // Optional: disable zoom on scroll
      style={{ width: "100%", height: "100%" }} // Set full width and height
    >
      {/* Base layer of the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile URL
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution for OpenStreetMap
      />
      {/* Marker for India */}
      <Marker position={[20.5937, 78.9629]}>
        <Popup>
          India {/* Popup content */}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
