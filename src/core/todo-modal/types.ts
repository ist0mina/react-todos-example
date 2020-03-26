import { ToggleFieldType } from '../../features/toggle/types';
import { TodoItem } from '../../features/todos/types';

export interface TodoModalStateProps extends TodoItem {
    show?: boolean;            
}

export interface TodoModalDispatchProps {
    toggle: (field: ToggleFieldType) => void;
    saveTodo: (todo: TodoItem) => void;
};

export type TodoModalProps = TodoModalStateProps & TodoModalDispatchProps;