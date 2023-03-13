import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions, paymentActions, orderActions, userActions, statisticActions } from '../../actions';
import { Dashboard } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState,
        paymentState: state.paymentState,
        orderState: state.orderState,
        userState: state.userState,
        statisticState: state.statisticState
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        paymentActions: bindActionCreators(paymentActions, dispatch),
        orderActions: bindActionCreators(orderActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        statisticActions: bindActionCreators(statisticActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)