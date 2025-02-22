import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Keep Bootstrap import
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Ensure routing works
import App from "./App";
import "./assets/styles/index.css"; // ✅ Keep the correct import path

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Ensure BrowserRouter wraps App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

);


