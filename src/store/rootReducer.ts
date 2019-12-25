import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import todoReducer from '../features/todos/reducer';
import filterReducer from '../features/filter/reducer';

export default (history: History) => combineReducers({
    router: connectRouter(history),
    todos: todoReducer,
    filter: filterReducer
});