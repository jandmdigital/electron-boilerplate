import React, { Component } from 'react';

export default class NameInput extends Component {
   constructor(props) {
      super(props);

      this._name = props.inputName;

      this.nameChange = this.nameChange.bind(this);
   }

   nameChange(evt) {
      this.props.onNameChange(this._name.value);
      evt.preventDefault();
   }

   render() {
      return (
         <form onSubmit={this.nameChange}>
            <input type="text" id="hello-name" name="hello-name" ref={(input) => { this._name = input; }} />
            <button type="submit" className="button">Submit</button>
         </form>
      );
   }
}
