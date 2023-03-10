import { Component } from "react";
import { Box } from '@mui/material';
import { PaperItem } from '../../components';

class Cart extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    /* componentDidMount(): void {
        const { productActions } = this.props;
        productActions.getAllProducts();
        productActions.clearProduct();
    } */

    render() {
        const { productActions, productState: { products } } = this.props;
        return (
            <>
            Cart
                {/* <Box sx={{ paddingTop: 10 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 5,
                                mb: 10,
                                width: 300,
                                height: 200,
                            },
                        }}
                    >
                        {products && products.map((e: any) => (
                            <ProductItem key={e._id} id={e._id} title={e.title} desc={e.desc} img={e.img} categories={e.categories} price={e.price} inStock={e.inStock} productActions={productActions} isAdmin={true} />
                        ))}
                    </Box>
                </Box> */}
            </>
        )
    }
}

export default Cart;