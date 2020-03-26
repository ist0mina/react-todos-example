import { createSelector } from 'reselect';

import Types from 'MyReduxTypes';

import { ToggleState } from './types';

const openTodosSelector = (state: Types.RootState) => state.toggle.openTodos || [];
const dataTodoSelector = (state: Types.RootState) => state.todos.data;

const openTodoSelector = (state: ToggleState, todo: number) => {
    const openTodos = state.openTodos || [];
    return openTodos.includes(todo);
};

export const isTodoOpen = createSelector(
    openTodoSelector,
    (flag: boolean): boolean => flag
);

export const isAllOpen = createSelector(
    openTodosSelector,
    dataTodoSelector,
    (open = [], data = []) => open.length === data.length
)