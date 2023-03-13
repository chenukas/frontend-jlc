import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Home, Dashboard, Product, Cart } from "../../containers";
import { EditProduct, Header, Login, Register } from '../../components';
import { LOCAL_STORAGE } from "../../constants";

const ProtectedRouteWithAdmin = ({ children }: any) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER)!);
    const location = useLocation();

    if ((user && !user.isAdmin) || !user) {
        return <Navigate to='/login' replace state={{ from: location }} />
    }
    return children;
}

/* const ProtectedRoute = ({ children }: any) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER)!);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' replace state={{ from: location }} />
    }
    return children;
} */

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const { productState: { product }, authState: { user , message, error }, productActions, authActions } = this.props;

        return (
            <Router>
                <Header user={user} logout={authActions.logout}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login user={user} authActions={authActions} message={message} error={error}/>} />
                    <Route path="/register" element={<Register authActions={authActions} message={message} error={error}/>} />
                    <Route path="/dashboard/:view?" element={<ProtectedRouteWithAdmin><Dashboard /></ProtectedRouteWithAdmin>
                    } />
                    <Route path="/products/find/:id" element={<Product />} />
                    <Route path="/products/edit/:id" element={<ProtectedRouteWithAdmin><EditProduct product={product} productActions={productActions} /></ProtectedRouteWithAdmin>} />
                    <Route path="/carts" element={<Cart />} />
                </Routes>
            </Router>
        )
    }
}

export default App;