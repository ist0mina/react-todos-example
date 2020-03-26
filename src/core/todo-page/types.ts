export interface TodoPageDispatchProps {
    preLoadTodos: () => void;
}

export interface TodoPageStateProps {
    loading: boolean;
}

export type TodoPageProps = TodoPageStateProps & TodoPageDispatchProps;