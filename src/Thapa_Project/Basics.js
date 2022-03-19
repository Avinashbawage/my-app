import React from "react";

const Basics = () => {
  return (
    <div>
      <Nextcomp />
      <Newdata />
      <h1> Hello Thapa </h1>
      <Nextcomp />
      <Newdata />
    </div>
  );
};

const Nextcomp = () => {
  return (
    <>
      <h1>Hello Avinash </h1>
    </>
  );
};

const Newdata = () => {
  return <div>project1</div>;
};

export default Basics;
