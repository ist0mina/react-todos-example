import { TableRowItem, TableColumItem } from '../../components'

export interface TodoTableStateProps {
    rows?: TableRowItem[];
};

export interface TodoTableOwnProps {
    columns?: TableColumItem[];
}

export type TodoTableProps = TodoTableStateProps & TodoTableOwnProps;