import React, { useState } from "react";
// import  styled from '@mui/system'
import { Box, styled, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";

//hamburger//
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const list = (anchor) => {
    return(
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                    index === 0 && <HomeIcon/>
                }
                  {
                    index === 1 && <FeaturedPlayListIcon/>
                }
                  {
                    index === 2 && <MiscellaneousServicesIcon/>
                }
                  {
                    index === 3 && <ContactsIcon/>
                }
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    )
  };

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Products",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "About us",
    },
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const Link = styled(Typography)(() => ({
    fontSize: "14px",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "ketdown" &&
      (event.type === "Tab" || event.type === "shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavBarLogo src={logoImg} />
        </Box>

        <NavBarLinkBox>
          {nav_titles.map((item,index) => (
            <Link variant="body2">{item.display}</Link>
          ))}
        </NavBarLinkBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Link variant="body2">Sign Up</Link>
        <CustomButton
          backgroundColor="#0F184C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
};

export default Header;
