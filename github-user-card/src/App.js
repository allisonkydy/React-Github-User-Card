import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'allisonkydy',
      userData: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log(response);
        this.setState(() => ({ userData: response.data}));
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
      return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
