import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi.js";

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
