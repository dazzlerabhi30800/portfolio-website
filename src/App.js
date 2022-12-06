import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import AboutSection from "./Components/AboutSection";
import Project from "./Components/Project";
import ScrollTopButton from "./Components/ScrollTopButton";
import data from "./Components/ProjectCardData";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const [filterProjects, setFilterProjects] = useState([]);
  const [level, setLevel] = useState("all");
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    changeTheme();
  }, [theme]);

  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    if (themeLocal) {
      setTheme(themeLocal);
    }
  }, []);

  useEffect(() => {
    handleLevel();
  }, [level]);

  const changeTheme = () => {
    if (theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  const handleLevel = () => {
    switch (level) {
      case "newbie":
        setFetch(true);
        setFilterProjects(data.filter((item) => item.level === "newbie"));
        setTimeout(() => {
          setFetch(false);
        }, 1000);
        break;
      case "junior":
        setFetch(true);
        setFilterProjects(data.filter((item) => item.level === "junior"));
        setTimeout(() => {
          setFetch(false);
        }, 1000);
        break;
      case "intermediate":
        setFetch(true);
        setFilterProjects(data.filter((item) => item.level === "intermediate"));
        setTimeout(() => {
          setFetch(false);
        }, 1000);
        break;
      default:
        setFetch(true);
        setFilterProjects(data);
        setTimeout(() => {
          setFetch(false);
        }, 1000);
        break;
    }
  };

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <FirstSection />
        <AboutSection />
        <Project
          data={data}
          setLevel={setLevel}
          filterProjects={filterProjects}
          fetch={fetch}
        />
        <ScrollTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
