import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// theme only works here
import { FluentProvider } from "@fluentui/react-components";
import { theme } from "src/theme";

const app = (
  <FluentProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </FluentProvider>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(app);
ReactDOM.render(app, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
