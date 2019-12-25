import { SimpleTableProps, TableRowItem } from '../../components'

export interface TodoTableStateProps {
    rows: TableRowItem[];
};

export type TodoTableProps = TodoTableStateProps & SimpleTableProps;