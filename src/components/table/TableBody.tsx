import React from 'react';
import { TableBodyProps, TableRow, TableRowItem } from '.';

export const TableBody: React.FC<TableBodyProps> = ({ rows, hasNNCol = false, hasControlCol = false }: TableBodyProps) => {
    return (
        <tbody>
            {
                rows.map(({ cells }: TableRowItem, index: number) => 
                    <TableRow key={index} cols={cells} index={index} hasNNCol={hasNNCol} hasControlCol={hasControlCol}/>)
            }        
        </tbody>
    );
}