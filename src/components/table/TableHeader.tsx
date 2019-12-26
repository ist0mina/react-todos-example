import React from 'react';
import { TableHeaderProps, TableColumItem } from '.';

export const TableHeader: React.FC<TableHeaderProps> = ({ columns = [], hasNNCol = false, hasControlCol = false }: TableHeaderProps) => {
    return (
        <thead>
            <tr>
                { hasControlCol && <th className="td-control"></th> }
                { hasNNCol && <th className="td-nn">#</th> }
                { columns.map(({ title = '' }: TableColumItem, index: number) => <th key={index}>{title}</th>) }            
            </tr>
        </thead>
    );
}