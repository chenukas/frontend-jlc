import { takeEvery, put, call } from 'redux-saga/effects';
import { STATISTIC_ACTIONS } from '../constants';
import { statisticActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_USER_STATISTIC, GET_ORDER_STATISTIC} from '../constants/api';
import { AnyAction } from 'redux';

function* handleGetUserStatistics(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_USER_STATISTIC, 'GET', {});
        if (data) {
            yield put(statisticActions.getUserStatisticsSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(statisticActions.getUserStatisticsError(error || e));
    }
}

function* handleGetOrderStatistics(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_ORDER_STATISTIC, 'GET', {});
        if (data) {
            yield put(statisticActions.getOrderStatisticsSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(statisticActions.getOrderStatisticsError(error || e));
    }
}

export function* watchStatisticSagas() {
    yield takeEvery(STATISTIC_ACTIONS.GET_USER_STATISTIC, handleGetUserStatistics);
    yield takeEvery(STATISTIC_ACTIONS.GET_ORDER_STATISTIC, handleGetOrderStatistics);
}