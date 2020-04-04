import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ToggleFieldType } from '../../features/toggle/types';
import { TodoStatusType, TodoItem } from '../../features/todos/types';
import { getTodoStatusList } from '../../features/todos/helpers';
import CustomSelect from '../../components/custom-select';
import CustomDatetime from '../../components/custom-datetime';
import { TodoModalProps } from './types';

const TodoModal: React.FC<TodoModalProps> = ({ 
    show = false, 
    toggle, 
    saveTodo, 
    text, 
    id, 
    status, 
    dateCreated, 
    dateLastChanged, 
    updateSelected 
}: TodoModalProps) => {        
    const [validated, setValidated] = useState(false);

    const isNew = id < 0;
    const title = isNew ? 'New todo' : 'Edit todo';

    function updateSelectedKey<T>(key: keyof TodoItem, value: T){
        updateSelected({
            id,
            text,
            status,
            dateCreated,
            dateLastChanged,
            [key]: value,
        })
    }

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => { 
        updateSelectedKey<string>('text', event.target.value);        
    };

    const onChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateSelectedKey<TodoStatusType>('status', event.target.value as TodoStatusType);       
    };
    
    const onClose = () => {        
        toggle(ToggleFieldType.TODO_MODAL);         
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {    
        const form = event.currentTarget;
        event.preventDefault();
        
        if (form.checkValidity() === false) {      
            event.stopPropagation();
            setValidated(true);
        } else {
            saveTodo({ 
                id, 
                text, 
                status,
                dateCreated,   
                dateLastChanged: new Date(),             
            });  
            onClose();            
        }                
    };
    
    useEffect(() => {
        if (show) {            
            setValidated(false);            
        }
    }, [id, show]);    

    return (
        <Modal 
            show={show} 
            onHide={onClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Form 
                noValidate 
                validated={validated} 
                onSubmit={onSubmit}
            >
                <Modal.Body>
                    <Form.Group controlId="formNewTodoText">
                        <Form.Label>Todo text</Form.Label>
                        <Form.Control 
                            required 
                            type="text" 
                            placeholder="Todo text..." 
                            value={text} 
                            onChange={onChangeText}
                        />
                        <Form.Control.Feedback type="invalid">Need enter new todo</Form.Control.Feedback>
                    </Form.Group>
                    <CustomSelect 
                        controlId="status" 
                        title="Status todo" 
                        data={getTodoStatusList()} 
                        selected={status} 
                        disabled={isNew} 
                        onChange={onChangeStatus}
                    />
                    <Form.Group as={Row} controlId="dateBlock">
                        <Col sm="6">
                            <CustomDatetime 
                                controlId="dateCreated"
                                title="Date and time creation"
                                selected={dateCreated}   
                                disabled                        
                            />
                        </Col>
                        <Col sm="6">
                            <CustomDatetime 
                                controlId="dateLastChanged"
                                title="Date and time last change"
                                selected={dateLastChanged}                           
                                disabled
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="outline-dark" 
                        onClick={onClose}
                    >
                        <FontAwesomeIcon 
                            icon={faBan} 
                            className="mr-1"
                        /> 
                        Cancel
                    </Button>
                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className="mr-1"
                        /> 
                        Ok
                    </Button>
                </Modal.Footer>
            </Form>
      </Modal>
    );
};

export default TodoModal;