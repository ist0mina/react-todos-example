import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

export const ControlCol: React.FC = () => {
    return (
        <td className="td-control">
            <Button variant="light" className="border mr-1">
                <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button variant="light" className="border">
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
        </td>
    );
}