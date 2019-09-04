import React from 'react';

function Card(props) {
  const { userData } = props;
  return (
    <div className="Card">
      <img src={userData.avatar_url} alt="profile pic" />
      <h2>{userData.name}</h2>
      <h3>{userData.login}</h3>
      <h4>{userData.location}</h4>
      <p>{userData.bio}</p>
      <p>Following: {userData.following}</p>
      <p>Followers: {userData.followers}</p>
    </div>
  )
}

export default Card;
