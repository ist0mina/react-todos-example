import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { compose, defaultProps } from 'recompose';
import { SimpleTable, TableColumItem, SimpleTableProps } from '../../components';
import { getTodoTableRows } from '../../features/todos/selector';
import { TodoTableStateProps, TodoTableProps } from '.';

const columns: TableColumItem[] = [
    { title: 'Id' },
    { title: 'Text' },
    { title: 'Status' }
]

const mapStateToProps = (state: Types.RootState): TodoTableStateProps => {
    return {
        rows: getTodoTableRows(state.todos)
    };
}

export const TodoTableContainer = compose<SimpleTableProps, TodoTableProps>(
    connect(mapStateToProps),
    defaultProps({ columns })
)(SimpleTable);