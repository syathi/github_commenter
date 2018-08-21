import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <button 
        onClick={this.requestSample}>
        りろーど
      </button>
    );
  }

  requestSample(){
    console.log("reload"); 
  }
}
render(<App/>, document.getElementById("app"));
console.log("hello");