import { connect } from 'react-redux';

import Types from 'MyReduxTypes';

import { getTodoIds } from '../../features/todos/selector';

import { TodoList } from './TodoList';
import { TodoListStateProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoListStateProps => {
    return {
        ids: getTodoIds(state.todos)
    };
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);