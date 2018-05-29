import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
           data: 0
        }
  
        this.setNewNumber = this.setNewNumber.bind(this)
     };
  
     setNewNumber() {
         // prevState is the state before rendering.
        this.setState((prevState) => {
            console.log("previous state", prevState.data);
               return {data:this.state.data + 1};
          });
     }
  
     render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <h1>{this.state.data}</h1>
           </div>
        );
     }
} 



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


