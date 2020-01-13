import { makeMountrender, reduxify, snapshotify, mockStore } from '../utils';

import { NewTodoModalContainer } from '../../src/core/new-todo-modal';

import { ToggleActionType, ToggleFieldType } from '../../src/features/toggle/types';

describe('<NewTodoModalContainer>', () => {
    it('matches snapshots', () => {        
        const store = mockStore();
        store.dispatch({ type: ToggleActionType.TOGGLE, payload: ToggleFieldType.NEW_TODO_MODAL });

        const component = reduxify({ Component: NewTodoModalContainer, store });
        const wrapper = makeMountrender(component)();        
        
        console.log(wrapper.find('NewTodoModal'));

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });

    it('modal closed', () => {
        const component = reduxify({ Component: NewTodoModalContainer });
        const wrapper = makeMountrender(component)();        

        console.log(wrapper.html());
    });
});