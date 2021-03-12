import { useStore } from "../StoreContext";

export const Updater = () => {
  const coinsStore = useStore();

  const interval = setInterval(() => {
    //changing state causes page to rerender
    coinsStore.rerender += 1;
  }, 10000);

  return () => clearInterval(interval);
};
