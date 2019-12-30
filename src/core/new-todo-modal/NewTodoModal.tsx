import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NewTodoModalProps } from './types';

export const NewTodoModal: React.FC<NewTodoModalProps> = ({ show = false, handleClose, handleOk }: NewTodoModalProps) => {
    const [ text, setText ] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { setText(event.target.value); }

    const onClickOK = () => {
        handleOk(text);
        setText("");
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formNewTodoText">
                    <Form.Label>Todo text</Form.Label>
                    <Form.Control placeholder="Todo text..." value={text} onChange={onChange}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                    <FontAwesomeIcon icon={faBan} className="mr-1"/> 
                    Cancel
                </Button>
                <Button variant="primary" onClick={onClickOK}>
                    <FontAwesomeIcon icon={faCheck} className="mr-1"/> 
                    Ok
                </Button>
            </Modal.Footer>
      </Modal>
    );
}