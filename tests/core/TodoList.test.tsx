import { SimpleSpinner } from '../../src/components';

import { TodoList, TodoListContainer } from '../../src/core/todo-list';

import { TodoActionTypes } from '../../src/features/todos/types';

import { mockTodos } from '../../src/services/mockData';

import { reduxify, makeMountrender, snapshotify, mockStore } from '../utils';

describe('<TodoList>', () => {
    it('matches snapshots', () => {
        const component = reduxify({ Component: TodoList });
        const wrapper = makeMountrender(component)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });

    it('list has items equal to data length', () => {
        const store = mockStore();
        store.dispatch({ type: TodoActionTypes.LOAD_TODOS_SUCCESS, payload: mockTodos});
        
        const component = reduxify({ Component: TodoListContainer, store });
        const wrapper = makeMountrender(component)();
        
        expect(wrapper.find('tbody').find('tr').length).toBe(mockTodos.length);
    });

    it('view loading component when dispatch load request', () => {
        const store = mockStore();
        store.dispatch({ type: TodoActionTypes.LOAD_TODOS_REQUEST });
        
        const component = reduxify({ Component: TodoListContainer, store });
        const wrapper = makeMountrender(component)();

        expect(wrapper.find(SimpleSpinner)).toHaveLength(1);
    });
});