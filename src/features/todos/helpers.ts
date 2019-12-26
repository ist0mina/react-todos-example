import { TodoStatusType } from './types';

type TodoStatusTypeValue = {
    [TodoStatusType.CREATED]: string;
    [TodoStatusType.IN_WORK]: string;
    [TodoStatusType.PAUSED]: string;
    [TodoStatusType.DONE]: string;
    [TodoStatusType.CLOSED]: string;
}

const TodoStatusTypeValues: TodoStatusTypeValue = {
    [TodoStatusType.CREATED]: 'created',
    [TodoStatusType.IN_WORK]: 'in work',
    [TodoStatusType.PAUSED]: 'paused',
    [TodoStatusType.DONE]: 'done',
    [TodoStatusType.CLOSED]: 'closed'
}

export const getTodoStatusTypeValue = (value: TodoStatusType): string => TodoStatusTypeValues[value];