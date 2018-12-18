import React from 'react';
import Button from './Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      count: 0,
      message: 'Hello React'
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.message}</h1>
        <Button onClick={this.onClick}>Click Me</Button>
        {window.debug(this.state)}
        <Button as="a" href="http://www.google.com/" target="_blank">google.com</Button>
      </div>
    );
  }
}

export default App;