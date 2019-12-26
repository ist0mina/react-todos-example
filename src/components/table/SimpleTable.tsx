import React from 'react';
import { Table } from 'react-bootstrap';
import { TableHeader, SimpleTableProps, TableBody } from '.';
import './Table.css';

export const SimpleTable: React.FC<SimpleTableProps> = ({ columns, rows, hasNNCol = false, hasControlCol = false }: SimpleTableProps) => {    
    return (
        <Table striped bordered hover>
            <TableHeader columns={columns} hasNNCol={hasNNCol} hasControlCol={hasControlCol}/>
            <TableBody rows={rows} hasNNCol={hasNNCol} hasControlCol={hasControlCol}/>            
        </Table>
    );
}