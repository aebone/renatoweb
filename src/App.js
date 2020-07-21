import React from "react";
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
      <div>
        <h1>Renato</h1>
      </div>
    );
  }
}

export default App;
