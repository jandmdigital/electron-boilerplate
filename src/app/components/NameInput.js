import React, { Component } from 'react';

export default class NameInput extends Component {
   constructor(props) {
      super(props);

      this.nameChange = this.nameChange.bind(this);
   }

   nameChange(evt) {
      this.props.onNameChange(evt.target.value);
      evt.preventDefault();
   }

   render() {
      return (
         <label>
            Name:
            <input type="text" id="hello-name" name="hello-name" value={this.props.inputName} onChange={this.nameChange} />
         </label>
      );
   }
}
