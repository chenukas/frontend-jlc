import { Component } from "react";
import { Box, Grid } from '@mui/material';
import { Product } from "../../types";
import { withNavigationParamsHOC } from "../../hoc";
import { UserInfoBox } from '../../components'

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

    render() {
        const { userActions, userState: { user }, authState } = this.props;
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