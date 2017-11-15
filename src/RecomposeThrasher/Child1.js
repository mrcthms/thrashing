import React, { Component } from "react";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

const enhance = onlyUpdateForKeys(["is1Visible"]);

class Child1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Child1 being rendered");
    return (
      <section className="child1">
        This is the child1 div, and the value of <strong>is1Visible</strong> is {this.props.is1Visible.toString()}
      </section>
    );
  }
}

export default enhance(Child1);
