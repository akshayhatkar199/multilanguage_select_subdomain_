import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./pages/contact";
import Aboutus from "./pages/about";
import Home from "./pages/home";
import Subdomaincreating from "./component/Subdomaincreating/index";
import Fromstore from "./component/Fromstore/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/" element={<Subdomaincreating />} />
        <Route path="/Fromstore" element={<Fromstore />} />
      </Routes>
    </div>
  );
}

export default App;
