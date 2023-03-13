import { Card, CardContent, CardMedia, Typography, Grid, Button, Divider } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';


const CartItem = ({ product, removeProductFromCart }: any) => {

    return (
        <Card sx={{ display: 'flex', mb: 5 }}>
            <CardMedia
                sx={{ width: 151 }}
                image={product.img}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <CardMedia
                    sx={{ width: 151 }}
                    image={product.img}
                />
                <Typography variant="h4" sx={{ color: '#624c59' }}>
                    {product.title}{" "}
                </Typography>
                <Typography variant="subtitle2">
                    <Divider sx={{ mb: 1 }} />
                </Typography>
                <Grid container>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography variant="body1" >
                            Quantity
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            {product.quantity}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Price
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1} >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                            {product.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <Button sx={{ border: '1px solid #624c59' }} onClick={() => removeProductFromCart(product)}><RemoveShoppingCartOutlined sx={{ color: '#990000' }} /></Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CartItem;
