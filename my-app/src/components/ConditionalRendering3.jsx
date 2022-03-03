//ternary operator : can be used inside jsx
import React, { Component } from "react";

class ConditionalRendering3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
    };
  }
  render() {
    return this.state.isClicked ? <div>Welcome</div> : <div>GoodBye</div>;
  }
}
export default ConditionalRendering3;
