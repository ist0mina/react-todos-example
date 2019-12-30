import React from 'react';
import { TodoListProps } from './types';
import { TodoTableContainer } from '../todo-table';
import { TodoToolbarContainer } from '../todo-toolbar';
import { NewTodoModalContainer } from '../new-todo-modal';
import { SimpleSpinner } from '../../components';

export const TodoList: React.FC<TodoListProps> = ({ loading }: TodoListProps) => {    
    return (
        <div className="container">
            <NewTodoModalContainer />
            <div className="row">
                <div className="col">
                    <h1>Todo list</h1>
                </div>
            </div>
            <div className="row">
                <TodoToolbarContainer />
            </div>
            <div className="row">                
                {
                    loading ? <SimpleSpinner size="2x" title="loading table..."/> : <TodoTableContainer />
                }
            </div>
        </div>
    )
}