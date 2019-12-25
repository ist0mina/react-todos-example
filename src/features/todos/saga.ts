import {  call, put, takeEvery, all, fork, select } from 'redux-saga/effects';
import { loadData } from '../../services/api';
import { mockTodos } from '../../services/mockData';
import { loadTodosAsync } from './actions';
import { TodoItem, TodoActionTypes } from './types';
import Types from 'MyReduxTypes';

function* preLoadSaga(){
    const todos: TodoItem[] = yield select((state: Types.RootState) => state.todos.data);

    if (todos.length === 0){
        yield put(loadTodosAsync.request());
    }
}

function* loadTodos(){
    try {
        const todos: TodoItem[] = yield call(loadData, { mockData: mockTodos });
        yield put(loadTodosAsync.success(todos));
    }
    catch (error) {
        yield put(loadTodosAsync.failure(error.toString()));
    }
}

function* watchPreLoadSaga(){
    yield takeEvery(TodoActionTypes.LOAD_TODOS_PRELOAD, preLoadSaga);
}

function* watchLoadTodos(){
    yield takeEvery(loadTodosAsync.request, loadTodos);
}

export default function*(){
    yield all([fork(watchLoadTodos), fork(watchPreLoadSaga)]);
}