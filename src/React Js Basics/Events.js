// 1.React JS - Events - W3Schols

// import React from "react";

// const Events = () => {
//   const avinash = () => {
//     alert("Hwiuwd");
//   };

//   return (
//     <div>
//       <h1> New Events </h1>
//       <button onClick={avinash}>Click Here</button>
//     </div>
//   );
// };

// export default Events;

// import React from "react";

// const Events = () => {
//   function avinash() {
//     alert("asu8ydg uas absdiubas");
//   }

//   return (
//     <div>
//       <button onClick={avinash}>Click Here</button>
//     </div>
//   );
// };

// export default Events;

// import React from "react";

// const Events = () => {
//   const kick = (a) => {
//     alert(a);
//   };

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <br />
//       <button onClick={() => kick("Avinash")}>Click Here</button>
//     </div>
//   );
// };

// export default Events;

// import React from "react";

// const Events = () => {
//   const shoot = (a, b) => {
//     alert(b.type);
//   };

//   return (
//     <div>
//       <button onClick={(event) => shoot("Goals", event)}>Click Here</button>
//     </div>
//   );
// };

// export default Events;

import React from "react";

const Events = () => {
  const MadeMissed = () => {
    return <h1>Missed </h1>;
  };

  const MadeGoal = () => {
    return <h1>Goal </h1>;
  };

  return (
    <div>
      <h1> Hello World</h1>
    </div>
  );
};

export default Events;
