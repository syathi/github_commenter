import * as React from "react";
import { render } from "react-dom";

interface IndexProps {}

interface IndexState {
  repositoryCount: number;
  nameWithOwner: string;
  description: string;
  url: string;
  name: string;
  owner: string;
  directory: Array<String>;
}

class App extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps){
    super(props);
    this.state = {
      repositoryCount: 0,
      nameWithOwner: "",
      description: "",
      url:"",
      name: "",
      owner: "",
      directory: []
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOwnerChange= this.handleOwnerChange.bind(this);
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
        <div id="searchForm">
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          <input type="text" value={this.state.owner} onChange={this.handleOwnerChange} />
          <button
            onClick={() => this.getRepositories()}>
            けんさく
          </button>
        </div>
        <div className="get-repositories">
          repository:
           <div><button onClick={() => this.getRepositoryFiles()}>{this.state.nameWithOwner}</button></div>
           <div id="description">{this.state.description}</div>
           <a href={this.state.url} id="url">{this.state.url}</a>
        </div>
      </div>
    );
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleOwnerChange(event){
    this.setState({owner: event.target.value});
  }

  getRepositories(){
    const query: string = "name=" + this.state.name + "&owner=" + this.state.owner; 
    return fetch("http://localhost:3000/top_page/get_repositories?" + query)
    .then( (response) => {
      response.json().then( (resolve) => {
        if (resolve.data.repository !== null) {
          this.setState({
            nameWithOwner: resolve.data.repository.nameWithOwner,
            description:   resolve.data.repository.description,
            url:           resolve.data.repository.url
          });
        } else {
          this.setState({
            nameWithOwner: "なにもないよ",
            description: "",
            url: ""
          });
        }
      });
    });
  }

  getRepositoryFiles(){
    const query: string = "hoge";
    return fetch("http://localhost:3000/top_page/get_repository_files?directory=" + query)
    .then( (response) => {
      response.json().then( (resolve) => {
        if (resolve.directory !== null) {
          this.setState({
            directory: [resolve.directory]
          });
          console.log(resolve.directory);
        } else {
          this.setState({
            directory: ["なにもないよ"]
          });
          console.log("なにもないよ");
        }
      });
    })
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