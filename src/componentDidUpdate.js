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
    
    // This is feature of react 16.3
    // this method is called every render. The props is passed to this method as props
    // the prevState allows you to access the state of this component. 
    // On the first rendering, the prevState refers to the props passed from children
    // After the re-rendering, the prevState refer to the previous state.
    static getDerivedStateFromProps(props, prevState) {        
        console.log('Component WILL RECIEVE PROPS!', props);
        console.log('Component WILL RECIEVE state!', prevState.num);
        // it returns an object to update the state which will update to DOM. 
        return {num: props.myNumber1}
    }   

    shouldComponentUpdate(newProps, newState) {
        console.log("this is shouldComponentUpdate ") 
        console.log(newProps, newProps.myNumber1 <= 3)
         return newProps.myNumber1 <= 3;
      }

    // this method is not called on initial render. This will get what the previous state and 
    // this current props returned from getDerivedStateFromProps.
    // 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("prevProp on snapshot", prevProps);
        console.log("prevState on snapshot", prevState);

        // the value it returns will be passed as the third snapshot parameter
        // to componentDidUpdate. 
        return {num: prevProps.myNumber1};
      }


      // This is a good place to do the third library, sometime, after the component is updated, 
      // the render is not updated. This is where you can check the prevProp. The prop or state
      // before the this.setState happens
      
      // this method is not called on initial render. This will log the prevProps and state
      // before rendering. prevState refers to the current state before rendering.
      
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("prevProp on componentDidUpdate", prevProps);
        console.log("prevState on componentDidUpdate", prevState);
        console.log(snapshot)
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


