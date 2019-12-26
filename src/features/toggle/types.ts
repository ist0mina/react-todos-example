export enum ToggleFieldType {
    NEW_TODO_MODAL = 'newTodoModal'
}

export interface ToggleState {
    [ToggleFieldType.NEW_TODO_MODAL]?: boolean;    
}

export enum ToggleActionType {
    TOGGLE = '@@toggle/TOGGLE'
}