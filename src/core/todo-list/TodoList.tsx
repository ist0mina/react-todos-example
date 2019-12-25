import React from 'react';
import { TodoListProps } from '.';
import { TodoTableContainer } from '../todo-table';

export const TodoList: React.FC<TodoListProps> = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Todo list</h1>
                </div>
            </div>
            <div className="row">
                <TodoTableContainer />
            </div>
        </div>
    )
}