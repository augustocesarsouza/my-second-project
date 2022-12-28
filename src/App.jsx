import React, { useContext } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexo ',
  counter: 0,
};

const GlobalContext = React.createContext()

const Div = ({ children }) => {
  return <H1 />
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  return <h1>{theContext.title}</h1>
};

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;