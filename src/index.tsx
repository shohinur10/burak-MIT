import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline  from "@mui/material/CssBaseline";
import "./css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme"; // Adjusted path to match the correct file location
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from "./app/context/ContextProvider";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
       <ThemeProvider theme ={theme}> 
        <CssBaseline />
        <Router>
        <App />  
        </Router>
        </ThemeProvider>
      </ContextProvider>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
