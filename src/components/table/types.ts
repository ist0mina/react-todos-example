export interface TableBasicProps {
    hasNN?: boolean;
}

export type TableColumItem = {
    title: string;
}

export interface TableHeaderProps extends TableBasicProps {
    columns: TableColumItem[];
}

export type TableCellItem = {
    text: string;
}

export type TableRowItem = {
    cells: TableCellItem[];
}

export interface TableBodyProps {
    rows: TableRowItem[]; 
}

export interface TableRowProps extends TableBasicProps {
    cols: TableCellItem[];
    index: number;
}

export type SimpleTableProps = TableHeaderProps & TableBodyProps;