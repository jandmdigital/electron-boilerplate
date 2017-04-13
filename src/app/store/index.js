import { createStore } from 'redux';
import reducers from './reducers';
import actions from './actions';

const store = createStore(reducers);

export { store, reducers, actions };
export default store;
