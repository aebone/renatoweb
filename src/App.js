import React from "react";
import Wisdom from "./Wisdom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/Themes";
import { GlobalStyles } from "./style/GlobalStyles";
const axios = require("axios").default;
const URL =
  "https://raw.githubusercontent.com/alinebone/MinutesOfWisdomAPI/master/minutesOfWisdom.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wisdomQuotes: [], theme: "light" };
    this.getWisdom();
  }

  getWisdom = () => {
    axios
      .get(URL)
      .then((response) => this.setState({ wisdomQuotes: response.data }))
      .catch((error) => console.error(`Wisdom not received: ${error}`));
  };

  changeTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <button onClick={this.changeTheme}>
          {this.state.theme === "light"
            ? "Switch to Dark Theme"
            : "Switch to Light Theme"}
        </button>
        <h1>Oi, Renato</h1>
        <h2>Que estes ensinamentos te tragam paz</h2>
        <Wisdom wisdomQuotes={this.state.wisdomQuotes} />
      </ThemeProvider>
    );
  }
}

export default App;
