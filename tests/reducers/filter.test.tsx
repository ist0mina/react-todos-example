import filterReducer, { initialState } from '../../src/features/filter/reducer';
import { setFilterStatus, setFilterActivity } from '../../src/features/filter/actions';
import { TodoStatusType, TodoActivityType } from '../../src/features/todos/types';

describe('filter reducer', () => {
    it('set filter status values', () => {
        const values: TodoStatusType[] = [TodoStatusType.CREATED, TodoStatusType.DONE];

        expect(filterReducer(initialState, setFilterStatus(values))).toEqual({
            ...initialState,
            filterStatus: values
        });
    });

    it('set filter activity type', () => {
        expect(filterReducer(initialState, setFilterActivity(TodoActivityType.ACTIVE))).toEqual({
            ...initialState,
            filterActivity: TodoActivityType.ACTIVE
        });
    });
});