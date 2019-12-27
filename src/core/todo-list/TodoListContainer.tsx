import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { compose, lifecycle } from 'recompose';
import { TodoList } from './TodoList';
import { TodoListProps, TodoListDispatchProps, TodoListStateProps } from './types';
import { preLoadTodos } from '../../features/todos/actions';

const mapStateToProps = (state: Types.RootState): TodoListStateProps => {    
    const { todos: { loading = false } = {} } = state;
    return {
        loading
    }
};

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoListDispatchProps => bindActionCreators({ preLoadTodos }, dispatch);

export const TodoListContainer = compose<TodoListProps, TodoListDispatchProps>(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle<TodoListProps, {}>({
        componentDidMount(){
            this.props.preLoadTodos();            
        }
    })
)(TodoList);