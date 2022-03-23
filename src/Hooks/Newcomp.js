import React, { useState, useEffect } from "react";

const Newcomp = () => {
  const [first, setfirst] = useState(0);

  useEffect(() => {
    document.title = `Chats(${first})`;
  });

  return (
    <div>
      <div>{first}</div>
      <button
        onClick={() => {
          setfirst(first + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default Newcomp;
