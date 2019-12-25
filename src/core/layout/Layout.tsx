import React from 'react';
import { HeaderContainer } from '../header';

interface LayoutProps {
    children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>        
        <HeaderContainer />
        { children}
    </div>
);