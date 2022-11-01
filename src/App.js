import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import AboutSection from "./Components/AboutSection";
import Project from "./Components/Project";
import ScrollTopButton from "./Components/ScrollTopButton";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    changeTheme();
  }, [theme]);

  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    if (themeLocal) {
      setTheme(themeLocal);
    }
  });

  const changeTheme = () => {
    if (theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <FirstSection />
        <AboutSection />
        <Project />
        <ScrollTopButton />
      </main>
    </div>
  );
}

export default App;
