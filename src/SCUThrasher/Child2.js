import React, { Component } from "react";

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(prev) {
    if (prev.is2Visible === this.props.is2Visible) {
      return false;
    }
    return true;
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

export default Child2;
