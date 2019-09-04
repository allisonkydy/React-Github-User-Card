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
        <h1 className="main-heading">github user cards</h1>
        <div class="card-container">
          <div class="user-card">
            <h2 className="main-heading">User: </h2>
            <Card userData={this.state.userData}/>
          </div>
          <div class="follower-container">
            <h2 className="main-heading">Followers: </h2>
            <div class="follower-cards">
              {this.state.followersData.map(follower => {
                return <Card userData={follower} key={follower.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
