import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { FilterState, FilterActionTypes } from './types';

export type FilterAction = ActionType<typeof actions>;

export const initialState: FilterState = {
    filterStatus: []
}

export default (state = initialState, action: FilterAction) => {
    switch (action.type){
        case (FilterActionTypes.SET_FILTER_STATUS):
            return {
                ...state,
                filterStatus: action.payload
            }
        case (FilterActionTypes.SET_FILTER_ACTIVITY):
            return {
                ...state,
                filterActivity: action.payload
            }
        default: 
            return state;
    }
}