export interface TodoToolbarStateProps {
    allOpen: boolean;
    disableBtn: boolean;
};

export interface TodoToolbarDispatchProps {
    openTodo?: (id: number) => void;
    loadTodos?: () => void;
    toggleTodos?: () => void;
};

export type TodoToolbarProps = TodoToolbarStateProps & TodoToolbarDispatchProps;