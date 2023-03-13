import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Divider, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../types";
import { uploadToFirebase } from "../../services/Firebase";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '70%',
});

export interface Props {
    product: Product,
    productActions: any
}

const EditProduct = ({ product, productActions }: Props) => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [categories, setCategories] = useState(['']);
    const [inStock, setInStock] = useState(true);
    const [img, setImg] = useState('');
    const [file, setFile]: any = useState(null);
    const [inputs, setInputs] = useState({
        title: '',
        desc: '',
        price: 0
    })

    useEffect(() => {
        productActions.getProduct(id)
    }, [])

    useEffect(() => {
        if (product != null) {
            setCategories(product.categories)
            setInStock(product.inStock)
            setImg(product.img)
            setInputs({
                title: product.title,
                desc: product.desc,
                price: product.price
            })
        }
    }, [product])

    useEffect(() => {
        if (file != null) {
            const filename = new Date().getTime() + file.name;
            
            // Create the file metadata
            /** @type {any} */
            const metadata = {
                contentType: 'image/jpeg'
            };

            uploadToFirebase(filename, file, metadata, setImg);
        }

    }, [file])

    const handleChange = (event: any) => {
        setInputs((prev) => {
            return { ...prev, [event.target.name]: event.target.name == 'price' ? Number(event.target.value) : event.target.value }
        })
    }

    const handleChangeCategories = (event: any) => {
        setCategories(event.target.value.split(","))
    }

    const handleChangeCheckbox = (event: any) => {
        setInStock(event.target.checked);
    };

    const handleOnSubmit = () => {
        const updatedProduct = {
            ...inputs,
            img,
            categories,
            inStock
        }

        productActions.updateProduct(product._id, updatedProduct);
        navigate('/dashboard/products')
    }

    return (
        <Box sx={{ flexGrow: 1, mt: 10 }}>
            <Grid container spacing={3} sx={{ p: 10 }}>
                <Grid item sm={12} md={6}>
                    <Box>
                        {product && <Img src={img} />}
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <TextField id="outlined-basic" variant="outlined" sx={{ color: '#624c59', mb: 1, width: '80%' }} type={"file"} onChange={(event: any) => setFile(event.target.files[0])} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box>
                        {product &&
                            (<>
                                <Typography variant="h2" align='left' color={'#624c59'} sx={{ wordWrap: 'break-word' }}>
                                    {inputs.title}
                                </Typography>
                                <TextField id="outlined-basic" label="Title" variant="outlined" name="title" value={inputs.title} sx={{ color: '#624c59' }} fullWidth onChange={handleChange} />
                                <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                                <Typography variant="body1" align='left' color={'#8585ad'} sx={{ wordWrap: 'break-word' }}>
                                    {inputs.desc}
                                </Typography>
                                <TextField id="outlined-basic" label="Description" variant="outlined" name="desc" value={inputs.desc} sx={{ color: '#624c59' }} fullWidth multiline rows={5} onChange={handleChange} />
                                <Box sx={{ display: 'flex', mt: 2.5 }}>
                                    {
                                        categories && categories.map((e: any) => (<>
                                            <Typography key={e} variant="body1" gutterBottom align='left' color={'#1f1f20'} sx={{ pr: 1, textDecoration: 'underline', wordWrap: 'break-word' }}>
                                                {`${e} `}
                                            </Typography>
                                        </>
                                        ))
                                    }
                                </Box>
                                <TextField id="outlined-basic" label="Categories" variant="outlined" value={categories} sx={{ color: '#624c59' }} fullWidth onChange={handleChangeCategories} />
                                <FormControlLabel control={<Checkbox checked={inStock} sx={{
                                    color: '#1f1f20',
                                    '&.Mui-checked': {
                                        color: '#1f1f20',
                                    },
                                }} onChange={handleChangeCheckbox} />} label="In Stock" sx={{ color: '#1f1f20' }} />
                                <Divider sx={{ mt: 5, mb: 2.5 }} />
                                <Typography variant="h4" gutterBottom align='left' color={'#8585ad'}>
                                    AUD{' '}{inputs.price}
                                </Typography>
                                <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={inputs.price} sx={{ color: '#624c59', mb: 1 }} fullWidth type={"number"} onChange={handleChange} />
                                <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} onClick={() => handleOnSubmit()}>Save</Button>
                            </>)}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditProduct;