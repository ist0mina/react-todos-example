import { createAsyncAction, action } from 'typesafe-actions';
import { TodoActionTypes, TodoItem } from './types';

export const loadTodosAsync = createAsyncAction(
    TodoActionTypes.LOAD_TODOS_REQUEST, TodoActionTypes.LOAD_TODOS_SUCCESS, TodoActionTypes.LOAD_TODOS_FAILURE
)<undefined, TodoItem[], string>();

export const preLoadTodos = () => action(TodoActionTypes.LOAD_TODOS_PRELOAD);

export const addTodo = (todo: TodoItem) => action(TodoActionTypes.ADD_TODO, todo);

export const openTodo = (id: number) => action(TodoActionTypes.OPEN_TODO, id);

export const saveTodo = (todo: TodoItem) => action(TodoActionTypes.SAVE_TODO, todo);

export const updateTodo = (todo: TodoItem) => action(TodoActionTypes.UPDATE_TODO, todo);

export const selectTodo = (id: number) => action(TodoActionTypes.SELECT_TODO, id);

export const deleteTodo = (id: number) => action(TodoActionTypes.DELETE_TODO, id);