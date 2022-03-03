// using element variables
import React, { Component } from "react";

class ConditionalRendering2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
    };
  }
  render() {
    let messg;
    if (this.state.isClicked) {
      messg = <div>Welcome</div>;
    } else {
      messg = <div>GoodBye</div>;
    }
    return <div>{messg}</div>;
  }
}
export default ConditionalRendering2;
