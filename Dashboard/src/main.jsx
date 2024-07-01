import ReactDOM from "react-dom/client";
import  App from './app.jsx'
import React, { createContext, useState } from "react";

export const Context = createContext({ isAuthenticated: false });

const Wrapper = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [admin, setAdmin] = useState({});
  
    return (
      <Context.Provider
        value={{isAuthenticated, setIsAuthenticated, admin, setAdmin}}
      >
        <App />
      </Context.Provider>
    );
  };
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Wrapper />
    </React.StrictMode>
  );
  