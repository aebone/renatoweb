import React from "react";

class Wisdom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wisdomQuote: "" };
  }

  getWisdomQuote = () => {
    const quote = this.props.wisdomQuotes[
      Math.floor(Math.random() * this.props.wisdomQuotes.length) + 1
    ];
    this.setState({ wisdomQuote: quote });
  };

  render() {
    return (
      <>
        <button onClick={() => this.getWisdomQuote()}>Ver</button>
        <p>{this.state.wisdomQuote}</p>
      </>
    );
  }
}

export default Wisdom;
