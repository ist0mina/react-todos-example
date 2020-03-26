import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { CustomDatetimeProps } from './types';
import './CustomDatetime.css';

export const CustomDatetime: React.FC<CustomDatetimeProps> = ({ controlId, title = '', selected, onChange = () => {}, disabled }: CustomDatetimeProps) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{title}</Form.Label>
            <div>
                <DatePicker 
                    selected={selected} 
                    onChange={onChange} 
                    disabled={disabled}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    timeCaption="time"  
                    dateFormat="dd.mm.yyyy HH:mm"
                />                               
            </div>
        </Form.Group>
    );
};