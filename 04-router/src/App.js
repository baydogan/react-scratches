import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Navbar</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={"/About"}>About</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
