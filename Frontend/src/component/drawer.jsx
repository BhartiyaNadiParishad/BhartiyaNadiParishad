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
import { Menu, MenuItem, styled } from "@mui/material";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BorderBottom } from "@mui/icons-material";
import { collapse } from "@material-tailwind/react";
import DropdownMenu from "./Layout/DropdownMenu";

const drawerWidth = 240;
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
      { label: "Why BNP", path: "/about" },
      { label: "About BNP", path: "/about" },
      { label: "Meet the Team", path: "/about" },
      { label: "Mission and Vision", path: "/about" },
      { label: "Our Values", path: "/about" },
    ],
  },
  {
    menuName: "programmesMenu",
    buttonLabel: "Programmes",
    menuItems: [
      { label: "Our Focus", path: "/program" },
      { label: "Award", path: "/program" },
      { label: "Fellowship", path: "/program" },
      { label: "Symposium", path: "/program" },
      { label: "River Talk", path: "/program" },
      { label: "River Research Center", path: "/program" },
      { label: "River Research Yatra", path: "/program" },
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
      { label: "Become a member", path: "/getInvolved" },
      { label: "Internship", path: "/getInvolved" },
      { label: "Carrer", path: "/getInvolved" },
      { label: "Our Partners", path: "/getInvolved" },
      { label: "Our Supporters", path: "/getInvolved" },
    ],
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
      { label: "Contact Us", path: "/contact" },
      { label: "FAQ's", path: "/contact" },
    ],
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const CustomButton = styled(Button)({
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 20,
    padding: "7px 15px 6px 15px",
    "&:hover": {
      backgroundColor: "#daf0fd",
      color: "#051a36",
    },
  });

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

  const [anchorEls, setAnchorEls] = React.useState({
    home: null,
    about: null,
    programmesMenu: null,
    nadiDarshanMenu: null,
    getInvolvedMenu: null,
    resourcesMenu: null,
    contactMenu: null,
  });

  const handleClick = (menuName, event) => {
    setAnchorEls({ ...anchorEls, [menuName]: event.currentTarget });
  };

  const handleClose = (menuName) => {
    setAnchorEls({ ...anchorEls, [menuName]: null });
  };

  const open = (menuName) => Boolean(anchorEls[menuName]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
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
              paddingLeft: "10px",
              width: "100%",
              backgroundColor: "white",
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
              <CustomButton onClick={props.founderScroll}>Home</CustomButton>
            </Link>

            {menuData.map((menu) => (
              <DropdownMenu
                key={menu.menuName}
                id={menu.menuName}
                menuName={menu.menuName}
                buttonLabel={menu.buttonLabel}
                menuItems={menu.menuItems}
                anchorEl={anchorEls[menu.menuName]}
                handleClick={handleClick}
                handleClose={handleClose}
                open={open(menu.menuName)}
              />
            ))}

            {/* <Button
							id="about-button"
							aria-controls={open("about") ? "about" : undefined}
							aria-haspopup="true"
							aria-expanded={open("about") ? "true" : undefined}
							onClick={(event) => handleClick("about", event)}
							endIcon={<KeyboardArrowDownIcon />}
							disableElevation
							sx={{
								color: "white",
								fontSize: 15,
								fontWeight: "bold",
								borderRadius: 10,
								padding: "7px 15px 6px 15px",
								"&:hover": {
									backgroundColor: "#daf0fd",
									color: "#051a36",
								},
							}}
						>
							About
						</Button>
						<StyledMenu
							id="about-menu"
							anchorEl={anchorEls.about}
							open={open("about")}
							onClose={() => handleClose("about")}
							MenuListProps={{
								"aria-labelledby": "about-button",
							}}
						>
							<Link to={"/about"}>
								<MenuItem onClick={() => handleClose("about")}>
									Why BNP
								</MenuItem>
							</Link>
							<Link to={"/about"}>
								<MenuItem onClick={() => handleClose("about")}>
									About BNP
								</MenuItem>
							</Link>
							<Link to={"/about"}>
								<MenuItem onClick={() => handleClose("about")}>
									Meet the Team
								</MenuItem>
							</Link>
							<Link to={"/about"}>
								<MenuItem onClick={() => handleClose("about")}>
									Mission and Vision
								</MenuItem>
							</Link>
							<Link to={"/about"}>
								<MenuItem onClick={() => handleClose("about")}>
									Our Values
								</MenuItem>
							</Link>
						</StyledMenu>

						<Link to={"/"}>
							<CustomButton>Programmes</CustomButton>
						</Link>
						<Link to={"/"}>
							<CustomButton>Nadi Darshan</CustomButton>
						</Link>
						<Link to={"/GetInvolved"}>
							<CustomButton>Get Involved</CustomButton>
						</Link>
						<Link to={"/"}>
							<CustomButton>Resources</CustomButton>
						</Link>
						<Link to={"/Contact"}>
							<CustomButton>Contact</CustomButton>
						</Link> */}
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
