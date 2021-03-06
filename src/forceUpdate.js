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
    // On the first rendering, the prevState refers to the props passed from children
    // After the re-rendering, the prevState refer to the previous state.
    componentWillReceiveProps(newProps) {               
        console.log('Component WILL RECIEVE PROPS!', newProps)
        this.setState({
            num: newProps.myNumber1
        })
        // if the shouldComponentUpdate returns false, this still cause the
        // state to render.
        this.forceUpdate();
      }
    

    // if the shouldComponentUpdate returns false, then the componentWillUpdate will not run, and
    // no render. 
    shouldComponentUpdate(newProps, newState) {
        console.log("this is shouldComponentUpdate ") 
        console.log(newProps, newProps.myNumber1 <= 3)
        return newProps.myNumber1 <= 3;
      }
      

      // For React 16.3, you can you getDerivedStateFromProps, this includes the 
      // componentWillUpdate also. 
     
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


