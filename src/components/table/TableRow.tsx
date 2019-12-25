import React from 'react';
import { TableRowProps, TableCellItem } from '.';

export const TableRow: React.FC<TableRowProps> = ({ cols, hasNN = false, index }: TableRowProps) => {
    return (
        <tr>
            {  hasNN && <td>{index}</td> }
            { cols.map(({ text }: TableCellItem, index: number) => <td key={index}>{text}</td>) }
    </tr>
    );
}