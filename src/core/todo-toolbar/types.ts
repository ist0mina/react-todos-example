import { ToggleFieldType } from '../../features/toggle/types';

export interface TodoToolbarDispatchProps {
    toggleNewTodo: (field: ToggleFieldType) => void;
}

export type TodoToolbarProps = TodoToolbarDispatchProps;