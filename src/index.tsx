import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { HomeProvider } from "./Pages/Home/context";
import { ModalProvider } from "./Component/ModalComponent/context";
import { QuizProvider } from "./Pages/Quiz/context";
import { ThemeProvider } from "./Component/Navbar/context";
// import { NameProvider } from "./Component/ModalComponent/context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <QuizProvider>
        <ModalProvider>
          <HomeProvider>
            <App />
          </HomeProvider>
        </ModalProvider>
      </QuizProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
