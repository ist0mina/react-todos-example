import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddlware = createSagaMiddleware();

const composeEnhacers = composeWithDevTools({});

export const createStoreWithMiddleware = (reducer: any, initialState = {}) => 
    createStore(reducer, initialState, composeEnhacers(applyMiddleware(sagaMiddlware)));

const store = createStoreWithMiddleware(rootReducer());

if (process.env.NODE_ENV !== 'test'){
    sagaMiddlware.run(rootSaga);
}

export default store;