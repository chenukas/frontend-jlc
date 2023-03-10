import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Grid, List, ListItem, IconButton, ListItemAvatar, Typography, TextField, Divider, FormControlLabel, Checkbox } from '@mui/material';
import { ProductTable } from '../../components';
import { uploadToFirebase } from '../../services/Firebase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '70%',
});

const ProductPanel = (props: any) => {
    const [categories, setCategories] = useState([]);
    const [img, setImg] = useState(null);
    const [file, setFile]: any = useState(null);
    const [inputs, setInputs] = useState({
        title: '',
        desc: '',
        price: 0
    })

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

    const handleOnSubmit = () => {
        const newProduct = {
            ...inputs,
            img,
            categories
        }

        props.productActions.createProduct(newProduct);
        clearFields();
    }

    const clearFields = () => {
        setCategories([])
        setImg(null)
        setFile(null)
        setInputs({
            title: '',
            desc: '',
            price: 0
        })
    }

    return (
        <><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                <Grid item sm={12} md={6}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Products
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <ProductTable products={props.productState.products} productActions={props.productActions} />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography variant="h3" align='left' color={'#624c59'} >
                        Create Product here...
                    </Typography>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <Box>
                        {
                            img ? <Img src={img} /> : <Typography variant="button" display="block" gutterBottom align='left' color={'#624c59'}>
                                No image found!
                            </Typography>
                        }

                        <TextField id="outlined-basic" variant="outlined" sx={{ color: '#624c59', mb: 1, width: '80%' }} type={"file"} onChange={(event: any) => setFile(event.target.files[0])} />
                    </Box>
                    <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                    <Box>
                        <TextField id="outlined-basic" label="Title" variant="outlined" name="title" value={inputs.title} sx={{ color: '#624c59', mb: 2.5 }} fullWidth onChange={handleChange} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" name="desc" value={inputs.desc} sx={{ color: '#624c59', mb: 2.5 }} fullWidth multiline rows={5} onChange={handleChange} />
                        <TextField id="outlined-basic" label="Categories" variant="outlined" value={categories} sx={{ color: '#624c59' }} fullWidth onChange={handleChangeCategories} />
                        <Divider sx={{ mt: 2.5, mb: 2.5 }} />
                        <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={inputs.price} sx={{ color: '#624c59', mb: 1 }} fullWidth type={"number"} onChange={handleChange} />
                        <Button sx={{ color: '#624c59', border: '1px solid #624c59', marginRight: 1 }} onClick={() => handleOnSubmit()}>Save</Button>
                        <Typography variant="button" display="block" gutterBottom align='left' color={'#990000'}>
                            {props.productState.error}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default ProductPanel;