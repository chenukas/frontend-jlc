import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActions } from '../../actions';
import { Home } from '../../components';

function mapStateToProps (state: any) {
    return {
        productState: state.productState
    }
}

function mapDispatchToProps (dispatch: any) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)