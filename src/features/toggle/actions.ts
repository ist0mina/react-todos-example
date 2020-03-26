import { action } from 'typesafe-actions';

import { ToggleActionType, ToggleFieldType } from './types';

export const toggleSimple = (field: ToggleFieldType) => action(ToggleActionType.TOGGLE_SIMPLE, field);

export const toggleTodo = (todo: number) => action(ToggleActionType.TOGGLE_TODO, todo);

export const toggleAllTodos = () => action(ToggleActionType.TOGGLE_ALL_TODOS);
export const closeAllTodos = () => action(ToggleActionType.CLOSE_ALL_TODOS);
export const openAllTodos = (todos: number[]) => action(ToggleActionType.OPEN_ALL_TODOS, todos);