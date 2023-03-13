import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions, authActions } from '../../actions';
import { App } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState,
        authState: state.authState,
        cartState: state.cartState,
        userState: state.userState
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)