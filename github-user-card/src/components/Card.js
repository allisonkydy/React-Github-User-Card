import React from 'react';

function Card(props) {
  const { userData, followersData } = props;
  return (
    <div className="Card">
      <img src={userData.avatar_url} alt="profile pic" />
      <h2>{userData.name}</h2>
      <h3>{userData.login}</h3>
      <h4>{userData.location}</h4>
      <p>{userData.bio}</p>
      <p>Following: {userData.following}</p>
      <p>Followers: {userData.followers}</p>
      <p>List of followers: </p>
      <ul>
        {followersData.map(follower => {
          return <li key={follower.id}>{follower.login}</li>
        })}
      </ul>
    </div>
  )
}

export default Card;
