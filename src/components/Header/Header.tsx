import { Box, Toolbar, Typography, AppBar, Button } from "@mui/material";
import { ShoppingBagOutlined, PermIdentityOutlined } from '@mui/icons-material';
import logo from '../../img/logo192.png';
import { useNavigate } from "react-router";

const Header = (isAdmin: any) => {
    const navigate = useNavigate();
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
                    <Button sx={{ color: '#624c59' }} ><PermIdentityOutlined />{' '}Chenuka</Button>
                    <Button sx={{ color: '#624c59' }} onClick={() => navigate('/carts')}><ShoppingBagOutlined />{' '}0</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
