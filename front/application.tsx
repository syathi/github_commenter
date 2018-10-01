import * as React from "react";
import { render } from "react-dom";

interface IndexProps {}

interface IndexState {
  repositoryCount: number;
  nameWithOwner: string;
  description: string;
  url: string;
}

class App extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps){
    super(props);
    this.state = {
      repositoryCount: 0,
      nameWithOwner: "",
      description: "",
      url:""
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
        <button
          onClick={() => this.getRepositories()}>
          けんさく
        </button>
        <div className="get-repositories">
          repository:
           {this.state.nameWithOwner}
           {this.state.description}
           {this.state.url}
        </div>
      </div>
    );
  }

  getRepositories(){
    return fetch("http://localhost:3000/top_page/get_repositories")
    .then( (response) => {
      response.json().then( (resolve) => {
        console.log(resolve.data.repository);
        this.setState({
          nameWithOwner: resolve.data.repository.nameWithOwner,
          description:   resolve.data.repository.description,
          url:           resolve.data.repository.url
        });
      });
    });
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