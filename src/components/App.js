import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      message: 'Hello React'
    };
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.message}</h1>
        {window.debug(this.state)}
      </div>
    );
  }
}

export default App;