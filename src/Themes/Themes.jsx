import React from "react";
import {Card, CardContent, ButtonBase} from "@material-ui/core";

import styled from "styled-components";

function Themes(props) {
  return (
    <Main>
      <CardStyled variant="outlined">
        <ButtonBase onClick={() => props.clickHandlerDark()}>
          <CardContentStyled>
            <Theme>Dark</Theme>
          </CardContentStyled>
        </ButtonBase>
      </CardStyled>
      <CardStyled variant="outlined">
        <ButtonBase onClick={() => props.clickHandlerFrench()}>
          <CardContentStyled>
            <Theme>French</Theme>
          </CardContentStyled>
        </ButtonBase>
      </CardStyled>
    </Main>
  );
}

export default Themes;

const Main = styled.div`
  padding: 50px;
  display: flex;
`;

const CardStyled = styled(Card)`
  width: 12%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10%;
  background-color: var(--bg-nav);
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
`;

const CardContentStyled = styled(CardContent)``;

const Theme = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: var(--type);
`;
