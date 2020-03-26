import {  call, put, takeEvery, all, fork, select, actionChannel, take } from 'redux-saga/effects';

import Types from 'MyReduxTypes';

import { loadData } from '../../services/api';
import { mockTodos } from '../../services/mockData';

import { ToggleFieldType } from '../toggle/types';
import { toggleSimple } from '../toggle/actions';

import { loadTodosAsync, openTodo, selectTodo, saveTodo, addTodo, updateTodo } from './actions';
import { TodoItem, TodoActionTypes } from './types';

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

function* openTodoSaga(action: ReturnType<typeof openTodo>){
    yield put(selectTodo(action.payload));
    yield put(toggleSimple(ToggleFieldType.TODO_MODAL));
}

function* saveTodoSaga(action: ReturnType<typeof saveTodo>) {
    const firtherAction = action.payload.id < 0 ? addTodo : updateTodo;
    yield put(firtherAction(action.payload));
}

function* watchPreLoadSaga(){
    yield takeEvery(TodoActionTypes.LOAD_TODOS_PRELOAD, preLoadSaga);
}

function* watchLoadTodos(){
    const chanLoad = yield actionChannel(loadTodosAsync.request);

    while(true) {
        yield take(chanLoad);
        yield call(loadTodos);
    }
}

function* watchOpenTodo(){
    yield takeEvery(TodoActionTypes.OPEN_TODO, openTodoSaga);
}

function* watchSaveTodo(){
    yield takeEvery(TodoActionTypes.SAVE_TODO, saveTodoSaga);
}

export default function*(){
    yield all([
        fork(watchLoadTodos), 
        fork(watchPreLoadSaga),
        fork(watchOpenTodo),
        fork(watchSaveTodo)
    ]);
};
