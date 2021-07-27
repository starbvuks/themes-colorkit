import React, {useState} from "react";
import "./App.css";
import {AppBar, Toolbar, IconButton, Button, Avatar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

// import logo from "./img/ratio-rocket-logo.png";
import strbks from "./img/strbks.png";
// import ballGif from "./img/reflect-ball.gif";

import Themes from "./Themes/Themes.jsx";
import Pattern from "./Themes/Pattern.jsx";

function App() {
  const [themes, setThemes] = useState("dark");

  const clickHandler = (theme) => {
    setThemes(theme);
  };

  const themeNames = ["dark", "french", "thirties"];

  return (
    <Main>
      <div className={themes}>
        <AppBar position="static">
          <ToolbarStyled>
            <RightDiv>
              <IconButton
                edge="start"
                className="menuButton"
                aria-label="menu"
                style={{color: "var(--nav-text)"}}
              >
                <Avatar src={strbks} alt="logo" />
              </IconButton>
            </RightDiv>
            <ButtonStyled>Themes</ButtonStyled>
          </ToolbarStyled>
        </AppBar>
        <CenterView>
          <CenterText>
            <Welcome>Welcome</Welcome>
            <SubText className="typewriter">to my theme kit</SubText>
          </CenterText>
          {/* <PatternGroup>
          <Pattern />
        </PatternGroup> */}
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
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: var(--bg-nav);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ButtonStyled = styled(Button)`
  color: var(--nav-text) !important;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const CenterView = styled.div`
  background-color: var(--bg-nav);
  color: white;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: space-between;
  overflow: hidden;
  z-index: -2;
`;

const CenterText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Welcome = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: var(--type);
  font-size: 10vw;

  @media only screen and (max-width: 426px) {
    font-size: 15vw;
  }
`;

const SubText = styled.p`
  border-right: solid 3px var(--type);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0 0 0 15px;
  color: var(--type);
  white-space: nowrap;
  overflow: hidden;
  font-size: 3.2vw;

  @media only screen and (max-width: 426px) {
    font-size: 5vw;
  }
`;

const PatternGroup = styled.div`
  position: relative;
`;

const BottomView = styled.div`
  background-color: var(--bg-bot);
  color: white;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 556px) {
    height: 90vh;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;
