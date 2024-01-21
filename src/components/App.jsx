import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";
import Layout from "./Layout/Layout";
const Home = lazy(() => import("../pages/Home/Home"));
const Hobbies = lazy(() => import("../pages/Hobbies/Hobbies"));
const Skills = lazy(() => import("../pages/Skills/Skills"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/hobbies"
          element={
            <Suspense fallback={<Loading />}>
              <Hobbies />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
