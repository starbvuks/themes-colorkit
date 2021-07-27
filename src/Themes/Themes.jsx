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
  padding: 75px 50px 0 50px;

  @media only screen and (max-width: 426px) {
    display: flex;
    justify-content: center;
    padding: 40px;
  }
`;

const CardStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
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
