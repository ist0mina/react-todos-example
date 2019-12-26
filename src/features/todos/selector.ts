import { createSelector } from 'reselect';
import { TodoState, TodoItem } from './types';
import { TableRowItem } from '../../components';

const dataTodoSelector = (state: TodoState): TodoItem[] => state.data;

export const getTodoTableRows = createSelector(
    dataTodoSelector,
    (data = []): TableRowItem[] => data.map(({ text, status }: TodoItem) => ({ cells: [ { text }, { text: status } ] }))
);