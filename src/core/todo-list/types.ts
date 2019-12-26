export interface TodoListDispatchProps {
    preLoadTodos: () => void;
}

export interface TodoListStateProps {
    loading: boolean;
}

export type TodoListProps = TodoListStateProps & TodoListDispatchProps;