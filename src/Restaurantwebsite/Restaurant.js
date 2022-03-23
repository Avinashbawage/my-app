import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi.js";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currentEle) => {
      return currentEle.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
