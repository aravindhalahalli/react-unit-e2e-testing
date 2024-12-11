import { useState } from "react";

const UserName = () => {
  const [username, setUsername] = useState("foo");
  return (
    <>
      <div data-testid="username">{username}</div>
      <button
        data-testid="button"
        onClick={() => {
          setUsername("bar");
        }}
      >
        set an userName
      </button>
      <input
        type="text"
        data-testid="usernameInput"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </>
  );
};

export default UserName;
