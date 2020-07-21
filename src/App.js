import React from "react";
import Wisdom from "./Wisdom";
const axios = require("axios").default;
const URL =
  "https://raw.githubusercontent.com/alinebone/MinutesOfWisdomAPI/master/minutesOfWisdom.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wisdomQuotes: [] };
    this.getWisdom();
  }

  getWisdom = () => {
    axios
      .get(URL)
      .then((response) => this.setState({ wisdomQuotes: response.data }))
      .catch((error) => console.error(`Wisdom not received: ${error}`));
  };

  render() {
    return (
      <>
        <h1>Oi, Renato</h1>
        <h2>Que estes ensinamentos te tragam paz</h2>
        <Wisdom wisdomQuotes={this.state.wisdomQuotes} />
      </>
    );
  }
}

export default App;
