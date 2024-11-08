import { useContext, useEffect, useState } from "react";
import "./App.css";
import ThemeContext from "./ThemeContext.js";
import WelcomePage from "./Components/WelcomePage.jsx";
function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <>
      <div className={`${theme} h-screen w-screen`}>
        <WelcomePage theme={theme} handleThemeChange={handleThemeChange} />
      </div>
    </>
  );
}

export default App;
