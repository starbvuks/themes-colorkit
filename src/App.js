import React, {useState} from "react";
import "./App.css";
import {AppBar, Toolbar, IconButton, Button, Avatar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

import logo from "./img/ratio-rocket-logo.png";
import strbks from "./img/strbks.png";
import ballGif from "./img/reflect-ball.gif";

import Themes from "./Themes/Themes.jsx";

function App() {
  const [themes, setThemes] = useState("dark");

  const clickHandler = (theme) => {
    setThemes(theme);
  };

  const themeNames = ["dark", "french"];

  return (
    <div className={themes}>
      <AppBar position="static">
        <ToolbarStyled>
          <RightDiv>
            <IconButton
              edge="start"
              className="menuButton"
              aria-label="menu"
              style={{color: "var(--backdrop)"}}
            >
              <MenuIcon />
            </IconButton>
          </RightDiv>
          <ButtonStyled>Home</ButtonStyled>
          <ButtonStyled>About</ButtonStyled>
          <ButtonStyled>Theme</ButtonStyled>
          <ButtonStyled>Login</ButtonStyled>
        </ToolbarStyled>
      </AppBar>
      <CenterView>
        <CenterText>
          <Welcome>Welcome</Welcome>
          <SubText className="typewriter">to my theme kit</SubText>
        </CenterText>
        {/* <LogoBackdrop>
          <CenterLogo src={strbks} alt="logo" />
        </LogoBackdrop> */}
      </CenterView>
      <BottomView>
        {themeNames.map((theme, index) => (
          <Themes key={index} theme={theme} clickHandler={clickHandler} />
        ))}
      </BottomView>
    </div>
  );
}

export default App;

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: var(--bg-nav);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ButtonStyled = styled(Button)`
  color: var(--backdrop);
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const CenterView = styled.div`
  background-color: var(--bg-nav);
  color: white;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: -2;
`;

const CenterText = styled.div`
  padding: 50px;
`;

const Welcome = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: var(--type);
  font-size: 120px;
  margin: 0;
`;

const SubText = styled.p`
  border-right: solid 3px var(--type);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin: 0 0 0 15px;
  color: var(--type);
  white-space: nowrap;
  overflow: hidden;
`;
const CenterLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const LogoBackdrop = styled.div`
  position: relative;
  display: flex;
  background-color: var(--backdrop);
  margin: 10px 0 0 0;
  border-radius: 50%;
  width: 225px;
  height: 225px;
  z-index: 1;
`;

const BottomView = styled.div`
  background-color: var(--bg-bot);
  color: white;
  height: 450px;
  width: 100%;
`;
