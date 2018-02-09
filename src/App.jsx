import React, { Component } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";

const styles = {
  night: {
    color: "#fff",
    backgroundColor: "#000"
  },
  day: {
    color: "#000",
    backgroundColor: "#fff"
  }
};

const Headline = styled.h1`
  font-size: 3rem;

  ${({ theme }) =>
    css`
      color: ${styles[theme].color};
      background-color: ${styles[theme].backgroundColor};
    `};
`;

@inject("UiStore")
@observer
class App extends Component {
  render() {
    const { UiStore } = this.props;

    return (
      <div
        className="App"
        onClick={e => {
          e.preventDefault();
          UiStore.toggleTheme();
        }}
      >
        <Headline theme={UiStore.theme}>Hey!</Headline>
      </div>
    );
  }
}

export default App;
