import React from "react";

const Carnames = (props) => {
  return <li>This is {props.brand}</li>;
};

const List = () => {
  const carsinfo = ["Ford", "Audi", "Mercedes"];

  return (
    <div>
      <h1>What are the Cars in my Garage</h1>
      {carsinfo.map((dfs) => (
        <ul>
          <Carnames brand={dfs} />
        </ul>
      ))}
    </div>
  );
};

export default List;
