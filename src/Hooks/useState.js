import React, { useState, useEffect } from "react";

const UseState = () => {
  const [count, setMYcount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setMYcount(count + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default UseState;
