import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.scss";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserContext";
import { ActiveBudgetProvider } from "./context/ActiveBudgetContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ActiveBudgetProvider>
          <App />
        </ActiveBudgetProvider>
      </UserProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
