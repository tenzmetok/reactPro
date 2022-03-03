// inline if with logical && operator
import React, { Component } from "react";

class ConditionalRendering4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
    };
  }
  render() {
    return this.state.isClicked && <div>Welcome</div>;
  }
}
export default ConditionalRendering4;
