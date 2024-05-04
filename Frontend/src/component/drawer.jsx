import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import Logo from '../assets/logo.svg'


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Programmes', 'Nadi Darshan', 'Get Involved', 'Resources', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const CustomButton = styled(Button)({
    color: '#1d4e6e',
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 24,
    padding: "6px 15px",
    '&:hover': {  // Corrected: '&' before ':hover'
      backgroundColor: '#daf0fd',
      color: '#1d4e6e',
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const trigger = useScrollTrigger({ disableHysteresis: true, });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', flexWrap: "wrap", padding: '0 !important' }}>
          <Box sx={{ padding: "10px", width: "100%", backgroundColor: "#1d4e6e", display: { md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
              <Box
                sx={{ display: { xs: 'flex' }, justifyContent: "center", alignItems: "center", columnGap: "8px", ml: 1 }}>
                <img src={Logo} height="30px" width="30px" alt="Logo" />
                <Typography>भारतीय नदी परिषद</Typography>
              </Box>
            </IconButton>
          </Box>

          <Box
            sx={{ backgroundColor: trigger ? 'white' : 'transparent', padding: '10px 0 !important', width: "100%", display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", columnGap: "20px" }}>
            <img src={Logo} height="225px" width="225px" alt="Logo" />
          </Box>
          {/* rgba(6, 58, 94, 0.5) */}
          <Box sx={{
            backgroundColor: '#1d4e6e',
            width: "100%",
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            columnGap: '10px',
            justifyContent: "center",
            padding: "6px 10px"
          }}>
            {navItems.map((item) => (
              <CustomButton
                key={item}
                sx={{ color: 'white' }}
              >
                <div className='pt-[2px]font-bold'>
                  {item}
                </div>
              </CustomButton>
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
