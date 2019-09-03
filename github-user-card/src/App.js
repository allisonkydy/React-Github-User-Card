import React from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'allisonkydy',
      userData: {}
    }
  }

  componentDidMount() {
    // axios.get(`https://api.github.com/users/${this.state.user}`)
    //   .then(response => {
    //     console.log(response);
    //     this.setState(() => ({ userData: response.data}));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    this.setState(() => ({ userData: myData }), () => console.log(this.state.userData))
  }

  render() {
      return (
      <div className="App">
        <h1>github user cards</h1>
        <Card userData={this.state.userData} />
      </div>
    );
  }
}

const myData = {
  "login": "allisonkydy",
  "id": 31572415,
  "node_id": "MDQ6VXNlcjMxNTcyNDE1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/31572415?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/allisonkydy",
  "html_url": "https://github.com/allisonkydy",
  "followers_url": "https://api.github.com/users/allisonkydy/followers",
  "following_url": "https://api.github.com/users/allisonkydy/following{/other_user}",
  "gists_url": "https://api.github.com/users/allisonkydy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/allisonkydy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/allisonkydy/subscriptions",
  "organizations_url": "https://api.github.com/users/allisonkydy/orgs",
  "repos_url": "https://api.github.com/users/allisonkydy/repos",
  "events_url": "https://api.github.com/users/allisonkydy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/allisonkydy/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Allison Donnelly",
  "company": null,
  "blog": "",
  "location": "Arkansas",
  "email": null,
  "hireable": null,
  "bio": "Student at Lambda School studying full stack web development",
  "public_repos": 35,
  "public_gists": 0,
  "followers": 41,
  "following": 44,
  "created_at": "2017-09-02T17:23:43Z",
  "updated_at": "2019-08-15T14:56:13Z"
}

export default App;
