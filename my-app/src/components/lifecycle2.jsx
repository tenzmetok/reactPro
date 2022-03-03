import React, { Component } from "react";

class Lifecycle2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tenzin",
    };
    console.log("lifecycleB  constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }
  render() {
    console.log("lifecycleB render");
    return <div>lifecycle B</div>;
  }
}

export default Lifecycle2;
