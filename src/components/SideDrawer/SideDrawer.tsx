import { useNavigate } from "react-router-dom";
import { Box, Toolbar, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ScheduleOutlined, InventoryOutlined, PeopleAltOutlined, ListAltOutlined, LocalAtmOutlined } from '@mui/icons-material';

const SideDrawer = () => {
  const navigate = useNavigate();

  const handleNavigation = (view: string) => {
    navigate(`/dashboard/${view}`);
  }

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          '@media (max-width: 899px)' : { display: 'none'}
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding onClick={() => handleNavigation('')} sx={{ mt: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <ScheduleOutlined />
                </ListItemIcon>
                <ListItemText primary={'Overview'} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={() => handleNavigation('products')}>
              <ListItemButton>
                <ListItemIcon>
                  <InventoryOutlined />
                </ListItemIcon>
                <ListItemText primary={'Products'} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={() => handleNavigation('users')}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltOutlined />
                </ListItemIcon>
                <ListItemText primary={'Users'} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={() => handleNavigation('orders')}>
              <ListItemButton>
                <ListItemIcon>
                  <ListAltOutlined />
                </ListItemIcon>
                <ListItemText primary={'Orders'} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={() => handleNavigation('payments')}>
              <ListItemButton>
                <ListItemIcon>
                  <LocalAtmOutlined />
                </ListItemIcon>
                <ListItemText primary={'Payments'} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideDrawer;