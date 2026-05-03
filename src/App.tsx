import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import { About, Contact, Home, Projects } from "./pages";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <nav>
          <Link to={"/"}></Link>
          <Link to={"/projects"}></Link>
          <Link to={"/about"}></Link>
          <Link to={"/contact"}></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
