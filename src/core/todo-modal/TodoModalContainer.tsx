import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Types from 'MyReduxTypes';
import { ToggleFieldType } from '../../features/toggle/types';
import { toggleSimple } from '../../features/toggle/actions';
import { saveTodo, selectTodo } from '../../features/todos/actions';
import TodoModal from './TodoModal';
import { TodoModalStateProps, TodoModalDispatchProps } from './types';

const mapStateToProps = (state: Types.RootState): TodoModalStateProps => {    
    const { todos: { selected } } = state;    

    return {
        show: state.toggle[ToggleFieldType.TODO_MODAL],
        ...selected
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoModalDispatchProps => 
    bindActionCreators({ toggle: toggleSimple, saveTodo, updateSelected: selectTodo }, dispatch);

const TodoModalContainer = connect(mapStateToProps, mapDispatchToProps)(TodoModal);

export default TodoModalContainer;
