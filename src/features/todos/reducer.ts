import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { TodoState, TodoActionTypes, TodoItem } from './types';
import { requestEnhancerWithDefault, successEnhancerWithAnswer, failureEnhancer } from '../../helpers/reducerAsync';

export type TodoAction = ActionType<typeof actions>;

type TodoStateKeys = keyof TodoState;

const initialState: TodoState = {
    data: []    
}

export default (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.LOAD_TODOS_REQUEST:
            return requestEnhancerWithDefault<TodoState, TodoStateKeys, TodoItem[]>(state, 'data', 'loading', 'errorLoading', []);
        case TodoActionTypes.LOAD_TODOS_SUCCESS:
            return successEnhancerWithAnswer<TodoState, TodoStateKeys, TodoItem[]>(state, 'data', 'loading', action.payload);
        case TodoActionTypes.LOAD_TODOS_FAILURE:
            return failureEnhancer<TodoState, TodoStateKeys>(state, 'loading', 'errorLoading', action.payload);    
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                data: [ ...state.data, action.payload ]
            }    
        default:
            return state;
    }
}