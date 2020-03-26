import { ActionType } from 'typesafe-actions';

import { ToggleState, ToggleActionType } from './types';
import * as actions from './actions';

type ToggleAction = ActionType<typeof actions>;

export const initialState: ToggleState = {};

export default (state = initialState, action: ToggleAction) => {
    const openTodos = state.openTodos || [];

    switch(action.type){
        case ToggleActionType.TOGGLE_SIMPLE:
            return {
                ...state,
                [action.payload]: !state[action.payload]
            };

        case ToggleActionType.TOGGLE_TODO:
            return {
                ...state,
                openTodos: openTodos.includes(action.payload) ? openTodos.filter((todo: number) => todo !== action.payload) : [ ...openTodos, action.payload ]
            };

        case ToggleActionType.OPEN_ALL_TODOS:
            return {
                ...state,
                openTodos: action.payload
            };

        case ToggleActionType.CLOSE_ALL_TODOS:
            return {
                ...state,
                openTodos: []
            };

        default:
            return state;
    }
};