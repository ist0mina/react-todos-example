import { TodoStatusType, TodoItem } from './types';

type TodoStatusTypeValue = {
    [key in TodoStatusType]: string;
}

const TodoStatusTypeValues: TodoStatusTypeValue = {
    [TodoStatusType.CREATED]: 'created',
    [TodoStatusType.IN_WORK]: 'in work',
    [TodoStatusType.PAUSED]: 'paused',
    [TodoStatusType.DONE]: 'done',
    [TodoStatusType.CLOSED]: 'closed'
}

export const getTodoStatusTypeValue = (value: TodoStatusType): string => TodoStatusTypeValues[value];

export const emptyTodo: TodoItem = ({
    id: -1, 
    text: '', 
    status: TodoStatusType.CREATED, 
    dateCreated: new Date(),
});

export const getMaxTodoId = (data: TodoItem[]) => Math.max(-1, ...data.map(({ id }: TodoItem) => id));

export const getTodoStatusList = () => Object.entries(TodoStatusTypeValues).map(([key, value]) => ({key, value}));