import React, { Component } from "react";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

const enhance = onlyUpdateForKeys(["is3Visible"]);

class Child3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Child3 being rendered");
    return (
      <section className="child3">
        This is the child1 div, and the value of <strong>is2Visible</strong> is {this.props.is3Visible.toString()}
      </section>
    );
  }
}

export default enhance(Child3);
