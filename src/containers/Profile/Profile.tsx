import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions, authActions, userActions, orderActions } from '../../actions';
import { Profile } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState,
        authState: state.authState,
        cartState: state.cartState,
        userState: state.userState,
        orderState: state.orderState,
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        orderActions: bindActionCreators(orderActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)