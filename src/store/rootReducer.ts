import { combineReducers } from 'redux';
import todoReducer from '../features/todos/reducer';
import filterReducer from '../features/filter/reducer';
import toggleReducer from '../features/toggle/reducer';

export default () => combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    toggle: toggleReducer
});