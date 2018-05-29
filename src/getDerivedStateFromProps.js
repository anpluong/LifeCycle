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
        this.setState({data:this.state.data + 1})
     }
  
     render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <Content myNumber1 = {this.state.data}></Content>
           </div>
        );
     }
} 


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    // this method is called every render. The props is passed to this method as props
    // the prevState allows you to access the state of this component. 
    static getDerivedStateFromProps(props, prevstate) {        
        console.log('Component WILL RECIEVE PROPS!', props);
        console.log('Component WILL RECIEVE state!', prevstate.num);
        // it returns an object to update the state which will update to DOM. 
        return {num: props.myNumber1}
    }   

    render() {
        return (
            <div>
                <h3>{this.state.num}</h3>
            </div>
        )
    }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


