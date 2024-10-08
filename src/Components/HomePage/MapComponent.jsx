import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  return (  
    <MapContainer
      center={[20.5937, 78.9629]} // Centered on India
      zoom={5} // Adjust the zoom level to fit the map properly
      scrollWheelZoom={false} // Optional: to disable zoom on scroll
      style={{ width: "100%", height: "100%"}}
    >
      {/* Base layer of the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* You can add markers if needed */}
      <Marker position={[20.5937, 78.9629]}>
        <Popup>
          India
        </Popup>
      </Marker>
    </MapContainer>
  );
}
