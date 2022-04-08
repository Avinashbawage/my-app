import React from "react";

const Conditional = () => {
  function MissedGoal() {
    return <h1>MISSED! </h1>;
  }

  function MadeGoal() {
    return <h1>GOAL!</h1>;
  }

  const Goal = (props) => {
    const isGoal = props.isGoal;
    return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
  };

  return (
    <div>
      <Goal isGoal={true} />
    </div>
  );
};

export default Conditional;
