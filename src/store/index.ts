import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers';
import sagas from '../sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const configure = (initialState = {}) => {
    let store = createStoreWithMiddleware(rootReducer, initialState);

    sagaMiddleware.run(sagas, store);

    return store;
}

export default configure();