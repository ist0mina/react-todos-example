import { all, fork } from 'redux-saga/effects';
import todoSaga from '../features/todos/sagas';
import toggleSaga from '../features/toggle/sagas';

export default function* (){
    yield all([fork(todoSaga), fork(toggleSaga)]);
}