import React, {useState} from "react";
import "./App.css";
import {AppBar, Toolbar, IconButton, Button, Avatar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

import logo from "./img/ratio-rocket-logo.png";

import Themes from "./Themes/Themes.jsx";

function App() {
  const [themes, setThemes] = useState("dark");

  const clickHandlerDark = () => {
    setThemes("dark");
  };
  const clickHandlerFrench = () => {
    setThemes("french");
  };

  return (
    <div className={themes}>
      <AppBar position="static">
        <ToolbarStyled>
          <RightDiv>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Avatar alt="Logo" src={logo} />
          </RightDiv>
          <ButtonStyled>Home</ButtonStyled>
          <ButtonStyled>About</ButtonStyled>
          <ButtonStyled>Theme</ButtonStyled>
          <ButtonStyled>Login</ButtonStyled>
        </ToolbarStyled>
      </AppBar>
      <CenterView>
        <Welcome>Welcome</Welcome>
        <CenterLogo src={logo} alt="logo" />
        <LogoBackdrop></LogoBackdrop>
        <SubText>to my site</SubText>
      </CenterView>
      <BottomView>
        <Themes
          clickHandlerDark={clickHandlerDark}
          clickHandlerFrench={clickHandlerFrench}
        />
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
  align-items: center;
  z-index: -2;
`;

const Welcome = styled.h1`
  color: var(--type);
  font-size: 80px;
  margin: 0;
`;

const CenterLogo = styled.img`
  width: 15%;
  object-fit: cover;
  z-index: 2;
`;

const LogoBackdrop = styled.div`
  background-color: var(--backdrop);
  position: absolute;
  margin: 110px 0 0 0;
  border-radius: 50%;
  width: 225px;
  height: 225px;
  z-index: 1;
`;

const SubText = styled.span`
  font-size: 40px;
  font-weight: bold;
  padding: 15px;
  color: var(--type);
`;

const BottomView = styled.div`
  background-color: var(--bg-bot);
  color: white;
  height: 450px;
  width: 100%;
`;
