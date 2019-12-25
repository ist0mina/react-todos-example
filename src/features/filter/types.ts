import { TodoStatusType, TodoActivityType } from '../todos/types';

export interface FilterState {
    filterStatus: TodoStatusType[];
    filterActivity?: TodoActivityType;
}

export enum FilterActionTypes {
    SET_FILTER_STATUS = '@@filter/SET_FILTER_STATUS',
    SET_FILTER_ACTIVITY = '@@filter/SET_FILTER_ACTIVITY'
}