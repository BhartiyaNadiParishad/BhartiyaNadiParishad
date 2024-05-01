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


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Programmes', 'Nadi Darshan', 'Get Involved', 'Resources', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const CustomButton = styled(Button)({
    color: 'white',
    fontSize: 12,
    borderRadius: 24,
    fontWeight: 'bold',
    padding: "6px 20px",
    '&:hover': {  // Corrected: '&' before ':hover'
      backgroundColor: 'white',
      color: '#47d0d9',
    },
    '&.active': {  // Corrected: '&' before ':active'
      backgroundColor: 'white',
      color: '#47d0d9',
    }
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
            <ListItemButton sx={{ textAlign: 'center' ,}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const trigger = useScrollTrigger();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav"
        sx={{backgroundColor: trigger? '#002641' : 'rgba(6, 58, 94, 0.5)', boxShadow: 'none'}}>
        <Toolbar sx={{display: 'flex', padding: '20px 15px !important', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
            <Typography sx={{ml:2}}>Bharitya Nadi Parishad</Typography>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: 18, flexGrow: 'none', display: { xs: 'none', md: 'block' } }}
          >
            Bharitya Nadi Parishad
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } , flexDirection: 'row' , columnGap: '4px' }}>
            
            {navItems.map((item) => (
              <CustomButton
                key={item}
                className={item === 'Home' ? 'active' : ''}
                sx={{ display: 'flex', alignItems: 'center !important', }}
              >
                {item}
              </CustomButton>
            ))}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 'none', display: { xs: 'none', md: 'block' } }}
          >
            Icon
          </Typography>
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
