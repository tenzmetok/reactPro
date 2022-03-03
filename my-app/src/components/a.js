//JSX
//import React from "react";
//Embedding Expressions in JSX
// const name = "abc def";
// const element = <h1>Hello, {name}</h1>;
// export default element;

//2a You can put any valid JavaScript expression inside the curly braces in JSX.
// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: "abc",
//   lastName: "def",
// };

// const element = <h1>Hello, {formatName(user)}!</h1>;
// export default element;

//3a JSX inside of if statements and for loops

// function formatName(user) {
//   return user.name;
// }
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// export default getGreeting;

//4a Specifying Attributes with JSX
// const element = <a href="https://www.reactjs.org"> link </a>;
// export default element;

//5a Specifying Children with JSX
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );
// export default element;

//6a JSX Represents Objects
// const element = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello, world!"
// );
// export default element;
