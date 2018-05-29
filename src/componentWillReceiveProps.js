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
    
    // The componentWillReceiveProps will not be called on the initial render, 
    // but will be called in each subsequent renders. setState can be called in this method.
    // componentWillReceiveProps run. The following events occur 
    // 1. shouldComponentUpdate 2. componentWillUpdate  3. Render  4. componentDidUpdate


    componentWillReceiveProps(newProps) {               
        // this new props is the one will be render to DOM
        console.log('Component WILL RECIEVE PROPS!', newProps)
        // this prop is the current one before the user clicks on the button. 
        console.log('Current Props!', this.props)
        //You can access to the current props and incoming props to compare and make logical decisions
        // based on the value

        // in the first render from the parent, componentWillReceiveProps is not called. 
        // Then it is called in subsequent render, this lead to newProps will be {myNumber1: 1}
        // --> num = 2
        this.setState({num: newProps.myNumber1 + 1}) 
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


