import { useState } from "react";
import { Box, Toolbar, Typography, AppBar, Button, Menu, MenuItem } from "@mui/material";
import { ShoppingBagOutlined, PermIdentityOutlined, LogoutOutlined, AccountBoxOutlined } from '@mui/icons-material';
import logo from '../../img/logo192.png';
import { useNavigate } from "react-router";

const Header = ({user, logout}: any) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        navigate('/')
        logout()
        handleClose()

    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#f0f0f0' }} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <img
                        src={logo}
                        alt={'sas'}
                        loading="lazy"
                        style={{ width: 48, height: 48, cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#624c59', fontFamily: 'Single Day, cursive', fontSize: 24, fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>
                        JEAN'S LC.
                    </Typography>
                    <Button sx={{ color: '#624c59' }} onClick={user ? handleMenu : navigateLogin}><PermIdentityOutlined />{' '}{user && user.firstName}</Button>
                    {user && <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} sx={{color: '#624c59', fontWeight: 'bold', fontSize: 'small'}}><AccountBoxOutlined sx={{color: '#624c59'}}/>{' '}PROFILE</MenuItem>
                        <MenuItem onClick={handleLogout} sx={{color: '#624c59', fontWeight: 'bold', fontSize: 'small'}}><LogoutOutlined sx={{color: '#624c59'}}/>{' '}LOGOUT</MenuItem>
                    </Menu>}
                    <Button sx={{ color: '#624c59' }} onClick={() => navigate('/carts')}><ShoppingBagOutlined />{' '}0</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
