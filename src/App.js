import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import FirstSection from './Components/FirstSection';
import AboutSection from './Components/AboutSection';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstSection />
        <AboutSection />
        <Project />
      </main>
    </div>
  );
}

export default App;
