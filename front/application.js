import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repositoryCount: 0
    }
  }

  render() {
    return (
      <div className="wrapper">
        <button 
          onClick={() => this.requestSample(this)}>
          りろーど
        </button>
        <div className="repository-count">
          repository count: {this.state.repositoryCount}
        </div>
      </div>
    );
  }

  requestSample(){
    return fetch("http://localhost:3000/top_page/repository_count")
    .then( (response) => {
      response.json().then( (resolve) => {
        console.log(resolve.data.search);
        this.setState({
          repositoryCount: resolve.data.search.repositoryCount
        });
      });
    });
  }
}
render(<App/>, document.getElementById("app"));