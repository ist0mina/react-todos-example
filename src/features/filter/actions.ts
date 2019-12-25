import { action } from 'typesafe-actions';
import { TodoStatusType, TodoActivityType } from '../todos/types';
import { FilterActionTypes } from './types';

export const setFilterStatus = (values: TodoStatusType[]) => action(FilterActionTypes.SET_FILTER_STATUS, values);

export const setFilterActivity = (value: TodoActivityType) => action(FilterActionTypes.SET_FILTER_ACTIVITY, value);