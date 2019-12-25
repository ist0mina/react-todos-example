import { TodoItem, TodoStatusType } from '../features/todos/types';

export const mockTodos: TodoItem[] = [
    { id: 1, text: 'Create new todo', status: TodoStatusType.CREATED },
    { id: 2, text: 'Drink some coffe', status: TodoStatusType.IN_WORK },
    { id: 3, text: 'Work with new project', status: TodoStatusType.PAUSED },
    { id: 4, text: 'Check email', status: TodoStatusType.DONE },
    { id: 5, text: 'Work wiht second project', status: TodoStatusType.CLOSED }
];