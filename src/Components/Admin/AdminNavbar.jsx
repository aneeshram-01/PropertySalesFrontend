import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../CommonComponents/AcmeLogo";
import { useTheme } from "next-themes"; // Import useTheme to manage theme state
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function AdminNavbar() {
    const { theme, setTheme } = useTheme(); // Destructure theme and setTheme from useTheme
    const navigate = useNavigate(); // Initialize navigation function

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Handle user logout and redirect to the login page
    const handleLogout = () => {
        console.log("Logout clicked"); // Log the logout action
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <Navbar shouldHideOnScroll position="sticky">
            <NavbarBrand>
                <a href="/">
                    <AcmeLogo className="mr-2" />
                </a>
                <p className="font-bold text-inherit text-sm">
                    <a href="/">MERCURIAL</a>
                </p>
            </NavbarBrand>
            <NavbarContent className="flex gap-4" justify="end">
                <NavbarItem>
                    <Button
                        onClick={handleLogout} // Logout button click handler
                        className="rounded-full border-none relative p-6 transition-colors duration-300" // Increased padding for size
                        variant="ghost"
                        style={{ fontSize: '1.1rem' }} // Increased font size
                    >
                        Logout
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        onClick={toggleTheme} // Theme toggle button click handler
                        className="rounded-full border-none relative p-4 transition-colors duration-300"
                        variant="ghost"
                    >
                        <img
                            src="moon.png" // Image for light mode
                            alt="Light Mode"
                            className={`absolute transition-opacity duration-500 ${
                                theme === "dark" ? "opacity-0" : "opacity-100"
                            } w-7 h-7`}
                        />
                        <img
                            src="sun.png" // Image for dark mode
                            alt="Dark Mode"
                            className={`absolute transition-opacity duration-500 ${
                                theme === "dark" ? "opacity-100" : "opacity-0"
                            } w-8 h-8`}
                        />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
