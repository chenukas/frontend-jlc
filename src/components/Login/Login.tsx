import { useState, useEffect } from "react";
import { Box, Toolbar, Typography, AppBar, Button, Menu, MenuItem, Grid, TextField, Divider } from "@mui/material";
import { ShoppingBagOutlined, PermIdentityOutlined, LogoutOutlined, AccountBoxOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router";

const Login = ({ user, authActions, message, error }: any) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        authActions.login(username, password);
        clearFields();
    };

    const navigateRegister = () => {
        navigate('/register');
    }

    const navigateHome = () => {
        navigate('/')
    }

    const navigateDashboard = () => {
        navigate('/dashboard')
    }

    const clearFields = () => {
        setUsername('');
        setPassword('');
    }

    useEffect(() => {
        return () => {
            authActions.clearMessageAndError();
        }
    }, [])

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                {message ? <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#4bb543' }}>
                        {message}!
                    </Typography>
                   {user && user.isAdmin ? <div onClick={() => navigateDashboard()}>
                        <Typography variant="overline" display="block" gutterBottom sx={{ color: '#8c8c8c', cursor: 'pointer', fontSize: 'medium' }}>Continue to dashboard</Typography>
                    </div> : <div onClick={() => navigateHome()}>
                        <Typography variant="overline" display="block" gutterBottom sx={{ color: '#8c8c8c', cursor: 'pointer', fontSize: 'medium' }}>Continue shopping</Typography>
                    </div> }
                </Grid> :
                    <Grid item xs={3}>
                        <Typography variant="h2" align='left' color={'#624c59'}>Login</Typography>
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <TextField id="username" label="Username" variant="outlined" name="username" value={username} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={(e) => setUsername(e.target.value)} />
                        <TextField id="password" label="Password" variant="outlined" name="password" value={password} sx={{ color: '#624c59' }} fullWidth onChange={(e) => setPassword(e.target.value)} type="password" />
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <Button sx={{ color: '#624c59', border: '1px solid #624c59', width: 100, mb: 0.5 }} onClick={() => handleLogin()}>Log in</Button>
                        <div onClick={() => navigateRegister()}>
                            <Typography variant="overline" display="block" gutterBottom sx={{ color: '#8c8c8c', cursor: 'pointer' }}>Don't have an account?</Typography>
                        </div>
                        {error && <Typography variant="button" display="block" gutterBottom align='left' color={'#990000'}>{error}</Typography>}
                    </Grid>}
            </Grid>
        </>
    );
}

export default Login;