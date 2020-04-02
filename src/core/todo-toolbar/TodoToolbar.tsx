import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { TodoToolbarProps } from './types';

const TodoToolbar: React.FC<TodoToolbarProps> = ({ openTodo, allOpen, loadTodos, disableBtn, toggleTodos }: TodoToolbarProps) => {
    const onNewTodo = () => {  
        if (openTodo) {
            openTodo(-1); 
        }
    };

    const onReload = () => {
        if (loadTodos) {
            loadTodos();
        }
    };

    const onToggleAll = () => {
        if (toggleTodos) {
            toggleTodos();
        }
    };

    const toggleIcon = allOpen ? faAngleUp : faAngleDown;
    const toggleTitle = allOpen ? 'Close all' : 'Open all';

    return (
        <ButtonToolbar className="pb-3">
            <Button variant="outline-dark" className="mr-2" onClick={onNewTodo} disabled={disableBtn}>
                <FontAwesomeIcon icon={faPlus} size="lg" className="mr-1"/>Add todo
            </Button>     
            <Button variant="outline-dark" className="mr-2" onClick={onReload} disabled={disableBtn}>
                <FontAwesomeIcon icon={faSync} size="lg" className="mr-1"/>Reload table
            </Button>       
            <Button variant="outline-dark" disabled={disableBtn} onClick={onToggleAll}>
                <FontAwesomeIcon icon={toggleIcon} size="lg" className="mr-1"/>{ toggleTitle }
            </Button>
        </ButtonToolbar>
    );
};

export default TodoToolbar;