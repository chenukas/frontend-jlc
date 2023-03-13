import { Component } from "react";
import { Button, Container, CssBaseline, Grid } from '@mui/material';
import { CartItem, OrderSummaryBox } from '../../components'

class Cart extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const { cartActions, cartState: { products, qty, total, userId, id }, paymentActions, authState: { user } } = this.props;
        return (
            <>
                <CssBaseline />
                <Container fixed>
                    <Grid container spacing={3} sx={{ mt: 10 }}>
                        <Grid item xs={12} sm={6} md={7} lg={7}>
                            <Grid container>
                                <Grid item xs>
                                    {products && products.map((product: any) => (
                                        <CartItem key={product._id} product={product} removeProductFromCart={cartActions.removeProductFromCart} />
                                    ))}
                                    {
                                        (user) && (id ? (<><Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} disabled={products.length == 0} onClick={() => cartActions.updateCart(id, {
                                            userId: user._id,
                                            products,
                                            qty,
                                            total
                                        })}>Update cart</Button>
                                            <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} disabled={products.length == 0} onClick={() => cartActions.deleteCart(id)}>Delete cart</Button> </>) :
                                            <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} disabled={products.length == 0} onClick={() => cartActions.saveCart({
                                                userId: user._id,
                                                products,
                                                qty,
                                                total
                                            })}>Save cart</Button>)
                                    }

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={5} lg={5}>
                            <OrderSummaryBox qty={qty} total={total} createPayment={paymentActions.createPayment} user={user} />
                        </Grid>
                    </Grid>
                </Container>
            </>

        )
    }
}

export default Cart;