import { all, fork } from 'redux-saga/effects';
import todoSaga from '../features/todos/saga';

export default function* (){
    yield all([fork(todoSaga)]);
}