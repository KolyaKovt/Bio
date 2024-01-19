import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Hobbies from "../pages/Hobbies/Hobbies";
import Skills from "../pages/Skills/Skills";
import Portfolio from "../pages/Portfolio/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default App;
