import { createContext } from 'react';
import './App.scss';
import Page from './components/Page/Page';

const theme = {
  gray: "#eeeeee",
  blue: "#4082bf",
};

export const ThemeContext = createContext();

const  App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className="app">
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
