import React, { Component } from 'react';

export default class HelloWorld extends Component {
   render() {
      return (
         <p>
            Hello { this.props.inputName }!
         </p>
      );
   }
}
