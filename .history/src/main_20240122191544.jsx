import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//css in js
import styled from "styled-components";
//可以直接调用
import { ClickToComponent } from "click-to-react-component";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ClickToComponent />
  </React.StrictMode>,
);
