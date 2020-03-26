import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Types from 'MyReduxTypes';

import { preLoadTodos } from '../../features/todos/actions';

import { TodoPage } from './TodoPage';
import { TodoPageDispatchProps, TodoPageStateProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoPageStateProps => {    
    const { todos: { loading = false } = {} } = state;
    return {
        loading
    }
};

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoPageDispatchProps => bindActionCreators({ preLoadTodos }, dispatch);

export const TodoPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodoPage);