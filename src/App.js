import React from "react";
import NavBar from "./NavBar";
import ContainedButtons from "./button1";
import GeneralTheme from "./GeneralTheme";
import { ThemeProvider } from "@material-ui/core";
function App() {
  return (
    <div>
      <ThemeProvider theme={GeneralTheme}>
        <NavBar />
        <ContainedButtons />
      </ThemeProvider>
    </div>
  );
}

export default App;
