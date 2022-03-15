import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

// There are three steps: mounting, updating and unmounting
// Life cycles methods go in sequence
// Initially there is no array so after empty array is updated by componentDidMount, render (updating) is called
// (mounting) contsructor >> (mounting) render >> (mounting) componentDidMount >> (updating) render

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  // DO NOT FORGET return statement in arrow function

  //fetch() comes from window - it comes with browser
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  // Since this is an object (Class compoenent), we have to this when to call onSearchChange

  // Use arrow function to avoid confusion with usage of this and use this.setState to update the state

  // seachField is the text entered and it is saved in searchField
  // robots is an array so you can use built in filter() to look for robots that have name as

  // Why by default if no entry, it displays everything?
  // initial state is "" - no spacing which is included in every name
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  // robot.name is a long string eg "hello world, welcome to paradise"
  // input string maybe "hello" so you can include to check if "hello" is included in robot.name

  // CardList is a child of Scroll Component because cardlist is wrapped by scroll components

  // this.state.robots.length === 0. for 0, you can do !(this.state.robots.length)

  // You can use ternery operator
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="f1 tc">Loading..</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;

// Functional Components METHOD:

// const state = {
//     robots: robots,
//     searchField: ''
// }

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

// export default App;
