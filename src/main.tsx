import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SimpleView from "./components/SimpleView.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleView />} />
        <Route path="/flashy" element={<App />} />
      </Routes>
    </BrowserRouter>{" "}
  </StrictMode>
);