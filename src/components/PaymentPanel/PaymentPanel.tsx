import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Grid, List, ListItem, IconButton, ListItemAvatar, Typography, TextField, Divider, FormControlLabel, Checkbox } from '@mui/material';
import { PaymentTable } from '..';
import { uploadToFirebase } from '../../services/Firebase';

const PaymentPanel = ({ paymentState, paymentActions}: any) => {

    return (
        <><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Payments
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <PaymentTable payments={paymentState.payments} paymentActions={paymentActions} />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default PaymentPanel;