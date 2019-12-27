import { ToggleFieldType } from '../../features/toggle/types';
import { TodoItem } from '../../features/todos/types';

export interface NewTodoModalStateProps {
    show?: boolean;
    maxId?: number;
}

export interface NewTodoModalDispatchProps {
    toggle?: (field: ToggleFieldType) => void;
    addTodo?: (todo: TodoItem) => void;
}

export interface NewTodoModalOwnProps {
    handleClose: () => void;
    handleOk: () => void;
}

export interface NewTodoModalState {
    text: string;
}

export type NewTodoModalProps = NewTodoModalStateProps & NewTodoModalDispatchProps & NewTodoModalOwnProps & NewTodoModalState;