import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions, paymentActions } from '../../actions';
import { Dashboard } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState,
        paymentState: state.paymentState
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        paymentActions: bindActionCreators(paymentActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)