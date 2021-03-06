import React, { useState, useLayoutEffect } from "react";

import "./App.css";
import { servicesMetadata, metricsMetadata } from "./data/SocialServicesData";

import DashboardHeader from "./components/DashboardHeader";
import OverviewWidget from "./components/OverviewWidget";
import MetricsWidget from "./components/MetricsWidget";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.bg-top{
  background-color: ${(props) =>
      props.theme.darkMode === true
          ? "hsl(232, 19%, 15%)"
          : "hsl(225, 100%, 98%)"};
  height: 300px;
}
.bg{
  background-color: ${(props) =>
      props.theme.darkMode === true ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"}
}
.text-primary{
  color:${(props) =>
      props.theme.darkMode === true ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"}
}
.text-secondary{
  color:${(props) =>
      props.theme.darkMode === true
          ? "hsl(228, 34%, 66%)"
          : "hsl(228, 12%, 44%)"}
}
.card{
  background-color: ${(props) =>
      props.theme.darkMode === true
          ? "hsl(228, 28%, 20%)"
          : "hsl(227, 47%, 96%)"}
}
.cards-overview-container{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-top:30px
}
.metrics-section-header{
  text-align:left;
  margin-top:40px;
}
.cards-metrics-container{
  display:flex;
  justify-content:center;
  flex-wrap:wrap
}
`;
const localStorageKey = "social-dashboard-theme";
const getSavedDarkModeValue = () => {
    let initialDarkMode;
    try {
        initialDarkMode = JSON.parse(localStorage.getItem(localStorageKey))
            .darkMode;
    } catch (e) {
        initialDarkMode = false;
    }

    return initialDarkMode;
};

function App() {
    const [darkMode, setDarkMode] = useState(getSavedDarkModeValue());

    const onDarkModeChanged = () => {
        setDarkMode((prevValue) => {
            const newValue = !prevValue;
            localStorage.setItem(
                localStorageKey,
                JSON.stringify({ darkMode: newValue })
            );
            return newValue;
        });
    };

    useLayoutEffect(() => {
        const switchPrimaryColor = darkMode
            ? "linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))"
            : "hsl(230, 22%, 74%)";
        const switchElement = document.getElementsByClassName(
            "MuiSwitch-track"
        )[0];
        switchElement.style.background = switchPrimaryColor;

        const switchSecondaryColor = darkMode
            ? "hsl(228,28%,20%)"
            : "hsl(227,47%,96%)";
        const switchButton = document.getElementsByClassName(
            "MuiSwitch-thumb"
        )[0];
        switchButton.style.background = switchSecondaryColor;
    }, [darkMode]);
    return (
        <ThemeProvider theme={{ darkMode }}>
            <GlobalStyle />
            <div className="bg-top"></div>
            <div className="bg">
                <div className="App">
                    <div>
                        <DashboardHeader
                            darkMode={darkMode}
                            onDarkModeChanged={onDarkModeChanged}
                        />
                    </div>
                    <OverviewWidget servicesMetadata={servicesMetadata} />

                    <div className="metrics-section-header">
                        <h1
                            className={
                                darkMode === true
                                    ? "text-primary"
                                    : "text-secondary"
                            }
                        >
                            Overview - Today
                        </h1>
                    </div>
                    <MetricsWidget metricsMetadata={metricsMetadata} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
