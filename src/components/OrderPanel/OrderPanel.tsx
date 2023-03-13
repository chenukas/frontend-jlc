import { Box, Grid, Typography, Divider } from '@mui/material';
import { OrderTable } from '..';

const OrderPanel = ({ orderState, orderActions}: any) => {

    return (
        <><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Orders
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <OrderTable orders={orderState.orders} orderActions={orderActions} />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default OrderPanel;