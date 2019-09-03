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
      followersData: {}
    };
  }

  componentDidMount() {
    // fetch data for current user
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log(response);
        // then put the data into userData state
        this.setState(() => ({ userData: response.data }));
        return response.data;
      })
      .then(response => {
        console.log(response);
        // get an array of follower data for each of the user's followers
        const followers = this.getFollowers(response.followers_url);
        // set the followers data into state
        this.setState(
          () => ({ followersData: followers }),
          () => console.log("followersData", this.state.followersData)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  // returns an array of the user's followers
  getFollowers = followers_url => {
    // initialize array
    const followersArray = [];
    // get the user's followers data
    axios.get(followers_url)
      .then(response => {
        console.log(response);
        // for each follower, get their data and add it to array
        response.data.forEach(follower => {
          axios
            .get(follower.url)
            .then(response => {
              followersArray.push(response.data);
            })
            .catch(error => console.log(error));
        });
      })
      .catch(error => {
        console.log(error);
      });

    return followersArray;
  };

  render() {
    return (
      <div className="App">
        <h1>github user cards</h1>
        <Card userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
