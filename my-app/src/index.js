import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import "./index.css";
//import element from "./a";
//import element from "./b";
//import Comment from "./b";
//import listItems from "./c";
//import Lifecycle from "./lifecycle";
//import Numlist from "./list&Keys";

//import NumberList from "./components/List2";

//1.hello world
//ReactDOM.render(<h2>hello world</h2>, document.getElementById("root"));

//2a
//ReactDOM.render(<h1>{element}</h1>, document.getElementById("root"));

//3a
// const user = {
//   name: "tenzin",
// };
// ReactDOM.render(<h1>{element(user)}</h1>, document.getElementById("root"));

//4a5a
//ReactDOM.render(<h1>{element}</h1>, document.getElementById("root"));

//render
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000);

//1b
//ReactDOM.render(<h1>{element}</h1>, document.getElementById("root"));

//2b
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("root"));

//3b
//ReactDOM.render(<Comment />, document.getElementById("root"));
// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));

//extracting components
// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "http://placekitten.com/g/64/64",
//   },
// };
// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));

//ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));

//ReactDOM.render(<Lifecycle />, document.getElementById("root"));

// const number = [1, 2, 3, 4, 5];
// ReactDOM.render(<Numlist num={number} />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );
