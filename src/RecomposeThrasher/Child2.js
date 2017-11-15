import React, { Component } from "react";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

const enhance = onlyUpdateForKeys(["is2Visible"]);

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Child2 being rendered");
    return (
      <section className="child2">
        This is the child1 div, and the value of <strong>is2Visible</strong> is {this.props.is2Visible.toString()}
      </section>
    );
  }
}

export default enhance(Child2);
