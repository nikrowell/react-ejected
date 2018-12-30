import React from 'react';
import Button from './Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello',
      count: 0
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(event) {
    this.setState({
      count: this.state.count + 1
    });
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { greeting, count } = this.state;
    return (
      <div className="container">
        <h1>{greeting} React</h1>
        <img src="/images/sample.jpg" alt="Mountains" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <input type="text" name="greeting" value={greeting} onChange={this.onChange} />
        {window.debug(this.state)}
        <Button as="a" href="https://reactjs.org/" target="_blank">External Link</Button>
        <Button onClick={this.onClick} style={{marginLeft:10}}>{`${count} ${count === 1 ? 'Click' : 'Clicks'}`}</Button>
      </div>
    );
  }
}

export default App;