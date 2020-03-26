import { createSelector } from 'reselect';
import { TodoState, TodoItem } from './types';
import {emptyTodo} from './helpers';

const dataTodoSelector = (state: TodoState): TodoItem[] => state.data;

const todoSelector = (state: TodoState, id: number): TodoItem => { 
    const todo = state.data.find((todo: TodoItem) => todo.id === id);
    return todo ? todo : emptyTodo;
}

export const getTodoIds = createSelector(
    dataTodoSelector,
    (data = []): number[] => data.map(({ id }: TodoItem) => id)
);

export const getTodo = createSelector(
    todoSelector,
    (item) => item
);
