import React from 'react';
import { Form } from 'react-bootstrap';

import { CustomSelectProps, OptionSelect } from './types';

export const CustomSelect: React.FC<CustomSelectProps> = ({controlId, title = "", data = [], selected, disabled = false, onChange}: CustomSelectProps) => {    
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{title}</Form.Label>
            <Form.Control as="select" disabled={disabled} onChange={onChange} value={selected}>
                {
                    data.map(({ key, value }: OptionSelect) => {                        
                        return (
                            <option key={key}>{value}</option>
                        );
                    })                    
                }
            </Form.Control>
        </Form.Group>
    );    
};