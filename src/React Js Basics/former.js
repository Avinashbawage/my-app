// // // import React, { useState } from "react";
// // // // Handling the Events

// // // /* import React, { useState } from "react";

// // // const Forms = () => {
// // //   const [name, setName] = useState("asd");

// // //   return (
// // //     <div>
// // //       <form>
// // //         <label>Name:</label>
// // //         <input
// // //           type="text"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //         ></input>
// // //       </form>
// // //       <p> {name} </p>
// // //     </div>
// // //   );
// // // };

// // // export default Forms;
// // //  */

// // // // Submitting Forms

// // // const Former = () => {
// // //   const [name, setName] = useState("");

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     alert(`The name you entered was: ${name}`);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <label>
// // //         Enter your name:
// // //         <input
// // //           type="text"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //         />
// // //       </label>
// // //       <input type="submit" />
// // //     </form>
// // //   );
// // // };

// // // export default Former;

// // // Text Area
// // import React, { useState } from "react";

// // const Former = () => {
// //   const [name, setName] = useState("This the Value");

// //   const handleChange = (e) => {
// //     setName(e.target.value);
// //   };

// //   return (
// //     <div>
// //       <textarea value={name} onChange={handleChange}></textarea>
// //     </div>
// //   );
// // };

// // export default Former;

// // Select
// import React, { useState } from "react";

// const Former = () => {
//   const [myCar, setmyCar] = useState("");

//   const handleChange = (e) => {
//     setmyCar(e.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <select value={myCar} onChange={handleChange}>
//           <option value="Ford">Ford</option>
//           <option value="Volvo" selected>
//             Volvo
//           </option>
//           <option value="Fiat">Fiat</option>
//         </select>
//       </form>
//       <p>You have selected is {myCar}</p>
//     </div>
//   );
// };

// export default Former;
