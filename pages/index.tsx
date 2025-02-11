import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Example from "components/Example";

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222222;
  color: #fff;
  font-family: "DM Sans", sans-serif;

  h1 {
    padding-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 3rem;
  }
`;

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Hello world</title>
      </Head>
      <h1>Hello, world!</h1>
      <p>This is a template for new projects.</p>
      <Example />
    </Container>
  );
};

export default Home;
