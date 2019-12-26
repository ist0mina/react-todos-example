import React from 'react';
import { Table } from 'react-bootstrap';
import { TableHeader, SimpleTableProps, TableBody } from '.';
import './Table.css';

export const SimpleTable: React.FC<SimpleTableProps> = ({ columns, rows, hasNN = false }: SimpleTableProps) => {    
    return (
        <Table striped bordered hover>
            <TableHeader columns={columns} hasNN={hasNN}/>
            <TableBody rows={rows} hasNN={hasNN}/>            
        </Table>
    );
}