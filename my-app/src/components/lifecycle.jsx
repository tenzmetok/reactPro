import React, { Component } from "react";
import Lifecycle2 from "./lifecycle2";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tenzin",
    };
    console.log("lifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }
  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>lifecycle A</div>;
        <Lifecycle2 />
      </div>
    );
  }
}

export default Lifecycle;
