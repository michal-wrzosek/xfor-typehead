import React, { Component } from "react";
import styled from "styled-components";

import ExampleForm from "./ExampleForm";

const StyledDiv = styled.div`
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <ExampleForm />
      </StyledDiv>
    );
  }
}

export default App
