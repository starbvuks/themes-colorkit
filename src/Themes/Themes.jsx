import React from "react";
import {Card, CardContent, ButtonBase} from "@material-ui/core";

import styled from "styled-components";

function Themes(props) {
  return (
    <Main>
      <ButtonBase onClick={() => props.clickHandler(props.theme)}>
        <CardStyled variant="outlined">
          <CardContentStyled>
            <Theme>{props.theme}</Theme>
          </CardContentStyled>
        </CardStyled>
      </ButtonBase>
    </Main>
  );
}

export default Themes;

const Main = styled.div`
  padding: 75px;

  @media only screen and (max-width: 556px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
  }
  @media only screen and (min-width: 556px) and (max-width: 885px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 8vw 5vw 0 5vw;
  }
`;

const CardStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10%;
  border: none;
  background-color: var(--bg-nav) !important;
  box-shadow: var(--shadow);

  @media only screen and (max-width: 734px) {
    font-size: 3vw;
    margin-right: 0;
  }
`;

const CardContentStyled = styled(CardContent)``;

const Theme = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: var(--nav-text);
  padding: 10px;

  @media only screen and (max-width: 734px) {
    font-size: 5vw;
  }
`;
