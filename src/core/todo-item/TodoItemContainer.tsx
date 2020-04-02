import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Types from 'MyReduxTypes';
import { getTodo } from '../../features/todos/selector';
import { TodoItem } from '../../features/todos/types';
import { openTodo } from '../../features/todos/actions';
import { isTodoOpen } from '../../features/toggle/selector';
import { toggleTodo } from '../../features/toggle/actions';
import TodoItemComponent from './TodoItem';
import { TodoItemStateProps, TodoItemOwnProps } from './types';

const mapStateToProps = (state: Types.RootState, { id }: TodoItemOwnProps): TodoItemStateProps => {
    const item = getTodo(state.todos, id) as TodoItem;    

    const { text, status, dateCreated, dateLastChanged } = item;

    return {        
        text: text,
        open: isTodoOpen(state.toggle, id),
        status,
        dateCreated,
        dateLastChanged,
    };    
};

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({ toggle: toggleTodo, openTodo }, dispatch);

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItemComponent);

export default TodoItemContainer;