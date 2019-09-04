import React from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "allisonkydy",
      userData: {},
      followersData: []
    };
  }

  componentDidMount() {
    // fetch data for current user
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        // console.log(response);
        // then put the data into userData state
        this.setState(() => ({ userData: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // if the userData is updated
    if (this.state.userData !== prevState.userData) {
      // update followersData
      axios.get(this.state.userData.followers_url)
        .then(response => {
          const followerURLs = response.data.map(follower => follower.url);
          followerURLs.forEach(url => {
            axios.get(url)
              .then(response => {
                this.setState(() => ({ followersData: [...this.state.followersData, response.data]}))
              })
              .catch(error => console.log(error))
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>github user cards</h1>
        <Card userData={this.state.userData}/>
        {this.state.followersData.map(follower => {
          return <Card userData={follower} key={follower.id} />
        })}
      </div>
    );
  }
}

export default App;
