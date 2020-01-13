import React from 'react';
import { mergeDeepRight } from 'ramda';
import { RouterState, ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import Types from 'MyReduxTypes';

import { history, createStoreWithMiddleware } from '../../src/store';
import rootReducer from '../../src/store/rootReducer';

import { initialState as todosInitialState } from '../../src/features/todos/reducer';
import { initialState as toogleInitialState } from '../../src/features/toggle/reducer';
import { initialState as filterTreeInitialState } from '../../src/features/filter/reducer';

import { mount } from '../setup/test-setup';

import { ReduxifyProps } from './types';

const routerInitialState: RouterState = { location: { pathname: '/', search: "", hash: "", state: "" }, action: "PUSH" };

export const mockData = () => ({});

export const mockStore = (customState = {}) => {
    const root: Types.RootState = rootReducer(history)({     
        router: routerInitialState, 
        todos: todosInitialState, 
        toggle: toogleInitialState, 
        filter: filterTreeInitialState 
    }, { type: '@@INIT' });
    const state = mergeDeepRight(root, customState);
    return createStoreWithMiddleware(rootReducer(history), state);
}

export const reduxify = ({ Component, props = {}, state = {}, store }: ReduxifyProps) => () => {
    const mStore = !!store ? store : mockStore(state);
    return (
        <Provider store={mStore}>
            <ConnectedRouter history={history}>
                <Component {...props} />
            </ConnectedRouter>
        </Provider>
    );
}

export const makeMountrender = (Component: any, defaultProps = {}) => (customProps = {}) => {
    const props = {
        ...defaultProps,
        ...customProps
    };
    return mount(<Component {...props} />);
}

export const snapshotify = (reactWrapper: any) => reactWrapper.html();