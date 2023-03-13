import { AnyAction } from 'redux';
import { INITIAL_STATE, STATISTIC_ACTIONS } from '../constants';

export default function statisticReducer(
    state = INITIAL_STATE.STATISTIC_STATE,
    action: AnyAction
) {
    const { userStats, orderStats, error } = action.payload || {};

    switch (action.type) {
        case STATISTIC_ACTIONS.GET_USER_STATISTIC_SUCCESS:
            return {
                ...state,
                userStats
            };
        case STATISTIC_ACTIONS.GET_ORDER_STATISTIC_SUCCESS:
            return {
                ...state,
                orderStats
            };
        case STATISTIC_ACTIONS.GET_USER_STATISTIC_ERROR:
        case STATISTIC_ACTIONS.GET_ORDER_STATISTIC_ERROR:
            return {
                ...state,
                error
            }
        default: 
            return state;
    }
}