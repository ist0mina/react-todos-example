import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RoutePaths } from '../../const/routes';
import { Link } from 'react-router-dom';
import { NavButton } from '../../components';
import { HeaderProps } from './types';

type NavItem = {
    route: string;
    title: string;    
};

const navs: NavItem[] = [
    { route: RoutePaths.ROOT, title: 'Todo list' },
    { route: RoutePaths.TODO_DETAIL, title: 'Todo detail' }    
];

const isActive = (curPath: string, route: string): boolean => curPath === route;

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { pathname = "" } = props;            
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">                  
                    {
                        navs.map((item: NavItem, index: number) => {
                            const { route = "", title = "" } = item;
                            return (
                                <Nav.Item key={index}>     
                                    <Nav.Link as={Link} to={route}>
                                        <NavButton title={title} active={isActive(pathname, route)} />                                        
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })
                    }
                </Nav>
            </Navbar>
        </header>
    );
}