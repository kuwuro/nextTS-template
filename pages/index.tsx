import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Home = () => {
  return (
    <Container>
      <h1>Hello, World!</h1>
    </Container>
  );
};

export default Home;
