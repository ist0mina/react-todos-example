import { ActionType } from 'typesafe-actions';

import { requestEnhancerWithDefault, successEnhancerWithAnswer, failureEnhancer } from '../../helpers/reducerAsync';

import * as actions from './actions';
import { TodoState, TodoActionTypes, TodoItem } from './types';
import {getMaxTodoId} from './helpers';

export type TodoAction = ActionType<typeof actions>;

type TodoStateKeys = keyof TodoState;

export const initialState: TodoState = {
    data: [],
    selected: -1,    
};

export default (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.LOAD_TODOS_REQUEST:
            return requestEnhancerWithDefault<TodoState, TodoStateKeys, TodoItem[]>(state, 'data', 'loading', 'error', []);
        case TodoActionTypes.LOAD_TODOS_SUCCESS:
            return successEnhancerWithAnswer<TodoState, TodoStateKeys, TodoItem[]>(state, 'data', 'loading', action.payload);
        case TodoActionTypes.LOAD_TODOS_FAILURE:
            return failureEnhancer<TodoState, TodoStateKeys>(state, 'loading', 'error', action.payload);    
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                data: [...state.data, { ...action.payload, id: getMaxTodoId(state.data) + 1 }]
            };
        case TodoActionTypes.UPDATE_TODO:
            return {
                ...state,
                data: state.data.map((todo: TodoItem) => todo.id === action.payload.id ? ({ ...todo, ...action.payload }) : todo)
            };
        case TodoActionTypes.SELECT_TODO:
            return {
                ...state,
                selected: action.payload
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                data: state.data.filter((todo: TodoItem) => todo.id !== action.payload)
            };
        default:
            return state;
    }
};