// if else
import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }
  render() {
    if (this.state.isClicked) {
      return <div>Welcome</div>;
    } else {
    }
    return <div>GoodBye</div>;
  }
}

export default ConditionalRendering;
