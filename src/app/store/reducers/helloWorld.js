import * as actions from '../actions';

const helloWorld = (state = 'World', action) => {
   switch (action.type) {
      case actions.helloWorld.types.change:
         return action.value;
      default:
         return state;
   }
};

export default helloWorld;
