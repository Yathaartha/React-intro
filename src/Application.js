import React, { Component } from "react";
import HighScore from "./HighScore";
import "./css/style.css";

class Application extends Component {
  constructor(props) {
    //does not run everytime Application is called
    super(props);

    this.state = {
      //removes useless constructor error
      count: 0,
      overTen: false,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // componentWillMount(props, state) {}

  // componentDidMount(props, state) {
  //   console.log("Mounted With ", props, state);
  // }

  // componentWillReceiveProps(props) {}

  // componentWillUpdate(props, state) {
  //   if (this.props.name !== props.name) {
  //     // do sth
  //   }
  // }

  componentDidUpdate(props, state) {
    //everytime the button is clicked this runs
    // console.log("Updated from", state, " to ", this.state);
    // this.setState({ count: this.state.count + 1 }); //sth stupid to do
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      console.log("Updating overTen");
      this.setState({ overTen: true });
    }
  }

  resetCount = (e) => {
    console.log("event is ", e);
    this.setState({
      count: 0,
      overTen: false,
    });
  };

  render() {
    let { count } = this.state;

    return (
      <div>
        <h1>You clicked the button {count} times.</h1>
        <HighScore overTen={this.state.overTen} onReset={this.resetCount} />
        <span>
          <button onClick={() => this.handleClick()}>Click Me!</button>
        </span>
      </div>
    );
  }
}

export default Application;
