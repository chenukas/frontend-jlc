import { Box, Grid, Typography, Divider } from '@mui/material';
import { UserTable } from "../../components";

const UserPanel = ({ userState, userActions }: any) => {
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Users
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <UserTable users={userState.users} userActions={userActions} />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default UserPanel;