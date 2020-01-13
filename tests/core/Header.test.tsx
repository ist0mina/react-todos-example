import { makeMountrender, reduxify, snapshotify, mockStore } from '../utils';

import { HeaderContainer } from '../../src/core/header';
import { Routes } from '../../src/core/routes';
import { TodoList } from '../../src/core/todo-list';
import { TodoDetail } from '../../src/core/todo-detail';

import { history } from '../../src/store';

import { RoutePaths } from '../../src/const/routes';

describe('<HeaderContainer>', () => {
    
    describe('active buttons', () => {
        let wrapper: any;

        beforeEach(() => {
            const component = reduxify({ Component: HeaderContainer });
            wrapper = makeMountrender(component)();
        }); 

        it('active todo list button', () => {      
            history.push(RoutePaths.ROOT);
            expect(snapshotify(wrapper)).toMatchSnapshot();
        });    

        it('active todo detail button', () => {
            history.push(RoutePaths.TODO_DETAIL);
            expect(snapshotify(wrapper)).toMatchSnapshot();
        });
    });    

    describe('simulate', () => {
        it('simulate link click', () => {
            const store = mockStore();

            const component = reduxify({ Component: Routes, store });
            const wrapper = makeMountrender(component)();            

            wrapper.find(`a[href="${RoutePaths.ROOT}"]`).simulate('click', { button: 0 });
            expect(wrapper.find(TodoList)).toHaveLength(1);

            wrapper.find(`a[href="${RoutePaths.TODO_DETAIL}"]`).simulate('click', { button: 0 });
            expect(wrapper.find(TodoDetail)).toHaveLength(1);
        });        
    });    
});