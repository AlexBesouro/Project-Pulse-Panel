import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import "./App.css";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Panels = lazy(() => import("./pages/Panels"));
const Sources = lazy(() => import("./pages/Sources"));
const Widgets = lazy(() => import("./pages/Widgets"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/panels" element={<Panels />}></Route>
                    <Route path="/widgets" element={<Widgets />}></Route>
                    <Route path="/sources" element={<Sources />}></Route>
                    <Route path="/settings" element={<Settings />}></Route>
                </Route>
            </Routes>
        </Suspense>
    );
}

export { App };
