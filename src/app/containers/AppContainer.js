import { connect } from 'react-redux';

import App from '../components/App';
import * as actions from '../store/actions';


function mapStateToProps(state) {
   return {
      name: state.helloWorld,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      onNameChange: (value) => {
         dispatch(actions.helloWorld.change(value));
      },
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
