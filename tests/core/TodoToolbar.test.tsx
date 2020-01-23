import Types from 'MyReduxTypes';

import { TodoToolbarContainer } from '../../src/core/todo-toolbar';

import { ToggleFieldType } from '../../src/features/toggle/types';

import { reduxify, makeMountrender, snapshotify, mockStore } from '../utils';

describe('<TodoToolbar>', () => {
    it('matches snapshots', () => {        
        const component = reduxify({ Component: TodoToolbarContainer });
        const wrapper = makeMountrender(component)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });

    it('click new todo button', () => {
        const store = mockStore();
        const component = reduxify({ Component: TodoToolbarContainer, store });
        const wrapper = makeMountrender(component)();        
        
        wrapper.find("button svg[data-icon='plus']").simulate('click');        

        const state: Types.RootState = store.getState() as Types.RootState;

        const { toggle = {} } = state;
        expect(toggle[ToggleFieldType.NEW_TODO_MODAL]).toBeTruthy();
    });
});