import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
//import json from "../data.json";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // robots: robots,
      robots: [],
      searchfield: " "
    };
  }

  //onsearchChange(event) { // this will cant  read state.  use es6 function.  beacuse without this setstate wont work
  onsearchChange = event => {
    // console.log(event.target.value);

    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
        //  console.log("total data: " + Object.keys(json).length);
        // console.log("total data: last " + json[9594].name);
      });
  }
  render() {
    const filter_Robots = this.state.robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox search_Change={this.onsearchChange} />
        <Scroll>
          <CardList robots={filter_Robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
