import React from 'react';
import { TableRowProps, TableCellItem, ControlCol } from '.';

export const TableRow: React.FC<TableRowProps> = ({ cols, hasNNCol = false, hasControlCol = false, index }: TableRowProps) => {
    return (
        <tr>
            { hasControlCol && <ControlCol /> }
            { hasNNCol && <td className="td-nn">{index + 1}</td> }
            { cols.map(({ text }: TableCellItem, index: number) => <td key={index}>{text}</td>) }
    </tr>
    );
}