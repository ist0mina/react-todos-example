import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from '../todo-item';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = ({ ids }: TodoListProps) => {
    return (        
        <ListGroup className="w-100">
            {
                ids.map((id: number) => {
                    return (
                        <TodoItem key={id} id={id}/>
                    );
                })
            }
        </ListGroup>
    );
};

export default TodoList;
