import { takeEvery, select, put } from 'redux-saga/effects';
import Types from 'MyReduxTypes';
import { getTodoIds } from '../todos/selectors';
import { ToggleActionType } from './types';
import { isAllOpen } from './selectors';
import { closeAllTodos, openAllTodos } from './actions';

function* toggleAllTodosSaga(){
    const open: boolean = yield select((state: Types.RootState) => isAllOpen(state));

    if (open) { 
        yield put(closeAllTodos());
    } else {
        const ids: number[] = yield select((state: Types.RootState) => getTodoIds(state.todos));
        yield put(openAllTodos(ids));
    }
}

export default function*() {
    yield takeEvery(ToggleActionType.TOGGLE_ALL_TODOS, toggleAllTodosSaga);
}