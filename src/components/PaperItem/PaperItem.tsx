import { Paper, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaperItem = (props: any) => {
    const { product, productActions } = props;

    const navigate = useNavigate();

    const navigateProduct = (id: any) => {
        productActions.getProduct(id);
        navigate(`/products/find/${id}`);
    }

    return (
        <><Paper elevation={3}><Card sx={{ maxWidth: 300, cursor: 'pointer', backgroundColor: '#f0f0f0' }} onClick={() => navigateProduct(product._id)}>
            <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt="employee photo"
            />
            <CardContent>
                <Typography variant="h6" align='left' color={'#624c59'}>
                    {product.title}
                </Typography>
                <Typography variant="button" align='left' color={'#8585ad'}>
                    LKR{' '}{product.price}
                </Typography>
            </CardContent>
        </Card></Paper></>
    )
}

export default PaperItem;