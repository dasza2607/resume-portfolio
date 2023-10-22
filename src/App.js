import "./style/main.css"
import "./style/reset.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ScrollToTop from "./utils/scrolToTop"
import Nav from "./components/navbar/nav.js"
import Footer from "./components/footer/footer.js"
import Home from "./pages/Home.js"
import Contacts from "./pages/Contacts.js"
import Projects from "./pages/Projects.js"
import Project from "./pages/Project.js"
import Title from "./helpers/title.js"




function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/resume-portfolio" element={<Title />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Routes>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
