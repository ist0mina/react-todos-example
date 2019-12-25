import React from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';
import './NavButton.css';

type NavButtonProps = {
    title: string;
    active?: boolean;
    onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
    const { title = "", active = false, onClick = () => { } } = props;
    const btnClass = classnames({
        'nav-active': active
    });
    return (
        <Button variant="outline-secondary" onClick={onClick} className={btnClass}>{title}</Button>
    );
};