import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions, cartActions, paymentActions } from '../../actions';
import { Cart } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState,
        cartState: state.cartState,
        authState: state.authState
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch),
        paymentActions: bindActionCreators(paymentActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)