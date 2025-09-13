import React from "react";

function UserStatus() {
  // 2. Ternary Operator
  const isOnline = true;

  return <div>
    {isOnline ? <h1>User is Online</h1> : <h1>User is Offline</h1>}
  </div>;
}

export default UserStatus;
