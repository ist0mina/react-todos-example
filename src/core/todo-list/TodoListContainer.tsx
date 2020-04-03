import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { getTodoIds } from '../../features/todos/selectors';
import TodoList from './TodoList';
import { TodoListStateProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoListStateProps => {
    return {
        ids: getTodoIds(state.todos)
    };
};

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;