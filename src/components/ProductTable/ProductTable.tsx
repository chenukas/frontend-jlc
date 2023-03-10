import { useEffect } from 'react';
import { Paper, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';
import { ModeEditOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

const ProductTable = (props: any) => {
    const { products, productActions } = props;

    const navigate = useNavigate();

    const navigateEditProduct = (id: any) => {
        productActions.getProduct(id);
        navigate(`/products/edit/${id}`);
    }

    const handleOnDelete = (id: any) => {
        productActions.deleteProduct(id);
    }

    useEffect(() => {
        productActions.getAllProducts();
    }, [])

    return (
        <><TableContainer component={Paper} sx={{ maxHeight: 600}}>
            <Table sx={{ minWidth: 500 }} aria-label="product table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>In Stock</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product: Product) => (
                        <TableRow
                            key={product._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.title}
                            </TableCell>
                            <TableCell>LKR {product.price}</TableCell>
                            <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
                            <TableCell align="center"><IconButton onClick={()=> navigateEditProduct(product._id)}><ModeEditOutlineOutlined /></IconButton></TableCell>
                            <TableCell align="center"><IconButton onClick={()=> handleOnDelete(product._id)}><DeleteOutlineOutlined /></IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>
    )
}

export default ProductTable;