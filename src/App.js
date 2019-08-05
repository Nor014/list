import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'
import Listning from './Listning'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Listning items={data} />
      </div>
    );
  }
}

export default App;
