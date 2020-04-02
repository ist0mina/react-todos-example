import React, { useEffect } from 'react';
import SimpleSpinner from '../../components/simple-spinner';
import TodoList from '../todo-list';
import TodoToolbar from '../todo-toolbar';
import TodoModal from '../todo-modal';
import { TodoPageProps } from './types';

const TodoPage: React.FC<TodoPageProps> = ({ loading = false, preLoadTodos }: TodoPageProps) => {    
    useEffect(() => {
        if (!loading) {
            console.log('TodoPage mounted');
            preLoadTodos();
        }
    });

    return (
        <div className="container">
            <TodoModal />            
            <div className="row">
                <TodoToolbar />
            </div>
            <div className="row">                      
                {
                    loading ? <SimpleSpinner size="2x" title="loading table..."/> : <TodoList />
                }                
            </div>
        </div>
    )
};

export default TodoPage;