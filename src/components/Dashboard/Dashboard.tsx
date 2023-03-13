import { Component } from "react";
import { SideDrawer, ProductPanel, PaymentPanel, OrderPanel, UserPanel, StatisticPanel } from "../../components";
import { Box, CssBaseline } from "@mui/material";
import { withNavigationParamsHOC } from "../../hoc";

class Dashboard extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { productActions, paymentActions, orderActions, userActions, statisticActions } = this.props;
        productActions.getAllProducts();
        paymentActions.getAllPayments();
        orderActions.getAllOrders();
        userActions.getAllUsers();
        statisticActions.getUserStatistics();
        statisticActions.getOrderStatistics();
    }

    renderViews = (view: string) => {
        const { productState, paymentState, orderState, userState, productActions, paymentActions, orderActions, userActions, statisticState, statisticActions } = this.props;

        switch (view) {
            case 'products':
                return (<>
                    <ProductPanel productState={productState} productActions={productActions} />

                </>);
            case 'users':
                return (<>
                    <UserPanel userState={userState} userActions={userActions} />

                </>);
            case 'orders':
                return (<>
                    <OrderPanel orderState={orderState} orderActions={orderActions} />

                </>);
            case 'payments':
                return (<>
                    <PaymentPanel paymentState={paymentState} paymentActions={paymentActions} />

                </>);
            default:
                return (<>
                    <StatisticPanel statisticState={statisticState} statisticActions={statisticActions} />

                </>);

        }
    }

    render() {
        const { params: { view } } = this.props;
        return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <SideDrawer />
                <Box component="main" sx={{ flexGrow: 1, p: 15 }}>
                    {this.renderViews(view)}
                </Box>
            </Box>
        )
    }
}

export default withNavigationParamsHOC(Dashboard);