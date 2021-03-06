export enum TodoStatusType {  
    CREATED = 'created',
    IN_WORK = 'inWork',
    PAUSED = 'paused',
    DONE = 'done',
    CLOSED = 'closed'
}

export enum TodoActivityType {
    All = 'all',
    ACTIVE = 'active',
    NO_ACTIVE = 'noActive'
}

export type TodoItem = {
    id: number;
    text: string;
    status: TodoStatusType;
    dateCreated: Date;
    dateLastChanged?: Date;
}

export interface TodoState {
    data: TodoItem[]; 
    selected: TodoItem;
    loading?: boolean;
    error?: string;    
}

export enum TodoActionTypes {
    LOAD_TODOS_PRELOAD = '@@todos/LOAD_TODOS_PRELOAD', 
    LOAD_TODOS_REQUEST = '@@todos/LOAD_TODOS_REQUEST',
    LOAD_TODOS_SUCCESS = '@@todos/LOAD_TODOS_SUCCESS',
    LOAD_TODOS_FAILURE = '@@todos/LOAD_TODOS_FAILURE',
    
    ADD_TODO = '@@todos/ADD_TODO',
    OPEN_TODO = '@@todos/OPEN_TODO',
    SAVE_TODO = '@@todos/SAVE_TODO',
    UPDATE_TODO = '@@todos/UPDATE_TODO',
    SELECT_TODO = '@@todos/SELECT_TODO',
    DELETE_TODO = '@@todos/DELETE_TODO',    
}