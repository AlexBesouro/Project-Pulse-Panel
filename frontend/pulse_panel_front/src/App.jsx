import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import "./App.css";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Route>
            </Routes>
        </Suspense>
    );
}

export { App };
