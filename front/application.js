import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <button 
          onClick={this.requestSample}>
          りろーど
        </button>
      </div>
    );
  }

  requestSample(){
    return fetch("http://localhost:3000/top_page/repository_count")
    .then( (response) => {
      response.json().then( (resolve) => {
        console.log(resolve);
      });
    });
  }
}
render(<App/>, document.getElementById("app"));