import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const sagaMiddlware = createSagaMiddleware();

const composeEnhacers = composeWithDevTools({});

export const createStoreWithMiddleware = (reducer: any, initialState = {}) => 
    createStore(reducer, initialState, composeEnhacers(applyMiddleware(routerMiddleware(history), sagaMiddlware)));

const store = createStoreWithMiddleware(rootReducer(history));

if (process.env.NODE_ENV !== 'test'){
    sagaMiddlware.run(rootSaga);
}

export default store;