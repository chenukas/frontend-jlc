import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Dashboard, Product, Cart } from "../../containers";
import { EditProduct, Header } from '../../components';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

/*     componentDidMount(): void {
        const { productActions } = this.props;
        productActions.getAllProducts();
    } */

    render() {
        const { productState: { product }, authState: { isAdmin }, productActions } = this.props;
        return (
            <Router>
                <Header isAdmin={true} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/:view?" element={<Dashboard />} />
                    <Route path="/products/find/:id" element={<Product />} />
                    <Route path="/products/edit/:id" element={<EditProduct product={product} isAdmin={isAdmin} productActions={productActions} />} />
                    <Route path="/carts" element={<Cart />} />
                </Routes>
            </Router>
        )
    }
}

export default App;