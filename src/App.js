import "./App.scss";
import milkyway from "./milkyway.jpeg";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/naveBar";
function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${milkyway})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const location = useLocation();
  const renderBackGround = location.pathname === "/";

  return (
    <div className="App" style={renderBackGround ? backgroundImageStyle : null}>
      <Navbar />
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
