import { TodoTableContainer } from '../../src/core/todo-table';

import { TodoActionTypes } from '../../src/features/todos/types';

import { mockTodos } from '../../src/services/mockData';

import { reduxify, makeMountrender, snapshotify, mockStore } from '../utils';

describe('<TodoTableContainer>', () => {
    it('matches snapshots', () => {        
        const component = reduxify({ Component: TodoTableContainer });
        const wrapper = makeMountrender(component)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
    
    it('table has rows equal to data length', () => {
        const store = mockStore();
        store.dispatch({ type: TodoActionTypes.LOAD_TODOS_SUCCESS, payload: mockTodos});
        
        const component = reduxify({ Component: TodoTableContainer, store });
        const wrapper = makeMountrender(component)();
        
        expect(wrapper.find('tbody').find('tr').length).toBe(mockTodos.length);
    });

    
});