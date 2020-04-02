import React from 'react';
import { ListGroupItem, Button, Card, Row, Col, ButtonProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faAngleDown, faAngleUp, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { STANDART_DATE_TIME_FORMAT } from '../../const/formats';
import { TodoStatusType } from '../../features/todos/types';
import { getTodoStatusTypeValue } from '../../features/todos/helpers';
import { formatDateTime } from '../../helpers/datetime';
import { TodoItemProps } from './types';

const getColorByStatus = (status: TodoStatusType): string | undefined => {
    switch(status) {
        case TodoStatusType.CREATED:
            return 'info';
        case TodoStatusType.IN_WORK:
            return 'primary';
        case TodoStatusType.PAUSED:
            return 'danger';
        case TodoStatusType.DONE:
            return 'success';
        case TodoStatusType.CLOSED:
            return 'dark';
    }
};

const TodoItem: React.FC<TodoItemProps> = ({ text, open, toggle, id, status, dateCreated, dateLastChanged, openTodo }: TodoItemProps) => {
    const bodyClassName = !open ? 'd-none' : undefined;

    const onToggle = () => {
        toggle(id);
    };

    const onEdit = () => {
        openTodo(id);
    }

    const toggleIcon = open ? faAngleUp : faAngleDown;
    const toggleTitle = open ? 'Collapse' : 'Expand';

    const color = getColorByStatus(status);
    const textColor = color ? `text-${color}` : '';
    const todoClassName = `ml-2 mr-2 ${textColor}`;        

    const contentItems = [
        { title: 'Status', className: textColor, value: getTodoStatusTypeValue(status) },
        { title: 'Date and time creation', value: formatDateTime(dateCreated, STANDART_DATE_TIME_FORMAT) },
        { title: 'Date and time last changing', value: dateLastChanged ? formatDateTime(dateLastChanged, STANDART_DATE_TIME_FORMAT) : '' },
    ];

    const ctrlBtns = [
        { color: 'success', title: 'Edit todo', icon: faEdit, onClick: onEdit },
        { color: 'danger', title: 'Delete todo', icon: faTrashAlt },
        { color: 'info', title: 'Change status', icon: faExchangeAlt },
    ];

    return (
        <ListGroupItem className="p-0 border-0 mb-1">
            <Card>
                <Card.Header className="d-flex align-items-center">
                    {
                        ctrlBtns.map(({ color, title, icon, onClick }, index: number) => {
                            const variant = `outline-${color}` as ButtonProps['variant'];

                            return  (
                                <Button key={index} variant={variant} className="mr-1" title={title} onClick={onClick}>
                                    <FontAwesomeIcon icon={icon}/>        
                                </Button> 
                            );
                        })
                    }                                     
                    <span className={todoClassName}>{text}</span>
                    <Button variant="outline-dark" className="ml-auto" onClick={onToggle} title={toggleTitle}>
                        <FontAwesomeIcon icon={toggleIcon}/>        
                    </Button>                                    
                </Card.Header>                
                <Card.Body className={bodyClassName}>
                    {
                        contentItems.map(({ title, className, value }, index: number) => (
                            <Row key={index}>
                                <Col sm="3">
                                    { title }:
                                </Col>
                                <Col className={className}>
                                    { value }
                                </Col>
                            </Row>
                        ))
                    }                   
                </Card.Body>
            </Card>
        </ListGroupItem>
    );
};

export default TodoItem;