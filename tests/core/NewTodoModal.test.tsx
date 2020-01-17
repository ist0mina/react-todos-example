import { makeMountrender, reduxify, snapshotify, mockStore } from '../utils';

import { NewTodoModalContainer, NewTodoModal, NewTodoModalProps } from '../../src/core/new-todo-modal';

import { ToggleActionType, ToggleFieldType } from '../../src/features/toggle/types';

describe('<NewTodoModalContainer>', () => {
    it('matches snapshots', () => {        
        const store = mockStore();
        store.dispatch({ type: ToggleActionType.TOGGLE, payload: ToggleFieldType.NEW_TODO_MODAL });

        const component = reduxify({ Component: NewTodoModalContainer, store });
        const wrapper = makeMountrender(component)();                    

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });

    it('modal closed', () => {
        const component = reduxify({ Component: NewTodoModalContainer });
        const wrapper = makeMountrender(component)();        

        expect(wrapper.find('div.modal-backdrop.show')).toHaveLength(0);
    });

    it ('click cancel button when text for new todo is empty', () => {
        const mockHandleOk = jest.fn();
        const mockHandleClose = jest.fn();

        const props: NewTodoModalProps = {
            handleClose: mockHandleClose,
            handleOk: mockHandleOk,
            show: true
        };

        const component = reduxify({ Component: NewTodoModal, props });
        const wrapper = makeMountrender(component)();   
                        
        wrapper.find('button[type="button"].btn').simulate('click');
        expect(mockHandleClose).toHaveBeenCalled();
    });

    it('click cancel button and reset text when text for new todo is not empty', () => {        
        const mockHandleOk = jest.fn();
        const mockHandleClose = jest.fn();

        const props: NewTodoModalProps = {
            handleClose: mockHandleClose,
            handleOk: mockHandleOk,
            show: true
        };

        const component = reduxify({ Component: NewTodoModal, props });
        const wrapper = makeMountrender(component)();    
          
        wrapper.find('input').simulate("change", { target: { value: "new todo" }});
        
        wrapper.find('button[type="button"].btn').simulate('click');        
        const input = wrapper.find('input').instance() as any;

        expect(input.value).toBe("");        
    });

    it('error validation when submit form with empty text for new todo', () => {
        const mockHandleOk = jest.fn();
        const mockHandleClose = jest.fn();

        const props: NewTodoModalProps = {
            handleClose: mockHandleClose,
            handleOk: mockHandleOk,
            show: true
        };

        const component = reduxify({ Component: NewTodoModal, props });
        const wrapper = makeMountrender(component)();    
        
        wrapper.find('form').simulate('submit');
        expect(snapshotify(wrapper)).toMatchSnapshot();
    });

    it('call ok when submit form with new todo', () => {
        const mockHandleOk = jest.fn();
        const mockHandleClose = jest.fn();

        const props: NewTodoModalProps = {
            handleClose: mockHandleClose,
            handleOk: mockHandleOk,
            show: true
        };

        const component = reduxify({ Component: NewTodoModal, props });
        const wrapper = makeMountrender(component)();  

        wrapper.find('input').simulate("change", { target: { value: "new todo" }});
        console.log(wrapper.html());
        wrapper.find('form').simulate('submit');

        expect(mockHandleOk).toHaveBeenCalled();
    });
});