'use strict';

import React, { Component } from 'react';
import NameInput from '../components/NameInput.jsx';
import HelloWorld from '../components/HelloWorld.jsx';

export default class AppContainer extends Component {

   constructor(props) {
      super(props);

      this.state = {
         name: '',
      };

      this.onNameChange = this.onNameChange.bind(this);
   }

   onNameChange(newName) {
      this.setState({ name: newName });
   }

   render() {
      return (
         <div className="row">
            <div className="columns">
               this is the app container
               <NameInput inputName={this.state.name} onNameChange={this.onNameChange} />
               <HelloWorld inputName={this.state.name} />
            </div>
         </div>
      );
   }
}
