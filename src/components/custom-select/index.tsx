import React from 'react';
import { Form } from 'react-bootstrap';

export type OptionSelect = {
    key: string;
    value: string;
};

export interface CustomSelectProps {
    controlId: string;
    title?: string;
    data?: OptionSelect[];
    selected?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({controlId, title = "", data = [], selected, disabled = false, onChange}: CustomSelectProps) => {    
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

export default CustomSelect;