import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { compose, lifecycle } from 'recompose';
import { TodoList, TodoListProps, TodoListDispatchProps } from '.';
import { preLoadTodos } from '../../features/todos/actions';

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoListDispatchProps => bindActionCreators({ preLoadTodos }, dispatch);

export const TodoListContainer = compose<TodoListProps, TodoListDispatchProps>(
    connect(null, mapDispatchToProps),
    lifecycle<TodoListProps, {}>({
        componentDidMount(){
            this.props.preLoadTodos();            
        }
    })
)(TodoList);