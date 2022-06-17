import React from 'react';
import useInitialState from '../hooks/useInitialState';

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={useInitialState()}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
