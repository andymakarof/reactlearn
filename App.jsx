import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>It works!</p>
      </div>
    );
  }
}

export default App;
