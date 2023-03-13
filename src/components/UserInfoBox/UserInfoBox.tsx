import { useEffect, useState } from 'react';
import { Box, Divider, Typography, TextField, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { lengthValidation, emailValidation } from '../../helpers/validationHelper';

const UserInfoBox = ({ user, userActions, isAdmin }: any) => {

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

    const handleUpdate = () => {
        const updatedUser = { ...inputs, username, email };
        userActions.updateUser(user._id, updatedUser);
        setInputs({
            firstName: user.firstName,
            lastName: user.lastName,
            password: ''
        })

        if(isAdmin) {
            navigate('/dashboard/users')
        }
    };

    useEffect(() => {
        if (user != null) {
            setEmail(user.email)
            setUsername(user.username)
            setInputs({
                firstName: user.firstName,
                lastName: user.lastName,
                password: ''
            })
        }
    }, [user])

    const handleChange = (event: any) => {
        if (event.target.name === 'username') {
            const validated = lengthValidation(event.target.value, 6, 12)
            setUsername(event.target.value)
            if (!validated) {
                setIsUsernameError(true)
            } else {
                setIsUsernameError(false)
            }
        } else if (event.target.name === 'email') {
            const validated = emailValidation(event.target.value)
            setEmail(event.target.value)
            if (!validated) {
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

    useEffect(() => {
        return () => {
            userActions.clearMessageAndError();
        }
    }, [userActions])

    return (
        <Box>
            <Typography variant="h2" align='left' color={'#624c59'} sx={{ wordWrap: 'break-word' }}>
                Profile
            </Typography>
            <Divider sx={{ mt: 2.5, mb: 2.5 }} />
            <TextField id="firstname" label="First Name" variant="outlined" name="firstName" value={inputs.firstName} sx={{ color: '#624c59', mb: 2.5, mr: 2.5, width: '48%' }} onChange={handleChange} />
            <TextField id="lastname" label="Last Name" variant="outlined" name="lastName" value={inputs.lastName} sx={{ color: '#624c59', mb: 2.5, width: '48%' }} onChange={handleChange} />
            <TextField id="email" label="Email" variant="outlined" name="email" value={email} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={handleChange} helperText={email && isEmailError && 'Please enter a valid email'} error={isEmailError} />
            <TextField id="username" label="Username" variant="outlined" name="username" value={username} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={handleChange} helperText={username && isUsernameError && 'Only allow alphabets, numbers, min 6 character and max 12 characters'} error={isUsernameError} />
            <TextField id="password" label="Password" variant="outlined" name="password" value={inputs.password} sx={{ color: '#624c59' }} fullWidth onChange={handleChange} type="password" />
            <Divider sx={{ mt: 2.5, mb: 2.5 }} />
            <Button sx={{ color: '#624c59', border: '1px solid #624c59', width: 100, mb: 0.5 }} onClick={() => handleUpdate()} disabled={isEmailError || isUsernameError} >Save</Button>
            {/* error  && */ <Typography variant="button" display="block" gutterBottom align='left' color={'#990000'}>{/* error */}</Typography>}
        </Box>
    );
}

export default UserInfoBox;