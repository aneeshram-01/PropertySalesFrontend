import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import LandingPage from "./Components/HomePage/LandingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import ProfileDashboard from "./Components/Dashboard/Profile/ProfileDashboard";
import UserPropertyDashboard from "./Components/Dashboard/UserPropertyList/UserPropertyDashboard";
import PropertyDashboard from "./Components/Dashboard/Properties/PropertyDashboard"
import CustomerSupportDashboard from "./Components/Dashboard/CustomerSupport/CustomerSupportDashboard";
import AdminDashboard from './Components/Admin/AdminDashboard';

function App() {
  return (
    <>
    <Router>
      <div>
        
        <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<ProfileDashboard/>} />
        <Route path="/dashboard/properties" element={<PropertyDashboard/>} />
        <Route path="/dashboard/locations" element={<UserPropertyDashboard/>} />
        <Route path="/dashboard/support" element={<CustomerSupportDashboard/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;
