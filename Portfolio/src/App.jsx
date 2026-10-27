//~path Importing modules
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//& ================================================
//~path Importing components
import { Home } from "./pages/home";
import { Connections } from "./pages/connections";
import { Socials } from "./pages/socials";
import { Info } from "./pages/info";
import { Layout } from "./components/layout";

//& ================================================
//~path Importing Styles
import "./css/index.css";
import "./css/animations.css";
import "./css/components.css";
import "./css/layout.css";
import "./css/responsive.css";

//& ================================================

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout/>}>

          <Route path="/" element={<Home />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/info" element={<Info />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;