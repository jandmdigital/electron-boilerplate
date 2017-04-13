import React, { Component } from 'react';

import NameInput from './NameInput';
import HelloWorld from './HelloWorld';

export default class App extends Component {
   render() {
      return (
         <div className="row">
            <div className="columns">
               this is the app container
               <NameInput inputName={this.props.name} onNameChange={this.props.onNameChange} />
               <HelloWorld inputName={this.props.name} />
            </div>
         </div>
      );
   }
}
