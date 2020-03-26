import { TodoStatusType } from '../../features/todos/types';

export interface TodoItemStateProps {    
    text: string;
    open: boolean;
    status: TodoStatusType;
    dateCreated: Date;
    dateLastChanged?: Date;
};

export interface TodoItemDispatchProps {
    toggle: (todo: number) => void;
    openTodo: (id: number) => void;
}

export interface TodoItemOwnProps {
    id: number;
};

export type TodoItemProps = TodoItemStateProps & TodoItemDispatchProps & TodoItemOwnProps;