import { routerActions } from 'connected-react-router';
import * as todoActions from '../features/todos/actions';
import * as filterActions from '../features/filter/actions';
import * as toggleActions from '../features/filter/actions';

export default {
    router: routerActions,
    todos: todoActions,
    filter: filterActions,
    toggle: toggleActions
}