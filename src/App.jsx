import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import "./App.css"; // Import the main CSS file for styling
import LandingPage from "./Components/HomePage/LandingPage"; // Import the landing page component
import LoginPage from "./Components/LoginPage/LoginPage"; // Import the login page component
import SignUpPage from "./Components/SignUpPage/SignUpPage"; // Import the sign-up page component
import ProfileDashboard from "./Components/Dashboard/Profile/ProfileDashboard"; // Import the profile dashboard component
import UserPropertyDashboard from "./Components/Dashboard/UserPropertyList/UserPropertyDashboard"; // Import the user property dashboard component
import PropertyDashboard from "./Components/Dashboard/Properties/PropertyDashboard"; // Import the property dashboard component
import CustomerSupportDashboard from "./Components/Dashboard/CustomerSupport/CustomerSupportDashboard"; // Import the customer support dashboard component
import AdminDashboard from './Components/Admin/AdminDashboard'; // Import the admin dashboard component

function App() {
  return (
    <>
      <Router> {/* Wrap the application in the Router to enable routing */}
        <div>
          <Routes> {/* Define the application routes */}
            <Route path="/login" element={<LoginPage />} /> {/* Route for the login page */}
            <Route path="/signup" element={<SignUpPage />} /> {/* Route for the sign-up page */}
            <Route path="/dashboard" element={<ProfileDashboard />} /> {/* Route for the profile dashboard */}
            <Route path="/dashboard/properties" element={<PropertyDashboard />} /> {/* Route for the property dashboard */}
            <Route path="/dashboard/locations" element={<UserPropertyDashboard />} /> {/* Route for the user property dashboard */}
            <Route path="/dashboard/support" element={<CustomerSupportDashboard />} /> {/* Route for the customer support dashboard */}
            <Route path="/admin" element={<AdminDashboard />} /> {/* Route for the admin dashboard */}
            <Route path="/" element={<LandingPage />} /> {/* Route for the landing page */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; // Export the App component as the default export
