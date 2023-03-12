import { useState, useEffect } from "react";
import { Typography, Button, Grid, TextField, Divider } from "@mui/material";
import { useNavigate } from "react-router";
import { emailValidation, lengthValidation } from "../../helpers/validationHelper";

const Register = ({ authActions, message, error }: any) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        password: ''
    });
    const [username, setUsername] = useState('');
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);

    const handleRegister = () => {
        const user = { ...inputs, username, email };
        authActions.register(user);
        clearFields();
    };

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleChange = (event: any) => {
        if (event.target.name === 'username') {
            const validated = lengthValidation(event.target.value, 6, 12)
            setUsername(event.target.value)
            if(!validated) {
                setIsUsernameError(true)
            } else {
                setIsUsernameError(false)
            }
        } else if (event.target.name === 'email') {
            const validated = emailValidation(event.target.value)
            setEmail(event.target.value)
            if(!validated) {
                setIsEmailError(true)
            } else {
                setIsEmailError(false)
            }
        } else {
            setInputs((prev) => {
                return { ...prev, [event.target.name]: event.target.value }
            })
        }
    }

    const clearFields = () => {
        setInputs({
            firstName: '',
            lastName: '',
            password: ''
        })
        setEmail('')
        setUsername('')
    }

    useEffect(() => {
        return () => {
            authActions.clearMessageAndError();
        }
    }, [authActions])

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
                    <div onClick={() => navigateLogin()}>
                        <Typography variant="overline" display="block" gutterBottom sx={{ color: '#8c8c8c', cursor: 'pointer', fontSize: 'medium' }}>Continue login</Typography>
                    </div>
                </Grid> :
                    <Grid item xs={3}>
                        <Typography variant="h2" align='left' color={'#624c59'}>Register</Typography>
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <TextField id="firstname" label="First Name" variant="outlined" name="firstName" value={inputs.firstName} sx={{ color: '#624c59', mb: 2.5, mr: 2.5, width: '49%' }} onChange={handleChange} />
                        <TextField id="lastname" label="Last Name" variant="outlined" name="lastName" value={inputs.lastName} sx={{ color: '#624c59', mb: 2.5, width: '49%' }} onChange={handleChange} />
                        <TextField id="email" label="Email" variant="outlined" name="email" value={email} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={handleChange} helperText={email && isEmailError && 'Please enter a valid email'} error={isEmailError}/>
                        <TextField id="username" label="Username" variant="outlined" name="username" value={username} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={handleChange} helperText={username && isUsernameError && 'Only allow alphabets, numbers, min 6 character and max 12 characters'} error={isUsernameError}/>
                        <TextField id="password" label="Password" variant="outlined" name="password" value={inputs.password} sx={{ color: '#624c59' }} fullWidth onChange={handleChange} type="password" />
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <Button sx={{ color: '#624c59', border: '1px solid #624c59', width: 100, mb: 0.5 }} onClick={() => handleRegister()} disabled={isEmailError || isUsernameError}>Register</Button>
                        <div onClick={() => navigateLogin()}>
                            <Typography variant="overline" display="block" gutterBottom sx={{ color: '#8c8c8c', cursor: 'pointer' }}>Have an account?</Typography>
                        </div>
                        {error && <Typography variant="button" display="block" gutterBottom align='left' color={'#990000'}>{error}</Typography>}
                    </Grid>}
            </Grid>
        </>
    );
}

export default Register;