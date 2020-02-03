import toggleReducer, { initialState } from '../../src/features/toggle/reducer';
import { toggle } from '../../src/features/toggle/actions';
import { ToggleFieldType, ToggleState } from '../../src/features/toggle/types';

describe('toggle reducer', () => {
    it('toggle field when field is undefined', () => {
        const field: ToggleFieldType = ToggleFieldType.NEW_TODO_MODAL;

        expect(toggleReducer(initialState, toggle(field))).toEqual({
            ...initialState,
            [field]: true
        });
    });

    it('toggle field when field is true', () => {
        const field: ToggleFieldType = ToggleFieldType.NEW_TODO_MODAL;

        const state: ToggleState = {
            ...initialState,
            [field]: true
        };

        expect(toggleReducer(state, toggle(field))).toEqual({
            ...state,
            [field]: false
        });
    });

    it('toggle field when field is false', () => {
        const field: ToggleFieldType = ToggleFieldType.NEW_TODO_MODAL;

        const state: ToggleState = {
            ...initialState,
            [field]: false
        };

        expect(toggleReducer(state, toggle(field))).toEqual({
            ...state,
            [field]: true
        });
    });
});