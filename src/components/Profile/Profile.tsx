import { Component } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Divider, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../types";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { uploadToFirebase } from "../../services/Firebase";
import { LOCAL_STORAGE } from "../../constants";
import { withNavigationParamsHOC } from "../../hoc";
import { UserInfoBox, OrderTable } from '../../components'

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

class Profile extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { userActions, orderActions, params } = this.props;
        const { id } = params;
        userActions.getUser(id);
        orderActions.getOrders(id);

        
    }

    /*   const navigate = useNavigate();
  
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
      } */

    render() {
        const { userActions, userState: { user, message, error}, authState } = this.props;
        return (
            <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={3} sx={{ p: 10 }}>
                    <Grid item sm={12} md={6}>
                        <UserInfoBox user={user} userActions={userActions} isAdmin={authState.user.isAdmin} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                    </Grid>
                </Grid>
            </Box>
        )

    }
}

export default withNavigationParamsHOC(Profile);