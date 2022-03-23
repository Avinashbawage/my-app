import React, { useState } from "react";

const UseEffect = () => {
    
  const [first, setfirst] = useState(0);

  useEffect(() => {
   console.log()hii
  }, [])
  

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

export default UseEffect;
