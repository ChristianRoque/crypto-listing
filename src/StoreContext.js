import React from "react";
import { useLocalObservable } from "mobx-react";
import { createCoinStore } from "./coinStore";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const coinsStore = useLocalObservable(createCoinStore);

  return (
    <StoreContext.Provider value={coinsStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
