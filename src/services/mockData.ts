import { TodoItem, TodoStatusType } from '../features/todos/types';

export const mockTodos: TodoItem[] = [
    { id: 1, text: 'Create new todo', status: TodoStatusType.CREATED, dateCreated: new Date(2020, 2, 1, 12, 1) },
    { id: 2, text: 'Drink some coffe', status: TodoStatusType.IN_WORK, dateCreated: new Date(2020, 2, 2, 13), dateLastChanged: new Date(2020, 2, 2, 14) },
    { id: 3, text: 'Work with new project', status: TodoStatusType.PAUSED, dateCreated: new Date(2020, 2, 3, 14, 10), dateLastChanged: new Date(2020, 2, 4, 12) },
    { id: 4, text: 'Check email', status: TodoStatusType.DONE, dateCreated: new Date(2020, 2, 3, 15, 15), dateLastChanged: new Date(2020, 2, 4, 16, 40) },
    { id: 5, text: 'Work wiht second project', status: TodoStatusType.CLOSED, dateCreated: new Date(2020, 2, 4, 16, 25), dateLastChanged: new Date(2020, 2, 6, 10, 9) }
];