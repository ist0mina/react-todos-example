import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NewTodoModalProps } from './types';

export const NewTodoModal: React.FC<NewTodoModalProps> = ({ show = false, handleClose, handleOk }: NewTodoModalProps) => {
    const [ text, setText ] = useState("");
    const [validated, setValidated] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { setText(event.target.value); }

    const resetState = () => {
        setText(""); 
        setValidated(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {    
        const form = event.currentTarget;
        event.preventDefault();
        
        if (form.checkValidity() === false) {      
            event.stopPropagation();
            setValidated(true);
        } else {
            handleOk(text);
            handleClose();
            resetState();
        }                
    };

    const onClose = () => {
        handleClose();
        resetState();
    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>New todo</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formNewTodoText">
                        <Form.Label>Todo text</Form.Label>
                        <Form.Control required type="text" placeholder="Todo text..." value={text} onChange={onChange}/>
                        <Form.Control.Feedback type="invalid">Need enter new todo</Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={onClose}>
                        <FontAwesomeIcon icon={faBan} className="mr-1"/> 
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        <FontAwesomeIcon icon={faCheck} className="mr-1"/> 
                        Ok
                    </Button>
                </Modal.Footer>
            </Form>
      </Modal>
    );
}