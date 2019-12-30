import { ToggleFieldType } from '../../features/toggle/types';

export interface TodoToolbarDispatchProps {
    toggleNewTodo?: (field: ToggleFieldType) => void;
}

export interface TodoToolbarOwnProps {
    onNewTodo: () => void;
}

export type TodoToolbarProps = TodoToolbarDispatchProps & TodoToolbarOwnProps;