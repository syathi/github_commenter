import * as React from "react";
import { render } from "react-dom";

interface IndexProps {}

interface IndexState {
  repositoryCount: number;
  
}

class App extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps){
    super(props);
    this.state = {
      repositoryCount: 0
    }
  }

  render() {
    return (
      <div className="wrapper">
        <button 
          onClick={() => this.requestSample()}>
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