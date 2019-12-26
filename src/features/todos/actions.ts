import { createAsyncAction, action } from 'typesafe-actions';
import { TodoActionTypes, TodoItem } from './types';

export const loadTodosAsync = createAsyncAction(
    TodoActionTypes.LOAD_TODOS_REQUEST, TodoActionTypes.LOAD_TODOS_SUCCESS, TodoActionTypes.LOAD_TODOS_FAILURE
)<undefined, TodoItem[], string>();

export const preLoadTodos = () => action(TodoActionTypes.LOAD_TODOS_PRELOAD);

export const addTodo = (todo: TodoItem) => action(TodoActionTypes.ADD_TODO, todo);