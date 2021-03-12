import { useStore } from "../StoreContext";
import { useEffect } from "react";

export const Updater = () => {
  const coinsStore = useStore();

  const interval = setInterval(() => {
    coinsStore.updateCoins();
  }, 10000);

  return () => clearInterval(interval);
};
