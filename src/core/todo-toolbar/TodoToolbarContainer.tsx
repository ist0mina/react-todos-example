import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Types from 'MyReduxTypes';
import { toggleAllTodos } from '../../features/toggle/actions';
import { isAllOpen } from '../../features/toggle/selectors';
import { loadTodosAsync, openTodo } from '../../features/todos/actions';
import TodoToolbar from './TodoToolbar';
import { TodoToolbarDispatchProps, TodoToolbarStateProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoToolbarStateProps => {
    const { todos: { loading = false } } = state;
    
    return {
        allOpen: isAllOpen(state),
        disableBtn: loading
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoToolbarDispatchProps => 
    bindActionCreators({ 
        openTodo, 
        loadTodos: loadTodosAsync.request, 
        toggleTodos: toggleAllTodos,
    }, dispatch);

const TodoToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(TodoToolbar);

export default TodoToolbarContainer;