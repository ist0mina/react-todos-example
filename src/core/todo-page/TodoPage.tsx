import React, { useEffect } from 'react';

import { SimpleSpinner } from '../../components';

import { TodoListContainer } from '../todo-list';
import { TodoToolbarContainer } from '../todo-toolbar';
import { TodoModalContainer } from '../todo-modal';

import { TodoPageProps } from './types';

export const TodoPage: React.FC<TodoPageProps> = ({ loading = false, preLoadTodos }: TodoPageProps) => {    
    useEffect(() => {
        if (!loading) {
            console.log('TodoPage mounted');
            preLoadTodos();
        }
    });

    return (
        <div className="container">
            <TodoModalContainer />
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
                    loading ? <SimpleSpinner size="2x" title="loading table..."/> : <TodoListContainer />
                }                
            </div>
        </div>
    )
}