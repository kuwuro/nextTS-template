import React from "react";
import styled from "styled-components";

const ExampleContainer = styled.div`
  padding: 1em 2em;
  margin: 2em;
  border: 1px solid #fff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Example = () => {
  return (
    <ExampleContainer>
      <h2>Example component</h2>
      <p>This is an example component.</p>
    </ExampleContainer>
  );
};

export default Example;
