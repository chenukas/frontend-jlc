import { Component } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import { withNavigationParamsHOC } from "../../hoc";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '70%',
});

class Product extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }


    componentDidMount(): void {
        const { productActions, params } = this.props;
        const { id } = params;
        productActions.getProduct(id);

    }

    navigateEditProduct = (id: any) => {
        const { navigate } = this.props;
        navigate(`/products/edit/${id}`);
    }

    componentWillUnmount(): void {
        const { productActions } = this.props;
        productActions.clearProduct();
    }

    handleOnDelete = (id: any) => {
        const { productActions, navigate } = this.props;
        productActions.deleteProduct(id);
        navigate(`/`);
    }

    render() {
        const { productState: { product }, authState: { user }, cartActions: { addProductToCart } } = this.props;
        return (
            <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={3} sx={{ p: 10 }}>
                    <Grid item sm={12} md={6}>
                        <Box>
                            {product && <Img src={product.img} />}
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box>
                            {product &&
                                (<>
                                    <Typography variant="h2" align='left' color={'#624c59'} sx={{ wordWrap: 'break-word' }} >
                                        {product.title}
                                    </Typography>
                                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                                    <Typography variant="body1" gutterBottom align='left' color={'#8585ad'} sx={{ wordWrap: 'break-word' }}>
                                        {product.desc}
                                    </Typography>
                                    <Box sx={{ display: 'flex', mt: 2.5 }}>
                                        {
                                            product && product.categories.map((e: any) => (<>
                                                <Typography key={e} variant="body1" gutterBottom align='left' color={'#1f1f20'} sx={{ pr: 1, textDecoration: 'underline', wordWrap: 'break-word' }}>
                                                    {`${e} `}
                                                </Typography>
                                            </>
                                            ))
                                        }
                                    </Box>

                                    <Divider sx={{ mt: 5, mb: 2.5 }} />
                                    <Typography variant="h4" gutterBottom align='left' color={'#8585ad'}>
                                        LKR{' '}{product.price}
                                    </Typography>
                                    {!product.inStock && <Typography variant="button" display="block" gutterBottom align='left' color={'#990000'}>
                                        Out of stock!
                                    </Typography> }
                                    <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} disabled={!product.inStock} onClick={() => addProductToCart({...product, quantity: 1})}>Add to cart</Button>
                                    {user && user.isAdmin && (<>
                                        <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} onClick={() => this.navigateEditProduct(product._id)}>Edit</Button>
                                        <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} onClick={() => this.handleOnDelete(product._id)}>Delete</Button>
                                    </>)}
                                </>)}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default withNavigationParamsHOC(Product);