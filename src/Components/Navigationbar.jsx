import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { useTheme } from "next-themes"; // Import the useTheme hook from next-themes

export default function Navigationbar() {
  const { theme, setTheme } = useTheme(); // Destructure theme and setTheme from useTheme

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle between light and dark mode
  };

  return (
    <Navbar shouldHideOnScroll position="sticky">
      <NavbarBrand>
        <a href="/">
        <AcmeLogo className="mr-2"/>
        </a>
        <p className="font-bold text-inherit text-sm "><a href="/">PROPERTY SALES</a></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/"  aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        {/* Button for toggling theme */}
        <NavbarItem >
          <Button
            onClick={toggleTheme}
            className="rounded-full border-none text-white relative p-4"
            variant="light"
          >
            {/* Light Mode Image */}
            {theme === "dark" ? (
              <img
                src="moon.png"
                alt="Light Mode"
                className="absolute transition-opacity duration-500 opacity-0 w-7 h-7"
              />
            ) : (
              <img
                src="moon.png"
                alt="Light Mode"
                className="absolute transition-opacity duration-500 opacity-100 w-7 h-7"
              />
            )}

            {/* Dark Mode Image */}
            {theme === "dark" ? (
              <img
                src="sun.png"
                alt="Dark Mode"
                className="absolute transition-opacity duration-500 opacity-100 w-8 h-8"
              />
            ) : (
              <img
                src="sun.png"
                alt="Dark Mode"
                className="absolute transition-opacity duration-500 opacity-0 w-8 h-8"
              />
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
