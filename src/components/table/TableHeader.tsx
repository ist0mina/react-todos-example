import React from 'react';
import { TableHeaderProps, TableColumItem } from '.';

export const TableHeader: React.FC<TableHeaderProps> = ({ columns = [], hasNN = false }: TableHeaderProps) => {
    return (
        <thead>
            <tr>
            { hasNN && <th>#</th> }
            { columns.map(({ title = '' }: TableColumItem, index: number) => <th key={index}>{title}</th>) }            
            </tr>
        </thead>
    );
}