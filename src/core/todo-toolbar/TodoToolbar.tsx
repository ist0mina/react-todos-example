import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';

export const TodoToolbar: React.FC = () => {
    return (
        <ButtonToolbar className="pb-3">
            <Button variant="outline-dark" className="mr-2">
                <FontAwesomeIcon icon={faPlus} size="lg" className="mr-1"/>Add todo
            </Button>     
            <Button variant="outline-dark">
                <FontAwesomeIcon icon={faSync} size="lg" className="mr-1"/>Reload table
            </Button>       
        </ButtonToolbar>
    );
}