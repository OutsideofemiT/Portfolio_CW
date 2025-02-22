import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import ReactDOM correctly
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/index.css"; // Ensure correct import path

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


