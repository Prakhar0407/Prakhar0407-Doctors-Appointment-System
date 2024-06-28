import { render } from 'preact'
import { App } from './app.jsx'
import ReactDom from 'react-dom/client'

export const Context = createContext({
    isAuthenticated: false,
  });
  
  const AppWrapper = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
  
    return (
      <Context.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          user,
          setUser,
        }}
      >
        <App />
      </Context.Provider>
    );
  };
  

rReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
  