import React from 'react';
import { Table } from 'react-bootstrap';
import { TableHeader, SimpleTableProps, TableBody } from '.';

export const SimpleTable: React.FC<SimpleTableProps> = ({ columns, rows }: SimpleTableProps) => {
    return (
        <Table striped bordered hover>
            <TableHeader columns={columns}/>
            <TableBody rows={rows}/>            
        </Table>
    );
}