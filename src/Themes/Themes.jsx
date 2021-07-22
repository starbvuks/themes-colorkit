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
  padding: 50px;
  display: inline-flex;
`;

const CardStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10%;
  background-color: var(--bg-nav);
  box-shadow: var(--shadow);
`;

const CardContentStyled = styled(CardContent)``;

const Theme = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: var(--backdrop);
  padding: 10px;
`;
