import React, { useState, useEffect } from "react";
import axios from "axios";

function CompA() {
  const [num, setNum] = useState(35);
  const [name, setName] = useState(35);
  const [moves, setMoves] = useState(35);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getdata();
  });

  return (
    <>
      <h1>Your selected number is {num} </h1>
      <h2> Your Name is {name} </h2>
      <h2> Your Url is {moves} </h2>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="35">35</option>
        <option value="45">45</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
    </>
  );
}

export default CompA;
