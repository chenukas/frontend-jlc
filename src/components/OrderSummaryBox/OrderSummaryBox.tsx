import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const OrderSummaryBox = ({ qty, total, createPayment, user }: any) => {
    const KEY = "pk_test_51MeYzHCOF1MHdI4PaUcSVr88sn5vHe0h6HiySblLZf6K1DQzBjmAWVMXqtpwzh4ysvd6mfsGhG3dvkWthwgfHG5N00ByusXSzy";
    const [stripeToken, setStripeToken]: any = useState(null);

    const onToken = (token: any) => {
        setStripeToken(token)
    }

    useEffect(() => {
        console.log(stripeToken)
        stripeToken && createPayment({
            tokenId: stripeToken.id,
            amount: total,
            email: user.email
        })
    }, [stripeToken])


    return (
        <Card elevation={15} sx={{
            position: "sticky",
            top: "1rem",
            minWidth: "275"
        }}>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    sx={{ fontSize: 14 }}
                >
                    Shopping Cart
                </Typography>
                <Typography variant="h3" component="h1" sx={{ color: '#624c59' }}>
                    {" "}
                    Order Summary
                </Typography>
                <Typography variant="subtitle2">
                    <hr />
                </Typography>
                <Grid container>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <Typography variant="body1">
                            Quantity
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            {qty}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Total
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                            AU${''}{total}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <StripeCheckout name={'Jean\'s LC.'} billingAddress shippingAddress description={`You have to pay AUD${total}`} amount={total} token={onToken} stripeKey={KEY} />
            </CardActions>
        </Card>
    );
}

export default OrderSummaryBox;