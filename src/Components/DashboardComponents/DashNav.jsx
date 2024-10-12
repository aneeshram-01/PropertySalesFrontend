import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import moonIcon from "/moon.png"; 
import sunIcon from "/sun.png";
import { AcmeLogo } from "../CommonComponents/AcmeLogo";
import Box from "@mui/material/Box"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : "#000", 
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashNav = ({ open, handleDrawerOpen }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSignOut = () => {
    // Clear session token from localStorage (or cookies)

    // Redirect to the home page
    navigate("/login");
// Adjust according to your session management
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="/">
            <AcmeLogo className="mr-2" />
          </a>
          <Typography variant="h6" noWrap component="div" sx={{ ml: 1 }}>
            <a href="/">PropertySales</a>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Button
            onClick={toggleTheme}
            className="rounded-full border-none relative p-2"
            variant="ghost"
          >
            <img
              src={moonIcon}
              alt="Light Mode"
              className={`absolute transition-opacity duration-500 ${
                theme === "dark" ? "opacity-0" : "opacity-100"
              } w-7 h-7`}
            />
            <img
              src={sunIcon}
              alt="Dark Mode"
              className={`absolute transition-opacity duration-500 ${
                theme === "dark" ? "opacity-100" : "opacity-0"
              } w-8 h-8`}
            />
          </Button>
          <Button
            className="rounded-full border-none relative p-2 ml-1"
            variant="solid"
            onClick={handleSignOut} // Call the sign out function
            sx={{
              color: "black",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              }
            }}
          >
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashNav;
