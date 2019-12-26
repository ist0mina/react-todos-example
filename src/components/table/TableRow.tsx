import React from 'react';
import { TableRowProps, TableCellItem } from '.';

export const TableRow: React.FC<TableRowProps> = ({ cols, hasNN = false, index }: TableRowProps) => {
    return (
        <tr>
            {  hasNN && <td className="td-nn">{index + 1}</td> }
            { cols.map(({ text }: TableCellItem, index: number) => <td key={index}>{text}</td>) }
    </tr>
    );
}