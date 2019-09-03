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
        console.log(response);
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
          console.log(response);
          // get an array of follower data and set the array into state
          this.setState({ followersData: response.data })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // if the userData is updated
  //   if (this.state.userData !== prevState.userData) {
  //     // update followersData
  //     axios.get(this.state.userData.followers_url)
  //       .then(response => {
  //         console.log(response);
  //         // get an array of follower data and set the array into state
  //         this.setState(
  //           () => ({ followersData: this.getFollowers(response.data) }));
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }

    // returns an array of the user's followers
    // getFollowers = followers => {
    //   let followersArray = [];
    //   followers.forEach(follower => {
    //     axios.get(follower.url)
    //       .then(response => {
    //         // console.log(response);
    //         followersArray.push(response.data);
    //       })
    //       .catch(error => console.log(error))
    //   })
    //   return followersArray;
    // };

  render() {
    console.log("rendering now");
    // console.log("followers Data", this.state.followersData);
    return (
      <div className="App">
        <h1>github user cards</h1>
        <Card userData={this.state.userData} followersData={this.state.followersData} />
        {/* {this.state.followersData.map(follower => {
          return <Card userData={follower} />
        })} */}
      </div>
    );
  }
}

export default App;
