import { combineReducers } from 'redux';

import helloWorld from './helloWorld';

const reducer = combineReducers({
   helloWorld,
   // other reducers go here
});

export default reducer;
