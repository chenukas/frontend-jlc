import { Component } from "react";
import { Box } from '@mui/material';
import { PaperItem } from '../../components';

class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { productActions } = this.props;
        productActions.getAllProducts();
        productActions.clearProduct();
    }

    render() {
        const { productActions, productState: { products } } = this.props;
        return (
            <>
                <Box sx={{ paddingTop: 10 }}>
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
                        {products && products.map((product: any) => (
                            <PaperItem key={product._id} product={product} productActions={productActions} isAdmin={true} />
                        ))}
                    </Box>
                </Box>
            </>
        )
    }
}

export default Home;