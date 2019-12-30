import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { compose, withHandlers } from 'recompose';
import Types from 'MyReduxTypes';
import { TodoToolbar } from './TodoToolbar';
import { TodoToolbarDispatchProps, TodoToolbarProps, TodoToolbarOwnProps } from './types';
import { toggle } from '../../features/toggle/actions';
import { ToggleFieldType } from '../../features/toggle/types';

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): TodoToolbarDispatchProps => bindActionCreators({ toggleNewTodo: toggle }, dispatch);

export const TodoToolbarContainer = compose<TodoToolbarProps, TodoToolbarDispatchProps>(
    connect(null, mapDispatchToProps),
    withHandlers<TodoToolbarDispatchProps, TodoToolbarOwnProps>({
        onNewTodo: ({ toggleNewTodo }) => () => {  
            if (toggleNewTodo) {
                toggleNewTodo(ToggleFieldType.NEW_TODO_MODAL); 
            }
        }
    })
)(TodoToolbar);