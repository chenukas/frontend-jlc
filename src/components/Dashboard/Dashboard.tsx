import { Component } from "react";
import { SideDrawer, ProductPanel, PaymentPanel, OrderPanel, UserPanel, StatisticPanel } from "../../components";
import { Box, Typography, CssBaseline } from "@mui/material";
import { withNavigationParamsHOC } from "../../hoc";

class Dashboard extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { productState, paymentState, orderState, productActions , paymentActions, orderActions, userActions, statisticActions } = this.props;
        productActions.getAllProducts();
        paymentActions.getAllPayments();
        orderActions.getAllOrders();
        userActions.getAllUsers();
        statisticActions.getUserStatistics();
        statisticActions.getOrderStatistics();
    }

    renderViews = (view: string) => {
        const { productState, paymentState, orderState, userState, productActions , paymentActions, orderActions, userActions, statisticState, statisticActions } = this.props;

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
                {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box> */}
            </Box>
        )
    }
}

export default withNavigationParamsHOC(Dashboard);