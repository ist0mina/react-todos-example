import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { TodoItemContainer } from '../todo-item';

import { TodoListProps } from './types';

export const TodoList: React.FC<TodoListProps> = ({ ids }: TodoListProps) => {
    return (        
        <ListGroup className="w-100">
            {
                ids.map((id: number) => {
                    return (
                        <TodoItemContainer key={id} id={id}/>
                    );
                })
            }
        </ListGroup>
    );
}