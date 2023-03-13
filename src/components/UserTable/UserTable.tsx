import { useEffect } from 'react';
import { Paper, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';
import { ModeEditOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

const UserTable = ({ users, userActions }: any) => {
    const navigate = useNavigate();

    const navigateProfile = (id: any) => {
        userActions.getUser(id);
        navigate(`/profile/${id}`);
    }

    const handleOnDelete = (id: any) => {
        userActions.deleteUser(id);
    }

    useEffect(() => {
        userActions.getAllUsers();
    }, [userActions])

    return (
        <><TableContainer component={Paper} sx={{ maxHeight: 600}}>
            <Table sx={{ minWidth: 500 }} aria-label="product table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Is Admin</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user: User) => (
                        <TableRow
                            key={user._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.firstName}
                            </TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                            <TableCell align="center"><IconButton onClick={()=> navigateProfile(user._id)}><ModeEditOutlineOutlined /></IconButton></TableCell>
                            <TableCell align="center"><IconButton onClick={()=> handleOnDelete(user._id)}><DeleteOutlineOutlined /></IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>
    )
}

export default UserTable;