import "./App.css";

import Home from "./pages/home/Home"
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import NavBar from "./components/NavBar";
import Recipe from "./pages/recipe/Recipe";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
