import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        myvalue: '1'
      };
  
      this.textInput = React.createRef();
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        let value;
        // if you check the box
   
        if (target.type === 'checkbox') {
            if (!target.checked) {
                this.textInput.current.value = this.textInput.current[1].value
            }
        }
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
  
    render() {
      return (
        <form>
          <div>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} 
            />
          </label>
          </div>
          <br />
          <div>
          <label>
            Number of guests:
            <select ref={this.textInput} name="myvalue">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
          </select>
          </label>
          </div>
        </form>
      );
    }
  }

  ReactDOM.render(<App/>, document.getElementById('root'));