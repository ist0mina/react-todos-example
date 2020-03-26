export enum ToggleFieldType {
    TODO_MODAL = 'todoModal'
};

export interface ToggleState {
    [ToggleFieldType.TODO_MODAL]?: boolean; 
    openTodos?: number[];   
};

export enum ToggleActionType {
    TOGGLE_SIMPLE = '@@toggle/TOGGLE_SIMPLE',

    TOGGLE_TODO = '@@toggle/TOGGLE_TODO',    

    TOGGLE_ALL_TODOS = '@@toggle/TOGGLE_ALL_TODOS',
    CLOSE_ALL_TODOS = '@@toggle/CLOSE_ALL_TODOS',
    OPEN_ALL_TODOS = '@@toggle/OPEN_ALL_TODOS',
};