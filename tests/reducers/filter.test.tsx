import filterReducer, { initialState } from '../../src/features/filter/reducer';
import { setFilterStatus } from '../../src/features/filter/actions';
import { TodoStatusType } from '../../src/features/todos/types';

describe('filter reducer', () => {
    it('set filter status values', () => {
        const values: TodoStatusType[] = [TodoStatusType.CREATED, TodoStatusType.DONE];

        expect(filterReducer(initialState, setFilterStatus(values))).toEqual({
            ...initialState,
            filterStatus: values
        });
    });
});