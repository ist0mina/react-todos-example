import { ActionType } from 'typesafe-actions';
import { ToggleState, ToggleActionType } from './types';
import * as actions from './actions';

type ToggleAction = ActionType<typeof actions>;

export const initialState: ToggleState = {};

export default (state = initialState, action: ToggleAction) => {
    switch(action.type){
        case ToggleActionType.TOGGLE:
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        default:
            return state;
    }
}