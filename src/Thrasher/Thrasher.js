import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

class Thrasher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Thrasher being rendered");
    return (
      <section className="thrasher">
        {this.props.toggled && <div>I am toggled now!</div>}
        <Child1 {...this.props} />
        <button onClick={this.props.onClick1}>Click 1</button>
        <Child2 {...this.props} />
        <button onClick={this.props.onClick2}>Click 2</button>
        <Child3 {...this.props} />
        <button onClick={this.props.onClick3}>Click 3</button>
      </section>
    );
  }
}

export default Thrasher;
