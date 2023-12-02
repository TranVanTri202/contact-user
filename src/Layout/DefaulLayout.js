import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { darkTheme, lightTheme } from "../components/ModeTheme";

const DefaulLayout = ({ children }) => {

  const [dartMode, setDartMode] = useState(false);
  const handleModeTheme = (mode) => {
    setDartMode(!mode);
  };
  
  return (
    <>
      <ThemeProvider theme={dartMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar modeTheme={handleModeTheme} />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default DefaulLayout;
