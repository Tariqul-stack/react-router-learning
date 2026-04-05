import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const user = use(userPromise);

  return (
    <div>
      <small>User Name: {user.username}</small>
      <p>{user.name}</p>
    </div>
  );
};

export default UserDetails2;
