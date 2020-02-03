import todosReducer, { initialState } from '../../src/features/todos/reducer';
import { loadTodosAsync, addTodo } from '../../src/features/todos/actions';
import { TodoState, TodoItem, TodoStatusType } from '../../src/features/todos/types';

import { mockTodos } from '../../src/services/mockData';

describe('todos reducer', () => {
    it('loading request on empty data', () => {
        expect(todosReducer(initialState, loadTodosAsync.request())).toEqual({
            ...initialState,
            data: [],
            loading: true,
            error: ''
        });     
    });

    it('loading request on not empty data', () => {
        const state: TodoState = {            
            data: mockTodos
        };

        expect(todosReducer(state, loadTodosAsync.request())).toEqual({
            ...state,
            data: [],
            loading: true,
            error: ''
        });
    });

    it('success loading data', () => {
        const state: TodoState = {
            ...initialState,
            data: [],
            loading: true,
            error: ''
        };

        expect(todosReducer(state, loadTodosAsync.success(mockTodos))).toEqual({
            ...state,
            data: mockTodos,
            loading: false
        });
    });

    it('failed loading data', () => {
        const state: TodoState = {
            ...initialState,
            data: [],
            loading: true,
            error: ''
        };

        const errorText = 'some error';

        expect(todosReducer(state, loadTodosAsync.failure(errorText))).toEqual({
            ...state,
            loading: false,
            error: errorText
        });
    });
    
    it('add new todo', () => {
       const state: TodoState = {
           ...initialState,
           data: mockTodos
       };

       const newTodo: TodoItem = {
           id: 6,
           text: 'new todo',
           status: TodoStatusType.CREATED
       };

       expect(todosReducer(state, addTodo(newTodo))).toEqual({
           ...state,
           data: [ ...state.data, newTodo ]
       });
    });
});