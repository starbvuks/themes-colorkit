import React from "react";

import styled from "styled-components";

function Pattern() {
  return (
    <Container>
      <Row>
        <Dot1></Dot1>
        <Dot2></Dot2>
        <Dot3></Dot3>
      </Row>
      <Row2>
        <Dot1></Dot1>
        <Dot2></Dot2>
        <Dot3></Dot3>
      </Row2>
      <Row3>
        <Dot1></Dot1>
        <Dot2></Dot2>
        <Dot3></Dot3>
      </Row3>
    </Container>
  );
}

export default Pattern;

const Container = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  padding: 0;
`;

const Row = styled.div``;

const Row2 = styled.div``;

const Row3 = styled.div``;

const Dot1 = styled.div`
  width: 75px;
  height: 75px;
  background-color: var(--backdrop);
  margin: 80px 0 0 35vh;
  transform: rotate(-10deg);
  border-radius: 50%;
  z-index: 99;
`;

const Dot2 = styled.div`
  width: 75px;
  height: 75px;
  background-color: var(--type);
  margin: 20px 0 0 38vh;
  transform: rotate(-10deg);
  border-radius: 50%;
  z-index: 99;
`;

const Dot3 = styled.div`
  width: 75px;
  height: 75px;
  background-color: var(--shade1);
  margin: 20px 0 0 41vh;
  transform: rotate(-10deg);
  border-radius: 50%;
  z-index: 99;
`;
