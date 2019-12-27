import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { compose, withHandlers } from 'recompose';
import { NewTodoModal } from './NewTodoModal';
import { NewTodoModalStateProps, NewTodoModalDispatchProps, NewTodoModalProps, NewTodoModalOwnProps, NewTodoModalState } from './types';
import { ToggleFieldType } from '../../features/toggle/types';
import { toggle } from '../../features/toggle/actions';
import { getMaxId } from '../../features/todos/selector';
import { addTodo } from '../../features/todos/actions';
import { TodoStatusType, TodoItem } from '../../features/todos/types';

const mapStateToProps = (state: Types.RootState): NewTodoModalStateProps => {    
    return {
        show: state.toggle[ToggleFieldType.NEW_TODO_MODAL],
        maxId: getMaxId(state.todos)
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): NewTodoModalDispatchProps => bindActionCreators({ toggle, addTodo }, dispatch);

export const NewTodoModalContainer = compose<NewTodoModalProps, NewTodoModalDispatchProps>(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers<NewTodoModalStateProps & NewTodoModalDispatchProps & NewTodoModalState, NewTodoModalOwnProps>({
        handleClose: ({ toggle }) => () => { 
            if (toggle) {
                toggle(ToggleFieldType.NEW_TODO_MODAL); 
            }
        },
        handleOk: ({ toggle, maxId = -1, text = "", addTodo }) => () => {
            const todo: TodoItem = { id: maxId + 1, text, status: TodoStatusType.CREATED };
            if (addTodo) {
                addTodo(todo);
            }
            if (toggle) {
                toggle(ToggleFieldType.NEW_TODO_MODAL);
            }
        }
    })
)(NewTodoModal);