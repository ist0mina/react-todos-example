import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Types from 'MyReduxTypes';

import { ToggleFieldType } from '../../features/toggle/types';
import { toggleSimple } from '../../features/toggle/actions';
import { saveTodo } from '../../features/todos/actions';
import { getTodo } from '../../features/todos/selector';

import { TodoModal } from './TodoModal';
import { TodoModalStateProps, TodoModalDispatchProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoModalStateProps => {    
    const { todos: { selected } } = state;    

    return {
        show: state.toggle[ToggleFieldType.TODO_MODAL],
        ...getTodo(state.todos, selected)
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoModalDispatchProps => bindActionCreators({ toggle: toggleSimple, saveTodo }, dispatch);

export const TodoModalContainer = connect(mapStateToProps, mapDispatchToProps)(TodoModal);