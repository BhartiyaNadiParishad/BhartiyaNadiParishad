/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MenuItem, Popper } from "@mui/material";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useScrollTrigger } from "@mui/material";

const drawerWidth = 300;
const navItems = [
  "Home",
  "About",
  "Programmes",
  "Nadi Darshan",
  "Get Involved",
  "Resources",
  "Contact",
];

const menuData = [
  {
    menuName: "about",
    buttonLabel: "About",
    menuItems: [
      { label: "Mission, Vision and Values", path: "/mission" },
      { label: "History and Success", path: "/history" },
      { label: "Meet the Team", path: "/team" },
      { label: "Partners & Supporters", path: "/partners" },
      { label: "Jobs", path: "/" },
      { label: "Press Center", path: "/" },
    ],
  },
  {
    menuName: "programmesMenu",
    buttonLabel: "Programmes",
    menuItems: [
      // { label: "Our Focus", path: "/programmesMenu" },
      // { label: "Award", path: "/programmesMenu" },
      // { label: "Fellowship", path: "/programmesMenu" },
      // { label: "Symposium", path: "/programmesMenu" },
      // { label: "River Talk", path: "/programmesMenu" },
      // { label: "River Research Center", path: "/programmesMenu" },
      // { label: "River Research Yatra", path: "/programmesMenu" },
    ],
  },
  {
    menuName: "nadiDarshanMenu",
    buttonLabel: "Nadi Darshan",
    menuItems: [
      { label: "Indian River System", path: "/" },
      { label: "River Basin Maps", path: "/" },
      { label: "River Videos", path: "/" },
      { label: "Factsheet", path: "/" },
    ],
  },
  {
    menuName: "getInvolvedMenu",
    buttonLabel: "Get Involved",
    menuItems: [
      { label: "Become a member", path: "/membership" },
      { label: "Internship", path: "/internship" },
      { label: "Become a Volunteer", path: "/volunteer" },
    ]
  },
  {
    menuName: "resourcesMenu",
    buttonLabel: "Resources",
    menuItems: [
      { label: "Gallery", path: "/gallery" },
      { label: "Documents", path: "/" },
      { label: "Newsletter", path: "/" },
      { label: "Publication", path: "/" },
      { label: "Capacity Building Tools", path: "/" },
      { label: "Success Stories", path: "/" },
    ],
  },
  {
    menuName: "contactMenu",
    buttonLabel: "Contact",
    menuItems: [
      { label: "Contact Us", path: "/contactMenu" },
      { label: "FAQ's", path: "/contactMenu" },
    ],
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const trigger = useScrollTrigger();

  const [anchorEls, setAnchorEls] = React.useState({
    about: null,
    programmesMenu: null,
    nadiDarshanMenu: null,
    getInvolvedMenu: null,
    resourcesMenu: null,
    contactMenu: null,
  });

  const handleClick = (menuName, event) => {
    setAnchorEls({
      about: null,
      programmesMenu: null,
      nadiDarshanMenu: null,
      getInvolvedMenu: null,
      resourcesMenu: null,
      contactMenu: null,
      [menuName]: event.currentTarget,
    });
  };

  const handleClose = (menuName) => {
    setAnchorEls({ ...anchorEls, [menuName]: null });
  };

  const isPopperOpen = (menuName) => Boolean(anchorEls[menuName]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          display: { xs: "flex", md: trigger ? "none" : "flex" },
          background: "none",
          padding: "0px !important",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0 !important",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              paddingLeft: "10px",
              width: "100%",
              display: { md: "none" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
              <Box
                sx={{
                  display: { xs: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "8px",
                  ml: 1,
                }}
              >
                <img src={Logo} height="auto" width="75px" alt="Logo" />
              </Box>
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: "#ffffffbf",
              padding: "10px 0 !important",
              width: "100%",
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              columnGap: "20px",
            }}
          >
            <img src={Logo} height="225px" width="225px" alt="Logo" />
          </Box>
          <Box
            sx={{
              backgroundColor: "#051a36",
              width: "100%",
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              columnGap: "10px",
              justifyContent: "center",
              padding: "6px 10px",
            }}
          >
            <Link to={"/"}>
              <Button
                sx={{ color: "white", fontWeight: "bold" }}
                onClick={props.founderScroll}
              >
                Home
              </Button>
            </Link>
            {menuData.map((menu, index) => (
              <div
                key={index}
                onMouseEnter={(event) => handleClick(menu.menuName, event)}
                onMouseLeave={() => handleClose(menu.menuName)}
              >
                <Link to={`/${menu.menuName}`}>
                  <Button
                    aria-describedby={`${menu.menuName}-popover`}
                    sx={{
                      ml: 3,
                      color: "white",
                      fontWeight: "bold",
                      "& .MuiButton-endIcon": {
                        ml: 0, // Applying margin-left of 0 to endIcon
                      },
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {menu.buttonLabel}
                  </Button>
                </Link>
                <Popper
                  id={`${menu.menuName}-popover`}
                  open={isPopperOpen(menu.menuName)}
                  anchorEl={anchorEls[menu.menuName]}
                  sx={{ zIndex: 1200 }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#051a36",
                    }}
                  >
                    {menu.menuItems &&
                      menu.menuItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                          <MenuItem
                            sx={{
                              borderTop: "1px solid white",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "white",
                                color: "#051a36",
                              },
                            }}
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                      ))}
                  </Box>
                </Popper>
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
