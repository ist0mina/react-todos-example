import { all, fork } from 'redux-saga/effects';
import todoSaga from '../features/todos/saga';
import toggleSaga from '../features/toggle/saga';

export default function* (){
    yield all([fork(todoSaga), fork(toggleSaga)]);
}